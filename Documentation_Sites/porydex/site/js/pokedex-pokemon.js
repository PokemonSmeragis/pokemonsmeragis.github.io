function findLinkCordItem() {
    // ID candidate list (ids are lowercase, no spaces)
    var candidates = ['linkingcord', 'link_cable', 'linkcable', 'linkcableitem', 'cablelink'];

    for (var i = 0; i < candidates.length; i++) {
        var it = Dex.items.get(candidates[i]);
        if (it && it.exists) return it;
    }

    // Fallback: try to scan known item dictionaries if exposed
    var dict = Dex.items.data || Dex.items.dex || null;
    if (dict) {
        for (var k in dict) {
            if (!Object.prototype.hasOwnProperty.call(dict, k)) continue;
            var x = dict[k];
            if (x && x.exists && typeof x.name === 'string' && x.name.toLowerCase() === 'linking cord') {
                return x;
            }
        }
    }

    return null;
}



// --- Porydex: TM/Tutor icon helpers (fixes file:// protocol-relative URL issues) ---
function porydexShowdownURL(path) {
	var host = (window.Config && Config.routes && Config.routes.client) ? Config.routes.client : 'play.pokemonshowdown.com';
	// Protocol-relative URLs ("//host/...") break under file://, producing file://host/...
	var proto = (location && location.protocol === 'file:') ? 'https://' : '//';
	if (path && path.charAt(0) === '/') path = path.slice(1);
	return proto + host + '/' + (path || '');
}

var PORYDEX_TM_ICON_FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
	'<circle cx="12" cy="12" r="10.2" fill="#dadada" stroke="#777" stroke-width="1.2"/>' +
	'<circle cx="12" cy="12" r="3.6" fill="#f8f8f8" stroke="#777" stroke-width="1.2"/>' +
	'<text x="12" y="16.1" font-family="Arial, sans-serif" font-size="7" text-anchor="middle" fill="#555">TM</text>' +
	'</svg>'
);

var PORYDEX_TUTOR_ICON_FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
	'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
	'<path d="M4 6.2c0-1 0.8-1.8 1.8-1.8h11.1c1 0 1.8 0.8 1.8 1.8v13.1c0 .9-.7 1.7-1.6 1.8H6.3c-1.3 0-2.3-1-2.3-2.3V6.2z" fill="#e9e9e9" stroke="#777" stroke-width="1.1"/>' +
	'<path d="M7 7h9.5M7 10h9.5M7 13h7.2" stroke="#777" stroke-width="1.1" />' +
	'<circle cx="17.5" cy="16.8" r="2.6" fill="#dadada" stroke="#777" stroke-width="1.1"/>' +
	'<text x="17.5" y="18.3" font-family="Arial, sans-serif" font-size="6.5" text-anchor="middle" fill="#555">T</text>' +
	'</svg>'
);

function porydexEscapeHtmlAttr(s) {
	return String(s ?? '')
		.replace(/&/g, '&amp;')
		.replace(/"/g, '&quot;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

function porydexEscapeJsSingleQuoted(s) {
	return String(s ?? '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

function porydexImgWithFallback(primarySrc, fallbackSrc, style, width, height, alt) {
	var src = porydexEscapeHtmlAttr(primarySrc);
	var fb = porydexEscapeJsSingleQuoted(fallbackSrc);

	return '<img src="' + src + '" onerror="this.onerror=null;this.src=\'' + fb + '\';"' +
		(style ? (' style="' + porydexEscapeHtmlAttr(style) + '"') : '') +
		(width ? (' width="' + String(width) + '"') : '') +
		(height ? (' height="' + String(height) + '"') : '') +
		(alt ? (' alt="' + porydexEscapeHtmlAttr(alt) + '"') : '') +
	' />';
}

// Generated overlay for non-wild encounters (gifts/static/overworld).
window.BattleStaticEncounters = window.BattleStaticEncounters || {};

// --- Porydex: reverse lookup (pokemon -> locations) ---
var PorydexEncounterIndex = null;
var PorydexStaticEncounterIndex = null;

function porydexNormalizeRateArray(arr) {
	if (!Array.isArray(arr) || !arr.length) return arr;
	var out = [];
	var hasNumeric = false;
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		var n = Number(arr[i]);
		if (!isFinite(n) || n < 0) {
			out.push(arr[i]);
			continue;
		}
		hasNumeric = true;
		out.push(n);
		total += n;
	}
	if (!hasNumeric || total <= 0 || Math.abs(total - 100) < 0.0001) return out;
	return out.map(function (v) {
		var n = Number(v);
		if (!isFinite(n) || n < 0) return v;
		return (n * 100) / total;
	});
}

function porydexFormatEncounterRate(v) {
	if (v == null || v === '') return '';
	if (typeof v === 'string' && v.indexOf('%') >= 0) return v;
	var n = Number(v);
	if (!isFinite(n)) return String(v);
	var rounded = Math.round(n * 10) / 10;
	return (Math.abs(rounded - Math.round(rounded)) < 0.0001
		? String(Math.round(rounded))
		: rounded.toFixed(1)) + '%';
}

function porydexNewEncounterBucket() {
	return {
		land: Object.create(null),
		surf: Object.create(null),
		rock: Object.create(null),
		fish: Object.create(null),
		static: Object.create(null),
	};
}

/**
 * Builds a reverse index from BattleLocationdex.
 * Result shape:
 *   index[pokemonId][mode][zoneid] = { zoneid, rate, minLvl, maxLvl }
 *
 * Notes:
 * - Uses BattleLocationdex.rates[mode][slotIndex] when available (your current encounter format).
 * - Falls back to a rough equal-weight split if rates are missing.
 */
function buildPorydexEncounterIndex() {
	if (PorydexEncounterIndex) return PorydexEncounterIndex;
	var idx = Object.create(null);

	if (!window.BattleLocationdex) {
		PorydexEncounterIndex = idx;
		return idx;
	}

	var rates = BattleLocationdex.rates || BattleLocationdex['rates'] || null;
	var modes = ['land', 'surf', 'rock', 'fish'];
	var normalizedRateCache = Object.create(null);

	function getRateArray(mode, subKey) {
		if (!rates) return null;
		var cacheKey = mode + '::' + (subKey || '');
		if (Object.prototype.hasOwnProperty.call(normalizedRateCache, cacheKey)) {
			return normalizedRateCache[cacheKey];
		}

		var arr = null;
		if (mode !== 'fish') {
			if (Array.isArray(rates[mode])) arr = rates[mode];
		} else {
			var rf = rates.fish || rates['fish'];
			if (Array.isArray(rf)) {
				arr = rf;
			} else if (rf && !subKey && Array.isArray(rf.old)) {
				arr = rf.old;
			} else if (rf && subKey && Array.isArray(rf[subKey])) {
				arr = rf[subKey];
			}
		}

		arr = porydexNormalizeRateArray(arr);
		normalizedRateCache[cacheKey] = arr;
		return arr;
	}

	function getSlotRate(mode, subKey, area, slotIndex) {
		// Prefer explicit per-slot rates if available (normalized for display)
		var arr = getRateArray(mode, subKey);
		if (arr && typeof arr[slotIndex] === 'number') {
			return arr[slotIndex];
		}
		// Fallback: approximate using baseRate if present, otherwise distribute 100 across slots
		if (area && area.baseRate) return Math.round(area.baseRate / area.encs.length);
		return Math.round(100 / area.encs.length);
	}

	function ensureBucket(speciesId) {
		var bucket = idx[speciesId];
		if (!bucket) {
			bucket = idx[speciesId] = porydexNewEncounterBucket();
		}
		return bucket;
	}

	function addSlot(speciesId, mode, zoneid, slot, rate) {
		var bucket = ensureBucket(speciesId);
		var byZone = bucket[mode];
		var ent = byZone[zoneid];
		if (!ent) {
			ent = byZone[zoneid] = {
				zoneid: zoneid,
				rate: 0,
				minLvl: slot.minLvl || 0,
				maxLvl: slot.maxLvl || 0,
			};
		}
		ent.rate += rate;
		if (slot.minLvl && (!ent.minLvl || slot.minLvl < ent.minLvl)) ent.minLvl = slot.minLvl;
		if (slot.maxLvl && (!ent.maxLvl || slot.maxLvl > ent.maxLvl)) ent.maxLvl = slot.maxLvl;
	}

	for (var zoneid in BattleLocationdex) {
		if (!Object.prototype.hasOwnProperty.call(BattleLocationdex, zoneid)) continue;
		if (zoneid === 'rates') continue;

		var zone = BattleLocationdex[zoneid];
		if (!zone) continue;

		for (var mi = 0; mi < modes.length; mi++) {
			var mode = modes[mi];
			var area = zone[mode];
			if (!area) continue;

			// Special case: fishing might be nested (oldrod/goodrod/superrod)
			var areasToProcess = [];
			if (mode === 'fish' && (!area.encs || !area.encs.length)) {
				for (var subKey in area) {
					if (!Object.prototype.hasOwnProperty.call(area, subKey)) continue;
					var sub = area[subKey];
					if (sub && sub.encs && sub.encs.length) areasToProcess.push({subKey: subKey, area: sub});
				}
			} else if (area.encs && area.encs.length) {
				areasToProcess.push({subKey: null, area: area});
			}
			if (!areasToProcess.length) continue;

			for (var ai = 0; ai < areasToProcess.length; ai++) {
				var subKey = areasToProcess[ai].subKey;
				var a = areasToProcess[ai].area;
				for (var i = 0; i < a.encs.length; i++) {
					var slot = a.encs[i];
					if (!slot) continue;
					var speciesId = toID(slot.species);
					if (!speciesId) continue;
					var rate = getSlotRate(mode, subKey, a, i);
					addSlot(speciesId, mode, zoneid, slot, rate);
				}
			}
		}
	}

	PorydexEncounterIndex = idx;
	return idx;
}

function buildPorydexStaticEncounterIndex() {
	if (PorydexStaticEncounterIndex) return PorydexStaticEncounterIndex;
	var idx = Object.create(null);
	var raw = window.BattleStaticEncounters || window.PorydexStaticEncounters;
	if (!raw) {
		PorydexStaticEncounterIndex = idx;
		return idx;
	}

	function ensureBucket(speciesId) {
		if (!idx[speciesId]) idx[speciesId] = porydexNewEncounterBucket();
		return idx[speciesId];
	}

	function addStaticEntry(fallbackSpeciesId, entry, fallbackIdx) {
		if (!entry || typeof entry !== 'object') return;
		var speciesId = toID(fallbackSpeciesId || entry.species || entry.speciesId || entry.id);
		if (!speciesId) return;

		var mode = toID(entry.mode || entry.method || 'static');
		if (mode !== 'land' && mode !== 'surf' && mode !== 'rock' && mode !== 'fish') {
			mode = 'static';
		}

		var zoneName = entry.name || entry.location || entry.zone || entry.label || '';
		var zoneid = toID(entry.zoneid || entry.locationId || zoneName);
		if (!zoneid) zoneid = 'static' + String(fallbackIdx || 0);

		var rate = (entry.rate != null) ? entry.rate : 'Static';
		var level = Number(entry.level);
		var minLvl = Number(entry.minLvl);
		var maxLvl = Number(entry.maxLvl);
		if (!isFinite(minLvl) && isFinite(level)) minLvl = level;
		if (!isFinite(maxLvl) && isFinite(level)) maxLvl = level;
		if (!isFinite(minLvl)) minLvl = 0;
		if (!isFinite(maxLvl)) maxLvl = minLvl;

		var bucket = ensureBucket(speciesId);
		var byZone = bucket[mode];
		var ent = byZone[zoneid];
		if (!ent) {
			byZone[zoneid] = {
				zoneid: zoneid,
				name: zoneName || null,
				rate: rate,
				minLvl: minLvl,
				maxLvl: maxLvl,
			};
			return;
		}

		var prevRate = Number(ent.rate);
		var nextRate = Number(rate);
		if (isFinite(prevRate) && isFinite(nextRate)) ent.rate = prevRate + nextRate;
		if (minLvl && (!ent.minLvl || minLvl < ent.minLvl)) ent.minLvl = minLvl;
		if (maxLvl && (!ent.maxLvl || maxLvl > ent.maxLvl)) ent.maxLvl = maxLvl;
		if (!ent.name && zoneName) ent.name = zoneName;
	}

	if (Array.isArray(raw)) {
		for (var i = 0; i < raw.length; i++) addStaticEntry(null, raw[i], i);
	} else {
		for (var speciesKey in raw) {
			if (!Object.prototype.hasOwnProperty.call(raw, speciesKey)) continue;
			var val = raw[speciesKey];
			if (Array.isArray(val)) {
				for (var j = 0; j < val.length; j++) addStaticEntry(speciesKey, val[j], j);
			} else if (val && Array.isArray(val.encounters)) {
				for (var k = 0; k < val.encounters.length; k++) addStaticEntry(speciesKey, val.encounters[k], k);
			} else {
				addStaticEntry(speciesKey, val, 0);
			}
		}
	}

	PorydexStaticEncounterIndex = idx;
	return idx;
}

function getPorydexEncounterInfo(speciesId) {
	var sid = toID(speciesId || '');
	if (!sid) return null;

	var wild = buildPorydexEncounterIndex()[sid];
	var stat = buildPorydexStaticEncounterIndex()[sid];
	if (!wild && !stat) return null;

	var out = porydexNewEncounterBucket();
	function mergeMode(fromMode, toMode) {
		if (!fromMode) return;
		for (var zoneid in fromMode) {
			if (!Object.prototype.hasOwnProperty.call(fromMode, zoneid)) continue;
			var src = fromMode[zoneid];
			if (!src) continue;
			var dst = toMode[zoneid];
			if (!dst) {
				toMode[zoneid] = {
					zoneid: src.zoneid || zoneid,
					name: src.name || null,
					rate: src.rate,
					minLvl: src.minLvl || 0,
					maxLvl: src.maxLvl || 0,
				};
				continue;
			}
			var a = Number(dst.rate);
			var b = Number(src.rate);
			if (isFinite(a) && isFinite(b)) dst.rate = a + b;
			if ((src.minLvl || 0) && (!dst.minLvl || src.minLvl < dst.minLvl)) dst.minLvl = src.minLvl;
			if ((src.maxLvl || 0) && (!dst.maxLvl || src.maxLvl > dst.maxLvl)) dst.maxLvl = src.maxLvl;
			if (!dst.name && src.name) dst.name = src.name;
		}
	}

	var modes = ['land', 'surf', 'rock', 'fish', 'static'];
	for (var i = 0; i < modes.length; i++) {
		var m = modes[i];
		mergeMode(wild && wild[m], out[m]);
		mergeMode(stat && stat[m], out[m]);
	}

	for (var j = 0; j < modes.length; j++) {
		if (Object.keys(out[modes[j]]).length) return out;
	}
	return null;
}

function porydexCleanLocationName(name) {
	name = String(name || '').trim();
	if (!name) return name;

	name = name
		.replace(/\s+\d+\s*-\s*(Morning|Day|Evening|Night)\s*$/i, '') // " 0 - Morning"
		.replace(/\s*-\s*(Morning|Day|Evening|Night)\s*$/i, '');     // " - Morning"

	if (!/^Route\s+\d+\s*$/i.test(name)) {
		name = name.replace(/\s+\d+\s*$/i, '');
	}

	return name.trim();
}

function renderPorydexEncounterZoneRow(zoneName, tag, href) {
	var safeName = _.escape(String(zoneName || ''));
	var rawTag = String(tag || '').trim();
	var isRateTag = /^-?\d+(\.\d+)?%?$/.test(rawTag);
	var displayTag = isRateTag ? porydexFormatEncounterRate(rawTag) : rawTag;
	var safeTag = _.escape(displayTag);
	var tagClass = isRateTag
		? ' porydex-encounter-zone-tag-rate'
		: ' porydex-encounter-zone-tag-static';
	if (href) {
		return '<li class="result"><a href="' + _.escape(href) + '" data-target="push" class="porydex-encounter-zone-row">' +
			'<span class="porydex-encounter-zone-tag' + tagClass + '">' + safeTag + '</span>' +
			'<span class="porydex-encounter-zone-name">' + safeName + '</span>' +
		'</a></li>';
	}
	return '<li class="result"><div class="porydex-encounter-zone-row porydex-encounter-zone-row-static">' +
		'<span class="porydex-encounter-zone-tag' + tagClass + '">' + safeTag + '</span>' +
		'<span class="porydex-encounter-zone-name">' + safeName + '</span>' +
	'</div></li>';
}

var PORYDEX_STAT_TITLES = {
	hp: 'HP',
	atk: 'Attack',
	def: 'Defense',
	spa: 'Sp. Atk',
	spd: 'Sp. Def',
	spe: 'Speed'
};

function getPorydexVanillaBaseStats(pokemon) {
	if (!pokemon || !window.BattleVanillaPokedex) return null;

	var vanilla = BattleVanillaPokedex[pokemon.id] || BattleVanillaPokedex[toID(pokemon.name || '')];
	if (!vanilla || !vanilla.baseStats) return null;

	return vanilla.baseStats;
}

function getPorydexVanillaStatChanges(pokemon) {
	var vanillaBaseStats = getPorydexVanillaBaseStats(pokemon);
	if (!vanillaBaseStats || !pokemon || !pokemon.baseStats) return [];

	var changes = [];
	var currentTotal = 0;
	var vanillaTotal = 0;
	for (var stat in BattleStatNames) {
		var current = Number(pokemon.baseStats[stat]);
		var vanilla = Number(vanillaBaseStats[stat]);
		if (!isFinite(current) || !isFinite(vanilla)) continue;

		currentTotal += current;
		vanillaTotal += vanilla;
		if (current !== vanilla) {
			changes.push({
				label: PORYDEX_STAT_TITLES[stat] || stat.toUpperCase(),
				from: vanilla,
				to: current,
			});
		}
	}

	if (!changes.length) return changes;
	if (currentTotal !== vanillaTotal) {
		changes.push({
			label: 'Total',
			from: vanillaTotal,
			to: currentTotal,
		});
	}

	return changes;
}

function renderPorydexVanillaStatChanges(pokemon) {
	var changes = getPorydexVanillaStatChanges(pokemon);
	if (!changes.length) return '';

	var buf = '<div class="porydex-stat-changes">';
	for (var i = 0; i < changes.length; i++) {
		buf += '<small>' + changes[i].label + ': ' + changes[i].from + ' -> ' + changes[i].to + '</small>';
	}
	buf += '</div>';
	return buf;
}

var PokedexPokemonPanel = PokedexResultPanel.extend({
	initialize: function(id) {
		id = toID(id);
		var pokemon = Dex.species.get(id);
		this.id = id;
		this.shortTitle = pokemon.baseSpecies;

        // Treat everything except explicit "unobtainable" as obtainable.
        // Static encounter overlays can make a mon obtainable even when tier data is stale.
        var encounterInfo = getPorydexEncounterInfo(id);
        let obtainable = pokemon.tier !== "unobtainable" || !!encounterInfo;
		var buf = '<div class="pfx-body dexentry">';

		buf += '<a href="/" class="pfx-backbutton" data-target="back"><i class="fa fa-chevron-left"></i> Pok&eacute;dex</a>';

		buf += '<h1>';
		if (pokemon.forme) {
			buf += '<a href="/pokemon/'+id+'" data-target="push" class="subtle">'+pokemon.baseSpecies+'<small>-'+pokemon.forme+'</small></a>';
		} else {
			buf += '<a href="/pokemon/'+id+'" data-target="push" class="subtle">'+pokemon.name+'</a>';
		}
		if (pokemon.num > 0) buf += ' <code>#'+pokemon.num+'</code>';
		buf += '</h1>';

        if (!obtainable) {
            buf += '<div class="warning"><strong>Note:</strong> This Pok&eacute;mon cannot be obtained.</div>';
		}

		buf += '<img src="'+Dex.resourcePrefix+'sprites/gen5/' + pokemon.spriteid + '.png'+'" alt="" width="96" height="96" class="sprite" />';

		buf += '<dl class="typeentry">';
		buf += '<dt>Types:</dt> <dd>';
			
		const uniqueTypes = [...new Set(pokemon.types || [])];
			
		for (var i = 0; i < uniqueTypes.length; i++) {
		    buf += '<a class="type '+toID(uniqueTypes[i])+'" href="/types/'+toID(uniqueTypes[i])+'" data-target="push">'+uniqueTypes[i]+'</a> ';
		}
		
		buf += '</dd>';
		buf += '</dl>';


		buf += '<dl class="sizeentry">';
		buf += '<dt>Size:</dt> <dd>';
		var gkPower = (function(weightkg) {
			if (weightkg >= 200) return 120;
			if (weightkg >= 100) return 100;
			if (weightkg >= 50) return 80;
			if (weightkg >= 25) return 60;
			if (weightkg >= 10) return 40;
			return 20;
		})(pokemon.weightkg);
		buf += ''+pokemon.heightm+' m, '+pokemon.weightkg+' kg<br /><small><a class="subtle" href="/moves/grassknot" data-target="push">Grass Knot</a>: '+gkPower+'</small>';
		buf += '</dd>';
		buf += '</dl>';

		buf += '<dl class="abilityentry">';
		buf += '<dt>Abilities:</dt> <dd class="imgentry">';
		for (var i in pokemon.abilities) {
			var ability = pokemon.abilities[i];
			if (!ability) continue;

			if (i !== '0') buf += ' | ';
			if (i === 'H') ability = '<em>'+pokemon.abilities[i]+'</em>';
			buf += '<a href="/ability/'+toID(pokemon.abilities[i])+'" data-target="push">'+ability+'</a>';
			if (i === 'H') buf += '<small> (H)</small>';
			if (i === 'S') buf += '<small> (special)</small>';
		}
		buf += '</dd>';
		buf += '</dl>';

		buf += '<dl>';
		buf += '<dt style="clear:left">Base stats:</dt><dd><table class="stats">';

		buf += '<tr><td></td><td></td><td style="width:200px"></td><th class="ministat"><abbr title="0 IVs, 0 EVs, negative nature">min&minus;</a></th><th class="ministat"><abbr title="31 IVs, 0 EVs, neutral nature">min</abbr></th><th class="ministat"><abbr title="31 IVs, 252 EVs, neutral nature">max</abbr></th><th class="ministat"><abbr title="31 IVs, 252 EVs, positive nature">max+</abbr></th>';
		var bst = 0;
		for (var stat in BattleStatNames) {
			var baseStat = pokemon.baseStats[stat];
			bst += baseStat;
			var width = Math.floor(baseStat*200/200);
			if (width > 200) width = 200;
			var color = Math.floor(baseStat*180/255);
			if (color > 360) color = 360;
			buf += '<tr><th>'+PORYDEX_STAT_TITLES[stat]+':</th><td class="stat">'+baseStat+'</td>';
			buf += '<td class="statbar"><span style="width:'+Math.floor(width)+'px;background:hsl('+color+',85%,45%);border-color:hsl('+color+',75%,35%)"></span></td>';
			buf += '<td class="ministat"><small>'+(stat==='hp'?'':this.getStat(baseStat, false, 100, 0, 0, 0.9))+'</small></td><td class="ministat"><small>'+this.getStat(baseStat, stat==='hp', 100, 31, 0, 1.0)+'</small></td>';
			buf += '<td class="ministat"><small>'+this.getStat(baseStat, stat==='hp', 100, 31, 255, 1.0)+'</small></td><td class="ministat"><small>'+(stat==='hp'?'':this.getStat(baseStat, false, 100, 31, 255, 1.1))+'</small></td></tr>';
		}
		buf += '<tr><th class="bst">Total:</th><td class="bst">'+bst+'</td><td></td><td class="ministat" colspan="4">at level <input type="text" class="textbox" name="level" placeholder="100" size="5" /></td>';

		buf += '</table>' + renderPorydexVanillaStatChanges(pokemon) + '</dd>';

		buf += '<dt>Evolution:</dt> <dd>';
		var template = pokemon;
		while (template.prevo) template = Dex.species.get(template.prevo);
		if (template.evos) {
			buf += '<table class="evos"><tr><td>';
			var evos = [template];
			while (evos) {
				if (evos[0] === 'Dustox') evos = ['Beautifly','Dustox'];
				for (var i=0; i<evos.length; i++) {
					template = Dex.species.get(evos[i]);
					if (i <= 0) {
						if (!evos[0].exists) {
							if (evos[1] === 'Dustox') {
								buf += '</td><td class="arrow"><span>&rarr;<br />&rarr;</span></td><td>';
							} else if (template.prevo) {
								buf += '</td><td class="arrow"><span><abbr title="' + this.getEvoMethod(template) + '">&rarr;</abbr></span></td><td>';
							} else {
								buf += '</td><td class="arrow"><span>&rarr;</span></td><td>';
							}
						}
					}
					var name = (template.forme ? template.baseSpecies+'<small>-'+template.forme+'</small>' : template.name);
					name = '<span class="picon" style="'+Dex.getPokemonIcon(template)+'"></span>'+name;
					if (template === pokemon) {
						buf += '<div><strong>'+name+'</strong></div>';
					} else {
						buf += '<div><a href="/pokemon/'+template.id+'" data-target="replace">'+name+'</a></div>';
					}
				}
				evos = template.evos;
			}
			buf += '</td></tr></table>';
			if (pokemon.prevo) {
				buf += '<div><small>Evolves from ' + Dex.species.get(pokemon.prevo).name + ' (' + this.getEvoMethod(pokemon) + ')</small></div>';
			}
		} else {
			buf += '<em>Does not evolve</em>';
		}

		if (pokemon.otherFormes || pokemon.forme) {
		    buf += '</dd><dt>Formes:</dt> <dd>';
				
		    // Base species only to list formes; DO NOT overwrite `template`
		    var baseSp = (pokemon.forme ? Dex.species.get(pokemon.baseSpecies) : pokemon);
				
		    // Base link
		    var baseName = baseSp.baseForme || 'Base';
		    baseName = '<span class="picon" style="' + Dex.getPokemonIcon(baseSp) + '"></span>' + baseName;
				
		    if (baseSp === pokemon) {
		        buf += '<strong>' + baseName + '</strong>';
		    } else {
		        buf += '<a href="/pokemon/' + baseSp.id + '" data-target="replace">' + baseName + '</a>';
		    }
		
		    // Other formes
		    var otherFormes = baseSp.otherFormes;
		    if (otherFormes) {
		        for (var i = 0; i < otherFormes.length; i++) {
		            var formeSp = Dex.species.get(otherFormes[i]);
		            var formeName = formeSp.forme;
		            formeName = '<span class="picon" style="' + Dex.getPokemonIcon(formeSp) + '"></span>' + formeName;
				
		            if (formeSp === pokemon) {
		                buf += ', <strong>' + formeName + '</strong>';
		            } else {
		                buf += ', <a href="/pokemon/' + formeSp.id + '" data-target="replace">' + formeName + '</a>';
		            }
		        }
		    }
		
		    // Required item should refer to the *current* pokemon, not the last forme iterated
		    if (pokemon.requiredItem) {
		        buf += '<div><small>Must hold <a href="/items/' + toID(pokemon.requiredItem) + '" data-target="push">' + pokemon.requiredItem + '</a></small></div>';
		    }
		
		    // IMPORTANT: if the rest of the renderer uses `template`, ensure it's the actual form
		    template = pokemon;
		}

		buf += '</dd></dl>';

		if (pokemon.eggGroups) {
			buf += '<dl class="colentry"><dt>Egg groups:</dt><dd><span class="picon" style="margin-top:-12px;'+Dex.getPokemonIcon('egg')+'"></span><a href="/egggroups/'+pokemon.eggGroups.map(toID).join('+')+'" data-target="push">'+pokemon.eggGroups.join(', ')+'</a></dd></dl>';
			buf += '<dl class="colentry"><dt>Gender ratio:</dt><dd>';
			if (pokemon.gender) switch (pokemon.gender) {
			case 'M':
				buf += '100% male';
				break;
			case 'F':
				buf += '100% female';
				break;
			case 'N':
				buf += '100% genderless';
				break;
			} else if (pokemon.genderRatio) {
				buf += ''+(pokemon.genderRatio.M*100)+'% male, '+(pokemon.genderRatio.F*100)+'% female';
			} else {
				buf += '50% male, 50% female';
			}
			buf += '</dd></dl>';
			buf += '<div style="clear:left"></div>';
		}

		// learnset
        if (pokemon.tier !== 'unobtainable' || getPorydexEncounterInfo(this.id)) {
			buf += '<ul class="tabbar"><li><button class="button nav-first cur" value="move">Moves</button></li><li><button class="button" value="details">Flavor</button></li><li><button class="button" value="encounters">Encounters</button></li></ul>';
		} else {
			buf += '<ul class="tabbar"><li><button class="button nav-first cur" value="move">Moves</button></li><li><button class="button" value="details">Flavor</button></li></ul>';
        }

		buf += '<ul class="utilichart nokbd">';
		buf += '<li class="resultheader"><h3>Level-up</h3></li>';

		var learnset = BattleLearnsets[id] && BattleLearnsets[id].learnset;
		if (!learnset && BattleLearnsets[toID(pokemon.baseSpecies)]) {
			learnset = BattleLearnsets[toID(pokemon.baseSpecies)].learnset;
		}

		var moves = [];
		for (var moveid in learnset) {
			var sources = learnset[moveid];
			if (typeof sources === 'string') sources = [sources];
			for (var i=0, len=sources.length; i<len; i++) {
				var source = sources[i];
				if (source.substr(0,1) === 'L') {
					moves.push('a'+source.substr(1).padStart(3,'0')+' '+moveid);
				}
			}
		}
		moves.sort();
		for (var i=0, len=moves.length; i<len; i++) {
			var move = BattleMovedex[moves[i].substr(5)];
			if (move) {
				var desc = moves[i].substr(1,3) === '001' || moves[i].substr(1,3) === '000' ? '&ndash;' : '<small>L</small>'+(parseInt(moves[i].substr(1,3),10)||'?');
				buf += BattleSearch.renderTaggedMoveRow(move, desc);
			}
		}
		buf += '</ul>';

		buf += '</div>';

		this.html(buf);

		setTimeout(this.renderFullLearnset.bind(this));

		// Keep encounters in the Encounters tab only (no inline summary under Egg groups)
	},
	events: {
		'click .tabbar button': 'selectTab',
		'input input[name=level]': 'updateLevel',
		'keyup input[name=level]': 'updateLevel',
		'change input[name=level]': 'updateLevel',
	},
	updateLevel: function(e) {
		var val = this.$('input[name=level]').val();
		var level = val === '' ? 100 : parseInt(val, 10);
		var lowIV = 31, highIV = 31;
		var lowEV = 0, highEV = 255;
		if (val.slice(-1) === ':') {
			lowIV = 0;
			highEV = 0;
		}
		var i = 0;
		var $entries = this.$('table.stats td.ministat small');
		var pokemon = Dex.species.get(this.id);
		for (var stat in BattleStatNames) {
			var baseStat = pokemon.baseStats[stat];

			$entries.eq(4 * i + 0).text(stat==='hp'?'':this.getStat(baseStat, false, level, 0, 0, 0.9));
			$entries.eq(4 * i + 1).text(this.getStat(baseStat, stat==='hp', level, lowIV, lowEV, 1.0));
			$entries.eq(4 * i + 2).text(this.getStat(baseStat, stat==='hp', level, highIV, highEV, 1.0));
			$entries.eq(4 * i + 3).text(stat==='hp'?'':this.getStat(baseStat, false, level, highIV, highEV, 1.1));
			i++;
		}
	},
	getEvoMethod: function(evo) {
		let condition = evo.evoCondition ? ` ${evo.evoCondition}` : ``;
		switch (evo.evoType) {
		case 'levelExtra':
			return 'level-up' + condition;
		case 'levelFriendship':
			return 'level-up with high Friendship' + condition;
		case 'levelHold':
			return 'level-up while holding ' + evo.evoItem + condition;
		case 'useItem':
			return 'use ' + evo.evoItem + condition;
        case 'useMove':
            return 'use ' + evo.evoMove + condition;
		case 'levelMove':
			return 'level-up while knowing ' + evo.evoMove + condition;
        case 'levelMap':
            return 'level-up while located in ' + evo.evoMap;
        case 'levelParty':
            return 'level-up while ' + evo.evoSpecies + ' is in the party';
		case 'trade':
			var lc = findLinkCordItem();
			return lc ? ('trade / use ' + lc.name) : 'trade';
        case 'tradeSpecies':
            var lc = findLinkCordItem();
            return lc ? ('trade for a ' + evo.evoSpecies + ' / use ' + lc.name) : ('trade for a ' + evo.evoSpecies);
        case 'tradeItem':
            var lc = findLinkCordItem();
            var tradeStr = 'trade' + condition + (evo.evoItem ? (' holding ' + evo.evoItem) : '');
            return lc ? (tradeStr + ' / use ' + lc.name) : tradeStr;
		case 'other':
			return evo.evoCondition;
		default:
			return 'level ' + evo.evoLevel + condition;
		}
	},
	selectTab: function(e) {
		this.$('.tabbar button').removeClass('cur');
		$(e.currentTarget).addClass('cur');
		switch (e.currentTarget.value) {
		case 'move':
			this.renderFullLearnset();
			break;
		case 'details':
			this.renderDetails();
			break;
        case 'encounters':
            this.renderEncounters();
            break;
		}
	},
	renderFullLearnset: function() {
		var pokemon = Dex.species.get(this.id);
		var learnset = BattleLearnsets[this.id] && BattleLearnsets[this.id].learnset;
		if (!learnset) learnset = BattleLearnsets[toID(pokemon.baseSpecies)].learnset;
		if (pokemon.changesFrom) {
			learnset = $.extend({}, learnset, BattleLearnsets[toID(pokemon.changesFrom)].learnset);
		}

		// learnset
		var buf = '';
		var moves = [];
		var shownMoves = {};
		/** The most recent generation this pokemon has appeared in */
		var mostRecentGen = Dex.gen;
		var pastGenPoke = pokemon;
		for (; mostRecentGen>7; mostRecentGen--) {
			if (pastGenPoke.isNonstandard !== 'Past') break;
			pastGenPoke = Dex.forGen(mostRecentGen - 1).species.get(pastGenPoke.id);
		}
		mostRecentGen = '' + mostRecentGen;
		for (var moveid in learnset) {
			var sources = learnset[moveid];
			if (typeof sources === 'string') sources = [sources];
			for (var i=0, len=sources.length; i<len; i++) {
				var source = sources[i];
				var sourceType = source.charAt(0);
                switch (sourceType) {
                case 'L':
                    moves.push('a'+source.substr(1).padStart(3,'0')+' '+moveid);
                    shownMoves[moveid] = (shownMoves[moveid]|2);
                    break;
                case 'M':
                    moves.push('d000 '+moveid);
                    shownMoves[moveid] = (shownMoves[moveid]|1);
                    break;
                case 'T':
                    moves.push('e000 '+moveid);
                    shownMoves[moveid] = (shownMoves[moveid]|1);
                    break;
                case 'E':
                    moves.push('f000 '+moveid);
                    shownMoves[moveid] = (shownMoves[moveid]|4);
                    break;
                }
				if (sourceType === 'S') {
					if (shownMoves[moveid]&8) continue;
					moves.push('i000 '+moveid);
					shownMoves[moveid] = (shownMoves[moveid]|8);
				}
			}
		}
		var prevo1, prevo2;
		if (pokemon.prevo) {
			prevo1 = toID(pokemon.prevo);
			var prevoLearnset = BattleLearnsets[prevo1].learnset;
			for (var moveid in prevoLearnset) {
				var sources = prevoLearnset[moveid];
				if (typeof sources === 'string') sources = [sources];
				for (var i=0, len=sources.length; i<len; i++) {
					var source = sources[i];
					if (source.substr(0,2) === ''+mostRecentGen+'L') {
						if (shownMoves[moveid]&2) continue;
						moves.push('b'+source.substr(2).padStart(3,'0')+' '+moveid);
						shownMoves[moveid] = (shownMoves[moveid]|2);
					} else if (source === ''+mostRecentGen+'E') {
						if (shownMoves[moveid]&4) continue;
						moves.push('g000 '+moveid);
						shownMoves[moveid] = (shownMoves[moveid]|4);
					} else if (source.charAt(1) === 'S') {
						if (shownMoves[moveid]&8) continue;
						moves.push('i000 '+moveid);
						shownMoves[moveid] = (shownMoves[moveid]|8);
					}
				}
			}

			if (BattlePokedex[prevo1].prevo) {
				prevo2 = toID(BattlePokedex[prevo1].prevo);
				prevoLearnset = BattleLearnsets[prevo2].learnset;
				for (var moveid in prevoLearnset) {
					var sources = prevoLearnset[moveid];
					if (typeof sources === 'string') sources = [sources];
					for (var i=0, len=sources.length; i<len; i++) {
						var source = sources[i];
						if (source.substr(0,2) === mostRecentGen+'L') {
							if (shownMoves[moveid]&2) continue;
							moves.push('b'+source.substr(2).padStart(3,'0')+' '+moveid);
							shownMoves[moveid] = (shownMoves[moveid]|2);
						} else if (source === mostRecentGen+'E') {
							if (shownMoves[moveid]&4) continue;
							moves.push('h000 '+moveid);
							shownMoves[moveid] = (shownMoves[moveid]|4);
						} else if (source.charAt(1) === 'S') {
							if (shownMoves[moveid]&8) continue;
							moves.push('i000 '+moveid);
							shownMoves[moveid] = (shownMoves[moveid]|8);
						}
					}
				}
			}
		}
		for (var moveid in learnset) {
			if (moveid in shownMoves) continue;
			moves.push('j000 '+moveid);
			shownMoves[moveid] = (shownMoves[moveid]|1);
		}
		moves.sort();
		var last = '', lastChanged = false;
		for (var i=0, len=moves.length; i<len; i++) {
			var move = BattleMovedex[moves[i].substr(5)];
			if (!move) {
				buf += '<li><pre>error: "'+moves[i]+'"</pre></li>';
			} else {
				if ((lastChanged = (moves[i].substr(0,1) !== last))) {
					last = moves[i].substr(0,1);
				}
				var desc = '';
				switch (last) {
				case 'a': // level-up move
					if (lastChanged) buf += '<li class="resultheader"><h3>Level-up</h3></li>';
					desc = moves[i].substr(1,3) === '001'
                         ? '&ndash;'
                         : moves[i].substr(1,3) === '000'
                         ? 'Evo.'
                         : '<small>L</small>'+(Number(moves[i].substr(1,3))||'?');
					break;
				case 'b': // prevo1 level-up move
					if (lastChanged) buf += '<li class="resultheader"><h3>Level-up from '+BattlePokedex[prevo1].name+'</h3></li>';
					desc = moves[i].substr(1,3) === '001' || moves[i].substr(1,3) === '000' ? '&ndash;' : '<small>L</small>'+(Number(moves[i].substr(1,3))||'?');
					break;
				case 'c': // prevo2 level-up move
					if (lastChanged) buf += '<li class="resultheader"><h3>Level-up from '+BattlePokedex[prevo2].name+'</h3></li>';
					desc = moves[i].substr(1,3) === '001' || moves[i].substr(1,3) === '000' ? '&ndash;' : '<small>L</small>'+(Number(moves[i].substr(1,3))||'?');
					break;
				case 'd': // tm/hm
					if (lastChanged) buf += '<li class="resultheader"><h3>TM/HM</h3></li>';
                    desc = porydexImgWithFallback(porydexShowdownURL('sprites/itemicons/tm-normal.png'), PORYDEX_TM_ICON_FALLBACK, 'margin-top:-3px;opacity:.7', 24, 24, 'TM');
					break;
				case 'e': // tutor
					if (lastChanged) buf += '<li class="resultheader"><h3>Tutor</h3></li>';
					desc = porydexImgWithFallback(porydexShowdownURL('sprites/tutor.png'), PORYDEX_TUTOR_ICON_FALLBACK, 'margin-top:-4px;opacity:.7', 27, 26, 'Tutor');
					break;
				case 'f': // egg move
					if (lastChanged) buf += '<li class="resultheader"><h3>Egg</h3></li>';
					desc = '<span class="picon" style="margin-top:-12px;'+Dex.getPokemonIcon('egg')+'"></span>';
					break;
				case 'g': // prevo1 egg move
					if (lastChanged) buf += '<li class="resultheader"><h3>Egg from '+BattlePokedex[prevo1].name+'</h3></li>';
					desc = '<span class="picon" style="margin-top:-12px;'+Dex.getPokemonIcon('egg')+'"></span>';
					break;
				case 'h': // prevo2 egg move
					if (lastChanged) buf += '<li class="resultheader"><h3>Egg from '+BattlePokedex[prevo2].name+'</h3></li>';
					desc = '<span class="picon" style="margin-top:-12px;'+Dex.getPokemonIcon('egg')+'"></span>';
					break;
				case 'i': // event
					if (lastChanged) buf += '<li class="resultheader"><h3>Event</h3></li>';
					desc = '!';
					break;
				case 'j': // pastgen
					if (lastChanged) buf += '<li class="resultheader"><h3>Past generation only</h3></li>';
					desc = '...';
					break;
				}
				buf += BattleSearch.renderTaggedMoveRow(move, desc);
			}
		}
		this.$('.utilichart').html(buf);
	},
	renderDetails: function() {
		var pokemon = Dex.species.get(this.id);
		var buf = '';

		// flavor
		buf += '<li class="resultheader"><h3>Flavor</h3></li>';
		buf += '<li><dl><dt>Color:</dt><dd>'+pokemon.color+'</dd></dl></li>';

		// animated gen 6
		if (pokemon.num > 0 && pokemon.gen < 10 && this.id !== 'missingno' && this.id !== 'pichuspikyeared') {
			buf += '<li class="resultheader"><h3>Animated Gen 6-9 sprites</h3></li>';

			buf += '<li class="content"><table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/ani/' + pokemon.spriteid + '.gif" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/ani-shiny/' + pokemon.spriteid + '.gif" /></td></table>';
			buf += '<table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/ani-back/' + pokemon.spriteid + '.gif" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/ani-back-shiny/' + pokemon.spriteid + '.gif" /></td></table>';

			buf += '<div style="clear:left"></div></li>';
		}

		// cry
		buf += '<li class="resultheader"><h3>Cry</h3></li>';

		buf += '<li class="content"><audio src="' + Dex.resourcePrefix + 'audio/cries/' + pokemon.spriteid + '.mp3" controls="controls"><a href="' + Dex.resourcePrefix + 'audio/cries/' + pokemon.spriteid + '.mp3">Play</a></audio></li>';

		// still gen 5
		if (this.id !== 'pichuspikyeared') {
			buf += '<li class="resultheader"><h3>Gen 5 Sprites</h3></li>';
			buf += '<li class="content"><table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen5/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen5-shiny/' + pokemon.spriteid + '.png" /></td></table>';
			buf += '<table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen5-back/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen5-back-shiny/' + pokemon.spriteid + '.png" /></td></table>';

			buf += '<div style="clear:left"></div></li>';

			// animated gen 5
			if (pokemon.gen < 6 && this.id !== 'missingno') {
				buf += '<li class="resultheader"><h3>Animated Gen 5 sprites</h3></li>';

				buf += '<li class="content"><table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen5ani/' + pokemon.spriteid + '.gif" /></td>';
				buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen5ani-shiny/' + pokemon.spriteid + '.gif" /></td></table>';
				buf += '<table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen5ani-back/' + pokemon.spriteid + '.gif" /></td>';
				buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen5ani-back-shiny/' + pokemon.spriteid + '.gif" /></td></table>';

				buf += '<div style="clear:left"></div></li>';
			}
		}

		if (pokemon.gen < 5) {
			buf += '<li class="resultheader"><h3>Gen 4 Sprites</h3></li>';
			buf += '<li class="content"><table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen4/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen4-shiny/' + pokemon.spriteid + '.png" /></td></table>';
			buf += '<table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen4-back/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen4-back-shiny/' + pokemon.spriteid + '.png" /></td></table>';
		}

		if (pokemon.gen < 4) {
			buf += '<li class="resultheader"><h3>Gen 3 Sprites</h3></li>';
			buf += '<li class="content"><table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen3/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen3-shiny/' + pokemon.spriteid + '.png" /></td></table>';
			buf += '<table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen3-back/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen3-back-shiny/' + pokemon.spriteid + '.png" /></td></table>';
		}

		if (pokemon.gen < 3) {
			buf += '<li class="resultheader"><h3>Gen 2 Sprites</h3></li>';
			buf += '<li class="content"><table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen2/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen2-shiny/' + pokemon.spriteid + '.png" /></td></table>';
			buf += '<table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen2-back/' + pokemon.spriteid + '.png" /></td>';
			buf += '<td><img src="' + Dex.resourcePrefix + 'sprites/gen2-back-shiny/' + pokemon.spriteid + '.png" /></td></table>';
		}

		if (pokemon.gen < 2) {
			buf += '<li class="resultheader"><h3>Gen 1 Sprites</h3></li>';
			buf += '<li class="content"><table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen1/' + pokemon.spriteid + '.png" /></td>';
			buf += '<table class="sprites"><tr><td><img src="' + Dex.resourcePrefix + 'sprites/gen1-back/' + pokemon.spriteid + '.png" /></td>';
		}

		this.$('.utilichart').html(buf);
	},
	renderEncounters: function () {
		var info = getPorydexEncounterInfo(this.id);
		var buf = '';
		if (!info) {
			buf += '<li class="resultheader"><h3>Encounters</h3></li>';
			buf += '<li class="content"><em>Not found in wild encounters.</em></li>';
			this.$('.utilichart').html(buf);
			return;
		}

		var modes = [
			{key: 'land', label: 'Land'},
			{key: 'surf', label: 'Surfing'},
			{key: 'rock', label: 'Rock Smash'},
			{key: 'fish', label: 'Fishing'},
			{key: 'static', label: 'Static / Overworld'},
		];

		for (var mi = 0; mi < modes.length; mi++) {
			var mode = modes[mi];
			var byZone = info[mode.key];
			if (!byZone) continue;

			var zones = [];
			for (var zoneid in byZone) {
				if (!Object.prototype.hasOwnProperty.call(byZone, zoneid)) continue;
				zones.push(byZone[zoneid]);
			}
			if (!zones.length) continue;

			zones.sort(function (a, b) {
				var ar = Number(a.rate);
				var br = Number(b.rate);
				var aNum = isFinite(ar);
				var bNum = isFinite(br);
				if (aNum && bNum && br !== ar) return br - ar;
				if (aNum && !bNum) return -1;
				if (!aNum && bNum) return 1;
				var an = (BattleLocationdex[a.zoneid] && BattleLocationdex[a.zoneid].name) || a.zoneid;
				var bn = (BattleLocationdex[b.zoneid] && BattleLocationdex[b.zoneid].name) || b.zoneid;
				return an.localeCompare(bn);
			});

			var headerSuffix = mode.key === 'static' ? '' : ' <small>(Rate %)</small>';
			buf += '<li class="resultheader"><h3>' + mode.label + headerSuffix + '</h3></li>';
			buf += '<ul class="porydex-encounter-list">';

			for (var i = 0; i < zones.length; i++) {
				var z = zones[i];
				var zone = BattleLocationdex[z.zoneid];
				var zoneDisplay;
				if (zone) {
					zoneDisplay = $.extend({}, zone);
					zoneDisplay.name = porydexCleanLocationName(zone.name);
				} else {
					zoneDisplay = {name: porydexCleanLocationName(z.name || z.zoneid)};
				}

				buf += renderPorydexEncounterZoneRow(
					zoneDisplay.name,
					'' + z.rate,
					zone ? ('/encounters/' + z.zoneid) : ''
				);
			}

			buf += '</ul>';
		}

		this.$('.utilichart').html(buf);
	},
	getStat: function(baseStat, isHP, level, iv, ev, natureMult) {
		if (isHP) {
			if (baseStat === 1) return 1;
			return Math.floor(Math.floor(2*baseStat+(iv||0)+Math.floor((ev||0)/4)+100)*level / 100 + 10);
		}
		var val = Math.floor(Math.floor(2*baseStat+(iv||0)+Math.floor((ev||0)/4))*level / 100 + 5);
		if (natureMult && !isHP) val *= natureMult;
		return Math.floor(val);
	}
});
