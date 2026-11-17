/*
 * Predittore delle mosse dell'AI (singolo) per EKalc.
 *
 * Replica il punteggio delle mosse di pokeemerald-expansion 1.12 usato dalla ROM
 * (src/battle_ai_main.c / src/battle_ai_util.c) con i flag degli allenatori della hack:
 *   Check Bad Move / Try To Faint / Check Viability (+ Prefer Highest Damage Move) / HP Aware
 *
 * - Ogni mossa parte da 100 punti; i flag vengono applicati in ordine e una mossa con punteggio
 *   <= 0 non viene piu valutata (come BattleAI_DoAIProcessing).
 * - L'AI vede il danno con il roll "mediano" (93%, il 9° dei 16 roll): result.damage[8].
 * - Vince il punteggio piu alto; a parita sceglie a caso (Random() % numOfBestMoves).
 * - Le poche parti casuali (Protect, cure, cali di statistiche...) vengono simulate con
 *   estrazioni ripetute, cosi le percentuali tengono conto di tutto.
 *
 * I dati delle mosse (EFFECT_*, effetti aggiuntivi, flag) arrivano da js/data/ai_moves.js,
 * generato da bat/generate_ai_moves.py a partire da src/data/moves_info.h.
 */
(function () {
	'use strict';

	var SAMPLES = 2000;
	var UNKNOWN_HITS = 1e9;

	// AIScore
	var WEAK_EFFECT = 1, DECENT_EFFECT = 2, GOOD_EFFECT = 3, BEST_EFFECT = 4;
	var BEST_DAMAGE_MOVE = 1, NO_DAMAGE_OR_FAILS = -20;
	var FAST_KILL = 6, SLOW_KILL = 4, LAST_CHANCE = 2;

	// ---------------------------------------------------------------------------------------
	// Tabelle di supporto
	// ---------------------------------------------------------------------------------------
	var HOLD_EFFECTS = {
		'choiceband': 'CHOICE_BAND', 'choicespecs': 'CHOICE_SPECS', 'choicescarf': 'CHOICE_SCARF',
		'focussash': 'FOCUS_SASH', 'lightclay': 'LIGHT_CLAY', 'bigroot': 'BIG_ROOT',
		'heatrock': 'HEAT_ROCK', 'damprock': 'DAMP_ROCK', 'smoothrock': 'SMOOTH_ROCK', 'icyrock': 'ICY_ROCK',
		'lumberry': 'CURE_STATUS', 'chestoberry': 'CURE_SLP', 'pechaberry': 'CURE_PSN', 'rawstberry': 'CURE_BRN',
		'cheriberry': 'CURE_PAR', 'persimberry': 'CURE_CONFUSION', 'aspearberry': 'CURE_FRZ',
		'mentalherb': 'MENTAL_HERB', 'clearamulet': 'CLEAR_AMULET', 'covertcloak': 'COVERT_CLOAK',
		'utilityumbrella': 'UTILITY_UMBRELLA', 'safetygoggles': 'SAFETY_GOGGLES', 'rockyhelmet': 'ROCKY_HELMET',
		'protectivepads': 'PROTECTIVE_PADS', 'powerherb': 'POWER_HERB', 'whiteherb': 'WHITE_HERB',
		'leftovers': 'LEFTOVERS', 'blacksludge': 'BLACK_SLUDGE', 'laggingtail': 'LAGGING_TAIL', 'fullincense': 'LAGGING_TAIL',
		'ironball': 'IRON_BALL', 'scopelens': 'SCOPE_LENS', 'razorclaw': 'SCOPE_LENS', 'terrainextender': 'TERRAIN_EXTENDER',
		'shedshell': 'SHED_SHELL', 'abilityshield': 'ABILITY_SHIELD', 'toxicorb': 'TOXIC_ORB', 'flameorb': 'FLAME_ORB',
		'stickybarb': 'STICKY_BARB', 'blunderpolicy': 'BLUNDER_POLICY', 'airballoon': 'AIR_BALLOON',
		'ejectbutton': 'EJECT_BUTTON', 'ringtarget': 'RING_TARGET', 'throatspray': 'THROAT_SPRAY', 'metronome': 'METRONOME',
		'liechiberry': 'PINCH', 'ganlonberry': 'PINCH', 'salacberry': 'PINCH', 'petayaberry': 'PINCH',
		'apicotberry': 'PINCH', 'lansatberry': 'PINCH', 'starfberry': 'PINCH', 'custapberry': 'PINCH', 'micleberry': 'PINCH'
	};
	var MOLD_BREAKERS = ['moldbreaker', 'teravolt', 'turboblaze'];
	var STAT_UP_EFFECTS = toSet('ATTACK_UP ATTACK_UP_2 DEFENSE_UP DEFENSE_UP_2 DEFENSE_UP_3 SPEED_UP SPEED_UP_2 SPECIAL_ATTACK_UP SPECIAL_ATTACK_UP_2 SPECIAL_ATTACK_UP_3 SPECIAL_DEFENSE_UP SPECIAL_DEFENSE_UP_2 ACCURACY_UP ACCURACY_UP_2 EVASION_UP EVASION_UP_2 MINIMIZE DEFENSE_CURL CALM_MIND COSMIC_POWER DRAGON_DANCE ACUPRESSURE SHELL_SMASH SHIFT_GEAR ATTACK_ACCURACY_UP ATTACK_SPATK_UP GROWTH COIL QUIVER_DANCE BULK_UP GEOMANCY STOCKPILE VICTORY_DANCE CHARGE');
	var STAT_DOWN_EFFECTS = toSet('ATTACK_DOWN DEFENSE_DOWN SPEED_DOWN SPECIAL_ATTACK_DOWN SPECIAL_DEFENSE_DOWN ACCURACY_DOWN EVASION_DOWN ATTACK_DOWN_2 DEFENSE_DOWN_2 SPEED_DOWN_2 SPECIAL_ATTACK_DOWN_2 SPECIAL_DEFENSE_DOWN_2 ACCURACY_DOWN_2 EVASION_DOWN_2 TICKLE CAPTIVATE NOBLE_ROAR MEMENTO');
	var HP_AWARE_MED_TARGET = toSet('ATTACK_UP ATTACK_UP_USER_ALLY DEFENSE_UP SPEED_UP SPECIAL_ATTACK_UP SPECIAL_DEFENSE_UP ACCURACY_UP EVASION_UP ATTACK_DOWN DEFENSE_DOWN SPEED_DOWN SPECIAL_ATTACK_DOWN SPECIAL_DEFENSE_DOWN ACCURACY_DOWN EVASION_DOWN MIST FOCUS_ENERGY ATTACK_UP_2 DEFENSE_UP_2 SPEED_UP_2 SPECIAL_ATTACK_UP_2 SPECIAL_DEFENSE_UP_2 ACCURACY_UP_2 EVASION_UP_2 ATTACK_DOWN_2 DEFENSE_DOWN_2 SPEED_DOWN_2 SPECIAL_ATTACK_DOWN_2 SPECIAL_DEFENSE_DOWN_2 ACCURACY_DOWN_2 EVASION_DOWN_2 PAIN_SPLIT PERISH_SONG SAFEGUARD TICKLE COSMIC_POWER BULK_UP CALM_MIND DRAGON_DANCE DEFENSE_UP_3 SPECIAL_ATTACK_UP_3');
	var STAT_INDEX = {atk: 'atk', def: 'def', spe: 'spe', spa: 'spa', spd: 'spd', acc: 'acc', eva: 'eva'};

	function toSet(str) {
		var out = {};
		str.split(/\s+/).forEach(function (s) { if (s) out[s] = true; });
		return out;
	}
	function id(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }

	// ---------------------------------------------------------------------------------------
	// RNG (seed fisso: risultati stabili tra un ricalcolo e l'altro)
	// ---------------------------------------------------------------------------------------
	function makeRng(seed) {
		var a = seed >>> 0;
		return {
			u16: function () {
				a = (a + 0x6D2B79F5) >>> 0;
				var t = a;
				t = Math.imul(t ^ (t >>> 15), t | 1);
				t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
				return ((t ^ (t >>> 14)) >>> 0) & 0xFFFF;
			}
		};
	}

	// ---------------------------------------------------------------------------------------
	// Costruzione dello stato a partire dal calcolatore
	// ---------------------------------------------------------------------------------------
	function flatDamage(damage, hits) {
		// Restituisce {min, med, max} per l'intero utilizzo della mossa.
		if (typeof damage === 'number') return {min: damage, med: damage, max: damage};
		if (!damage || !damage.length) return {min: 0, med: 0, max: 0};
		if (Array.isArray(damage[0])) { // Parental Bond: [primo colpo[], secondo colpo[]]
			var a = flatDamage(damage[0], 1), b = flatDamage(damage[1], 1);
			return {min: a.min + b.min, med: a.med + b.med, max: a.max + b.max};
		}
		if (damage.length === 2 && typeof damage[0] === 'number' && damage.length < 16) {
			return {min: damage[0] + damage[1], med: damage[0] + damage[1], max: damage[0] + damage[1]};
		}
		var n = hits > 1 ? hits : 1;
		var mid = damage.length >= 16 ? damage[8] : damage[Math.floor(damage.length / 2)];
		return {min: damage[0] * n, med: mid * n, max: damage[damage.length - 1] * n};
	}

	function weatherId(field) {
		var w = field && field.weather ? String(field.weather) : '';
		switch (w) {
		case 'Sun': return 'SUN';
		case 'Harsh Sunshine': return 'SUN_PRIMAL';
		case 'Rain': return 'RAIN';
		case 'Heavy Rain': return 'RAIN_PRIMAL';
		case 'Sand': return 'SAND';
		case 'Hail': return 'HAIL';
		case 'Snow': return 'SNOW';
		case 'Strong Winds': return 'STRONG_WINDS';
		default: return '';
		}
	}

	// actualItem: per il giocatore visto da un'AI non Omniscient lo strumento e noto (aiData->items)
	// ma il suo effetto no (aiData->holdEffects = HOLD_EFFECT_NONE finche non si rivela).
	function buildBattler(pokemon, results, side, knownMoves, actualItem) {
		var maxHP = pokemon.maxHP();
		var hp = pokemon.curHP();
		var boosts = pokemon.boosts || {};
		var itemId = actualItem !== undefined ? id(actualItem) : id(pokemon.item);
		var b = {
			pokemon: pokemon,
			name: pokemon.name,
			types: (pokemon.types || []).slice(),
			ability: id(pokemon.ability),
			item: itemId,
			hold: HOLD_EFFECTS[id(pokemon.item)] || '',
			hp: hp,
			maxHP: maxHP,
			hpPct: Math.floor(100 * hp / Math.max(1, maxHP)),
			status: pokemon.status || '',
			gender: pokemon.gender || 'N',
			speed: pokemon.stats ? pokemon.stats.spe : 0,
			stages: {
				atk: 6 + (boosts.atk || 0), def: 6 + (boosts.def || 0), spa: 6 + (boosts.spa || 0),
				spd: 6 + (boosts.spd || 0), spe: 6 + (boosts.spe || 0), acc: 6, eva: 6
			},
			baseStats: (pokemon.species && pokemon.species.baseStats) || {},
			side: side,
			moves: [],
			knownMoves: knownMoves !== false
		};
		var data = window.AI_MOVE_DATA || {};
		for (var i = 0; i < 4; i++) {
			var move = pokemon.moves ? pokemon.moves[i] : null;
			var res = results ? results[i] : null;
			var calcMove = (res && res.move) || move;
			var name = calcMove ? calcMove.name : '';
			if (!name || name === '(No Move)') {
				b.moves.push(null);
				continue;
			}
			var rom = data[id(name)] || (/^Hidden Power/.test(name) ? data.hiddenpower : null) || null;
			// La categoria arriva dalla ROM: nella UI del calc le mosse di stato risultano "Physical"
			// (il menu della categoria ha solo Fisico/Speciale). Per le mosse d'attacco vale quella del
			// calc, che segue i cambi dinamici (es. Photon Geyser, Shell Side Arm).
			var calcCategory = calcMove.category === 'Physical' ? 'P' : calcMove.category === 'Special' ? 'X' : 'S';
			var category = rom ? (rom.c === 'S' ? 'S' : (calcCategory === 'S' ? rom.c : calcCategory)) : calcCategory;
			var power = rom ? rom.bp : (calcMove.bp || 0);
			if (category !== 'S' && !power) power = calcMove.bp || 1;
			var dmg = res ? flatDamage(res.damage, calcMove.hits || 1) : {min: 0, med: 0, max: 0};
			if (category === 'S') dmg = {min: 0, med: 0, max: 0};
			b.moves.push({
				index: i,
				name: name,
				id: id(name),
				rom: rom,
				effect: rom ? rom.e : (category === 'S' ? 'UNKNOWN' : 'HIT'),
				category: category,
				type: calcMove.type,
				power: category === 'S' ? 0 : power,
				accuracy: rom ? rom.acc : 100,
				priority: rom ? rom.pri : (calcMove.priority || 0),
				target: rom ? rom.t : 'SELECTED',
				nvs: rom && rom.nvs ? rom.nvs : '',
				ae: rom && rom.ae ? rom.ae : [],
				flags: toSet(rom && rom.f ? rom.f.join(' ') : ''),
				crit: rom ? (rom.crit || 0) : 0,
				hits: calcMove.hits || 1,
				dmg: dmg,
				known: !!rom
			});
		}
		return b;
	}

	// variant: {player, playerResults, aiResults} = il giocatore cosi come lo vede l'AI
	// (con Omniscient e lui; altrimenti senza strumento e con un'abilita ipotizzata).
	function buildContext(opts, variant, target) {
		var aiPokemon = (variant.aiResults && variant.aiResults[0] && variant.aiResults[0].attacker) || opts.ai;
		var playerPokemon = (variant.playerResults && variant.playerResults[0] && variant.playerResults[0].attacker) || variant.player;
		var ai = buildBattler(aiPokemon, variant.aiResults, 'ai', true);
		var knownMoves = opts.omniscient || opts.playerMovesKnown;
		var player = buildBattler(playerPokemon, variant.playerResults, 'player', knownMoves, opts.omniscient ? undefined : target.actualItem);
		var field = opts.field || {};
		var aiSide = (opts.aiField && opts.aiField.attackerSide) || {};
		var playerSide = (opts.aiField && opts.aiField.defenderSide) || {};
		return {
			omniscient: !!opts.omniscient,
			doubles: !!opts.doubles,
			allyAlive: !!opts.allyAlive,
			ai: ai,
			player: player,
			weather: weatherId(field),
			terrain: field.terrain ? String(field.terrain) : '',
			gravity: !!field.isGravity,
			magicRoom: !!field.isMagicRoom,
			aiSide: aiSide,
			playerSide: playerSide,
			firstTurn: opts.firstTurn !== false,
			protectUses: opts.protectUses || 0,
			aiPartyLeft: opts.aiPartyLeft ? 1 : 0,
			playerPartyLeft: opts.playerPartyLeft ? 1 : 0,
			typeChart: opts.typeChart || null
		};
	}

	// ---------------------------------------------------------------------------------------
	// Predicati (equivalenti delle funzioni di battle_ai_util.c)
	// ---------------------------------------------------------------------------------------
	function movesOf(b) {
		if (b.side === 'player' && !b.knownMoves) return [];
		return b.moves.filter(function (m) { return !!m; });
	}
	function isType(b, type) { return b.types.indexOf(type) >= 0; }
	function hasAbility(b, ab) { return b.ability === ab; }
	function moldBreaker(b) { return MOLD_BREAKERS.indexOf(b.ability) >= 0; }
	function hasMoveWithCategory(b, cat) { return movesOf(b).some(function (m) { return m.category === cat; }); }
	function hasDamagingMove(b) { return movesOf(b).some(function (m) { return m.category !== 'S' && m.power > 0; }); }
	function hasMoveWithEffect(b, eff) { return movesOf(b).some(function (m) { return m.effect === eff; }); }
	function hasMoveWithType(b, type) { return movesOf(b).some(function (m) { return m.type === type; }); }
	function hasDamagingMoveOfType(b, type) { return movesOf(b).some(function (m) { return m.type === type && m.category !== 'S'; }); }
	function hasMoveWithFlag(b, flag) { return movesOf(b).some(function (m) { return !!m.flags[flag]; }); }
	function hasNvsMove(b, nvs) { return movesOf(b).some(function (m) { return m.nvs === nvs; }); }
	function hasMoveWithAdditional(b, me) {
		return movesOf(b).some(function (m) { return m.ae.some(function (e) { return e[0] === me; }); });
	}
	function atMaxHp(b) { return b.hpPct === 100; }
	function isGrounded(ctx, b) {
		if (ctx.gravity || b.hold === 'IRON_BALL') return true;
		if (isType(b, 'Flying') || hasAbility(b, 'levitate') || b.hold === 'AIR_BALLOON') return false;
		return true;
	}
	function weatherActive(ctx) {
		if (hasAbility(ctx.ai, 'cloudnine') || hasAbility(ctx.ai, 'airlock') || hasAbility(ctx.player, 'cloudnine') || hasAbility(ctx.player, 'airlock')) return '';
		return ctx.weather;
	}
	function isWeather(ctx, list) {
		var w = weatherActive(ctx);
		return !!w && list.indexOf(w) >= 0;
	}
	var SUN = ['SUN', 'SUN_PRIMAL'], RAIN = ['RAIN', 'RAIN_PRIMAL'], PRIMAL = ['SUN_PRIMAL', 'RAIN_PRIMAL', 'STRONG_WINDS'];
	function terrainAffects(ctx, b, terrain) { return ctx.terrain === terrain && isGrounded(ctx, b); }

	function movePriority(b, m) {
		if (!m) return 0;
		var p = m.priority;
		if (hasAbility(b, 'prankster') && m.category === 'S') p += 1;
		if (hasAbility(b, 'galewings') && m.type === 'Flying' && atMaxHp(b)) p += 1;
		if (hasAbility(b, 'triage') && m.flags.heal) p += 3;
		return p;
	}

	// AI_WhoStrikesFirst: la mossa prevista del giocatore e sconosciuta (priorita 0).
	function aiIsFaster(ctx, m) {
		var ai = ctx.ai, pl = ctx.player;
		var aiPrio = m ? movePriority(ai, m) : 0;
		if (aiPrio > 0) return true;
		if (aiPrio < 0) return false;
		if (ai.hold === 'LAGGING_TAIL' && pl.hold !== 'LAGGING_TAIL') return false;
		if (ai.hold !== 'LAGGING_TAIL' && pl.hold === 'LAGGING_TAIL') return true;
		if (hasAbility(ai, 'stall') && !hasAbility(pl, 'stall')) return false;
		if (!hasAbility(ai, 'stall') && hasAbility(pl, 'stall')) return true;
		return ai.speed >= pl.speed; // pareggio: l'AI si considera piu veloce
	}
	// GetWhichBattlerFasterOrTies(..., TRUE) == AI_IS_FASTER (solo velocita, pareggio escluso)
	function aiStrictlyFaster(ctx) { return ctx.ai.speed > ctx.player.speed; }

	function canEndureHit(ctx, attacker, target, m) {
		if (!atMaxHp(target) || m.effect === 'MULTI_HIT') return false;
		if ((m.rom && m.rom.strikes > 1) || m.hits > 1) return false;
		if (target.hold === 'FOCUS_SASH') return true;
		if (!moldBreaker(attacker) && hasAbility(target, 'sturdy')) return true;
		return false;
	}
	function hitsToKO(dmg, hp) { return dmg === 0 ? 0 : Math.floor(hp / (dmg + 1)) + 1; }
	function aiHitsToKO(ctx, m) { return m && m.power ? hitsToKO(m.dmg.med, ctx.player.hp) : 0; }
	function canIndexMoveFaintTarget(ctx, m) {
		return !!m && m.power > 0 && ctx.player.hp <= m.dmg.med && !canEndureHit(ctx, ctx.ai, ctx.player, m);
	}
	function canIndexMoveGuaranteeFaintTarget(ctx, m) {
		return !!m && m.power > 0 && ctx.player.hp <= m.dmg.min && !canEndureHit(ctx, ctx.ai, ctx.player, m);
	}
	function canTargetFaintAi(ctx) {
		return movesOf(ctx.player).some(function (m) {
			return m.dmg.med >= ctx.ai.hp && !canEndureHit(ctx, ctx.player, ctx.ai, m);
		});
	}
	function canTargetFaintAiWithMod(ctx, hpMod, dmgMod) {
		var hpCheck = Math.min(ctx.ai.hp + hpMod, ctx.ai.maxHP);
		return movesOf(ctx.player).some(function (m) { return (dmgMod ? m.dmg.med * dmgMod : m.dmg.med) >= hpCheck; });
	}
	function canAIFaintTarget(ctx, numHits) {
		return ctx.ai.moves.some(function (m) {
			if (!m || !m.power) return false;
			var dmg = numHits ? m.dmg.med * numHits : m.dmg.med;
			if (ctx.player.hp <= dmg) {
				if (numHits > 1) return true;
				return !canEndureHit(ctx, ctx.ai, ctx.player, m);
			}
			return false;
		});
	}
	function noOfHitsForTargetToFaintAI(ctx) {
		var least = UNKNOWN_HITS;
		movesOf(ctx.player).forEach(function (m) {
			var h = hitsToKO(m.dmg.med, ctx.ai.hp);
			if (h !== 0 && h < least) least = h;
		});
		return least;
	}
	function bestDmgMove(b) {
		var best = null, bestDmg = 0;
		movesOf(b).forEach(function (m) {
			if (bestDmg < m.dmg.med) { bestDmg = m.dmg.med; best = m; }
		});
		return best;
	}
	function bestDmgFromBattler(b) {
		var best = 0;
		movesOf(b).forEach(function (m) { if (m.dmg.med > best) best = m.dmg.med; });
		return best;
	}

	// Efficacia vista dall'AI (CalcTypeEffectivenessMultiplier): le mosse di stato valgono 1x tranne Thunder Wave.
	function effectiveness(ctx, m) {
		if (!m) return 1;
		if (m.category === 'S' && m.id !== 'thunderwave') return 1;
		var def = ctx.player, atk = ctx.ai;
		var mult = 1;
		var chart = ctx.typeChart;
		// MulByTypeEffectiveness, per ogni tipo del bersaglio
		if (chart && m.type) {
			var t = chart(m.type);
			if (t && t.effectiveness) {
				def.types.forEach(function (dt) {
					var e = t.effectiveness[dt];
					if (typeof e !== 'number') e = 1;
					if (e === 0 && def.hold === 'RING_TARGET') e = 1;
					if (dt === 'Ghost' && (m.type === 'Normal' || m.type === 'Fighting') && (hasAbility(atk, 'scrappy') || hasAbility(atk, 'mindseye'))) e = 1;
					if (m.id === 'freezedry' && dt === 'Water') e = 2;
					if (m.type === 'Poison' && dt === 'Steel' && hasAbility(atk, 'corrosion')) e = 1;
					// Custom della hack: Spirit Body rende immuni alle mosse da contatto (tranne Spettro/Buio o Scrappy)
					if (m.flags.contact && hasAbility(def, 'spiritbody') && m.type !== 'Ghost' && m.type !== 'Dark' && !hasAbility(atk, 'scrappy')) e = 0;
					mult *= e;
				});
			}
		}
		if (m.type === 'Ground' && !isGrounded(ctx, def)) mult = 0;
		if (hasAbility(def, 'wonderguard') && mult <= 1 && m.power) mult = 0;
		return mult;
	}

	function shouldLowerStat(ctx, m, stat) {
		var pl = ctx.player;
		if (pl.stages[stat] === 0) return false;
		if (pl.hold === 'CLEAR_AMULET') return false;
		// switch con fallthrough come nel C
		switch (pl.ability) {
		case 'speedboost':
			if (stat === 'spe') return false;
			/* falls through */
		case 'hypercutter':
			if (stat === 'atk') return false;
			/* falls through */
		case 'bigpecks':
			if (stat === 'def') return false;
			/* falls through */
		case 'illuminate':
		case 'keeneye':
		case 'mindseye':
			if (stat === 'acc') return false;
			/* falls through */
		case 'flowerveil':
			if (isType(pl, 'Grass')) return false;
			break;
		case 'contrary':
		case 'clearbody':
		case 'whitesmoke':
		case 'fullmetalbody':
			return false;
		}
		if (stat === 'spe') {
			return !(aiIsFaster(ctx, m) && !ctx.aiPartyLeft && !hasMoveWithEffect(ctx.ai, 'ELECTRO_BALL'));
		}
		return true;
	}
	var NO_DROP_ABILITIES = ['contrary', 'clearbody', 'whitesmoke', 'fullmetalbody'];
	function killFirst(ctx, m) { return aiIsFaster(ctx, m) && canAIFaintTarget(ctx, 0); }
	function shouldLowerAttack(ctx, m) {
		var pl = ctx.player;
		if (killFirst(ctx, m)) return false;
		return pl.stages.atk > 4 && hasMoveWithCategory(pl, 'P') && NO_DROP_ABILITIES.indexOf(pl.ability) < 0 && pl.ability !== 'hypercutter' && pl.hold !== 'CLEAR_AMULET';
	}
	function shouldLowerDefense(ctx, m) {
		var pl = ctx.player;
		if (killFirst(ctx, m)) return false;
		return pl.stages.def > 4 && hasMoveWithCategory(ctx.ai, 'P') && NO_DROP_ABILITIES.indexOf(pl.ability) < 0 && pl.ability !== 'bigpecks' && pl.hold !== 'CLEAR_AMULET';
	}
	function shouldLowerSpeed(ctx, m) {
		var pl = ctx.player;
		if (NO_DROP_ABILITIES.indexOf(pl.ability) >= 0 || pl.hold === 'CLEAR_AMULET') return false;
		return !aiIsFaster(ctx, m);
	}
	function shouldLowerSpAtk(ctx, m) {
		var pl = ctx.player;
		if (killFirst(ctx, m)) return false;
		return pl.stages.spa > 4 && hasMoveWithCategory(pl, 'X') && NO_DROP_ABILITIES.indexOf(pl.ability) < 0 && pl.hold !== 'CLEAR_AMULET';
	}
	function shouldLowerSpDef(ctx, m) {
		var pl = ctx.player;
		if (killFirst(ctx, m)) return false;
		return pl.stages.spd > 4 && hasMoveWithCategory(ctx.ai, 'X') && NO_DROP_ABILITIES.indexOf(pl.ability) < 0 && pl.hold !== 'CLEAR_AMULET';
	}
	function shouldLowerAccuracy(ctx, m) {
		var pl = ctx.player;
		if (killFirst(ctx, m)) return false;
		return NO_DROP_ABILITIES.indexOf(pl.ability) < 0 && ['keeneye', 'mindseye', 'illuminate'].indexOf(pl.ability) < 0 && pl.hold !== 'CLEAR_AMULET';
	}
	function shouldLowerEvasion(ctx, m) {
		var pl = ctx.player;
		if (killFirst(ctx, m)) return false;
		return pl.stages.eva > 6 && NO_DROP_ABILITIES.indexOf(pl.ability) < 0 && pl.hold !== 'CLEAR_AMULET';
	}
	function statCanRise(b, stat) {
		if (b.ability === 'contrary') return b.stages[stat] > 0;
		return b.stages[stat] < 12;
	}

	// --- stati non volatili -------------------------------------------------------------------
	function hasStatus(b) { return !!b.status; }
	function safeguardMisty(ctx, b) { return terrainAffects(ctx, b, 'Misty'); }
	function canBePoisoned(ctx, atk, def) {
		if (hasStatus(def) || safeguardMisty(ctx, def)) return false;
		if ((isType(def, 'Poison') || isType(def, 'Steel')) && !hasAbility(atk, 'corrosion')) return false;
		if (['immunity', 'pastelveil', 'comatose', 'purifyingsalt'].indexOf(def.ability) >= 0) return false;
		if (hasAbility(def, 'leafguard') && isWeather(ctx, SUN) && def.hold !== 'UTILITY_UMBRELLA') return false;
		return true;
	}
	function canBeBurned(ctx, def) {
		if (hasStatus(def) || safeguardMisty(ctx, def) || isType(def, 'Fire')) return false;
		if (['waterveil', 'waterbubble', 'thermalexchange', 'comatose', 'purifyingsalt'].indexOf(def.ability) >= 0) return false;
		if (hasAbility(def, 'leafguard') && isWeather(ctx, SUN) && def.hold !== 'UTILITY_UMBRELLA') return false;
		return true;
	}
	function canBeParalyzed(ctx, def) {
		if (hasStatus(def) || safeguardMisty(ctx, def) || isType(def, 'Electric')) return false;
		if (['limber', 'comatose', 'purifyingsalt'].indexOf(def.ability) >= 0) return false;
		if (hasAbility(def, 'leafguard') && isWeather(ctx, SUN) && def.hold !== 'UTILITY_UMBRELLA') return false;
		return true;
	}
	function canBeSlept(ctx, def) {
		if (hasStatus(def) || safeguardMisty(ctx, def) || terrainAffects(ctx, def, 'Electric')) return false;
		if (['insomnia', 'vitalspirit', 'sweetveil', 'comatose', 'purifyingsalt'].indexOf(def.ability) >= 0) return false;
		if (hasAbility(def, 'leafguard') && isWeather(ctx, SUN) && def.hold !== 'UTILITY_UMBRELLA') return false;
		return true;
	}
	function canBeFrozen(ctx, def) {
		if (hasStatus(def) || safeguardMisty(ctx, def) || isType(def, 'Ice')) return false;
		if (['magmaarmor', 'comatose', 'purifyingsalt'].indexOf(def.ability) >= 0) return false;
		if (isWeather(ctx, SUN)) return false;
		return true;
	}
	function aiCanPoison(ctx, m) { return canBePoisoned(ctx, ctx.ai, ctx.player) && effectiveness(ctx, m) !== 0; }
	function aiCanParalyze(ctx, m) { return canBeParalyzed(ctx, ctx.player) && effectiveness(ctx, m) !== 0; }
	function aiCanBurn(ctx, m) { return canBeBurned(ctx, ctx.player) && effectiveness(ctx, m) !== 0; }
	function aiCanSleep(ctx) { return canBeSlept(ctx, ctx.player); }
	function aiCanFrostbite(ctx, m) { return canBeFrozen(ctx, ctx.player) && effectiveness(ctx, m) !== 0; }
	function aiCanConfuse(ctx) {
		var pl = ctx.player;
		if (hasAbility(pl, 'owntempo') && !moldBreaker(ctx.ai)) return false;
		if (terrainAffects(ctx, pl, 'Misty')) return false;
		return true;
	}
	function aiCanInfatuate(ctx, m) {
		var pl = ctx.player;
		if (effectiveness(ctx, m) === 0 || hasAbility(pl, 'oblivious') || hasAbility(pl, 'aromaveil')) return false;
		if (ctx.ai.gender === pl.gender) return false;
		return true;
	}
	function benefitsFromStatus(b) {
		return ['marvelscale', 'quickfeet', 'magicguard'].indexOf(b.ability) >= 0
			|| (hasAbility(b, 'guts') && hasMoveWithCategory(b, 'P'))
			|| hasMoveWithEffect(b, 'FACADE') || hasMoveWithEffect(b, 'PSYCHO_SHIFT');
	}
	function shouldPoison(ctx) {
		var pl = ctx.player;
		if (canBePoisoned(ctx, ctx.ai, pl) && (benefitsFromStatus(pl) || hasAbility(pl, 'poisonheal')
			|| (hasAbility(pl, 'toxicboost') && hasMoveWithCategory(pl, 'P')))) return false;
		return true;
	}
	function shouldBurn(ctx) {
		var pl = ctx.player;
		if (canBeBurned(ctx, pl) && (benefitsFromStatus(pl) || hasAbility(pl, 'heatproof')
			|| (hasAbility(pl, 'flareboost') && hasMoveWithCategory(pl, 'X')))) return false;
		return true;
	}
	function shouldParalyze(ctx) {
		var pl = ctx.player;
		return !(canBeParalyzed(ctx, pl) && benefitsFromStatus(pl));
	}
	function shouldFrostbite(ctx) { return canBeFrozen(ctx, ctx.player); }
	function isIncapacitated(b) { return b.status === 'slp' && !hasMoveWithEffect(b, 'SLEEP_TALK') || (b.status === 'frz'); }
	function secondaryDamage(ctx, b) {
		if (hasAbility(b, 'magicguard')) return 0;
		var dmg = 0;
		if (b.status === 'psn') dmg += Math.floor(b.maxHP / 8);
		if (b.status === 'tox') dmg += Math.floor(b.maxHP / 16);
		if (b.status === 'brn') dmg += Math.floor(b.maxHP / 16);
		var w = weatherActive(ctx);
		if (w === 'SAND' && !isType(b, 'Rock') && !isType(b, 'Ground') && !isType(b, 'Steel')
			&& ['sandveil', 'sandrush', 'sandforce', 'overcoat'].indexOf(b.ability) < 0 && b.hold !== 'SAFETY_GOGGLES') {
			dmg += Math.floor(b.maxHP / 16);
		}
		if (w === 'HAIL' && !isType(b, 'Ice') && ['icebody', 'snowcloak', 'overcoat'].indexOf(b.ability) < 0 && b.hold !== 'SAFETY_GOGGLES') {
			dmg += Math.floor(b.maxHP / 16);
		}
		var side = b.side === 'ai' ? ctx.aiSide : ctx.playerSide;
		if (side && side.isSeeded) dmg += Math.floor(b.maxHP / 8);
		return dmg;
	}
	function willFaintFromSecondary(ctx, b) {
		return secondaryDamage(ctx, b) !== 0 && b.hp <= Math.max(1, Math.floor(b.maxHP / 16));
	}

	// --- abilita che bloccano / assorbono (CanAbilityBlockMove / CanAbilityAbsorbMove) ---------
	function abilityBlocksMove(ctx, m) {
		var pl = ctx.player;
		if (moldBreaker(ctx.ai)) return false;
		switch (pl.ability) {
		case 'soundproof': return !!m.flags.sound;
		case 'bulletproof': return !!m.flags.ballistic;
		case 'dazzling':
		case 'queenlymajesty':
		case 'armortail': return movePriority(ctx.ai, m) > 0;
		case 'goodasgold': return m.category === 'S' && ['USER', 'OPPONENTS_FIELD', 'ALL_BATTLERS', 'USER_AND_ALLY'].indexOf(m.target) < 0;
		case 'windrider': return !!m.flags.wind;
		}
		return false;
	}
	function abilityAbsorbsMove(ctx, m) {
		var pl = ctx.player;
		if (moldBreaker(ctx.ai)) return false;
		var t = m.type;
		switch (pl.ability) {
		case 'voltabsorb': case 'motordrive': case 'lightningrod': return t === 'Electric';
		case 'waterabsorb': case 'dryskin': case 'stormdrain': return t === 'Water';
		case 'flashfire': case 'wellbakedbody': return t === 'Fire';
		case 'sapsipper': return t === 'Grass';
		case 'eartheater': return t === 'Ground';
		}
		return false;
	}
	function targetsUser(m) { return m.target === 'USER' || m.target === 'ALL_BATTLERS'; }

	// ---------------------------------------------------------------------------------------
	// Punteggio
	// ---------------------------------------------------------------------------------------
	function Scorer(ctx, rng, trace) {
		this.ctx = ctx;
		this.rng = rng;
		this.trace = trace;
	}

	Scorer.prototype.rand = function () { return this.rng.u16(); };
	// AI_RandLessThan: (Random() % 0xFF) < val
	Scorer.prototype.randLessThan = function (val) { return (this.rand() % 0xFF) < val; };

	Scorer.prototype.log = function (m, delta, reason) {
		if (this.trace && delta) {
			this.trace[m.index].push((delta > 0 ? '+' : '') + delta + ' ' + reason);
		}
	};

	// AI_CheckBadMove (solo i casi rilevanti in singolo)
	Scorer.prototype.checkBadMove = function (m, score) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player, self = this;
		var eff = effectiveness(ctx, m);
		var e = m.effect;
		function adj(v, why) { score += v; self.log(m, v, why); }

		if (m.flags.powder && (isType(pl, 'Grass') || hasAbility(pl, 'overcoat') || pl.hold === 'SAFETY_GOGGLES')) { adj(-10, 'powder move, target immune'); return score; }
		if (m.effect === 'TWO_TURNS_ATTACK' || m.effect === 'SOLAR_BEAM') {
			if (isTwoTurn(ctx, m) && canTargetFaintAi(ctx)) { adj(-10, 'two-turn move while AI can be KOed'); return score; }
		}
		if ((m.type === 'Fire' && m.power) && eff < 2 && pl.status === 'frz') {
			if (ai.moves.some(function (x) { return x && x.type !== 'Fire' && x.power; })) adj(-1, 'would thaw the target');
		}
		if (eff === 0) { adj(-20, 'no effect (type immunity)'); return score; }
		if (eff < 0.5 && ['FIXED_DAMAGE_ARG', 'LEVEL_DAMAGE', 'PSYWAVE', 'OHKO', 'BIDE', 'SUPER_FANG', 'ENDEAVOR', 'COUNTER', 'MIRROR_COAT', 'METAL_BURST', 'FINAL_GAMBIT'].indexOf(e) < 0) {
			adj(-10, '0.25x effectiveness'); return score;
		}

		var abilityDef = moldBreaker(ai) ? '' : pl.ability;
		if (!targetsUser(m)) {
			if (abilityBlocksMove(ctx, m)) { adj(-20, 'blocked by target ability'); return score; }
			if (abilityAbsorbsMove(ctx, m)) { adj(-20, 'absorbed by target ability'); return score; }
			switch (abilityDef) {
			case 'magicguard':
				if (e === 'LEECH_SEED') adj(-5, 'Magic Guard');
				if (e === 'CURSE' && isType(ai, 'Ghost')) adj(-5, 'Magic Guard');
				if (['POISON', 'TOXIC', 'BURN', 'FREEZE_OR_FROSTBITE'].indexOf(m.nvs) >= 0) adj(-5, 'Magic Guard');
				break;
			case 'wonderguard':
				if (eff < 2) { adj(-20, 'Wonder Guard'); return score; }
				break;
			case 'justified':
				if (m.type === 'Dark' && m.category !== 'S') { adj(-10, 'Justified'); return score; }
				break;
			case 'rattled':
				if (m.category !== 'S' && ['Dark', 'Ghost', 'Bug'].indexOf(m.type) >= 0) { adj(-10, 'Rattled'); return score; }
				break;
			case 'sweetveil':
				if (m.nvs === 'SLEEP') { adj(-10, 'Sweet Veil'); return score; }
				break;
			case 'flowerveil':
				if (isType(pl, 'Grass') && m.nvs) { adj(-10, 'Flower Veil'); return score; }
				break;
			case 'magicbounce':
				if (m.flags.magicCoat) { adj(-20, 'Magic Bounce'); return score; }
				break;
			case 'contrary':
				if (STAT_DOWN_EFFECTS[e]) { adj(-20, 'Contrary'); return score; }
				break;
			case 'comatose':
				if (m.nvs) { adj(-10, 'Comatose'); return score; }
				break;
			case 'leafguard':
				if (isWeather(ctx, SUN) && pl.hold !== 'UTILITY_UMBRELLA' && m.nvs) { adj(-10, 'Leaf Guard'); return score; }
				break;
			}
			if (isType(pl, 'Dark') && hasAbility(ai, 'prankster') && m.category === 'S' && m.target !== 'OPPONENTS_FIELD') { adj(-10, 'Prankster vs Dark type'); return score; }
			if (terrainAffects(ctx, pl, 'Electric') && m.nvs === 'SLEEP') { adj(-20, 'Electric Terrain'); return score; }
			if (terrainAffects(ctx, pl, 'Misty') && (m.nvs || e === 'CONFUSE' || e === 'SWAGGER' || e === 'FLATTER')) { adj(-20, 'Misty Terrain'); return score; }
			if (terrainAffects(ctx, ai, 'Psychic') && movePriority(ai, m) > 0) { adj(-20, 'Psychic Terrain'); return score; }
		}

		if (isWeather(ctx, PRIMAL)) {
			if (['SUNNY_DAY', 'RAIN_DANCE', 'HAIL', 'SNOWSCAPE', 'SANDSTORM'].indexOf(e) >= 0) { adj(-30, 'primal weather'); return score; }
			if (m.category !== 'S') {
				if (isWeather(ctx, ['SUN_PRIMAL']) && m.type === 'Water') { adj(-30, 'harsh sunshine'); return score; }
				if (isWeather(ctx, ['RAIN_PRIMAL']) && m.type === 'Fire') { adj(-30, 'heavy rain'); return score; }
			}
		}

		var phys = hasMoveWithCategory(ai, 'P'), spec = hasMoveWithCategory(ai, 'X');
		switch (e) {
		case 'EXPLOSION':
			// Custom (commit 3bc6906e18): con HP Aware niente -2, decide il tiro sui PS in AI_HPAware
			if ((hasAbility(ai, 'damp') || hasAbility(pl, 'damp')) && !moldBreaker(ai)) adj(-10, 'Damp on field');
			else if (ctx.aiPartyLeft === 0) adj(ctx.playerPartyLeft ? -10 : -1, 'AI\'s last Pokemon');
			break;
		case 'ATTACK_UP': case 'ATTACK_UP_2': case 'ATTACK_UP_USER_ALLY':
			if (!statCanRise(ai, 'atk') || !phys) adj(-10, 'Atk maxed / no physical move');
			break;
		case 'DEFENSE_UP': case 'DEFENSE_UP_2': case 'DEFENSE_UP_3': case 'DEFENSE_CURL':
			if (!statCanRise(ai, 'def')) adj(-10, 'Def maxed');
			break;
		case 'SPECIAL_ATTACK_UP': case 'SPECIAL_ATTACK_UP_2': case 'SPECIAL_ATTACK_UP_3':
			if (!statCanRise(ai, 'spa') || !spec) adj(-10, 'SpA maxed / no special move');
			break;
		case 'SPECIAL_DEFENSE_UP': case 'SPECIAL_DEFENSE_UP_2':
			if (!statCanRise(ai, 'spd')) adj(-10, 'SpD maxed');
			break;
		case 'EVASION_UP': case 'EVASION_UP_2': case 'MINIMIZE':
			if (!statCanRise(ai, 'eva')) adj(-10, 'evasion maxed');
			break;
		case 'COSMIC_POWER':
			if (!statCanRise(ai, 'def')) adj(-10, 'Def maxed'); else if (!statCanRise(ai, 'spd')) adj(-8, 'SpD maxed');
			break;
		case 'BULK_UP':
			if (!statCanRise(ai, 'atk') || !phys) adj(-10, 'Atk maxed / no physical move'); else if (!statCanRise(ai, 'def')) adj(-8, 'Def maxed');
			break;
		case 'CALM_MIND':
			if (!statCanRise(ai, 'spa')) adj(-10, 'SpA maxed'); else if (!statCanRise(ai, 'spd')) adj(-8, 'SpD maxed');
			break;
		case 'DRAGON_DANCE':
			if (!statCanRise(ai, 'atk') || !phys) adj(-10, 'Atk maxed / no physical move'); else if (!statCanRise(ai, 'spe')) adj(-8, 'Spe maxed');
			break;
		case 'QUIVER_DANCE': case 'GEOMANCY':
			if (hasAbility(pl, 'unaware')) adj(-10, 'Unaware');
			if (ai.stages.spa >= 12 || !spec) adj(-10, 'SpA maxed / no special move');
			else if (!statCanRise(ai, 'spe')) adj(-8, 'Spe maxed');
			else if (!statCanRise(ai, 'spd')) adj(-6, 'SpD maxed');
			break;
		case 'SHIFT_GEAR':
			if (!statCanRise(ai, 'atk') || !phys) adj(-10, 'Atk maxed'); else if (!statCanRise(ai, 'spe')) adj(-8, 'Spe maxed');
			break;
		case 'SHELL_SMASH':
			if (hasAbility(ai, 'contrary')) {
				if (!statCanRise(ai, 'def')) adj(-10, 'Contrary'); else if (!statCanRise(ai, 'spd')) adj(-8, 'Contrary');
			} else if (!statCanRise(ai, 'atk') || !phys) adj(-10, 'Atk maxed / no physical move');
			else if (!statCanRise(ai, 'spa') || !spec) adj(-8, 'SpA maxed / no special move');
			else if (!statCanRise(ai, 'spe')) adj(-6, 'Spe maxed');
			break;
		case 'GROWTH': case 'ATTACK_SPATK_UP':
			if ((!statCanRise(ai, 'atk') && !statCanRise(ai, 'spa')) || !hasDamagingMove(ai)) adj(-10, 'stats maxed');
			break;
		case 'COIL':
			if (!statCanRise(ai, 'acc')) adj(-10, 'accuracy maxed');
			else if (!statCanRise(ai, 'atk') || !phys) adj(-8, 'Atk maxed');
			else if (!statCanRise(ai, 'def')) adj(-6, 'Def maxed');
			break;
		case 'ATTACK_DOWN': case 'ATTACK_DOWN_2':
			if (!shouldLowerStat(ctx, m, 'atk')) adj(-10, 'can\'t lower Atk');
			break;
		case 'DEFENSE_DOWN': case 'DEFENSE_DOWN_2':
			if (!shouldLowerStat(ctx, m, 'def')) adj(-10, 'can\'t lower Def');
			break;
		case 'SPEED_DOWN': case 'SPEED_DOWN_2':
			if (!shouldLowerStat(ctx, m, 'spe')) adj(-10, 'lowering Spe is useless');
			break;
		case 'SPECIAL_ATTACK_DOWN': case 'SPECIAL_ATTACK_DOWN_2':
			if (!shouldLowerStat(ctx, m, 'spa')) adj(-10, 'can\'t lower SpA');
			break;
		case 'SPECIAL_DEFENSE_DOWN': case 'SPECIAL_DEFENSE_DOWN_2':
			if (!shouldLowerStat(ctx, m, 'spd')) adj(-10, 'can\'t lower SpD');
			break;
		case 'ACCURACY_DOWN': case 'ACCURACY_DOWN_2':
			if (!shouldLowerStat(ctx, m, 'acc')) adj(-10, 'can\'t lower accuracy');
			break;
		case 'EVASION_DOWN': case 'EVASION_DOWN_2': case 'TICKLE':
			if (!shouldLowerStat(ctx, m, 'atk')) adj(-10, 'can\'t lower Atk');
			else if (!shouldLowerStat(ctx, m, 'def')) adj(-8, 'can\'t lower Def');
			break;
		case 'NOBLE_ROAR':
			if (!shouldLowerStat(ctx, m, 'spa')) adj(-10, 'can\'t lower SpA');
			else if (!shouldLowerStat(ctx, m, 'atk')) adj(-8, 'can\'t lower Atk');
			break;
		case 'CAPTIVATE':
			if (ai.gender === pl.gender) adj(-10, 'same gender');
			break;
		case 'HAZE':
			['atk', 'def', 'spe', 'spa', 'spd', 'acc', 'eva'].forEach(function (s) {
				if (ai.stages[s] > 6) adj(-10, 'would reset own boosts');
				if (pl.stages[s] < 6) adj(-10, 'would reset target drops');
			});
			break;
		case 'FOCUS_PUNCH':
			if (hasAbility(pl, 'wonderguard') && eff < 2) adj(-10, 'Wonder Guard');
			if (hasDamagingMove(pl) && !isIncapacitated(pl)) adj(-10, 'would be hit first');
			if (hasMoveWithEffect(ai, 'SUBSTITUTE')) adj(-10, 'has Substitute, not active');
			if (hasNvsMove(ai, 'SLEEP') && pl.status !== 'slp') adj(-10, 'has a sleep move');
			break;
		case 'COUNTER': case 'MIRROR_COAT':
			if (isIncapacitated(pl)) adj(-1, 'target incapacitated');
			adj(-10, 'no predicted player move');
			break;
		case 'ROAR':
			if (!ctx.playerPartyLeft) adj(-10, 'player has no other Pokemon');
			else if (hasAbility(pl, 'suctioncups')) adj(-10, 'Suction Cups');
			break;
		case 'LIGHT_SCREEN':
			if (ctx.aiSide.isLightScreen) adj(-10, 'Light Screen already up');
			break;
		case 'REFLECT':
			if (ctx.aiSide.isReflect) adj(-10, 'Reflect already up');
			break;
		case 'AURORA_VEIL':
			if (ctx.aiSide.isAuroraVeil || !isWeather(ctx, ['HAIL', 'SNOW'])) adj(-10, 'needs hail/snow');
			break;
		case 'OHKO':
			if (m.id === 'sheercold' && isType(pl, 'Ice')) { adj(-20, 'Ice type immune'); return score; }
			break;
		case 'FOCUS_ENERGY':
			break;
		case 'CONFUSE': case 'SWAGGER': case 'FLATTER':
			if (!aiCanConfuse(ctx)) adj(-10, 'can\'t confuse');
			break;
		case 'SUBSTITUTE':
			if (hasAbility(pl, 'infiltrator')) adj(-8, 'Infiltrator');
			else if (ai.hpPct <= 25) adj(-10, 'HP too low');
			else if (hasMoveWithFlag(pl, 'ignSub') || hasMoveWithFlag(pl, 'sound')) adj(-8, 'player bypasses Substitute');
			break;
		case 'LEECH_SEED':
			if (ctx.playerSide.isSeeded || isType(pl, 'Grass')) adj(-10, 'already seeded / Grass type');
			else if (hasAbility(pl, 'liquidooze')) adj(-3, 'Liquid Ooze');
			break;
		case 'DISABLE': case 'ENCORE': case 'SPITE': case 'MIMIC':
			// nessuna mossa precedente nota del giocatore
			adj(-10, 'no previous player move');
			break;
		case 'SNORE': case 'SLEEP_TALK':
			if (ai.status !== 'slp' && !hasAbility(ai, 'comatose')) adj(-10, 'not asleep');
			break;
		case 'CURSE':
			if (isType(ai, 'Ghost')) { if (ai.hpPct <= 50) adj(-6, 'low HP'); }
			else if (!statCanRise(ai, 'atk') || !phys) adj(-10, 'Atk maxed');
			else if (!statCanRise(ai, 'def')) adj(-8, 'Def maxed');
			break;
		case 'SPIKES':
			if ((ctx.playerSide.spikes || 0) >= 3) adj(-10, 'Spikes maxed');
			break;
		case 'STEALTH_ROCK':
			if (ctx.playerSide.isSR) adj(-10, 'Stealth Rock already up');
			break;
		case 'SANDSTORM':
			if (isWeather(ctx, ['SAND'].concat(PRIMAL))) adj(-8, 'weather already active');
			break;
		case 'SUNNY_DAY':
			if (isWeather(ctx, SUN.concat(PRIMAL))) adj(-8, 'weather already active');
			break;
		case 'RAIN_DANCE':
			if (isWeather(ctx, RAIN.concat(PRIMAL))) adj(-8, 'weather already active');
			break;
		case 'HAIL':
			if (isWeather(ctx, ['HAIL'].concat(PRIMAL))) adj(-8, 'weather already active'); else if (isWeather(ctx, ['SNOW'])) adj(-2, 'snow already active');
			break;
		case 'SNOWSCAPE':
			if (isWeather(ctx, ['SNOW'].concat(PRIMAL))) adj(-8, 'weather already active'); else if (isWeather(ctx, ['HAIL'])) adj(-2, 'hail already active');
			break;
		case 'ATTRACT':
			if (!aiCanInfatuate(ctx, m)) adj(-10, 'can\'t infatuate');
			break;
		case 'PARTING_SHOT': case 'BATON_PASS': case 'CHILLY_RECEPTION':
			if (!ctx.aiPartyLeft) adj(-10, 'no Pokemon to switch to');
			else if (e === 'BATON_PASS' && !Object.keys(ai.stages).some(function (s) { return ai.stages[s] > 6; })) adj(-6, 'no boosts to pass');
			else if (e === 'CHILLY_RECEPTION' && isWeather(ctx, ['SNOW'].concat(PRIMAL))) adj(-8, 'snow already active');
			break;
		case 'BELLY_DRUM': case 'FILLET_AWAY':
			if (hasAbility(pl, 'unaware')) adj(-10, 'Unaware');
			if (hasAbility(ai, 'contrary')) adj(-10, 'Contrary'); else if (ai.hpPct <= 60) adj(-10, 'HP <= 60%');
			break;
		case 'FUTURE_SIGHT':
			adj(GOOD_EFFECT, 'Future Sight');
			break;
		case 'TELEPORT':
			adj(-10, 'Teleport');
			break;
		case 'FIRST_TURN_ONLY':
			if (!ctx.firstTurn) adj(-10, 'not the first turn');
			break;
		case 'FOLLOW_ME': case 'HELPING_HAND':
			if (!ctx.doubles || !ctx.allyAlive) adj(-10, ctx.doubles ? 'no ally on field' : 'useless in singles');
			break;
		case 'TRICK': case 'KNOCK_OFF': case 'CORROSIVE_GAS':
			if (hasAbility(pl, 'stickyhold')) adj(-10, 'Sticky Hold');
			break;
		case 'REST':
			if (!canBeSlept(ctx, ai)) adj(-10, 'can\'t fall asleep');
			/* falls through */
		case 'RESTORE_HP': case 'SOFTBOILED': case 'ROOST':
			if (atMaxHp(ai)) adj(-10, 'full HP'); else if (ai.hpPct >= 90) adj(-9, 'HP >= 90%');
			break;
		case 'MORNING_SUN': case 'SYNTHESIS': case 'MOONLIGHT':
			if (isWeather(ctx, ['RAIN', 'RAIN_PRIMAL', 'SAND', 'HAIL', 'SNOW'])) adj(-3, 'bad weather');
			else if (atMaxHp(ai)) adj(-10, 'full HP'); else if (ai.hpPct >= 90) adj(-9, 'HP >= 90%');
			break;
		case 'RECOIL_IF_MISS':
			if (!hasAbility(ai, 'magicguard') && moveAccuracy(ctx, m) < 75) adj(-6, 'low accuracy');
			break;
		case 'DESTINY_BOND':
			break;
		case 'HEAL_BELL':
			if (!hasStatus(ai)) adj(-10, 'nothing to cure');
			break;
		case 'ENDURE':
			if (ai.hp === 1 || secondaryDamage(ctx, ai)) adj(-10, 'would faint anyway');
			break;
		case 'PROTECT':
			if (['quickguard', 'wideguard', 'craftyshield'].indexOf(m.id) >= 0) { if (!ctx.doubles) adj(-10, 'useless in singles'); break; }
			if (m.id === 'matblock' && !ctx.firstTurn) { adj(-10, 'not the first turn'); break; }
			if (isIncapacitated(pl)) { adj(-10, 'target can\'t act'); break; }
			if (secondaryDamage(ctx, ai) >= ai.hp && !['moxie', 'beastboost', 'chillingneigh', 'grimneigh', 'asoneglastrier', 'asonespectrier'].some(function (a) { return hasAbility(pl, a); })) {
				adj(-10, 'would faint after Protect');
			} else if (ctx.protectUses === 1 && this.rand() % 100 < 50) {
				if (ctx.doubles) adj(-10, 'consecutive Protect (50%)');
				else adj(-6, 'consecutive Protect (50%)');
			} else if (ctx.protectUses >= 2) {
				adj(-10, 'consecutive Protect');
			}
			break;
		case 'PSYCH_UP':
			['atk', 'def', 'spe', 'spa', 'spd', 'acc', 'eva'].forEach(function (s) {
				if (ai.stages[s] > 6) adj(-10, 'would lose own boosts');
				if (pl.stages[s] < 6) adj(-10, 'would copy drops');
			});
			break;
		case 'HEALING_WISH': case 'FINAL_GAMBIT':
			if (!ctx.aiPartyLeft) adj(-10, 'last Pokemon');
			break;
		case 'TAUNT':
			break;
		case 'WISH':
			break;
		case 'YAWN':
			if (!aiCanSleep(ctx)) adj(-10, 'can\'t put to sleep');
			break;
		case 'SKILL_SWAP':
			if (!ai.ability || !pl.ability || pl.hold === 'ABILITY_SHIELD') adj(-10, 'swap impossible');
			break;
		case 'TRICK_ROOM':
			if (ai.speed >= pl.speed) adj(-10, 'AI already faster');
			break;
		case 'SUCKER_PUNCH':
			break;
		case 'TAILWIND':
			if (ctx.aiSide.isTailwind) adj(-10, 'Tailwind already up');
			break;
		case 'MAGNET_RISE':
			if (ctx.gravity || ai.hold === 'IRON_BALL' || !isGrounded(ctx, ai)) adj(-10, 'not useful');
			break;
		case 'FLAIL':
			if (!aiIsFaster(ctx, m) || ai.hpPct > 50) adj(-4, 'high HP or AI slower');
			break;
		case 'SAFEGUARD':
			break;
		case 'TOXIC_SPIKES':
			break;
		case 'STICKY_WEB':
			break;
		case 'FORESIGHT':
			if (pl.stages.eva <= 4 || !isType(pl, 'Ghost')) adj(-9, 'useless');
			break;
		case 'PERISH_SONG':
			if (!ctx.aiPartyLeft && !hasAbility(ai, 'soundproof') && ctx.playerPartyLeft) adj(-10, 'AI\'s last Pokemon');
			if (hasAbility(pl, 'soundproof')) adj(-10, 'Soundproof');
			break;
		case 'STRENGTH_SAP':
			if (hasAbility(pl, 'contrary')) adj(-10, 'Contrary'); else if (!shouldLowerStat(ctx, m, 'atk')) adj(-10, 'can\'t lower Atk');
			break;
		case 'ABSORB':
			if (hasAbility(pl, 'liquidooze')) adj(-6, 'Liquid Ooze');
			break;
		case 'ASSIST':
			if (!ctx.aiPartyLeft) adj(-10, 'no teammates');
			break;
		case 'DO_NOTHING': case 'HOLD_HANDS': case 'CELEBRATE': case 'HAPPY_HOUR':
			adj(-10, 'does nothing');
			break;
		case 'SOAK':
			if (pl.types.length === 1 && pl.types[0] === 'Water') adj(-10, 'already pure Water');
			break;
		case 'PAIN_SPLIT':
			break;
		}

		// stati non volatili
		switch (m.nvs) {
		case 'POISON': case 'TOXIC':
			if (!aiCanPoison(ctx, m)) adj(-10, 'can\'t poison');
			if (!shouldPoison(ctx)) adj(-5, 'poison helps the target');
			break;
		case 'SLEEP':
			if (!aiCanSleep(ctx)) adj(-10, 'can\'t put to sleep');
			break;
		case 'PARALYSIS':
			if (!aiCanParalyze(ctx, m)) adj(-10, 'can\'t paralyze');
			if (!shouldParalyze(ctx)) adj(-5, 'paralysis helps the target');
			break;
		case 'BURN':
			if (!aiCanBurn(ctx, m)) adj(-10, 'can\'t burn');
			if (!shouldBurn(ctx)) adj(-5, 'burn helps the target');
			break;
		case 'FREEZE_OR_FROSTBITE':
			if (!aiCanFrostbite(ctx, m)) adj(-15, 'can\'t freeze');
			else if (!shouldFrostbite(ctx)) adj(-5, 'useless');
			break;
		}

		// strumenti Scelta
		if (/^CHOICE_/.test(ai.hold) && !ctx.magicRoom) {
			if (targetsUser(m) && ['DESTINY_BOND', 'WISH', 'HEALING_WISH'].indexOf(e) < 0 && !(e === 'AURORA_VEIL' && isWeather(ctx, ['SNOW', 'HAIL']))) {
				adj(-30, 'Choice item + self-target move');
			} else if (m.category === 'S' && !ctx.aiPartyLeft) {
				adj(-30, 'Choice item + status move');
			}
		}

		if (score < 0) score = 0;
		return score;
	};

	function isTwoTurn(ctx, m) {
		if (m.effect !== 'SOLAR_BEAM' && m.effect !== 'TWO_TURNS_ATTACK') return false;
		if (ctx.ai.hold === 'POWER_HERB') return false;
		if (m.effect === 'SOLAR_BEAM' && isWeather(ctx, SUN)) return false;
		if (m.flags.wind && ctx.aiSide.isTailwind) return false;
		return true;
	}

	// AI_TryToFaint
	Scorer.prototype.tryToFaint = function (m, score) {
		var ctx = this.ctx;
		if (m.category === 'S') return score;
		if (canIndexMoveFaintTarget(ctx, m) && m.effect !== 'EXPLOSION') {
			if (canIndexMoveGuaranteeFaintTarget(ctx, m)) { score += 1; this.log(m, 1, 'guaranteed KO'); }
			if (aiIsFaster(ctx, m)) { score += FAST_KILL; this.log(m, FAST_KILL, 'KO, AI faster'); }
			else { score += SLOW_KILL; this.log(m, SLOW_KILL, 'KO, AI slower'); }
		} else if (canTargetFaintAi(ctx) && !aiStrictlyFaster(ctx) && movePriority(ctx.ai, m) > 0) {
			score += LAST_CHANCE;
			this.log(m, LAST_CHANCE, 'last chance priority');
		}
		return score;
	};

	// AI_CompareDamagingMoves
	Scorer.prototype.compareDamagingMoves = function (m) {
		var ctx = this.ctx, ai = ctx.ai;
		var noOfHits = [], viable = [], twoTurn = [];
		var leastHits = 1000, i;
		for (i = 0; i < 4; i++) {
			var x = ai.moves[i];
			if (x && x.power) {
				noOfHits[i] = aiHitsToKO(ctx, x);
				if (noOfHits[i] < leastHits && noOfHits[i] !== 0) leastHits = noOfHits[i];
				viable[i] = 100;
				twoTurn[i] = isTwoTurn(ctx, x);
			} else {
				noOfHits[i] = -1; viable[i] = 0; twoTurn[i] = false;
			}
		}
		var cur = m.index, multiple = false;
		if (leastHits !== noOfHits[cur]) return 0;
		for (i = 0; i < 4; i++) {
			if (i === cur || noOfHits[cur] !== noOfHits[i]) continue;
			multiple = true;
			if (twoTurn[i] && !twoTurn[cur]) viable[i] -= 3;
			else if (!twoTurn[i] && twoTurn[cur]) viable[cur] -= 3;
			var acc1 = moveAccuracy(ctx, ai.moves[cur]), acc2 = moveAccuracy(ctx, ai.moves[i]);
			if (acc1 > acc2) viable[i] -= 2; else if (acc2 > acc1) viable[cur] -= 2;
			var better = this.whichMoveBetter(ai.moves[cur], ai.moves[i], noOfHits[cur]);
			if (better === 1) viable[i] -= 1; else if (better === -1) viable[cur] -= 1;
		}
		if (!multiple) return BEST_DAMAGE_MOVE;
		var best = 0;
		for (i = 0; i < 4; i++) if (viable[i] > best) best = viable[i];
		return viable[cur] === best ? BEST_DAMAGE_MOVE : 0;
	};

	// Ai_SetMoveAccuracy, con le regole custom della hack (allineate a Cmd_accuracycheck)
	function moveAccuracy(ctx, m) {
		if (!m.accuracy) return 100;
		if (hasAbility(ctx.ai, 'noguard') || hasAbility(ctx.player, 'noguard')) return 100;
		if (m.flags.wind && ctx.aiSide.isTailwind) return 100;
		if (m.flags.sound && m.id !== 'sing') return 100;
		if ((m.id === 'lovelykiss' || m.id === 'sweetkiss') && hasAbility(ctx.ai, 'cutecharm')) return 100;
		var acc = m.accuracy;
		if (hasAbility(ctx.ai, 'compoundeyes')) acc = Math.floor(acc * 1.3);
		if (hasAbility(ctx.ai, 'baddreams') && m.nvs === 'SLEEP') acc = Math.floor(acc * 120 / 100); // custom: mosse che addormentano +20%
		return Math.min(100, acc);
	}

	Scorer.prototype.whichMoveBetter = function (m1, m2, hits) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		if (ai.hold !== 'PROTECTIVE_PADS' && !hasAbility(ai, 'longreach')
			&& (pl.hold === 'ROCKY_HELMET' || hasAbility(pl, 'ironbarbs') || hasAbility(pl, 'roughskin'))) {
			var c1 = !!m1.flags.contact, c2 = !!m2.flags.contact;
			if (c1 && !c2) return -1;
			if (c2 && !c1) return 1;
		}
		var e1 = this.effectInMinus(m1, hits), e2 = this.effectInMinus(m2, hits);
		if (e2 && !e1) return 1;
		if (e1 && !e2) return -1;
		e1 = this.effectInPlus(m1, hits); e2 = this.effectInPlus(m2, hits);
		if (e2 && !e1) return -1;
		if (e1 && !e2) return 1;
		return 0;
	};

	Scorer.prototype.effectInPlus = function (m, hits) {
		var ctx = this.ctx, ai = ctx.ai;
		switch (m.effect) {
		case 'HIT_ESCAPE':
			if (ctx.aiPartyLeft && this.shouldPivot(m) !== 'DONT') return true;
			break;
		case 'FELL_STINGER':
			if (statCanRise(ai, 'atk') && hits === 1) return true;
			break;
		case 'PURSUIT':
			if (hits === 1) return true;
			break;
		}
		var statOf = {ATK: 'atk', DEF: 'def', SPD: 'spe', SP_ATK: 'spa', SP_DEF: 'spd', EVS: 'eva', ACC: 'acc'};
		for (var i = 0; i < m.ae.length; i++) {
			var me = m.ae[i][0], self = !!m.ae[i][2];
			var plus = /^(ATK|DEF|SPD|SP_ATK|SP_DEF|EVS|ACC)_PLUS_[12]$/.exec(me);
			var minus = /^(ATK|DEF|SPD|SP_ATK|SP_DEF|EVS|ACC)_MINUS_[12]$/.exec(me);
			if (self) {
				if (plus && statCanRise(ai, statOf[plus[1]])) return true;
				if (me === 'ALL_STATS_UP') return true;
			} else {
				switch (me) {
				case 'POISON': case 'TOXIC': if (aiCanPoison(ctx, m)) return true; break;
				case 'BURN': if (aiCanBurn(ctx, m)) return true; break;
				case 'FREEZE_OR_FROSTBITE': if (canBeFrozen(ctx, ctx.player)) return true; break;
				case 'PARALYSIS': if (aiCanParalyze(ctx, m)) return true; break;
				case 'CONFUSION': if (aiCanConfuse(ctx)) return true; break;
				case 'FLINCH': if (shouldTryToFlinch(ctx, m)) return true; break;
				default:
					if (minus && shouldLowerStat(ctx, m, statOf[minus[1]]) && hits !== 1) return true;
				}
			}
		}
		return false;
	};

	Scorer.prototype.effectInMinus = function (m, hits) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		switch (m.effect) {
		case 'MAX_HP_50_RECOIL': case 'MIND_BLOWN': case 'EXPLOSION': case 'FINAL_GAMBIT':
			return true;
		case 'RECOIL': case 'RECOIL_IF_MISS':
			return !hasAbility(ai, 'rockhead') && !hasAbility(ai, 'magicguard');
		}
		for (var i = 0; i < m.ae.length; i++) {
			var me = m.ae[i][0], self = !!m.ae[i][2];
			var plContrary = hasAbility(pl, 'contrary') && !moldBreaker(ai);
			if (/_MINUS_[12]$/.test(me) || me === 'V_CREATE' || me === 'ATK_DEF_DOWN' || me === 'DEF_SPDEF_DOWN') {
				if ((self && !hasAbility(ai, 'contrary')) || (hits !== 1 && plContrary)) return true;
			} else if (me === 'RECHARGE') {
				return self;
			} else if (/_PLUS_[12]$/.test(me) || me === 'ALL_STATS_UP') {
				if ((self && hasAbility(ai, 'contrary')) || (hits !== 1 && !plContrary)) return true;
			}
		}
		return false;
	};

	function shouldTryToFlinch(ctx, m) {
		var pl = ctx.player;
		if ((!moldBreaker(ctx.ai) && (hasAbility(pl, 'shielddust') || hasAbility(pl, 'innerfocus')))
			|| pl.hold === 'COVERT_CLOAK' || !aiIsFaster(ctx, m)) return 0;
		if (hasAbility(ctx.ai, 'serenegrace') || pl.status === 'par' || (aiIsFaster(ctx, m) && canTargetFaintAi(ctx))) return 2;
		return 0;
	}

	// ShouldPivot (singolo; l'AI non prevede cambi del giocatore)
	Scorer.prototype.shouldPivot = function (m) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		var hasStatBoost = ['atk', 'spa', 'spe'].some(function (s) { return ai.stages[s] > 6; }) || pl.stages.eva >= 9;
		if (!ctx.aiPartyLeft) return 'CAN_TRY';
		var breaker = atMaxHp(pl) &&(pl.hold === 'FOCUS_SASH' || hasAbility(pl, 'sturdy') || hasAbility(pl, 'multiscale') || hasAbility(pl, 'shadowshield'));
		if (aiIsFaster(ctx, m)) {
			if (!canAIFaintTarget(ctx, 0)) {
				if (canAIFaintTarget(ctx, 2)) {
					if (canTargetFaintAi(ctx)) return 'SHOULD';
					if (m.category !== 'S' && breaker) return 'SHOULD';
				} else if (!hasStatBoost) {
					if (m.category !== 'S' && breaker) return 'SHOULD';
				}
			}
		} else {
			if (canTargetFaintAi(ctx)) return m.effect === 'TELEPORT' ? 'DONT' : 'CAN_TRY';
			if (canTargetFaintAiWithMod(ctx, 0, 2)) {
				if (canAIFaintTarget(ctx, 0)) {
					if (!willFaintFromSecondary(ctx, ai)) return 'CAN_TRY';
				} else {
					return 'SHOULD';
				}
			} else if (canAIFaintTarget(ctx, 0)) {
				if (!willFaintFromSecondary(ctx, ai) && !hasStatBoost) return 'CAN_TRY';
			} else if (canAIFaintTarget(ctx, 2)) {
				if (m.category === 'S' && pl.hold === 'FOCUS_SASH' && atMaxHp(pl)) return 'DONT';
				return 'CAN_TRY';
			}
		}
		return 'CAN_TRY';
	};

	// IncreaseStatUpScore(Internal). GetStatBeingChanged: l'enum StatChange viene convertito
	// nella statistica vera prima di leggere statStages (fix della ROM, commit 3bc6906e18).
	var STAT_BEING_CHANGED = {atk: 'atk', def: 'def', spe: 'spe', spa: 'spa', spd: 'spd',
		atk_2: 'atk', def_2: 'def', spe_2: 'spe', spa_2: 'spa', spd_2: 'spd', acc: 'acc', eva: 'eva'};

	Scorer.prototype.statUpScore = function (stat, considerContrary) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		var hits = noOfHitsForTargetToFaintAI(ctx);
		var faster = aiIsFaster(ctx, null);
		var setUp = (hits >= 2 && faster) || (hits >= 3 && !faster) || hits === UNKNOWN_HITS;
		if (!(stat in STAT_BEING_CHANGED)) return 0; // STAT_HP: cambio non valido
		var stage = ai.stages[STAT_BEING_CHANGED[stat]];
		if (considerContrary && hasAbility(ai, 'contrary')) return 0;
		if (hasAbility(pl, 'unaware')) return 0;
		if (stage >= 10) return 0;
		if (ai.hpPct < 70 && hits === UNKNOWN_HITS) return 0;
		if (secondaryDamage(ctx, ai) >= ai.hp) return 0;
		if (hasAbility(pl, 'opportunist')) return 0;
		if (hasMoveWithEffect(pl, 'ENCORE')) return 0;
		if (stage >= 7 && (hasMoveWithEffect(pl, 'HAZE') || hasMoveWithAdditional(pl, 'CLEAR_SMOG') || hasMoveWithAdditional(pl, 'HAZE'))) return 0;
		var physPl = hasMoveWithCategory(pl, 'P'), specPl = hasMoveWithCategory(pl, 'X');
		switch (stat) {
		case 'atk': return hasMoveWithCategory(ai, 'P') && setUp ? DECENT_EFFECT : 0;
		case 'def': return (physPl || !specPl) ? WEAK_EFFECT : 0;
		case 'spe': return ((hits >= 3 && !faster) || hits === UNKNOWN_HITS) ? DECENT_EFFECT : 0;
		case 'spa': return hasMoveWithCategory(ai, 'X') && setUp ? DECENT_EFFECT : 0;
		case 'spd': return (specPl || !physPl) ? WEAK_EFFECT : 0;
		case 'atk_2': return hasMoveWithCategory(ai, 'P') && setUp ? GOOD_EFFECT : 0;
		case 'def_2': return (physPl || !specPl) ? DECENT_EFFECT : 0;
		case 'spe_2': return ((hits >= 3 && !faster) || hits === UNKNOWN_HITS) ? GOOD_EFFECT : 0;
		case 'spa_2': return hasMoveWithCategory(ai, 'X') && setUp ? GOOD_EFFECT : 0;
		case 'spd_2': return (specPl || !physPl) ? DECENT_EFFECT : 0;
		case 'acc': return ai.stages.acc <= 3 ? DECENT_EFFECT : 0;
		case 'eva': return (hits > 3 || hits === UNKNOWN_HITS) ? GOOD_EFFECT : DECENT_EFFECT;
		}
		return 0;
	};

	// ShouldRecover
	Scorer.prototype.shouldRecover = function (m, healPercent) {
		var ctx = this.ctx;
		if (!aiIsFaster(ctx, m)) return false;
		var heal = Math.floor(healPercent * m.dmg.med / 100); // come nel C: percentuale del "danno" della mossa (0 per le cure)
		if (canTargetFaintAi(ctx) && !canTargetFaintAiWithMod(ctx, heal, 0)) return true;
		if (!canTargetFaintAi(ctx) && ctx.ai.hpPct < 60 && (this.rand() % 3)) return true;
		return false;
	};

	// AI_CalcMoveEffectScore (casi principali)
	Scorer.prototype.moveEffectScore = function (m) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player, self = this;
		var score = 0;
		var eff = effectiveness(ctx, m);
		function adj(v, why) { score += v; self.log(m, v, why); }
		var tryFaint = canAIFaintTarget(ctx, 0);

		switch (m.nvs) {
		case 'POISON': case 'TOXIC': this.poisonScore(m, adj, tryFaint); break;
		case 'SLEEP': this.sleepScore(m, adj, tryFaint); break;
		case 'PARALYSIS': this.paralyzeScore(m, adj, tryFaint); break;
		case 'BURN': this.burnScore(m, adj, tryFaint); break;
		case 'FREEZE_OR_FROSTBITE': this.frostbiteScore(m, adj, tryFaint); break;
		}

		var hpAtk = ai.hpPct, hpDef = pl.hpPct;
		switch (m.effect) {
		case 'YAWN': this.sleepScore(m, adj, tryFaint); break;
		case 'ABSORB':
			if (ai.hold === 'BIG_ROOT' && eff >= 1) adj(DECENT_EFFECT, 'Big Root');
			break;
		case 'DREAM_EATER': case 'STRENGTH_SAP': case 'AQUA_RING':
			if (ai.hold === 'BIG_ROOT') adj(DECENT_EFFECT, 'Big Root');
			break;
		case 'ATTACK_UP': case 'ATTACK_UP_USER_ALLY': adj(this.statUpScore('atk', true), 'Atk boost'); break;
		case 'ATTACK_UP_2': adj(this.statUpScore('atk_2', true), 'Atk +2'); break;
		case 'DEFENSE_UP': case 'DEFENSE_UP_3': adj(this.statUpScore('def', true), 'Def boost'); break;
		case 'DEFENSE_UP_2': adj(this.statUpScore('def_2', true), 'Def +2'); break;
		case 'SPEED_UP': adj(this.statUpScore('spe', true), 'Spe boost'); break;
		case 'SPEED_UP_2': adj(this.statUpScore('spe_2', true), 'Spe +2'); break;
		case 'SPECIAL_ATTACK_UP': adj(this.statUpScore('spa', true), 'SpA boost'); break;
		case 'SPECIAL_ATTACK_UP_2': case 'SPECIAL_ATTACK_UP_3': adj(this.statUpScore('spa_2', true), 'SpA +2'); break;
		case 'SPECIAL_DEFENSE_UP': adj(this.statUpScore('spd', true), 'SpD boost'); break;
		case 'SPECIAL_DEFENSE_UP_2': adj(this.statUpScore('spd_2', true), 'SpD +2'); break;
		case 'ACCURACY_UP': case 'ACCURACY_UP_2': adj(this.statUpScore('acc', true), 'accuracy boost'); break;
		case 'EVASION_UP': case 'EVASION_UP_2': adj(this.statUpScore('eva', true), 'evasion boost'); break;
		case 'ATTACK_DOWN': case 'ATTACK_DOWN_2':
			if (!shouldLowerAttack(ctx, m)) adj(-2, 'Atk drop not useful');
			if (pl.stages.atk < 6) adj(-1, 'Atk already lowered'); else if (hpAtk <= 90) adj(-1, 'AI HP <= 90%');
			if (pl.stages.atk > 3 && !this.randLessThan(50)) adj(-2, 'random (80%)');
			else if (hpDef < 70) adj(-2, 'target HP < 70%');
			break;
		case 'DEFENSE_DOWN': case 'DEFENSE_DOWN_2':
			if (!shouldLowerDefense(ctx, m)) adj(-2, 'Def drop not useful');
			if ((hpAtk < 70 && !this.randLessThan(50)) || (pl.stages.def <= 3 && !this.randLessThan(50))) adj(-2, 'random');
			if (hpDef <= 70) adj(-2, 'target HP <= 70%');
			break;
		case 'SPEED_DOWN': case 'SPEED_DOWN_2':
			if (aiIsFaster(ctx, m)) adj(-3, 'AI already faster');
			else if (!this.randLessThan(70)) adj(DECENT_EFFECT, 'random (73%)');
			break;
		case 'SPECIAL_ATTACK_DOWN': case 'SPECIAL_ATTACK_DOWN_2':
			if (!shouldLowerSpAtk(ctx, m)) adj(-2, 'SpA drop not useful');
			if (pl.stages.spa < 6) adj(-1, 'SpA already lowered'); else if (hpAtk <= 90) adj(-1, 'AI HP <= 90%');
			if (pl.stages.spa > 3 && !this.randLessThan(50)) adj(-2, 'random (80%)');
			else if (hpDef < 70) adj(-2, 'target HP < 70%');
			break;
		case 'SPECIAL_DEFENSE_DOWN': case 'SPECIAL_DEFENSE_DOWN_2':
			if (!shouldLowerSpDef(ctx, m)) adj(-2, 'SpD drop not useful');
			if ((hpAtk < 70 && !this.randLessThan(50)) || (pl.stages.spd <= 3 && !this.randLessThan(50))) adj(-2, 'random');
			if (hpDef <= 70) adj(-2, 'target HP <= 70%');
			break;
		case 'ACCURACY_DOWN': case 'ACCURACY_DOWN_2':
			if (shouldLowerAccuracy(ctx, m)) adj(-2, 'accuracy drop');
			if ((hpAtk < 70 || hpDef < 70) && this.randLessThan(100)) adj(-1, 'random');
			if (pl.stages.acc <= 4 && !this.randLessThan(80)) adj(-2, 'random');
			if ((pl.status === 'psn' || pl.status === 'tox') && !this.randLessThan(70)) adj(DECENT_EFFECT, 'target poisoned (random)');
			if (ctx.playerSide.isSeeded && !this.randLessThan(70)) adj(DECENT_EFFECT, 'target seeded (random)');
			if (hpAtk > 70 || pl.stages.acc < 6) break;
			if (hpAtk < 40 || hpDef < 40 || !this.randLessThan(70)) adj(-2, 'low HP / random');
			break;
		case 'EVASION_DOWN': case 'EVASION_DOWN_2':
			if (!shouldLowerEvasion(ctx, m)) adj(-2, 'evasion drop not useful');
			if ((hpAtk < 70 || pl.stages.eva <= 3) && !this.randLessThan(50)) adj(-2, 'random');
			if (hpDef <= 70) adj(-2, 'target HP <= 70%');
			if (ai.stages.acc < 6) adj(WEAK_EFFECT, 'AI accuracy lowered');
			if (pl.stages.eva < 7 || hasAbility(ai, 'noguard')) adj(-2, 'evasion not raised');
			break;
		case 'ATTACK_ACCURACY_UP':
			adj(this.statUpScore('atk', true), 'Atk boost'); adj(this.statUpScore('acc', true), 'accuracy boost'); break;
		case 'GROWTH': case 'ATTACK_SPATK_UP':
			adj(this.statUpScore('atk', true), 'Atk boost'); adj(this.statUpScore('spa', true), 'SpA boost'); break;
		case 'HAZE':
			adj(Math.min(countPositive(pl), 4), 'clears target boosts'); break;
		case 'ROAR':
			if ((m.flags.sound && hasAbility(pl, 'soundproof')) || hasAbility(pl, 'suctioncups')) break;
			adj(Math.min(countPositive(pl), 4), 'removes target boosts'); break;
		case 'MULTI_HIT': case 'TRIPLE_KICK': case 'POPULATION_BOMB':
			if (m.flags.contact && !hasAbility(ai, 'longreach') && ai.hold !== 'PROTECTIVE_PADS' && !hasAbility(ai, 'magicguard') && pl.hold === 'ROCKY_HELMET') adj(-2, 'Rocky Helmet');
			break;
		case 'RESTORE_HP': case 'SOFTBOILED': case 'ROOST': case 'MORNING_SUN': case 'SYNTHESIS': case 'MOONLIGHT':
			if (this.shouldRecover(m, 50)) adj(GOOD_EFFECT, 'should heal');
			break;
		case 'SHORE_UP':
			if (this.shouldRecover(m, isWeather(ctx, ['SAND']) ? 67 : 50)) adj(DECENT_EFFECT, 'should heal');
			break;
		case 'LIGHT_SCREEN': case 'REFLECT': case 'AURORA_VEIL':
			if (this.shouldSetScreen(m.effect)) {
				adj(BEST_EFFECT, 'screen useful');
				if (ai.hold === 'LIGHT_CLAY') adj(DECENT_EFFECT, 'Light Clay');
			}
			break;
		case 'REST':
			if (!canBeSlept(ctx, ai)) break;
			if (this.shouldRecover(m, 100)) {
				if (ai.hold === 'CURE_SLP' || ai.hold === 'CURE_STATUS' || hasMoveWithEffect(ai, 'SLEEP_TALK') || hasMoveWithEffect(ai, 'SNORE')
					|| hasAbility(ai, 'shedskin') || hasAbility(ai, 'earlybird') || (isWeather(ctx, RAIN) && hasAbility(ai, 'hydration'))) adj(GOOD_EFFECT, 'Rest synergy');
			}
			break;
		case 'FOCUS_ENERGY': case 'LASER_FOCUS':
			if (hasAbility(ai, 'superluck') || hasAbility(ai, 'sniper') || ai.hold === 'SCOPE_LENS' || ai.moves.some(function (x) { return x && x.crit; })) adj(GOOD_EFFECT, 'crit synergy');
			break;
		case 'CONFUSE':
			this.confusionScore(m, adj, tryFaint); break;
		case 'SUBSTITUTE':
			adj(this.substituteScore(), 'Substitute'); break;
		case 'LEECH_SEED':
			if (isType(pl, 'Grass') || ctx.playerSide.isSeeded || hasMoveWithEffect(pl, 'RAPID_SPIN') || hasAbility(pl, 'liquidooze') || hasAbility(pl, 'magicguard')) break;
			adj(GOOD_EFFECT, 'Leech Seed');
			if (!hasDamagingMove(pl) || ai.hold === 'BIG_ROOT') adj(DECENT_EFFECT, 'passive target / Big Root');
			break;
		case 'HIT_ESCAPE': case 'PARTING_SHOT': case 'CHILLY_RECEPTION':
			var piv = this.shouldPivot(m);
			if (piv === 'DONT') adj(-10, 'shouldn\'t pivot');
			else if (piv === 'SHOULD') adj(BEST_EFFECT, 'should pivot');
			break;
		case 'ENCORE':
			break; // nessuna mossa precedente nota
		case 'SLEEP_TALK': case 'SNORE':
			if (ai.status === 'slp') adj(BEST_EFFECT, 'asleep');
			break;
		case 'DESTINY_BOND':
			if (aiIsFaster(ctx, m) && canTargetFaintAi(ctx)) adj(GOOD_EFFECT, 'AI about to faint');
			break;
		case 'WISH': case 'HEAL_BELL':
			if (m.effect === 'HEAL_BELL' ? hasStatus(ai) : ai.hpPct < 65) adj(DECENT_EFFECT, 'heals the team');
			break;
		case 'CURSE':
			if (isType(ai, 'Ghost')) adj(WEAK_EFFECT, 'Curse');
			else { adj(this.statUpScore('atk', true), 'Atk boost'); adj(this.statUpScore('def', true), 'Def boost'); }
			break;
		case 'PROTECT':
			if (['quickguard', 'wideguard', 'craftyshield', 'matblock'].indexOf(m.id) >= 0) break;
			this.protectChecks(m, adj);
			break;
		case 'ENDURE':
			if (canTargetFaintAi(ctx)) {
				if (ai.hp > ai.maxHP / 4 && ai.hold === 'PINCH') adj(GOOD_EFFECT, 'pinch berry');
				else if (ai.hp > 1 && (hasMoveWithEffect(ai, 'FLAIL') || hasMoveWithEffect(ai, 'ENDEAVOR'))) adj(GOOD_EFFECT, 'Flail/Endeavor');
			}
			break;
		case 'SPIKES': case 'STEALTH_ROCK': case 'STICKY_WEB': case 'TOXIC_SPIKES':
			if (this.shouldSetHazards()) adj(ctx.firstTurn ? BEST_EFFECT : DECENT_EFFECT, ctx.firstTurn ? 'hazard on first turn' : 'hazard');
			break;
		case 'FORESIGHT':
			if (hasAbility(ai, 'scrappy') || hasAbility(ai, 'mindseye')) break;
			if (pl.stages.eva > 6 || (isType(pl, 'Ghost') && (hasMoveWithType(ai, 'Normal') || hasMoveWithType(ai, 'Fighting')))) adj(DECENT_EFFECT, 'Foresight useful');
			break;
		case 'SANDSTORM':
			if (this.shouldSetWeather('SAND')) {
				adj(DECENT_EFFECT, 'sandstorm useful');
				if (ai.hold === 'SMOOTH_ROCK') adj(WEAK_EFFECT, 'Smooth Rock');
				if (hasMoveWithEffect(pl, 'MORNING_SUN') || hasMoveWithEffect(pl, 'SYNTHESIS') || hasMoveWithEffect(pl, 'MOONLIGHT')) adj(WEAK_EFFECT, 'weakens target healing');
			}
			break;
		case 'HAIL': case 'SNOWSCAPE':
			if (this.shouldSetWeather(m.effect === 'HAIL' ? 'HAIL' : 'SNOW')) {
				if (hasMoveWithEffect(ai, 'AURORA_VEIL') && !hasMoveWithEffect(pl, 'BRICK_BREAK') && !ctx.aiSide.isReflect && !ctx.aiSide.isLightScreen && !ctx.aiSide.isAuroraVeil) adj(GOOD_EFFECT, 'sets up Aurora Veil');
				adj(DECENT_EFFECT, 'weather useful');
				if (ai.hold === 'ICY_ROCK') adj(WEAK_EFFECT, 'Icy Rock');
				if (hasMoveWithEffect(pl, 'MORNING_SUN') || hasMoveWithEffect(pl, 'SYNTHESIS') || hasMoveWithEffect(pl, 'MOONLIGHT')) adj(WEAK_EFFECT, 'weakens target healing');
			}
			break;
		case 'RAIN_DANCE':
			if (this.shouldSetWeather('RAIN')) {
				adj(DECENT_EFFECT, 'rain useful');
				if (ai.hold === 'DAMP_ROCK') adj(WEAK_EFFECT, 'Damp Rock');
				if (hasMoveWithEffect(pl, 'MORNING_SUN') || hasMoveWithEffect(pl, 'SYNTHESIS') || hasMoveWithEffect(pl, 'SOLAR_BEAM') || hasMoveWithEffect(pl, 'MOONLIGHT')) adj(WEAK_EFFECT, 'counters the target');
				if (hasMoveWithType(pl, 'Fire')) adj(WEAK_EFFECT, 'weakens target Fire moves');
			}
			break;
		case 'SUNNY_DAY':
			if (this.shouldSetWeather('SUN')) {
				adj(DECENT_EFFECT, 'sun useful');
				if (ai.hold === 'HEAT_ROCK') adj(WEAK_EFFECT, 'Heat Rock');
				if (hasMoveWithType(pl, 'Water')) adj(WEAK_EFFECT, 'weakens target Water moves');
				if (movesOf(pl).some(function (x) { return x.id === 'thunder' || x.id === 'hurricane'; })) adj(WEAK_EFFECT, 'lowers target accuracy');
			}
			break;
		case 'FELL_STINGER':
			if (ai.stages.atk < 12 && !hasAbility(ai, 'contrary') && canIndexMoveFaintTarget(ctx, m)) adj(BEST_EFFECT, 'Fell Stinger KO');
			break;
		case 'BELLY_DRUM':
			if (!canTargetFaintAi(ctx) && ai.stages.atk < 10 && hasMoveWithCategory(ai, 'P') && !hasAbility(ai, 'contrary')) adj(BEST_EFFECT, 'safe Belly Drum');
			break;
		case 'DEFENSE_CURL':
			if (hasMoveWithEffect(ai, 'ROLLOUT')) adj(DECENT_EFFECT, 'Rollout synergy');
			adj(this.statUpScore('def', true), 'Def boost');
			break;
		case 'FIRST_TURN_ONLY':
			if (this.shouldFakeOut(m) && m.ae.some(function (x) { return x[0] === 'FLINCH' && x[1] === 100; })) adj(GOOD_EFFECT, 'Fake Out');
			else if (ctx.firstTurn && bestDmgMove(ai) === m) adj(BEST_EFFECT, 'first turn, strongest move');
			break;
		case 'STOCKPILE':
			if (hasAbility(ai, 'contrary')) break;
			if (hasMoveWithEffect(ai, 'SWALLOW') || hasMoveWithEffect(ai, 'SPIT_UP')) adj(DECENT_EFFECT, 'Stockpile synergy');
			adj(this.statUpScore('def', true), 'Def boost'); adj(this.statUpScore('spd', true), 'SpD boost');
			break;
		case 'SWAGGER': case 'FLATTER':
			if (hasMoveWithEffect(ai, 'FOUL_PLAY') || hasMoveWithEffect(ai, 'PSYCH_UP')) adj(DECENT_EFFECT, 'synergy');
			if (hasAbility(pl, 'contrary')) adj(GOOD_EFFECT, 'Contrary');
			this.confusionScore(m, adj, tryFaint);
			break;
		case 'ATTRACT':
			if (!aiIsFaster(ctx, m) && willFaintFromSecondary(ctx, pl)) break;
			if (hasStatus(pl)) adj(GOOD_EFFECT, 'target has status'); else adj(DECENT_EFFECT, 'Attract');
			break;
		case 'SAFEGUARD':
			if (!terrainAffects(ctx, ai, 'Misty')) adj(DECENT_EFFECT, 'Safeguard');
			break;
		case 'CHARGE':
			if (hasDamagingMoveOfType(ai, 'Electric')) adj(DECENT_EFFECT, 'charges Electric moves');
			adj(this.statUpScore('spd', true), 'SpD boost');
			break;
		case 'TAUNT':
			if (hasMoveWithCategory(pl, 'S')) adj(DECENT_EFFECT, 'target has status moves');
			break;
		case 'TRICK': case 'BESTOW':
			this.trickScore(m, adj); break;
		case 'INGRAIN':
			adj(WEAK_EFFECT, 'Ingrain'); if (ai.hold === 'BIG_ROOT') adj(GOOD_EFFECT, 'Big Root'); break;
		case 'REFRESH':
			if (hasStatus(ai)) adj(DECENT_EFFECT, 'cures status'); break;
		case 'BRICK_BREAK': case 'RAGING_BULL':
			if (ctx.playerSide.isReflect) adj(DECENT_EFFECT, 'breaks Reflect');
			if (ctx.playerSide.isLightScreen) adj(DECENT_EFFECT, 'breaks Light Screen');
			if (ctx.playerSide.isAuroraVeil) adj(DECENT_EFFECT, 'breaks Aurora Veil');
			break;
		case 'COSMIC_POWER':
			adj(this.statUpScore('def', true), 'Def boost'); adj(this.statUpScore('spd', true), 'SpD boost'); break;
		case 'BULK_UP':
			adj(this.statUpScore('atk', true), 'Atk boost'); adj(this.statUpScore('def', true), 'Def boost'); break;
		case 'CALM_MIND':
			adj(this.statUpScore('spa', true), 'SpA boost'); adj(this.statUpScore('spd', true), 'SpD boost'); break;
		case 'GEOMANCY':
			if (ai.hold === 'POWER_HERB') adj(GOOD_EFFECT, 'Power Herb');
			/* falls through */
		case 'QUIVER_DANCE':
			adj(this.statUpScore('spe', true), 'Spe boost'); adj(this.statUpScore('spa', true), 'SpA boost'); adj(this.statUpScore('spd', true), 'SpD boost'); break;
		case 'VICTORY_DANCE':
			adj(this.statUpScore('spe', true), 'Spe boost'); adj(this.statUpScore('atk', true), 'Atk boost'); adj(this.statUpScore('def', true), 'Def boost'); break;
		case 'SHELL_SMASH':
			if (ai.hold === 'WHITE_HERB') adj(WEAK_EFFECT, 'White Herb');
			adj(this.statUpScore('spe', true), 'Spe boost'); adj(this.statUpScore('spa', true), 'SpA boost'); adj(this.statUpScore('atk', true), 'Atk boost'); break;
		case 'DRAGON_DANCE': case 'SHIFT_GEAR':
			adj(this.statUpScore('spe', true), 'Spe boost'); adj(this.statUpScore('atk', true), 'Atk boost'); break;
		case 'ELECTRIC_TERRAIN': case 'MISTY_TERRAIN':
		case 'GRASSY_TERRAIN': case 'PSYCHIC_TERRAIN':
			adj(GOOD_EFFECT, 'terrain');
			if (ai.hold === 'TERRAIN_EXTENDER') adj(GOOD_EFFECT, 'Terrain Extender');
			break;
		case 'TRICK_ROOM':
			if (ai.speed < pl.speed) adj(GOOD_EFFECT, 'AI slower');
			break;
		case 'MAGIC_ROOM':
			adj(WEAK_EFFECT, 'Magic Room');
			if (!ai.item && pl.item) adj(WEAK_EFFECT, 'target has an item');
			break;
		case 'TAILWIND':
			adj(this.tailwindScore(m), 'Tailwind');
			break;
		case 'ENDEAVOR':
			if (!aiIsFaster(ctx, m) && !canTargetFaintAi(ctx)) adj(DECENT_EFFECT, 'Endeavor');
			break;
		case 'RAPID_SPIN':
			if (((ctx.aiSide.isSR || ctx.aiSide.spikes) && ctx.aiPartyLeft) || ctx.aiSide.isSeeded) adj(GOOD_EFFECT, 'removes hazards/Leech Seed');
			break;
		case 'KNOCK_OFF':
			if (pl.item && !hasAbility(pl, 'stickyhold') && pl.hold !== 'LAGGING_TAIL' && pl.hold !== 'STICKY_BARB') adj(DECENT_EFFECT, 'removes item');
			break;
		case 'SMACK_DOWN':
			if (!isGrounded(ctx, pl) && hasDamagingMoveOfType(ai, 'Ground') && !canTargetFaintAi(ctx)) adj(DECENT_EFFECT, 'grounds the target');
			break;
		case 'SOAK':
			if (hasMoveWithType(ai, 'Electric') || hasMoveWithType(ai, 'Grass')) adj(DECENT_EFFECT, 'creates weaknesses');
			break;
		case 'HEAL_BLOCK':
			if (movesOf(pl).some(function (x) { return x.flags.heal; }) || pl.hold === 'LEFTOVERS' || (pl.hold === 'BLACK_SLUDGE' && isType(pl, 'Poison'))) adj(DECENT_EFFECT, 'blocks healing');
			break;
		case 'TOXIC_THREAD':
			this.poisonScore(m, adj, tryFaint); adj(this.statUpScore('spe', true), 'Spe boost');
			break;
		case 'PERISH_SONG':
			break;
		}

		// effetti aggiuntivi garantiti
		var serene = hasAbility(ai, 'serenegrace') ? 2 : 1;
		for (var i = 0; i < m.ae.length; i++) {
			var me = m.ae[i][0], chance = m.ae[i][1], isSelf = !!m.ae[i][2];
			if (!(chance === 0 || chance * serene >= 100)) continue;
			if (isSelf) {
				var up = /^(ATK|DEF|SPD|SP_ATK|SP_DEF)_PLUS_([12])$/.exec(me);
				var down = /^(ATK|DEF|SPD|SP_ATK|SP_DEF)_MINUS_([12])$/.exec(me);
				var map = {ATK: 'atk', DEF: 'def', SPD: 'spe', SP_ATK: 'spa', SP_DEF: 'spd'};
				if (!hasAbility(ai, 'contrary')) {
					// "_PLUS_2" -> STAT_CHANGE_*_2 (fix della ROM, commit 3bc6906e18)
					if (up) adj(this.statUpScore(map[up[1]] + (up[2] === '2' ? '_2' : ''), true), 'guaranteed stat boost');
					else if (/^ACC_PLUS/.test(me)) adj(this.statUpScore('acc', true), 'accuracy boost');
					else if (/^EVS_PLUS/.test(me)) adj(this.statUpScore('eva', true), 'evasion boost');
				} else {
					// IncreaseStatUpScoreContrary: "_MINUS_2" -> STAT_CHANGE_*_2 (fix della ROM, commit 3bc6906e18)
					if (down) adj(this.statUpScore(map[down[1]] + (down[2] === '2' ? '_2' : ''), false), 'Contrary');
					else if (me === 'DEF_SPDEF_DOWN') { adj(this.statUpScore('def', false), 'Contrary'); adj(this.statUpScore('spd', false), 'Contrary'); }
					else if (me === 'ATK_DEF_DOWN') { adj(this.statUpScore('atk', false), 'Contrary'); adj(this.statUpScore('def', false), 'Contrary'); }
					else if (me === 'V_CREATE') { adj(this.statUpScore('def', false), 'Contrary'); adj(this.statUpScore('spe', false), 'Contrary'); adj(this.statUpScore('spd', false), 'Contrary'); }
				}
			} else {
				switch (me) {
				case 'FLINCH':
					adj(shouldTryToFlinch(ctx, m), 'flinch');
					break;
				case 'SPD_MINUS_1': case 'SPD_MINUS_2':
					if (!shouldLowerSpeed(ctx, m)) break;
					/* falls through */
				case 'ATK_MINUS_1': case 'DEF_MINUS_1': case 'SP_ATK_MINUS_1': case 'SP_DEF_MINUS_1': case 'ACC_MINUS_1': case 'EVS_MINUS_1':
				case 'ATK_MINUS_2': case 'DEF_MINUS_2': case 'SP_ATK_MINUS_2': case 'SP_DEF_MINUS_2': case 'ACC_MINUS_2': case 'EVS_MINUS_2':
					if (!hasAbility(pl, 'contrary')) adj(DECENT_EFFECT, 'lowers a target stat');
					break;
				case 'POISON':
					this.poisonScore(m, adj, tryFaint); break;
				case 'CLEAR_SMOG':
					adj(Math.min(countPositive(pl), 4), 'clears boosts'); break;
				case 'BUG_BITE':
					if (!hasAbility(pl, 'stickyhold') && /berry$/.test(pl.item)) adj(DECENT_EFFECT, 'eats the berry'); break;
				case 'INCINERATE':
					if (!hasAbility(pl, 'stickyhold') && (/berry$/.test(pl.item) || /gem$/.test(pl.item))) adj(DECENT_EFFECT, 'burns the berry'); break;
				case 'STEALTH_ROCK': case 'SPIKES':
					adj(ctx.firstTurn ? BEST_EFFECT : DECENT_EFFECT, 'sets hazard'); break; // nel C manca il controllo (if con ';')
				case 'THROAT_CHOP':
					var best = bestDmgMove(pl);
					if (best && best.flags.sound) adj(aiIsFaster(ctx, m) ? GOOD_EFFECT : DECENT_EFFECT, 'blocks sound moves');
					break;
				case 'WRAP':
					break; // ShouldTrap: senza flag Stall serve che il bersaglio muoia per danni residui
				case 'SALT_CURE':
					if (isType(pl, 'Water') || isType(pl, 'Steel')) adj(DECENT_EFFECT, 'Salt Cure super effective');
					break;
				}
			}
		}

		// AI_CalcHoldEffectMoveScore
		if (ai.hold === 'BLUNDER_POLICY') {
			if (moveAccuracy(ctx, m) <= 75) adj(GOOD_EFFECT, 'Blunder Policy'); else adj(-DECENT_EFFECT, 'Blunder Policy');
		}
		return score;
	};

	function countPositive(b) {
		var n = 0;
		['atk', 'def', 'spe', 'spa', 'spd', 'acc', 'eva'].forEach(function (s) { if (b.stages[s] > 6) n++; });
		return n;
	}

	Scorer.prototype.poisonScore = function (m, adj, tryFaint) {
		var ctx = this.ctx, pl = ctx.player, ai = ctx.ai;
		if (tryFaint || pl.hold === 'CURE_PSN' || pl.hold === 'CURE_STATUS') return;
		if (aiCanPoison(ctx, m) && pl.hpPct > 20) {
			if (!hasDamagingMove(pl)) adj(DECENT_EFFECT, 'target has no attacks');
			if (hasMoveWithEffect(ai, 'VENOSHOCK') || hasMoveWithEffect(ai, 'VENOM_DRENCH') || hasAbility(ai, 'merciless')) adj(DECENT_EFFECT, 'poison synergy');
			else adj(WEAK_EFFECT, 'poisons');
		}
	};
	Scorer.prototype.burnScore = function (m, adj, tryFaint) {
		var ctx = this.ctx, pl = ctx.player;
		if (tryFaint || pl.hold === 'CURE_BRN' || pl.hold === 'CURE_STATUS') return;
		if (!aiCanBurn(ctx, m)) return;
		var physical = hasMoveWithCategory(pl, 'P') || (!ctx.omniscient && (pl.baseStats.atk || 0) >= (pl.baseStats.spa || 0) + 10);
		if (physical) {
			var best = bestDmgMove(pl);
			if (best && best.category === 'P') adj(DECENT_EFFECT, 'burns a physical attacker');
			else adj(WEAK_EFFECT, 'burns');
		}
		if (hasMoveWithEffect(ctx.ai, 'HEX')) adj(WEAK_EFFECT, 'Hex synergy');
	};
	Scorer.prototype.paralyzeScore = function (m, adj, tryFaint) {
		var ctx = this.ctx, pl = ctx.player, ai = ctx.ai;
		if (tryFaint || pl.hold === 'CURE_PAR' || pl.hold === 'CURE_STATUS') return;
		if (!aiCanParalyze(ctx, m)) return;
		var atkSpeed = ai.speed, defSpeed = pl.speed;
		var flinchMove = ai.moves.some(function (x) { return x && x.effect !== 'FIRST_TURN_ONLY' && x.ae.some(function (e) { return e[0] === 'FLINCH'; }); });
		if ((defSpeed >= atkSpeed && Math.floor(defSpeed / 2) < atkSpeed) || hasMoveWithEffect(ai, 'HEX') || flinchMove) adj(GOOD_EFFECT, 'paralysis makes AI faster');
		else adj(DECENT_EFFECT, 'paralyzes');
	};
	Scorer.prototype.sleepScore = function (m, adj, tryFaint) {
		var ctx = this.ctx, pl = ctx.player, ai = ctx.ai;
		var best = bestDmgMove(ai);
		if ((tryFaint && !(best && best.effect === 'FOCUS_PUNCH')) || pl.hold === 'CURE_SLP' || pl.hold === 'CURE_STATUS') return;
		if (!aiCanSleep(ctx)) return;
		adj(DECENT_EFFECT, 'puts to sleep');
		if ((hasMoveWithEffect(ai, 'DREAM_EATER') || hasMoveWithEffect(ai, 'NIGHTMARE')) && !(hasMoveWithEffect(pl, 'SNORE') || hasMoveWithEffect(pl, 'SLEEP_TALK'))) adj(WEAK_EFFECT, 'Dream Eater synergy');
		if (hasMoveWithEffect(ai, 'HEX')) adj(WEAK_EFFECT, 'Hex synergy');
	};
	Scorer.prototype.frostbiteScore = function (m, adj, tryFaint) {
		var ctx = this.ctx, pl = ctx.player;
		if (tryFaint) return;
		if (!aiCanFrostbite(ctx, m)) return;
		var special = hasMoveWithCategory(pl, 'X') || (!ctx.omniscient && (pl.baseStats.spa || 0) >= (pl.baseStats.atk || 0) + 10);
		if (special) {
			var best = bestDmgMove(pl);
			adj(best && best.category === 'X' ? DECENT_EFFECT : WEAK_EFFECT, 'freezes');
		}
	};
	Scorer.prototype.confusionScore = function (m, adj, tryFaint) {
		var ctx = this.ctx, pl = ctx.player, ai = ctx.ai;
		if (tryFaint || pl.hold === 'CURE_CONFUSION' || pl.hold === 'CURE_STATUS') return;
		if (!aiCanConfuse(ctx)) return;
		var flinchMove = ai.moves.some(function (x) { return x && x.effect !== 'FIRST_TURN_ONLY' && x.ae.some(function (e) { return e[0] === 'FLINCH'; }); });
		if (pl.status === 'par' || (hasAbility(ai, 'serenegrace') && flinchMove)) adj(GOOD_EFFECT, 'confuses (synergy)');
		else adj(DECENT_EFFECT, 'confuses');
	};
	Scorer.prototype.protectChecks = function (m, adj) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		var uses = ctx.protectUses;
		if (uses === 0) {
			if (this.rand() % 256 < 100) adj(WEAK_EFFECT, 'Protect (random 39%)');
		} else {
			adj(-(ctx.doubles ? 2 : 1) * Math.min(uses, 3), 'recent Protect');
		}
		if (ai.status === 'psn' || ai.status === 'tox' || ai.status === 'brn' || ctx.aiSide.isSeeded) adj(-1, 'takes residual damage');
		if (pl.status === 'tox' || ctx.playerSide.isSeeded) adj(DECENT_EFFECT, 'target takes residual damage');
	};
	Scorer.prototype.shouldSetScreen = function (effect) {
		var ctx = this.ctx, pl = ctx.player, side = ctx.aiSide;
		if (hasMoveWithEffect(pl, 'BRICK_BREAK') || hasMoveWithEffect(pl, 'RAGING_BULL')) return false;
		switch (effect) {
		case 'AURORA_VEIL': return isWeather(ctx, ['HAIL', 'SNOW']) && !(side.isReflect || side.isLightScreen || side.isAuroraVeil);
		case 'REFLECT': return hasMoveWithCategory(pl, 'P') && !side.isReflect;
		case 'LIGHT_SCREEN': return hasMoveWithCategory(pl, 'X') && !side.isLightScreen;
		}
		return false;
	};
	Scorer.prototype.shouldSetHazards = function () {
		var ctx = this.ctx, pl = ctx.player;
		if (hasAbility(pl, 'magicbounce') || !ctx.playerPartyLeft) return false;
		if (['RAPID_SPIN', 'TIDY_UP', 'DEFOG', 'MAGIC_COAT', 'WINDSOM_OF_CHANGE'].some(function (e) { return hasMoveWithEffect(pl, e); }) || hasMoveWithAdditional(pl, 'DEFOG')) return false;
		return true;
	};
	Scorer.prototype.shouldSetWeather = function (w) {
		var ctx = this.ctx, ai = ctx.ai, ab = ai.ability, hold = ai.hold;
		switch (w) {
		case 'SAND':
			if (isWeather(ctx, ['SAND'].concat(PRIMAL))) return false;
			return ['sandveil', 'sandrush', 'sandforce', 'overcoat', 'magicguard'].indexOf(ab) >= 0 || hold === 'SAFETY_GOGGLES'
				|| isType(ai, 'Rock') || isType(ai, 'Ground') || isType(ai, 'Steel') || hasMoveWithEffect(ai, 'SHORE_UP') || hasMoveWithEffect(ai, 'WEATHER_BALL');
		case 'HAIL':
			if (isWeather(ctx, ['HAIL', 'SNOW'].concat(PRIMAL))) return false;
			return ['snowcloak', 'icebody', 'forecast', 'slushrush', 'magicguard', 'overcoat'].indexOf(ab) >= 0 || hold === 'SAFETY_GOGGLES'
				|| isType(ai, 'Ice') || movesOf(ai).some(function (x) { return x.id === 'blizzard'; }) || hasMoveWithEffect(ai, 'AURORA_VEIL') || hasMoveWithEffect(ai, 'WEATHER_BALL');
		case 'SNOW':
			if (isWeather(ctx, ['HAIL', 'SNOW'].concat(PRIMAL))) return false;
			return ['snowcloak', 'icebody', 'forecast', 'slushrush'].indexOf(ab) >= 0
				|| isType(ai, 'Ice') || movesOf(ai).some(function (x) { return x.id === 'blizzard'; }) || hasMoveWithEffect(ai, 'AURORA_VEIL') || hasMoveWithEffect(ai, 'WEATHER_BALL');
		case 'RAIN':
			if (isWeather(ctx, RAIN.concat(PRIMAL))) return false;
			return hold !== 'UTILITY_UMBRELLA' && (['swiftswim', 'forecast', 'hydration', 'raindish', 'dryskin'].indexOf(ab) >= 0
				|| movesOf(ai).some(function (x) { return x.id === 'thunder' || x.id === 'hurricane'; }) || hasMoveWithEffect(ai, 'WEATHER_BALL') || hasMoveWithType(ai, 'Water'));
		case 'SUN':
			if (isWeather(ctx, SUN.concat(PRIMAL))) return false;
			return hold !== 'UTILITY_UMBRELLA' && (['chlorophyll', 'flowergift', 'forecast', 'leafguard', 'solarpower', 'harvest'].indexOf(ab) >= 0
				|| ['SOLAR_BEAM', 'MORNING_SUN', 'SYNTHESIS', 'MOONLIGHT', 'WEATHER_BALL', 'GROWTH'].some(function (e) { return hasMoveWithEffect(ai, e); })
				|| hasMoveWithType(ai, 'Fire'));
		}
		return false;
	};
	Scorer.prototype.shouldFakeOut = function (m) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		if (!ctx.firstTurn || hasAbility(ai, 'gorillatactics') || ai.hold === 'CHOICE_BAND' || pl.hold === 'COVERT_CLOAK'
			|| (!moldBreaker(ai) && (hasAbility(pl, 'shielddust') || hasAbility(pl, 'innerfocus')))) return false;
		return true;
	};
	Scorer.prototype.substituteScore = function () {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player, inc = 0;
		if (movesOf(pl).length && bestDmgFromBattler(pl) < Math.floor(ai.maxHP / 4)) inc += GOOD_EFFECT;
		if (pl.status === 'slp') inc += GOOD_EFFECT;
		else if (['brn', 'psn', 'tox'].indexOf(pl.status) >= 0) inc += DECENT_EFFECT;
		if (hasNvsMove(pl, 'SLEEP') || hasNvsMove(pl, 'TOXIC') || hasNvsMove(pl, 'PARALYSIS') || hasNvsMove(pl, 'BURN')
			|| hasMoveWithEffect(pl, 'CONFUSE') || hasMoveWithEffect(pl, 'LEECH_SEED')) inc += GOOD_EFFECT;
		if (ai.hpPct > 70) inc += WEAK_EFFECT;
		return inc;
	};
	Scorer.prototype.trickScore = function (m, adj) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		switch (ai.hold) {
		case 'CHOICE_SCARF': adj(DECENT_EFFECT, 'passes Choice item'); break;
		case 'CHOICE_BAND': if (!hasMoveWithCategory(pl, 'P')) adj(DECENT_EFFECT, 'passes Choice Band'); break;
		case 'CHOICE_SPECS': if (!hasMoveWithCategory(pl, 'X')) adj(DECENT_EFFECT, 'passes Choice Specs'); break;
		case 'TOXIC_ORB': if (shouldPoison(ctx)) adj(DECENT_EFFECT, 'passes Toxic Orb'); break;
		case 'FLAME_ORB': if (shouldBurn(ctx)) adj(DECENT_EFFECT, 'passes Flame Orb'); break;
		case 'BLACK_SLUDGE': if (!isType(pl, 'Poison') && !hasAbility(pl, 'magicguard')) adj(DECENT_EFFECT, 'passes Black Sludge'); break;
		case 'LAGGING_TAIL': case 'STICKY_BARB': adj(DECENT_EFFECT, 'passes a harmful item'); break;
		default:
			if (m.effect !== 'BESTOW' && !ai.item && pl.item) adj(WEAK_EFFECT, 'steals the item');
		}
	};
	Scorer.prototype.tailwindScore = function (m) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player;
		if (ctx.aiSide.isTailwind) return 0;
		var movesFirst = aiIsFaster(ctx, m), userFaints = canTargetFaintAi(ctx);
		var userEndures = !userFaints && canTargetFaintAiWithMod(ctx, 0, 0) && atMaxHp(ai) && (ai.hold === 'FOCUS_SASH' || hasAbility(ai, 'sturdy'));
		if (userFaints && !movesFirst) return 0;
		var score = 0;
		var outspeeds = !userFaints && ai.speed <= pl.speed && ai.speed * 2 > pl.speed;
		if (outspeeds) score += GOOD_EFFECT;
		var fieldScore = 0;
		if (!userFaints) {
			movesOf(ai).forEach(function (x) {
				var s = 0;
				if (x.category === 'S') return;
				if (hasAbility(ai, 'windrider') && x.category === 'P') s = GOOD_EFFECT;
				else if (hasAbility(ai, 'windpower') && x.type === 'Electric') s = GOOD_EFFECT;
				else if (x.flags.wind) s = hasAbility(ai, 'windglider') ? GOOD_EFFECT : ((x.accuracy && x.accuracy < 100) || x.effect === 'TWO_TURNS_ATTACK') ? DECENT_EFFECT : 0;
				fieldScore = Math.max(fieldScore, s);
			});
		}
		score += Math.min(fieldScore, BEST_EFFECT);
		if (score > 0 && userEndures) score += DECENT_EFFECT;
		if (score > 0 && hasAbility(ai, 'prankster')) score += DECENT_EFFECT;
		return Math.min(score, 6);
	};

	// AI_CheckViability
	Scorer.prototype.checkViability = function (m, score) {
		var ctx = this.ctx;
		if (m.power) {
			if (aiHitsToKO(ctx, m) === 0) {
				score += NO_DAMAGE_OR_FAILS;
				this.log(m, NO_DAMAGE_OR_FAILS, 'no damage');
				return score;
			}
			if (bestDmgMove(ctx.ai) === m) {
				score += BEST_DAMAGE_MOVE;
				this.log(m, BEST_DAMAGE_MOVE, 'highest damage');
			} else {
				var c = this.compareDamagingMoves(m);
				score += c;
				this.log(m, c, 'best among fewest hits to KO');
			}
		}
		score += this.moveEffectScore(m);
		return score;
	};

	// AI_GetExplosionHPScore (custom della hack, commit 3bc6906e18): la probabilita di esplodere
	// cresce al calare dei PS: 10% a PS pieni, ~50% a meta, 90% all'1% (anche tetto massimo).
	var EXPLOSION_MIN_CHANCE = 10, EXPLOSION_MAX_CHANCE = 90, EXPLOSION_DOOMED_BONUS = 25;
	var EXPLOSION_USE_SCORE = BEST_EFFECT + GOOD_EFFECT, EXPLOSION_SKIP_SCORE = -10;
	Scorer.prototype.explosionHPScore = function (m) {
		var ctx = this.ctx, ai = ctx.ai;
		var hp = Math.max(1, ai.hpPct);
		var otherKO = ai.moves.some(function (x) {
			return x && x.effect !== 'EXPLOSION' && canIndexMoveFaintTarget(ctx, x) && aiIsFaster(ctx, x);
		});
		if (otherKO) return {score: EXPLOSION_SKIP_SCORE, why: 'Explosion: another move KOs first'};
		var chance = EXPLOSION_MIN_CHANCE + Math.floor((100 - hp) * (EXPLOSION_MAX_CHANCE - EXPLOSION_MIN_CHANCE) / 99);
		if (aiIsFaster(ctx, m) && canTargetFaintAi(ctx)) chance += EXPLOSION_DOOMED_BONUS;
		if (effectiveness(ctx, m) < 1) chance = Math.floor(chance / 2);
		if (chance > EXPLOSION_MAX_CHANCE) chance = EXPLOSION_MAX_CHANCE;
		if (this.rand() % 100 < chance) return {score: EXPLOSION_USE_SCORE, why: 'Explosion HP roll passed (' + chance + '%)'};
		return {score: EXPLOSION_SKIP_SCORE, why: 'Explosion HP roll failed (' + chance + '%)'};
	};

	// AI_HPAware
	Scorer.prototype.hpAware = function (m, score) {
		var ctx = this.ctx, ai = ctx.ai, pl = ctx.player, self = this, e = m.effect;
		function adj(v, why) { score += v; self.log(m, v, why); }
		var statChange = STAT_UP_EFFECTS[e] || STAT_DOWN_EFFECTS[e];
		// Custom (commit 3bc6906e18): Explosion / Self-Destruct / Misty Explosion in base ai PS
		if (e === 'EXPLOSION') {
			var expl = this.explosionHPScore(m);
			adj(expl.score, expl.why);
		}
		if (ai.hpPct > 70) {
			if (['RESTORE_HP', 'REST', 'DESTINY_BOND', 'FLAIL', 'ENDURE', 'MORNING_SUN', 'SYNTHESIS', 'MOONLIGHT', 'SHORE_UP', 'SOFTBOILED', 'ROOST', 'MEMENTO', 'GRUDGE'].indexOf(e) >= 0) adj(-2, 'HP Aware: high HP');
		} else if (ai.hpPct > 30) {
			if (statChange) adj(-2, 'HP Aware: medium HP');
			if (['BIDE', 'CONVERSION', 'LIGHT_SCREEN', 'REFLECT', 'MIST', 'FOCUS_ENERGY', 'CONVERSION_2', 'SAFEGUARD', 'BELLY_DRUM', 'FILLET_AWAY'].indexOf(e) >= 0) adj(-2, 'HP Aware: medium HP');
		} else {
			if (statChange) adj(-2, 'HP Aware: low HP');
			if (['BIDE', 'CONVERSION', 'REFLECT', 'LIGHT_SCREEN', 'MIST', 'FOCUS_ENERGY', 'RAGE', 'CONVERSION_2', 'LOCK_ON', 'SAFEGUARD', 'BELLY_DRUM', 'PSYCH_UP', 'MIRROR_COAT', 'TICKLE', 'SUNNY_DAY', 'SANDSTORM', 'HAIL', 'SNOWSCAPE', 'RAIN_DANCE', 'FILLET_AWAY'].indexOf(e) >= 0) adj(-2, 'HP Aware: low HP');
		}
		if (canIndexMoveFaintTarget(ctx, m)) {
			adj(DECENT_EFFECT, 'HP Aware: can KO');
		} else if (pl.hpPct > 30 && pl.hpPct <= 70) {
			if (HP_AWARE_MED_TARGET[e]) adj(-2, 'HP Aware: target medium HP');
			if (m.nvs === 'POISON') adj(-2, 'HP Aware: target medium HP');
		} else if (pl.hpPct <= 30) {
			if (m.category === 'S') adj(-2, 'HP Aware: target low HP');
		}
		return score;
	};

	Scorer.prototype.scoreAll = function () {
		var ctx = this.ctx, ai = ctx.ai;
		var scores = [0, 0, 0, 0];
		var i;
		for (i = 0; i < 4; i++) scores[i] = ai.moves[i] ? 100 : 0;
		var flags = ['checkBadMove', 'tryToFaint', 'checkViability', 'hpAware'];
		for (var f = 0; f < flags.length; f++) {
			for (i = 0; i < 4; i++) {
				var m = ai.moves[i];
				if (!m || scores[i] <= 0) { scores[i] = m ? scores[i] : 0; continue; }
				scores[i] = this[flags[f]](m, scores[i]);
			}
		}
		return scores;
	};

	Scorer.prototype.choose = function (scores) {
		var ai = this.ctx.ai;
		var best = [0], bestScore = scores[0];
		for (var i = 1; i < 4; i++) {
			if (!ai.moves[i]) continue;
			if (bestScore === scores[i]) best.push(i);
			if (bestScore < scores[i]) { best = [i]; bestScore = scores[i]; }
		}
		return best[this.rand() % best.length];
	};

	// ---------------------------------------------------------------------------------------
	// API pubblica
	// ---------------------------------------------------------------------------------------
	/*
	 * opts:
	 *   targets: [{label, actualItem, variants: [{player, playerResults, aiResults}]}]
	 *            in singolo un solo bersaglio; in doppio i due Pokemon del giocatore.
	 *            variants: con Omniscient una sola (il giocatore vero); altrimenti una per ogni
	 *            abilita che l'AI puo ipotizzare (scelta uniforme, come AI_DecideKnownAbilityForTurn).
	 *   omniscient, playerMovesKnown, firstTurn, aiPartyLeft, playerPartyLeft, protectUses,
	 *   doubles, allyAlive, field, aiField, typeChart
	 *
	 * Doppio (ChooseMoveOrAction_Doubles): per ogni bersaglio si sceglie la mossa migliore, poi
	 * vince il bersaglio con il punteggio piu alto (parita: a caso). Il flag AI_FLAG_DOUBLE_BATTLE
	 * (AI_DoubleBattle) e il bersaglio "alleato" non sono replicati.
	 */
	function predict(opts) {
		var targets = (opts.targets || []).filter(function (t) { return t && t.variants && t.variants.length; });
		if (!targets.length) return null;
		var contexts = targets.map(function (t) {
			return t.variants.map(function (v) { return buildContext(opts, v, t); });
		});
		var aiMoves = contexts[0][0].ai.moves;
		if (!aiMoves.some(function (m) { return !!m; })) return null;

		var counts = targets.map(function () { return [0, 0, 0, 0]; });
		var minScore = targets.map(function () { return [Infinity, Infinity, Infinity, Infinity]; });
		var maxScore = targets.map(function () { return [-Infinity, -Infinity, -Infinity, -Infinity]; });
		var traces = targets.map(function () { return [[], [], [], []]; });
		var rng = makeRng(0x5EED1234);

		for (var s = 0; s < SAMPLES; s++) {
			var picks = [];
			for (var t = 0; t < targets.length; t++) {
				var list = contexts[t];
				var ctx = list.length > 1 ? list[rng.u16() % list.length] : list[0];
				var scorer = new Scorer(ctx, rng, s === 0 ? traces[t] : null);
				var scores = scorer.scoreAll();
				for (var i = 0; i < 4; i++) {
					if (!aiMoves[i]) continue;
					if (scores[i] < minScore[t][i]) minScore[t][i] = scores[i];
					if (scores[i] > maxScore[t][i]) maxScore[t][i] = scores[i];
				}
				var move = scorer.choose(scores);
				picks.push({target: t, move: move, score: scores[move]});
			}
			var best = [picks[0]];
			for (var p = 1; p < picks.length; p++) {
				if (picks[p].score === best[0].score) best.push(picks[p]);
				else if (picks[p].score > best[0].score) best = [picks[p]];
			}
			var chosen = best.length > 1 ? best[rng.u16() % best.length] : best[0];
			counts[chosen.target][chosen.move]++;
		}

		return aiMoves.map(function (m, idx) {
			if (!m) return null;
			var byTarget = targets.map(function (tgt, t) {
				return {
					label: tgt.label,
					chance: counts[t][idx] / SAMPLES,
					scoreMin: minScore[t][idx],
					scoreMax: maxScore[t][idx],
					reasons: traces[t][idx]
				};
			});
			var main = byTarget.reduce(function (a, b) { return b.chance > a.chance ? b : a; }, byTarget[0]);
			return {
				name: m.name,
				chance: byTarget.reduce(function (sum, x) { return sum + x.chance; }, 0),
				target: main.label,
				byTarget: byTarget,
				scoreMin: main.scoreMin,
				scoreMax: main.scoreMax,
				reasons: main.reasons,
				estimated: !m.known
			};
		});
	}

	window.AiMovePredictor = {
		predict: predict,
		_internal: {buildContext: buildContext, Scorer: Scorer, makeRng: makeRng, flatDamage: flatDamage}
	};
})();
