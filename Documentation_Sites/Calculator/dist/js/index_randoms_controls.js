$("#p2 .ability, #p4 .ability").bind("keyup change", function () {
	autosetWeather($(this).val(), 1);
	autosetTerrain($(this).val(), 1);
});

$("#p2 .item, #p4 .item").bind("keyup change", function () {
	var pokeId = "#" + $(this).closest(".poke-info").prop("id");
	autosetStatus(pokeId, $(this).val());
});

lastManualStatus["#p2"] = "Healthy";
lastManualStatus["#p3"] = "Healthy";
lastManualStatus["#p4"] = "Healthy";
lastAutoStatus["#p2"] = "Healthy";
lastAutoStatus["#p3"] = "Healthy";
lastAutoStatus["#p4"] = "Healthy";

var resultLocations = [[], []];
for (var i = 0; i < 4; i++) {
	resultLocations[0].push({
		"move": "#resultMoveL" + (i + 1),
		"damage": "#resultDamageL" + (i + 1)
	});
	resultLocations[1].push({
		"move": "#resultMoveR" + (i + 1),
		"damage": "#resultDamageR" + (i + 1)
	});
}

var damageResults;
function getCurrentCalcPair() {
	if (typeof getActiveCalcPairIds === "function") {
		return getActiveCalcPairIds();
	}
	return { attackerId: "p1", defenderId: "p2" };
}

function slotLabel(slotId) {
	switch (slotId) {
		case "p1": return "Pokemon 1";
		case "p2": return "Pokemon 2";
		case "p3": return "Pokemon 3";
		case "p4": return "Pokemon 4";
		default: return slotId || "";
	}
}

function performCalculations() {
	var pair = getCurrentCalcPair();
	var p1info = $("#" + pair.attackerId);
	var p2info = $("#" + pair.defenderId);
	var p1 = createPokemon(p1info);
	var p2 = createPokemon(p2info);
	var p1field = createField();
	var p2field = p1field.clone().swap();

	damageResults = calculateAllMoves(gen, p1, p1field, p2, p2field);
	p1 = damageResults[0][0].attacker;
	p2 = damageResults[1][0].attacker;
	var battling = [p1, p2];
	p1.maxDamages = [];
	p2.maxDamages = [];
	p1info.find(".sp .totalMod").text(p1.stats.spe);
	p2info.find(".sp .totalMod").text(p2.stats.spe);
	var fastestSide = p1.stats.spe > p2.stats.spe ? 0 : p1.stats.spe === p2.stats.spe ? "tie" : 1;

	var result, maxDamage;
	var bestResult;
	var zProtectAlerted = false;
	for (var i = 0; i < 4; i++) {
		// P1
		result = damageResults[0][i];
		maxDamage = result.range()[1] * p1.moves[i].hits;
		if (!zProtectAlerted && maxDamage > 0 && p1.item.indexOf(" Z") === -1 && p1field.defenderSide.isProtected && p1.moves[i].isZ) {
			alert('Although only possible while hacking, Z-Moves fully damage through protect without a Z-Crystal');
			zProtectAlerted = true;
		}
		p1.maxDamages.push({moveOrder: i, maxDamage: maxDamage});
		p1.maxDamages.sort(function (firstMove, secondMove) {
			return secondMove.maxDamage - firstMove.maxDamage;
		});
		$(resultLocations[0][i].move + " + label").text(p1.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[0][i].damage).text(result.moveDesc(notation));

		// P2
		result = damageResults[1][i];
		maxDamage = result.range()[1] * p2.moves[i].hits;
		if (!zProtectAlerted && maxDamage > 0 && p2.item.indexOf(" Z") === -1 && p2field.defenderSide.isProtected && p2.moves[i].isZ) {
			alert('Although only possible while hacking, Z-Moves fully damage through protect without a Z-Crystal');
			zProtectAlerted = true;
		}
		p2.maxDamages.push({moveOrder: i, maxDamage: maxDamage});
		p2.maxDamages.sort(function (firstMove, secondMove) {
			return secondMove.maxDamage - firstMove.maxDamage;
		});
		$(resultLocations[1][i].move + " + label").text(p2.moves[i].name.replace("Hidden Power", "HP"));
		$(resultLocations[1][i].damage).text(result.moveDesc(notation));

		// BOTH
		var bestMove;
		if (fastestSide === "tie") {
			// Technically the order should be random in a speed tie, but this non-determinism makes manual testing more difficult.
			// battling.sort(function () { return 0.5 - Math.random(); });
			bestMove = battling[0].maxDamages[0].moveOrder;
			var chosenPokemon = battling[0] === p1 ? "0" : "1";
			bestResult = $(resultLocations[chosenPokemon][bestMove].move);
		} else {
			bestMove = battling[fastestSide].maxDamages[0].moveOrder;
			bestResult = $(resultLocations[fastestSide][bestMove].move);
		}
	}
	if ($('.locked-move').length) {
		bestResult = $('.locked-move');
	} else {
		stickyMoves.setSelectedMove(bestResult.prop("id"));
	}
	bestResult.prop("checked", true);
	bestResult.change();
	$("#resultHeaderL").text(slotLabel(pair.attackerId) + " (" + p1.name + ") Moves (select one to show detailed results)");
	$("#resultHeaderR").text(slotLabel(pair.defenderId) + " (" + p2.name + ") Moves (select one to show detailed results)");
	syncResultCritButtons();
	updateAiPrediction(pair, p1, p2, p1field, p2field);
}
window.performCalculations = performCalculations;

// Previsione della mossa scelta dall'AI della ROM (logica in js/ai_move_predictor.js).
// I Pokemon di destra (P2/P4) sono dell'allenatore (AI), quelli di sinistra (P1/P3) del giocatore.
var aiPredictionLastSet = null;
var AI_KNOWN_ABILITIES = ["shadowtag", "magnetpull", "arenatrap"]; // sempre note all'AI

function aiId(text) {
	return String(text || "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function aiTypeChart() {
	var generation = (typeof GENERATION === "object" && GENERATION && GENERATION.types) ? GENERATION : calc.Generations.get(gen);
	return function (type) {
		return generation.types.get(aiId(type));
	};
}

function getSlotSetData(slotId) {
	var value = $("#" + slotId + " input.set-selector").val() || "";
	var open = value.indexOf(" (");
	if (open < 0 || typeof setdex === "undefined") {
		return null;
	}
	var species = value.substring(0, open);
	var setName = value.substring(open + 2, value.lastIndexOf(")"));
	return (setdex[species] && setdex[species][setName]) || null;
}

// Flag interno: Omniscient arriva dal set dell'allenatore (aiOmniscient in gen9.js), non dalla UI.
function isAiSetOmniscient(aiSlot) {
	var set = getSlotSetData(aiSlot);
	return !!(set && set.aiOmniscient);
}

// Quando cambia il Pokemon dell'allenatore, "AI has other Pokemon" segue la squadra.
function syncAiDefaults(aiSlot) {
	var setName = $("#" + aiSlot + " input.set-selector").val() || "";
	if (setName === aiPredictionLastSet) {
		return;
	}
	aiPredictionLastSet = setName;
	if (typeof getTrainerPoksForSlot === "function") {
		var team = getTrainerPoksForSlot(aiSlot) || [];
		if (team.length) {
			$("#aiHasParty").prop("checked", team.length > (isDoublesFormat() ? 2 : 1));
		}
	}
}

function isDoublesFormat() {
	return $("input:radio[name='format']:checked").val() === "Doubles";
}

// Abilita che un'AI non Omniscient puo attribuire al Pokemon del giocatore (scelta a caso).
function aiAbilityGuesses(pokemon) {
	if (AI_KNOWN_ABILITIES.indexOf(aiId(pokemon.ability)) >= 0) {
		return [pokemon.ability];
	}
	var table = window.AI_SPECIES_ABILITIES || {};
	var name = String(pokemon.name || "");
	while (name) {
		if (table[aiId(name)]) {
			return table[aiId(name)];
		}
		var dash = name.lastIndexOf("-");
		name = dash > 0 ? name.substring(0, dash) : "";
	}
	return [pokemon.ability];
}

// Il giocatore "come lo vede l'AI": con Omniscient e quello vero, altrimenti senza effetto
// dello strumento e con una delle abilita possibili (una variante per abilita).
function buildAiTarget(label, playerSlot, aiSlot, playerField, aiField, omniscient) {
	var $slot = $("#" + playerSlot);
	if (!$slot.length) {
		return null;
	}
	var player = createPokemon($slot);
	if (!player || !player.name || player.curHP() <= 0) {
		return null;
	}
	var abilities = omniscient ? [player.ability] : aiAbilityGuesses(player);
	var variants = abilities.map(function (ability) {
		var seen = player.clone();
		var ai = createPokemon($("#" + aiSlot));
		if (!omniscient) {
			seen.ability = ability;
			seen.item = undefined;
		}
		checkStatBoost(seen, ai);
		var playerResults = [], aiResults = [];
		for (var i = 0; i < 4; i++) {
			playerResults.push(calc.calculate(gen, seen, ai, seen.moves[i], playerField));
			aiResults.push(calc.calculate(gen, ai, seen, ai.moves[i], aiField));
		}
		return {player: seen, playerResults: playerResults, aiResults: aiResults};
	});
	return {label: label, actualItem: player.item || "", variants: variants};
}

function clearAiPrediction() {
	$(".ai-chance").text("").removeAttr("title").removeClass("ai-chance-top ai-chance-some ai-chance-none");
}

function updateAiPrediction(pair, p1, p2, p1field, p2field) {
	if (!$(".ai-chance").length || !window.AiMovePredictor) {
		return;
	}
	var doubles = isDoublesFormat();
	var aiSlot = pair.defenderId;
	syncAiDefaults(aiSlot);
	var omniscient = isAiSetOmniscient(aiSlot);
	// Con Omniscient l'AI conosce gia tutto: l'opzione sulle mosse viste non serve.
	$("#aiPlayerKnown").closest("label").toggle(!omniscient);

	var prediction = null;
	try {
		var playerSlots = doubles ? ["p1", "p3"] : ["p1"];
		var targets = [];
		for (var t = 0; t < playerSlots.length; t++) {
			var target = buildAiTarget(playerSlots[t].toUpperCase(), playerSlots[t], aiSlot, p1field, p2field, omniscient);
			if (target) {
				targets.push(target);
			}
		}
		var allySlot = aiSlot === "p2" ? "p4" : "p2";
		var ally = doubles && $("#" + allySlot).length ? createPokemon($("#" + allySlot)) : null;
		prediction = window.AiMovePredictor.predict({
			targets: targets,
			field: p1field,
			aiField: p2field,
			typeChart: aiTypeChart(),
			omniscient: omniscient,
			playerMovesKnown: $("#aiPlayerKnown").prop("checked"),
			firstTurn: $("#aiFirstTurn").prop("checked"),
			aiPartyLeft: $("#aiHasParty").prop("checked"),
			playerPartyLeft: $("#aiPlayerHasParty").prop("checked"),
			protectUses: $("#aiProtectUsed").prop("checked") ? 1 : 0,
			doubles: doubles,
			allyAlive: !!(ally && ally.name && ally.curHP() > 0)
		});
	} catch (e) {
		console.error("AI prediction failed", e);
	}
	if (!prediction) {
		clearAiPrediction();
		return;
	}

	for (var i = 0; i < 4; i++) {
		var $span = $("#aiChanceR" + (i + 1));
		var entry = prediction[i];
		$span.removeClass("ai-chance-top ai-chance-some ai-chance-none");
		if (!entry) {
			$span.text("").removeAttr("title");
			continue;
		}
		$span.text("AI " + formatAiPercent(entry.chance) + (doubles && entry.chance > 0 ? " → " + aiTargetLabel(entry) : ""));
		$span.addClass(entry.chance >= 0.5 ? "ai-chance-top" : entry.chance > 0 ? "ai-chance-some" : "ai-chance-none");
		$span.attr("title", aiPredictionTooltip(entry, doubles));
	}
}

// In doppio: i bersagli su cui la mossa viene usata in modo significativo (es. "P1/P3" se quasi alla pari).
function aiTargetLabel(entry) {
	var labels = entry.byTarget.filter(function (target) {
		return target.chance > 0 && target.chance >= entry.chance * 0.25;
	}).map(function (target) {
		return target.label;
	});
	return labels.length ? labels.join("/") : entry.target;
}

function formatAiPercent(chance) {
	var pct = Math.round(chance * 100);
	return (chance > 0 && pct === 0 ? "<1" : String(pct)) + "%";
}

// Tooltip: solo il punteggio e i modificatori applicati.
function aiPredictionTooltip(entry, doubles) {
	var lines = [];
	entry.byTarget.forEach(function (target) {
		var score = target.scoreMin === target.scoreMax ? String(target.scoreMin) : target.scoreMin + "-" + target.scoreMax;
		lines.push((doubles ? "vs " + target.label + ": " : "Score: ") + score);
		target.reasons.forEach(function (reason) {
			lines.push((doubles ? "  " : "") + reason);
		});
	});
	return lines.join("\n");
}

$(document).on("change", ".ai-option", function () {
	performCalculations();
});

// Pulsanti Crit accanto alle mosse dei risultati: specchiano il Crit della mossa
// corrispondente del Pokemon attivo (attaccante a sinistra, difensore a destra).
function getMoveCritCheckbox(side, moveIndex) {
	var pair = getCurrentCalcPair();
	var slotId = side === "R" ? pair.defenderId : pair.attackerId;
	return $("#" + slotId + " .move" + moveIndex + " .move-crit");
}

function syncResultCritButtons() {
	$(".result-crit").each(function () {
		var $source = getMoveCritCheckbox($(this).attr("data-side"), $(this).attr("data-move"));
		$(this).prop("checked", $source.prop("checked") === true);
	});
}

$(".result-crit").change(function () {
	var $source = getMoveCritCheckbox($(this).attr("data-side"), $(this).attr("data-move"));
	if (!$source.length) {
		return;
	}
	$source.prop("checked", $(this).prop("checked")).change();
});

$(document).on("change", ".move-crit", syncResultCritButtons);


function calculationsColors(p1info, p2) {
	if (!p2) {
		var pair = getCurrentCalcPair();
		var p2info = $("#" + pair.defenderId);
		var p2 = createPokemon(p2info);
	}
	var p1 = createPokemon(p1info);
	var p1field = createField();
	var p2field = p1field.clone().swap();

	damageResults = calculateAllMoves(gen, p1, p1field, p2, p2field);
	p1 = damageResults[0][0].attacker;
	p2 = damageResults[1][0].attacker;
	p1.maxDamages = [];
	p2.maxDamages = [];
	var p1s = p1.stats.spe;
	var p2s = p2.stats.spe;
	//Faster Tied Slower
	var fastest = p1s > p2s ? "F" : p1s < p2s ? "S" : p1s === p2s ? "T" : undefined;
	var result, highestRoll, lowestRoll, damage = 0;
	//goes from the most optimist to the least optimist
	var p1KO = 0, p2KO = 0;
	//Highest damage
	var p1HD = 0, p2HD = 0;
	for (var i = 0; i < 4; i++) {
		// P1
		result = damageResults[0][i];
		//lowest rolls in %
		damage = result.damage[0] ? result.damage[0] : result.damage;
		lowestRoll = damage * p1.moves[i].hits / p2.stats.hp * 100;
		damage = result.damage[15] ? result.damage[15] : result.damage;
		highestRoll = damage * p1.moves[i].hits / p2.stats.hp * 100;
		if (highestRoll > p1HD) {
			p1HD = highestRoll;
		}
		if (lowestRoll >= 100) {
			p1KO = 1;
		} else { //if lowest kill obviously highest will
			//highest rolls in %
			if (highestRoll >= 100) {
				if (p1KO == 0) {
					p1KO = 2;
				}
			}
		}

		// P2
		result = damageResults[1][i];
		//some damage like sonic boom acts a bit weird.
		damage = result.damage[0] ? result.damage[0] : result.damage;
		lowestRoll = damage * p2.moves[i].hits / p1.stats.hp * 100;
		damage = result.damage[15] ? result.damage[15] : result.damage;
		highestRoll = damage * p2.moves[i].hits / p1.stats.hp * 100;
		if (highestRoll > p2HD) {
			p2HD = highestRoll;
		}
		if (lowestRoll >= 100) {
			p2KO = 4;
		} else {
			if (highestRoll >= 100) {
				if (p2KO < 3) {
					p2KO = 3;
				}
			}
		}
	}
	// Checks if the pokemon walls it
	// i wouldn't mind change this algo for a smarter one.

	// if the adversary don't three shots our pokemon
	if (Math.round(p2HD * 3) < 100) {
		// And if our pokemon does more damage
		if (p1HD > p2HD) {
			if (p1HD > 100) {
				// Then i consider it a wall that may OHKO
				return {speed: fastest, code: "WMO"};
			}
			// if not Then i consider it a good wall
			return {speed: fastest, code: "W"};
		}
	}
	p1KO = p1KO > 0 ? p1KO.toString() : "";
	p2KO = p2KO > 0 ? p2KO.toString() : "";
	return {speed: fastest, code: p1KO + p2KO};
}

$(".result-move").change(function () {
	if (damageResults) {
		var result = findDamageResult($(this));
		if (result) {
			var desc = result.fullDesc(notation, false);
			if (desc.indexOf('--') === -1) desc += ' -- possibly the worst move ever';
			$("#mainResult").text(desc);
			$("#damageValues").text("Possible damage amounts: (" + displayDamageHits(result.damage) + ")");
		}
	}
});

function displayDamageHits(damage) {
	// Fixed Damage
	if (typeof damage === 'number') return damage;
	// Standard Damage
	if (damage.length > 2) return damage.join(', ');
	// Fixed Parental Bond Damage
	if (typeof damage[0] === 'number' && typeof damage[1] === 'number') {
		return '1st Hit: ' + damage[0] + '; 2nd Hit: ' + damage[1];
	}
	// Parental Bond Damage
	return '1st Hit: ' + damage[0].join(', ') + '; 2nd Hit: ' + damage[1].join(', ');
}

function findDamageResult(resultMoveObj) {
	var selector = "#" + resultMoveObj.attr("id");
	for (var i = 0; i < resultLocations.length; i++) {
		for (var j = 0; j < resultLocations[i].length; j++) {
			if (resultLocations[i][j].move === selector) {
				return damageResults[i][j];
			}
		}
	}
}

function checkStatBoost(p1, p2) {
	if ($('#StatBoostL').prop("checked")) {
		for (var stat in p1.boosts) {
			if (stat === 'hp') continue;
			p1.boosts[stat] = Math.min(6, p1.boosts[stat] + 1);
		}
	}
	if ($('#StatBoostR').prop("checked")) {
		for (var stat in p2.boosts) {
			if (stat === 'hp') continue;
			p2.boosts[stat] = Math.min(6, p2.boosts[stat] + 1);
		}
	}
}

function calculateAllMoves(gen, p1, p1field, p2, p2field) {
	checkStatBoost(p1, p2);
	var results = [[], []];
	for (var i = 0; i < 4; i++) {
		results[0][i] = calc.calculate(gen, p1, p2, p1.moves[i], p1field);
		results[1][i] = calc.calculate(gen, p2, p1, p2.moves[i], p2field);
	}
	return results;
}

$(".mode").change(function () {
	var params = new URLSearchParams(window.location.search);
	params.set('mode', $(this).attr("id"));
	var mode = params.get('mode');
	if (mode === 'randoms') {
		window.location.replace('randoms' + linkExtension + '?' + params);
	} else if (mode === 'one-vs-one') {
		window.location.replace('index' + linkExtension + '?' + params);
	} else {
		window.location.replace('honkalculate' + linkExtension + '?' + params);
	}
});

$(".notation").change(function () {
	performCalculations();
});

$(document).ready(function () {
	var params = new URLSearchParams(window.location.search);
	var m = params.get('mode');
	if (m) {
		if (m !== 'one-vs-one' && m !== 'randoms') {
			window.location.replace('honkalculate' + linkExtension + '?' + params);
		} else {
			if ($('#randoms').prop('checked')) {
				if (m === 'one-vs-one') {
					window.location.replace('index' + linkExtension + '?' + params);
				}
			} else {
				if (m === 'randoms') {
					window.location.replace('randoms' + linkExtension + '?' + params);
				}
			}
		}
	}
	$(".calc-trigger").bind("change keyup", function (ev) {
		/*
			This prevents like 8 performCalculations out of 8 that were useless
			without causing bugs (so far)
		*/
		if (window.NO_CALC) {
			return;
		}
		if (document.getElementById("cc-auto-refr").checked) {
			window.refreshColorCode();
		}
		performCalculations();
	});
	performCalculations();
});

/* Click-to-copy function */
$("#mainResult").click(function () {
	navigator.clipboard.writeText($("#mainResult").text()).then(function () {
		document.getElementById('tooltipText').style.visibility = 'visible';
		setTimeout(function () {
			document.getElementById('tooltipText').style.visibility = 'hidden';
		}, 2000);
	});
});
