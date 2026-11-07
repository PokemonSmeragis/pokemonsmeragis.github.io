// site/js/form-aliases.js
// Make Dex resolve compact-form IDs (e.g. "sawsbucksummer") to their proper formes.

(function () {
  function toID(text) {
    return ('' + (text || '')).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  if (!window.BattlePokedex) {
    console.warn('[form-aliases] BattlePokedex not found');
    return;
  }

  if (!window.BattleAliases) window.BattleAliases = {};
  var aliases = window.BattleAliases;

  // Build a map: compactId -> canonicalName (e.g. "sawsbucksummer" -> "Sawsbuck-Summer")
  var map = Object.create(null);

  for (var key in BattlePokedex) {
    if (!Object.prototype.hasOwnProperty.call(BattlePokedex, key)) continue;

    var sp = BattlePokedex[key];
    if (!sp || !sp.name) continue;

    // Canonical name as stored in your species.js (e.g. "Sawsbuck-Summer")
    var canonicalName = sp.name;

    // Compact ID derived from canonical name (e.g. toID("Sawsbuck-Summer") -> "sawsbucksummer")
    var compactId = toID(canonicalName);

    // Only useful if it’s actually a forme (name contains "-")
    if (canonicalName.indexOf('-') <= 0) continue;

    map[compactId] = canonicalName;

    aliases[compactId] = canonicalName;
  }

  function patchDexIfReady() {
    if (!(window.Dex && Dex.species && typeof Dex.species.get === 'function')) return false;

    var oldGet = Dex.species.get;
    if (oldGet._compactFormPatched) return true;

    var wrapped = function (name) {
      var id = toID(name);
      if (map[id]) return oldGet.call(this, map[id]);
      return oldGet.call(this, name);
    };
    wrapped._compactFormPatched = true;

    Dex.species.get = wrapped;

    console.debug('[form-aliases] Patched Dex.species.get with', Object.keys(map).length, 'form aliases');
    return true;
  }

  // Dex might not exist yet depending on load order: try now, else retry on load
  if (!patchDexIfReady()) {
    window.addEventListener('load', function () {
      patchDexIfReady();
    });
  }
})();
