/**
 * Search
 *
 * Basically just an improved version of utilichart
 *
 * Dependencies: jQuery, battledata, search-index
 * Optional dependencies: pokedex, moves, items, abilities
 *
 * @author Guangcong Luo <guangcongluo@gmail.com>
 */

(function (exports, $) {
	'use strict';

	function Search(elem, viewport) {
		this.$el = $(elem);
		this.el = this.$el[0];
		this.$viewport = (viewport ? $(viewport) : $(window));

		this.urlRoot = '';
		this.q = undefined; // uninitialized
		this.exactMatch = false;

		this.resultSet = null;
		this.filters = null;
		this.sortCol = null;
		this.renderedIndex = 0;
		this.renderingDone = true;
		this.externalFilter = false;
		this.cur = {};
		this.$inputEl = null;
		this.gen = 9;
		this.mod = null;

		this.engine = new DexSearch();
		window.search = this;

		var self = this;
		this.$el.on('click', '.more button', function (e) {
			e.preventDefault();
			self.updateScroll(true);
		});
		this.$el.on('click', '.filter', function (e) {
			e.preventDefault();
			self.removeFilter(e);
			if (self.$inputEl) self.$inputEl.focus();
		});
		this.$el.on('click', '.sortcol', function (e) {
			e.preventDefault();
			e.stopPropagation();
			var sortCol = e.currentTarget.dataset.sort;
			self.engine.toggleSort(sortCol);
			self.sortCol = self.engine.sortCol;
			self.find('');
		});
	}

	Search.prototype.$ = function (query) {
		return this.$el.find(query);
	};

	//
	// Search functions
	//

	Search.prototype.find = function (query, firstElem) {
		if (!this.engine.find(query)) return; // nothing changed

		this.exactMatch = this.engine.exactMatch;
		this.q = this.engine.query;
		this.resultSet = this.engine.results;
		if (firstElem) {
			this.resultSet = [[this.engine.typedSearch.searchType, firstElem]].concat(this.resultSet);
			if (this.resultSet.length > 1 && ['sortpokemon', 'sortmove'].includes(this.resultSet[1][0])) {
				var sortRow = this.resultSet[1];
				this.resultSet[1] = this.resultSet[0];
				this.resultSet[0] = sortRow;
			}
		}
		if (this.filters) {
			this.resultSet = [['html', this.getFilterText()]].concat(this.resultSet);
		}

		// De-duplicate results (can happen if the search index is loaded twice or contains aliases)
		// Keep first occurrence to preserve ordering.
		if (this.resultSet && this.resultSet.length) {
			var seen = Object.create(null);
			var deduped = [];
			for (var di = 0; di < this.resultSet.length; di++) {
				var drow = this.resultSet[di];
				var dtype = drow[0];
				var did = drow[1];
				// Only dedupe real entries; keep headers/sort/html/etc.
				if (dtype === 'pokemon' || dtype === 'move' || dtype === 'item' || dtype === 'ability' || dtype === 'location' || dtype === 'type' || dtype === 'egggroup' || dtype === 'tag') {
					var dkey = dtype + '|' + did;
					if (seen[dkey]) continue;
					seen[dkey] = 1;
				}
				deduped.push(drow);
			}
			this.resultSet = deduped;
		}

		this.renderedIndex = 0;
		this.renderingDone = false;
		this.updateScroll();
		return true;
	};
	Search.prototype.addFilter = function (node) {
		if (!node.dataset.entry) return false;
		var entry = node.dataset.entry.split('|');
		var result = this.engine.addFilter(entry);
		this.filters = this.engine.filters;
		return result;
	};
	Search.prototype.removeFilter = function (e) {
		var result;
		if (e) {
			result = this.engine.removeFilter(e.currentTarget.value.split(':'));
		} else {
			result = this.engine.removeFilter();
		}
		this.filters = this.engine.filters;
		this.find('');
		return result;
	};
	Search.prototype.getFilterText = function (q) {
		var buf = '<p>Filters: ';
		for (var i = 0; i < this.filters.length; i++) {
			var text = this.filters[i][1];
			if (this.filters[i][0] === 'move') text = Dex.moves.get(text).name;
			if (this.filters[i][0] === 'pokemon') text = Dex.species.get(text).name;
			buf += '<button class="filter" value="' + BattleLog.escapeHTML(this.filters[i].join(':')) + '">' + text + ' <i class="fa fa-times-circle"></i></button> ';
		}
		if (!q) buf += '<small style="color: #888">(backspace = delete filter)</small>';
		return buf + '</p>';
	};
	Search.prototype.updateScroll = function (forceAdd) {
		if (this.renderingDone) return;
		var top = this.$viewport.scrollTop();
		var bottom = top + this.$viewport.height();
		var windowHeight = $(window).height();
		var i = this.renderedIndex;
		var finalIndex = Math.floor(bottom / 33) + 1;
		if (!forceAdd && finalIndex <= i) return;
		if (finalIndex < i + 20) finalIndex = i + 20;
		if (bottom - top > windowHeight && !i) finalIndex = 20;
		if (forceAdd && finalIndex > i + 40) finalIndex = i + 40;

		var resultSet = this.resultSet;
		var buf = '';
		while (i < finalIndex) {
			if (!resultSet[i]) {
				this.renderingDone = true;
				break;
			}
			var row = resultSet[i];

			var errorMessage = '';
			var label;
			if ((label = this.engine.filterLabel(row[0]))) {
				errorMessage = '<span class="col filtercol"><em>' + label + '</em></span>';
			} else if ((label = this.engine.illegalLabel(row[1]))) {
				errorMessage = '<span class="col illegalcol"><em>' + label + '</em></span>';
			}

			var mStart = 0;
			var mEnd = 0;
			if (row.length > 3) {
				mStart = row[2];
				mEnd = row[3];
			}
			buf += this.renderRow(row[1], row[0], mStart, mEnd, errorMessage, row[1] in this.cur ? ' class="cur"' : '');

			i++;
		}
		if (!this.renderedIndex) {
			this.el.innerHTML = '<ul class="utilichart" style="height:' + (resultSet.length * 33) + 'px">' + buf + (!this.renderingDone ? '<li class="result more"><p><button class="button big">More</button></p></li>' : '') + '</ul>';
			this.moreVisible = true;
		} else {
			if (this.moreVisible) {
				this.$el.find('.more').remove();
				if (!forceAdd) this.moreVisible = false;
			}
			$(this.el.firstChild).append(buf + (forceAdd && !this.renderingDone ? '<li class="result more"><p><button class="button big">More</button></p></li>' : ''));
		}
		this.renderedIndex = i;
	};
	Search.prototype.setType = function (qType, format, set, cur) {
		this.engine.setType(qType, format, set);
		this.filters = this.engine.filters;
		this.sortCol = this.engine.sortCol;
		this.cur = cur || {};
		var firstElem;
		for (var id in cur) {
			firstElem = id;
			break;
		}
		this.find('', firstElem);
	};

	/*********************************************************
	 * Rendering functions
	 *********************************************************/

	// These all have static versions

	Search.prototype.renderRow = function (id, type, matchStart, matchLength, errorMessage, attrs) {
		// errorMessage = '<span class="col illegalcol"><em>' + errorMessage + '</em></span>';
		switch (type) {
		case 'html':
			return '<li class="result">' + id + '</li>';
		case 'header':
			return '<li class="result"><h3>' + id + '</h3></li>';
		case 'sortpokemon':
			return this.renderPokemonSortRow();
		case 'sortmove':
			return this.renderMoveSortRow();
		case 'pokemon':
			var pokemon = this.engine.dex.species.get(id);
			return this.renderPokemonRow(pokemon, matchStart, matchLength, errorMessage, attrs);
        case 'location':
			var location = BattleLocationdex[id];
			return this.renderLocationRow(location, matchStart, matchLength, errorMessage, attrs);
		case 'move':
			var move = this.engine.dex.moves.get(id);
			return this.renderMoveRow(move, matchStart, matchLength, errorMessage, attrs);
		case 'item':
			var item = this.engine.dex.items.get(id);
			return this.renderItemRow(item, matchStart, matchLength, errorMessage, attrs);
		case 'ability':
			var ability = this.engine.dex.abilities.get(id);
			return this.renderAbilityRow(ability, matchStart, matchLength, errorMessage, attrs);
		case 'type':
			var type = {name: id[0].toUpperCase() + id.substr(1)};
			return this.renderTypeRow(type, matchStart, matchLength, errorMessage);
		case 'egggroup':
			// very hardcode
			var egName;
			if (id === 'humanlike') egName = 'Human-Like';
			else if (id === 'water1') egName = 'Water 1';
			else if (id === 'water2') egName = 'Water 2';
			else if (id === 'water3') egName = 'Water 3';
			if (egName) {
				if (matchLength > 5) matchLength++;
			} else {
				egName = id[0].toUpperCase() + id.substr(1);
			}
			var egggroup = {name: egName};
			return this.renderEggGroupRow(egggroup, matchStart, matchLength, errorMessage);
		case 'tier':
			// very hardcode
			var tierTable = {
				uber: "Uber",
				ou: "OU",
				uu: "UU",
				ru: "RU",
				nu: "NU",
				pu: "PU",
				zu: "ZU",
				nfe: "NFE",
				lc: "LC",
				cap: "CAP",
				caplc: "CAP LC",
				capnfe: "CAP NFE",
				uubl: "UUBL",
				rubl: "RUBL",
				nubl: "NUBL",
				publ: "PUBL",
				zubl: "ZUBL"
			};
			var tier = {name: tierTable[id]};
			return this.renderTierRow(tier, matchStart, matchLength, errorMessage);
		case 'category':
			var category = {name: id[0].toUpperCase() + id.substr(1), id: id};
			return this.renderCategoryRow(category, matchStart, matchLength, errorMessage);
		case 'article':
			var articleTitle = (window.BattleArticleTitles && BattleArticleTitles[id]) || (id[0].toUpperCase() + id.substr(1));
			var article = {name: articleTitle, id: id};
			return this.renderArticleRow(article, matchStart, matchLength, errorMessage);
		}
		return 'Error: not found';
	};
	Search.prototype.renderPokemonSortRow = function () {
		var buf = '<li class="result"><div class="sortrow">';
		buf += '<button class="sortcol numsortcol' + (!this.sortCol ? ' cur' : '') + '">' + (!this.sortCol ? 'Sort: ' : this.engine.firstPokemonColumn) + '</button>';
		buf += '<button class="sortcol pnamesortcol' + (this.sortCol === 'name' ? ' cur' : '') + '" data-sort="name">Name</button>';
		buf += '<button class="sortcol typesortcol' + (this.sortCol === 'type' ? ' cur' : '') + '" data-sort="type">Types</button>';
		buf += '<button class="sortcol abilitysortcol' + (this.sortCol === 'ability' ? ' cur' : '') + '" data-sort="ability">Abilities</button>';
		buf += '<button class="sortcol statsortcol' + (this.sortCol === 'hp' ? ' cur' : '') + '" data-sort="hp">HP</button>';
		buf += '<button class="sortcol statsortcol' + (this.sortCol === 'atk' ? ' cur' : '') + '" data-sort="atk">Atk</button>';
		buf += '<button class="sortcol statsortcol' + (this.sortCol === 'def' ? ' cur' : '') + '" data-sort="def">Def</button>';
		if (this.engine.dex.gen >= 2) {
			buf += '<button class="sortcol statsortcol' + (this.sortCol === 'spa' ? ' cur' : '') + '" data-sort="spa">SpA</button>';
			buf += '<button class="sortcol statsortcol' + (this.sortCol === 'spd' ? ' cur' : '') + '" data-sort="spd">SpD</button>';
		} else {
			buf += '<button class="sortcol statsortcol' + (this.sortCol === 'spa' ? ' cur' : '') + '" data-sort="spa">Spc</button>';
		}
		buf += '<button class="sortcol statsortcol' + (this.sortCol === 'spe' ? ' cur' : '') + '" data-sort="spe">Spe</button>';
		buf += '<button class="sortcol statsortcol' + (this.sortCol === 'bst' ? ' cur' : '') + '" data-sort="bst">BST</button>';
		buf += '</div></li>';
		return buf;
	};

	function rhhHasAnyEncounters(speciesId) {
	  function normalizeEncArray(encContainer) {
	    if (!encContainer) return null;
	    if (Array.isArray(encContainer)) return encContainer;
	    if (typeof encContainer === 'object' && Array.isArray(encContainer.encs)) return encContainer.encs;
	    return null;
	  }

	  function bucketHas(encContainer) {
	    var arr = normalizeEncArray(encContainer);
	    if (!arr || !arr.length) return false;
	    for (var i = 0; i < arr.length; i++) {
	      var e = arr[i];
	      if (e && toID(e.species) === toID(speciesId)) return true;
	    }
	    return false;
	  }

	  for (var k in BattleLocationdex) {
	    if (!Object.prototype.hasOwnProperty.call(BattleLocationdex, k)) continue;
	    if (k === 'rates') continue;

	    var loc = BattleLocationdex[k];
	    if (!loc) continue;

	    if (bucketHas(loc.land)) return true;
	    if (bucketHas(loc.surf)) return true;
	    if (bucketHas(loc.rockSmash || loc.rocksmash || loc.rock)) return true;
	    if (bucketHas(loc.fish || loc.fishing)) return true; // Old Rod
	  }
	  return false;
	}


	Search.prototype.renderMoveSortRow = function () {
		var buf = '<li class="result"><div class="sortrow">';
		buf += '<button class="sortcol movenamesortcol' + (this.sortCol === 'name' ? ' cur' : '') + '" data-sort="name">Name</button>';
		buf += '<button class="sortcol movetypesortcol' + (this.sortCol === 'type' ? ' cur' : '') + '" data-sort="type">Type</button>';
		buf += '<button class="sortcol movetypesortcol' + (this.sortCol === 'category' ? ' cur' : '') + '" data-sort="category">Cat</button>';
		buf += '<button class="sortcol powersortcol' + (this.sortCol === 'power' ? ' cur' : '') + '" data-sort="power">Pow</button>';
		buf += '<button class="sortcol accuracysortcol' + (this.sortCol === 'accuracy' ? ' cur' : '') + '" data-sort="accuracy">Acc</button>';
		buf += '<button class="sortcol ppsortcol' + (this.sortCol === 'pp' ? ' cur' : '') + '" data-sort="pp">PP</button>';
		buf += '</div></li>';
		return buf;
	};

	// --- Obtainability cache (wild + evolutions) for RHH 1.12 ---

	var __rhhObtainCache = null; // id -> {status, reason}
	var __rhhWildSet = null;     // id -> true

	function rhhNormalizeEncArray(encContainer) {
	  if (!encContainer) return null;
	  if (Array.isArray(encContainer)) return encContainer;
	  if (typeof encContainer === 'object' && Array.isArray(encContainer.encs)) return encContainer.encs;
	  return null;
	}

	function rhhBuildWildSet() {
	  var wild = Object.create(null);

	  for (var k in BattleLocationdex) {
	    if (!Object.prototype.hasOwnProperty.call(BattleLocationdex, k)) continue;
	    if (k === 'rates') continue;

	    var loc = BattleLocationdex[k];
	    if (!loc) continue;

	    var buckets = [
	      loc.land,
	      loc.surf,
	      loc.rockSmash || loc.rocksmash || loc.rock,
	      loc.fish || loc.fishing
	    ];

	    for (var b = 0; b < buckets.length; b++) {
	      var arr = rhhNormalizeEncArray(buckets[b]);
	      if (!arr) continue;

	      for (var i = 0; i < arr.length; i++) {
	        var e = arr[i];
	        if (!e || !e.species) continue;
	        wild[toID(e.species)] = true;
	      }
	    }
	  }

	  // Also seed from static/gift/overworld overlays.
	  // Supports both:
	  // - { speciesId: [ { ... } ] }
	  // - [ { species/speciesId/id: '...' } ]
	  var staticRaw = window.BattleStaticEncounters || window.PorydexStaticEncounters;
	  if (staticRaw) {
	    function addStaticId(v, fallbackSpeciesKey) {
	      if (!v) return;
	      var sid = toID(
	        (v && (v.species || v.speciesId || v.id)) ||
	        fallbackSpeciesKey ||
	        ''
	      );
	      if (!sid) return;
	      wild[sid] = true;
	    }

	    if (Array.isArray(staticRaw)) {
	      for (var si = 0; si < staticRaw.length; si++) {
	        addStaticId(staticRaw[si], null);
	      }
	    } else {
	      for (var speciesKey in staticRaw) {
	        if (!Object.prototype.hasOwnProperty.call(staticRaw, speciesKey)) continue;
	        var val = staticRaw[speciesKey];
	        if (Array.isArray(val)) {
	          for (var vi = 0; vi < val.length; vi++) {
	            addStaticId(val[vi], speciesKey);
	          }
	        } else if (val && Array.isArray(val.encounters)) {
	          for (var ei = 0; ei < val.encounters.length; ei++) {
	            addStaticId(val.encounters[ei], speciesKey);
	          }
	        } else {
	          addStaticId(val, speciesKey);
	        }
	      }
	    }
	  }

	  return wild;
	}

	// Decide if a child species evolution method is feasible in your hack.
	// NOTE: evo method is stored on the CHILD species (the one you evolve INTO).
	function rhhIsEvolutionFeasible(childSpecies) {
	  if (!childSpecies || !childSpecies.exists) return { ok: false, uncertain: false };

	  var evoType = childSpecies.evoType || '';

	  // If data is missing, be permissive (treat as feasible)
	  if (!evoType) return { ok: true, uncertain: false };

	  // Always-feasible methods
	  var alwaysOk = {
	    'level': 1,
	    'levelExtra': 1,
	    'happiness': 1,
	    'happinessDay': 1,
	    'happinessNight': 1,
	    'levelDay': 1,
	    'levelNight': 1,
	    'levelMorning': 1,
	    'levelEvening': 1,
	    'levelAfternoon': 1,
	    'other': 1
	  };
	  if (alwaysOk[evoType]) return { ok: true, uncertain: false };

	  // Item-based methods: require the item to exist
	  if (evoType === 'useItem' || evoType === 'levelHold' || evoType === 'tradeItem') {
	    var itemId = toID(childSpecies.evoItem || '');
	    if (!itemId) return { ok: false, uncertain: false };
	    var it = Dex.items.get(itemId);
	    return { ok: !!(it && it.exists), uncertain: false };
	  }

	  // Move-based: we only check that the move exists (learning check is more complex)
	  if (evoType === 'move') {
	    var moveId = toID(childSpecies.evoMove || '');
	    if (!moveId) return { ok: false, uncertain: false };
	    var mv = Dex.moves.get(moveId);
	    return { ok: !!(mv && mv.exists), uncertain: true }; // uncertain because we don't verify learnset here
	  }

	  // Trade-based: check for link cable
	  if (evoType === 'trade' || evoType === 'tradeSpecies' || evoType === 'tradeItem') {
	    var linkCable = Dex.items.get('linkcable');
	    if (linkCable && linkCable.exists) return { ok: true, uncertain: false };
	    return { ok: true, uncertain: true };
	  }


	  // Anything unknown: don't assume
	  return { ok: false, uncertain: false };
	}

	function rhhBuildObtainabilityCache() {
	  // status:
	  // 2 = wild obtainable (✅)
	  // 1 = obtainable via feasible evolution (🧬) (not used, substituted with classic green flag for readability)
	  // 0 = not obtainable (❌)
	  // -1 = obtainable only via uncertain evolution (⚠️)  (we use this only if needed)
	  var cache = Object.create(null);

	  __rhhWildSet = __rhhWildSet || rhhBuildWildSet();

	  // Initialize cache with wild obtainable
	  // Also create a queue of ids we know are obtainable so we can propagate evolutions.
	  var queue = [];
	  for (var id in Dex.species.dex) {
	    // Dex.species.dex may exist depending on build; fallback below
	    break;
	  }

	  // Safer: iterate through Dex.species.all() if available, else iterate known ids from Dex.species
	  var all = (Dex.species.all ? Dex.species.all() : null);
	  if (all && all.length) {
	    for (var i = 0; i < all.length; i++) {
	      var sp = all[i];
	      if (!sp || !sp.exists) continue;
	      var sid = toID(sp.id || sp.name);
	      if (__rhhWildSet[sid]) {
	        cache[sid] = { status: 2 };
	        queue.push(sid);
	      } else {
	        cache[sid] = { status: 0 };
	      }
	    }
	  } else {
	    // Fallback: try a small subset via Dex.species.get on demand later
	    // We'll just seed from wild set keys
	    for (var wid in __rhhWildSet) {
	      cache[wid] = { status: 2 };
	      queue.push(wid);
	    }
	  }

	  function rank(s) {
	    if (s === 2) return 3;
	    if (s === 1) return 2;
	    if (s === -1) return 1;
	    return 0;
	  }

	  // BFS propagate to evolutions
	  while (queue.length) {
	    var curId = queue.shift();
	    var curSp = Dex.species.get(curId);
	    if (!curSp || !curSp.exists) continue;

	    var evos = curSp.evos || [];
	    for (var e = 0; e < evos.length; e++) {
	      var childId = toID(evos[e]);
	      if (!childId) continue;

	      var childSp = Dex.species.get(childId);
	      if (!childSp || !childSp.exists) continue;

	      // Ensure the relationship really is parent->child
	      if (toID(childSp.prevo || '') && toID(childSp.prevo) !== toID(curSp.name)) {
	        // Not a direct evolution from this parent; skip
	        continue;
	      }

	      var feas = rhhIsEvolutionFeasible(childSp);
	      if (!feas.ok) continue;

	      var newStatus = feas.uncertain ? -1 : 1;

	      // If child is already wild (2), keep it.
	      // Otherwise upgrade if we are improving its status.
	      var prev = cache[childId] ? cache[childId].status : 0;

	      if (rank(newStatus) > rank(prev)) {
	        cache[childId] = { status: newStatus };
	        queue.push(childId);
	      }
	    }

	    // Breeding back-propagation: if a species is obtainable and breedable,
	    // consider its pre-evolution obtainable as well.
	    var prevoId = toID(curSp.prevo || '');
	    if (prevoId) {
	      var eggGroups = curSp.eggGroups || [];
	      var canBreed = eggGroups.length && eggGroups.indexOf('Undiscovered') < 0;
	      if (canBreed) {
	        var prevoPrev = cache[prevoId] ? cache[prevoId].status : 0;
	        var prevoStatus = 1;
	        if (rank(prevoStatus) > rank(prevoPrev)) {
	          cache[prevoId] = { status: prevoStatus };
	          queue.push(prevoId);
	        }
	      }
	    }
	  }

	  return cache;
	}

	function rhhGetObtainStatus(speciesId) {
	  if (!__rhhObtainCache) __rhhObtainCache = rhhBuildObtainabilityCache();
	  var sid = toID(speciesId);
	  var entry = __rhhObtainCache[sid];
	  return entry ? entry.status : 0;
	}

	function getEvolutionMethods(childSp) {
    	// childSp = Dex.species.get('ivysaur') ecc.
    	var methods = [];

    	var evoType = childSp.evoType || '';
    	var evoItemId = toID(childSp.evoItem || '');

    	// Helper to push unique labels
    	function add(label) {
    	    if (methods.indexOf(label) < 0) methods.push(label);
    	}

    	// Standard rendering
    	if (!evoType) {
    	    // unknown / missing info
    	    add('Evolves (method unknown)');
    	    return methods;
    	}

    	// Level-based
    	if (evoType === 'level' || evoType === 'levelExtra') {
    	    if (childSp.evoLevel) add('Level ' + childSp.evoLevel);
    	    else add('Level up');
    	    if (childSp.evoCondition) add(childSp.evoCondition);
    	    return methods;
    	}

    	// Happiness
    	if (evoType === 'happiness' || evoType === 'happinessDay' || evoType === 'happinessNight') {
    	    add('Happiness');
    	    if (evoType === 'happinessDay') add('(Day)');
    	    if (evoType === 'happinessNight') add('(Night)');
    	    if (childSp.evoCondition) add(childSp.evoCondition);
    	    return methods;
    	}

    	// Use item / hold item
    	if (evoType === 'useItem' || evoType === 'levelHold') {
    	    if (evoItemId) add('Use ' + Dex.items.get(evoItemId).name);
    	    else add('Use item');
    	    if (childSp.evoCondition) add(childSp.evoCondition);
    	    return methods;
    	}

    	// Trade variants
    	if (evoType === 'trade' || evoType === 'tradeItem' || evoType === 'tradeSpecies') {
    	    add('Trade');

    	    // Your hack rule: trade-evolutions are also possible via Link Cable item
    	    // (change 'linkcable' if your item id is different)
			var linkCord = findLinkCordItem();
			if (linkCord) add('use ' + linkCord.name);
    	    

    	    // If it requires an item on trade, show it too
    	    if (evoType === 'tradeItem' && evoItemId) {
    	        add('Trade holding ' + Dex.items.get(evoItemId).name);
    	    }

    	    if (childSp.evoCondition) add(childSp.evoCondition);
    	    return methods;
    	}

    	// Move-based (basic)
    	if (evoType === 'move') {
    	    if (childSp.evoMove) add('Knows ' + childSp.evoMove);
    	    else add('Knows a specific move');
    	    return methods;
    	}

    	// Fallback
    	add('Evolves (' + evoType + ')');
    	if (childSp.evoCondition) add(childSp.evoCondition);
    	return methods;
	}

	function getUniqueTypes(types) {
	    var out = [];
	    var seen = {};
	    types = types || [];
	    for (var i = 0; i < types.length; i++) {
	        var t = types[i];
	        if (!t || seen[t]) continue;
	        seen[t] = true;
	        out.push(t);
	    }
	    return out;
	}

	Search.prototype.renderPokemonRow = function (pokemon, matchStart, matchLength, errorMessage, attrs) {
		if (!attrs) attrs = '';
		if (!pokemon) return '<li class="result">Unrecognized pokemon</li>';
		var id = toID(pokemon.name);
		if (Search.urlRoot) attrs += ' href="' + Search.urlRoot + 'pokemon/' + id + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="pokemon|' + BattleLog.escapeHTML(pokemon.name) + '">';

		var obtainId = (pokemon.baseSpecies ? toID(pokemon.baseSpecies) : '') ||
		(window.BattleAliases && window.BattleAliases[id] ? toID(window.BattleAliases[id]) : '') || id;

		var status = rhhGetObtainStatus(obtainId); // id = toID(pokemon.name)

		if (status === 2 || status == 1) {
		  buf += '<span class="col numcol">✅</span> ';
		} else if (status === -1) {
		  buf += '<span class="col numcol">✅</span> '; // ex ⚠️
		} else {
		  buf += '<span class="col numcol">❌</span> ';
		}



		// icon
		buf += '<span class="col iconcol">';
		buf += '<span style="' + Dex.getPokemonIcon(pokemon.name) + '"></span>';
		buf += '</span> ';

		// name
		var name = pokemon.name;
		var tagStart = (pokemon.forme ? name.length - pokemon.forme.length - 1 : 0);
		if (tagStart) name = name.substr(0, tagStart);
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		if (tagStart) {
			if (matchLength && matchStart + matchLength > tagStart) {
				if (matchStart < tagStart) {
					matchLength -= tagStart - matchStart;
					matchStart = tagStart;
				}
				name += '<small>' + pokemon.name.substr(tagStart, matchStart - tagStart) + '<b>' + pokemon.name.substr(matchStart, matchLength) + '</b>' + pokemon.name.substr(matchStart + matchLength) + '</small>';
			} else {
				name += '<small>' + pokemon.name.substr(tagStart) + '</small>';
			}
		}
		buf += '<span class="col pokemonnamecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		var gen = this.engine ? this.engine.dex.gen : 9;

		// type
		buf += '<span class="col typecol">';
		var types = getUniqueTypes(pokemon.types);
		for (var i = 0; i < types.length; i++) buf += Dex.getTypeIcon(types[i]);
		buf += '</span> ';

		// abilities
		if (gen >= 3) {
			var abilities = Dex.forGen(gen).species.get(id).abilities;
			if (gen >= 5) {
				if (abilities['1']) {
					buf += '<span class="col twoabilitycol">' + abilities['0'] + '<br />' +
						abilities['1'] + '</span>';
				} else {
					buf += '<span class="col abilitycol">' + abilities['0'] + '</span>';
				}
				var unreleasedHidden = pokemon.unreleasedHidden;
				if (unreleasedHidden === 'Past' && (this.mod === 'natdex' || gen < 8)) unreleasedHidden = false;
				if (abilities['S']) {
					if (abilities['H']) {
						buf += '<span class="col twoabilitycol' + (unreleasedHidden ? ' unreleasedhacol' : '') + '">' + (abilities['H'] || '') + '<br />(' + abilities['S'] + ')</span>';
					} else {
						buf += '<span class="col abilitycol">(' + abilities['S'] + ')</span>';
					}
				} else if (abilities['H']) {
					buf += '<span class="col abilitycol' + (unreleasedHidden ? ' unreleasedhacol' : '') + '">' + abilities['H'] + '</span>';
				} else {
					buf += '<span class="col abilitycol"></span>';
				}
			} else {
				buf += '<span class="col abilitycol">' + abilities['0'] + '</span>';
				buf += '<span class="col abilitycol">' + (abilities['1'] ? abilities['1'] : '') + '</span>';
			}
		} else {
			buf += '<span class="col abilitycol"></span>';
			buf += '<span class="col abilitycol"></span>';
		}

		// base stats
		var stats = pokemon.baseStats;
		buf += '<span class="col statcol"><em>HP</em><br />' + stats.hp + '</span> ';
		buf += '<span class="col statcol"><em>Atk</em><br />' + stats.atk + '</span> ';
		buf += '<span class="col statcol"><em>Def</em><br />' + stats.def + '</span> ';
		if (gen >= 2) {
			buf += '<span class="col statcol"><em>SpA</em><br />' + stats.spa + '</span> ';
			buf += '<span class="col statcol"><em>SpD</em><br />' + stats.spd + '</span> ';
		} else {
			buf += '<span class="col statcol"><em>Spc</em><br />' + stats.spa + '</span> ';
		}
		buf += '<span class="col statcol"><em>Spe</em><br />' + stats.spe + '</span> ';
		var bst = 0;
		for (i in stats) {
			if (i === 'spd' && gen === 1) continue;
			bst += stats[i];
		}
		buf += '<span class="col bstcol"><em>BST<br />' + bst + '</em></span> ';

		buf += '</a></li>';

		return buf;
	};
	Search.prototype.renderTaggedPokemonRowInner = function (pokemon, tag, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'pokemon/' + toID(pokemon.name) + '" data-target="push"';
		var buf = '<a' + attrs + ' data-entry="pokemon|' + BattleLog.escapeHTML(pokemon.name) + '">';

		// tag
		buf += '<span class="col tagcol shorttagcol">' + tag + '</span> ';

		// icon
		buf += '<span class="col iconcol">';
		buf += '<span style="' + Dex.getPokemonIcon(pokemon.name) + '"></span>';
		buf += '</span> ';

		// name
		var name = pokemon.name;
		var tagStart = (pokemon.forme ? name.length - pokemon.forme.length - 1 : 0);
		if (tagStart) name = name.substr(0, tagStart) + '<small>' + pokemon.name.substr(tagStart) + '</small>';
		buf += '<span class="col shortpokemonnamecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		// type
		buf += '<span class="col typecol">';
		var types = getUniqueTypes(pokemon.types);
		for (var i = 0; i < types.length; i++) buf += Dex.getTypeIcon(types[i]);
		buf += '</span> ';

		// abilities
		buf += '<span style="float:left;min-height:26px">';
		if (pokemon.abilities['1']) {
			buf += '<span class="col twoabilitycol">';
		} else {
			buf += '<span class="col abilitycol">';
		}
		for (var i in pokemon.abilities) {
			var ability = pokemon.abilities[i];
			if (!ability) continue;

			if (i === '1') buf += '<br />';
			if (i === 'H') ability = '</span><span class="col abilitycol"><em>' + pokemon.abilities[i] + '</em>';
			buf += ability;
		}
		if (!pokemon.abilities['H']) buf += '</span><span class="col abilitycol">';
		buf += '</span>';
		buf += '</span>';

		// base stats
		buf += '<span style="float:left;min-height:26px">';
		buf += '<span class="col statcol"><em>HP</em><br />' + pokemon.baseStats.hp + '</span> ';
		buf += '<span class="col statcol"><em>Atk</em><br />' + pokemon.baseStats.atk + '</span> ';
		buf += '<span class="col statcol"><em>Def</em><br />' + pokemon.baseStats.def + '</span> ';
		buf += '<span class="col statcol"><em>SpA</em><br />' + pokemon.baseStats.spa + '</span> ';
		buf += '<span class="col statcol"><em>SpD</em><br />' + pokemon.baseStats.spd + '</span> ';
		buf += '<span class="col statcol"><em>Spe</em><br />' + pokemon.baseStats.spe + '</span> ';
		var bst = 0;
		for (i in pokemon.baseStats) bst += pokemon.baseStats[i];
		buf += '<span class="col bstcol"><em>BST<br />' + bst + '</em></span> ';
		buf += '</span>';

		buf += '</a>';

		return buf;
	};

    Search.prototype.renderTaggedEncounterRow = function (zone, tag) {
        var attrs = ''
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'encounters/' + toID(zone.name) + '" data-target="push"';
        var buf = '<li class="result"><a ' + attrs + ' data-entry="encounters|' + BattleLog.escapeHTML(zone.name) + '">';

        // tag
		buf += '<span class="col tagcol">' + tag + '</span> ';

        // name
		buf += '<span class="col shortmovenamecol">' + zone.name + '</span> ';

		buf += '</a></li>';

		return buf;
    }

    Search.prototype.renderTaggedLocationRowInner = function (pokemon, tag, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'pokemon/' + toID(pokemon.name) + '" data-target="push"';
		var buf = '<a' + attrs + ' data-entry="pokemon|' + BattleLog.escapeHTML(pokemon.name) + '">';

		// tag
		buf += '<span class="col tagcol shorttagcol">' + tag + '</span> ';

		// icon
		buf += '<span class="col iconcol">';
		buf += '<span style="' + Dex.getPokemonIcon(pokemon.name) + '"></span>';
		buf += '</span> ';

		// name
		var name = pokemon.name;
		var tagStart = (pokemon.forme ? name.length - pokemon.forme.length - 1 : 0);
		if (tagStart) name = name.substr(0, tagStart) + '<small>' + pokemon.name.substr(tagStart) + '</small>';
		buf += '<span class="col shortpokemonnamecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		// type
		buf += '<span class="col typecol">';
		var types = getUniqueTypes(pokemon.types);
		for (var i = 0; i < types.length; i++) buf += Dex.getTypeIcon(types[i]);
		buf += '</span> ';

		// abilities
		buf += '<span style="float:left;min-height:26px">';
		if (pokemon.abilities['1']) {
			buf += '<span class="col twoabilitycol">';
		} else {
			buf += '<span class="col abilitycol">';
		}
		for (var i in pokemon.abilities) {
			var ability = pokemon.abilities[i];
			if (!ability) continue;

			if (i === '1') buf += '<br />';
			if (i === 'H') ability = '</span><span class="col abilitycol"><em>' + pokemon.abilities[i] + '</em>';
			buf += ability;
		}
		if (!pokemon.abilities['H']) buf += '</span><span class="col abilitycol">';
		buf += '</span>';
		buf += '</span>';

		// base stats
		buf += '<span style="float:left;min-height:26px">';
		buf += '<span class="col statcol"><em>HP</em><br />' + pokemon.baseStats.hp + '</span> ';
		buf += '<span class="col statcol"><em>Atk</em><br />' + pokemon.baseStats.atk + '</span> ';
		buf += '<span class="col statcol"><em>Def</em><br />' + pokemon.baseStats.def + '</span> ';
		buf += '<span class="col statcol"><em>SpA</em><br />' + pokemon.baseStats.spa + '</span> ';
		buf += '<span class="col statcol"><em>SpD</em><br />' + pokemon.baseStats.spd + '</span> ';
		buf += '<span class="col statcol"><em>Spe</em><br />' + pokemon.baseStats.spe + '</span> ';
		var bst = 0;
		for (i in pokemon.baseStats) bst += pokemon.baseStats[i];
		buf += '<span class="col bstcol"><em>BST<br />' + bst + '</em></span> ';
		buf += '</span>';

		buf += '</a>';

		return buf;
	};

	Search.prototype.renderItemRow = function (item, matchStart, matchLength, errorMessage, attrs) {
		if (!attrs) attrs = '';
		if (!item) return '<li class="result">Unrecognized item</li>';
		var id = toID(item.name);
		if (Search.urlRoot) attrs += ' href="' + Search.urlRoot + 'items/' + id + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="item|' + BattleLog.escapeHTML(item.name) + '">';

		// icon
		buf += '<span class="col itemiconcol">';
		buf += '<span style="' + Dex.getItemIcon(item) + '"></span>';
		buf += '</span> ';

		// name
		var name = item.name;
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		buf += '<span class="col namecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		// desc
		buf += '<span class="col itemdesccol">' + BattleLog.escapeHTML(item.shortDesc) + '</span> ';

		buf += '</a></li>';

		return buf;
	};
	Search.prototype.renderAbilityRow = function (ability, matchStart, matchLength, errorMessage, attrs) {
		if (!attrs) attrs = '';
		if (!ability) return '<li class="result">Unrecognized ability</li>';
		var id = toID(ability.name);
		if (Search.urlRoot) attrs += ' href="' + Search.urlRoot + 'abilities/' + id + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="ability|' + BattleLog.escapeHTML(ability.name) + '">';

		// name
		var name = ability.name;
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		buf += '<span class="col namecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		buf += '<span class="col abilitydesccol">' + BattleLog.escapeHTML(ability.shortDesc) + '</span> ';

		buf += '</a></li>';

		return buf;
	};

    Search.prototype.renderLocationRow = function (location, matchStart, matchLength, errorMessage, attrs) {
		if (!attrs) attrs = '';
		if (!location) return '<li class="result">Unrecognized location</li>';
		var id = toID(location.name);
		if (Search.urlRoot) attrs += ' href="' + Search.urlRoot + 'encounters/' + id + '" data-target="push"';
        // piggyback off moves
		var buf = '<li class="result"><a' + attrs + ' data-entry="move|' + BattleLog.escapeHTML(location.name) + '">';
		// name
		var name = location.name;
		var tagStart = 0;
		if (tagStart) name = name.substr(0, tagStart);
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		if (tagStart) {
			if (matchLength && matchStart + matchLength > tagStart) {
				if (matchStart < tagStart) {
					matchLength -= tagStart - matchStart;
					matchStart = tagStart;
				}
				name += '<small>' + location.name.substr(tagStart, matchStart - tagStart) + '<b>' + location.name.substr(matchStart, matchLength) + '</b>' + move.name.substr(matchStart + matchLength) + '</small>';
			} else {
				name += '<small>' + location.name.substr(tagStart) + '</small>';
			}
		}
		buf += '<span class="col movenamecol">' + name + '</span> ';

		// type
		buf += '<span class="col typecol">';
		buf += '</span> ';
		buf += '</a></li>';

		return buf;
	};

	Search.prototype.renderMoveRow = function (move, matchStart, matchLength, errorMessage, attrs) {
		if (!attrs) attrs = '';
		if (!move) return '<li class="result">Unrecognized move</li>';
		var id = toID(move.name);
		if (Search.urlRoot) attrs += ' href="' + Search.urlRoot + 'moves/' + id + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="move|' + BattleLog.escapeHTML(move.name) + '">';

		// name
		var name = move.name;
		var tagStart = (name.substr(0, 12) === 'Hidden Power' ? 12 : 0);
		if (tagStart) name = name.substr(0, tagStart);
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		if (tagStart) {
			if (matchLength && matchStart + matchLength > tagStart) {
				if (matchStart < tagStart) {
					matchLength -= tagStart - matchStart;
					matchStart = tagStart;
				}
				name += '<small>' + move.name.substr(tagStart, matchStart - tagStart) + '<b>' + move.name.substr(matchStart, matchLength) + '</b>' + move.name.substr(matchStart + matchLength) + '</small>';
			} else {
				name += '<small>' + move.name.substr(tagStart) + '</small>';
			}
		}
		buf += '<span class="col movenamecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		// type
		buf += '<span class="col typecol">';
		buf += Dex.getTypeIcon(move.type);
		buf += Dex.getCategoryIcon(move.category);
		buf += '</span> ';

		// power, accuracy, pp
		var pp = (move.pp === 1 || move.noPPBoosts ? move.pp : move.pp * 8 / 5);
		if (this.engine && this.engine.dex.gen < 3) pp = Math.min(61, pp);
		buf += '<span class="col labelcol">' + (move.category !== 'Status' ? ('<em>Power</em><br />' + (move.basePower || '&mdash;')) : '') + '</span> ';
		buf += '<span class="col widelabelcol"><em>Accuracy</em><br />' + (move.accuracy && move.accuracy !== true ? move.accuracy + '%' : '&mdash;') + '</span> ';
		buf += '<span class="col pplabelcol"><em>PP</em><br />' + pp + '</span> ';

		// desc
		buf += '<span class="col movedesccol">' + BattleLog.escapeHTML(move.shortDesc) + '</span> ';

		buf += '</a></li>';

		return buf;
	};
	Search.prototype.renderMoveRowInner = function (move, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'moves/' + toID(move.name) + '" data-target="push"';
		var buf = '<a' + attrs + ' data-entry="move|' + BattleLog.escapeHTML(move.name) + '">';

		// name
		var name = move.name;
		var tagStart = (name.substr(0, 12) === 'Hidden Power' ? 12 : 0);
		if (tagStart) name = name.substr(0, tagStart) + '<small>' + move.name.substr(tagStart) + '</small>';
		buf += '<span class="col movenamecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		// type
		buf += '<span class="col typecol">';
		buf += Dex.getTypeIcon(move.type);
		buf += Dex.getCategoryIcon(move.category);
		buf += '</span> ';

		// power, accuracy, pp
		var pp = (move.pp === 1 || move.noPPBoosts ? move.pp : move.pp * 8 / 5);
		if (this.engine && this.engine.dex.gen < 3) pp = Math.min(61, pp);
		buf += '<span class="col labelcol">' + (move.category !== 'Status' ? ('<em>Power</em><br />' + (move.basePower || '&mdash;')) : '') + '</span> ';
		buf += '<span class="col widelabelcol"><em>Accuracy</em><br />' + (move.accuracy && move.accuracy !== true ? move.accuracy + '%' : '&mdash;') + '</span> ';
		buf += '<span class="col pplabelcol"><em>PP</em><br />' + pp + '</span> ';

		// desc
		buf += '<span class="col movedesccol">' + BattleLog.escapeHTML(move.shortDesc || move.desc) + '</span> ';

		buf += '</a>';

		return buf;
	};

	Search.prototype.renderTaggedMoveRow = function (move, tag, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'moves/' + toID(move.name) + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="move|' + BattleLog.escapeHTML(move.name) + '">';

		// tag
		buf += '<span class="col tagcol">' + tag + '</span> ';

		// name
		var name = move.name;
		if (name.substr(0, 12) === 'Hidden Power') name = 'Hidden Power';
		buf += '<span class="col shortmovenamecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		// type
		buf += '<span class="col typecol">';
		buf += Dex.getTypeIcon(move.type);
		buf += Dex.getCategoryIcon(move.category);
		buf += '</span> ';

		// power, accuracy, pp
		buf += '<span class="col labelcol">' + (move.category !== 'Status' ? ('<em>Power</em><br />' + (move.basePower || '&mdash;')) : '') + '</span> ';
		buf += '<span class="col widelabelcol"><em>Accuracy</em><br />' + (move.accuracy && move.accuracy !== true ? move.accuracy + '%' : '&mdash;') + '</span> ';
		buf += '<span class="col pplabelcol"><em>PP</em><br />' + (move.pp !== 1 ? move.pp * 8 / 5 : move.pp) + '</span> ';

		// desc
		buf += '<span class="col movedesccol">' + BattleLog.escapeHTML(move.shortDesc || move.desc) + '</span> ';

		buf += '</a></li>';

		return buf;
	};

	Search.prototype.renderTypeRow = function (type, matchStart, matchLength, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'types/' + toID(type.name) + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="type|' + BattleLog.escapeHTML(type.name) + '">';

		// name
		var name = type.name;
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		buf += '<span class="col namecol">' + name + '</span> ';

		// type
		buf += '<span class="col typecol">';
		buf += Dex.getTypeIcon(type.name);
		buf += '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		buf += '</a></li>';

		return buf;
	};
	Search.prototype.renderCategoryRow = function (category, matchStart, matchLength, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'categories/' + category.id + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="category|' + BattleLog.escapeHTML(category.name) + '">';

		// name
		var name = category.name;
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		buf += '<span class="col namecol">' + name + '</span> ';

		// category
		buf += '<span class="col typecol">' + Dex.getCategoryIcon(category.name) + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		buf += '</a></li>';

		return buf;
	};
	Search.prototype.renderArticleRow = function (article, matchStart, matchLength, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'articles/' + article.id + '" data-target="push"';
		var isSearchType = (article.id === 'pokemon' || article.id === 'moves');
		if (isSearchType) attrs = ' href="' + article.id + '/" data-target="replace"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="article|' + BattleLog.escapeHTML(article.name) + '">';

		// name
		var name = article.name;
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		buf += '<span class="col namecol">' + name + '</span> ';

		// article
		if (isSearchType) {
			buf += '<span class="col movedesccol">(search type)</span> ';
		} else {
			buf += '<span class="col movedesccol">(article)</span> ';
		}

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		buf += '</a></li>';

		return buf;
	};
	Search.prototype.renderEggGroupRow = function (egggroup, matchStart, matchLength, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'egggroups/' + toID(egggroup.name) + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="egggroup|' + BattleLog.escapeHTML(egggroup.name) + '">';

		// name
		var name = egggroup.name;
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		buf += '<span class="col namecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		buf += '</a></li>';

		return buf;
	};
	Search.prototype.renderTierRow = function (tier, matchStart, matchLength, errorMessage) {
		var attrs = '';
		if (Search.urlRoot) attrs = ' href="' + Search.urlRoot + 'tiers/' + toID(tier.name) + '" data-target="push"';
		var buf = '<li class="result"><a' + attrs + ' data-entry="tier|' + BattleLog.escapeHTML(tier.name) + '">';

		// name
		var name = tier.name;
		if (matchLength) {
			name = name.substr(0, matchStart) + '<b>' + name.substr(matchStart, matchLength) + '</b>' + name.substr(matchStart + matchLength);
		}
		buf += '<span class="col namecol">' + name + '</span> ';

		// error
		if (errorMessage) {
			buf += errorMessage + '</a></li>';
			return buf;
		}

		buf += '</a></li>';

		return buf;
	};

	Search.gen = 9;
	Search.renderRow = Search.prototype.renderRow;
	Search.renderPokemonRow = Search.prototype.renderPokemonRow;
	Search.renderTaggedPokemonRowInner = Search.prototype.renderTaggedPokemonRowInner;
	Search.renderTaggedLocationRowInner = Search.prototype.renderTaggedLocationRowInner;
    Search.renderTaggedEncounterRow = Search.prototype.renderTaggedEncounterRow;
	Search.renderItemRow = Search.prototype.renderItemRow;
	Search.renderAbilityRow = Search.prototype.renderAbilityRow;
	Search.renderMoveRow = Search.prototype.renderMoveRow;
	Search.renderMoveRowInner = Search.prototype.renderMoveRowInner;
	Search.renderTaggedMoveRow = Search.prototype.renderTaggedMoveRow;
	Search.renderTypeRow = Search.prototype.renderTypeRow;
	Search.renderCategoryRow = Search.prototype.renderCategoryRow;
	Search.renderEggGroupRow = Search.prototype.renderEggGroupRow;
	Search.renderTierRow = Search.prototype.renderTierRow;

	exports.BattleSearch = Search;

})(window, jQuery);
