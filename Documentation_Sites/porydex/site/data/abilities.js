exports.BattleAbilities = {
    "noability": {
        "isNonstandard": "Past",
        "flags": {},
        "name": "No Ability",
        "rating": 0.1,
        "num": 0,
        "desc": "Does nothing.",
        "shortDesc": "Does nothing."
    },
    "adaptability": {
        "flags": {},
        "name": "Adaptability",
        "rating": 4,
        "num": 91,
        "desc": "Boosts same type attacks.",
        "shortDesc": "Boosts same type attacks."
    },
    "aerilate": {
        "onModifyTypePriority": -1,
        "onBasePowerPriority": 23,
        "flags": {},
        "name": "Aerilate",
        "rating": 4,
        "num": 184,
        "desc": "Normal moves become Flying.",
        "shortDesc": "Normal moves become Flying."
    },
    "aftermath": {
        "onDamagingHitOrder": 1,
        "flags": {},
        "name": "Aftermath",
        "rating": 2,
        "num": 106,
        "desc": "Fainting damages the foe.",
        "shortDesc": "Fainting damages the foe."
    },
    "airlock": {
        "suppressWeather": true,
        "flags": {},
        "name": "Air Lock",
        "rating": 1.5,
        "num": 76,
        "desc": "Negates weather effects.",
        "shortDesc": "Negates weather effects."
    },
    "analytic": {
        "onBasePowerPriority": 21,
        "flags": {},
        "name": "Analytic",
        "rating": 2.5,
        "num": 148,
        "desc": "Moving last boosts power.",
        "shortDesc": "Moving last boosts power."
    },
    "angerpoint": {
        "flags": {},
        "name": "Anger Point",
        "rating": 1,
        "num": 83,
        "desc": "Critical hits raise Attack.",
        "shortDesc": "Critical hits raise Attack."
    },
    "angershell": {
        "flags": {},
        "name": "Anger Shell",
        "rating": 3,
        "num": 271,
        "desc": "Gets angry at half HP.",
        "shortDesc": "Gets angry at half HP."
    },
    "anticipation": {
        "flags": {},
        "name": "Anticipation",
        "rating": 0.5,
        "num": 107,
        "desc": "Senses dangerous moves.",
        "shortDesc": "Senses dangerous moves."
    },
    "arenatrap": {
        "flags": {},
        "name": "Arena Trap",
        "rating": 5,
        "num": 71,
        "desc": "Prevents fleeing.",
        "shortDesc": "Prevents fleeing."
    },
    "armortail": {
        "flags": {
            "breakable": 1
        },
        "name": "Armor Tail",
        "rating": 2.5,
        "num": 296,
        "desc": "Protects from priority.",
        "shortDesc": "Protects from priority."
    },
    "aromaveil": {
        "flags": {
            "breakable": 1
        },
        "name": "Aroma Veil",
        "rating": 2,
        "num": 165,
        "desc": "Prevents limiting of moves.",
        "shortDesc": "Prevents limiting of moves."
    },
    "asoneglastrier": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "As One (Glastrier)",
        "rating": 3.5,
        "num": 266,
        "desc": "Combination of the Unnerve and Chilling Neigh Abilities.",
        "shortDesc": "Combination of the Unnerve and Chilling Neigh Abilities."
    },
    "asonespectrier": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "As One (Spectrier)",
        "rating": 3.5,
        "num": 267,
        "desc": "Combination of the Unnerve and Grim Neigh Abilities.",
        "shortDesc": "Combination of the Unnerve and Grim Neigh Abilities."
    },
    "aurabreak": {
        "flags": {
            "breakable": 1
        },
        "name": "Aura Break",
        "rating": 1,
        "num": 188,
        "desc": "Reverse aura abilities.",
        "shortDesc": "Reverse aura abilities."
    },
    "baddreams": {
        "onResidualOrder": 28,
        "onResidualSubOrder": 2,
        "flags": {},
        "name": "Bad Dreams",
        "rating": 1.5,
        "num": 123,
        "desc": "Damages sleeping Pokémon.",
        "shortDesc": "Damages sleeping Pokémon."
    },
    "ballfetch": {
        "flags": {},
        "name": "Ball Fetch",
        "rating": 0,
        "num": 237,
        "desc": "Fetches failed Poké Ball.",
        "shortDesc": "Fetches failed Poké Ball."
    },
    "battery": {
        "onAllyBasePowerPriority": 22,
        "flags": {},
        "name": "Battery",
        "rating": 0,
        "num": 217,
        "desc": "Boosts ally's Sp. Atk.",
        "shortDesc": "Boosts ally's Sp. Atk."
    },
    "battlearmor": {
        "onCriticalHit": false,
        "flags": {
            "breakable": 1
        },
        "name": "Battle Armor",
        "rating": 1,
        "num": 4,
        "desc": "Blocks critical hits.",
        "shortDesc": "Blocks critical hits."
    },
    "battlebond": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Battle Bond",
        "rating": 3.5,
        "num": 210,
        "desc": "Changes form after a KO.",
        "shortDesc": "Changes form after a KO."
    },
    "beadsofruin": {
        "flags": {},
        "name": "Beads of Ruin",
        "rating": 4.5,
        "num": 284,
        "desc": "Lowers foes' Sp. Defense.",
        "shortDesc": "Lowers foes' Sp. Defense."
    },
    "beastboost": {
        "flags": {},
        "name": "Beast Boost",
        "rating": 3.5,
        "num": 224,
        "desc": "KOs boost best stat.",
        "shortDesc": "KOs boost best stat."
    },
    "berserk": {
        "flags": {},
        "name": "Berserk",
        "rating": 2,
        "num": 201,
        "desc": "Boosts Sp. Atk at low HP.",
        "shortDesc": "Boosts Sp. Atk at low HP."
    },
    "bigpecks": {
        "flags": {
            "breakable": 1
        },
        "name": "Big Pecks",
        "rating": 0.5,
        "num": 145,
        "desc": "Prevents Defense loss.",
        "shortDesc": "Prevents Defense loss."
    },
    "blaze": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Blaze",
        "rating": 2,
        "num": 66,
        "desc": "Ups Fire moves in a pinch.",
        "shortDesc": "Ups Fire moves in a pinch."
    },
    "bulletproof": {
        "flags": {
            "breakable": 1
        },
        "name": "Bulletproof",
        "rating": 3,
        "num": 171,
        "desc": "Avoids some projectiles.",
        "shortDesc": "Avoids some projectiles."
    },
    "cheekpouch": {
        "flags": {},
        "name": "Cheek Pouch",
        "rating": 2,
        "num": 167,
        "desc": "Eating Berries restores HP.",
        "shortDesc": "Eating Berries restores HP."
    },
    "chillingneigh": {
        "flags": {},
        "name": "Chilling Neigh",
        "rating": 3,
        "num": 264,
        "desc": "KOs boost Attack stat.",
        "shortDesc": "KOs boost Attack stat."
    },
    "chlorophyll": {
        "flags": {},
        "name": "Chlorophyll",
        "rating": 3,
        "num": 34,
        "desc": "Raises Speed in sunshine.",
        "shortDesc": "Raises Speed in sunshine."
    },
    "clearbody": {
        "flags": {
            "breakable": 1
        },
        "name": "Clear Body",
        "rating": 2,
        "num": 29,
        "desc": "Prevents ability reduction.",
        "shortDesc": "Prevents ability reduction."
    },
    "cloudnine": {
        "suppressWeather": true,
        "flags": {},
        "name": "Cloud Nine",
        "rating": 1.5,
        "num": 13,
        "desc": "Negates weather effects.",
        "shortDesc": "Negates weather effects."
    },
    "colorchange": {
        "flags": {},
        "name": "Color Change",
        "rating": 0,
        "num": 16,
        "desc": "Changes type to foe's move.",
        "shortDesc": "Changes type to foe's move."
    },
    "comatose": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Comatose",
        "rating": 4,
        "num": 213,
        "desc": "Always drowsing.",
        "shortDesc": "Always drowsing."
    },
    "commander": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1
        },
        "name": "Commander",
        "rating": 0,
        "num": 279,
        "desc": "Commands from Dondozo.",
        "shortDesc": "Commands from Dondozo."
    },
    "competitive": {
        "flags": {},
        "name": "Competitive",
        "rating": 2.5,
        "num": 172,
        "desc": "Lowered stats up Sp. Atk.",
        "shortDesc": "Lowered stats up Sp. Atk."
    },
    "compoundeyes": {
        "onSourceModifyAccuracyPriority": -1,
        "flags": {},
        "name": "Compound Eyes",
        "rating": 3,
        "num": 14,
        "desc": "Raises accuracy.",
        "shortDesc": "Raises accuracy."
    },
    "contrary": {
        "flags": {
            "breakable": 1
        },
        "name": "Contrary",
        "rating": 4.5,
        "num": 126,
        "desc": "Inverts stat changes.",
        "shortDesc": "Inverts stat changes."
    },
    "corrosion": {
        "flags": {},
        "name": "Corrosion",
        "rating": 2.5,
        "num": 212,
        "desc": "Can poison and hit Steel.",
        "shortDesc": "Can poison and hit Steel."
    },
    "costar": {
        "flags": {},
        "name": "Costar",
        "rating": 0,
        "num": 294,
        "desc": "Copies ally's stat changes.",
        "shortDesc": "Copies ally's stat changes."
    },
    "cottondown": {
        "flags": {},
        "name": "Cotton Down",
        "rating": 2,
        "num": 238,
        "desc": "Lower Speed of all when hit.",
        "shortDesc": "Lower Speed of all when hit."
    },
    "cudchew": {
        "condition": {
            "noCopy": true,
            "duration": 2,
            "onResidualOrder": 28,
            "onResidualSubOrder": 2
        },
        "flags": {},
        "name": "Cud Chew",
        "rating": 2,
        "num": 291,
        "desc": "Eats a used berry again.",
        "shortDesc": "Eats a used berry again."
    },
    "curiousmedicine": {
        "flags": {},
        "name": "Curious Medicine",
        "rating": 0,
        "num": 261,
        "desc": "Remove ally's stat changes.",
        "shortDesc": "Remove ally's stat changes."
    },
    "cursedbody": {
        "flags": {},
        "name": "Cursed Body",
        "rating": 2,
        "num": 130,
        "desc": "Disables moves on contact.",
        "shortDesc": "Disables moves on contact."
    },
    "cutecharm": {
        "flags": {},
        "name": "Cute Charm",
        "rating": 0.5,
        "num": 56,
        "desc": "Contact charms; kisses hit.",
        "shortDesc": "Contact charms; kisses hit."
    },
    "damp": {
        "flags": {
            "breakable": 1
        },
        "name": "Damp",
        "rating": 0.5,
        "num": 6,
        "desc": "No explosions; weakens Fire.",
        "shortDesc": "No explosions; weakens Fire."
    },
    "dancer": {
        "flags": {},
        "name": "Dancer",
        "rating": 1.5,
        "num": 216,
        "desc": "Dances along with others.",
        "shortDesc": "Dances along with others."
    },
    "darkaura": {
        "onAnyBasePowerPriority": 20,
        "flags": {},
        "name": "Dark Aura",
        "rating": 3,
        "num": 186,
        "desc": "Boosts Dark moves.",
        "shortDesc": "Boosts Dark moves."
    },
    "dauntlessshield": {
        "flags": {},
        "name": "Dauntless Shield",
        "rating": 3.5,
        "num": 235,
        "desc": "Ups Defense on entry.",
        "shortDesc": "Ups Defense on entry."
    },
    "dazzling": {
        "flags": {
            "breakable": 1
        },
        "name": "Dazzling",
        "rating": 2.5,
        "num": 219,
        "desc": "Protects from priority.",
        "shortDesc": "Protects from priority."
    },
    "defeatist": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Defeatist",
        "rating": -1,
        "num": 129,
        "desc": "Gives up at half HP.",
        "shortDesc": "Gives up at half HP."
    },
    "defiant": {
        "flags": {},
        "name": "Defiant",
        "rating": 3,
        "num": 128,
        "desc": "Lowered stats up Attack.",
        "shortDesc": "Lowered stats up Attack."
    },
    "deltastream": {
        "flags": {},
        "name": "Delta Stream",
        "rating": 4,
        "num": 191,
        "desc": "Summons strong winds.",
        "shortDesc": "Summons strong winds."
    },
    "desolateland": {
        "flags": {},
        "name": "Desolate Land",
        "rating": 4.5,
        "num": 190,
        "desc": "Summons intense sunlight.",
        "shortDesc": "Summons intense sunlight."
    },
    "disguise": {
        "onDamagePriority": 1,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1,
            "breakable": 1,
            "notransform": 1
        },
        "name": "Disguise",
        "rating": 3.5,
        "num": 209,
        "desc": "Decoy protects it once.",
        "shortDesc": "Decoy protects it once."
    },
    "download": {
        "flags": {},
        "name": "Download",
        "rating": 3.5,
        "num": 88,
        "desc": "Adjusts power favorably.",
        "shortDesc": "Adjusts power favorably."
    },
    "dragonsmaw": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Dragon's Maw",
        "rating": 3.5,
        "num": 263,
        "desc": "Ups Dragon-type moves.",
        "shortDesc": "Ups Dragon-type moves."
    },
    "drizzle": {
        "flags": {},
        "name": "Drizzle",
        "rating": 4,
        "num": 2,
        "desc": "Summons rain in battle.",
        "shortDesc": "Summons rain in battle."
    },
    "drought": {
        "flags": {},
        "name": "Drought",
        "rating": 4,
        "num": 70,
        "desc": "Summons sunlight in battle.",
        "shortDesc": "Summons sunlight in battle."
    },
    "dryskin": {
        "onSourceBasePowerPriority": 17,
        "flags": {
            "breakable": 1
        },
        "name": "Dry Skin",
        "rating": 3,
        "num": 87,
        "desc": "Prefers moisture to heat.",
        "shortDesc": "Prefers moisture to heat."
    },
    "earlybird": {
        "flags": {},
        "name": "Early Bird",
        "rating": 1.5,
        "num": 48,
        "desc": "Awakens quickly from sleep.",
        "shortDesc": "Awakens quickly from sleep."
    },
    "eartheater": {
        "flags": {
            "breakable": 1
        },
        "name": "Earth Eater",
        "rating": 3.5,
        "num": 297,
        "desc": "Eats ground to heal HP.",
        "shortDesc": "Eats ground to heal HP."
    },
    "effectspore": {
        "flags": {},
        "name": "Effect Spore",
        "rating": 2,
        "num": 27,
        "desc": "Leaves spores on contact.",
        "shortDesc": "Leaves spores on contact."
    },
    "electricsurge": {
        "flags": {},
        "name": "Electric Surge",
        "rating": 4,
        "num": 226,
        "desc": "Field becomes Electric.",
        "shortDesc": "Field becomes Electric."
    },
    "electromorphosis": {
        "onDamagingHitOrder": 1,
        "flags": {},
        "name": "Electromorphosis",
        "rating": 3,
        "num": 280,
        "desc": "Gets Charged when hit.",
        "shortDesc": "Gets Charged when hit."
    },
    "embodyaspectcornerstone": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Embody Aspect (Cornerstone)",
        "rating": 3.5,
        "num": 304,
        "desc": "On switch-in, this Pokemon's Defense is raised by 1 stage.",
        "shortDesc": "On switch-in, this Pokemon's Defense is raised by 1 stage."
    },
    "embodyaspecthearthflame": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Embody Aspect (Hearthflame)",
        "rating": 3.5,
        "num": 303,
        "desc": "On switch-in, this Pokemon's Attack is raised by 1 stage.",
        "shortDesc": "On switch-in, this Pokemon's Attack is raised by 1 stage."
    },
    "embodyaspectteal": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Embody Aspect (Teal)",
        "rating": 3.5,
        "num": 301,
        "desc": "On switch-in, this Pokemon's Speed is raised by 1 stage.",
        "shortDesc": "On switch-in, this Pokemon's Speed is raised by 1 stage."
    },
    "embodyaspectwellspring": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Embody Aspect (Wellspring)",
        "rating": 3.5,
        "num": 302,
        "desc": "On switch-in, this Pokemon's Special Defense is raised by 1 stage.",
        "shortDesc": "On switch-in, this Pokemon's Special Defense is raised by 1 stage."
    },
    "emergencyexit": {
        "flags": {},
        "name": "Emergency Exit",
        "rating": 1,
        "num": 194,
        "desc": "Flees at half HP.",
        "shortDesc": "Flees at half HP."
    },
    "fairyaura": {
        "onAnyBasePowerPriority": 20,
        "flags": {},
        "name": "Fairy Aura",
        "rating": 3,
        "num": 187,
        "desc": "Boosts Fairy moves.",
        "shortDesc": "Boosts Fairy moves."
    },
    "filter": {
        "flags": {
            "breakable": 1
        },
        "name": "Filter",
        "rating": 3,
        "num": 111,
        "desc": "Weakens “supereffective”.",
        "shortDesc": "Weakens “supereffective”."
    },
    "flamebody": {
        "flags": {},
        "name": "Flame Body",
        "rating": 2,
        "num": 49,
        "desc": "Burns the foe on contact.",
        "shortDesc": "Burns the foe on contact."
    },
    "flareboost": {
        "onBasePowerPriority": 19,
        "flags": {},
        "name": "Flare Boost",
        "rating": 2,
        "num": 138,
        "desc": "Ups Sp. Atk if burned.",
        "shortDesc": "Ups Sp. Atk if burned."
    },
    "flashfire": {
        "condition": {
            "noCopy": true,
            "onModifyAtkPriority": 5,
            "onModifySpAPriority": 5
        },
        "flags": {
            "breakable": 1
        },
        "name": "Flash Fire",
        "rating": 3.5,
        "num": 18,
        "desc": "Powers up if hit by fire.",
        "shortDesc": "Powers up if hit by fire."
    },
    "flowergift": {
        "onAllyModifyAtkPriority": 3,
        "onAllyModifySpDPriority": 4,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "breakable": 1
        },
        "name": "Flower Gift",
        "rating": 1,
        "num": 122,
        "desc": "Sun powers allies and Speed.",
        "shortDesc": "Sun powers allies and Speed."
    },
    "flowerveil": {
        "flags": {
            "breakable": 1
        },
        "name": "Flower Veil",
        "rating": 0,
        "num": 166,
        "desc": "Protects Grass-types.",
        "shortDesc": "Protects Grass-types."
    },
    "fluffy": {
        "flags": {
            "breakable": 1
        },
        "name": "Fluffy",
        "rating": 3.5,
        "num": 218,
        "desc": "Tougher but flammable.",
        "shortDesc": "Tougher but flammable."
    },
    "forecast": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1
        },
        "name": "Forecast",
        "rating": 2,
        "num": 59,
        "desc": "Changes with the weather.",
        "shortDesc": "Changes with the weather."
    },
    "forewarn": {
        "flags": {},
        "name": "Forewarn",
        "rating": 0.5,
        "num": 108,
        "desc": "Determines a foe's move.",
        "shortDesc": "Determines a foe's move."
    },
    "friendguard": {
        "flags": {
            "breakable": 1
        },
        "name": "Friend Guard",
        "rating": 0,
        "num": 132,
        "desc": "Lowers damage to partner.",
        "shortDesc": "Lowers damage to partner."
    },
    "frisk": {
        "flags": {},
        "name": "Frisk",
        "rating": 1.5,
        "num": 119,
        "desc": "Checks a foe's item.",
        "shortDesc": "Checks a foe's item."
    },
    "fullmetalbody": {
        "flags": {},
        "name": "Full Metal Body",
        "rating": 2,
        "num": 230,
        "desc": "Prevents stat reduction.",
        "shortDesc": "Prevents stat reduction."
    },
    "furcoat": {
        "onModifyDefPriority": 6,
        "flags": {
            "breakable": 1
        },
        "name": "Fur Coat",
        "rating": 4,
        "num": 169,
        "desc": "Raises Defense.",
        "shortDesc": "Raises Defense."
    },
    "galewings": {
        "flags": {},
        "name": "Gale Wings",
        "rating": 1.5,
        "num": 177,
        "desc": "Flying moves go first.",
        "shortDesc": "Flying moves go first."
    },
    "galvanize": {
        "onModifyTypePriority": -1,
        "onBasePowerPriority": 23,
        "flags": {},
        "name": "Galvanize",
        "rating": 4,
        "num": 206,
        "desc": "Normal moves turn Electric.",
        "shortDesc": "Normal moves turn Electric."
    },
    "gluttony": {
        "flags": {},
        "name": "Gluttony",
        "rating": 1.5,
        "num": 82,
        "desc": "Eats Berries early.",
        "shortDesc": "Eats Berries early."
    },
    "goodasgold": {
        "flags": {
            "breakable": 1
        },
        "name": "Good as Gold",
        "rating": 5,
        "num": 283,
        "desc": "Avoids status moves.",
        "shortDesc": "Avoids status moves."
    },
    "gooey": {
        "flags": {},
        "name": "Gooey",
        "rating": 2,
        "num": 183,
        "desc": "Lowers Speed on contact.",
        "shortDesc": "Lowers Speed on contact."
    },
    "gorillatactics": {
        "onModifyAtkPriority": 1,
        "flags": {},
        "name": "Gorilla Tactics",
        "rating": 4.5,
        "num": 255,
        "desc": "Ups Attack and locks move.",
        "shortDesc": "Ups Attack and locks move."
    },
    "grasspelt": {
        "onModifyDefPriority": 6,
        "flags": {
            "breakable": 1
        },
        "name": "Grass Pelt",
        "rating": 0.5,
        "num": 179,
        "desc": "Grassy Terrain ups Defense.",
        "shortDesc": "Grassy Terrain ups Defense."
    },
    "grassysurge": {
        "flags": {},
        "name": "Grassy Surge",
        "rating": 4,
        "num": 229,
        "desc": "Field becomes grassy.",
        "shortDesc": "Field becomes grassy."
    },
    "grimneigh": {
        "flags": {},
        "name": "Grim Neigh",
        "rating": 3,
        "num": 265,
        "desc": "KOs boost Sp. Atk stat.",
        "shortDesc": "KOs boost Sp. Atk stat."
    },
    "guarddog": {
        "onDragOutPriority": 1,
        "flags": {
            "breakable": 1
        },
        "name": "Guard Dog",
        "rating": 2,
        "num": 275,
        "desc": "Cannot be intimidated.",
        "shortDesc": "Cannot be intimidated."
    },
    "gulpmissile": {
        "flags": {
            "cantsuppress": 1,
            "notransform": 1
        },
        "name": "Gulp Missile",
        "rating": 2.5,
        "num": 241,
        "desc": "If hit, spits prey from sea.",
        "shortDesc": "If hit, spits prey from sea."
    },
    "guts": {
        "onModifyAtkPriority": 5,
        "flags": {},
        "name": "Guts",
        "rating": 3.5,
        "num": 62,
        "desc": "Ups Attack if suffering.",
        "shortDesc": "Ups Attack if suffering."
    },
    "hadronengine": {
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Hadron Engine",
        "rating": 4.5,
        "num": 289,
        "desc": "Field becomes Electric.",
        "shortDesc": "Field becomes Electric."
    },
    "harvest": {
        "onResidualOrder": 28,
        "onResidualSubOrder": 2,
        "flags": {},
        "name": "Harvest",
        "rating": 2.5,
        "num": 139,
        "desc": "May recycle a used Berry.",
        "shortDesc": "May recycle a used Berry."
    },
    "healer": {
        "onResidualOrder": 5,
        "onResidualSubOrder": 3,
        "flags": {},
        "name": "Healer",
        "rating": 0,
        "num": 131,
        "desc": "Heals partner Pokémon.",
        "shortDesc": "Heals partner Pokémon."
    },
    "heatproof": {
        "onSourceModifyAtkPriority": 6,
        "onSourceModifySpAPriority": 5,
        "flags": {
            "breakable": 1
        },
        "name": "Heatproof",
        "rating": 2,
        "num": 85,
        "desc": "Heat and burn protection.",
        "shortDesc": "Heat and burn protection."
    },
    "heavymetal": {
        "onModifyWeightPriority": 1,
        "flags": {
            "breakable": 1
        },
        "name": "Heavy Metal",
        "rating": 0,
        "num": 134,
        "desc": "Doubles weight.",
        "shortDesc": "Doubles weight."
    },
    "honeygather": {
        "flags": {},
        "name": "Honey Gather",
        "rating": 0,
        "num": 118,
        "desc": "May gather Honey.",
        "shortDesc": "May gather Honey."
    },
    "hospitality": {
        "flags": {},
        "name": "Hospitality",
        "rating": 0,
        "num": 299,
        "desc": "Restores ally's HP.",
        "shortDesc": "Restores ally's HP."
    },
    "hugepower": {
        "onModifyAtkPriority": 5,
        "flags": {},
        "name": "Huge Power",
        "rating": 5,
        "num": 37,
        "desc": "Raises Attack.",
        "shortDesc": "Raises Attack."
    },
    "hungerswitch": {
        "onResidualOrder": 29,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Hunger Switch",
        "rating": 1,
        "num": 258,
        "desc": "Changes form each turn.",
        "shortDesc": "Changes form each turn."
    },
    "hustle": {
        "onModifyAtkPriority": 5,
        "onSourceModifyAccuracyPriority": -1,
        "flags": {},
        "name": "Hustle",
        "rating": 3.5,
        "num": 55,
        "desc": "Trades accuracy for power.",
        "shortDesc": "Trades accuracy for power."
    },
    "hydration": {
        "onResidualOrder": 5,
        "onResidualSubOrder": 3,
        "flags": {},
        "name": "Hydration",
        "rating": 1.5,
        "num": 93,
        "desc": "Cures status in rain.",
        "shortDesc": "Cures status in rain."
    },
    "hypercutter": {
        "flags": {
            "breakable": 1
        },
        "name": "Hyper Cutter",
        "rating": 1.5,
        "num": 52,
        "desc": "Prevents Attack reduction.",
        "shortDesc": "Prevents Attack reduction."
    },
    "icebody": {
        "flags": {},
        "name": "Ice Body",
        "rating": 1,
        "num": 115,
        "desc": "HP recovery in Hail or Snow.",
        "shortDesc": "HP recovery in Hail or Snow."
    },
    "iceface": {
        "onDamagePriority": 1,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1,
            "breakable": 1,
            "notransform": 1
        },
        "name": "Ice Face",
        "rating": 3,
        "num": 248,
        "desc": "Hail or Snow renew free hit.",
        "shortDesc": "Hail or Snow renew free hit."
    },
    "icescales": {
        "flags": {
            "breakable": 1
        },
        "name": "Ice Scales",
        "rating": 4,
        "num": 246,
        "desc": "Halves special damage.",
        "shortDesc": "Halves special damage."
    },
    "illuminate": {
        "flags": {
            "breakable": 1
        },
        "name": "Illuminate",
        "rating": 0.5,
        "num": 35,
        "desc": "Non-Electric foes lose acc.",
        "shortDesc": "Non-Electric foes lose acc."
    },
    "illusion": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1
        },
        "name": "Illusion",
        "rating": 4.5,
        "num": 149,
        "desc": "Appears as a partner.",
        "shortDesc": "Appears as a partner."
    },
    "immunity": {
        "flags": {
            "breakable": 1
        },
        "name": "Immunity",
        "rating": 2,
        "num": 17,
        "desc": "Prevents poisoning.",
        "shortDesc": "Prevents poisoning."
    },
    "imposter": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1
        },
        "name": "Imposter",
        "rating": 5,
        "num": 150,
        "desc": "Transforms into the foe.",
        "shortDesc": "Transforms into the foe."
    },
    "infiltrator": {
        "flags": {},
        "name": "Infiltrator",
        "rating": 2.5,
        "num": 151,
        "desc": "Passes through barriers.",
        "shortDesc": "Passes through barriers."
    },
    "innardsout": {
        "onDamagingHitOrder": 1,
        "flags": {},
        "name": "Innards Out",
        "rating": 4,
        "num": 215,
        "desc": "Hurts foe when defeated.",
        "shortDesc": "Hurts foe when defeated."
    },
    "innerfocus": {
        "flags": {
            "breakable": 1
        },
        "name": "Inner Focus",
        "rating": 1,
        "num": 39,
        "desc": "Prevents flinching.",
        "shortDesc": "Prevents flinching."
    },
    "insomnia": {
        "flags": {
            "breakable": 1
        },
        "name": "Insomnia",
        "rating": 1.5,
        "num": 15,
        "desc": "Prevents sleep.",
        "shortDesc": "Prevents sleep."
    },
    "intimidate": {
        "flags": {},
        "name": "Intimidate",
        "rating": 3.5,
        "num": 22,
        "desc": "Lowers the foe's Attack.",
        "shortDesc": "Lowers the foe's Attack."
    },
    "intrepidsword": {
        "flags": {},
        "name": "Intrepid Sword",
        "rating": 4,
        "num": 234,
        "desc": "Ups Attack on entry.",
        "shortDesc": "Ups Attack on entry."
    },
    "ironbarbs": {
        "onDamagingHitOrder": 1,
        "flags": {},
        "name": "Iron Barbs",
        "rating": 2.5,
        "num": 160,
        "desc": "Hurts to touch.",
        "shortDesc": "Hurts to touch."
    },
    "ironfist": {
        "onBasePowerPriority": 23,
        "flags": {},
        "name": "Iron Fist",
        "rating": 3,
        "num": 89,
        "desc": "Boosts punching moves.",
        "shortDesc": "Boosts punching moves."
    },
    "justified": {
        "flags": {},
        "name": "Justified",
        "rating": 2.5,
        "num": 154,
        "desc": "Dark hits raise Attack.",
        "shortDesc": "Dark hits raise Attack."
    },
    "keeneye": {
        "flags": {
            "breakable": 1
        },
        "name": "Keen Eye",
        "rating": 0.5,
        "num": 51,
        "desc": "Prevents loss of accuracy.",
        "shortDesc": "Prevents loss of accuracy."
    },
    "klutz": {
        "flags": {},
        "name": "Klutz",
        "rating": -1,
        "num": 103,
        "desc": "Can't use hold items.",
        "shortDesc": "Can't use hold items."
    },
    "leafguard": {
        "flags": {
            "breakable": 1
        },
        "name": "Leaf Guard",
        "rating": 0.5,
        "num": 102,
        "desc": "No status in sun. Ups Grass.",
        "shortDesc": "No status in sun. Ups Grass."
    },
    "levitate": {
        "flags": {
            "breakable": 1
        },
        "name": "Levitate",
        "rating": 3.5,
        "num": 26,
        "desc": "Not hit by Ground attacks.",
        "shortDesc": "Not hit by Ground attacks."
    },
    "libero": {
        "flags": {},
        "name": "Libero",
        "rating": 4,
        "num": 236,
        "desc": "Changes type to move's.",
        "shortDesc": "Changes type to move's."
    },
    "lightmetal": {
        "flags": {
            "breakable": 1
        },
        "name": "Light Metal",
        "rating": 1,
        "num": 135,
        "desc": "Halves weight.",
        "shortDesc": "Halves weight."
    },
    "lightningrod": {
        "flags": {
            "breakable": 1
        },
        "name": "Lightning Rod",
        "rating": 3,
        "num": 31,
        "desc": "Draws electrical moves.",
        "shortDesc": "Draws electrical moves."
    },
    "limber": {
        "flags": {
            "breakable": 1
        },
        "name": "Limber",
        "rating": 2,
        "num": 7,
        "desc": "Prevents paralysis.",
        "shortDesc": "Prevents paralysis."
    },
    "lingeringaroma": {
        "flags": {},
        "name": "Lingering Aroma",
        "rating": 2,
        "num": 268,
        "desc": "Spreads with contact.",
        "shortDesc": "Spreads with contact."
    },
    "liquidooze": {
        "flags": {},
        "name": "Liquid Ooze",
        "rating": 2.5,
        "num": 64,
        "desc": "Draining causes injury.",
        "shortDesc": "Draining causes injury."
    },
    "liquidvoice": {
        "onModifyTypePriority": -1,
        "flags": {},
        "name": "Liquid Voice",
        "rating": 1.5,
        "num": 204,
        "desc": "Makes sound moves Water.",
        "shortDesc": "Makes sound moves Water."
    },
    "longreach": {
        "flags": {},
        "name": "Long Reach",
        "rating": 1,
        "num": 203,
        "desc": "Stronger, contactless hits.",
        "shortDesc": "Stronger, contactless hits."
    },
    "magicbounce": {
        "onTryHitPriority": 1,
        "condition": {
            "duration": 1
        },
        "flags": {
            "breakable": 1
        },
        "name": "Magic Bounce",
        "rating": 4,
        "num": 156,
        "desc": "Reflects status moves.",
        "shortDesc": "Reflects status moves."
    },
    "magicguard": {
        "flags": {},
        "name": "Magic Guard",
        "rating": 4,
        "num": 98,
        "desc": "Only damaged by attacks.",
        "shortDesc": "Only damaged by attacks."
    },
    "magician": {
        "flags": {},
        "name": "Magician",
        "rating": 1,
        "num": 170,
        "desc": "Steals the foe's held item.",
        "shortDesc": "Steals the foe's held item."
    },
    "magmaarmor": {
        "flags": {
            "breakable": 1
        },
        "name": "Magma Armor",
        "rating": 0.5,
        "num": 40,
        "desc": "Prevents freezing.",
        "shortDesc": "Prevents freezing."
    },
    "magnetpull": {
        "flags": {},
        "name": "Magnet Pull",
        "rating": 4,
        "num": 42,
        "desc": "Traps Steel-type Pokémon.",
        "shortDesc": "Traps Steel-type Pokémon."
    },
    "marvelscale": {
        "onModifyDefPriority": 6,
        "flags": {
            "breakable": 1
        },
        "name": "Marvel Scale",
        "rating": 2.5,
        "num": 63,
        "desc": "Ups Defense if suffering.",
        "shortDesc": "Ups Defense if suffering."
    },
    "megalauncher": {
        "onBasePowerPriority": 19,
        "flags": {},
        "name": "Mega Launcher",
        "rating": 3,
        "num": 178,
        "desc": "Boosts pulse moves.",
        "shortDesc": "Boosts pulse moves."
    },
    "merciless": {
        "flags": {},
        "name": "Merciless",
        "rating": 1.5,
        "num": 196,
        "desc": "Criticals poisoned foes.",
        "shortDesc": "Criticals poisoned foes."
    },
    "mimicry": {
        "flags": {},
        "name": "Mimicry",
        "rating": 0,
        "num": 250,
        "desc": "Changes type on terrain.",
        "shortDesc": "Changes type on terrain."
    },
    "mindseye": {
        "onModifyMovePriority": -5,
        "flags": {
            "breakable": 1
        },
        "name": "Mind's Eye",
        "rating": 0,
        "num": 300,
        "desc": "Keen Eye and Scrappy.",
        "shortDesc": "Keen Eye and Scrappy."
    },
    "minus": {
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Minus",
        "rating": 0,
        "num": 58,
        "desc": "Powers up with Plus.",
        "shortDesc": "Powers up with Plus."
    },
    "mirrorarmor": {
        "flags": {
            "breakable": 1
        },
        "name": "Mirror Armor",
        "rating": 2,
        "num": 240,
        "desc": "Reflect stat decreases.",
        "shortDesc": "Reflect stat decreases."
    },
    "mistysurge": {
        "flags": {},
        "name": "Misty Surge",
        "rating": 3.5,
        "num": 228,
        "desc": "Field becomes misty.",
        "shortDesc": "Field becomes misty."
    },
    "moldbreaker": {
        "flags": {},
        "name": "Mold Breaker",
        "rating": 3,
        "num": 104,
        "desc": "Moves hit through abilities.",
        "shortDesc": "Moves hit through abilities."
    },
    "moody": {
        "onResidualOrder": 28,
        "onResidualSubOrder": 2,
        "flags": {},
        "name": "Moody",
        "rating": 5,
        "num": 141,
        "desc": "Stats change gradually.",
        "shortDesc": "Stats change gradually."
    },
    "motordrive": {
        "flags": {
            "breakable": 1
        },
        "name": "Motor Drive",
        "rating": 3,
        "num": 78,
        "desc": "Electricity raises Speed.",
        "shortDesc": "Electricity raises Speed."
    },
    "moxie": {
        "flags": {},
        "name": "Moxie",
        "rating": 3,
        "num": 153,
        "desc": "KOs raise Attack.",
        "shortDesc": "KOs raise Attack."
    },
    "multiscale": {
        "flags": {
            "breakable": 1
        },
        "name": "Multiscale",
        "rating": 3.5,
        "num": 136,
        "desc": "Halves damage at full HP.",
        "shortDesc": "Halves damage at full HP."
    },
    "multitype": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Multitype",
        "rating": 4,
        "num": 121,
        "desc": "Changes type to its Plate.",
        "shortDesc": "Changes type to its Plate."
    },
    "mummy": {
        "flags": {},
        "name": "Mummy",
        "rating": 2,
        "num": 152,
        "desc": "Spreads with contact.",
        "shortDesc": "Spreads with contact."
    },
    "myceliummight": {
        "onFractionalPriorityPriority": -1,
        "flags": {},
        "name": "Mycelium Might",
        "rating": 2,
        "num": 298,
        "desc": "Status moves never fail.",
        "shortDesc": "Status moves never fail."
    },
    "naturalcure": {
        "flags": {},
        "name": "Natural Cure",
        "rating": 2.5,
        "num": 30,
        "desc": "Heals upon switching out.",
        "shortDesc": "Heals upon switching out."
    },
    "neuroforce": {
        "flags": {},
        "name": "Neuroforce",
        "rating": 2.5,
        "num": 233,
        "desc": "Ups “supereffective”.",
        "shortDesc": "Ups “supereffective”."
    },
    "neutralizinggas": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Neutralizing Gas",
        "rating": 3.5,
        "num": 256,
        "desc": "All Abilities are nullified.",
        "shortDesc": "All Abilities are nullified."
    },
    "noguard": {
        "onAnyInvulnerabilityPriority": 1,
        "flags": {},
        "name": "No Guard",
        "rating": 4,
        "num": 99,
        "desc": "Ensures that all moves hit.",
        "shortDesc": "Ensures that all moves hit."
    },
    "normalize": {
        "onModifyTypePriority": 1,
        "onBasePowerPriority": 23,
        "flags": {},
        "name": "Normalize",
        "rating": 0,
        "num": 96,
        "desc": "Moves become Normal-type.",
        "shortDesc": "Moves become Normal-type."
    },
    "oblivious": {
        "flags": {
            "breakable": 1
        },
        "name": "Oblivious",
        "rating": 1.5,
        "num": 12,
        "desc": "Prevents attraction.",
        "shortDesc": "Prevents attraction."
    },
    "opportunist": {
        "flags": {},
        "name": "Opportunist",
        "rating": 3,
        "num": 290,
        "desc": "Copies foe's stat change.",
        "shortDesc": "Copies foe's stat change."
    },
    "orichalcumpulse": {
        "onModifyAtkPriority": 5,
        "flags": {},
        "name": "Orichalcum Pulse",
        "rating": 4.5,
        "num": 288,
        "desc": "Summons sunlight in battle.",
        "shortDesc": "Summons sunlight in battle."
    },
    "overcoat": {
        "onTryHitPriority": 1,
        "flags": {
            "breakable": 1
        },
        "name": "Overcoat",
        "rating": 2,
        "num": 142,
        "desc": "Blocks weather and powder.",
        "shortDesc": "Blocks weather and powder."
    },
    "overgrow": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Overgrow",
        "rating": 2,
        "num": 65,
        "desc": "Ups Grass moves in a pinch.",
        "shortDesc": "Ups Grass moves in a pinch."
    },
    "owntempo": {
        "flags": {
            "breakable": 1
        },
        "name": "Own Tempo",
        "rating": 1.5,
        "num": 20,
        "desc": "Prevents confusion.",
        "shortDesc": "Prevents confusion."
    },
    "parentalbond": {
        "flags": {},
        "name": "Parental Bond",
        "rating": 4.5,
        "num": 185,
        "desc": "Moves hit twice.",
        "shortDesc": "Moves hit twice."
    },
    "pastelveil": {
        "flags": {
            "breakable": 1
        },
        "name": "Pastel Veil",
        "rating": 2,
        "num": 257,
        "desc": "Protects team from poison.",
        "shortDesc": "Protects team from poison."
    },
    "perishbody": {
        "flags": {},
        "name": "Perish Body",
        "rating": 1,
        "num": 253,
        "desc": "Foe faints in 3 turns if hit.",
        "shortDesc": "Foe faints in 3 turns if hit."
    },
    "pickpocket": {
        "flags": {},
        "name": "Pickpocket",
        "rating": 1,
        "num": 124,
        "desc": "Steals the foe's held item.",
        "shortDesc": "Steals the foe's held item."
    },
    "pickup": {
        "onResidualOrder": 28,
        "onResidualSubOrder": 2,
        "flags": {},
        "name": "Pickup",
        "rating": 0.5,
        "num": 53,
        "desc": "May pick up items.",
        "shortDesc": "May pick up items."
    },
    "pixilate": {
        "onModifyTypePriority": -1,
        "onBasePowerPriority": 23,
        "flags": {},
        "name": "Pixilate",
        "rating": 4,
        "num": 182,
        "desc": "Normal moves become Fairy.",
        "shortDesc": "Normal moves become Fairy."
    },
    "plus": {
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Plus",
        "rating": 0,
        "num": 57,
        "desc": "Powers up with Minus.",
        "shortDesc": "Powers up with Minus."
    },
    "poisonheal": {
        "onDamagePriority": 1,
        "flags": {},
        "name": "Poison Heal",
        "rating": 4,
        "num": 90,
        "desc": "Restores HP if poisoned.",
        "shortDesc": "Restores HP if poisoned."
    },
    "poisonpoint": {
        "flags": {},
        "name": "Poison Point",
        "rating": 1.5,
        "num": 38,
        "desc": "Poisons foe on contact.",
        "shortDesc": "Poisons foe on contact."
    },
    "poisonpuppeteer": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1
        },
        "name": "Poison Puppeteer",
        "rating": 3,
        "num": 310,
        "desc": "Confuses poisoned foes.",
        "shortDesc": "Confuses poisoned foes."
    },
    "poisontouch": {
        "flags": {},
        "name": "Poison Touch",
        "rating": 2,
        "num": 143,
        "desc": "Poisons foe on contact.",
        "shortDesc": "Poisons foe on contact."
    },
    "powerconstruct": {
        "onResidualOrder": 29,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Power Construct",
        "rating": 5,
        "num": 211,
        "desc": "Cells aid it when weakened.",
        "shortDesc": "Cells aid it when weakened."
    },
    "powerofalchemy": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1
        },
        "name": "Power of Alchemy",
        "rating": 0,
        "num": 223,
        "desc": "Copies ally's ability.",
        "shortDesc": "Copies ally's ability."
    },
    "powerspot": {
        "onAllyBasePowerPriority": 22,
        "flags": {},
        "name": "Power Spot",
        "rating": 0,
        "num": 249,
        "desc": "Powers up ally moves.",
        "shortDesc": "Powers up ally moves."
    },
    "prankster": {
        "flags": {},
        "name": "Prankster",
        "rating": 4,
        "num": 158,
        "desc": "Status moves go first.",
        "shortDesc": "Status moves go first."
    },
    "pressure": {
        "flags": {},
        "name": "Pressure",
        "rating": 2.5,
        "num": 46,
        "desc": "Raises foe's PP usage.",
        "shortDesc": "Raises foe's PP usage."
    },
    "primordialsea": {
        "flags": {},
        "name": "Primordial Sea",
        "rating": 4.5,
        "num": 189,
        "desc": "Summons heavy rain.",
        "shortDesc": "Summons heavy rain."
    },
    "prismarmor": {
        "flags": {},
        "name": "Prism Armor",
        "rating": 3,
        "num": 232,
        "desc": "Weakens “supereffective”.",
        "shortDesc": "Weakens “supereffective”."
    },
    "propellertail": {
        "onModifyMovePriority": 1,
        "flags": {},
        "name": "Propeller Tail",
        "rating": 0,
        "num": 239,
        "desc": "Ignores foe's redirection.",
        "shortDesc": "Ignores foe's redirection."
    },
    "protean": {
        "flags": {},
        "name": "Protean",
        "rating": 4,
        "num": 168,
        "desc": "Changes type to used move.",
        "shortDesc": "Changes type to used move."
    },
    "protosynthesis": {
        "condition": {
            "noCopy": true,
            "onModifyAtkPriority": 5,
            "onModifyDefPriority": 6,
            "onModifySpAPriority": 5,
            "onModifySpDPriority": 6
        },
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Protosynthesis",
        "rating": 3,
        "num": 281,
        "desc": "Sun boosts best stat.",
        "shortDesc": "Sun boosts best stat."
    },
    "psychicsurge": {
        "flags": {},
        "name": "Psychic Surge",
        "rating": 4,
        "num": 227,
        "desc": "Field becomes weird.",
        "shortDesc": "Field becomes weird."
    },
    "punkrock": {
        "onBasePowerPriority": 7,
        "flags": {
            "breakable": 1
        },
        "name": "Punk Rock",
        "rating": 3.5,
        "num": 244,
        "desc": "Ups and resists sound.",
        "shortDesc": "Ups and resists sound."
    },
    "purepower": {
        "onModifyAtkPriority": 5,
        "flags": {},
        "name": "Pure Power",
        "rating": 5,
        "num": 74,
        "desc": "Raises Attack.",
        "shortDesc": "Raises Attack."
    },
    "purifyingsalt": {
        "onSourceModifyAtkPriority": 6,
        "onSourceModifySpAPriority": 5,
        "flags": {
            "breakable": 1
        },
        "name": "Purifying Salt",
        "rating": 4,
        "num": 272,
        "desc": "Protected by pure salts.",
        "shortDesc": "Protected by pure salts."
    },
    "quarkdrive": {
        "condition": {
            "noCopy": true,
            "onModifyAtkPriority": 5,
            "onModifyDefPriority": 6,
            "onModifySpAPriority": 5,
            "onModifySpDPriority": 6
        },
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "notransform": 1
        },
        "name": "Quark Drive",
        "rating": 3,
        "num": 282,
        "desc": "Elec. field ups best stat.",
        "shortDesc": "Elec. field ups best stat."
    },
    "queenlymajesty": {
        "flags": {
            "breakable": 1
        },
        "name": "Queenly Majesty",
        "rating": 2.5,
        "num": 214,
        "desc": "Protects from priority.",
        "shortDesc": "Protects from priority."
    },
    "quickdraw": {
        "onFractionalPriorityPriority": -1,
        "flags": {},
        "name": "Quick Draw",
        "rating": 2.5,
        "num": 259,
        "desc": "Moves first occasionally.",
        "shortDesc": "Moves first occasionally."
    },
    "quickfeet": {
        "flags": {},
        "name": "Quick Feet",
        "rating": 2.5,
        "num": 95,
        "desc": "Ups Speed if suffering.",
        "shortDesc": "Ups Speed if suffering."
    },
    "raindish": {
        "flags": {},
        "name": "Rain Dish",
        "rating": 1.5,
        "num": 44,
        "desc": "Slight HP recovery in rain.",
        "shortDesc": "Slight HP recovery in rain."
    },
    "rattled": {
        "flags": {},
        "name": "Rattled",
        "rating": 1,
        "num": 155,
        "desc": "Raises Speed when scared.",
        "shortDesc": "Raises Speed when scared."
    },
    "receiver": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1
        },
        "name": "Receiver",
        "rating": 0,
        "num": 222,
        "desc": "Copies ally's ability.",
        "shortDesc": "Copies ally's ability."
    },
    "reckless": {
        "onBasePowerPriority": 23,
        "flags": {},
        "name": "Reckless",
        "rating": 3,
        "num": 120,
        "desc": "Boosts moves with recoil.",
        "shortDesc": "Boosts moves with recoil."
    },
    "refrigerate": {
        "onModifyTypePriority": -1,
        "onBasePowerPriority": 23,
        "flags": {},
        "name": "Refrigerate",
        "rating": 4,
        "num": 174,
        "desc": "Normal moves become Ice.",
        "shortDesc": "Normal moves become Ice."
    },
    "regenerator": {
        "flags": {},
        "name": "Regenerator",
        "rating": 4.5,
        "num": 144,
        "desc": "Heals upon switching out.",
        "shortDesc": "Heals upon switching out."
    },
    "ripen": {
        "onSourceModifyDamagePriority": -1,
        "onTryEatItemPriority": -1,
        "flags": {},
        "name": "Ripen",
        "rating": 2,
        "num": 247,
        "desc": "Doubles effect of Berries.",
        "shortDesc": "Doubles effect of Berries."
    },
    "rivalry": {
        "onBasePowerPriority": 24,
        "flags": {},
        "name": "Rivalry",
        "rating": 0,
        "num": 79,
        "desc": "Ups power vs. other gender.",
        "shortDesc": "Ups power vs. other gender."
    },
    "rkssystem": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "RKS System",
        "rating": 4,
        "num": 225,
        "desc": "Memories change its type.",
        "shortDesc": "Memories change its type."
    },
    "rockhead": {
        "flags": {},
        "name": "Rock Head",
        "rating": 3,
        "num": 69,
        "desc": "No recoil; recoil moves +acc.",
        "shortDesc": "No recoil; recoil moves +acc."
    },
    "rockypayload": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Rocky Payload",
        "rating": 3.5,
        "num": 276,
        "desc": "Powers up Rock moves.",
        "shortDesc": "Powers up Rock moves."
    },
    "roughskin": {
        "onDamagingHitOrder": 1,
        "flags": {},
        "name": "Rough Skin",
        "rating": 2.5,
        "num": 24,
        "desc": "Hurts to touch.",
        "shortDesc": "Hurts to touch."
    },
    "runaway": {
        "flags": {},
        "name": "Run Away",
        "rating": 0,
        "num": 50,
        "desc": "Makes escaping easier.",
        "shortDesc": "Makes escaping easier."
    },
    "sandforce": {
        "onBasePowerPriority": 21,
        "flags": {},
        "name": "Sand Force",
        "rating": 2,
        "num": 159,
        "desc": "Powers up in a sandstorm.",
        "shortDesc": "Powers up in a sandstorm."
    },
    "sandrush": {
        "flags": {},
        "name": "Sand Rush",
        "rating": 3,
        "num": 146,
        "desc": "Ups Speed in a sandstorm.",
        "shortDesc": "Ups Speed in a sandstorm."
    },
    "sandspit": {
        "flags": {},
        "name": "Sand Spit",
        "rating": 1,
        "num": 245,
        "desc": "Creates a sandstorm if hit.",
        "shortDesc": "Creates a sandstorm if hit."
    },
    "sandstream": {
        "flags": {},
        "name": "Sand Stream",
        "rating": 4,
        "num": 45,
        "desc": "Summons a sandstorm.",
        "shortDesc": "Summons a sandstorm."
    },
    "sandveil": {
        "onModifyAccuracyPriority": -1,
        "flags": {
            "breakable": 1
        },
        "name": "Sand Veil",
        "rating": 1.5,
        "num": 8,
        "desc": "Ups evasion in a sandstorm.",
        "shortDesc": "Ups evasion in a sandstorm."
    },
    "sapsipper": {
        "onTryHitPriority": 1,
        "flags": {
            "breakable": 1
        },
        "name": "Sap Sipper",
        "rating": 3,
        "num": 157,
        "desc": "Grass increases Attack.",
        "shortDesc": "Grass increases Attack."
    },
    "schooling": {
        "onResidualOrder": 29,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Schooling",
        "rating": 3,
        "num": 208,
        "desc": "Forms a school when strong.",
        "shortDesc": "Forms a school when strong."
    },
    "scrappy": {
        "onModifyMovePriority": -5,
        "flags": {},
        "name": "Scrappy",
        "rating": 3,
        "num": 113,
        "desc": "Hits Ghost-type Pokémon.",
        "shortDesc": "Hits Ghost-type Pokémon."
    },
    "screencleaner": {
        "flags": {},
        "name": "Screen Cleaner",
        "rating": 2,
        "num": 251,
        "desc": "Removes walls of light.",
        "shortDesc": "Removes walls of light."
    },
    "seedsower": {
        "flags": {},
        "name": "Seed Sower",
        "rating": 2.5,
        "num": 269,
        "desc": "Affects terrain when hit.",
        "shortDesc": "Affects terrain when hit."
    },
    "serenegrace": {
        "onModifyMovePriority": -2,
        "flags": {},
        "name": "Serene Grace",
        "rating": 3.5,
        "num": 32,
        "desc": "Promotes added effects.",
        "shortDesc": "Promotes added effects."
    },
    "shadowshield": {
        "flags": {},
        "name": "Shadow Shield",
        "rating": 3.5,
        "num": 231,
        "desc": "Halves damage at full HP.",
        "shortDesc": "Halves damage at full HP."
    },
    "shadowtag": {
        "flags": {},
        "name": "Shadow Tag",
        "rating": 5,
        "num": 23,
        "desc": "Prevents the foe's escape.",
        "shortDesc": "Prevents the foe's escape."
    },
    "sharpness": {
        "onBasePowerPriority": 19,
        "flags": {},
        "name": "Sharpness",
        "rating": 3.5,
        "num": 292,
        "desc": "Strengthens slicing moves.",
        "shortDesc": "Strengthens slicing moves."
    },
    "shedskin": {
        "onResidualOrder": 5,
        "onResidualSubOrder": 3,
        "flags": {},
        "name": "Shed Skin",
        "rating": 3,
        "num": 61,
        "desc": "Heals the body by shedding.",
        "shortDesc": "Heals the body by shedding."
    },
    "sheerforce": {
        "onBasePowerPriority": 21,
        "flags": {},
        "name": "Sheer Force",
        "rating": 3.5,
        "num": 125,
        "desc": "Trades effects for power.",
        "shortDesc": "Trades effects for power."
    },
    "shellarmor": {
        "onCriticalHit": false,
        "flags": {
            "breakable": 1
        },
        "name": "Shell Armor",
        "rating": 1,
        "num": 75,
        "desc": "Blocks critical hits.",
        "shortDesc": "Blocks critical hits."
    },
    "shielddust": {
        "flags": {
            "breakable": 1
        },
        "name": "Shield Dust",
        "rating": 2,
        "num": 19,
        "desc": "Prevents added effects.",
        "shortDesc": "Prevents added effects."
    },
    "shieldsdown": {
        "onResidualOrder": 29,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Shields Down",
        "rating": 3,
        "num": 197,
        "desc": "Shell breaks at half HP.",
        "shortDesc": "Shell breaks at half HP."
    },
    "simple": {
        "flags": {
            "breakable": 1
        },
        "name": "Simple",
        "rating": 4,
        "num": 86,
        "desc": "Prone to wild stat changes.",
        "shortDesc": "Prone to wild stat changes."
    },
    "skilllink": {
        "flags": {},
        "name": "Skill Link",
        "rating": 3,
        "num": 92,
        "desc": "Multi-hit moves hit 5 times.",
        "shortDesc": "Multi-hit moves hit 5 times."
    },
    "slowstart": {
        "condition": {
            "duration": 5,
            "onResidualOrder": 28,
            "onResidualSubOrder": 2,
            "onModifyAtkPriority": 5
        },
        "flags": {},
        "name": "Slow Start",
        "rating": -1,
        "num": 112,
        "desc": "Takes a while to get going.",
        "shortDesc": "Takes a while to get going."
    },
    "slushrush": {
        "flags": {},
        "name": "Slush Rush",
        "rating": 3,
        "num": 202,
        "desc": "Raises Speed in Hail/Snow.",
        "shortDesc": "Raises Speed in Hail/Snow."
    },
    "sniper": {
        "flags": {},
        "name": "Sniper",
        "rating": 2,
        "num": 97,
        "desc": "Boosts critical hits.",
        "shortDesc": "Boosts critical hits."
    },
    "snowcloak": {
        "onModifyAccuracyPriority": -1,
        "flags": {
            "breakable": 1
        },
        "name": "Snow Cloak",
        "rating": 1.5,
        "num": 81,
        "desc": "Ups evasion in Hail or Snow.",
        "shortDesc": "Ups evasion in Hail or Snow."
    },
    "snowwarning": {
        "flags": {},
        "name": "Snow Warning",
        "rating": 4,
        "num": 117,
        "desc": "Summons snow in battle.",
        "shortDesc": "Summons snow in battle."
    },
    "solarpower": {
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Solar Power",
        "rating": 2,
        "num": 94,
        "desc": "Powers up in sunshine.",
        "shortDesc": "Powers up in sunshine."
    },
    "solidrock": {
        "flags": {
            "breakable": 1
        },
        "name": "Solid Rock",
        "rating": 3,
        "num": 116,
        "desc": "Weakens “supereffective”.",
        "shortDesc": "Weakens “supereffective”."
    },
    "soulheart": {
        "onAnyFaintPriority": 1,
        "flags": {},
        "name": "Soul-Heart",
        "rating": 3.5,
        "num": 220,
        "desc": "KOs raise Sp. Atk.",
        "shortDesc": "KOs raise Sp. Atk."
    },
    "soundproof": {
        "flags": {
            "breakable": 1
        },
        "name": "Soundproof",
        "rating": 2,
        "num": 43,
        "desc": "Avoids sound-based moves.",
        "shortDesc": "Avoids sound-based moves."
    },
    "speedboost": {
        "onResidualOrder": 28,
        "onResidualSubOrder": 2,
        "flags": {},
        "name": "Speed Boost",
        "rating": 4.5,
        "num": 3,
        "desc": "Gradually boosts Speed.",
        "shortDesc": "Gradually boosts Speed."
    },
    "stakeout": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Stakeout",
        "rating": 4.5,
        "num": 198,
        "desc": "Stronger as foes switch in.",
        "shortDesc": "Stronger as foes switch in."
    },
    "stall": {
        "onFractionalPriority": -0.1,
        "flags": {},
        "name": "Stall",
        "rating": -1,
        "num": 100,
        "desc": "Always moves last.",
        "shortDesc": "Always moves last."
    },
    "stalwart": {
        "onModifyMovePriority": 1,
        "flags": {},
        "name": "Stalwart",
        "rating": 0,
        "num": 242,
        "desc": "Ignores foe's redirection.",
        "shortDesc": "Ignores foe's redirection."
    },
    "stamina": {
        "flags": {},
        "name": "Stamina",
        "rating": 4,
        "num": 192,
        "desc": "Boosts Defense when hit.",
        "shortDesc": "Boosts Defense when hit."
    },
    "stancechange": {
        "onModifyMovePriority": 1,
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Stance Change",
        "rating": 4,
        "num": 176,
        "desc": "Transforms as it battles.",
        "shortDesc": "Transforms as it battles."
    },
    "static": {
        "flags": {},
        "name": "Static",
        "rating": 2,
        "num": 9,
        "desc": "Paralyzes on contact.",
        "shortDesc": "Paralyzes on contact."
    },
    "steadfast": {
        "flags": {},
        "name": "Steadfast",
        "rating": 1,
        "num": 80,
        "desc": "Flinching raises Speed.",
        "shortDesc": "Flinching raises Speed."
    },
    "steamengine": {
        "flags": {},
        "name": "Steam Engine",
        "rating": 2,
        "num": 243,
        "desc": "Fire or Water hits up Speed.",
        "shortDesc": "Fire or Water hits up Speed."
    },
    "steelworker": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Steelworker",
        "rating": 3.5,
        "num": 200,
        "desc": "Powers up Steel moves.",
        "shortDesc": "Powers up Steel moves."
    },
    "steelyspirit": {
        "onAllyBasePowerPriority": 22,
        "flags": {},
        "name": "Steely Spirit",
        "rating": 3.5,
        "num": 252,
        "desc": "Boosts ally's Steel moves.",
        "shortDesc": "Boosts ally's Steel moves."
    },
    "stench": {
        "onModifyMovePriority": -1,
        "flags": {},
        "name": "Stench",
        "rating": 0.5,
        "num": 1,
        "desc": "May cause a foe to flinch.",
        "shortDesc": "May cause a foe to flinch."
    },
    "stickyhold": {
        "flags": {
            "breakable": 1
        },
        "name": "Sticky Hold",
        "rating": 1.5,
        "num": 60,
        "desc": "Prevents item theft.",
        "shortDesc": "Prevents item theft."
    },
    "stormdrain": {
        "flags": {
            "breakable": 1
        },
        "name": "Storm Drain",
        "rating": 3,
        "num": 114,
        "desc": "Draws in Water moves.",
        "shortDesc": "Draws in Water moves."
    },
    "strongjaw": {
        "onBasePowerPriority": 19,
        "flags": {},
        "name": "Strong Jaw",
        "rating": 3.5,
        "num": 173,
        "desc": "Boosts biting moves.",
        "shortDesc": "Boosts biting moves."
    },
    "sturdy": {
        "onDamagePriority": -30,
        "flags": {
            "breakable": 1
        },
        "name": "Sturdy",
        "rating": 3,
        "num": 5,
        "desc": "Negates 1-hit KO attacks.",
        "shortDesc": "Negates 1-hit KO attacks."
    },
    "suctioncups": {
        "onDragOutPriority": 1,
        "flags": {
            "breakable": 1
        },
        "name": "Suction Cups",
        "rating": 1,
        "num": 21,
        "desc": "Firmly anchors the body.",
        "shortDesc": "Firmly anchors the body."
    },
    "superluck": {
        "flags": {},
        "name": "Super Luck",
        "rating": 1.5,
        "num": 105,
        "desc": "Critical hits land often.",
        "shortDesc": "Critical hits land often."
    },
    "supersweetsyrup": {
        "flags": {},
        "name": "Supersweet Syrup",
        "rating": 1.5,
        "num": 306,
        "desc": "Lowers the foe's Evasion.",
        "shortDesc": "Lowers the foe's Evasion."
    },
    "supremeoverlord": {
        "onBasePowerPriority": 21,
        "flags": {},
        "name": "Supreme Overlord",
        "rating": 4,
        "num": 293,
        "desc": "Inherits fallen's strength.",
        "shortDesc": "Inherits fallen's strength."
    },
    "surgesurfer": {
        "flags": {},
        "name": "Surge Surfer",
        "rating": 3,
        "num": 207,
        "desc": "Faster on electricity.",
        "shortDesc": "Faster on electricity."
    },
    "swarm": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Swarm",
        "rating": 2,
        "num": 68,
        "desc": "Ups Bug moves in a pinch.",
        "shortDesc": "Ups Bug moves in a pinch."
    },
    "sweetveil": {
        "flags": {
            "breakable": 1
        },
        "name": "Sweet Veil",
        "rating": 2,
        "num": 175,
        "desc": "Prevents party from sleep.",
        "shortDesc": "Prevents party from sleep."
    },
    "swiftswim": {
        "flags": {},
        "name": "Swift Swim",
        "rating": 3,
        "num": 33,
        "desc": "Raises Speed in rain.",
        "shortDesc": "Raises Speed in rain."
    },
    "symbiosis": {
        "flags": {},
        "name": "Symbiosis",
        "rating": 0,
        "num": 180,
        "desc": "Passes its item to an ally.",
        "shortDesc": "Passes its item to an ally."
    },
    "synchronize": {
        "flags": {},
        "name": "Synchronize",
        "rating": 2,
        "num": 28,
        "desc": "Passes on status problems.",
        "shortDesc": "Passes on status problems."
    },
    "swordofruin": {
        "flags": {},
        "name": "Sword of Ruin",
        "rating": 4.5,
        "num": 285,
        "desc": "Lowers foes' Defense.",
        "shortDesc": "Lowers foes' Defense."
    },
    "tabletsofruin": {
        "flags": {},
        "name": "Tablets of Ruin",
        "rating": 4.5,
        "num": 284,
        "desc": "Lowers foes' damage.",
        "shortDesc": "Lowers foes' damage."
    },
    "tangledfeet": {
        "onModifyAccuracyPriority": -1,
        "flags": {
            "breakable": 1
        },
        "name": "Tangled Feet",
        "rating": 1,
        "num": 77,
        "desc": "Ups evasion if confused.",
        "shortDesc": "Ups evasion if confused."
    },
    "tanglinghair": {
        "flags": {},
        "name": "Tangling Hair",
        "rating": 2,
        "num": 221,
        "desc": "Lowers Speed on contact.",
        "shortDesc": "Lowers Speed on contact."
    },
    "technician": {
        "onBasePowerPriority": 30,
        "flags": {},
        "name": "Technician",
        "rating": 3.5,
        "num": 101,
        "desc": "Boosts weaker moves.",
        "shortDesc": "Boosts weaker moves."
    },
    "telepathy": {
        "flags": {
            "breakable": 1
        },
        "name": "Telepathy",
        "rating": 0,
        "num": 140,
        "desc": "Can't be damaged by an ally.",
        "shortDesc": "Can't be damaged by an ally."
    },
    "teraformzero": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1
        },
        "name": "Teraform Zero",
        "rating": 3,
        "num": 309,
        "desc": "Zeroes weather and terrain.",
        "shortDesc": "Zeroes weather and terrain."
    },
    "terashell": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "breakable": 1
        },
        "name": "Tera Shell",
        "rating": 3.5,
        "num": 308,
        "desc": "Resists all at full HP.",
        "shortDesc": "Resists all at full HP."
    },
    "terashift": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1,
            "notransform": 1
        },
        "name": "Tera Shift",
        "rating": 3,
        "num": 307,
        "desc": "Terastallizes upon entry.",
        "shortDesc": "Terastallizes upon entry."
    },
    "teravolt": {
        "flags": {},
        "name": "Teravolt",
        "rating": 3,
        "num": 164,
        "desc": "Moves hit through abilities.",
        "shortDesc": "Moves hit through abilities."
    },
    "thermalexchange": {
        "flags": {
            "breakable": 1
        },
        "name": "Thermal Exchange",
        "rating": 2.5,
        "num": 270,
        "desc": "Fire hits up Attack.",
        "shortDesc": "Fire hits up Attack."
    },
    "thickfat": {
        "onSourceModifyAtkPriority": 6,
        "onSourceModifySpAPriority": 5,
        "flags": {
            "breakable": 1
        },
        "name": "Thick Fat",
        "rating": 3.5,
        "num": 47,
        "desc": "Heat-and-cold protection.",
        "shortDesc": "Heat-and-cold protection."
    },
    "tintedlens": {
        "flags": {},
        "name": "Tinted Lens",
        "rating": 4,
        "num": 110,
        "desc": "Ups “not very effective”.",
        "shortDesc": "Ups “not very effective”."
    },
    "torrent": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Torrent",
        "rating": 2,
        "num": 67,
        "desc": "Ups Water moves in a pinch.",
        "shortDesc": "Ups Water moves in a pinch."
    },
    "toughclaws": {
        "onBasePowerPriority": 21,
        "flags": {},
        "name": "Tough Claws",
        "rating": 3.5,
        "num": 181,
        "desc": "Boosts contact moves.",
        "shortDesc": "Boosts contact moves."
    },
    "toxicboost": {
        "onBasePowerPriority": 19,
        "flags": {},
        "name": "Toxic Boost",
        "rating": 3,
        "num": 137,
        "desc": "Ups Attack if poisoned.",
        "shortDesc": "Ups Attack if poisoned."
    },
    "toxicchain": {
        "flags": {},
        "name": "Toxic Chain",
        "rating": 4.5,
        "num": 305,
        "desc": "Moves can poison.",
        "shortDesc": "Moves can poison."
    },
    "toxicdebris": {
        "flags": {},
        "name": "Toxic Debris",
        "rating": 3.5,
        "num": 295,
        "desc": "Throws poison spikes if hit.",
        "shortDesc": "Throws poison spikes if hit."
    },
    "trace": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1
        },
        "name": "Trace",
        "rating": 2.5,
        "num": 36,
        "desc": "Copies the foe facing it.",
        "shortDesc": "Copies the foe facing it."
    },
    "transistor": {
        "onModifyAtkPriority": 5,
        "onModifySpAPriority": 5,
        "flags": {},
        "name": "Transistor",
        "rating": 3.5,
        "num": 262,
        "desc": "Ups Electric-type moves.",
        "shortDesc": "Ups Electric-type moves."
    },
    "triage": {
        "flags": {},
        "name": "Triage",
        "rating": 3.5,
        "num": 205,
        "desc": "Healing moves go first.",
        "shortDesc": "Healing moves go first."
    },
    "truant": {
        "onBeforeMovePriority": 9,
        "condition": {},
        "flags": {},
        "name": "Truant",
        "rating": -1,
        "num": 54,
        "desc": "May loaf every other turn.",
        "shortDesc": "May loaf every other turn."
    },
    "turboblaze": {
        "flags": {},
        "name": "Turboblaze",
        "rating": 3,
        "num": 163,
        "desc": "Moves hit through abilities.",
        "shortDesc": "Moves hit through abilities."
    },
    "unaware": {
        "flags": {
            "breakable": 1
        },
        "name": "Unaware",
        "rating": 4,
        "num": 109,
        "desc": "Ignores stat changes.",
        "shortDesc": "Ignores stat changes."
    },
    "unburden": {
        "condition": {},
        "flags": {},
        "name": "Unburden",
        "rating": 3.5,
        "num": 84,
        "desc": "Using a hold item ups Speed.",
        "shortDesc": "Using a hold item ups Speed."
    },
    "unnerve": {
        "flags": {},
        "name": "Unnerve",
        "rating": 1,
        "num": 127,
        "desc": "Foes can't eat Berries.",
        "shortDesc": "Foes can't eat Berries."
    },
    "unseenfist": {
        "flags": {},
        "name": "Unseen Fist",
        "rating": 2,
        "num": 260,
        "desc": "Contact evades protection.",
        "shortDesc": "Contact evades protection."
    },
    "vesselofruin": {
        "flags": {},
        "name": "Vessel of Ruin",
        "rating": 4.5,
        "num": 284,
        "desc": "Lowers foes' sp. damage.",
        "shortDesc": "Lowers foes' sp. damage."
    },
    "victorystar": {
        "onAnyModifyAccuracyPriority": -1,
        "flags": {},
        "name": "Victory Star",
        "rating": 2,
        "num": 162,
        "desc": "Raises party accuracy.",
        "shortDesc": "Raises party accuracy."
    },
    "vitalspirit": {
        "flags": {
            "breakable": 1
        },
        "name": "Vital Spirit",
        "rating": 1.5,
        "num": 72,
        "desc": "Prevents sleep.",
        "shortDesc": "Prevents sleep."
    },
    "voltabsorb": {
        "flags": {
            "breakable": 1
        },
        "name": "Volt Absorb",
        "rating": 3.5,
        "num": 10,
        "desc": "Turns electricity into HP.",
        "shortDesc": "Turns electricity into HP."
    },
    "wanderingspirit": {
        "flags": {},
        "name": "Wandering Spirit",
        "rating": 2.5,
        "num": 254,
        "desc": "Trade abilities on contact.",
        "shortDesc": "Trade abilities on contact."
    },
    "waterabsorb": {
        "flags": {
            "breakable": 1
        },
        "name": "Water Absorb",
        "rating": 3.5,
        "num": 11,
        "desc": "Changes water into HP.",
        "shortDesc": "Changes water into HP."
    },
    "waterbubble": {
        "onSourceModifyAtkPriority": 5,
        "onSourceModifySpAPriority": 5,
        "flags": {
            "breakable": 1
        },
        "name": "Water Bubble",
        "rating": 4.5,
        "num": 199,
        "desc": "Guards from fire and burns.",
        "shortDesc": "Guards from fire and burns."
    },
    "watercompaction": {
        "flags": {},
        "name": "Water Compaction",
        "rating": 1.5,
        "num": 195,
        "desc": "Absorbs Water, ups Defense.",
        "shortDesc": "Absorbs Water, ups Defense."
    },
    "waterveil": {
        "flags": {
            "breakable": 1
        },
        "name": "Water Veil",
        "rating": 2,
        "num": 41,
        "desc": "Prevents burns.",
        "shortDesc": "Prevents burns."
    },
    "weakarmor": {
        "flags": {},
        "name": "Weak Armor",
        "rating": 1,
        "num": 133,
        "desc": "Its stats change when hit.",
        "shortDesc": "Its stats change when hit."
    },
    "wellbakedbody": {
        "flags": {
            "breakable": 1
        },
        "name": "Well-Baked Body",
        "rating": 3.5,
        "num": 273,
        "desc": "Strengthened by Fire.",
        "shortDesc": "Strengthened by Fire."
    },
    "whitesmoke": {
        "flags": {
            "breakable": 1
        },
        "name": "White Smoke",
        "rating": 2,
        "num": 73,
        "desc": "Prevents ability reduction.",
        "shortDesc": "Prevents ability reduction."
    },
    "wimpout": {
        "flags": {},
        "name": "Wimp Out",
        "rating": 1,
        "num": 193,
        "desc": "Flees at half HP.",
        "shortDesc": "Flees at half HP."
    },
    "windpower": {
        "onDamagingHitOrder": 1,
        "flags": {},
        "name": "Wind Power",
        "rating": 1,
        "num": 277,
        "desc": "Wind or Tailwind charges it.",
        "shortDesc": "Wind or Tailwind charges it."
    },
    "windrider": {
        "flags": {
            "breakable": 1
        },
        "name": "Wind Rider",
        "rating": 3.5,
        "num": 274,
        "desc": "Wind or Tailwind ups Attack.",
        "shortDesc": "Wind or Tailwind ups Attack."
    },
    "wonderguard": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "failskillswap": 1,
            "breakable": 1
        },
        "name": "Wonder Guard",
        "rating": 5,
        "num": 25,
        "desc": "Only “Supereffective” hits.",
        "shortDesc": "Only “Supereffective” hits."
    },
    "wonderskin": {
        "onModifyAccuracyPriority": 10,
        "flags": {
            "breakable": 1
        },
        "name": "Wonder Skin",
        "rating": 2,
        "num": 147,
        "desc": "May avoid status problems.",
        "shortDesc": "May avoid status problems."
    },
    "zenmode": {
        "onResidualOrder": 29,
        "condition": {},
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1
        },
        "name": "Zen Mode",
        "rating": 0,
        "num": 161,
        "desc": "Transforms at half HP.",
        "shortDesc": "Transforms at half HP."
    },
    "zerotohero": {
        "flags": {
            "failroleplay": 1,
            "noreceiver": 1,
            "noentrain": 1,
            "notrace": 1,
            "failskillswap": 1,
            "cantsuppress": 1,
            "notransform": 1
        },
        "name": "Zero to Hero",
        "rating": 5,
        "num": 278,
        "desc": "Changes form on switch out.",
        "shortDesc": "Changes form on switch out."
    },
    "mountaineer": {
        "isNonstandard": "CAP",
        "flags": {
            "breakable": 1
        },
        "name": "Mountaineer",
        "rating": 3,
        "num": -2,
        "desc": "On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.",
        "shortDesc": "On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock."
    },
    "rebound": {
        "isNonstandard": "CAP",
        "onTryHitPriority": 1,
        "condition": {
            "duration": 1
        },
        "flags": {
            "breakable": 1
        },
        "name": "Rebound",
        "rating": 3,
        "num": -3,
        "desc": "On switch-in, this Pokemon blocks certain status moves and instead uses the move against the original user.",
        "shortDesc": "On switch-in, blocks certain status moves and bounces them back to the user."
    },
    "persistent": {
        "isNonstandard": "CAP",
        "flags": {},
        "name": "Persistent",
        "rating": 3,
        "num": -4,
        "desc": "The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.",
        "shortDesc": "When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns."
    },
    "psychicpelt": {
        "flags": {},
        "name": "Psychic Pelt",
        "rating": 1,
        "num": 311,
        "desc": "Psychic Terrain ups Sp. Atk.",
        "shortDesc": "Psychic Terrain ups Sp. Atk."
    },
    "mistypelt": {
        "flags": {},
        "name": "Misty Pelt",
        "rating": 1,
        "num": 311,
        "desc": "Misty Terrain ups Sp. Def.",
        "shortDesc": "Misty Terrain ups Sp. Def."
    },
    "electricpelt": {
        "flags": {},
        "name": "Electric Pelt",
        "rating": 1,
        "num": 311,
        "desc": "Electric Terrain ups Atk.",
        "shortDesc": "Electric Terrain ups Atk."
    },
    "asone": {
        "flags": {},
        "name": "As One",
        "rating": 1,
        "num": 311,
        "desc": "Unnerve and Chilling Neigh.",
        "shortDesc": "Unnerve and Chilling Neigh."
    },
    "embodyaspect": {
        "flags": {},
        "name": "Embody Aspect",
        "rating": 1,
        "num": 311,
        "desc": "Raises Speed.",
        "shortDesc": "Raises Speed."
    },
    "windglider": {
        "flags": {},
        "name": "Wind Glider",
        "rating": 1,
        "num": 311,
        "desc": "Tailwind on entry; ups wind.",
        "shortDesc": "Tailwind on entry; ups wind."
    },
    "ironkick": {
        "flags": {},
        "name": "Iron Kick",
        "rating": 1,
        "num": 311,
        "desc": "Boosts kicking moves.",
        "shortDesc": "Boosts kicking moves."
    },
    "spiritbody": {
        "flags": {},
        "name": "Spirit Body",
        "rating": 1,
        "num": 311,
        "desc": "Immune to contact moves.",
        "shortDesc": "Immune to contact moves."
    },
    "mindpower": {
        "flags": {},
        "name": "Mind Power",
        "rating": 1,
        "num": 311,
        "desc": "Powers up Psychic moves.",
        "shortDesc": "Powers up Psychic moves."
    },
    "lifedrainer": {
        "flags": {},
        "name": "Life Drainer",
        "rating": 1,
        "num": 311,
        "desc": "Powers up draining moves.",
        "shortDesc": "Powers up draining moves."
    },
    "formation": {
        "flags": {},
        "name": "Formation",
        "rating": 1,
        "num": 311,
        "desc": "Moves hit 2-6 times, weaker.",
        "shortDesc": "Moves hit 2-6 times, weaker."
    },
    "ignite": {
        "flags": {},
        "name": "Ignite",
        "rating": 1,
        "num": 311,
        "desc": "Normal moves become Fire.",
        "shortDesc": "Normal moves become Fire."
    },
    "distorsiondata": {
        "flags": {},
        "name": "Distorsion Data",
        "rating": 1,
        "num": 311,
        "desc": "Sets Trick Room on entry.",
        "shortDesc": "Sets Trick Room on entry."
    }
}