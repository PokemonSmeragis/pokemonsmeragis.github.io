window.BattleLocationdex = window.BattleLocationdex || {};
// La parte interna di Area Zero non ha Pokemon catturabili
delete window.BattleLocationdex.areazeroinside2morning;
// Nome mostrato al posto di quello ricavato dalla mappa (DewfordMEadowHouse)
if (window.BattleLocationdex.dewfordmeadowhouse0morning) {
    window.BattleLocationdex.dewfordmeadowhouse0morning.name = "Dewford Manor - B1F";
}
Object.assign(window.BattleLocationdex, {
    "slateportsewermorning": {
        "name": "Slateport Sewer - Morning",
        "land": {
            "baseRate": 10,
            "encs": [
                {"species": "zubat", "minLvl": 5, "maxLvl": 5},
                {"species": "noibat", "minLvl": 5, "maxLvl": 5},
                {"species": "rattata", "minLvl": 5, "maxLvl": 5},
                {"species": "rattataalola", "minLvl": 5, "maxLvl": 5},
                {"species": "wooperpaldea", "minLvl": 5, "maxLvl": 5},
                {"species": "wooperpaldea", "minLvl": 5, "maxLvl": 5},
                {"species": "ekans", "minLvl": 5, "maxLvl": 5},
                {"species": "ekans", "minLvl": 5, "maxLvl": 5},
                {"species": "venipede", "minLvl": 5, "maxLvl": 5},
                {"species": "venipede", "minLvl": 5, "maxLvl": 5},
                {"species": "venipede", "minLvl": 5, "maxLvl": 5},
                {"species": "venipede", "minLvl": 5, "maxLvl": 5}
            ]
        },
        "surf": {},
        "rock": {},
        "fish": {
            "baseRate": 100,
            "encs": [
                {"species": "skrelp", "minLvl": 20, "maxLvl": 25},
                {"species": "grimer", "minLvl": 20, "maxLvl": 25},
                {"species": "grimeralola", "minLvl": 20, "maxLvl": 25},
                {"species": "grimer", "minLvl": 20, "maxLvl": 25},
                {"species": "grimeralola", "minLvl": 20, "maxLvl": 25},
                {"species": "skrelp", "minLvl": 20, "maxLvl": 25},
                {"species": "qwilfishhisui", "minLvl": 20, "maxLvl": 25},
                {"species": "qwilfishhisui", "minLvl": 20, "maxLvl": 25},
                {"species": "mareanie", "minLvl": 20, "maxLvl": 25},
                {"species": "mareanie", "minLvl": 20, "maxLvl": 25}
            ]
        }
    }
});
