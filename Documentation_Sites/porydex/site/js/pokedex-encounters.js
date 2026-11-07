/* Porydex Encounters panels (Lucid-style, file:// friendly)
 * Provides:
 *  - PokedexEncountersMainPanel (list of locations + encounter table)
 *  - PokedexEncountersPanel     (detail panel; reused by router for /encounters/:location)
 *
 * Assumes globals exist: Panels, _, Dex, toID, BattleLocationdex, BattlePokedex, BattleSearch, BattleLocationIdMap (we build it), etc.
 */

var DASH_RE = /[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D]/g;

function __porydexDumpOrdering(tag, items, groups) {
    try {
        var orderList = (window.PorydexLocationOrder || []);
        var orderIndex = Object.create(null);

        function porydexNormOrderKey(s) {
            return String(s || '')
                .toLowerCase()
                .replace(DASH_RE, '-')
                .replace(/[.]/g, '')
                .replace(/[^a-z0-9]+/g, ' ')
                .trim()
                .replace(/\s+/g, ' ');
        }

        function porydexOrderKey(name) {
            var n = String(name || '').trim();

            // Keep individual Routes as singles
            if (/^Route\s+\d+/i.test(n)) return n.replace(/\s+/g, ' ');

            // Group all underwater-route entries under the base label used in location-order.js
            if (/^Underwater\s*[-\u2012\u2013\u2014\u2212]\s*Route\s+\d+/i.test(n)) return 'Underwater - Route';

            // Dash-sub-areas: order by base
            var parts = n.split(/\s*[-\u2012\u2013\u2014\u2212]\s*/);
            if (parts.length > 1 && parts[0]) return parts[0].trim();

            // Numbered variants: order by base
            var m = n.match(/^(.+?)\s+\d+$/);
            if (m) {
                var base = m[1].trim();
                if (/^Route$/i.test(base)) return n.replace(/\s+/g, ' ');
                return base;
            }

            return n;
        }

        // Build orderIndex locally
        for (var oi = 0; oi < orderList.length; oi++) {
            var kk = porydexNormOrderKey(porydexOrderKey(orderList[oi]));
            // first wins (keep canonical order)
            if (!(kk in orderIndex)) orderIndex[kk] = oi;
        }

        function rank(name) {
            var k = porydexNormOrderKey(porydexOrderKey(name));
            return (k in orderIndex) ? orderIndex[k] : 1e15;
        }

        console.group("PORYDEX ORDER DUMP:", tag);
        console.log("PorydexLocationOrder length =", orderList.length);
        console.log("items length =", items ? items.length : null, "groups length =", groups ? groups.length : null);

        // 1) Check items inversions
        if (items && items.length) {
            var inv = [];
            for (var i = 1; i < items.length; i++) {
                var a = items[i - 1], b = items[i];
                var ra = rank(a.name), rb = rank(b.name);
                if (rb < ra) {
                    inv.push({ i: i, prev: a.name, prevRank: ra, curr: b.name, currRank: rb });
                    if (inv.length >= 10) break;
                }
            }
            console.log("First rank inversions in items (should be empty):", inv);
            console.log("items [0..80] name->rank:", items.slice(0, 81).map(function (x) { return [x.name, rank(x.name)]; }));
        }

        // 2) Check groups inversions (flat)
        if (groups && groups.length) {
            var flat = [];
            for (var g = 0; g < groups.length; g++) {
                var gr = groups[g];
                if (gr.type === "single") flat.push({ kind: "SINGLE", label: gr.item.name, rank: rank(gr.item.name) });
                else flat.push({ kind: "GROUP", label: gr.base, rank: rank(gr.base), kids: gr.children.length });
            }

            var invg = [];
            for (var j = 1; j < flat.length; j++) {
                if (flat[j].rank < flat[j - 1].rank) {
                    invg.push({ j: j, prev: flat[j - 1], curr: flat[j] });
                    if (invg.length >= 10) break;
                }
            }
            console.log("First rank inversions in groups flat (should be empty):", invg);
            console.log("groups flat [0..80]:", flat.slice(0, 81));

            ["Granite Cave", "Meteor Falls", "Abandoned Ship"].forEach(function (t) {
                var pos = flat.findIndex(function (x) { return x.label === t; });
                console.log("flat index of", t, "=", pos, "rank", rank(t));
            });
        }

        // 3) DOM snapshot
        var dom = Array.prototype.slice
            .call(document.querySelectorAll(".enc-list-ul .enc-loc-summary, .enc-list-ul .enc-loc-link"), 0, 90)
            .map(function (x) { return x.textContent.trim(); });

        console.log("DOM first 90 (label->rank):", dom.map(function (t) { return [t, rank(t)]; }));

        console.groupEnd();
    } catch (e) {
        console.error("PORYDEX ORDER DUMP failed:", e);
    }
}



// Map from toID(location display name) -> key in BattleLocationdex
var BattleLocationIdMap = {};
if (typeof BattleLocationdex !== 'undefined') {
    for (var locKey in BattleLocationdex) {
        if (!BattleLocationdex.hasOwnProperty(locKey)) continue;
        if (locKey === 'rates') continue;
        var loc = BattleLocationdex[locKey] || {};
        var name = loc.name || locKey;
        var nameId = toID(name);
        if (!nameId) continue;
        // first wins; avoids weird duplicates
        if (!(nameId in BattleLocationIdMap)) BattleLocationIdMap[nameId] = locKey;
    }
}

function cleanLocationName(name) {
    name = String(name || '');
    // Drop time-of-day suffixes
    name = name.replace(/\s*-\s*(Morning|Day|Night|Evening|Dawn|Dusk)\s*$/i, '');
    // Strip the "Unused Ruby Sapphire Map X" noise
    name = name.replace(/\s*-\s*Unused\s+Ruby\s+Sapphire\s+Map\s*\d+\s*/ig, '');
    // Common cosmetic trims
    name = name.replace(/\s*-\s*Corridors?\b/ig, ''); // "Hidden Floor Corridors" -> "Hidden Floor"
    name = name.replace(/\s+/g, ' ').trim();
    // Normalize title casing lightly (keep existing case if already good)
    // Keep exact wording but fix "Of" casing often seen in generated names
    name = name.replace(/\bOf\b/g, 'of');
    return name;
}

// Hide the trailing " 0" (map index) when it is the only map for that base location.
// Example: "Littleroot Town 0" -> "Littleroot Town".
function stripTrailingZeroIfSingle(cleanName, baseCounts) {
    var m = String(cleanName || '').match(/^(.*)\s0$/);
    if (!m) return cleanName;
    var base = (m[1] || '').trim();
    if (!base) return cleanName;
    // Only strip when this base appears exactly once.
    if (baseCounts && baseCounts[base] === 1) return base;
    return cleanName;
}


// Internal links must work on file:// (no pushState). Hash links are safe everywhere.
function dexLink(path) {
    if (!path) return '#';
    if (path.charAt(0) === '/') path = path.slice(1);
    return '#' + path;
}

function getLocationKeyFromIdOrName(locationIdOrName) {
    var id = toID(locationIdOrName || '');
    if (!id) return null;
    if (typeof BattleLocationdex !== 'undefined' && BattleLocationdex[id]) return id; // already a key
    if (BattleLocationIdMap[id]) return BattleLocationIdMap[id];
    // fallback: try direct match on cleaned names
    if (typeof BattleLocationdex !== 'undefined') {
        for (var k in BattleLocationdex) {
            if (!BattleLocationdex.hasOwnProperty(k) || k === 'rates') continue;
            var loc = BattleLocationdex[k] || {};
            var nm = loc.name || k;
            if (toID(cleanLocationName(nm)) === id) return k;
        }
    }
    return null;
}

function escape(s) { return Dex && Dex.escapeHTML ? Dex.escapeHTML(String(s || '')) : _.escape(String(s || '')); }

function pokemonIconHTML(speciesId) {
    try {
        if (Dex && Dex.getPokemonIcon) {
            var sp = Dex.species && Dex.species.get ? Dex.species.get(speciesId) : null;
            var out = Dex.getPokemonIcon(sp || speciesId);

            // Some builds return a full <span ...>...</span>, others return only a CSS string like
            // "background:transparent url(...) ...". If it's CSS-only, wrap it.
            if (typeof out === 'string') {
                var s = out.trim();
                if (s && s.indexOf('<') === -1 && s.indexOf('background') !== -1) {
                    // Ensure it ends with a semicolon for CSS safety
                    if (s.slice(-1) !== ';') s += ';';
                    return '<span class="picon" style="' + escape(s) + '"></span>';
                }
            }
            return out || '';
        }
    } catch (e) {}
    return '';
}


function formatLevelRange(minLvl, maxLvl) {
    if (!minLvl && !maxLvl) return '';
    if (!maxLvl || minLvl === maxLvl) return 'L' + minLvl;
    return 'L' + minLvl + '–' + maxLvl;
}

function buildEncounterRows(locationKey) {
    var loc = BattleLocationdex && BattleLocationdex[locationKey];
    if (!loc) return [];

    var rows = [];
    function pushSection(label) { rows.push({ kind: 'section', label: label }); }
    function pushMon(rate, minLvl, maxLvl, species) {
        rows.push({ kind: 'mon', rate: rate, min: minLvl, max: maxLvl, species: species });
    }

    // --- helper: normalize containers that can be arrays or {encs:[...]} ---
    function normalizeEncArray(encContainer) {
        if (!encContainer) return null;
        if (Array.isArray(encContainer)) return encContainer;
        if (typeof encContainer === 'object' && Array.isArray(encContainer.encs)) return encContainer.encs;
        return null;
    }

    // --- fallback rates by table size (when not provided) ---
    function defaultRatesForLen(n) {
        // Standard encounter slot weights often used by projects
        if (n === 12) return [20, 20, 10, 10, 10, 10, 5, 5, 4, 4, 1, 1];
        if (n === 10) return [60, 20, 10, 5, 5, 0, 0, 0, 0, 0]; // rarely used; safe-ish
        if (n === 5)  return [60, 30, 5, 4, 1];
        if (n === 3)  return [60, 30, 10];
        return null;
    }

    function normalizeRateArrayForDisplay(arr) {
        if (!Array.isArray(arr) || !arr.length) return arr;

        var numeric = [];
        var hasNumeric = false;
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            var n = Number(arr[i]);
            if (!isFinite(n) || n < 0) {
                numeric.push(arr[i]);
                continue;
            }
            hasNumeric = true;
            numeric.push(n);
            total += n;
        }

        if (!hasNumeric || total <= 0 || Math.abs(total - 100) < 0.0001) return numeric;
        return numeric.map(function (n) {
            if (!isFinite(Number(n)) || Number(n) < 0) return n;
            return (Number(n) * 100) / total;
        });
    }

    // --- format rate as "NN%" ---
    function formatRate(v) {
        if (v == null || v === '') return '';
        // if already contains %, keep it
        if (typeof v === 'string' && v.indexOf('%') >= 0) return v;
        var n = Number(v);
        if (!isFinite(n)) return String(v) + '%';
        var rounded = Math.round(n * 10) / 10;
        return (Math.abs(rounded - Math.round(rounded)) < 0.0001 ? String(Math.round(rounded)) : rounded.toFixed(1)) + '%';
    }

    function parseRateNumber(v) {
        if (v == null || v === '') return null;
        if (typeof v === 'string') {
            var cleaned = v.replace('%', '').trim();
            if (!cleaned) return null;
            var parsedString = Number(cleaned);
            return isFinite(parsedString) ? parsedString : null;
        }
        var parsed = Number(v);
        return isFinite(parsed) ? parsed : null;
    }

    function sortEncounterEntries(entries) {
        entries.sort(function (a, b) {
            var ar = a.hasRate ? Number(a.rate) : NaN;
            var br = b.hasRate ? Number(b.rate) : NaN;
            var aNum = isFinite(ar);
            var bNum = isFinite(br);
            if (aNum && bNum && br !== ar) return br - ar;
            if (aNum && !bNum) return -1;
            if (!aNum && bNum) return 1;
            return String(a.species || '').localeCompare(String(b.species || ''));
        });
    }

    // --- select rates array for a section label ---
    function getRateArrayFor(label, encLen) {
        var ratesRoot = (BattleLocationdex && BattleLocationdex.rates) || (loc && loc.rates) || {};
        var arr = null;

        if (label === 'Land') {
            arr = ratesRoot.land || null;
        } else if (label === 'Surfing') {
            arr = ratesRoot.surf || null;
        } else if (label === 'Rock Smash') {
            // support both names
            arr = ratesRoot.rockSmash || ratesRoot.rocksmash || ratesRoot.rock || null;
        } else if (label === 'Old Rod') {
            // RHH 1.12 often uses rates.fish.old
            if (ratesRoot.oldRod) arr = ratesRoot.oldRod;
            else if (ratesRoot.fish && ratesRoot.fish.old) arr = ratesRoot.fish.old;
            else arr = null;
        }

        // If found but doesn't match length, ignore and fallback
        if (arr && encLen && arr.length !== encLen) arr = null;

        if (!arr) arr = defaultRatesForLen(encLen);
        arr = normalizeRateArrayForDisplay(arr);
        return arr;
    }

    // --- helper: add a section from a container ---
    function addFromArray(label, encContainer) {
        var encArr = normalizeEncArray(encContainer);
        if (!encArr || !encArr.length) return;

        var rateArr = getRateArrayFor(label, encArr.length);
        var order = [];
        var bySpecies = Object.create(null);

        for (var i = 0; i < encArr.length; i++) {
            var enc = encArr[i] || {};
            var sid = toID(enc.species || '');
            if (!sid) continue;

            if (!bySpecies[sid]) {
                bySpecies[sid] = {
                    species: enc.species,
                    rate: 0,
                    hasRate: false,
                    min: null,
                    max: null,
                };
                order.push(sid);
            }
            var aggregate = bySpecies[sid];

            var rawRate = '';
            if (rateArr && rateArr[i] != null && rateArr[i] !== 0) {
                rawRate = rateArr[i];
            } else if (enc.rate != null) {
                rawRate = enc.rate;
            }
            var numericRate = parseRateNumber(rawRate);
            if (numericRate != null) {
                aggregate.rate += numericRate;
                aggregate.hasRate = true;
            }

            var minLvl = enc.minLvl || enc.min || enc.level || enc.minLevel;
            var maxLvl = enc.maxLvl || enc.max || enc.maxLevel;
            if (minLvl != null && (aggregate.min == null || Number(minLvl) < Number(aggregate.min))) aggregate.min = minLvl;
            if (maxLvl != null && (aggregate.max == null || Number(maxLvl) > Number(aggregate.max))) aggregate.max = maxLvl;
            if (maxLvl == null && minLvl != null && aggregate.max == null) aggregate.max = minLvl;
        }

        var entries = [];
        for (var oi = 0; oi < order.length; oi++) {
            entries.push(bySpecies[order[oi]]);
        }
        sortEncounterEntries(entries);

        pushSection(label);
        for (var ei = 0; ei < entries.length; ei++) {
            var entry = entries[ei];
            var displayRate = entry.hasRate ? formatRate(entry.rate) : '';
            pushMon(displayRate, entry.min, entry.max, entry.species);
        }
    }

    // 1) Generic "encounters" list (compatibility)
    if (Array.isArray(loc.encounters)) {
        var byType = {};
        for (var i = 0; i < loc.encounters.length; i++) {
            var e = loc.encounters[i];
            if (!e) continue;
            var t = e.type || 'Land';
            if (!byType[t]) byType[t] = [];
            byType[t].push(e);
        }
        for (var t2 in byType) {
            var arr = byType[t2];
            var orderByType = [];
            var bySpeciesType = Object.create(null);
            for (var j = 0; j < arr.length; j++) {
                var e2 = arr[j];
                var sid2 = toID((e2 && e2.species) || '');
                if (!sid2) continue;

                if (!bySpeciesType[sid2]) {
                    bySpeciesType[sid2] = {
                        species: e2.species,
                        rate: 0,
                        hasRate: false,
                        min: null,
                        max: null,
                    };
                    orderByType.push(sid2);
                }

                var ent2 = bySpeciesType[sid2];
                var r2 = parseRateNumber(e2.rate);
                if (r2 != null) {
                    ent2.rate += r2;
                    ent2.hasRate = true;
                }
                if (e2.minLvl != null && (ent2.min == null || Number(e2.minLvl) < Number(ent2.min))) ent2.min = e2.minLvl;
                if (e2.maxLvl != null && (ent2.max == null || Number(e2.maxLvl) > Number(ent2.max))) ent2.max = e2.maxLvl;
                if (e2.maxLvl == null && e2.minLvl != null && ent2.max == null) ent2.max = e2.minLvl;
            }

            var typeEntries = [];
            for (var ok = 0; ok < orderByType.length; ok++) {
                typeEntries.push(bySpeciesType[orderByType[ok]]);
            }
            sortEncounterEntries(typeEntries);

            pushSection(t2);
            for (var te = 0; te < typeEntries.length; te++) {
                var ent = typeEntries[te];
                pushMon(ent.hasRate ? formatRate(ent.rate) : '', ent.min, ent.max, ent.species);
            }
        }
        return rows;
    }

    // 2) RHH 1.12 style
    addFromArray('Land', loc.land);
    addFromArray('Surfing', loc.surf);
    addFromArray('Rock Smash', loc.rockSmash || loc.rocksmash || loc.rock);

    // Fishing: ONLY Old Rod in your hack (loc.fish / legacy loc.fishing)
    addFromArray('Old Rod', loc.fish || loc.fishing);

    return rows;
}



function renderEncounterTable(rows) {
    if (!rows || !rows.length) return '<p class="enc-empty">No encounters defined for this location.</p>';

    var buf = '';
    var inTable = false;

    function openTable() {
        if (inTable) return;
        inTable = true;
        buf += '<table class="enc-table"><thead><tr>';
        buf += '<th class="enc-mon-col">Pokémon</th>';
        buf += '<th class="enc-rate-col">Rate</th>';
        buf += '</tr></thead><tbody>';
    }

    function closeTable() {
        if (!inTable) return;
        inTable = false;
        buf += '</tbody></table>';
    }

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];

        if (row.kind === 'section') {
            closeTable();
            buf += '<h3 class="enc-section-title">' + escape(row.label) + '</h3>';
            openTable();
            continue;
        }

        openTable();

        var sid = toID(row.species || '');
        if (!sid) continue;

        var sp = (Dex && Dex.species && Dex.species.get) ? Dex.species.get(sid) : null;
        var name = (sp && sp.name) ? sp.name : (row.species || sid);

        var icon = pokemonIconHTML(sid);
        var rateTxt = (row.rate != null && row.rate !== '')
            ? (String(row.rate).indexOf('%') >= 0 ? String(row.rate) : String(row.rate) + '%')
            : '';

        buf += '<tr>';
        buf += '<td class="enc-mon">';

        // IMPORTANT: push + hash link (file:// friendly)
        buf += '<a href="' + escape(dexLink('pokemon/' + sid)) + '" data-target="push" class="enc-mon-link">';
        if (icon) buf += icon + ' ';
        buf += '<span class="enc-mon-name">' + escape(name) + '</span>';
        buf += '</a>';

        buf += '</td>';
        buf += '<td class="enc-rate-col">' + escape(rateTxt) + '</td>';
        buf += '</tr>';
    }

    closeTable();
    return buf;
}


// -----------------------------
// Main panel (Lucid-style)
// -----------------------------
var PokedexEncountersMainPanel = Panels.Panel.extend({
    initialize: function () {
        var fragment = Backbone.history && Backbone.history.getFragment ? Backbone.history.getFragment() : '';
        var buf = '';
        buf += '<div class="pfx-body pfx-encounters"><form class="pokedex">';
        buf += '<h1><a href="/" data-target="replace">Pok\u00e9dex</a></h1>';
        buf += '<h4>Modified from <a href="https://dex.pokemonshowdown.com/">Pok\u00e9mon Showdown Dex</a> for Porydex</h4>';
        buf += '<ul class="tabbar centered" style="margin-bottom: 18px">';
        buf += '<li><button class="button nav-first" value="">Search</button></li>';
        buf += '<li><button class="button" value="pokemon/">Pok\u00e9mon</button></li>';
        buf += '<li><button class="button cur" value="encounters/">Encounters</button></li>';
        buf += '<li><button class="button nav-last" value="moves/">Moves</button></li>';
        buf += '</ul>';
        buf += '<div class="searchboxwrapper"><input class="textbox searchbox" type="search" name="q" autocomplete="off" autofocus placeholder="Search locations..." /></div>';
        buf += '</form>';

        buf += '<div class="enc-layout">';
        buf += '  <div class="enc-left">';
        buf += '    <div class="enc-list-title">Location</div>';
        buf += '    <div class="enc-list"><ul class="enc-list-ul"></ul></div>';
        buf += '  </div>';
        buf += '  <div class="enc-right">';
        buf += '    <div class="enc-header"><h2 class="enc-title">Select a location</h2></div>';
        buf += '    <div class="enc-content"></div>';
        buf += '  </div>';
        buf += '</div>';

        buf += '</div>';

        this.$el.html(buf);

        this.$searchbox = this.$('.searchbox');
        this.$list = this.$('.enc-list-ul');
        this.$title = this.$('.enc-title');
        this.$content = this.$('.enc-content');

        this.buildLocationList();
       
        var self = this;
        this.$searchbox.on('input', function () { self.filterLocationList(); });

        // If we are already at /encounters/:location, show it (hash routing can do this on load)
        var frag = fragment || '';
        if (frag.indexOf('encounters/') === 0) {
            var locId = frag.slice('encounters/'.length);
            if (locId) this.showLocation(locId);
        }
    },

    events: {
        'submit form.pokedex': 'submitSearch',
        'click .tabbar button': 'clickTab',
        'click .enc-list a': 'clickLocation',
    },

    submitSearch: function (e) {
        e.preventDefault();
        // no-op; we filter on input
    },

    clickTab: function (e) {
        e.preventDefault();
        var val = (e.currentTarget && e.currentTarget.value) || '';
        this.app.go(val, this, true);
    },


   buildLocationList: function () {
    var tmp = [];
    var baseCounts = Object.create(null);

    // helper (local): normalize RHH container
    function normalizeEncArray(encContainer) {
        if (!encContainer) return null;
        if (Array.isArray(encContainer)) return encContainer;
        if (typeof encContainer === 'object' && Array.isArray(encContainer.encs)) return encContainer.encs;
        return null;
    }

    // helper (local): does this location actually have any encounters?
    function hasAnyEncounters(loc) {
        if (!loc) return false;

        // generic shape
        if (Array.isArray(loc.encounters) && loc.encounters.length) return true;

        // RHH 1.12 shape
        var land = normalizeEncArray(loc.land);
        if (land && land.length) return true;

        var surf = normalizeEncArray(loc.surf);
        if (surf && surf.length) return true;

        var rock = normalizeEncArray(loc.rockSmash || loc.rocksmash || loc.rock);
        if (rock && rock.length) return true;

        var fish = normalizeEncArray(loc.fish || loc.fishing);
        if (fish && fish.length) return true;

        return false;
    }

    // 1) collect + baseCounts for stripping trailing " 0"
    for (var k in BattleLocationdex) {
        if (!BattleLocationdex.hasOwnProperty(k)) continue;
        if (k === 'rates') continue;

        var loc = BattleLocationdex[k] || {};
        var raw = loc.name || k;
        var clean = cleanLocationName(raw);

        // Ignore legacy / unused maps
        if (/unused/i.test(clean)) continue;

        // Count base names for trailing " <digits>" suffix
        var m = String(clean).match(/^(.*)\s(\d+)$/);
        if (m) {
            var base = (m[1] || '').trim();
            if (base) baseCounts[base] = (baseCounts[base] || 0) + 1;
        }

        tmp.push({
            key: k,
            raw: raw,
            clean: clean,
            hasEnc: hasAnyEncounters(loc)
        });
    }

    // 2) build items + dedupe by display name
    var byName = Object.create(null); // name -> item
    for (var i = 0; i < tmp.length; i++) {
        var t = tmp[i];

        var name = stripTrailingZeroIfSingle(t.clean, baseCounts);

        var item = { key: t.key, raw: t.raw, name: name, hasEnc: t.hasEnc };

        // Deduplicate: keep the one that actually has encounters.
        // If both have encounters (or both don't), keep the first one we saw.
        var prev = byName[name];
        if (!prev) {
            byName[name] = item;
        } else {
            if (!prev.hasEnc && item.hasEnc) byName[name] = item;
        }
    }

    // 3) finalize list
    var items = [];
    for (var n in byName) {
    if (!Object.prototype.hasOwnProperty.call(byName, n)) continue;
    items.push({ key: byName[n].key, raw: byName[n].raw, name: byName[n].name });
    }


    this._locationBaseCounts = baseCounts;

    // Porydex ordering (by top-level location-order.js) + stable fallback
var orderList = (typeof window !== 'undefined' && window.PorydexLocationOrder && window.PorydexLocationOrder.length)
    ? window.PorydexLocationOrder
    : (typeof window !== 'undefined' ? (window.porydexLocationOrder || []) : []);
if (!orderList || !orderList.length) {
    var self = this;
    if (!this._porydexOrderWaiting) {
        this._porydexOrderWaiting = true;
        ensurePorydexLocationOrder(function (ok) {
            self._porydexOrderWaiting = false;
            if (ok) self.buildLocationList(); // rebuild once the order list is available
        });
    }
}
var orderIndex = Object.create(null);

function porydexNormOrderKey(s) {
    return String(s || '')
        .toLowerCase()
        .replace(/[\u2010-\u2015\u2212\uFE58\uFE63\uFF0D]/g, '-')
        .replace(/[.]/g, '')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim()
        .replace(/\s+/g, ' ');
}

for (var oi = 0; oi < orderList.length; oi++) {
    var kk = porydexNormOrderKey(porydexOrderKey(orderList[oi]));
    if (!(kk in orderIndex)) orderIndex[kk] = oi;
}

function porydexOrderKey(name) {
    // Normalize all dash variants to '-' BEFORE any split / regex
    var n = String(name || '');
    n = n.replace(DASH_RE, '-').replace(/\s+/g, ' ').trim();

    // Routes: always order by the route number (ignore suffixes like "- Morning")
    var rm = n.match(/^Route\s+(\d+)/i);
    if (rm) return 'Route ' + rm[1];

    // Underwater routes: group under a single base label
    if (/^Underwater\s*-\s*Route\b/i.test(n)) return 'Underwater - Route';

    // Dash-sub-areas: order by base before the first dash
    var parts = n.split(/\s*-\s*/);
    if (parts.length > 1 && parts[0]) return parts[0].trim();

    // Trailing numeric variants: order by base (e.g. "Altering Cave 3" -> "Altering Cave")
    var m = n.match(/^(.+?)\s+\d+$/);
    if (m && m[1] && !/^Route$/i.test(m[1])) return m[1].trim();

    return n;
}

function porydexRank(name) {
    var k = porydexNormOrderKey(porydexOrderKey(name));
    return (k in orderIndex) ? orderIndex[k] : 1e15;
}

items.sort(function (a, b) {
    var ra = porydexRank(a.name);
    var rb = porydexRank(b.name);
    if (ra !== rb) return ra - rb;

    // stable-ish fallback: alphabetical by full name
    var an = porydexNormOrderKey(a.name);
    var bn = porydexNormOrderKey(b.name);
    if (an < bn) return -1;
    if (an > bn) return 1;
    return 0;
});

 __porydexDumpOrdering("AFTER items.sort (before renderLocationList)", items, null);

    this._allLocations = items;
    this.renderLocationList(items);
    },




    filterLocationList: function () {
        var q = toID(this.$searchbox.val() || '');
        if (!q) {
            this.renderLocationList(this._allLocations);
            return;
        }
        var out = [];
        for (var i = 0; i < this._allLocations.length; i++) {
            var it = this._allLocations[i];
            if (toID(it.name).indexOf(q) >= 0 || toID(it.raw).indexOf(q) >= 0) out.push(it);
        }
        this.renderLocationList(out);
    },

    renderLocationList: function (items) {
    // Marker to prove this function is the one rendering the list
    window.__PORYDEX_RENDER_PATCH_ACTIVE = true;

    if (!items || !items.length) {
        this.$list.html('');
        return;
    }

    

    function normalize(s) {
        return String(s || '')
            .replace(DASH_RE, '-')
            .replace(/\s+/g, ' ')
            .trim();
    }


    function baseKey(name) {
        var n = normalize(name);

        // Never group normal Routes
        if (/^Route\s+\d+/i.test(n)) return null;

        // Group underwater routes
        if (/^Underwater\s*-\s*Route\s+\d+/i.test(n)) return 'Underwater - Route';

        // Dash-sub-areas -> base before first dash
        var parts = n.split(/\s*-\s*/);
        if (parts.length > 1 && parts[0]) return parts[0].trim();

        // Trailing numeric variants -> base
        var m = n.match(/^(.+?)\s+\d+$/);
        if (m && m[1] && !/^Route$/i.test(m[1])) return m[1].trim();

        // Base location -> itself
        return n;
    }

    function link(it) {
        return '<a href="' + escape(dexLink('encounters/' + it.key)) + '" class="enc-loc-link">' +
            escape(it.name) + '</a>';
    }

    // Build base -> children (order-preserving)
    var byBase = Object.create(null);
    for (var i = 0; i < items.length; i++) {
        var it = items[i];
        var base = baseKey(it.name);
        var k = base ? base : ('__single__' + it.key);
        if (!byBase[k]) byBase[k] = [];
        byBase[k].push(it);
    }

    // Emit list: group is emitted at the FIRST occurrence in the already-sorted `items`
    var emitted = Object.create(null);
    var buf = '';

    for (var j = 0; j < items.length; j++) {
        var it2 = items[j];
        var base2 = baseKey(it2.name);
        var k2 = base2 ? base2 : ('__single__' + it2.key);

        if (emitted[k2]) continue;
        emitted[k2] = true;

        var children = byBase[k2] || [it2];

        if (!base2 || children.length === 1) {
            buf += '<li class="enc-loc-item">' + link(children[0]) + '</li>';
            continue;
        }

        buf += '<li class="enc-loc-group">';
        buf += '<details class="enc-loc-details">';
        buf += '<summary class="enc-loc-summary">' + escape(base2) + '</summary>';
        buf += '<ul class="enc-loc-sublist">';
        for (var c = 0; c < children.length; c++) {
            buf += '<li class="enc-loc-subitem">' + link(children[c]) + '</li>';
        }
        buf += '</ul></details></li>';
    }

    this.$list.html(buf);
},



    clickLocation: function (e) {
        e.preventDefault();
        var href = e.currentTarget && e.currentTarget.getAttribute('href');
        if (!href) return;
        // href is like "#encounters/<key>" (see renderLocationList)
        var frag = href.charAt(0) === '#' ? href.slice(1) : href;
        if (frag.indexOf('encounters/') === 0) {
            var key = frag.slice('encounters/'.length);
            // Update URL and render.
            if (window.Panels && Panels.app && typeof Panels.app.navigate === 'function') {
                Panels.app.navigate('encounters/' + key, {trigger: false, replace: false});
            }
            this.showLocation(key);
        }
    },

    showLocation: function (locationIdOrKey) {
        var key = getLocationKeyFromIdOrName(locationIdOrKey);
        if (!key) return;
        var loc = BattleLocationdex[key] || {};
        var title = cleanLocationName(loc.name || key);
        title = stripTrailingZeroIfSingle(title, this._locationBaseCounts);
        this.$title.text(title);

        var rows = buildEncounterRows(key);
        this.$content.html(renderEncounterTable(rows));
    }
});

// -----------------------------
// Detail panel (right-side panel)
// -----------------------------
// --- Porydex: ensure location-order.js is available ---
// Some builds load pokedex-encounters.js before location-order.js. To avoid "undefined" ordering,
// we lazily load location-order.js once and re-render when it becomes available.
function ensurePorydexLocationOrder(cb) {
	try {
		if (typeof window !== 'undefined' && window.PorydexLocationOrder && window.PorydexLocationOrder.length) {
			if (cb) cb(true);
			return;
		}
		if (typeof document === 'undefined') {
			if (cb) cb(false);
			return;
		}
		// Already loading?
		if (window.__porydexOrderLoading) {
			if (cb) window.__porydexOrderLoading.push(cb);
			return;
		}
		window.__porydexOrderLoading = cb ? [cb] : [];
		// If a script tag is already present, just wait a tick.
		var existing = document.querySelector('script[data-porydex-location-order]');
		if (existing) {
			setTimeout(function () {
				var ok = !!(window.PorydexLocationOrder && window.PorydexLocationOrder.length);
				var q = window.__porydexOrderLoading || [];
				window.__porydexOrderLoading = null;
				for (var i = 0; i < q.length; i++) try { q[i](ok); } catch (e) {}
			}, 0);
			return;
		}
		var s = document.createElement('script');
		s.setAttribute('data-porydex-location-order', '1');
		s.src = 'site/data/location-order.js';
		s.async = true;
		s.onload = function () {
			var ok = !!(window.PorydexLocationOrder && window.PorydexLocationOrder.length);
			var q = window.__porydexOrderLoading || [];
			window.__porydexOrderLoading = null;
			for (var i = 0; i < q.length; i++) try { q[i](ok); } catch (e) {}
		};
		s.onerror = function () {
			var q = window.__porydexOrderLoading || [];
			window.__porydexOrderLoading = null;
			for (var i = 0; i < q.length; i++) try { q[i](false); } catch (e) {}
		};
		(document.head || document.documentElement).appendChild(s);
	} catch (e) {
		if (cb) try { cb(false); } catch (e2) {}
	}
}

var PokedexEncountersPanel = PokedexResultPanel.extend({
    initialize: function (id) {
        this.id = id;
        this.locationKey = getLocationKeyFromIdOrName(id);
        this.render();
    },

    render: function () {
        var key = this.locationKey;
        var loc = (key && BattleLocationdex) ? BattleLocationdex[key] : null;
        var title = cleanLocationName((loc && (loc.name || key)) || this.id);

        var rows = key ? buildEncounterRows(key) : [];
        var html = '';
        html += '<div class="pfx-body pfx-encounters-detail">';
        html += '<a href="/encounters/" class="pfx-backbutton" data-target="back"><i class="fa fa-chevron-left"></i> Encounters</a>';
        html += '<h1>' + escape(title) + '</h1>';
        html += '<div class="enc-detail-content">' + renderEncounterTable(rows) + '</div>';
        html += '</div>';

        this.$el.html(html);
    }
});
