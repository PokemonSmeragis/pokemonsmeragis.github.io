(function() {
  // ---------- utilities ----------
  function log() { try { console.log.apply(console, ["[deeplink]"].concat([].slice.call(arguments))); } catch (_) {} }
  function $all(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function b64urlDecode(s) {
    if (!s) return "";
    s = s.replace(/-/g, "+").replace(/_/g, "/");
    while (s.length % 4) s += "=";
    try {
      return decodeURIComponent(Array.prototype.map.call(atob(s), function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(""));
    } catch (e) { log("b64urlDecode error:", e); return ""; }
  }

  function getParams() {
    var qs = window.location.search || "";
    if (!qs && window.location.hash && window.location.hash.indexOf("?") >= 0) {
      qs = window.location.hash.slice(window.location.hash.indexOf("?"));
    }
    return new URLSearchParams(qs);
  }

  // ---------- setdex helpers ----------
  function getSetdex() {
    var g = (typeof window !== "undefined") ? window : {};
    return g.SETDEX_SV || g.setdex_sv || g.SetdexSV || null;
  }

  function norm(s) {
    return (s || "").toLowerCase().replace(/\s+/g, " ").trim();
  }
  function stripGender(s) {
    // remove " (M)" or " (F)" and similar
    return (s || "").replace(/\s*\((M|F)\)\s*$/i, "").trim();
  }
  function speciesMatchKey(species, key) {
    var a = norm(stripGender(species));
    var b = norm(stripGender(key));
    return a === b || b.indexOf(a) >= 0 || a.indexOf(b) >= 0;
  }

  var STAT_ORDER = ["hp", "at", "df", "sa", "sd", "sp"];
  var STAT_LABEL = { hp: "HP", at: "Atk", df: "Def", sa: "SpA", sd: "SpD", sp: "Spe" };

  function lineEVs(evs) {
    if (!evs) return "";
    var parts = [];
    for (var i = 0; i < STAT_ORDER.length; i++) {
      var k = STAT_ORDER[i], v = evs[k] || 0;
      if (v) parts.push(v + " " + STAT_LABEL[k]);
    }
    return parts.length ? "EVs: " + parts.join(" / ") : "";
  }

  function lineIVs(ivs, ivsSpecified) {
    if (!ivs) return "";
    var parts = [];
    for (var i = 0; i < STAT_ORDER.length; i++) {
      var k = STAT_ORDER[i], v = (ivs[k] == null ? 31 : ivs[k]);
      if (ivsSpecified || v !== 31) parts.push(v + " " + STAT_LABEL[k]);
    }
    return parts.length ? "IVs: " + parts.join(" / ") : "";
  }

  function toShowdown(species, setObj) {
    var lines = [];
    var top = species;
    if (setObj.item) top += " @ " + setObj.item;
    lines.push(top);

    if (setObj.ability) lines.push("Ability: " + setObj.ability);
    if (setObj.level) lines.push("Level: " + setObj.level);
    if (setObj.nature) lines.push(setObj.nature + " Nature");

    var evs = lineEVs(setObj.evs);
    if (evs) lines.push(evs);

    var ivs = lineIVs(setObj.ivs, !!setObj.ivsSpecified);
    if (ivs) lines.push(ivs);

    lines.push("");

    var moves = Array.isArray(setObj.moves) ? setObj.moves : [];
    for (var i = 0; i < moves.length; i++) {
      var mv = moves[i];
      if (mv) lines.push("- " + mv);
    }
    lines.push("");

    return lines.join("\n");
  }

  function resolveByDex(species, setName) {
    var dex = getSetdex();
    if (!dex) { log("SETDEX not loaded"); return ""; }

    // 1) exact key
    var entry = dex[species];
    var speciesKey = species;

    // 2) case-insensitive exact, 3) gender-stripped exact, 4) fuzzy contains
    if (!entry) {
      var target = stripGender(species);
      var keys = Object.keys(dex);
      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (k.toLowerCase() === species.toLowerCase() || stripGender(k).toLowerCase() === target.toLowerCase() || speciesMatchKey(species, k)) {
          speciesKey = k;
          entry = dex[k];
          break;
        }
      }
    }
    if (!entry) { log("Species not in SETDEX:", species); return ""; }

    var setKey = setName || "";
    // some trainer_sheet links might have "Open Calculator" appended; strip it
    setKey = setKey.replace(/\s*Open\s+Calculator\s*$/i, "").replace(/\s+·\s*$/i, "").trim();

    if (!entry[setKey]) {
      var keys = Object.keys(entry);
      var low = setKey.toLowerCase();
      var exactCI = keys.find(function(k){ return k.toLowerCase() === low; });
      var containsCI = keys.find(function(k){ return k.toLowerCase().indexOf(low) >= 0; });
      setKey = exactCI || containsCI || keys[0];
    }

    var setObj = entry[setKey];
    if (!setObj) { log("Set not found for", speciesKey, "name:", setName); return ""; }
    return toShowdown(speciesKey, setObj);
  }

  // ---------- UI import ----------
  function findImportButtons() {
    return $all("button, summary").filter(function(el) {
      return /Import\s*\/\s*Export/i.test(el.textContent || "");
    });
  }

  function waitForButtons(maxMs, stepMs) {
    maxMs = maxMs || 6000;
    stepMs = stepMs || 120;
    return new Promise(function(resolve) {
      var t0 = performance.now();
      (function tick() {
        var btns = findImportButtons();
        if (btns && btns.length >= 2) return resolve(btns);
        if (performance.now() - t0 > maxMs) return resolve(btns || []);
        setTimeout(tick, stepMs);
      })();
    });
  }

  function importSet(side, text, btns) {
    if (!text) return;
    btns = btns || findImportButtons();
    if (!btns.length) { log("Import buttons missing"); return; }
    var idx = (side === "p2") ? (btns.length - 1) : 0;
    var btn = btns[idx] || btns[0];
    if (!btn) { log("Import button not found"); return; }

    btn.click();
    setTimeout(function() {
      // try within same column
      var col = btn.closest("section,div,fieldset,.poke,main,article") || document.body;
      var ta = col.querySelector("textarea");
      if (!ta) {
        // fallback: any visible textarea
        var all = $all("textarea").filter(function(x){ return x.offsetParent !== null; });
        ta = all[idx] || all[0] || null;
      }
      if (!ta) { log("Import textarea not found"); return; }

      ta.value = text;
      ta.dispatchEvent(new Event("input", { bubbles: true }));

      var importBtn = $all("button", document).find(function(b) {
        var t = (b.textContent || "").trim();
        return /^Import($| to (Left|Right) Team$)/i.test(t);
      });
      (importBtn || btn).click();
    }, 160);
  }

  function boot() {
    var sp = getParams();

    var p1raw = b64urlDecode(sp.get("p1"));
    var p2raw = b64urlDecode(sp.get("p2"));

    var p1s = sp.get("p1s"), p1set = sp.get("p1set");
    var p2s = sp.get("p2s"), p2set = sp.get("p2set");

    waitForButtons().then(function(btns){
      // build showdown texts
      var t1 = p1raw || (p1s ? resolveByDex(p1s, p1set) : "");
      var t2 = p2raw || (p2s ? resolveByDex(p2s, p2set) : "");

      if (!t1 && !t2) { log("No deep-link payload found"); return; }
      if (t2) importSet("p2", t2, btns);
      if (t1) importSet("p1", t1, btns);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();