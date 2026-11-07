exports.BattleMovedex = {
    "": {
        "num": 0,
        "flags": {
            "protect": 1
        },
        "name": "-",
        "shortDesc": "",
        "desc": "",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 0,
        "priority": 0,
        "category": "Physical"
    },
    "pound": {
        "num": 1,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Pound",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "karatechop": {
        "num": 2,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Karate Chop",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 50,
        "type": "Fighting",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "doubleslap": {
        "num": 3,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Double Slap",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 15,
        "type": "Normal",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "cometpunch": {
        "num": 4,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Comet Punch",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 18,
        "type": "Normal",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "megapunch": {
        "num": 5,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Mega Punch",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Normal",
        "accuracy": 85,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "payday": {
        "num": 6,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Pay Day",
        "shortDesc": "Scatters coins.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "firepunch": {
        "num": 7,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Fire Punch",
        "shortDesc": "10% chance to burn the target.",
        "desc": "Has a 10% chance to burn the target.",
        "basePower": 75,
        "type": "Fire",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "icepunch": {
        "num": 8,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Ice Punch",
        "shortDesc": "10% chance to freeze the target.",
        "desc": "Has a 10% chance to freeze the target.",
        "basePower": 75,
        "type": "Ice",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "thunderpunch": {
        "num": 9,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Thunder Punch",
        "shortDesc": "10% chance to paralyze the target.",
        "desc": "Has a 10% chance to paralyze the target.",
        "basePower": 75,
        "type": "Electric",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "scratch": {
        "num": 10,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Scratch",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "visegrip": {
        "num": 11,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Vise Grip",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 55,
        "type": "Normal",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "guillotine": {
        "num": 12,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Guillotine",
        "shortDesc": "OHKOs the target. Fails if user is a lower level.",
        "desc": "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 30,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "razorwind": {
        "num": 13,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Razor Wind",
        "shortDesc": "Charges, then hits foe(s) turn 2. High crit ratio.",
        "desc": "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 80,
        "type": "Normal",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "swordsdance": {
        "num": 14,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "snatch": 1
        },
        "name": "Swords Dance",
        "shortDesc": "Raises the user's Attack by 2.",
        "desc": "Raises the user's Attack by 2 stages.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "cut": {
        "num": 15,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Cut",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 60,
        "type": "Bug",
        "accuracy": 95,
        "pp": 30,
        "priority": 0,
        "category": "Physical",
        "critRatio": 2,
        "contestType": "Cool"
    },
    "gust": {
        "num": 16,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Gust",
        "shortDesc": "Power doubles during Bounce, Fly, and Sky Drop.",
        "desc": "Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
        "basePower": 40,
        "type": "Flying",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "wingattack": {
        "num": 17,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Wing Attack",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 60,
        "type": "Flying",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "whirlwind": {
        "num": 18,
        "flags": {
            "mirror": 1,
            "wind": 1,
            "bypasssub": 1,
            "reflectable": 1
        },
        "name": "Whirlwind",
        "shortDesc": "Forces the target to switch to a random ally.",
        "desc": "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": -6,
        "category": "Status",
        "contestType": "Smart"
    },
    "fly": {
        "num": 19,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Fly",
        "shortDesc": "Flies up on first turn, then strikes the next turn.",
        "desc": "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 90,
        "type": "Flying",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "bind": {
        "num": 20,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Bind",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 15,
        "type": "Normal",
        "accuracy": 85,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "slam": {
        "num": 21,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Slam",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Normal",
        "accuracy": 75,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "vinewhip": {
        "num": 22,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Vine Whip",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "pp": 25,
        "basePower": 45,
        "type": "Grass",
        "accuracy": 100,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "stomp": {
        "num": 23,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Stomp",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 65,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "doublekick": {
        "num": 24,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Double Kick",
        "shortDesc": "Hits 2 times in one turn.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 30,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "megakick": {
        "num": 25,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Mega Kick",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 75,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "jumpkick": {
        "num": 26,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Jump Kick",
        "shortDesc": "User is hurt by 50% of its max HP if it misses.",
        "desc": "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
        "basePower": 100,
        "type": "Fighting",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "rollingkick": {
        "num": 27,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Rolling Kick",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 60,
        "type": "Fighting",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "sandattack": {
        "num": 28,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Sand Attack",
        "shortDesc": "Lowers the target's accuracy by 1.",
        "desc": "Lowers the target's accuracy by 1 stage.",
        "basePower": 0,
        "type": "Ground",
        "accuracy": 100,
        "pp": 1,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "headbutt": {
        "num": 29,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Headbutt",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "hornattack": {
        "num": 30,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Horn Attack",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 65,
        "type": "Normal",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "furyattack": {
        "num": 31,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Fury Attack",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 15,
        "type": "Normal",
        "accuracy": 85,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "horndrill": {
        "num": 32,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Horn Drill",
        "shortDesc": "OHKOs the target. Fails if user is a lower level.",
        "desc": "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 30,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "tackle": {
        "num": 33,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Tackle",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "bodyslam": {
        "num": 34,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Body Slam",
        "shortDesc": "30% chance to paralyze the target.",
        "desc": "Has a 30% chance to paralyze the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 85,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "wrap": {
        "num": 35,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Wrap",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 15,
        "type": "Normal",
        "accuracy": 90,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "takedown": {
        "num": 36,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Take Down",
        "shortDesc": "Has 1/4 recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 90,
        "type": "Normal",
        "accuracy": 85,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "thrash": {
        "num": 37,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Thrash",
        "shortDesc": "Lasts 2-3 turns. Confuses the user afterwards.",
        "desc": "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "doubleedge": {
        "num": 38,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Double-Edge",
        "shortDesc": "Has 33% recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "tailwhip": {
        "num": 39,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Tail Whip",
        "shortDesc": "Lowers the foe(s) Defense by 1.",
        "desc": "Lowers the target's Defense by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "poisonsting": {
        "num": 40,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Poison Sting",
        "shortDesc": "30% chance to poison the target.",
        "desc": "Has a 30% chance to poison the target.",
        "basePower": 15,
        "type": "Poison",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "twineedle": {
        "num": 41,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Twineedle",
        "shortDesc": "Hits 2 times. Each hit has 20% chance to poison.",
        "desc": "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 25,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "pinmissile": {
        "num": 42,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Pin Missile",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 25,
        "type": "Bug",
        "accuracy": 95,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "leer": {
        "num": 43,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Leer",
        "shortDesc": "Lowers the foe(s) Defense by 1.",
        "desc": "Lowers the target's Defense by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "bite": {
        "num": 44,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Bite",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 60,
        "type": "Dark",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "growl": {
        "num": 45,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Growl",
        "shortDesc": "Lowers the foe(s) Attack by 1.",
        "desc": "Lowers the target's Attack by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "roar": {
        "num": 46,
        "flags": {
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Roar",
        "shortDesc": "Forces the target to switch to a random ally.",
        "desc": "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": -6,
        "category": "Status",
        "contestType": "Cool"
    },
    "sing": {
        "num": 47,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Sing",
        "shortDesc": "Causes the target to fall asleep.",
        "desc": "Causes the target to fall asleep.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 55,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "supersonic": {
        "num": 48,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Supersonic",
        "shortDesc": "Causes the target to become confused.",
        "desc": "Causes the target to become confused.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 55,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "sonicboom": {
        "num": 49,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sonic Boom",
        "shortDesc": "Always does 20 HP of damage.",
        "desc": "Deals 20 HP of damage to the target.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 90,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "disable": {
        "num": 50,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1,
            "reflectable": 1
        },
        "name": "Disable",
        "shortDesc": "For 4 turns, disables the target's last move used.",
        "desc": "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, if the target no longer knows the move, or if the move was a Max or G-Max Move.",
        "accuracy": 100,
        "basePower": 0,
        "type": "Normal",
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "acid": {
        "num": 51,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Acid",
        "shortDesc": "10% chance to lower the foe(s) Sp. Def by 1.",
        "desc": "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 40,
        "type": "Poison",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "ember": {
        "num": 52,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Ember",
        "shortDesc": "10% chance to burn the target.",
        "desc": "Has a 10% chance to burn the target.",
        "basePower": 40,
        "type": "Fire",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "flamethrower": {
        "num": 53,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Flamethrower",
        "shortDesc": "10% chance to burn the target.",
        "desc": "Has a 10% chance to burn the target.",
        "basePower": 90,
        "type": "Fire",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "mist": {
        "num": 54,
        "flags": {
            "snatch": 1
        },
        "name": "Mist",
        "shortDesc": "For 5 turns, protects user's party from stat drops.",
        "desc": "For 5 turns, the user and its party members are protected from having their stat stages lowered by other Pokemon. Fails if the effect is already active on the user's side.",
        "basePower": 0,
        "type": "Ice",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "watergun": {
        "num": 55,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Water Gun",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Water",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "hydropump": {
        "num": 56,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Hydro Pump",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 110,
        "type": "Water",
        "accuracy": 80,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "surf": {
        "num": 57,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Surf",
        "shortDesc": "Hits adjacent Pokemon. Double damage on Dive.",
        "desc": "Damage doubles if the target is using Dive.",
        "basePower": 90,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "icebeam": {
        "num": 58,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Ice Beam",
        "shortDesc": "10% chance to freeze the target.",
        "desc": "Has a 10% chance to freeze the target.",
        "basePower": 90,
        "type": "Ice",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "blizzard": {
        "num": 59,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Blizzard",
        "shortDesc": "10% chance to freeze foe(s). Can't miss in Snow.",
        "desc": "Has a 10% chance to freeze the target. If the weather is Snow, this move does not check accuracy.",
        "basePower": 110,
        "type": "Ice",
        "accuracy": 70,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "psybeam": {
        "num": 60,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Psybeam",
        "shortDesc": "10% chance to confuse the target.",
        "desc": "Has a 10% chance to confuse the target.",
        "basePower": 65,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "bubblebeam": {
        "num": 61,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bubble Beam",
        "shortDesc": "10% chance to lower the target's Speed by 1.",
        "desc": "Has a 10% chance to lower the target's Speed by 1 stage.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "aurorabeam": {
        "num": 62,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Aurora Beam",
        "shortDesc": "10% chance to lower the target's Attack by 1.",
        "desc": "Has a 10% chance to lower the target's Attack by 1 stage.",
        "basePower": 65,
        "type": "Ice",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "hyperbeam": {
        "num": 63,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Hyper Beam",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Normal",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "peck": {
        "num": 64,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Peck",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 35,
        "type": "Flying",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "drillpeck": {
        "num": 65,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Drill Peck",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Flying",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "submission": {
        "num": 66,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Submission",
        "shortDesc": "Has 1/4 recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 80,
        "type": "Fighting",
        "accuracy": 80,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "lowkick": {
        "num": 67,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Low Kick",
        "shortDesc": "More power the heavier the target.",
        "desc": "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
        "basePower": 1,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "counter": {
        "num": 68,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Counter",
        "shortDesc": "If hit by physical attack, returns double damage.",
        "desc": "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn.",
        "basePower": 1,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 20,
        "priority": -5,
        "category": "Physical",
        "contestType": "Tough"
    },
    "seismictoss": {
        "num": 69,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Seismic Toss",
        "shortDesc": "Does damage equal to the user's level.",
        "desc": "Deals damage to the target equal to the user's level.",
        "basePower": 1,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "strength": {
        "num": 70,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Strength",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "absorb": {
        "num": 71,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Absorb",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 20,
        "type": "Grass",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "megadrain": {
        "num": 72,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mega Drain",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 40,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "leechseed": {
        "num": 73,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Leech Seed",
        "shortDesc": "1/8 of target's HP is restored to user every turn.",
        "desc": "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3x normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Mortal Spin or Rapid Spin successfully, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "growth": {
        "num": 74,
        "flags": {
            "snatch": 1
        },
        "name": "Growth",
        "shortDesc": "Raises user's Attack and Sp. Atk by 1; 2 in Sun.",
        "desc": "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sunny Day or Desolate Land, this move raises the user's Attack and Special Attack by 2 stages. If the user is holding Utility Umbrella, this move will only raise the user's Attack and Special Attack by 1 stage, even if the weather is Sunny Day or Desolate Land.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "razorleaf": {
        "num": 75,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "slicing": 1
        },
        "name": "Razor Leaf",
        "shortDesc": "High critical hit ratio. Hits adjacent foes.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 55,
        "type": "Grass",
        "accuracy": 95,
        "critRatio": 2,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "solarbeam": {
        "num": 76,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Solar Beam",
        "shortDesc": "Charges turn 1. Hits turn 2. No charge in sunlight.",
        "desc": "This attack charges on the first turn and executes on the second. Power is halved if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.",
        "basePower": 120,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "poisonpowder": {
        "num": 77,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "powder": 1
        },
        "name": "Poison Powder",
        "shortDesc": "Poisons the target.",
        "desc": "Poisons the target.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": 75,
        "pp": 35,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "stunspore": {
        "num": 78,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "powder": 1
        },
        "name": "Stun Spore",
        "shortDesc": "Paralyzes the target.",
        "desc": "Paralyzes the target.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 75,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "sleeppowder": {
        "num": 79,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "powder": 1
        },
        "name": "Sleep Powder",
        "shortDesc": "Causes the target to fall asleep.",
        "desc": "Causes the target to fall asleep.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 75,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "petaldance": {
        "num": 80,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Petal Dance",
        "shortDesc": "Lasts 2-3 turns. Confuses the user afterwards.",
        "desc": "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
        "basePower": 120,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "stringshot": {
        "num": 81,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "String Shot",
        "shortDesc": "Lowers the foe(s) Speed by 2.",
        "desc": "Lowers the target's Speed by 2 stages.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": 95,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "dragonrage": {
        "num": 82,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Dragon Rage",
        "shortDesc": "Deals 40 HP of damage to the target.",
        "desc": "Deals 40 HP of damage to the target.",
        "basePower": 1,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "firespin": {
        "num": 83,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fire Spin",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 35,
        "type": "Fire",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "thundershock": {
        "num": 84,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Thunder Shock",
        "shortDesc": "10% chance to paralyze the target.",
        "desc": "Has a 10% chance to paralyze the target.",
        "basePower": 40,
        "type": "Electric",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "thunderbolt": {
        "num": 85,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Thunderbolt",
        "shortDesc": "10% chance to paralyze the target.",
        "desc": "Has a 10% chance to paralyze the target.",
        "basePower": 90,
        "type": "Electric",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "thunderwave": {
        "num": 86,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Thunder Wave",
        "shortDesc": "Paralyzes the target.",
        "desc": "Paralyzes the target. This move does not ignore type immunity.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": 90,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "thunder": {
        "num": 87,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Thunder",
        "shortDesc": "30% chance to paralyze. Can't miss in rain.",
        "desc": "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
        "basePower": 110,
        "type": "Electric",
        "accuracy": 70,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "rockthrow": {
        "num": 88,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Rock Throw",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 50,
        "type": "Rock",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "earthquake": {
        "num": 89,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Earthquake",
        "shortDesc": "Hits adjacent Pokemon. Double damage on Dig.",
        "desc": "Damage doubles if the target is using Dig.",
        "basePower": 100,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "fissure": {
        "num": 90,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fissure",
        "shortDesc": "OHKOs the target. Fails if user is a lower level.",
        "desc": "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
        "basePower": 1,
        "type": "Ground",
        "accuracy": 30,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "dig": {
        "num": 91,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dig",
        "shortDesc": "Digs underground turn 1, strikes turn 2.",
        "desc": "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 80,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "toxic": {
        "num": 92,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Toxic",
        "shortDesc": "Badly poisons the target. Poison types can't miss.",
        "desc": "Badly poisons the target. If a Poison-type Pokemon uses this move, the target cannot avoid the attack, even if the target is in the middle of a two-turn move.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "confusion": {
        "num": 93,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Confusion",
        "shortDesc": "10% chance to confuse the target.",
        "desc": "Has a 10% chance to confuse the target.",
        "basePower": 50,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "psychic": {
        "num": 94,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Psychic",
        "shortDesc": "10% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 90,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "hypnosis": {
        "num": 95,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Hypnosis",
        "shortDesc": "Causes the target to fall asleep.",
        "desc": "Causes the target to fall asleep.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 60,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "meditate": {
        "num": 96,
        "flags": {
            "snatch": 1
        },
        "name": "Meditate",
        "shortDesc": "Raises the user's Attack by 1.",
        "desc": "Raises the user's Attack by 1 stage.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "agility": {
        "num": 97,
        "flags": {
            "snatch": 1
        },
        "name": "Agility",
        "shortDesc": "Raises the user's Speed by 2.",
        "desc": "Raises the user's Speed by 2 stages.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "quickattack": {
        "num": 98,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Quick Attack",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 30,
        "priority": 1,
        "category": "Physical",
        "contestType": "Cool"
    },
    "rage": {
        "num": 99,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Rage",
        "shortDesc": "Raises the user's Attack by 1 if hit during use.",
        "desc": "Once this move is successfully used, the user's Attack is raised by 1 stage every time it is hit by another Pokemon's attack as long as this move is chosen for use.",
        "basePower": 20,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "teleport": {
        "num": 100,
        "flags": {},
        "name": "Teleport",
        "shortDesc": "User switches out.",
        "desc": "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 20,
        "priority": -6,
        "category": "Status",
        "contestType": "Cool"
    },
    "nightshade": {
        "num": 101,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Night Shade",
        "shortDesc": "Does damage equal to the user's level.",
        "desc": "Deals damage to the target equal to the user's level.",
        "basePower": 1,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "mimic": {
        "num": 102,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Mimic",
        "shortDesc": "The last move the target used replaces this one.",
        "desc": "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Assist, Behemoth Bash, Behemoth Blade, Belch, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Hold Hands, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Sketch, Sleep Talk, Struggle, Tera Starstorm, Transform, or Wicked Torque.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "screech": {
        "num": 103,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Screech",
        "shortDesc": "Lowers the target's Defense by 2.",
        "desc": "Lowers the target's Defense by 2 stages.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 85,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "doubleteam": {
        "num": 104,
        "flags": {
            "snatch": 1
        },
        "name": "Double Team",
        "shortDesc": "Raises the user's evasiveness by 1.",
        "desc": "Raises the user's evasiveness by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "recover": {
        "num": 105,
        "flags": {
            "snatch": 1
        },
        "name": "Recover",
        "shortDesc": "Heals the user by 50% of its max HP.",
        "desc": "The user restores 1/2 of its maximum HP, rounded half up.",
        "pp": 5,
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "harden": {
        "num": 106,
        "flags": {
            "snatch": 1
        },
        "name": "Harden",
        "shortDesc": "Raises the user's Defense by 1.",
        "desc": "Raises the user's Defense by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "minimize": {
        "num": 107,
        "flags": {
            "snatch": 1
        },
        "name": "Minimize",
        "shortDesc": "Raises the user's evasiveness by 2.",
        "desc": "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Heavy Slam, Malicious Moonsault, Steamroller, and Stomp will not check accuracy and have their damage doubled if used against the user while it is active.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "smokescreen": {
        "num": 108,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Smokescreen",
        "shortDesc": "Lowers the target's accuracy by 1.",
        "desc": "Lowers the target's accuracy by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 1,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "confuseray": {
        "num": 109,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Confuse Ray",
        "shortDesc": "Confuses the target.",
        "desc": "Causes the target to become confused.",
        "basePower": 0,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "withdraw": {
        "num": 110,
        "flags": {
            "snatch": 1
        },
        "name": "Withdraw",
        "shortDesc": "Raises the user's Defense by 1.",
        "desc": "Raises the user's Defense by 1 stage.",
        "basePower": 0,
        "type": "Water",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "defensecurl": {
        "num": 111,
        "flags": {
            "snatch": 1
        },
        "name": "Defense Curl",
        "shortDesc": "Raises the user's Defense by 1.",
        "desc": "Raises the user's Defense by 1 stage. As long as the user remains active, the power of the user's Ice Ball and Rollout will be doubled (this effect is not stackable).",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "barrier": {
        "num": 112,
        "flags": {
            "snatch": 1
        },
        "name": "Barrier",
        "shortDesc": "Raises the user's Defense by 2.",
        "desc": "Raises the user's Defense by 2 stages.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "lightscreen": {
        "num": 113,
        "flags": {
            "snatch": 1
        },
        "name": "Light Screen",
        "shortDesc": "For 5 turns, special damage to allies is halved.",
        "desc": "For 5 turns, the user and its party members take 0.5x damage from special attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "haze": {
        "num": 114,
        "flags": {
            "bypasssub": 1
        },
        "name": "Haze",
        "shortDesc": "Eliminates all stat changes.",
        "desc": "Resets the stat stages of all active Pokemon to 0.",
        "basePower": 0,
        "type": "Ice",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "reflect": {
        "num": 115,
        "flags": {
            "snatch": 1
        },
        "name": "Reflect",
        "shortDesc": "For 5 turns, physical damage to allies is halved.",
        "desc": "For 5 turns, the user and its party members take 0.5x damage from physical attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "focusenergy": {
        "num": 116,
        "flags": {
            "snatch": 1
        },
        "name": "Focus Energy",
        "shortDesc": "Raises the user's critical hit ratio by 2.",
        "desc": "Raises the user's chance for a critical hit by 2 stages. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "bide": {
        "num": 117,
        "flags": {
            "protect": 1,
            "contact": 1
        },
        "name": "Bide",
        "shortDesc": "Waits 2 turns; deals double the damage taken.",
        "desc": "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost to attacks during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move's use, the effect ends. This move does not check accuracy and does not ignore type immunity.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 1,
        "category": "Physical",
        "contestType": "Tough"
    },
    "metronome": {
        "num": 118,
        "flags": {},
        "name": "Metronome",
        "shortDesc": "Picks a random move.",
        "desc": "A random move is selected for use, other than After You, Apple Acid, Armor Cannon, Assist, Astral Barrage, Aura Wheel, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Blazing Torque, Body Press, Branch Poke, Breaking Swipe, Celebrate, Chatter, Chilling Water, Chilly Reception, Clangorous Soul, Collision Course, Combat Torque, Comeuppance, Copycat, Counter, Covet, Crafty Shield, Decorate, Destiny Bond, Detect, Diamond Storm, Doodle, Double Iron Bash, Double Shock, Dragon Ascent, Dragon Energy, Drum Beating, Dynamax Cannon, Electro Drift, Endure, Eternabeam, False Surrender, Feint, Fiery Wrath, Fillet Away, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Freezing Glare, Glacial Lance, Grav Apple, Helping Hand, Hold Hands, Hyper Drill, Hyperspace Fury, Hyperspace Hole, Ice Burn, Instruct, Jet Punch, Jungle Healing, King's Shield, Life Dew, Light of Ruin, Magical Torque, Make It Rain, Mat Block, Me First, Meteor Assault, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Moongeist Beam, Nature Power, Nature's Madness, Noxious Torque, Obstruct, Order Up, Origin Pulse, Overdrive, Photon Geyser, Plasma Fists, Population Bomb, Pounce, Power Shift, Precipice Blades, Protect, Pyro Ball, Quash, Quick Guard, Rage Fist, Rage Powder, Raging Bull, Raging Fury, Relic Song, Revival Blessing, Ruination, Salt Cure, Secret Sword, Shed Tail, Shell Trap, Silk Trap, Sketch, Sleep Talk, Snap Trap, Snarl, Snatch, Snore, Snowscape, Spectral Thief, Spicy Extract, Spiky Shield, Spirit Break, Spotlight, Springtide Storm, Steam Eruption, Steel Beam, Strange Steam, Struggle, Sunsteel Strike, Surging Strikes, Switcheroo, Techno Blast, Tera Starstorm, Thief, Thousand Arrows, Thousand Waves, Thunder Cage, Thunderous Kick, Tidy Up, Trailblaze, Transform, Trick, Twin Beam, V-create, Wicked Blow, Wicked Torque, or Wide Guard.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "mirrormove": {
        "num": 119,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mirror Move",
        "shortDesc": "User uses the target's last used move against it.",
        "desc": "The user uses the last move used by the target. The copied move is used against that target, if possible. Fails if the target has not made a move, or if the last move used cannot be copied by this move.",
        "basePower": 0,
        "type": "Flying",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "selfdestruct": {
        "num": 120,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Self-Destruct",
        "shortDesc": "Hits adjacent Pokemon. The user faints.",
        "desc": "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
        "basePower": 200,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "eggbomb": {
        "num": 121,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Egg Bomb",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 100,
        "type": "Normal",
        "accuracy": 75,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "lick": {
        "num": 122,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Lick",
        "shortDesc": "30% chance to paralyze the target.",
        "desc": "Has a 30% chance to paralyze the target.",
        "basePower": 30,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "smog": {
        "num": 123,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Smog",
        "shortDesc": "40% chance to poison the target.",
        "desc": "Has a 40% chance to poison the target.",
        "basePower": 30,
        "type": "Poison",
        "accuracy": 70,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "sludge": {
        "num": 124,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sludge",
        "shortDesc": "30% chance to poison the target.",
        "desc": "Has a 30% chance to poison the target.",
        "basePower": 65,
        "type": "Poison",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "boneclub": {
        "num": 125,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bone Club",
        "shortDesc": "10% chance to make the target flinch.",
        "desc": "Has a 10% chance to make the target flinch.",
        "basePower": 65,
        "type": "Ground",
        "accuracy": 85,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "fireblast": {
        "num": 126,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fire Blast",
        "shortDesc": "10% chance to burn the target.",
        "desc": "Has a 10% chance to burn the target.",
        "basePower": 110,
        "type": "Fire",
        "accuracy": 85,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "waterfall": {
        "num": 127,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Waterfall",
        "shortDesc": "20% chance to make the target flinch.",
        "desc": "Has a 20% chance to make the target flinch.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "clamp": {
        "num": 128,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Clamp",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 35,
        "type": "Water",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "swift": {
        "num": 129,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Swift",
        "shortDesc": "This move does not check accuracy. Hits foes.",
        "desc": "This move does not check accuracy.",
        "basePower": 60,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "skullbash": {
        "num": 130,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Skull Bash",
        "shortDesc": "Raises user's Defense by 1 on turn 1. Hits turn 2.",
        "desc": "This attack charges on the first turn and executes on the second. Raises the user's Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 130,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "spikecannon": {
        "num": 131,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Spike Cannon",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 20,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "constrict": {
        "num": 132,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Constrict",
        "shortDesc": "10% chance to lower the target's Speed by 1.",
        "desc": "Has a 10% chance to lower the target's Speed by 1 stage.",
        "basePower": 10,
        "type": "Normal",
        "accuracy": 100,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "amnesia": {
        "num": 133,
        "flags": {
            "snatch": 1
        },
        "name": "Amnesia",
        "shortDesc": "Raises the user's Sp. Def by 2.",
        "desc": "Raises the user's Special Defense by 2 stages.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "kinesis": {
        "num": 134,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Kinesis",
        "shortDesc": "Lowers the target's accuracy by 1.",
        "desc": "Lowers the target's accuracy by 1 stage.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 80,
        "pp": 1,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "softboiled": {
        "num": 135,
        "flags": {
            "snatch": 1
        },
        "name": "Soft-Boiled",
        "shortDesc": "Heals the user by 50% of its max HP.",
        "desc": "The user restores 1/2 of its maximum HP, rounded half up.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "highjumpkick": {
        "num": 136,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "High Jump Kick",
        "shortDesc": "User is hurt by 50% of its max HP if it misses.",
        "desc": "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
        "basePower": 130,
        "type": "Fighting",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "glare": {
        "num": 137,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Glare",
        "shortDesc": "Paralyzes the target.",
        "desc": "Paralyzes the target.",
        "accuracy": 100,
        "basePower": 0,
        "type": "Normal",
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "dreameater": {
        "num": 138,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Dream Eater",
        "shortDesc": "User gains 1/2 HP inflicted. Sleeping target only.",
        "desc": "The target is unaffected by this move unless it is asleep. The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 100,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "poisongas": {
        "num": 139,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Poison Gas",
        "shortDesc": "Poisons the foe(s).",
        "desc": "Poisons the target.",
        "accuracy": 90,
        "basePower": 0,
        "type": "Poison",
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "barrage": {
        "num": 140,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Barrage",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 15,
        "type": "Normal",
        "accuracy": 85,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "leechlife": {
        "num": 141,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Leech Life",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 80,
        "type": "Bug",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "lovelykiss": {
        "num": 142,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Lovely Kiss",
        "shortDesc": "Causes the target to fall asleep.",
        "desc": "Causes the target to fall asleep.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 75,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "skyattack": {
        "num": 143,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sky Attack",
        "shortDesc": "Charges, then hits turn 2. 30% flinch. High crit.",
        "desc": "Has a 30% chance to make the target flinch and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 140,
        "type": "Flying",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "critRatio": 2,
        "contestType": "Cool"
    },
    "transform": {
        "num": 144,
        "flags": {},
        "name": "Transform",
        "shortDesc": "Copies target's stats, moves, types, and Ability.",
        "desc": "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, gender, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP, with a maximum of 5 PP each. The user can no longer change formes if it would have the ability to do so. This move fails if it hits a substitute, if either the user or the target is already transformed, or if either is behind an Illusion.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "bubble": {
        "num": 145,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bubble",
        "shortDesc": "10% chance to lower the foe(s) Speed by 1.",
        "desc": "Has a 10% chance to lower the target's Speed by 1 stage.",
        "basePower": 40,
        "type": "Water",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "dizzypunch": {
        "num": 146,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Dizzy Punch",
        "shortDesc": "20% chance to confuse the target.",
        "desc": "Has a 20% chance to confuse the target.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "spore": {
        "num": 147,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "powder": 1
        },
        "name": "Spore",
        "shortDesc": "Causes the target to fall asleep.",
        "desc": "Causes the target to fall asleep.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "flash": {
        "num": 148,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Flash",
        "shortDesc": "Lowers the target's accuracy by 1.",
        "desc": "Lowers the target's accuracy by 1 stage.",
        "basePower": 50,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "psywave": {
        "num": 149,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Psywave",
        "shortDesc": "Random damage equal to 0.5x-1.5x user's level.",
        "desc": "Deals damage to the target equal to (user's level) * (X + 50) / 100, where X is a random number from 0 to 100, rounded down, but not less than 1 HP.",
        "basePower": 1,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "splash": {
        "num": 150,
        "flags": {},
        "name": "Splash",
        "shortDesc": "No competitive use.",
        "desc": "No competitive use.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "acidarmor": {
        "num": 151,
        "flags": {
            "snatch": 1
        },
        "name": "Acid Armor",
        "shortDesc": "Raises the user's Defense by 2.",
        "desc": "Raises the user's Defense by 2 stages.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "crabhammer": {
        "num": 152,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Crabhammer",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 100,
        "type": "Water",
        "accuracy": 90,
        "critRatio": 2,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "explosion": {
        "num": 153,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Explosion",
        "shortDesc": "Hits adjacent Pokemon. The user faints.",
        "desc": "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
        "basePower": 250,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "furyswipes": {
        "num": 154,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Fury Swipes",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 18,
        "type": "Normal",
        "accuracy": 80,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "bonemerang": {
        "num": 155,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bonemerang",
        "shortDesc": "Hits 2 times in one turn.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 50,
        "type": "Ground",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "rest": {
        "num": 156,
        "flags": {
            "snatch": 1
        },
        "name": "Rest",
        "shortDesc": "User sleeps 2 turns and restores HP and status.",
        "desc": "The user falls asleep for the next two turns and restores all of its HP, curing itself of any non-volatile status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "rockslide": {
        "num": 157,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Rock Slide",
        "shortDesc": "30% chance to make the foe(s) flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 75,
        "type": "Rock",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "hyperfang": {
        "num": 158,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Hyper Fang",
        "shortDesc": "10% chance to make the target flinch.",
        "desc": "Has a 10% chance to make the target flinch.",
        "basePower": 80,
        "type": "Normal",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "sharpen": {
        "num": 159,
        "flags": {
            "snatch": 1
        },
        "name": "Sharpen",
        "shortDesc": "Raises the user's Attack by 1.",
        "desc": "Raises the user's Attack by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "conversion": {
        "num": 160,
        "flags": {
            "snatch": 1
        },
        "name": "Conversion",
        "shortDesc": "Changes user's type to match its first move.",
        "desc": "The user's type changes to match the original type of the move in its first move slot. Fails if the user cannot change its type, or if the type is one of the user's current types.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "triattack": {
        "num": 161,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Tri Attack",
        "shortDesc": "20% chance to paralyze or burn or freeze target.",
        "desc": "Has a 20% chance to either burn, freeze, or paralyze the target.",
        "basePower": 80,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "superfang": {
        "num": 162,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Super Fang",
        "shortDesc": "Does damage equal to 1/2 target's current HP.",
        "desc": "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "slash": {
        "num": 163,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Slash",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "substitute": {
        "num": 164,
        "flags": {
            "snatch": 1
        },
        "name": "Substitute",
        "shortDesc": "User takes 1/4 its max HP to put in a substitute.",
        "desc": "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, or if the user switches out or faints. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. Sound-based moves and Pokemon with the Infiltrator Ability ignore substitutes. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "struggle": {
        "num": 165,
        "flags": {
            "protect": 1,
            "contact": 1
        },
        "name": "Struggle",
        "shortDesc": "User loses 1/4 of its max HP.",
        "desc": "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
        "accuracy": true,
        "basePower": 50,
        "type": "Normal",
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "sketch": {
        "num": 166,
        "flags": {
            "bypasssub": 1
        },
        "name": "Sketch",
        "shortDesc": "Permanently copies the last move target used.",
        "desc": "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Chatter, Sketch, Struggle, or any move the user knows.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "triplekick": {
        "num": 167,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Triple Kick",
        "shortDesc": "Hits 3 times. Each hit can miss, but power rises.",
        "desc": "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
        "basePower": 10,
        "type": "Fighting",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "thief": {
        "num": 168,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Thief",
        "shortDesc": "If the user has no item, it steals the target's.",
        "desc": "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
        "basePower": 60,
        "type": "Dark",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "spiderweb": {
        "num": 169,
        "flags": {
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Spider Web",
        "shortDesc": "Prevents the target from switching out.",
        "desc": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "mindreader": {
        "num": 170,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mind Reader",
        "shortDesc": "User's next move will not miss the target.",
        "desc": "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "nightmare": {
        "num": 171,
        "flags": {
            "mirror": 1
        },
        "name": "Nightmare",
        "shortDesc": "A sleeping target is hurt by 1/4 max HP per turn.",
        "desc": "Causes the target to lose 1/4 of its maximum HP, rounded down, at the end of each turn as long as it is asleep. This move does not affect the target unless it is asleep. The effect ends when the target wakes up, even if it falls asleep again in the same turn.",
        "basePower": 0,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "flamewheel": {
        "num": 172,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "defrost": 1
        },
        "name": "Flame Wheel",
        "shortDesc": "10% chance to burn the target. Thaws user.",
        "desc": "Has a 10% chance to burn the target.",
        "basePower": 60,
        "type": "Fire",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "snore": {
        "num": 173,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Snore",
        "shortDesc": "User must be asleep. 30% chance to flinch target.",
        "desc": "Has a 30% chance to make the target flinch. Fails if the user is not asleep.",
        "basePower": 50,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "curse": {
        "num": 174,
        "flags": {
            "bypasssub": 1
        },
        "name": "Curse",
        "shortDesc": "Curses if Ghost, else -1 Spe, +1 Atk, +1 Def.",
        "desc": "If the user is not a Ghost type, lowers the user's Speed by 1 stage and raises the user's Attack and Defense by 1 stage. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if there is no target or if the target is already affected.",
        "basePower": 0,
        "type": "Ghost",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "flail": {
        "num": 175,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Flail",
        "shortDesc": "More power the less HP the user has left.",
        "desc": "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "conversion2": {
        "num": 176,
        "flags": {
            "bypasssub": 1
        },
        "name": "Conversion 2",
        "shortDesc": "Changes user's type to resist target's last move.",
        "desc": "The user's type changes to match a type that resists or is immune to the type of the last move used by the target, but not either of its current types. The determined type of the move is used rather than the original type. Fails if the target has not made a move, if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "aeroblast": {
        "num": 177,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Aeroblast",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 100,
        "type": "Flying",
        "accuracy": 95,
        "critRatio": 2,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "cottonspore": {
        "num": 178,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "powder": 1
        },
        "name": "Cotton Spore",
        "shortDesc": "Lowers the target's Speed by 2.",
        "desc": "Lowers the target's Speed by 2 stages.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "reversal": {
        "num": 179,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Reversal",
        "shortDesc": "More power the less HP the user has left.",
        "desc": "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
        "basePower": 1,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "spite": {
        "num": 180,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "bypasssub": 1
        },
        "name": "Spite",
        "shortDesc": "Lowers the PP of the target's last move by 4.",
        "desc": "Causes the target's last move used to lose 4 PP. Fails if the target has not made a move, if the move has 0 PP, or if it no longer knows the move.",
        "basePower": 0,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "powdersnow": {
        "num": 181,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Powder Snow",
        "shortDesc": "10% chance to freeze the foe(s).",
        "desc": "Has a 10% chance to freeze the target.",
        "basePower": 40,
        "type": "Ice",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "protect": {
        "num": 182,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Protect",
        "shortDesc": "Prevents moves from affecting the user this turn.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Cute"
    },
    "machpunch": {
        "num": 183,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Mach Punch",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 30,
        "priority": 1,
        "category": "Physical",
        "contestType": "Cool"
    },
    "scaryface": {
        "num": 184,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Scary Face",
        "shortDesc": "Lowers the target's Speed by 2.",
        "desc": "Lowers the target's Speed by 2 stages.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "feintattack": {
        "num": 185,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Feint Attack",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 60,
        "type": "Dark",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "sweetkiss": {
        "num": 186,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Sweet Kiss",
        "shortDesc": "Causes the target to become confused.",
        "desc": "Causes the target to become confused.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": 75,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "bellydrum": {
        "num": 187,
        "flags": {
            "snatch": 1
        },
        "name": "Belly Drum",
        "shortDesc": "User loses 50% max HP. Maximizes Attack.",
        "desc": "Raises the user's Attack by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack stat stage is 6.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "sludgebomb": {
        "num": 188,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Sludge Bomb",
        "shortDesc": "30% chance to poison the target.",
        "desc": "Has a 30% chance to poison the target.",
        "basePower": 90,
        "type": "Poison",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "mudslap": {
        "num": 189,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mud-Slap",
        "shortDesc": "100% chance to lower the target's accuracy by 1.",
        "desc": "Has a 100% chance to lower the target's accuracy by 1 stage.",
        "basePower": 20,
        "type": "Ground",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "octazooka": {
        "num": 190,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Octazooka",
        "shortDesc": "50% chance to lower the target's accuracy by 1.",
        "desc": "Has a 50% chance to lower the target's accuracy by 1 stage.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "spikes": {
        "num": 191,
        "flags": {
            "reflectable": 1
        },
        "name": "Spikes",
        "shortDesc": "Hurts grounded foes on switch-in. Max 3 layers.",
        "desc": "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
        "basePower": 0,
        "type": "Ground",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "zapcannon": {
        "num": 192,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1,
            "pulse": 1
        },
        "name": "Zap Cannon",
        "shortDesc": "100% chance to paralyze the target.",
        "desc": "Has a 100% chance to paralyze the target.",
        "basePower": 120,
        "type": "Electric",
        "accuracy": 50,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "foresight": {
        "num": 193,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "bypasssub": 1
        },
        "name": "Foresight",
        "shortDesc": "Fighting, Normal hit Ghost. Evasiveness ignored.",
        "desc": "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Miracle Eye or Odor Sleuth.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "destinybond": {
        "num": 194,
        "flags": {
            "bypasssub": 1
        },
        "name": "Destiny Bond",
        "shortDesc": "If an opponent knocks out the user, it also faints.",
        "desc": "Until the user's next move, if an opposing Pokemon's attack knocks the user out, that Pokemon faints as well, unless the attack was Doom Desire or Future Sight. Fails if the user used this move successfully as its last move, disregarding moves used through the Dancer Ability.",
        "basePower": 0,
        "type": "Ghost",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "perishsong": {
        "num": 195,
        "flags": {
            "sound": 1
        },
        "name": "Perish Song",
        "shortDesc": "All active Pokemon will faint in 3 turns.",
        "desc": "Each active Pokemon receives a perish count of 4 if it doesn't already have a perish count. At the end of each turn including the turn used, the perish count of all active Pokemon lowers by 1 and Pokemon faint if the number reaches 0. The perish count is removed from Pokemon that switch out. If a Pokemon uses Baton Pass while it has a perish count, the replacement will gain the perish count and continue to count down.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "icywind": {
        "num": 196,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Icy Wind",
        "shortDesc": "100% chance to lower the foe(s) Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 55,
        "type": "Ice",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "detect": {
        "num": 197,
        "flags": {},
        "name": "Detect",
        "shortDesc": "Prevents moves from affecting the user this turn.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 5,
        "priority": 4,
        "category": "Status",
        "contestType": "Cool"
    },
    "bonerush": {
        "num": 198,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bone Rush",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 25,
        "type": "Ground",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "lockon": {
        "num": 199,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Lock-On",
        "shortDesc": "User's next move will not miss the target.",
        "desc": "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "outrage": {
        "num": 200,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Outrage",
        "shortDesc": "Lasts 2-3 turns. Confuses the user afterwards.",
        "desc": "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
        "basePower": 120,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "sandstorm": {
        "num": 201,
        "flags": {
            "wind": 1
        },
        "name": "Sandstorm",
        "shortDesc": "For 5 turns, a sandstorm rages. Rock: 1.5x SpD.",
        "desc": "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Magic Guard, Overcoat, Sand Force, Sand Rush, or Sand Veil Abilities. During the effect, the Special Defense of Rock-type Pokemon is multiplied by 1.5 when taking damage from a special attack. Lasts for 8 turns if the user is holding Smooth Rock. Fails if the current weather is Sandstorm.",
        "basePower": 0,
        "type": "Rock",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "gigadrain": {
        "num": 202,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Giga Drain",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 75,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "endure": {
        "num": 203,
        "flags": {},
        "name": "Endure",
        "shortDesc": "User survives attacks this turn with at least 1 HP.",
        "desc": "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Tough"
    },
    "charm": {
        "num": 204,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Charm",
        "shortDesc": "Lowers the target's Attack by 2.",
        "desc": "Lowers the target's Attack by 2 stages.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "rollout": {
        "num": 205,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Rollout",
        "shortDesc": "Power doubles with each hit. Repeats for 5 turns.",
        "desc": "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
        "basePower": 30,
        "type": "Rock",
        "accuracy": 90,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "falseswipe": {
        "num": 206,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "False Swipe",
        "shortDesc": "Always leaves the target with at least 1 HP.",
        "desc": "Leaves the target with at least 1 HP.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "swagger": {
        "num": 207,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Swagger",
        "shortDesc": "Raises the target's Attack by 2 and confuses it.",
        "desc": "Raises the target's Attack by 2 stages and confuses it.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "milkdrink": {
        "num": 208,
        "flags": {
            "snatch": 1
        },
        "name": "Milk Drink",
        "shortDesc": "Heals the user by 50% of its max HP.",
        "desc": "The user restores 1/2 of its maximum HP, rounded half up.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "spark": {
        "num": 209,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Spark",
        "shortDesc": "30% chance to paralyze the target.",
        "desc": "Has a 30% chance to paralyze the target.",
        "basePower": 65,
        "type": "Electric",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "furycutter": {
        "num": 210,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Fury Cutter",
        "shortDesc": "Power doubles with each hit, up to 160.",
        "desc": "Power doubles with each successful hit, up to a maximum of 160 power. The power is reset if this move misses or another move is used.",
        "basePower": 40,
        "type": "Bug",
        "accuracy": 95,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "steelwing": {
        "num": 211,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Steel Wing",
        "shortDesc": "10% chance to raise the user's Defense by 1.",
        "desc": "Has a 10% chance to raise the user's Defense by 1 stage.",
        "basePower": 70,
        "type": "Steel",
        "accuracy": 90,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "meanlook": {
        "num": 212,
        "flags": {
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Mean Look",
        "shortDesc": "Prevents the target from switching out.",
        "desc": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "attract": {
        "num": 213,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "bypasssub": 1
        },
        "name": "Attract",
        "shortDesc": "A target of the opposite gender gets infatuated.",
        "desc": "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "sleeptalk": {
        "num": 214,
        "flags": {},
        "name": "Sleep Talk",
        "shortDesc": "User must be asleep. Uses another known move.",
        "desc": "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, Wicked Torque, or any two-turn move.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "healbell": {
        "num": 215,
        "flags": {
            "snatch": 1,
            "sound": 1
        },
        "name": "Heal Bell",
        "shortDesc": "Cures the user's party of all status conditions.",
        "desc": "Every Pokemon in the user's party is cured of its non-volatile status condition. Active Pokemon with the Soundproof Ability are not cured, unless they are the user.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "return": {
        "num": 216,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Return",
        "shortDesc": "Max 102 power at maximum Happiness.",
        "desc": "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "present": {
        "num": 217,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Present",
        "shortDesc": "40, 80, 120 power, or heals target 1/4 max HP.",
        "desc": "If this move is successful, it deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "frustration": {
        "num": 218,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Frustration",
        "shortDesc": "Max 102 power at minimum Happiness.",
        "desc": "Power is equal to the greater of ((255 - user's Happiness) * 2/5), rounded down, or 1.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "safeguard": {
        "num": 219,
        "flags": {
            "snatch": 1
        },
        "name": "Safeguard",
        "shortDesc": "For 5 turns, protects user's party from status.",
        "desc": "For 5 turns, the user and its party members cannot have non-volatile status conditions or confusion inflicted on them by other Pokemon. Pokemon on the user's side cannot become affected by Yawn but can fall asleep from its effect. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 25,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "painsplit": {
        "num": 220,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Pain Split",
        "shortDesc": "Shares HP of user and target equally.",
        "desc": "The user and the target's HP become the average of their current HP, rounded down, but not more than the maximum HP of either one.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "sacredfire": {
        "num": 221,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Sacred Fire",
        "shortDesc": "50% chance to burn the target. Thaws user.",
        "desc": "Has a 50% chance to burn the target.",
        "basePower": 100,
        "type": "Fire",
        "accuracy": 95,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "magnitude": {
        "num": 222,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Magnitude",
        "shortDesc": "Hits adjacent Pokemon. Power varies; 2x on Dig.",
        "desc": "The power of this move varies; 5% chances for 10 and 150 power, 10% chances for 30 and 110 power, 20% chances for 50 and 90 power, and 30% chance for 70 power. Damage doubles if the target is using Dig.",
        "basePower": 1,
        "type": "Ground",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "dynamicpunch": {
        "num": 223,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Dynamic Punch",
        "shortDesc": "100% chance to confuse the target.",
        "desc": "Has a 100% chance to confuse the target.",
        "basePower": 100,
        "type": "Fighting",
        "accuracy": 50,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "megahorn": {
        "num": 224,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Megahorn",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 120,
        "type": "Bug",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "dragonbreath": {
        "num": 225,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Dragon Breath",
        "shortDesc": "30% chance to paralyze the target.",
        "desc": "Has a 30% chance to paralyze the target.",
        "basePower": 60,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "batonpass": {
        "num": 226,
        "flags": {},
        "name": "Baton Pass",
        "shortDesc": "User switches, passing stat changes and more.",
        "desc": "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes, confusion, and certain move effects transferred to it.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "encore": {
        "num": 227,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "bypasssub": 1
        },
        "name": "Encore",
        "shortDesc": "Target repeats its last move for its next 3 turns.",
        "desc": "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Assist, Blazing Torque, Combat Torque, Copycat, Dynamax Cannon, Encore, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Sketch, Sleep Talk, Struggle, Transform, or Wicked Torque.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "pursuit": {
        "num": 228,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Pursuit",
        "shortDesc": "If a foe is switching out, hits it at 2x power.",
        "desc": "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
        "basePower": 40,
        "type": "Dark",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "rapidspin": {
        "num": 229,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Rapid Spin",
        "shortDesc": "Free user from hazards/bind/Leech Seed; +1 Spe.",
        "desc": "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to raise the user's Speed by 1 stage.",
        "basePower": 50,
        "type": "Normal",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "sweetscent": {
        "num": 230,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Sweet Scent",
        "shortDesc": "Lowers the foe(s) evasiveness by 2.",
        "desc": "Lowers the target's evasiveness by 2 stages.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "irontail": {
        "num": 231,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Iron Tail",
        "shortDesc": "30% chance to lower the target's Defense by 1.",
        "desc": "Has a 30% chance to lower the target's Defense by 1 stage.",
        "basePower": 100,
        "type": "Steel",
        "accuracy": 75,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "metalclaw": {
        "num": 232,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Metal Claw",
        "shortDesc": "10% chance to raise the user's Attack by 1.",
        "desc": "Has a 10% chance to raise the user's Attack by 1 stage.",
        "basePower": 50,
        "type": "Steel",
        "accuracy": 95,
        "pp": 35,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "vitalthrow": {
        "num": 233,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Vital Throw",
        "shortDesc": "This move does not check accuracy. Goes last.",
        "desc": "This move does not check accuracy.",
        "basePower": 70,
        "type": "Fighting",
        "accuracy": true,
        "pp": 10,
        "priority": -1,
        "category": "Physical",
        "contestType": "Cool"
    },
    "morningsun": {
        "num": 234,
        "flags": {
            "snatch": 1
        },
        "name": "Morning Sun",
        "shortDesc": "Heals the user by a weather-dependent amount.",
        "desc": "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow, all rounded half down.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "synthesis": {
        "num": 235,
        "flags": {
            "snatch": 1
        },
        "name": "Synthesis",
        "shortDesc": "Heals the user by a weather-dependent amount.",
        "desc": "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow, all rounded half down.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "moonlight": {
        "num": 236,
        "flags": {
            "snatch": 1
        },
        "name": "Moonlight",
        "shortDesc": "Heals the user by a weather-dependent amount.",
        "desc": "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect or if the user is holding Utility Umbrella, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Primordial Sea, Rain Dance, Sandstorm, or Snow, all rounded half down.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "hiddenpower": {
        "num": 237,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Hidden Power",
        "shortDesc": "Varies in type based on the user's IVs.",
        "desc": "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
        "basePower": 60,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "crosschop": {
        "num": 238,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Cross Chop",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 100,
        "type": "Fighting",
        "accuracy": 80,
        "critRatio": 2,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "twister": {
        "num": 239,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Twister",
        "shortDesc": "20% chance to make the foe(s) flinch.",
        "desc": "Has a 20% chance to make the target flinch. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
        "basePower": 40,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "raindance": {
        "num": 240,
        "flags": {},
        "name": "Rain Dance",
        "shortDesc": "For 5 turns, heavy rain powers Water moves.",
        "desc": "For 5 turns, the weather becomes Rain Dance. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Rain Dance.",
        "basePower": 0,
        "type": "Water",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "sunnyday": {
        "num": 241,
        "flags": {},
        "name": "Sunny Day",
        "shortDesc": "For 5 turns, intense sunlight powers Fire moves.",
        "desc": "For 5 turns, the weather becomes Sunny Day. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Heat Rock. Fails if the current weather is Sunny Day.",
        "basePower": 0,
        "type": "Fire",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "crunch": {
        "num": 242,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Crunch",
        "shortDesc": "20% chance to lower the target's Defense by 1.",
        "desc": "Has a 20% chance to lower the target's Defense by 1 stage.",
        "basePower": 80,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "mirrorcoat": {
        "num": 243,
        "flags": {
            "protect": 1
        },
        "name": "Mirror Coat",
        "shortDesc": "If hit by special attack, returns double damage.",
        "desc": "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn.",
        "basePower": 1,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 20,
        "priority": -5,
        "category": "Special",
        "contestType": "Beauty"
    },
    "psychup": {
        "num": 244,
        "flags": {
            "bypasssub": 1,
            "snatch": 1
        },
        "name": "Psych Up",
        "shortDesc": "Copies the target's current stat stages.",
        "desc": "The user copies all of the target's current stat stage changes.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "extremespeed": {
        "num": 245,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Extreme Speed",
        "shortDesc": "Nearly always goes first.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 2,
        "category": "Physical",
        "contestType": "Cool"
    },
    "ancientpower": {
        "num": 246,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Ancient Power",
        "shortDesc": "10% chance to raise all stats by 1 (not acc/eva).",
        "desc": "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
        "basePower": 60,
        "type": "Rock",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "shadowball": {
        "num": 247,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Shadow Ball",
        "shortDesc": "20% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 20% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 80,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "futuresight": {
        "num": 248,
        "flags": {},
        "name": "Future Sight",
        "shortDesc": "Hits two turns after being used.",
        "desc": "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Doom Desire is already in effect for the target's position.",
        "basePower": 120,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "rocksmash": {
        "num": 249,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Rock Smash",
        "shortDesc": "50% chance to lower the target's Defense by 1.",
        "desc": "Has a 50% chance to lower the target's Defense by 1 stage.",
        "basePower": 40,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "whirlpool": {
        "num": 250,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Whirlpool",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 35,
        "type": "Water",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "beatup": {
        "num": 251,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Beat Up",
        "shortDesc": "All healthy allies aid in damaging the target.",
        "desc": "Hits one time for the user and one time for each unfainted Pokemon without a non-volatile status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokemon's base Attack; each hit is considered to come from the user.",
        "basePower": 1,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "fakeout": {
        "num": 252,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Fake Out",
        "shortDesc": "Hits first. First turn out only. 100% flinch chance.",
        "desc": "Has a 100% chance to make the target flinch. Fails unless it is the user's first turn on the field.",
        "priority": 3,
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "category": "Physical",
        "contestType": "Cute"
    },
    "uproar": {
        "num": 253,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Uproar",
        "shortDesc": "Lasts 3 turns. Active Pokemon cannot fall asleep.",
        "desc": "The user spends three turns locked into this move. This move targets an opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
        "basePower": 90,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "stockpile": {
        "num": 254,
        "flags": {
            "snatch": 1
        },
        "name": "Stockpile",
        "shortDesc": "Raises user's Defense, Sp. Def by 1. Max 3 uses.",
        "desc": "Raises the user's Defense and Special Defense by 1 stage. The user's Stockpile count increases by 1. Fails if the user's Stockpile count is 3. The user's Stockpile count is reset to 0 when it is no longer active.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "spitup": {
        "num": 255,
        "flags": {
            "protect": 1
        },
        "name": "Spit Up",
        "shortDesc": "More power with more uses of Stockpile.",
        "desc": "Power is equal to 100 times the user's Stockpile count. Fails if the user's Stockpile count is 0. Whether or not this move is successful, the user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "swallow": {
        "num": 256,
        "flags": {
            "snatch": 1
        },
        "name": "Swallow",
        "shortDesc": "Heals the user based on uses of Stockpile.",
        "desc": "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it's 1, 1/2 of its maximum HP if it's 2, both rounded half down, and all of its HP if it's 3. Fails if the user's Stockpile count is 0. The user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "heatwave": {
        "num": 257,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Heat Wave",
        "shortDesc": "10% chance to burn the foe(s).",
        "desc": "Has a 10% chance to burn the target.",
        "basePower": 95,
        "type": "Fire",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "hail": {
        "num": 258,
        "flags": {},
        "name": "Hail",
        "shortDesc": "For 5 turns, hail crashes down.",
        "desc": "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type or have the Ice Body, Magic Guard, Overcoat, or Snow Cloak Abilities. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Hail.",
        "basePower": 0,
        "type": "Ice",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "torment": {
        "num": 259,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Torment",
        "shortDesc": "Target can't select the same move twice in a row.",
        "desc": "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "flatter": {
        "num": 260,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Flatter",
        "shortDesc": "Raises the target's Sp. Atk by 1 and confuses it.",
        "desc": "Raises the target's Special Attack by 1 stage and confuses it.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "willowisp": {
        "num": 261,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Will-O-Wisp",
        "shortDesc": "Burns the target.",
        "desc": "Burns the target.",
        "basePower": 0,
        "type": "Fire",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "memento": {
        "num": 262,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Memento",
        "shortDesc": "Lowers target's Attack, Sp. Atk by 2. User faints.",
        "desc": "Lowers the target's Attack and Special Attack by 2 stages. The user faints unless this move misses or there is no target. Fails entirely if this move hits a substitute, but does not fail if the target's stats cannot be changed.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "facade": {
        "num": 263,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Facade",
        "shortDesc": "Power doubles if user is burn/poison/paralyzed.",
        "desc": "Power doubles if the user is burned, paralyzed, or poisoned. The physical damage halving effect from the user's burn is ignored.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "focuspunch": {
        "num": 264,
        "flags": {
            "protect": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Focus Punch",
        "shortDesc": "Fails if the user takes damage before it hits.",
        "desc": "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move.",
        "basePower": 150,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 20,
        "priority": -3,
        "category": "Physical",
        "contestType": "Tough"
    },
    "smellingsalts": {
        "num": 265,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Smelling Salts",
        "shortDesc": "Power doubles if target is paralyzed, and cures it.",
        "desc": "Power doubles if the target is paralyzed. If the user has not fainted, the target is cured of paralysis.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "followme": {
        "num": 266,
        "flags": {},
        "name": "Follow Me",
        "shortDesc": "The foes' moves target the user on the turn used.",
        "desc": "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 2,
        "category": "Status",
        "contestType": "Cute"
    },
    "naturepower": {
        "num": 267,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Nature Power",
        "shortDesc": "Attack depends on terrain (default Tri Attack).",
        "desc": "This move calls another move for use based on the battle terrain. Tri Attack on the regular Wi-Fi terrain, Thunderbolt during Electric Terrain, Moonblast during Misty Terrain, Energy Ball during Grassy Terrain, and Psychic during Psychic Terrain.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "charge": {
        "num": 268,
        "flags": {
            "snatch": 1
        },
        "name": "Charge",
        "shortDesc": "+1 SpD, user's next Electric move 2x power.",
        "desc": "Raises the user's Special Defense by 1 stage. The user's next Electric-type attack will have its power doubled; the effect ends when the user is no longer active, or after the user attempts to use any Electric-type move besides Charge, even if it is not successful.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "taunt": {
        "num": 269,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1,
            "reflectable": 1
        },
        "name": "Taunt",
        "shortDesc": "Target can't use status moves its next 3 turns.",
        "desc": "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "helpinghand": {
        "num": 270,
        "flags": {
            "bypasssub": 1
        },
        "name": "Helping Hand",
        "shortDesc": "One adjacent ally's move power is 1.5x this turn.",
        "desc": "The power of the target's attack this turn is multiplied by 1.5 (this effect is stackable). Fails if there is no ally adjacent to the user or if the ally already moved this turn, but does not fail if the ally is using a two-turn move.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 5,
        "category": "Status",
        "contestType": "Smart"
    },
    "trick": {
        "num": 271,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Trick",
        "shortDesc": "User switches its held item with the target's.",
        "desc": "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "roleplay": {
        "num": 272,
        "flags": {
            "bypasssub": 1
        },
        "name": "Role Play",
        "shortDesc": "User replaces its Ability with the target's.",
        "desc": "The user's Ability changes to match the target's Ability. Fails if the user's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Zen Mode, Zero to Hero, or already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Embody Aspect, Flower Gift, Forecast, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Poison Puppeteer, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Tera Shell, Tera Shift, Teraform Zero, Trace, Wonder Guard, Zen Mode, or Zero to Hero.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "wish": {
        "num": 273,
        "flags": {
            "snatch": 1
        },
        "name": "Wish",
        "shortDesc": "Next turn, 50% of the user's max HP is restored.",
        "desc": "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded down. Fails if this move is already in effect for the user's position.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "assist": {
        "num": 274,
        "flags": {},
        "name": "Assist",
        "shortDesc": "Uses a random move known by a team member.",
        "desc": "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Blazing Torque, Bounce, Celebrate, Chatter, Circle Throw, Combat Torque, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Magical Torque, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Noxious Torque, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Tera Starstorm, Thief, Transform, Trick, Whirlwind, or Wicked Torque.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "ingrain": {
        "num": 275,
        "flags": {
            "snatch": 1
        },
        "name": "Ingrain",
        "shortDesc": "Traps/grounds user; heals 1/16 max HP per turn.",
        "desc": "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "superpower": {
        "num": 276,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Superpower",
        "shortDesc": "Lowers the user's Attack and Defense by 1.",
        "desc": "Lowers the user's Attack and Defense by 1 stage.",
        "basePower": 120,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "magiccoat": {
        "num": 277,
        "flags": {},
        "name": "Magic Coat",
        "shortDesc": "Bounces back certain non-damaging moves.",
        "desc": "Until the end of the turn, the user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or the Magic Bounce Ability's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or the Magic Bounce Ability's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 15,
        "priority": 4,
        "category": "Status",
        "contestType": "Beauty"
    },
    "recycle": {
        "num": 278,
        "flags": {
            "snatch": 1
        },
        "name": "Recycle",
        "shortDesc": "Restores the item the user last used.",
        "desc": "The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Corrosive Gas, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "revenge": {
        "num": 279,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Revenge",
        "shortDesc": "Power doubles if user is damaged by the target.",
        "desc": "Power doubles if the user was hit by the target this turn.",
        "basePower": 60,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": -4,
        "category": "Physical",
        "contestType": "Tough"
    },
    "brickbreak": {
        "num": 280,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Brick Break",
        "shortDesc": "Destroys screens, unless the target is immune.",
        "desc": "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
        "basePower": 75,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "yawn": {
        "num": 281,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Yawn",
        "shortDesc": "Puts the target to sleep after 1 turn.",
        "desc": "Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a non-volatile status condition. At the end of the next turn, if the target is still active, does not have a non-volatile status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "knockoff": {
        "num": 282,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Knock Off",
        "shortDesc": "1.5x damage if foe holds an item. Removes item.",
        "desc": "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
        "basePower": 65,
        "type": "Dark",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "endeavor": {
        "num": 283,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Endeavor",
        "shortDesc": "Lowers the target's HP to the user's HP.",
        "desc": "Deals damage to the target equal to (target's current HP - user's current HP). The target is unaffected if its current HP is less than or equal to the user's current HP.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "eruption": {
        "num": 284,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Eruption",
        "shortDesc": "Less power as user's HP decreases. Hits foe(s).",
        "desc": "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
        "basePower": 150,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "skillswap": {
        "num": 285,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Skill Swap",
        "shortDesc": "The user and the target trade Abilities.",
        "desc": "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Embody Aspect, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Poison Puppeteer, Power Construct, Protosynthesis, Quark Drive, RKS System, Schooling, Shields Down, Stance Change, Tera Shell, Tera Shift, Teraform Zero, Wonder Guard, Zen Mode, or Zero to Hero.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "imprison": {
        "num": 286,
        "flags": {
            "snatch": 1,
            "bypasssub": 1
        },
        "name": "Imprison",
        "shortDesc": "No foe can use any move known by the user.",
        "desc": "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "refresh": {
        "num": 287,
        "flags": {
            "snatch": 1
        },
        "name": "Refresh",
        "shortDesc": "User cures its burn, poison, or paralysis.",
        "desc": "The user cures its burn, poison, or paralysis. Fails if the user is not burned, poisoned, or paralyzed.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "grudge": {
        "num": 288,
        "flags": {
            "bypasssub": 1
        },
        "name": "Grudge",
        "shortDesc": "If the user faints, the attack used loses all its PP.",
        "desc": "Until the user's next turn, if an opposing Pokemon's attack knocks the user out, that move loses all its remaining PP.",
        "basePower": 0,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "snatch": {
        "num": 289,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Snatch",
        "shortDesc": "User steals certain support moves to use itself.",
        "desc": "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use one of those moves this turn, the applicable moves are all stolen by the first Pokemon in turn order that used this move this turn. This effect is ignored while the user is under the effect of Sky Drop.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Smart"
    },
    "secretpower": {
        "num": 290,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Secret Power",
        "shortDesc": "Effect varies with terrain. (30% paralysis chance)",
        "desc": "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain, causes paralysis during Electric Terrain, lowers Special Attack by 1 stage during Misty Terrain, causes sleep during Grassy Terrain and lowers Speed by 1 stage during Psychic Terrain.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "dive": {
        "num": 291,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dive",
        "shortDesc": "Dives underwater turn 1, strikes turn 2.",
        "desc": "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "armthrust": {
        "num": 292,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Arm Thrust",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 15,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "camouflage": {
        "num": 293,
        "flags": {
            "snatch": 1
        },
        "name": "Camouflage",
        "shortDesc": "Changes user's type by terrain (default Normal).",
        "desc": "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain, Electric type during Electric Terrain, Fairy type during Misty Terrain, Grass type during Grassy Terrain, and Psychic type during Psychic Terrain. Fails if the user's type cannot be changed or if the user is already purely that type.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "tailglow": {
        "num": 294,
        "flags": {
            "snatch": 1
        },
        "name": "Tail Glow",
        "shortDesc": "Raises the user's Sp. Atk by 3.",
        "desc": "Raises the user's Special Attack by 3 stages.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "lusterpurge": {
        "num": 295,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Luster Purge",
        "shortDesc": "50% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 50% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 95,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "mistball": {
        "num": 296,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Mist Ball",
        "shortDesc": "50% chance to lower the target's Sp. Atk by 1.",
        "desc": "Has a 50% chance to lower the target's Special Attack by 1 stage.",
        "basePower": 95,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "featherdance": {
        "num": 297,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Feather Dance",
        "shortDesc": "Lowers the target's Attack by 2.",
        "desc": "Lowers the target's Attack by 2 stages.",
        "basePower": 0,
        "type": "Flying",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "teeterdance": {
        "num": 298,
        "flags": {
            "protect": 1
        },
        "name": "Teeter Dance",
        "shortDesc": "Confuses adjacent Pokemon.",
        "desc": "Causes the target to become confused.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "blazekick": {
        "num": 299,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Blaze Kick",
        "shortDesc": "High critical hit ratio. 10% chance to burn.",
        "desc": "Has a 10% chance to burn the target and a higher chance for a critical hit.",
        "basePower": 85,
        "type": "Fire",
        "accuracy": 90,
        "critRatio": 2,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "mudsport": {
        "num": 300,
        "flags": {},
        "name": "Mud Sport",
        "shortDesc": "For 5 turns, Electric-type attacks have 1/3 power.",
        "desc": "For 5 turns, all Electric-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
        "basePower": 0,
        "type": "Ground",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "iceball": {
        "num": 301,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bullet": 1
        },
        "name": "Ice Ball",
        "shortDesc": "Power doubles with each hit. Repeats for 5 turns.",
        "desc": "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn.",
        "basePower": 30,
        "type": "Ice",
        "accuracy": 90,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "needlearm": {
        "num": 302,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Needle Arm",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 80,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "slackoff": {
        "num": 303,
        "flags": {
            "snatch": 1
        },
        "name": "Slack Off",
        "shortDesc": "Heals the user by 50% of its max HP.",
        "desc": "The user restores 1/2 of its maximum HP, rounded half up.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "hypervoice": {
        "num": 304,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Hyper Voice",
        "shortDesc": "No additional effect. Hits adjacent foes.",
        "desc": "No additional effect.",
        "basePower": 90,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "poisonfang": {
        "num": 305,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Poison Fang",
        "shortDesc": "50% chance to badly poison the target.",
        "desc": "Has a 50% chance to badly poison the target.",
        "basePower": 50,
        "type": "Poison",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "crushclaw": {
        "num": 306,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Crush Claw",
        "shortDesc": "50% chance to lower the target's Defense by 1.",
        "desc": "Has a 50% chance to lower the target's Defense by 1 stage.",
        "basePower": 75,
        "type": "Normal",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "blastburn": {
        "num": 307,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Blast Burn",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Fire",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "hydrocannon": {
        "num": 308,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Hydro Cannon",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Water",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "meteormash": {
        "num": 309,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Meteor Mash",
        "shortDesc": "20% chance to raise the user's Attack by 1.",
        "desc": "Has a 20% chance to raise the user's Attack by 1 stage.",
        "basePower": 90,
        "type": "Steel",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "astonish": {
        "num": 310,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Astonish",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 30,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "weatherball": {
        "num": 311,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Weather Ball",
        "shortDesc": "Power doubles and type varies in each weather.",
        "desc": "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Snow, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day. If the user is holding Utility Umbrella and uses Weather Ball during Primordial Sea, Rain Dance, Desolate Land, or Sunny Day, this move remains Normal type and does not double in power.",
        "basePower": 50,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "aromatherapy": {
        "num": 312,
        "flags": {
            "snatch": 1
        },
        "name": "Aromatherapy",
        "shortDesc": "Cures the user's party of all status conditions.",
        "desc": "Every Pokemon in the user's party is cured of its non-volatile status condition. Active Pokemon with the Sap Sipper Ability are not cured, unless they are the user.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "faketears": {
        "num": 313,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Fake Tears",
        "shortDesc": "Lowers the target's Sp. Def by 2.",
        "desc": "Lowers the target's Special Defense by 2 stages.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "aircutter": {
        "num": 314,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1,
            "slicing": 1
        },
        "name": "Air Cutter",
        "shortDesc": "High critical hit ratio. Hits adjacent foes.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 60,
        "type": "Flying",
        "accuracy": 95,
        "critRatio": 2,
        "pp": 25,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "overheat": {
        "num": 315,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Overheat",
        "shortDesc": "Lowers the user's Sp. Atk by 2.",
        "desc": "Lowers the user's Special Attack by 2 stages.",
        "basePower": 130,
        "type": "Fire",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "odorsleuth": {
        "num": 316,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1,
            "reflectable": 1
        },
        "name": "Odor Sleuth",
        "shortDesc": "Fighting, Normal hit Ghost. Evasiveness ignored.",
        "desc": "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Foresight or Miracle Eye.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "rocktomb": {
        "num": 317,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Rock Tomb",
        "shortDesc": "100% chance to lower the target's Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 60,
        "type": "Rock",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "silverwind": {
        "num": 318,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Silver Wind",
        "shortDesc": "10% chance to raise all stats by 1 (not acc/eva).",
        "desc": "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
        "basePower": 60,
        "type": "Bug",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "metalsound": {
        "num": 319,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Metal Sound",
        "shortDesc": "Lowers the target's Sp. Def by 2.",
        "desc": "Lowers the target's Special Defense by 2 stages.",
        "basePower": 0,
        "type": "Steel",
        "accuracy": 85,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "grasswhistle": {
        "num": 320,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Grass Whistle",
        "shortDesc": "Causes the target to fall asleep.",
        "desc": "Causes the target to fall asleep.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 55,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "tickle": {
        "num": 321,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Tickle",
        "shortDesc": "Lowers the target's Attack and Defense by 1.",
        "desc": "Lowers the target's Attack and Defense by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "cosmicpower": {
        "num": 322,
        "flags": {
            "snatch": 1
        },
        "name": "Cosmic Power",
        "shortDesc": "Raises the user's Defense and Sp. Def by 1.",
        "desc": "Raises the user's Defense and Special Defense by 1 stage.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "waterspout": {
        "num": 323,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Water Spout",
        "shortDesc": "Less power as user's HP decreases. Hits foe(s).",
        "desc": "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
        "basePower": 150,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "signalbeam": {
        "num": 324,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Signal Beam",
        "shortDesc": "10% chance to confuse the target.",
        "desc": "Has a 10% chance to confuse the target.",
        "basePower": 75,
        "type": "Bug",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "shadowpunch": {
        "num": 325,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Shadow Punch",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 60,
        "type": "Ghost",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "extrasensory": {
        "num": 326,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Extrasensory",
        "shortDesc": "10% chance to make the target flinch.",
        "desc": "Has a 10% chance to make the target flinch.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "skyuppercut": {
        "num": 327,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Sky Uppercut",
        "shortDesc": "Can hit Pokemon using Bounce, Fly, or Sky Drop.",
        "desc": "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
        "basePower": 85,
        "type": "Fighting",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "sandtomb": {
        "num": 328,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sand Tomb",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 35,
        "type": "Ground",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "sheercold": {
        "num": 329,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sheer Cold",
        "shortDesc": "OHKOs non-Ice targets. Fails if user's lower level.",
        "desc": "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + X)%, where X is 30 if the user is an Ice type and 20 otherwise, and fails if the target is at a higher level. Ice-type Pokemon and Pokemon with the Sturdy Ability are immune.",
        "basePower": 1,
        "type": "Ice",
        "accuracy": 30,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "muddywater": {
        "num": 330,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Muddy Water",
        "shortDesc": "30% chance to lower the foe(s) accuracy by 1.",
        "desc": "Has a 30% chance to lower the target's accuracy by 1 stage.",
        "basePower": 90,
        "type": "Water",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "bulletseed": {
        "num": 331,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Bullet Seed",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 25,
        "type": "Grass",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "aerialace": {
        "num": 332,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Aerial Ace",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 60,
        "type": "Flying",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "iciclespear": {
        "num": 333,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Icicle Spear",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 25,
        "type": "Ice",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "irondefense": {
        "num": 334,
        "flags": {
            "snatch": 1
        },
        "name": "Iron Defense",
        "shortDesc": "Raises the user's Defense by 2.",
        "desc": "Raises the user's Defense by 2 stages.",
        "basePower": 0,
        "type": "Steel",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "block": {
        "num": 335,
        "flags": {
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Block",
        "shortDesc": "Prevents the target from switching out.",
        "desc": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "howl": {
        "num": 336,
        "flags": {
            "snatch": 1,
            "sound": 1
        },
        "name": "Howl",
        "shortDesc": "Raises the user's and ally's Attack by 1.",
        "desc": "Raises the Attack of the user and all allies 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "dragonclaw": {
        "num": 337,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dragon Claw",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "frenzyplant": {
        "num": 338,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Frenzy Plant",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Grass",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "bulkup": {
        "num": 339,
        "flags": {
            "snatch": 1
        },
        "name": "Bulk Up",
        "shortDesc": "Raises the user's Attack and Defense by 1.",
        "desc": "Raises the user's Attack and Defense by 1 stage.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "bounce": {
        "num": 340,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Bounce",
        "shortDesc": "Bounces turn 1. Hits turn 2. 30% paralyze.",
        "desc": "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 85,
        "type": "Flying",
        "accuracy": 85,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "mudshot": {
        "num": 341,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mud Shot",
        "shortDesc": "100% chance to lower the target's Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 55,
        "type": "Ground",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "poisontail": {
        "num": 342,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Poison Tail",
        "shortDesc": "High critical hit ratio. 10% chance to poison.",
        "desc": "Has a 10% chance to poison the target and a higher chance for a critical hit.",
        "basePower": 50,
        "type": "Poison",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "covet": {
        "num": 343,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Covet",
        "shortDesc": "If the user has no item, it steals the target's.",
        "desc": "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
        "basePower": 60,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "volttackle": {
        "num": 344,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Volt Tackle",
        "shortDesc": "Has 33% recoil. 10% chance to paralyze target.",
        "desc": "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 120,
        "type": "Electric",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "magicalleaf": {
        "num": 345,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Magical Leaf",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 60,
        "type": "Grass",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "watersport": {
        "num": 346,
        "flags": {},
        "name": "Water Sport",
        "shortDesc": "For 5 turns, Fire-type attacks have 1/3 power.",
        "desc": "For 5 turns, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
        "basePower": 0,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "calmmind": {
        "num": 347,
        "flags": {
            "snatch": 1
        },
        "name": "Calm Mind",
        "shortDesc": "Raises the user's Sp. Atk and Sp. Def by 1.",
        "desc": "Raises the user's Special Attack and Special Defense by 1 stage.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "leafblade": {
        "num": 348,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Leaf Blade",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 90,
        "type": "Grass",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "dragondance": {
        "num": 349,
        "flags": {
            "snatch": 1
        },
        "name": "Dragon Dance",
        "shortDesc": "Raises the user's Attack and Speed by 1.",
        "desc": "Raises the user's Attack and Speed by 1 stage.",
        "basePower": 0,
        "type": "Dragon",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "rockblast": {
        "num": 350,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Rock Blast",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 25,
        "type": "Rock",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "shockwave": {
        "num": 351,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Shock Wave",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 60,
        "type": "Electric",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "waterpulse": {
        "num": 352,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Water Pulse",
        "shortDesc": "20% chance to confuse the target.",
        "desc": "Has a 20% chance to confuse the target.",
        "basePower": 60,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "doomdesire": {
        "num": 353,
        "flags": {},
        "name": "Doom Desire",
        "shortDesc": "Hits two turns after being used.",
        "desc": "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Future Sight is already in effect for the target's position.",
        "basePower": 140,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "psychoboost": {
        "num": 354,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Psycho Boost",
        "shortDesc": "Lowers the user's Sp. Atk by 2.",
        "desc": "Lowers the user's Special Attack by 2 stages.",
        "basePower": 140,
        "type": "Psychic",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "roost": {
        "num": 355,
        "flags": {
            "snatch": 1
        },
        "name": "Roost",
        "shortDesc": "Heals 50% HP. Flying-type removed 'til turn ends.",
        "desc": "The user restores 1/2 of its maximum HP, rounded half up. If the user is not Terastallized, until the end of the turn Flying-type users lose their Flying type and pure Flying-type users become Normal type. Does nothing if the user's HP is full.",
        "basePower": 0,
        "type": "Flying",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "gravity": {
        "num": 356,
        "flags": {},
        "name": "Gravity",
        "shortDesc": "5 turns: no Ground immunities, 1.67x accuracy.",
        "desc": "For 5 turns, the evasiveness of all active Pokemon is multiplied by 0.6. At the time of use, Bounce, Fly, Magnet Rise, Sky Drop, and Telekinesis end immediately for all active Pokemon. During the effect, Bounce, Fly, Flying Press, High Jump Kick, Jump Kick, Magnet Rise, Sky Drop, Splash, and Telekinesis are prevented from being used by all active Pokemon. Ground-type attacks, Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability can affect Flying types or Pokemon with the Levitate Ability. Fails if this move is already in effect.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "miracleeye": {
        "num": 357,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1,
            "reflectable": 1
        },
        "name": "Miracle Eye",
        "shortDesc": "Psychic hits Dark. Evasiveness ignored.",
        "desc": "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Psychic-type attacks can hit the target if it is a Dark type. Fails if the target is already affected, or affected by Foresight or Odor Sleuth.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "wakeupslap": {
        "num": 358,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Wake-Up Slap",
        "shortDesc": "Power doubles if target is asleep, and wakes it.",
        "desc": "Power doubles if the target is asleep. If the user has not fainted, the target wakes up.",
        "basePower": 70,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "hammerarm": {
        "num": 359,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Hammer Arm",
        "shortDesc": "Lowers the user's Speed by 1.",
        "desc": "Lowers the user's Speed by 1 stage.",
        "basePower": 100,
        "type": "Fighting",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "gyroball": {
        "num": 360,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bullet": 1
        },
        "name": "Gyro Ball",
        "shortDesc": "More power the slower the user than the target.",
        "desc": "Power is equal to (25 * target's current Speed / user's current Speed) + 1, rounded down, but not more than 150. If the user's current Speed is 0, this move's power is 1.",
        "basePower": 1,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "healingwish": {
        "num": 361,
        "flags": {
            "snatch": 1
        },
        "name": "Healing Wish",
        "shortDesc": "User faints. Next hurt Pokemon is fully healed.",
        "desc": "The user faints, and if the Pokemon brought out to replace it does not have full HP or has a non-volatile status condition, its HP is fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokemon that meets either of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokemon in its party.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "brine": {
        "num": 362,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Brine",
        "shortDesc": "Power doubles if the target's HP is 50% or less.",
        "desc": "Power doubles if the target has less than or equal to half of its maximum HP remaining.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "naturalgift": {
        "num": 363,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Natural Gift",
        "shortDesc": "Power and type depends on the user's Berry.",
        "desc": "The type and power of this move depend on the user's held Berry, and the Berry is lost. Fails if the user is not holding a Berry, if the user has the Klutz Ability, or if Embargo or Magic Room is in effect for the user.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "feint": {
        "num": 364,
        "flags": {},
        "name": "Feint",
        "shortDesc": "Nullifies Detect, Protect, and Quick/Wide Guard.",
        "desc": "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
        "basePower": 30,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 2,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "pluck": {
        "num": 365,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Pluck",
        "shortDesc": "User steals and eats the target's Berry.",
        "desc": "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
        "basePower": 60,
        "type": "Flying",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "tailwind": {
        "num": 366,
        "flags": {
            "snatch": 1,
            "wind": 1
        },
        "name": "Tailwind",
        "shortDesc": "For 4 turns, allies' Speed is doubled.",
        "desc": "For 4 turns, the user and its party members have their Speed doubled. Fails if this move is already in effect for the user's side.",
        "basePower": 0,
        "type": "Flying",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "acupressure": {
        "num": 367,
        "flags": {
            "snatch": 1
        },
        "name": "Acupressure",
        "shortDesc": "Raises a random stat of the user or an ally by 2.",
        "desc": "Raises a random stat by 2 stages as long as the stat is not already at stage 6. The user can choose to use this move on itself or an adjacent ally. Fails if no stat stage can be raised or if used on an ally with a substitute.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "metalburst": {
        "num": 368,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Metal Burst",
        "shortDesc": "If hit by an attack, returns 1.5x damage.",
        "desc": "Deals damage to the last opposing Pokemon to hit the user with a physical or special attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from that attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical or special attack this turn.",
        "basePower": 1,
        "type": "Steel",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "uturn": {
        "num": 369,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "U-turn",
        "shortDesc": "User switches out after damaging the target.",
        "desc": "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
        "basePower": 70,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "closecombat": {
        "num": 370,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Close Combat",
        "shortDesc": "Lowers the user's Defense and Sp. Def by 1.",
        "desc": "Lowers the user's Defense and Special Defense by 1 stage.",
        "basePower": 120,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "payback": {
        "num": 371,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Payback",
        "shortDesc": "Power doubles if the user moves after the target.",
        "desc": "Power doubles if the user moves after the target this turn, including actions taken through Instruct or the Dancer Ability. Switching in does not count as an action.",
        "basePower": 50,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "assurance": {
        "num": 372,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Assurance",
        "shortDesc": "Power doubles if target was damaged this turn.",
        "desc": "Power doubles if the target has already taken damage this turn, other than direct damage from Belly Drum, confusion, Curse, or Pain Split.",
        "basePower": 60,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "embargo": {
        "num": 373,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Embargo",
        "shortDesc": "For 5 turns, the target's item has no effect.",
        "desc": "For 5 turns, the target's held item has no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by the target. Items thrown at the target with Fling will still activate for it. If the target uses Baton Pass, the replacement will remain unable to use items.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "fling": {
        "num": 374,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fling",
        "shortDesc": "Flings the user's item at the target. Power varies.",
        "desc": "The power of this move is based on the user's held item. The held item is lost and it activates for the target if applicable. If there is no target or the target avoids this move by protecting itself, the user's held item is still lost. The user can regain a thrown item with Recycle or the Harvest Ability. Fails if the user has no held item, if the held item cannot be thrown, if the user is under the effect of Embargo or Magic Room, or if the user has the Klutz Ability.",
        "basePower": 1,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "psychoshift": {
        "num": 375,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Psycho Shift",
        "shortDesc": "Transfers the user's status ailment to the target.",
        "desc": "The user's non-volatile status condition is transferred to the target, and the user is then cured. Fails if the user has no non-volatile status condition or if the target already has one.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "trumpcard": {
        "num": 376,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Trump Card",
        "shortDesc": "More power the fewer PP this move has left.",
        "desc": "The power of this move is based on the amount of PP remaining after normal PP reduction and the Pressure Ability resolve. 200 power for 0 PP, 80 power for 1 PP, 60 power for 2 PP, 50 power for 3 PP, and 40 power for 4 or more PP.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "healblock": {
        "num": 377,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Heal Block",
        "shortDesc": "For 5 turns, the foe(s) is prevented from healing.",
        "desc": "For 5 turns, the target is prevented from restoring any HP as long as it remains active. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. If an affected Pokemon uses Baton Pass, the replacement will remain unable to restore its HP. Pain Split and the Regenerator Ability are unaffected.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "wringout": {
        "num": 378,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Wring Out",
        "shortDesc": "More power the more HP the target has left.",
        "desc": "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "powertrick": {
        "num": 379,
        "flags": {
            "snatch": 1
        },
        "name": "Power Trick",
        "shortDesc": "Switches user's Attack and Defense stats.",
        "desc": "The user swaps its Attack and Defense stats, and stat stage changes remain on their respective stats. This move can be used again to swap the stats back. If the user uses Baton Pass, the replacement will have its Attack and Defense stats swapped if the effect is active. If the user has its stats recalculated by changing forme while its stats are swapped, this effect is ignored but is still active for the purposes of Baton Pass.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "gastroacid": {
        "num": 380,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Gastro Acid",
        "shortDesc": "Nullifies the target's Ability.",
        "desc": "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Zen Mode, or Zero to Hero, this move fails, and receiving the effect through Baton Pass ends the effect immediately.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "luckychant": {
        "num": 381,
        "flags": {
            "snatch": 1
        },
        "name": "Lucky Chant",
        "shortDesc": "For 5 turns, shields user's party from critical hits.",
        "desc": "For 5 turns, the user and its party members cannot be struck by a critical hit. Fails if the effect is already active on the user's side.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "mefirst": {
        "num": 382,
        "flags": {
            "protect": 1,
            "bypasssub": 1
        },
        "name": "Me First",
        "shortDesc": "Copies a foe at 1.5x power. User must be faster.",
        "desc": "The user uses the move the target chose for use this turn against it, if possible, with its power multiplied by 1.5. The move must be a damaging move other than Beak Blast, Belch, Blazing Torque, Combat Torque, Comeuppance, Counter, Covet, Focus Punch, Magical Torque, Me First, Metal Burst, Mirror Coat, Noxious Torque, Shell Trap, Struggle, Thief, or Wicked Torque. Fails if the target moves before the user. Ignores the target's substitute for the purpose of copying the move.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "copycat": {
        "num": 383,
        "flags": {},
        "name": "Copycat",
        "shortDesc": "Uses the last move used in the battle.",
        "desc": "The user uses the last move used by any Pokemon, including itself. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Behemoth Bash, Behemoth Blade, Belch, Bestow, Blazing Torque, Celebrate, Chatter, Circle Throw, Combat Torque, Copycat, Counter, Covet, Destiny Bond, Detect, Dragon Tail, Dynamax Cannon, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Magical Torque, Mat Block, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Tera Starstorm, Thief, Transform, Trick, Whirlwind, or Wicked Torque.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "powerswap": {
        "num": 384,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Power Swap",
        "shortDesc": "Swaps Attack and Sp. Atk stat stages with target.",
        "desc": "The user swaps its Attack and Special Attack stat stage changes with the target.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "guardswap": {
        "num": 385,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Guard Swap",
        "shortDesc": "Swaps Defense and Sp. Def changes with target.",
        "desc": "The user swaps its Defense and Special Defense stat stage changes with the target.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "punishment": {
        "num": 386,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Punishment",
        "shortDesc": "60 power +20 for each of the target's stat boosts.",
        "desc": "Power is equal to 60+(X*20), where X is the target's total stat stage changes that are greater than 0, but not more than 200 power.",
        "basePower": 60,
        "type": "Dark",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "lastresort": {
        "num": 387,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Last Resort",
        "shortDesc": "Fails unless each known move has been used.",
        "desc": "This move fails unless the user knows this move and at least one other move, and has used all the other moves it knows at least once each since it became active or Transformed.",
        "basePower": 140,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "worryseed": {
        "num": 388,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Worry Seed",
        "shortDesc": "The target's Ability becomes Insomnia.",
        "desc": "Causes the target's Ability to become Insomnia. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Truant, Zen Mode, or Zero to Hero.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "suckerpunch": {
        "num": 389,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Sucker Punch",
        "shortDesc": "Usually goes first. Fails if target is not attacking.",
        "desc": "Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
        "basePower": 70,
        "type": "Dark",
        "accuracy": 100,
        "pp": 5,
        "priority": 1,
        "category": "Physical",
        "contestType": "Smart"
    },
    "toxicspikes": {
        "num": 390,
        "flags": {
            "reflectable": 1
        },
        "name": "Toxic Spikes",
        "shortDesc": "Poisons grounded foes on switch-in. Max 2 layers.",
        "desc": "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "heartswap": {
        "num": 391,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Heart Swap",
        "shortDesc": "Swaps all stat changes with target.",
        "desc": "The user swaps all its stat stage changes with the target.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "aquaring": {
        "num": 392,
        "flags": {
            "snatch": 1
        },
        "name": "Aqua Ring",
        "shortDesc": "User recovers 1/16 max HP per turn.",
        "desc": "The user has 1/16 of its maximum HP, rounded down, restored at the end of each turn while it remains active. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. If the user uses Baton Pass, the replacement will receive the healing effect.",
        "basePower": 0,
        "type": "Water",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "magnetrise": {
        "num": 393,
        "flags": {
            "snatch": 1
        },
        "name": "Magnet Rise",
        "shortDesc": "For 5 turns, the user has immunity to Ground.",
        "desc": "For 5 turns, the user is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the user uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the user is under any of their effects. Fails if the user is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "flareblitz": {
        "num": 394,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "defrost": 1
        },
        "name": "Flare Blitz",
        "shortDesc": "Has 33% recoil. 10% chance to burn. Thaws user.",
        "desc": "Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 120,
        "type": "Fire",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "forcepalm": {
        "num": 395,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Force Palm",
        "shortDesc": "30% chance to paralyze the target.",
        "desc": "Has a 30% chance to paralyze the target.",
        "basePower": 60,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "aurasphere": {
        "num": 396,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1,
            "bullet": 1
        },
        "name": "Aura Sphere",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 80,
        "type": "Fighting",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "rockpolish": {
        "num": 397,
        "flags": {
            "snatch": 1
        },
        "name": "Rock Polish",
        "shortDesc": "Raises the user's Speed by 2.",
        "desc": "Raises the user's Speed by 2 stages.",
        "basePower": 0,
        "type": "Rock",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "poisonjab": {
        "num": 398,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Poison Jab",
        "shortDesc": "30% chance to poison the target.",
        "desc": "Has a 30% chance to poison the target.",
        "basePower": 80,
        "type": "Poison",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "darkpulse": {
        "num": 399,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Dark Pulse",
        "shortDesc": "20% chance to make the target flinch.",
        "desc": "Has a 20% chance to make the target flinch.",
        "basePower": 80,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "nightslash": {
        "num": 400,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Night Slash",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 70,
        "type": "Dark",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "aquatail": {
        "num": 401,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Aqua Tail",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 90,
        "type": "Water",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "seedbomb": {
        "num": 402,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Seed Bomb",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "airslash": {
        "num": 403,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "slicing": 1
        },
        "name": "Air Slash",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 75,
        "type": "Flying",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "xscissor": {
        "num": 404,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "X-Scissor",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Bug",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "bugbuzz": {
        "num": 405,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Bug Buzz",
        "shortDesc": "10% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 90,
        "type": "Bug",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "dragonpulse": {
        "num": 406,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Dragon Pulse",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 85,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "dragonrush": {
        "num": 407,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dragon Rush",
        "shortDesc": "20% chance to make the target flinch.",
        "desc": "Has a 20% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 120,
        "type": "Dragon",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "powergem": {
        "num": 408,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Power Gem",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Rock",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "drainpunch": {
        "num": 409,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Drain Punch",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 75,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "vacuumwave": {
        "num": 410,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Vacuum Wave",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 30,
        "priority": 1,
        "category": "Special",
        "contestType": "Smart"
    },
    "focusblast": {
        "num": 411,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Focus Blast",
        "shortDesc": "10% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 120,
        "type": "Fighting",
        "accuracy": 70,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "energyball": {
        "num": 412,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Energy Ball",
        "shortDesc": "10% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 90,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "bravebird": {
        "num": 413,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Brave Bird",
        "shortDesc": "Has 33% recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 120,
        "type": "Flying",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "earthpower": {
        "num": 414,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Earth Power",
        "shortDesc": "10% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 90,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "switcheroo": {
        "num": 415,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Switcheroo",
        "shortDesc": "User switches its held item with the target's.",
        "desc": "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "gigaimpact": {
        "num": 416,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Giga Impact",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Normal",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "nastyplot": {
        "num": 417,
        "flags": {
            "snatch": 1
        },
        "name": "Nasty Plot",
        "shortDesc": "Raises the user's Sp. Atk by 2.",
        "desc": "Raises the user's Special Attack by 2 stages.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "bulletpunch": {
        "num": 418,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Bullet Punch",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Steel",
        "accuracy": 100,
        "pp": 30,
        "priority": 1,
        "category": "Physical",
        "contestType": "Smart"
    },
    "avalanche": {
        "num": 419,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Avalanche",
        "shortDesc": "Power doubles if user is damaged by the target.",
        "desc": "Power doubles if the user was hit by the target this turn.",
        "basePower": 60,
        "type": "Ice",
        "accuracy": 100,
        "pp": 10,
        "priority": -4,
        "category": "Physical",
        "contestType": "Cool"
    },
    "iceshard": {
        "num": 420,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Ice Shard",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Ice",
        "accuracy": 100,
        "pp": 30,
        "priority": 1,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "shadowclaw": {
        "num": 421,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Shadow Claw",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 70,
        "type": "Ghost",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "thunderfang": {
        "num": 422,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Thunder Fang",
        "shortDesc": "10% chance to paralyze. 10% chance to flinch.",
        "desc": "Has a 10% chance to paralyze the target and a 10% chance to make it flinch.",
        "basePower": 65,
        "type": "Electric",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "icefang": {
        "num": 423,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Ice Fang",
        "shortDesc": "10% chance to freeze. 10% chance to flinch.",
        "desc": "Has a 10% chance to freeze the target and a 10% chance to make it flinch.",
        "basePower": 65,
        "type": "Ice",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "firefang": {
        "num": 424,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Fire Fang",
        "shortDesc": "10% chance to burn. 10% chance to flinch.",
        "desc": "Has a 10% chance to burn the target and a 10% chance to make it flinch.",
        "basePower": 65,
        "type": "Fire",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "shadowsneak": {
        "num": 425,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Shadow Sneak",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 30,
        "priority": 1,
        "category": "Physical",
        "contestType": "Smart"
    },
    "mudbomb": {
        "num": 426,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Mud Bomb",
        "shortDesc": "30% chance to lower the target's accuracy by 1.",
        "desc": "Has a 30% chance to lower the target's accuracy by 1 stage.",
        "basePower": 65,
        "type": "Ground",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "psychocut": {
        "num": 427,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "slicing": 1
        },
        "name": "Psycho Cut",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 70,
        "type": "Psychic",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "zenheadbutt": {
        "num": 428,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Zen Headbutt",
        "shortDesc": "20% chance to make the target flinch.",
        "desc": "Has a 20% chance to make the target flinch.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "mirrorshot": {
        "num": 429,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mirror Shot",
        "shortDesc": "30% chance to lower the target's accuracy by 1.",
        "desc": "Has a 30% chance to lower the target's accuracy by 1 stage.",
        "basePower": 65,
        "type": "Steel",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "flashcannon": {
        "num": 430,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Flash Cannon",
        "shortDesc": "10% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 80,
        "type": "Steel",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "rockclimb": {
        "num": 431,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Rock Climb",
        "shortDesc": "20% chance to confuse the target.",
        "desc": "Has a 20% chance to confuse the target.",
        "basePower": 90,
        "type": "Normal",
        "accuracy": 85,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "defog": {
        "num": 432,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Defog",
        "shortDesc": "-1 evasion; clears terrain and hazards on both sides.",
        "desc": "Lowers the target's evasiveness by 1 stage. If this move is successful and whether or not the target's evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side. Ignores a target's substitute, although a substitute will still block the lowering of evasiveness. If there is a terrain active and this move is successful, the terrain will be cleared.",
        "basePower": 0,
        "type": "Flying",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "trickroom": {
        "num": 433,
        "flags": {
            "mirror": 1
        },
        "name": "Trick Room",
        "shortDesc": "Goes last. For 5 turns, turn order is reversed.",
        "desc": "For 5 turns, the Speed of every Pokemon is recalculated for the purposes of determining turn order. During the effect, each Pokemon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 5,
        "priority": -7,
        "category": "Status",
        "contestType": "Cute"
    },
    "dracometeor": {
        "num": 434,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Draco Meteor",
        "shortDesc": "Lowers the user's Sp. Atk by 2.",
        "desc": "Lowers the user's Special Attack by 2 stages.",
        "basePower": 130,
        "type": "Dragon",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "discharge": {
        "num": 435,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Discharge",
        "shortDesc": "30% chance to paralyze adjacent Pokemon.",
        "desc": "Has a 30% chance to paralyze the target.",
        "basePower": 80,
        "type": "Electric",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "lavaplume": {
        "num": 436,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Lava Plume",
        "shortDesc": "30% chance to burn adjacent Pokemon.",
        "desc": "Has a 30% chance to burn the target.",
        "basePower": 80,
        "type": "Fire",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "leafstorm": {
        "num": 437,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Leaf Storm",
        "shortDesc": "Lowers the user's Sp. Atk by 2.",
        "desc": "Lowers the user's Special Attack by 2 stages.",
        "basePower": 130,
        "type": "Grass",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "powerwhip": {
        "num": 438,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Power Whip",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 120,
        "type": "Grass",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "rockwrecker": {
        "num": 439,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Rock Wrecker",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Rock",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "crosspoison": {
        "num": 440,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Cross Poison",
        "shortDesc": "High critical hit ratio. 10% chance to poison.",
        "desc": "Has a 10% chance to poison the target and a higher chance for a critical hit.",
        "basePower": 70,
        "type": "Poison",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "gunkshot": {
        "num": 441,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Gunk Shot",
        "shortDesc": "30% chance to poison the target.",
        "desc": "Has a 30% chance to poison the target.",
        "basePower": 120,
        "type": "Poison",
        "accuracy": 80,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "ironhead": {
        "num": 442,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Iron Head",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 80,
        "type": "Steel",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "magnetbomb": {
        "num": 443,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Magnet Bomb",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 60,
        "type": "Steel",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "stoneedge": {
        "num": 444,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Stone Edge",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 100,
        "type": "Rock",
        "accuracy": 80,
        "critRatio": 2,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "captivate": {
        "num": 445,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Captivate",
        "shortDesc": "Lowers the foe(s) Sp. Atk by 2 if opposite gender.",
        "desc": "Lowers the target's Special Attack by 2 stages. The target is unaffected if both the user and the target are the same gender, or if either is genderless. Pokemon with the Oblivious Ability are immune.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "stealthrock": {
        "num": 446,
        "flags": {
            "reflectable": 1
        },
        "name": "Stealth Rock",
        "shortDesc": "Hurts foes on switch-in. Factors Rock weakness.",
        "desc": "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Fails if the effect is already active on the opposing side. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
        "basePower": 0,
        "type": "Rock",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "grassknot": {
        "num": 447,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Grass Knot",
        "shortDesc": "More power the heavier the target.",
        "desc": "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
        "basePower": 1,
        "type": "Grass",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "chatter": {
        "num": 448,
        "flags": {
            "protect": 1,
            "sound": 1
        },
        "name": "Chatter",
        "shortDesc": "100% chance to confuse the target.",
        "desc": "Has a 100% chance to confuse the target.",
        "basePower": 65,
        "type": "Flying",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "judgment": {
        "num": 449,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Judgment",
        "shortDesc": "Type varies based on the held Plate.",
        "desc": "This move's type depends on the user's held Plate.",
        "basePower": 100,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "bugbite": {
        "num": 450,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Bug Bite",
        "shortDesc": "User steals and eats the target's Berry.",
        "desc": "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
        "basePower": 60,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "chargebeam": {
        "num": 451,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Charge Beam",
        "shortDesc": "70% chance to raise the user's Sp. Atk by 1.",
        "desc": "Has a 70% chance to raise the user's Special Attack by 1 stage.",
        "basePower": 50,
        "type": "Electric",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "woodhammer": {
        "num": 452,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Wood Hammer",
        "shortDesc": "Has 33% recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 120,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "aquajet": {
        "num": 453,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Aqua Jet",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 1,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "attackorder": {
        "num": 454,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Attack Order",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 90,
        "type": "Bug",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "defendorder": {
        "num": 455,
        "flags": {
            "snatch": 1
        },
        "name": "Defend Order",
        "shortDesc": "Raises the user's Defense and Sp. Def by 1.",
        "desc": "Raises the user's Defense and Special Defense by 1 stage.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "healorder": {
        "num": 456,
        "flags": {
            "snatch": 1
        },
        "name": "Heal Order",
        "shortDesc": "Heals the user by 50% of its max HP.",
        "desc": "The user restores 1/2 of its maximum HP, rounded half up.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "headsmash": {
        "num": 457,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Head Smash",
        "shortDesc": "Has 1/2 recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 150,
        "type": "Rock",
        "accuracy": 80,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "doublehit": {
        "num": 458,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Double Hit",
        "shortDesc": "Hits 2 times in one turn.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 35,
        "type": "Normal",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "roaroftime": {
        "num": 459,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Roar of Time",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Dragon",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "spacialrend": {
        "num": 460,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Spacial Rend",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 100,
        "type": "Dragon",
        "accuracy": 95,
        "critRatio": 2,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "lunardance": {
        "num": 461,
        "flags": {
            "snatch": 1
        },
        "name": "Lunar Dance",
        "shortDesc": "User faints. Next hurt Pkmn is cured, max HP/PP.",
        "desc": "The user faints, and if the Pokemon brought out to replace it does not have full HP or PP, or has a non-volatile status condition, its HP and PP are fully restored along with having any non-volatile status condition cured. The replacement is sent out at the end of the turn, and the healing happens before hazards take effect. This effect continues until a Pokemon that meets any of these conditions switches in at the user's position or gets swapped into the position with Ally Switch. Fails if the user is the last unfainted Pokemon in its party.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "crushgrip": {
        "num": 462,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Crush Grip",
        "shortDesc": "More power the more HP the target has left.",
        "desc": "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "magmastorm": {
        "num": 463,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Magma Storm",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 100,
        "type": "Fire",
        "accuracy": 75,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "darkvoid": {
        "num": 464,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Dark Void",
        "shortDesc": "Darkrai: Causes the foe(s) to fall asleep.",
        "desc": "Causes the target to fall asleep. This move cannot be used successfully unless the user's current form, while considering Transform, is Darkrai.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 50,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "seedflare": {
        "num": 465,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Seed Flare",
        "shortDesc": "40% chance to lower the target's Sp. Def by 2.",
        "desc": "Has a 40% chance to lower the target's Special Defense by 2 stages.",
        "basePower": 120,
        "type": "Grass",
        "accuracy": 85,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "ominouswind": {
        "num": 466,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Ominous Wind",
        "shortDesc": "10% chance to raise all stats by 1 (not acc/eva).",
        "desc": "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
        "basePower": 60,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "shadowforce": {
        "num": 467,
        "flags": {
            "mirror": 1,
            "contact": 1
        },
        "name": "Shadow Force",
        "shortDesc": "Disappears turn 1. Hits turn 2. Breaks protection.",
        "desc": "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 120,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "honeclaws": {
        "num": 468,
        "flags": {
            "snatch": 1
        },
        "name": "Hone Claws",
        "shortDesc": "Raises the user's Attack and accuracy by 1.",
        "desc": "Raises the user's Attack and accuracy by 1 stage.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "wideguard": {
        "num": 469,
        "flags": {
            "snatch": 1
        },
        "name": "Wide Guard",
        "shortDesc": "Protects allies from multi-target moves this turn.",
        "desc": "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
        "basePower": 0,
        "type": "Rock",
        "accuracy": true,
        "pp": 10,
        "priority": 3,
        "category": "Status",
        "contestType": "Tough"
    },
    "guardsplit": {
        "num": 470,
        "flags": {
            "protect": 1
        },
        "name": "Guard Split",
        "shortDesc": "Averages Defense and Sp. Def stats with target.",
        "desc": "The user and the target have their Defense and Special Defense stats set to be equal to the average of the user and the target's Defense and Special Defense stats, respectively, rounded down. Stat stage changes are unaffected.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "powersplit": {
        "num": 471,
        "flags": {
            "protect": 1
        },
        "name": "Power Split",
        "shortDesc": "Averages Attack and Sp. Atk stats with target.",
        "desc": "The user and the target have their Attack and Special Attack stats set to be equal to the average of the user and the target's Attack and Special Attack stats, respectively, rounded down. Stat stage changes are unaffected.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "wonderroom": {
        "num": 472,
        "flags": {
            "mirror": 1
        },
        "name": "Wonder Room",
        "shortDesc": "For 5 turns, all Defense and Sp. Def stats switch.",
        "desc": "For 5 turns, all active Pokemon have their Defense and Special Defense stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "psyshock": {
        "num": 473,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Psyshock",
        "shortDesc": "Damages target based on Defense, not Sp. Def.",
        "desc": "Deals damage to the target based on its Defense instead of Special Defense.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "venoshock": {
        "num": 474,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Venoshock",
        "shortDesc": "Power doubles if the target is poisoned.",
        "desc": "Power doubles if the target is poisoned.",
        "basePower": 65,
        "type": "Poison",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "autotomize": {
        "num": 475,
        "flags": {
            "snatch": 1
        },
        "name": "Autotomize",
        "shortDesc": "Raises the user's Speed by 2; user loses 100 kg.",
        "desc": "Raises the user's Speed by 2 stages. If the user's Speed was changed, the user's weight is reduced by 100 kg as long as it remains active. This effect is stackable but cannot reduce the user's weight to less than 0.1 kg.",
        "basePower": 0,
        "type": "Steel",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "ragepowder": {
        "num": 476,
        "flags": {
            "powder": 1
        },
        "name": "Rage Powder",
        "shortDesc": "The foes' moves target the user on the turn used.",
        "desc": "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 20,
        "priority": 2,
        "category": "Status",
        "contestType": "Beauty"
    },
    "telekinesis": {
        "num": 477,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Telekinesis",
        "shortDesc": "For 3 turns, target floats but moves can't miss it.",
        "desc": "For 3 turns, the target cannot avoid any attacks made against it, other than OHKO moves, as long as it remains active. During the effect, the target is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the target uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the target is under any of their effects. Fails if the target is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows. The target is immune to this move on use if its species is Diglett, Dugtrio, Alolan Diglett, Alolan Dugtrio, Sandygast, Palossand, or Gengar while Mega-Evolved. Mega Gengar cannot be under this effect by any means.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "magicroom": {
        "num": 478,
        "flags": {
            "mirror": 1
        },
        "name": "Magic Room",
        "shortDesc": "For 5 turns, all held items have no effect.",
        "desc": "For 5 turns, the held items of all active Pokemon have no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by all active Pokemon. If this move is used during the effect, the effect ends.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "smackdown": {
        "num": 479,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Smack Down",
        "shortDesc": "Removes the target's Ground immunity.",
        "desc": "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
        "basePower": 50,
        "type": "Rock",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "stormthrow": {
        "num": 480,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Storm Throw",
        "shortDesc": "Always results in a critical hit.",
        "desc": "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
        "basePower": 60,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "flameburst": {
        "num": 481,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Flame Burst",
        "shortDesc": "Damages Pokemon next to the target as well.",
        "desc": "If this move is successful, the target's ally loses 1/16 of its maximum HP, rounded down, unless it has the Magic Guard Ability.",
        "basePower": 70,
        "type": "Fire",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "sludgewave": {
        "num": 482,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sludge Wave",
        "shortDesc": "10% chance to poison adjacent Pokemon.",
        "desc": "Has a 10% chance to poison the target.",
        "basePower": 95,
        "type": "Poison",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "quiverdance": {
        "num": 483,
        "flags": {
            "snatch": 1
        },
        "name": "Quiver Dance",
        "shortDesc": "Raises the user's Sp. Atk, Sp. Def, Speed by 1.",
        "desc": "Raises the user's Special Attack, Special Defense, and Speed by 1 stage.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "heavyslam": {
        "num": 484,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Heavy Slam",
        "shortDesc": "More power the heavier the user than the target.",
        "desc": "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 1,
        "type": "Steel",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "synchronoise": {
        "num": 485,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Synchronoise",
        "shortDesc": "Hits adjacent Pokemon sharing the user's type.",
        "desc": "The target is immune if it does not share a type with the user.",
        "basePower": 120,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "electroball": {
        "num": 486,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Electro Ball",
        "shortDesc": "More power the faster the user is than the target.",
        "desc": "The power of this move depends on (user's current Speed / target's current Speed), rounded down. Power is equal to 150 if the result is 4 or more, 120 if 3, 80 if 2, 60 if 1, 40 if less than 1. If the target's current Speed is 0, this move's power is 40.",
        "basePower": 1,
        "type": "Electric",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "soak": {
        "num": 487,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Soak",
        "shortDesc": "Changes the target's type to Water.",
        "desc": "Causes the target to become a Water type. Fails if the target is an Arceus or a Silvally, if the target is already purely Water type, or if the target is Terastallized.",
        "basePower": 0,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "flamecharge": {
        "num": 488,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Flame Charge",
        "shortDesc": "100% chance to raise the user's Speed by 1.",
        "desc": "Has a 100% chance to raise the user's Speed by 1 stage.",
        "basePower": 50,
        "type": "Fire",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "coil": {
        "num": 489,
        "flags": {
            "snatch": 1
        },
        "name": "Coil",
        "shortDesc": "Raises user's Attack, Defense, accuracy by 1.",
        "desc": "Raises the user's Attack, Defense, and accuracy by 1 stage.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "lowsweep": {
        "num": 490,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Low Sweep",
        "shortDesc": "100% chance to lower the target's Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 65,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "acidspray": {
        "num": 491,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Acid Spray",
        "shortDesc": "100% chance to lower the target's Sp. Def by 2.",
        "desc": "Has a 100% chance to lower the target's Special Defense by 2 stages.",
        "basePower": 40,
        "type": "Poison",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "foulplay": {
        "num": 492,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Foul Play",
        "shortDesc": "Uses target's Attack stat in damage calculation.",
        "desc": "Damage is calculated using the target's Attack stat, including stat stage changes. The user's Ability, item, and burn are used as normal.",
        "basePower": 95,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "simplebeam": {
        "num": 493,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Simple Beam",
        "shortDesc": "The target's Ability becomes Simple.",
        "desc": "Causes the target's Ability to become Simple. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Simple, Stance Change, Tera Shift, Truant, Zen Mode, or Zero to Hero.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "entrainment": {
        "num": 494,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Entrainment",
        "shortDesc": "The target's Ability changes to match the user's.",
        "desc": "Causes the target's Ability to become the same as the user's. Fails if the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Truant, Zen Mode, or Zero to Hero, or the same Ability as the user, or if the user's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Embody Aspect, Flower Gift, Forecast, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Poison Puppeteer, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Tera Shell, Tera Shift, Teraform Zero, Trace, Wonder Guard, Zen Mode, or Zero to Hero.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "afteryou": {
        "num": 495,
        "flags": {
            "bypasssub": 1
        },
        "name": "After You",
        "shortDesc": "The target makes its move right after the user.",
        "desc": "The target makes its move immediately after the user this turn, no matter the priority of its selected move. Fails if the target would have moved next anyway, or if the target already moved this turn.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "round": {
        "num": 496,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Round",
        "shortDesc": "Power doubles if others used Round this turn.",
        "desc": "If there are other active Pokemon that chose this move for use this turn, those Pokemon take their turn immediately after the user, in Speed order, and this move's power is 120 for each other user.",
        "basePower": 60,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "echoedvoice": {
        "num": 497,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Echoed Voice",
        "shortDesc": "Power increases when used on consecutive turns.",
        "desc": "For every consecutive turn that this move is used by at least one Pokemon, this move's power is multiplied by the number of turns to pass, but not more than 5.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "chipaway": {
        "num": 498,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Chip Away",
        "shortDesc": "Ignores the target's stat stage changes.",
        "desc": "Ignores the target's stat stage changes, including evasiveness.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "clearsmog": {
        "num": 499,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Clear Smog",
        "shortDesc": "Resets all of the target's stat stages to 0.",
        "desc": "Resets all of the target's stat stages to 0.",
        "basePower": 50,
        "type": "Poison",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "storedpower": {
        "num": 500,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Stored Power",
        "shortDesc": " + 20 power for each of the user's stat boosts.",
        "desc": "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
        "basePower": 20,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "quickguard": {
        "num": 501,
        "flags": {
            "snatch": 1
        },
        "name": "Quick Guard",
        "shortDesc": "Protects allies from priority attacks this turn.",
        "desc": "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokemon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 15,
        "priority": 3,
        "category": "Status",
        "contestType": "Tough"
    },
    "allyswitch": {
        "num": 502,
        "flags": {},
        "name": "Ally Switch",
        "shortDesc": "User and ally swap positions; using again can fail.",
        "desc": "The user swaps positions with its ally. Fails if the user is the only Pokemon on its side. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails or if the user's last move used is not Ally Switch.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 15,
        "priority": 2,
        "category": "Status",
        "contestType": "Smart"
    },
    "scald": {
        "num": 503,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Scald",
        "shortDesc": "30% chance to burn the target. Thaws target.",
        "desc": "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "shellsmash": {
        "num": 504,
        "flags": {
            "snatch": 1
        },
        "name": "Shell Smash",
        "shortDesc": "Lowers Def, SpD by 1; raises Atk, SpA, Spe by 2.",
        "desc": "Lowers the user's Defense and Special Defense by 1 stage. Raises the user's Attack, Special Attack, and Speed by 2 stages.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "healpulse": {
        "num": 505,
        "flags": {
            "protect": 1,
            "reflectable": 1,
            "pulse": 1
        },
        "name": "Heal Pulse",
        "shortDesc": "Heals the target by 50% of its max HP.",
        "desc": "The target restores 1/2 of its maximum HP, rounded half up. If the user has the Mega Launcher Ability, the target instead restores 3/4 of its maximum HP, rounded half down.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "hex": {
        "num": 506,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Hex",
        "shortDesc": "Power doubles if the target has a status ailment.",
        "desc": "Power doubles if the target has a non-volatile status condition.",
        "basePower": 65,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "skydrop": {
        "num": 507,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Sky Drop",
        "shortDesc": "User and foe fly up turn 1. Damages on turn 2.",
        "desc": "This attack takes the target into the air with the user on the first turn and executes on the second. Pokemon weighing 200 kg or more cannot be lifted. On the first turn, the user and the target avoid all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister. The user and the target cannot make a move between turns, but the target can select a move to use. This move cannot damage Flying-type Pokemon. Fails on the first turn if the target is an ally, if the target has a substitute, or if the target is using Bounce, Dig, Dive, Fly, Phantom Force, Shadow Force, or Sky Drop.",
        "basePower": 60,
        "type": "Flying",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "shiftgear": {
        "num": 508,
        "flags": {
            "snatch": 1
        },
        "name": "Shift Gear",
        "shortDesc": "Raises the user's Speed by 2 and Attack by 1.",
        "desc": "Raises the user's Speed by 2 stages and its Attack by 1 stage.",
        "basePower": 0,
        "type": "Steel",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "circlethrow": {
        "num": 509,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Circle Throw",
        "shortDesc": "Forces the target to switch to a random ally.",
        "desc": "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target is under the effect of Ingrain, has the Suction Cups Ability, or this move hit a substitute.",
        "basePower": 60,
        "type": "Fighting",
        "accuracy": 90,
        "pp": 10,
        "priority": -6,
        "category": "Physical",
        "contestType": "Tough"
    },
    "incinerate": {
        "num": 510,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Incinerate",
        "shortDesc": "Destroys the foe(s) Berry/Gem.",
        "desc": "The target loses its held item if it is a Berry or a Gem. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
        "basePower": 60,
        "type": "Fire",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "quash": {
        "num": 511,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Quash",
        "shortDesc": "Forces the target to move last this turn.",
        "desc": "Causes the target to take its turn after all other Pokemon this turn, no matter the priority of its selected move. Fails if the target already moved this turn.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "acrobatics": {
        "num": 512,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Acrobatics",
        "shortDesc": "Power doubles if the user has no held item.",
        "desc": "Power doubles if the user has no held item.",
        "basePower": 55,
        "type": "Flying",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "reflecttype": {
        "num": 513,
        "flags": {
            "protect": 1,
            "bypasssub": 1
        },
        "name": "Reflect Type",
        "shortDesc": "User becomes the same type as the target.",
        "desc": "Causes the user's types to become the same as the current types of the target. If the target's current types include typeless and a non-added type, typeless is ignored. If the target's current types include typeless and an added type from Forest's Curse or Trick-or-Treat, typeless is copied as the Normal type instead. Fails if the user is an Arceus or a Silvally, if the user is Terastallized, or if the target's current type is typeless alone.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "retaliate": {
        "num": 514,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Retaliate",
        "shortDesc": "Power doubles if an ally fainted last turn.",
        "desc": "Power doubles if one of the user's party members fainted last turn.",
        "basePower": 70,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "finalgambit": {
        "num": 515,
        "flags": {
            "protect": 1
        },
        "name": "Final Gambit",
        "shortDesc": "Does damage equal to the user's HP. User faints.",
        "desc": "Deals damage to the target equal to the user's current HP. If this move is successful, the user faints.",
        "basePower": 1,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "bestow": {
        "num": 516,
        "flags": {
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Bestow",
        "shortDesc": "User passes its held item to the target.",
        "desc": "The target receives the user's held item. Fails if the user has no item or is holding a Mail or Z-Crystal, if the target is already holding an item, if the user is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, a Pokemon that can Mega Evolve holding the Mega Stone for its species, or if the target is one of those Pokemon and the user is holding the respective item.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "inferno": {
        "num": 517,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Inferno",
        "shortDesc": "100% chance to burn the target.",
        "desc": "Has a 100% chance to burn the target.",
        "basePower": 100,
        "type": "Fire",
        "accuracy": 50,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "waterpledge": {
        "num": 518,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Water Pledge",
        "shortDesc": "Use with Grass or Fire Pledge for added effect.",
        "desc": "If one of the user's allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Water Gem, and cannot be redirected by the Storm Drain Ability.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "firepledge": {
        "num": 519,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fire Pledge",
        "shortDesc": "Use with Grass or Water Pledge for added effect.",
        "desc": "If one of the user's allies chose to use Grass Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Grass Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances and stacks with the Serene Grace Ability, except effects that cause flinching can only have their chance doubled once. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Fire Gem.",
        "basePower": 80,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "grasspledge": {
        "num": 520,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Grass Pledge",
        "shortDesc": "Use with Fire or Water Pledge for added effect.",
        "desc": "If one of the user's allies chose to use Fire Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Grass Gem.",
        "basePower": 80,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "voltswitch": {
        "num": 521,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Volt Switch",
        "shortDesc": "User switches out after damaging the target.",
        "desc": "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
        "basePower": 70,
        "type": "Electric",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "strugglebug": {
        "num": 522,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Struggle Bug",
        "shortDesc": "100% chance to lower the foe(s) Sp. Atk by 1.",
        "desc": "Has a 100% chance to lower the target's Special Attack by 1 stage.",
        "basePower": 50,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "bulldoze": {
        "num": 523,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bulldoze",
        "shortDesc": "100% chance lower adjacent Pkmn Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 60,
        "type": "Ground",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "frostbreath": {
        "num": 524,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Frost Breath",
        "shortDesc": "Always results in a critical hit.",
        "desc": "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
        "basePower": 60,
        "type": "Ice",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "dragontail": {
        "num": 525,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dragon Tail",
        "shortDesc": "Forces the target to switch to a random ally.",
        "desc": "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target used Ingrain previously, has the Suction Cups Ability, or this move hit a substitute.",
        "basePower": 60,
        "type": "Dragon",
        "accuracy": 90,
        "pp": 10,
        "priority": -6,
        "category": "Physical",
        "contestType": "Cool"
    },
    "workup": {
        "num": 526,
        "flags": {
            "snatch": 1
        },
        "name": "Work Up",
        "shortDesc": "Raises the user's Attack and Sp. Atk by 1.",
        "desc": "Raises the user's Attack and Special Attack by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "electroweb": {
        "num": 527,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Electroweb",
        "shortDesc": "100% chance to lower the foe(s) Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 55,
        "type": "Electric",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "wildcharge": {
        "num": 528,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Wild Charge",
        "shortDesc": "Has 1/4 recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 90,
        "type": "Electric",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "drillrun": {
        "num": 529,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Drill Run",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 80,
        "type": "Ground",
        "accuracy": 95,
        "critRatio": 2,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "dualchop": {
        "num": 530,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dual Chop",
        "shortDesc": "Hits 2 times in one turn.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 40,
        "type": "Dragon",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "heartstamp": {
        "num": 531,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Heart Stamp",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 60,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "hornleech": {
        "num": 532,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Horn Leech",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 75,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "sacredsword": {
        "num": 533,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Sacred Sword",
        "shortDesc": "Ignores the target's stat stage changes.",
        "desc": "Ignores the target's stat stage changes, including evasiveness.",
        "basePower": 90,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "razorshell": {
        "num": 534,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Razor Shell",
        "shortDesc": "50% chance to lower the target's Defense by 1.",
        "desc": "Has a 50% chance to lower the target's Defense by 1 stage.",
        "basePower": 75,
        "type": "Water",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "heatcrash": {
        "num": 535,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Heat Crash",
        "shortDesc": "More power the heavier the user than the target.",
        "desc": "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 1,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "leaftornado": {
        "num": 536,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Leaf Tornado",
        "shortDesc": "50% chance to lower the target's accuracy by 1.",
        "desc": "Has a 50% chance to lower the target's accuracy by 1 stage.",
        "basePower": 65,
        "type": "Grass",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "steamroller": {
        "num": 537,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Steamroller",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 65,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "cottonguard": {
        "num": 538,
        "flags": {
            "snatch": 1
        },
        "name": "Cotton Guard",
        "shortDesc": "Raises the user's Defense by 3.",
        "desc": "Raises the user's Defense by 3 stages.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "nightdaze": {
        "num": 539,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Night Daze",
        "shortDesc": "40% chance to lower the target's accuracy by 1.",
        "desc": "Has a 40% chance to lower the target's accuracy by 1 stage.",
        "basePower": 85,
        "type": "Dark",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "psystrike": {
        "num": 540,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Psystrike",
        "shortDesc": "Damages target based on Defense, not Sp. Def.",
        "desc": "Deals damage to the target based on its Defense instead of Special Defense.",
        "basePower": 100,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "tailslap": {
        "num": 541,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Tail Slap",
        "shortDesc": "Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 25,
        "type": "Normal",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "hurricane": {
        "num": 542,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Hurricane",
        "shortDesc": "30% chance to confuse target. Can't miss in rain.",
        "desc": "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 70%.",
        "basePower": 110,
        "type": "Flying",
        "accuracy": 70,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "headcharge": {
        "num": 543,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Head Charge",
        "shortDesc": "Has 1/4 recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "geargrind": {
        "num": 544,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Gear Grind",
        "shortDesc": "Hits 2 times in one turn.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 50,
        "type": "Steel",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "searingshot": {
        "num": 545,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Searing Shot",
        "shortDesc": "30% chance to burn adjacent Pokemon.",
        "desc": "Has a 30% chance to burn the target.",
        "basePower": 100,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "technoblast": {
        "num": 546,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Techno Blast",
        "shortDesc": "Type varies based on the held Drive.",
        "desc": "This move's type depends on the user's held Drive.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "relicsong": {
        "num": 547,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Relic Song",
        "shortDesc": "10% chance to sleep foe(s). Meloetta transforms.",
        "desc": "Has a 10% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active.",
        "basePower": 75,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "secretsword": {
        "num": 548,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "slicing": 1
        },
        "name": "Secret Sword",
        "shortDesc": "Damages target based on Defense, not Sp. Def.",
        "desc": "Deals damage to the target based on its Defense instead of Special Defense.",
        "basePower": 85,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "glaciate": {
        "num": 549,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Glaciate",
        "shortDesc": "100% chance to lower the foe(s) Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 65,
        "type": "Ice",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "boltstrike": {
        "num": 550,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Bolt Strike",
        "shortDesc": "20% chance to paralyze the target.",
        "desc": "Has a 20% chance to paralyze the target.",
        "basePower": 130,
        "type": "Electric",
        "accuracy": 85,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "blueflare": {
        "num": 551,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Blue Flare",
        "shortDesc": "20% chance to burn the target.",
        "desc": "Has a 20% chance to burn the target.",
        "basePower": 130,
        "type": "Fire",
        "accuracy": 85,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "fierydance": {
        "num": 552,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fiery Dance",
        "shortDesc": "50% chance to raise the user's Sp. Atk by 1.",
        "desc": "Has a 50% chance to raise the user's Special Attack by 1 stage.",
        "basePower": 80,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "freezeshock": {
        "num": 553,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Freeze Shock",
        "shortDesc": "Charges turn 1. Hits turn 2. 30% paralyze.",
        "desc": "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 140,
        "type": "Ice",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "iceburn": {
        "num": 554,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Ice Burn",
        "shortDesc": "Charges turn 1. Hits turn 2. 30% burn.",
        "desc": "Has a 30% chance to burn the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 140,
        "type": "Ice",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "snarl": {
        "num": 555,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Snarl",
        "shortDesc": "100% chance to lower the foe(s) Sp. Atk by 1.",
        "desc": "Has a 100% chance to lower the target's Special Attack by 1 stage.",
        "basePower": 55,
        "type": "Dark",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "iciclecrash": {
        "num": 556,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Icicle Crash",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 85,
        "type": "Ice",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "vcreate": {
        "num": 557,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "V-create",
        "shortDesc": "Lowers the user's Defense, Sp. Def, Speed by 1.",
        "desc": "Lowers the user's Speed, Defense, and Special Defense by 1 stage.",
        "basePower": 180,
        "type": "Fire",
        "accuracy": 95,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "fusionflare": {
        "num": 558,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Fusion Flare",
        "shortDesc": "Power doubles if used after Fusion Bolt this turn.",
        "desc": "Power doubles if the last move used by any Pokemon this turn was Fusion Bolt.",
        "basePower": 100,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "fusionbolt": {
        "num": 559,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fusion Bolt",
        "shortDesc": "Power doubles if used after Fusion Flare this turn.",
        "desc": "Power doubles if the last move used by any Pokemon this turn was Fusion Flare.",
        "basePower": 100,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "flyingpress": {
        "num": 560,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Flying Press",
        "shortDesc": "Combines Flying in its type effectiveness.",
        "desc": "This move combines Flying in its type effectiveness against the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 100,
        "type": "Fighting",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "matblock": {
        "num": 561,
        "flags": {
            "snatch": 1
        },
        "name": "Mat Block",
        "shortDesc": "Protects allies from damaging attacks. Turn 1 only.",
        "desc": "The user and its party members are protected from damaging attacks made by other Pokemon, including allies, during this turn. Fails unless it is the user's first turn on the field, if the user moves last this turn, or if this move is already in effect for the user's side.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "belch": {
        "num": 562,
        "flags": {
            "protect": 1
        },
        "name": "Belch",
        "shortDesc": "Cannot be selected until the user eats a Berry.",
        "desc": "This move cannot be selected until the user eats a Berry, either by eating one that was held, stealing and eating one off another Pokemon with Bug Bite or Pluck, or eating one that was thrown at it with Fling. Once the condition is met, this move can be selected and used for the rest of the battle even if the user gains or uses another item or switches out. Consuming a Berry with Natural Gift does not count for the purposes of eating one.",
        "basePower": 120,
        "type": "Poison",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "rototiller": {
        "num": 563,
        "flags": {},
        "name": "Rototiller",
        "shortDesc": "Raises Atk/Sp. Atk of grounded Grass types by 1.",
        "desc": "Raises the Attack and Special Attack of all grounded Grass-type Pokemon on the field by 1 stage.",
        "basePower": 0,
        "type": "Ground",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "stickyweb": {
        "num": 564,
        "flags": {
            "reflectable": 1
        },
        "name": "Sticky Web",
        "shortDesc": "Lowers Speed of grounded foes by 1 on switch-in.",
        "desc": "Sets up a hazard on the opposing side of the field, lowering the Speed by 1 stage of each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Fails if the effect is already active on the opposing side. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "fellstinger": {
        "num": 565,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Fell Stinger",
        "shortDesc": "Raises user's Attack by 3 if this KOes the target.",
        "desc": "Raises the user's Attack by 3 stages if this move knocks out the target.",
        "basePower": 50,
        "type": "Bug",
        "accuracy": 100,
        "pp": 25,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "phantomforce": {
        "num": 566,
        "flags": {
            "mirror": 1,
            "contact": 1
        },
        "name": "Phantom Force",
        "shortDesc": "Disappears turn 1. Hits turn 2. Breaks protection.",
        "desc": "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 90,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "trickortreat": {
        "num": 567,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Trick-or-Treat",
        "shortDesc": "Adds Ghost to the target's type(s).",
        "desc": "Causes the Ghost type to be added to the target, effectively making it have two or three types. Fails if the target is already a Ghost type. If Forest's Curse adds a type to the target, it replaces the type added by this move and vice versa.",
        "basePower": 0,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "nobleroar": {
        "num": 568,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Noble Roar",
        "shortDesc": "Lowers the target's Attack and Sp. Atk by 1.",
        "desc": "Lowers the target's Attack and Special Attack by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "iondeluge": {
        "num": 569,
        "flags": {},
        "name": "Ion Deluge",
        "shortDesc": "Normal moves become Electric type this turn.",
        "desc": "Causes Normal-type moves to become Electric type this turn. The effect happens after other effects that change a move's type.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": true,
        "pp": 25,
        "priority": 1,
        "category": "Status",
        "contestType": "Beauty"
    },
    "paraboliccharge": {
        "num": 570,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Parabolic Charge",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 65,
        "type": "Electric",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "forestscurse": {
        "num": 571,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Forest's Curse",
        "shortDesc": "Adds Grass to the target's type(s).",
        "desc": "Causes the Grass type to be added to the target, effectively making it have two or three types. Fails if the target is already a Grass type. If Trick-or-Treat adds a type to the target, it replaces the type added by this move and vice versa.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "petalblizzard": {
        "num": 572,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Petal Blizzard",
        "shortDesc": "No additional effect. Hits adjacent Pokemon.",
        "desc": "No additional effect.",
        "basePower": 90,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "freezedry": {
        "num": 573,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Freeze-Dry",
        "shortDesc": "10% chance to freeze. Super effective on Water.",
        "desc": "Has a 10% chance to freeze the target. This move's type effectiveness against Water is changed to be super effective no matter what this move's type is.",
        "basePower": 70,
        "type": "Ice",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "disarmingvoice": {
        "num": 574,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Disarming Voice",
        "shortDesc": "This move does not check accuracy. Hits foes.",
        "desc": "This move does not check accuracy.",
        "basePower": 40,
        "type": "Fairy",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "partingshot": {
        "num": 575,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Parting Shot",
        "shortDesc": "Lowers target's Atk, Sp. Atk by 1. User switches.",
        "desc": "Lowers the target's Attack and Special Attack by 1 stage. If this move is successful, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if the target's Attack and Special Attack stat stages were both unchanged, or if there are no unfainted party members.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "topsyturvy": {
        "num": 576,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Topsy-Turvy",
        "shortDesc": "Inverts the target's stat stages.",
        "desc": "The target's positive stat stages become negative and vice versa. Fails if all of the target's stat stages are 0.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "drainingkiss": {
        "num": 577,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Draining Kiss",
        "shortDesc": "User recovers 75% of the damage dealt.",
        "desc": "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 50,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "craftyshield": {
        "num": 578,
        "flags": {},
        "name": "Crafty Shield",
        "shortDesc": "Protects allies from Status moves this turn.",
        "desc": "The user and its party members are protected from non-damaging attacks made by other Pokemon, including allies, during this turn. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 10,
        "priority": 3,
        "category": "Status",
        "contestType": "Smart"
    },
    "flowershield": {
        "num": 579,
        "flags": {},
        "name": "Flower Shield",
        "shortDesc": "Raises Defense by 1 of all active Grass types.",
        "desc": "Raises the Defense of all active Grass-type Pokemon by 1 stage. Fails if there are no active Grass-type Pokemon.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "grassyterrain": {
        "num": 580,
        "flags": {},
        "name": "Grassy Terrain",
        "shortDesc": "5 turns. Grounded: +Grass power, +1/16 max HP.",
        "desc": "For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokemon is multiplied by 1.3, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "mistyterrain": {
        "num": 581,
        "flags": {},
        "name": "Misty Terrain",
        "shortDesc": "5 turns. Can't status,-Dragon power vs grounded.",
        "desc": "For 5 turns, the terrain becomes Misty Terrain. During the effect, the power of Dragon-type attacks used against grounded Pokemon is multiplied by 0.5 and grounded Pokemon cannot be inflicted with a non-volatile status condition nor confusion. Grounded Pokemon can become affected by Yawn but cannot fall asleep from its effect. Camouflage transforms the user into a Fairy type, Nature Power becomes Moonblast, and Secret Power has a 30% chance to lower Special Attack by 1 stage. Fails if the current terrain is Misty Terrain.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "electrify": {
        "num": 582,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Electrify",
        "shortDesc": "Changes the target's move to Electric this turn.",
        "desc": "Causes the target's move to become Electric type this turn. Among effects that can change a move's type, this effect happens last. Fails if the target already moved this turn.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "playrough": {
        "num": 583,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Play Rough",
        "shortDesc": "10% chance to lower the target's Attack by 1.",
        "desc": "Has a 10% chance to lower the target's Attack by 1 stage.",
        "basePower": 90,
        "type": "Fairy",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "fairywind": {
        "num": 584,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Fairy Wind",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 30,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "moonblast": {
        "num": 585,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Moonblast",
        "shortDesc": "30% chance to lower the target's Sp. Atk by 1.",
        "desc": "Has a 30% chance to lower the target's Special Attack by 1 stage.",
        "basePower": 95,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "boomburst": {
        "num": 586,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Boomburst",
        "shortDesc": "No additional effect. Hits adjacent Pokemon.",
        "desc": "No additional effect.",
        "basePower": 140,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "fairylock": {
        "num": 587,
        "flags": {
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Fairy Lock",
        "shortDesc": "Prevents all Pokemon from switching next turn.",
        "desc": "Prevents all active Pokemon from switching next turn. A Pokemon can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. Fails if the effect is already active.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "kingsshield": {
        "num": 588,
        "flags": {},
        "name": "King's Shield",
        "shortDesc": "Protects from damaging attacks. Contact: -1 Atk.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Attack lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Steel",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Tough"
    },
    "playnice": {
        "num": 589,
        "flags": {
            "mirror": 1,
            "bypasssub": 1,
            "reflectable": 1
        },
        "name": "Play Nice",
        "shortDesc": "Lowers the target's Attack by 1.",
        "desc": "Lowers the target's Attack by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "confide": {
        "num": 590,
        "flags": {
            "mirror": 1,
            "reflectable": 1,
            "sound": 1
        },
        "name": "Confide",
        "shortDesc": "Lowers the target's Sp. Atk by 1.",
        "desc": "Lowers the target's Special Attack by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "diamondstorm": {
        "num": 591,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Diamond Storm",
        "shortDesc": "50% chance to raise user's Defense by 2.",
        "desc": "Has a 50% chance to raise the user's Defense by 2 stages.",
        "basePower": 100,
        "type": "Rock",
        "accuracy": 95,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "steameruption": {
        "num": 592,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Steam Eruption",
        "shortDesc": "30% chance to burn the target. Thaws target.",
        "desc": "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
        "basePower": 110,
        "type": "Water",
        "accuracy": 95,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "hyperspacehole": {
        "num": 593,
        "flags": {
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Hyperspace Hole",
        "shortDesc": "Breaks the target's protection for this turn.",
        "desc": "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "watershuriken": {
        "num": 594,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Water Shuriken",
        "shortDesc": "Usually goes first. Hits 2-5 times in one turn.",
        "desc": "Hits two to five times. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times.",
        "basePower": 15,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 1,
        "category": "Special",
        "contestType": "Beauty"
    },
    "mysticalfire": {
        "num": 595,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mystical Fire",
        "shortDesc": "100% chance to lower the target's Sp. Atk by 1.",
        "desc": "Has a 100% chance to lower the target's Special Attack by 1 stage.",
        "basePower": 80,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "spikyshield": {
        "num": 596,
        "flags": {},
        "name": "Spiky Shield",
        "shortDesc": "Protects from moves. Contact: loses 1/8 max HP.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Smart"
    },
    "aromaticmist": {
        "num": 597,
        "flags": {
            "bypasssub": 1
        },
        "name": "Aromatic Mist",
        "shortDesc": "Raises an ally's Sp. Def by 1.",
        "desc": "Raises the target's Special Defense by 1 stage. Fails if there is no ally adjacent to the user.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "eerieimpulse": {
        "num": 598,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Eerie Impulse",
        "shortDesc": "Lowers the target's Sp. Atk by 2.",
        "desc": "Lowers the target's Special Attack by 2 stages.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "venomdrench": {
        "num": 599,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Venom Drench",
        "shortDesc": "Lowers Atk/Sp. Atk/Speed of poisoned foes by 1.",
        "desc": "Lowers the target's Attack, Special Attack, and Speed by 1 stage if the target is poisoned. Fails if the target is not poisoned.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "powder": {
        "num": 600,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "powder": 1,
            "reflectable": 1
        },
        "name": "Powder",
        "shortDesc": "If using a Fire move, target loses 1/4 max HP.",
        "desc": "If the target uses a Fire-type move this turn, it is prevented from executing and the target loses 1/4 of its maximum HP, rounded half up. This effect does not happen if the Fire-type move is prevented by Primordial Sea.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 1,
        "category": "Status",
        "contestType": "Smart"
    },
    "geomancy": {
        "num": 601,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Geomancy",
        "shortDesc": "Charges, then raises SpA, SpD, Spe by 2 turn 2.",
        "desc": "Raises the user's Special Attack, Special Defense, and Speed by 2 stages. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "magneticflux": {
        "num": 602,
        "flags": {
            "snatch": 1,
            "bypasssub": 1
        },
        "name": "Magnetic Flux",
        "shortDesc": "Raises Def, Sp. Def of allies with Plus/Minus by 1.",
        "desc": "Raises the Defense and Special Defense of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "happyhour": {
        "num": 603,
        "flags": {},
        "name": "Happy Hour",
        "shortDesc": "No competitive use.",
        "desc": "No competitive use.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "electricterrain": {
        "num": 604,
        "flags": {},
        "name": "Electric Terrain",
        "shortDesc": "5 turns. Grounded: +Electric power, can't sleep.",
        "desc": "For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Grounded Pokemon cannot become affected by Yawn or fall asleep from its effect. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.",
        "basePower": 0,
        "type": "Electric",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "dazzlinggleam": {
        "num": 605,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Dazzling Gleam",
        "shortDesc": "No additional effect. Hits adjacent foes.",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "celebrate": {
        "num": 606,
        "flags": {},
        "name": "Celebrate",
        "shortDesc": "No competitive use.",
        "desc": "No competitive use.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "holdhands": {
        "num": 607,
        "flags": {
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Hold Hands",
        "shortDesc": "No competitive use.",
        "desc": "No competitive use. Fails if there is no ally adjacent to the user.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "babydolleyes": {
        "num": 608,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Baby-Doll Eyes",
        "shortDesc": "Lowers the target's Attack by 1.",
        "desc": "Lowers the target's Attack by 1 stage.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 30,
        "priority": 1,
        "category": "Status",
        "contestType": "Cute"
    },
    "nuzzle": {
        "num": 609,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Nuzzle",
        "shortDesc": "100% chance to paralyze the target.",
        "desc": "Has a 100% chance to paralyze the target.",
        "basePower": 20,
        "type": "Electric",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "holdback": {
        "num": 610,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Hold Back",
        "shortDesc": "Always leaves the target with at least 1 HP.",
        "desc": "Leaves the target with at least 1 HP.",
        "basePower": 40,
        "type": "Normal",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "infestation": {
        "num": 611,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Infestation",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 20,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "poweruppunch": {
        "num": 612,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Power-Up Punch",
        "shortDesc": "100% chance to raise the user's Attack by 1.",
        "desc": "Has a 100% chance to raise the user's Attack by 1 stage.",
        "basePower": 40,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "oblivionwing": {
        "num": 613,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Oblivion Wing",
        "shortDesc": "User recovers 75% of the damage dealt.",
        "desc": "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 80,
        "type": "Flying",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "thousandarrows": {
        "num": 614,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Thousand Arrows",
        "shortDesc": "Grounds adjacent foes. First hit neutral on Flying.",
        "desc": "This move can hit airborne Pokemon, which includes Flying-type Pokemon, Pokemon with the Levitate Ability, Pokemon holding an Air Balloon, and Pokemon under the effect of Magnet Rise or Telekinesis. If the target is a Flying type and is not already grounded, this move deals neutral damage regardless of its other type(s). This move can hit a target using Bounce, Fly, or Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
        "basePower": 90,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "thousandwaves": {
        "num": 615,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Thousand Waves",
        "shortDesc": "Hits adjacent foes. Prevents them from switching.",
        "desc": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
        "basePower": 90,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "landswrath": {
        "num": 616,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Land's Wrath",
        "shortDesc": "No additional effect. Hits adjacent foes.",
        "desc": "No additional effect.",
        "basePower": 90,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "lightofruin": {
        "num": 617,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Light Of Ruin",
        "shortDesc": "Has 1/2 recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 140,
        "type": "Fairy",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "originpulse": {
        "num": 618,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Origin Pulse",
        "shortDesc": "No additional effect. Hits adjacent foes.",
        "desc": "No additional effect.",
        "basePower": 110,
        "type": "Water",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "precipiceblades": {
        "num": 619,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Precipice Blades",
        "shortDesc": "No additional effect. Hits adjacent foes.",
        "desc": "No additional effect.",
        "basePower": 120,
        "type": "Ground",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "dragonascent": {
        "num": 620,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dragon Ascent",
        "shortDesc": "Lowers the user's Defense and Sp. Def by 1.",
        "desc": "Lowers the user's Defense and Special Defense by 1 stage.",
        "basePower": 120,
        "type": "Flying",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "hyperspacefury": {
        "num": 621,
        "flags": {
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Hyperspace Fury",
        "shortDesc": "Hoopa-U: Lowers user's Def by 1; breaks protect.",
        "desc": "Lowers the user's Defense by 1 stage. This move cannot be used successfully unless the user's current form, while considering Transform, is Hoopa Unbound. If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
        "basePower": 100,
        "type": "Dark",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "shoreup": {
        "num": 622,
        "flags": {
            "snatch": 1
        },
        "name": "Shore Up",
        "shortDesc": "User restores 1/2 its max HP; 2/3 in Sandstorm.",
        "desc": "The user restores 1/2 of its maximum HP, rounded half down. If the weather is Sandstorm, the user instead restores 2/3 of its maximum HP, rounded half down.",
        "basePower": 0,
        "type": "Ground",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "firstimpression": {
        "num": 623,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "First Impression",
        "shortDesc": "Hits first. First turn out only.",
        "desc": "Fails unless it is the user's first turn on the field.",
        "basePower": 90,
        "type": "Bug",
        "accuracy": 100,
        "pp": 10,
        "priority": 2,
        "category": "Physical",
        "contestType": "Cool"
    },
    "banefulbunker": {
        "num": 624,
        "flags": {},
        "name": "Baneful Bunker",
        "shortDesc": "Protects from moves. Contact: poison.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Tough"
    },
    "spiritshackle": {
        "num": 625,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Spirit Shackle",
        "shortDesc": "Prevents the target from switching out.",
        "desc": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
        "basePower": 80,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "darkestlariat": {
        "num": 626,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Darkest Lariat",
        "shortDesc": "Ignores the target's stat stage changes.",
        "desc": "Ignores the target's stat stage changes, including evasiveness.",
        "basePower": 85,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "sparklingaria": {
        "num": 627,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Sparkling Aria",
        "shortDesc": "The target is cured of its burn.",
        "desc": "If the user has not fainted, the target is cured of its burn.",
        "basePower": 90,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "icehammer": {
        "num": 628,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Ice Hammer",
        "shortDesc": "Lowers the user's Speed by 1.",
        "desc": "Lowers the user's Speed by 1 stage.",
        "basePower": 100,
        "type": "Ice",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "floralhealing": {
        "num": 629,
        "flags": {
            "protect": 1,
            "reflectable": 1
        },
        "name": "Floral Healing",
        "shortDesc": "Heals the target by 50% of its max HP.",
        "desc": "The target restores 1/2 of its maximum HP, rounded half up. If the terrain is Grassy Terrain, the target instead restores 2/3 of its maximum HP, rounded half down.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "highhorsepower": {
        "num": 630,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "High Horsepower",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 95,
        "type": "Ground",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "strengthsap": {
        "num": 631,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Strength Sap",
        "shortDesc": "User heals HP=target's Atk stat. Lowers Atk by 1.",
        "desc": "Lowers the target's Attack by 1 stage. The user restores its HP equal to the target's Attack stat calculated with its stat stage before this move was used. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. Fails if the target's Attack stat stage is -6.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "solarblade": {
        "num": 632,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Solar Blade",
        "shortDesc": "Charges turn 1. Hits turn 2. No charge in sunlight.",
        "desc": "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm and the user is not holding Utility Umbrella. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Desolate Land or Sunny Day, the move still requires a turn to charge.",
        "basePower": 125,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "leafage": {
        "num": 633,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Leafage",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Grass",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "spotlight": {
        "num": 634,
        "flags": {
            "protect": 1,
            "reflectable": 1
        },
        "name": "Spotlight",
        "shortDesc": "Target's foes' moves are redirected to it this turn.",
        "desc": "Until the end of the turn, all single-target attacks from opponents of the target are redirected to the target. Such attacks are redirected to the target before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 15,
        "priority": 3,
        "category": "Status",
        "contestType": "Cute"
    },
    "toxicthread": {
        "num": 635,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Toxic Thread",
        "shortDesc": "Lowers the target's Speed by 1 and poisons it.",
        "desc": "Lowers the target's Speed by 1 stage and poisons it.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "laserfocus": {
        "num": 636,
        "flags": {
            "snatch": 1
        },
        "name": "Laser Focus",
        "shortDesc": "Until the end of the next turn, user's moves crit.",
        "desc": "Until the end of the next turn, the user's attacks will be critical hits.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 30,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "gearup": {
        "num": 637,
        "flags": {
            "snatch": 1,
            "bypasssub": 1
        },
        "name": "Gear Up",
        "shortDesc": "Raises Atk, Sp. Atk of allies with Plus/Minus by 1.",
        "desc": "Raises the Attack and Special Attack of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
        "basePower": 0,
        "type": "Steel",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "throatchop": {
        "num": 638,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Throat Chop",
        "shortDesc": "For 2 turns, the target cannot use sound moves.",
        "desc": "For 2 turns, the target cannot use sound-based moves.",
        "basePower": 80,
        "type": "Dark",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "pollenpuff": {
        "num": 639,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Pollen Puff",
        "shortDesc": "If the target is an ally, heals 50% of its max HP.",
        "desc": "If the target is an ally, this move restores 1/2 of its maximum HP, rounded down, instead of dealing damage.",
        "basePower": 90,
        "type": "Bug",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "anchorshot": {
        "num": 640,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Anchor Shot",
        "shortDesc": "Prevents the target from switching out.",
        "desc": "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
        "basePower": 80,
        "type": "Steel",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "psychicterrain": {
        "num": 641,
        "flags": {},
        "name": "Psychic Terrain",
        "shortDesc": "5 turns. Grounded: +Psychic power, priority-safe.",
        "desc": "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokemon is multiplied by 1.3 and grounded Pokemon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target's Speed by 1 stage. Fails if the current terrain is Psychic Terrain.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "lunge": {
        "num": 642,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Lunge",
        "shortDesc": "100% chance to lower the target's Attack by 1.",
        "desc": "Has a 100% chance to lower the target's Attack by 1 stage.",
        "basePower": 80,
        "type": "Bug",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "firelash": {
        "num": 643,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Fire Lash",
        "shortDesc": "100% chance to lower the target's Defense by 1.",
        "desc": "Has a 100% chance to lower the target's Defense by 1 stage.",
        "basePower": 80,
        "type": "Fire",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "powertrip": {
        "num": 644,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Power Trip",
        "shortDesc": " + 20 power for each of the user's stat boosts.",
        "desc": "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
        "basePower": 20,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "burnup": {
        "num": 645,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Burn Up",
        "shortDesc": "User's Fire type becomes typeless; must be Fire.",
        "desc": "Fails unless the user is a Fire type. If this move is successful and the user is not Terastallized, the user's Fire type becomes typeless as long as it remains active.",
        "basePower": 130,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "speedswap": {
        "num": 646,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Speed Swap",
        "shortDesc": "Swaps Speed stat with target.",
        "desc": "The user swaps its Speed stat with the target. Stat stage changes are unaffected.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "smartstrike": {
        "num": 647,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Smart Strike",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 70,
        "type": "Steel",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "purify": {
        "num": 648,
        "flags": {
            "protect": 1,
            "reflectable": 1
        },
        "name": "Purify",
        "shortDesc": "Cures target's status; heals user 1/2 max HP if so.",
        "desc": "The target is cured if it has a non-volatile status condition. If the target was cured, the user restores 1/2 of its maximum HP, rounded down.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "revelationdance": {
        "num": 649,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Revelation Dance",
        "shortDesc": "Type varies based on the user's primary type.",
        "desc": "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
        "basePower": 90,
        "type": "Normal",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "coreenforcer": {
        "num": 650,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Core Enforcer",
        "shortDesc": "Nullifies the foe(s) Ability if the foe(s) move first.",
        "desc": "If the user moves after the target, the target's Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Zen Mode, or Zero to Hero, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately.",
        "basePower": 100,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "tropkick": {
        "num": 651,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Trop Kick",
        "shortDesc": "100% chance to lower the target's Attack by 1.",
        "desc": "Has a 100% chance to lower the target's Attack by 1 stage.",
        "basePower": 70,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "instruct": {
        "num": 652,
        "flags": {
            "protect": 1,
            "bypasssub": 1
        },
        "name": "Instruct",
        "shortDesc": "The target immediately uses its last used move.",
        "desc": "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Blazing Torque, Celebrate, Chatter, Combat Torque, Copycat, Dynamax Cannon, Focus Punch, Hold Hands, Ice Ball, Instruct, King's Shield, Magical Torque, Me First, Metronome, Mimic, Mirror Move, Nature Power, Noxious Torque, Obstruct, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, Wicked Torque, any two-turn move, or any recharge move.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "beakblast": {
        "num": 653,
        "flags": {
            "protect": 1,
            "bullet": 1
        },
        "name": "Beak Blast",
        "shortDesc": "Burns on contact with the user before it moves.",
        "desc": "If the user is hit by a contact move this turn before it can execute this move, the attacker is burned.",
        "basePower": 100,
        "type": "Flying",
        "accuracy": 100,
        "pp": 15,
        "priority": -3,
        "category": "Physical",
        "contestType": "Cool"
    },
    "clangingscales": {
        "num": 654,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Clanging Scales",
        "shortDesc": "Lowers the user's Defense by 1.",
        "desc": "Lowers the user's Defense by 1 stage.",
        "basePower": 110,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "dragonhammer": {
        "num": 655,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dragon Hammer",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 90,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "brutalswing": {
        "num": 656,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Brutal Swing",
        "shortDesc": "No additional effect. Hits adjacent Pokemon.",
        "desc": "No additional effect.",
        "basePower": 60,
        "type": "Dark",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "auroraveil": {
        "num": 657,
        "flags": {
            "snatch": 1
        },
        "name": "Aurora Veil",
        "shortDesc": "For 5 turns, damage to allies halved. Snow only.",
        "desc": "For 5 turns, the user and its party members take 0.5x damage from physical and special attacks, or 0.66x damage if in a Double Battle; does not reduce damage further with Reflect or Light Screen. Critical hits ignore this protection. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Brick Break and Psychic Fangs remove the effect before damage is calculated. Lasts for 8 turns if the user is holding Light Clay. Fails unless the weather is Hail.",
        "basePower": 0,
        "type": "Ice",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "shelltrap": {
        "num": 658,
        "flags": {
            "protect": 1
        },
        "name": "Shell Trap",
        "shortDesc": "User must take physical damage before moving.",
        "desc": "Fails unless the user is hit by a physical attack from an opponent this turn before it can execute the move. If the user was hit and has not fainted, it attacks immediately after being hit, and the effect ends. If the opponent's physical attack had a secondary effect removed by the Sheer Force Ability, it does not count for the purposes of this effect.",
        "basePower": 150,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": -3,
        "category": "Special",
        "contestType": "Beauty"
    },
    "fleurcannon": {
        "num": 659,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Fleur Cannon",
        "shortDesc": "Lowers the user's Sp. Atk by 2.",
        "desc": "Lowers the user's Special Attack by 2 stages.",
        "basePower": 130,
        "type": "Fairy",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "psychicfangs": {
        "num": 660,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Psychic Fangs",
        "shortDesc": "Destroys screens, unless the target is immune.",
        "desc": "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
        "basePower": 85,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "stompingtantrum": {
        "num": 661,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Stomping Tantrum",
        "shortDesc": "Power doubles if the user's last move failed.",
        "desc": "Power doubles if the user's last move on the previous turn, including moves called by other moves or those used through Instruct, Magic Coat, Snatch, or the Dancer or Magic Bounce Abilities, failed to do any of its normal effects, not including damage from an unsuccessful High Jump Kick, Jump Kick, or Mind Blown, or if the user was prevented from moving by any effect other than recharging or Sky Drop. A move that was blocked by Baneful Bunker, Detect, King's Shield, Protect, Spiky Shield, Crafty Shield, Mat Block, Quick Guard, or Wide Guard will not double this move's power, nor will Bounce or Fly ending early due to the effect of Gravity, Smack Down, or Thousand Arrows.",
        "basePower": 75,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "shadowbone": {
        "num": 662,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Shadow Bone",
        "shortDesc": "20% chance to lower the target's Defense by 1.",
        "desc": "Has a 20% chance to lower the target's Defense by 1 stage.",
        "basePower": 85,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "accelerock": {
        "num": 663,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Accelerock",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Rock",
        "accuracy": 100,
        "pp": 20,
        "priority": 1,
        "category": "Physical",
        "contestType": "Tough"
    },
    "liquidation": {
        "num": 664,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Liquidation",
        "shortDesc": "20% chance to lower the target's Defense by 1.",
        "desc": "Has a 20% chance to lower the target's Defense by 1 stage.",
        "basePower": 85,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "prismaticlaser": {
        "num": 665,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Prismatic Laser",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 160,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "spectralthief": {
        "num": 666,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1,
            "contact": 1
        },
        "name": "Spectral Thief",
        "shortDesc": "Steals target's boosts before dealing damage.",
        "desc": "The target's stat stages greater than 0 are stolen from it and applied to the user before dealing damage.",
        "basePower": 90,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "sunsteelstrike": {
        "num": 667,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Sunsteel Strike",
        "shortDesc": "Ignores the Abilities of other Pokemon.",
        "desc": "This move and its effects ignore the Abilities of other Pokemon.",
        "basePower": 100,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "moongeistbeam": {
        "num": 668,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Moongeist Beam",
        "shortDesc": "Ignores the Abilities of other Pokemon.",
        "desc": "This move and its effects ignore the Abilities of other Pokemon.",
        "basePower": 100,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "tearfullook": {
        "num": 669,
        "flags": {
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Tearful Look",
        "shortDesc": "Lowers the target's Attack and Sp. Atk by 1.",
        "desc": "Lowers the target's Attack and Special Attack by 1 stage.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "zingzap": {
        "num": 670,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Zing Zap",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 80,
        "type": "Electric",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "naturesmadness": {
        "num": 671,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Nature's Madness",
        "shortDesc": "Does damage equal to 1/2 target's current HP.",
        "desc": "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
        "basePower": 1,
        "type": "Fairy",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "multiattack": {
        "num": 672,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Multi-Attack",
        "shortDesc": "Type varies based on the held Memory.",
        "desc": "This move's type depends on the user's held Memory.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "mindblown": {
        "num": 673,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mind Blown",
        "shortDesc": "User loses 50% max HP. Hits adjacent Pokemon.",
        "desc": "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability. This move is prevented from executing and the user does not lose HP if any active Pokemon has the Damp Ability, or if this move is Fire type and the user is affected by Powder or the weather is Primordial Sea.",
        "basePower": 150,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "plasmafists": {
        "num": 674,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Plasma Fists",
        "shortDesc": "Normal moves become Electric type this turn.",
        "desc": "If this move is successful, causes Normal-type moves to become Electric type this turn.",
        "basePower": 100,
        "type": "Electric",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "photongeyser": {
        "num": 675,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Photon Geyser",
        "shortDesc": "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
        "desc": "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
        "basePower": 100,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "zippyzap": {
        "num": 676,
        "flags": {
            "protect": 1,
            "contact": 1
        },
        "name": "Zippy Zap",
        "shortDesc": "Goes first. Raises user's evasion by 1.",
        "desc": "Has a 100% chance to raise the user's evasion by 1 stage.",
        "basePower": 80,
        "type": "Electric",
        "accuracy": 100,
        "pp": 10,
        "priority": 2,
        "category": "Physical"
    },
    "splishysplash": {
        "num": 677,
        "flags": {
            "protect": 1
        },
        "name": "Splishy Splash",
        "shortDesc": "30% chance to paralyze the target.",
        "desc": "Has a 30% chance to paralyze the target.",
        "basePower": 90,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special"
    },
    "floatyfall": {
        "num": 678,
        "flags": {
            "protect": 1,
            "contact": 1
        },
        "name": "Floaty Fall",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 90,
        "type": "Flying",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "pikapapow": {
        "num": 679,
        "flags": {
            "protect": 1
        },
        "name": "Pika Papow",
        "shortDesc": "Max happiness: 102 power. Can't miss.",
        "desc": "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
        "basePower": 1,
        "type": "Electric",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Special"
    },
    "bouncybubble": {
        "num": 680,
        "flags": {
            "protect": 1
        },
        "name": "Bouncy Bubble",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 60,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special"
    },
    "buzzybuzz": {
        "num": 681,
        "flags": {
            "protect": 1
        },
        "name": "Buzzy Buzz",
        "shortDesc": "100% chance to paralyze the foe.",
        "desc": "Has a 100% chance to paralyze the foe.",
        "basePower": 60,
        "type": "Electric",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special"
    },
    "sizzlyslide": {
        "num": 682,
        "flags": {
            "protect": 1,
            "contact": 1,
            "defrost": 1
        },
        "name": "Sizzly Slide",
        "shortDesc": "100% chance to burn the foe.",
        "desc": "Has a 100% chance to burn the foe.",
        "basePower": 60,
        "type": "Fire",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical"
    },
    "glitzyglow": {
        "num": 683,
        "flags": {
            "protect": 1
        },
        "name": "Glitzy Glow",
        "shortDesc": "Summons Light Screen.",
        "desc": "This move summons Light Screen for 5 turns upon use.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Special"
    },
    "baddybad": {
        "num": 684,
        "flags": {
            "protect": 1
        },
        "name": "Baddy Bad",
        "shortDesc": "Summons Reflect.",
        "desc": "This move summons Reflect for 5 turns upon use.",
        "basePower": 80,
        "type": "Dark",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Special"
    },
    "sappyseed": {
        "num": 685,
        "flags": {
            "protect": 1,
            "reflectable": 1
        },
        "name": "Sappy Seed",
        "shortDesc": "Summons Leech Seed.",
        "desc": "This move summons Leech Seed on the foe.",
        "basePower": 100,
        "type": "Grass",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "freezyfrost": {
        "num": 686,
        "flags": {
            "protect": 1
        },
        "name": "Freezy Frost",
        "shortDesc": "Eliminates all stat changes.",
        "desc": "Resets the stat stages of all active Pokemon to 0.",
        "basePower": 100,
        "type": "Ice",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "sparklyswirl": {
        "num": 687,
        "flags": {
            "protect": 1
        },
        "name": "Sparkly Swirl",
        "shortDesc": "Cures the user's party of all status conditions.",
        "desc": "Every Pokemon in the user's party is cured of its non-volatile status condition.",
        "basePower": 120,
        "type": "Fairy",
        "accuracy": 85,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "veeveevolley": {
        "num": 688,
        "flags": {
            "protect": 1,
            "contact": 1
        },
        "name": "Veevee Volley",
        "shortDesc": "Max happiness: 102 power. Can't miss.",
        "desc": "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Physical"
    },
    "doubleironbash": {
        "num": 689,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Double Iron Bash",
        "shortDesc": "Hits twice. 30% chance to make the target flinch.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. Has a 30% chance to make the target flinch.",
        "basePower": 60,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "dynamaxcannon": {
        "num": 690,
        "flags": {
            "protect": 1,
            "pulse": 1
        },
        "name": "Dynamax Cannon",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 100,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "snipeshot": {
        "num": 691,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Snipe Shot",
        "shortDesc": "High critical hit ratio. Cannot be redirected.",
        "desc": "Has a higher chance for a critical hit. This move cannot be redirected to a different target by any effect.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "jawlock": {
        "num": 692,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Jaw Lock",
        "shortDesc": "Prevents both user and target from switching out.",
        "desc": "Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field.",
        "basePower": 80,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "stuffcheeks": {
        "num": 693,
        "flags": {
            "snatch": 1
        },
        "name": "Stuff Cheeks",
        "shortDesc": "Must hold Berry to use. User eats Berry, Def +2.",
        "desc": "This move cannot be selected unless the user is holding a Berry. The user eats its Berry and raises its Defense by 2 stages. This effect is not prevented by the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if the user is not holding a Berry.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "noretreat": {
        "num": 694,
        "flags": {
            "snatch": 1
        },
        "name": "No Retreat",
        "shortDesc": "Raises all stats by 1 (not acc/eva). Traps user.",
        "desc": "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage, but it becomes prevented from switching out. The user can still switch out if it uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped. Fails if the user has already been prevented from switching by this effect.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "tarshot": {
        "num": 695,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Tar Shot",
        "shortDesc": "Target gets -1 Spe and becomes weaker to Fire.",
        "desc": "Lowers the target's Speed by 1 stage. Until the target switches out, the effectiveness of Fire-type moves is doubled against it.",
        "basePower": 0,
        "type": "Rock",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "magicpowder": {
        "num": 696,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1,
            "powder": 1
        },
        "name": "Magic Powder",
        "shortDesc": "Changes the target's type to Psychic.",
        "desc": "Causes the target to become a Psychic type. Fails if the target is an Arceus or a Silvally, if the target is already purely Psychic type, or if the target is Terastallized.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "dragondarts": {
        "num": 697,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Dragon Darts",
        "shortDesc": "Hits twice. Doubles: Tries to hit each foe once.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. In Double Battles, this move attempts to hit the targeted Pokemon and its ally once each. If hitting one of these Pokemon would be prevented by immunity, protection, semi-invulnerability, an Ability, or accuracy, it attempts to hit the other Pokemon twice instead. If this move is redirected, it hits that target twice.",
        "basePower": 50,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "teatime": {
        "num": 698,
        "flags": {
            "bypasssub": 1
        },
        "name": "Teatime",
        "shortDesc": "All active Pokemon consume held Berries.",
        "desc": "All active Pokemon consume their held Berries. This effect is not prevented by substitutes, the Klutz or Unnerve Abilities, or the effects of Embargo or Magic Room. Fails if no active Pokemon is holding a Berry.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "octolock": {
        "num": 699,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Octolock",
        "shortDesc": "Traps target, lowers Def and SpD by 1 each turn.",
        "desc": "Prevents the target from switching out. At the end of each turn during effect, the target's Defense and Special Defense are lowered by 1 stage. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Teleport, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "boltbeak": {
        "num": 700,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Bolt Beak",
        "shortDesc": "Power doubles if user moves before the target.",
        "desc": "Power doubles if the user moves before the target.",
        "basePower": 85,
        "type": "Electric",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "fishiousrend": {
        "num": 701,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Fishious Rend",
        "shortDesc": "Power doubles if user moves before the target.",
        "desc": "Power doubles if the user moves before the target.",
        "basePower": 85,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "courtchange": {
        "num": 702,
        "flags": {
            "mirror": 1
        },
        "name": "Court Change",
        "shortDesc": "Swaps user's field effects with the opposing side.",
        "desc": "Switches the Mist, Light Screen, Reflect, Spikes, Safeguard, Tailwind, Toxic Spikes, Stealth Rock, Water Pledge, Fire Pledge, Grass Pledge, Sticky Web, Aurora Veil, G-Max Steelsurge, G-Max Cannonade, G-Max Vine Lash, and G-Max Wildfire effects from the user's side to the opposing side and vice versa.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "clangoroussoul": {
        "num": 703,
        "flags": {
            "snatch": 1,
            "sound": 1
        },
        "name": "Clangorous Soul",
        "shortDesc": "User loses 33% of its max HP. +1 to all stats.",
        "desc": "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage in exchange for the user losing 33% of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Defense, Special Attack, Special Defense, and Speed stat stages would not change.",
        "basePower": 0,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Status",
        "contestType": "Tough"
    },
    "bodypress": {
        "num": 704,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Body Press",
        "shortDesc": "Uses user's Def stat as Atk in damage calculation.",
        "desc": "Damage is calculated using the user's Defense stat as its Attack, including stat stage changes. Other effects that modify the Attack stat are used as normal.",
        "basePower": 80,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "decorate": {
        "num": 705,
        "flags": {},
        "name": "Decorate",
        "shortDesc": "Raises the target's Attack and Sp. Atk by 2.",
        "desc": "Raises the target's Attack and Special Attack by 2 stages.",
        "basePower": 0,
        "type": "Fairy",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "drumbeating": {
        "num": 706,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Drum Beating",
        "shortDesc": "100% chance to lower the target's Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 80,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "snaptrap": {
        "num": 707,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Snap Trap",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 35,
        "type": "Grass",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "pyroball": {
        "num": 708,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1,
            "bullet": 1
        },
        "name": "Pyro Ball",
        "shortDesc": "10% chance to burn the target. Thaws user.",
        "desc": "Has a 10% chance to burn the target.",
        "basePower": 120,
        "type": "Fire",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "behemothblade": {
        "num": 709,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Behemoth Blade",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 100,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "behemothbash": {
        "num": 710,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Behemoth Bash",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 100,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "aurawheel": {
        "num": 711,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Aura Wheel",
        "shortDesc": "Morpeko: Electric; Hangry: Dark; 100% +1 Spe.",
        "desc": "Has a 100% chance to raise the user's Speed by 1 stage. If the user is a Morpeko in Full Belly Mode, this move is Electric type. If the user is a Morpeko in Hangry Mode, this move is Dark type. This move cannot be used successfully unless the user's current form, while considering Transform, is Full Belly or Hangry Mode Morpeko.",
        "basePower": 110,
        "type": "Electric",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "breakingswipe": {
        "num": 712,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Breaking Swipe",
        "shortDesc": "100% chance to lower the foe(s) Attack by 1.",
        "desc": "Has a 100% chance to lower the target's Attack by 1 stage.",
        "basePower": 60,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "branchpoke": {
        "num": 713,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Branch Poke",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 40,
        "type": "Grass",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "overdrive": {
        "num": 714,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Overdrive",
        "shortDesc": "No additional effect. Hits foe(s).",
        "desc": "No additional effect.",
        "basePower": 80,
        "type": "Electric",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "appleacid": {
        "num": 715,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Apple Acid",
        "shortDesc": "100% chance to lower the target's Sp. Def by 1.",
        "desc": "Has a 100% chance to lower the target's Special Defense by 1 stage.",
        "basePower": 80,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "gravapple": {
        "num": 716,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Grav Apple",
        "shortDesc": "Target: 100% -1 Def. During Gravity: 1.5x power.",
        "desc": "Has a 100% chance to lower the target's Defense by 1 stage. Power is multiplied by 1.5 during Gravity's effect.",
        "basePower": 80,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "spiritbreak": {
        "num": 717,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Spirit Break",
        "shortDesc": "100% chance to lower the target's Sp. Atk by 1.",
        "desc": "Has a 100% chance to lower the target's Special Attack by 1 stage.",
        "basePower": 75,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "strangesteam": {
        "num": 718,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Strange Steam",
        "shortDesc": "20% chance to confuse the target.",
        "desc": "Has a 20% chance to confuse the target.",
        "basePower": 90,
        "type": "Fairy",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "lifedew": {
        "num": 719,
        "flags": {
            "snatch": 1,
            "bypasssub": 1
        },
        "name": "Life Dew",
        "shortDesc": "Heals the user and its allies by 1/4 their max HP.",
        "desc": "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up.",
        "basePower": 0,
        "type": "Water",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cute"
    },
    "obstruct": {
        "num": 720,
        "flags": {},
        "name": "Obstruct",
        "shortDesc": "Protects from damaging attacks. Contact: -2 Def.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Defense lowered by 2 stages. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Cool"
    },
    "falsesurrender": {
        "num": 721,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "False Surrender",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 80,
        "type": "Dark",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "meteorassault": {
        "num": 722,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Meteor Assault",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 150,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "eternabeam": {
        "num": 723,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Eternabeam",
        "shortDesc": "User cannot move next turn.",
        "desc": "If this move is successful, the user must recharge on the following turn and cannot select a move.",
        "basePower": 160,
        "type": "Dragon",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "steelbeam": {
        "num": 724,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Steel Beam",
        "shortDesc": "User loses 50% max HP.",
        "desc": "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.",
        "basePower": 140,
        "type": "Steel",
        "accuracy": 95,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "expandingforce": {
        "num": 725,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Expanding Force",
        "shortDesc": "User on Psychic Terrain: 1.5x power, hits foes.",
        "desc": "If the current terrain is Psychic Terrain and the user is grounded, this move hits all opposing Pokemon and has its power multiplied by 1.5.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "steelroller": {
        "num": 726,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Steel Roller",
        "shortDesc": "Fails if there is no terrain active. Ends the terrain.",
        "desc": "Fails if there is no terrain active. Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
        "basePower": 130,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "scaleshot": {
        "num": 727,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Scale Shot",
        "shortDesc": "Hits 2-5 times. User: -1 Def, +1 Spe after last hit.",
        "desc": "Hits two to five times. Lowers the user's Defense by 1 stage and raises the user's Speed by 1 stage after the last hit. Has a 35% chance to hit two or three times and a 15% chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
        "basePower": 25,
        "type": "Dragon",
        "accuracy": 90,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "meteorbeam": {
        "num": 728,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Meteor Beam",
        "shortDesc": "Raises user's Sp. Atk by 1 on turn 1. Hits turn 2.",
        "desc": "This attack charges on the first turn and executes on the second. Raises the user's Special Attack by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
        "basePower": 120,
        "type": "Rock",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "shellsidearm": {
        "num": 729,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Shell Side Arm",
        "shortDesc": "20% psn. Physical+contact if it would be stronger.",
        "desc": "Has a 20% chance to poison the target. This move becomes a physical attack that makes contact if the value of ((((2 * the user's level / 5 + 2) * 90 * X) / Y) / 50), where X is the user's Attack stat and Y is the target's Defense stat, is greater than the same value where X is the user's Special Attack stat and Y is the target's Special Defense stat. No stat modifiers other than stat stage changes are considered for this purpose. If the two values are equal, this move chooses a damage category at random.",
        "basePower": 90,
        "type": "Poison",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "mistyexplosion": {
        "num": 730,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Misty Explosion",
        "shortDesc": "User faints. User on Misty Terrain: 1.5x power.",
        "desc": "If the current terrain is Misty Terrain and the user is grounded, this move's power is multiplied by 1.5. The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
        "basePower": 100,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "grassyglide": {
        "num": 731,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Grassy Glide",
        "shortDesc": "User on Grassy Terrain: +1 priority.",
        "desc": "If the current terrain is Grassy Terrain and the user is grounded, this move has its priority increased by 1.",
        "basePower": 55,
        "type": "Grass",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "risingvoltage": {
        "num": 732,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Rising Voltage",
        "shortDesc": "2x power if target is grounded in Electric Terrain.",
        "desc": "If the current terrain is Electric Terrain and the target is grounded, this move's power is doubled.",
        "basePower": 70,
        "type": "Electric",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "terrainpulse": {
        "num": 733,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Terrain Pulse",
        "shortDesc": "User on terrain: power doubles, type varies.",
        "desc": "Power doubles if the user is grounded and a terrain is active, and this move's type changes to match. Electric type during Electric Terrain, Grass type during Grassy Terrain, Fairy type during Misty Terrain, and Psychic type during Psychic Terrain.",
        "basePower": 50,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "skittersmack": {
        "num": 734,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Skitter Smack",
        "shortDesc": "100% chance to lower target's Sp. Atk by 1.",
        "desc": "Has a 100% chance to lower the target's Special Attack by 1 stage.",
        "basePower": 70,
        "type": "Bug",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cute"
    },
    "burningjealousy": {
        "num": 735,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Burning Jealousy",
        "shortDesc": "100% burns a target that had a stat rise this turn.",
        "desc": "Has a 100% chance to burn the target if it had a stat stage raised this turn.",
        "basePower": 70,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "lashout": {
        "num": 736,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Lash Out",
        "shortDesc": "2x power if the user had a stat lowered this turn.",
        "desc": "Power doubles if the user had a stat stage lowered this turn.",
        "basePower": 75,
        "type": "Dark",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "poltergeist": {
        "num": 737,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Poltergeist",
        "shortDesc": "Fails if the target has no held item.",
        "desc": "Fails if the target has no held item.",
        "basePower": 110,
        "type": "Ghost",
        "accuracy": 90,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Smart"
    },
    "corrosivegas": {
        "num": 738,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Corrosive Gas",
        "shortDesc": "Removes adjacent Pokemon's held items.",
        "desc": "The target loses its held item. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, a Silvally, a Zacian, or a Zamazenta to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, Memory, Rusted Sword, or Rusted Shield respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
        "basePower": 0,
        "type": "Poison",
        "accuracy": 100,
        "pp": 40,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "coaching": {
        "num": 739,
        "flags": {
            "bypasssub": 1
        },
        "name": "Coaching",
        "shortDesc": "Raises an ally's Attack and Defense by 1.",
        "desc": "Raises the target's Attack and Defense by 1 stage. Fails if there is no ally adjacent to the user.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Cool"
    },
    "flipturn": {
        "num": 740,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Flip Turn",
        "shortDesc": "User switches out after damaging the target.",
        "desc": "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit or Wimp Out Abilities.",
        "basePower": 60,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "tripleaxel": {
        "num": 741,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Triple Axel",
        "shortDesc": "Hits 3 times. Each hit can miss, but power rises.",
        "desc": "Hits three times. Power increases to 40 for the second hit and 60 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
        "basePower": 20,
        "type": "Ice",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "dualwingbeat": {
        "num": 742,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dual Wingbeat",
        "shortDesc": "Hits 2 times in one turn.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 40,
        "type": "Flying",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "scorchingsands": {
        "num": 743,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Scorching Sands",
        "shortDesc": "30% chance to burn the target. Thaws target.",
        "desc": "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
        "basePower": 70,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "junglehealing": {
        "num": 744,
        "flags": {
            "bypasssub": 1
        },
        "name": "Jungle Healing",
        "shortDesc": "User and allies: healed 1/4 max HP, status cured.",
        "desc": "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status condition cured.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status",
        "contestType": "Smart"
    },
    "wickedblow": {
        "num": 745,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Wicked Blow",
        "shortDesc": "Always results in a critical hit.",
        "desc": "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
        "basePower": 75,
        "type": "Dark",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "surgingstrikes": {
        "num": 746,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Surging Strikes",
        "shortDesc": "Always results in a critical hit. Hits 3 times.",
        "desc": "Hits three times. This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
        "basePower": 25,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "thundercage": {
        "num": 747,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Thunder Cage",
        "shortDesc": "Traps and damages the target for 4-5 turns.",
        "desc": "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Flip Turn, Parting Shot, Shed Tail, Teleport, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Mortal Spin, Rapid Spin, or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
        "basePower": 80,
        "type": "Electric",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "dragonenergy": {
        "num": 748,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Dragon Energy",
        "shortDesc": "Less power as user's HP decreases. Hits foe(s).",
        "desc": "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
        "basePower": 150,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Cool"
    },
    "freezingglare": {
        "num": 749,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Freezing Glare",
        "shortDesc": "10% chance to freeze the target.",
        "desc": "Has a 10% chance to freeze the target.",
        "basePower": 90,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "fierywrath": {
        "num": 750,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fiery Wrath",
        "shortDesc": "20% chance to make the foe(s) flinch.",
        "desc": "Has a 20% chance to make the target flinch.",
        "basePower": 90,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Beauty"
    },
    "thunderouskick": {
        "num": 751,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Thunderous Kick",
        "shortDesc": "100% chance to lower the target's Defense by 1.",
        "desc": "Has a 100% chance to lower the target's Defense by 1 stage.",
        "basePower": 90,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "glaciallance": {
        "num": 752,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Glacial Lance",
        "shortDesc": "No additional effect. Hits adjacent foes.",
        "desc": "No additional effect.",
        "basePower": 120,
        "type": "Ice",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "astralbarrage": {
        "num": 753,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Astral Barrage",
        "shortDesc": "No additional effect. Hits adjacent foes.",
        "desc": "No additional effect.",
        "basePower": 120,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "eeriespell": {
        "num": 754,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Eerie Spell",
        "shortDesc": "Removes 3 PP from the target's last move.",
        "desc": "If this move is successful and the user has not fainted, the target loses 3 PP from its last move.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "direclaw": {
        "num": 755,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Dire Claw",
        "shortDesc": "50% chance to sleep, poison, or paralyze target.",
        "desc": "Has a 50% chance to cause the target to either fall asleep, become poisoned, or become paralyzed.",
        "basePower": 80,
        "type": "Poison",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "psyshieldbash": {
        "num": 756,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Psyshield Bash",
        "shortDesc": "100% chance to raise the user's Defense by 1.",
        "desc": "Has a 100% chance to raise the user's Defense by 1 stage.",
        "basePower": 70,
        "type": "Psychic",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "powershift": {
        "num": 757,
        "flags": {
            "snatch": 1
        },
        "name": "Power Shift",
        "shortDesc": "Switches user's Attack and Defense stats.",
        "desc": "The user swaps its Attack and Defense stats, and stat stage changes remain on their respective stats. This move can be used again to swap the stats back. If the user uses Baton Pass, the replacement will have its Attack and Defense stats swapped if the effect is active. If the user has its stats recalculated by changing forme while its stats are swapped, this effect is ignored but is still active for the purposes of Baton Pass.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "stoneaxe": {
        "num": 758,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Stone Axe",
        "shortDesc": "Sets Stealth Rock on the target's side.",
        "desc": "If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
        "basePower": 65,
        "type": "Rock",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "springtidestorm": {
        "num": 759,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Springtide Storm",
        "shortDesc": "30% chance to lower the foe(s) Attack by 1.",
        "desc": "Has a 30% chance to lower the target's Attack by 1 stage.",
        "basePower": 100,
        "type": "Fairy",
        "accuracy": 80,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "mysticalpower": {
        "num": 760,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mystical Power",
        "shortDesc": "100% chance to raise the user's Sp. Atk by 1.",
        "desc": "Has a 100% chance to raise the user's Special Attack by 1 stage.",
        "basePower": 70,
        "type": "Psychic",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "ragingfury": {
        "num": 761,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Raging Fury",
        "shortDesc": "Lasts 2-3 turns. Confuses the user afterwards.",
        "desc": "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
        "basePower": 120,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "wavecrash": {
        "num": 762,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Wave Crash",
        "shortDesc": "Has 33% recoil.",
        "desc": "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
        "basePower": 120,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "chloroblast": {
        "num": 763,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Chloroblast",
        "shortDesc": "User loses 50% max HP.",
        "desc": "If this move is successful, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability.",
        "basePower": 150,
        "type": "Grass",
        "accuracy": 95,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "mountaingale": {
        "num": 764,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Mountain Gale",
        "shortDesc": "30% chance to make the target flinch.",
        "desc": "Has a 30% chance to make the target flinch.",
        "basePower": 100,
        "type": "Ice",
        "accuracy": 85,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "victorydance": {
        "num": 765,
        "flags": {
            "snatch": 1
        },
        "name": "Victory Dance",
        "shortDesc": "Raises the user's Attack, Defense, Speed by 1.",
        "desc": "Raises the user's Attack, Defense, and Speed by 1 stage.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 20,
        "priority": 0,
        "category": "Status"
    },
    "headlongrush": {
        "num": 766,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Headlong Rush",
        "shortDesc": "Lowers the user's Defense and Sp. Def by 1.",
        "desc": "Lowers the user's Defense and Special Defense by 1 stage.",
        "basePower": 120,
        "type": "Ground",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "barbbarrage": {
        "num": 767,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Barb Barrage",
        "shortDesc": "50% psn. 2x power if target already poisoned.",
        "desc": "Has a 50% chance to poison the target. Power doubles if the target is already poisoned.",
        "basePower": 60,
        "type": "Poison",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "esperwing": {
        "num": 768,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Esper Wing",
        "shortDesc": "100% chance to raise user Speed by 1. High crit.",
        "desc": "Has a 100% chance to raise the user's Speed by 1 stage and a higher chance for a critical hit.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "bittermalice": {
        "num": 769,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bitter Malice",
        "shortDesc": "100% chance to lower the target's Attack by 1.",
        "desc": "Has a 100% chance to lower the target's Attack by 1 stage.",
        "basePower": 75,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special"
    },
    "shelter": {
        "num": 770,
        "flags": {
            "snatch": 1
        },
        "name": "Shelter",
        "shortDesc": "Raises the user's Defense by 2.",
        "desc": "Raises the user's Defense by 2 stages.",
        "basePower": 0,
        "type": "Steel",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "triplearrows": {
        "num": 771,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Triple Arrows",
        "shortDesc": "High crit. Target: 50% -1 Defense, 30% flinch.",
        "desc": "Has a 50% chance to lower the target's Defense by 1 stage, a 30% chance to make it flinch, and a higher chance for a critical hit.",
        "basePower": 90,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "critRatio": 2,
        "priority": 0,
        "category": "Physical"
    },
    "infernalparade": {
        "num": 772,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Infernal Parade",
        "shortDesc": "30% burn. 2x power if target is already statused.",
        "desc": "Has a 30% chance to burn the target. Power doubles if the target has a non-volatile status condition.",
        "basePower": 60,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special"
    },
    "ceaselessedge": {
        "num": 773,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Ceaseless Edge",
        "shortDesc": "Sets a layer of Spikes on the opposing side.",
        "desc": "If this move is successful, it sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. A maximum of three layers may be set, and opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Mortal Spin, Rapid Spin, or Defog successfully, or is hit by Defog.",
        "basePower": 65,
        "type": "Dark",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "bleakwindstorm": {
        "num": 774,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Bleakwind Storm",
        "shortDesc": "30% to lower foe(s) Speed by 1. Rain: can't miss.",
        "desc": "Has a 30% chance to lower the target's Speed by 1 stage. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 80%.",
        "basePower": 100,
        "type": "Flying",
        "accuracy": 80,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "wildboltstorm": {
        "num": 775,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Wildbolt Storm",
        "shortDesc": "20% chance to paralyze foe(s). Rain: can't miss.",
        "desc": "Has a 20% chance to paralyze the target. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 80%.",
        "basePower": 100,
        "type": "Electric",
        "accuracy": 80,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "sandsearstorm": {
        "num": 776,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "wind": 1
        },
        "name": "Sandsear Storm",
        "shortDesc": "20% chance to burn foe(s). Can't miss in rain.",
        "desc": "Has a 20% chance to burn the target. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If this move is used against a Pokemon holding Utility Umbrella, this move's accuracy remains at 80%.",
        "basePower": 100,
        "type": "Ground",
        "accuracy": 80,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "lunarblessing": {
        "num": 777,
        "flags": {
            "snatch": 1
        },
        "name": "Lunar Blessing",
        "shortDesc": "User and allies: healed 1/4 max HP, status cured.",
        "desc": "Each Pokemon on the user's side restores 1/4 of its maximum HP, rounded half up, and has its status condition cured.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "takeheart": {
        "num": 778,
        "flags": {
            "snatch": 1
        },
        "name": "Take Heart",
        "shortDesc": "Cures user's status, raises Sp. Atk, Sp. Def by 1.",
        "desc": "The user cures its non-volatile status condition. Raises the user's Special Attack and Special Defense by 1 stage.",
        "basePower": 0,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "terablast": {
        "num": 779,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Tera Blast",
        "shortDesc": "If Terastallized: Phys. if Atk > SpA, type = Tera.",
        "desc": "If the user is Terastallized, this move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes, and this move's type becomes the same as the user's Tera Type. In addition, if the user's Tera Type is Stellar, this move has 100 power, is super effective against Terastallized targets and neutral against other targets, and lowers the user's Attack and Special Attack by 1 stage.",
        "basePower": 80,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "silktrap": {
        "num": 780,
        "flags": {},
        "name": "Silk Trap",
        "shortDesc": "Protects from damaging attacks. Contact: -1 Spe.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Speed lowered by 1 stage. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Bug",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status"
    },
    "axekick": {
        "num": 781,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Axe Kick",
        "shortDesc": "30% confusion. User loses 50% max HP if miss.",
        "desc": "Has a 30% chance to confuse the target. If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
        "basePower": 120,
        "type": "Fighting",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "lastrespects": {
        "num": 782,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Last Respects",
        "shortDesc": "+50 power for each time a party member fainted.",
        "desc": "Power is equal to 50+(X*50), where X is the total number of times any Pokemon has fainted on the user's side, and X cannot be greater than 100.",
        "basePower": 50,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "luminacrash": {
        "num": 783,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Lumina Crash",
        "shortDesc": "100% chance to lower the target's Sp. Def by 2.",
        "desc": "Has a 100% chance to lower the target's Special Defense by 2 stages.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "orderup": {
        "num": 784,
        "flags": {
            "protect": 1
        },
        "name": "Order Up",
        "shortDesc": "Curly|Droopy|Stretchy eaten: +1 Atk|Def|Spe.",
        "desc": "If an ally Tatsugiri has activated its Commander Ability, this move raises the user's Attack by 1 stage if the Tatsugiri is Curly Form, Defense by 1 stage if Droopy Form, or Speed by 1 stage if Stretchy Form. The effect happens whether or not this move is successful, and even if the Tatsugiri that activated the effect has since fainted.",
        "basePower": 80,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "jetpunch": {
        "num": 785,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Jet Punch",
        "shortDesc": "Usually goes first.",
        "desc": "No additional effect.",
        "basePower": 60,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 1,
        "category": "Physical"
    },
    "spicyextract": {
        "num": 786,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Spicy Extract",
        "shortDesc": "Raises target's Atk by 2 and lowers its Def by 2.",
        "desc": "Raises the target's Attack by 2 stages and lowers its Defense by 2 stages.",
        "basePower": 0,
        "type": "Grass",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status"
    },
    "spinout": {
        "num": 787,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Spin Out",
        "shortDesc": "Lowers the user's Speed by 2.",
        "desc": "Lowers the user's Speed by 2 stages.",
        "basePower": 100,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "populationbomb": {
        "num": 788,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Population Bomb",
        "shortDesc": "Hits 10 times. Each hit can miss.",
        "desc": "Hits ten times. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit ten times. If the user is holding Loaded Dice, this move hits four to ten times at random without checking accuracy between hits.",
        "basePower": 20,
        "type": "Normal",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "icespinner": {
        "num": 789,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Ice Spinner",
        "shortDesc": "Ends the effects of terrain.",
        "desc": "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
        "basePower": 80,
        "type": "Ice",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "glaiverush": {
        "num": 790,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Glaive Rush",
        "shortDesc": "User takes sure-hit 2x damage until its next turn.",
        "desc": "If this move is successful, moves targeted at the user deal double damage and do not check accuracy until the user's next turn.",
        "basePower": 120,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "revivalblessing": {
        "num": 791,
        "flags": {},
        "name": "Revival Blessing",
        "shortDesc": "Revives a fainted Pokemon to 50% HP.",
        "desc": "A fainted party member is selected and revived with 1/2 its max HP, rounded down. Fails if there are no fainted party members.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Status"
    },
    "saltcure": {
        "num": 792,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Salt Cure",
        "shortDesc": "Deals 1/8 max HP each turn; 1/4 on Steel, Water.",
        "desc": "Causes damage to the target equal to 1/8 of its maximum HP (1/4 if the target is Steel or Water type), rounded down, at the end of each turn during effect. This effect ends when the target is no longer active.",
        "basePower": 40,
        "type": "Rock",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "tripledive": {
        "num": 793,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Triple Dive",
        "shortDesc": "Hits 3 times.",
        "desc": "Hits three times.",
        "basePower": 30,
        "type": "Water",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "mortalspin": {
        "num": 794,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Mortal Spin",
        "shortDesc": "Poisons foes, frees user from hazards/bind/leech.",
        "desc": "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field. Has a 100% chance to poison the target.",
        "basePower": 30,
        "type": "Poison",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "doodle": {
        "num": 795,
        "flags": {},
        "name": "Doodle",
        "shortDesc": "User and ally's Abilities become target's Ability.",
        "desc": "The user and its ally's Abilities change to match the target's Ability. Does not change Ability if the user's or its ally's is As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Tera Shift, Zen Mode, Zero to Hero, or already matches the target. Fails if both the user and its ally's Ability already matches the target, or if the target's Ability is As One, Battle Bond, Comatose, Commander, Disguise, Embody Aspect, Flower Gift, Forecast, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Poison Puppeteer, Power Construct, Power of Alchemy, Protosynthesis, Quark Drive, Receiver, RKS System, Schooling, Shields Down, Stance Change, Tera Shell, Tera Shift, Teraform Zero, Trace, Wonder Guard, Zen Mode, or Zero to Hero.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "filletaway": {
        "num": 796,
        "flags": {
            "snatch": 1
        },
        "name": "Fillet Away",
        "shortDesc": "+2 Attack, Sp. Atk, Speed for 1/2 user's max HP.",
        "desc": "Raises the user's Attack, Special Attack, and Speed by 2 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack, Special Attack, and Speed stat stages would not change.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "kowtowcleave": {
        "num": 797,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Kowtow Cleave",
        "shortDesc": "This move does not check accuracy.",
        "desc": "This move does not check accuracy.",
        "basePower": 85,
        "type": "Dark",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "flowertrick": {
        "num": 798,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Flower Trick",
        "shortDesc": "Always results in a critical hit; no accuracy check.",
        "desc": "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities. This move does not check accuracy.",
        "basePower": 70,
        "type": "Grass",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "torchsong": {
        "num": 799,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Torch Song",
        "shortDesc": "100% chance to raise the user's Sp. Atk by 1.",
        "desc": "Has a 100% chance to raise the user's Special Attack by 1 stage.",
        "basePower": 80,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "aquastep": {
        "num": 800,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Aqua Step",
        "shortDesc": "100% chance to raise the user's Speed by 1.",
        "desc": "Has a 100% chance to raise the user's Speed by 1 stage.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "ragingbull": {
        "num": 801,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Raging Bull",
        "shortDesc": "Destroys screens. Type depends on user's form.",
        "desc": "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated. If the user's current form is a Paldean Tauros, this move's type changes to match. Fighting type for Combat Breed, Fire type for Blaze Breed, and Water type for Aqua Breed.",
        "basePower": 90,
        "type": "Normal",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "makeitrain": {
        "num": 802,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Make It Rain",
        "shortDesc": "Lowers the user's Sp. Atk by 1. Hits foe(s).",
        "desc": "Lowers the user's Special Attack by 1 stage.",
        "basePower": 120,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "ruination": {
        "num": 803,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Ruination",
        "shortDesc": "Does damage equal to 1/2 target's current HP.",
        "desc": "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
        "basePower": 1,
        "type": "Dark",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "collisioncourse": {
        "num": 804,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Collision Course",
        "shortDesc": "Deals 1.3333x damage with supereffective hits.",
        "desc": "Damage is multiplied by 1.3333 if this move is super effective against the target.",
        "basePower": 100,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "electrodrift": {
        "num": 805,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Electro Drift",
        "shortDesc": "Deals 1.3333x damage with supereffective hits.",
        "desc": "Damage is multiplied by 1.3333 if this move is super effective against the target.",
        "basePower": 100,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "shedtail": {
        "num": 806,
        "flags": {},
        "name": "Shed Tail",
        "shortDesc": "User takes 1/2 its max HP to pass a substitute.",
        "desc": "The user takes 1/2 of its maximum HP, rounded up, and creates a substitute that has 1/4 of the user's maximum HP, rounded down. The user is replaced with another Pokemon in its party and the selected Pokemon has the substitute transferred to it. Fails if the user would faint, or if there are no unfainted party members.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "chillyreception": {
        "num": 807,
        "flags": {},
        "name": "Chilly Reception",
        "shortDesc": "Starts Snow. User switches out.",
        "desc": "For 5 turns, the weather becomes Snow. The user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members.",
        "basePower": 0,
        "type": "Ice",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "tidyup": {
        "num": 808,
        "flags": {},
        "name": "Tidy Up",
        "shortDesc": "User +1 Atk, Spe. Clears all substitutes/hazards.",
        "desc": "Raises the user's Attack and Speed by 1 stage. Removes subtitutes from all active Pokemon and ends the effects of Spikes, Stealth Rock, Sticky Web, and Toxic Spikes for both sides.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "snowscape": {
        "num": 809,
        "flags": {},
        "name": "Snowscape",
        "shortDesc": "For 5 turns, snow falls. Ice: 1.5x Def.",
        "desc": "For 5 turns, the weather becomes Snow. During the effect, the Defense of Ice-type Pokemon is multiplied by 1.5 when taking damage from a physical attack. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Snow.",
        "basePower": 0,
        "type": "Ice",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Status"
    },
    "pounce": {
        "num": 810,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Pounce",
        "shortDesc": "100% chance to lower the target's Speed by 1.",
        "desc": "Has a 100% chance to lower the target's Speed by 1 stage.",
        "basePower": 50,
        "type": "Bug",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical"
    },
    "trailblaze": {
        "num": 811,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Trailblaze",
        "shortDesc": "100% chance to raise the user's Speed by 1.",
        "desc": "Has a 100% chance to raise the user's Speed by 1 stage.",
        "basePower": 50,
        "type": "Grass",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Physical"
    },
    "chillingwater": {
        "num": 812,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Chilling Water",
        "shortDesc": "100% chance to lower the target's Attack by 1.",
        "desc": "Has a 100% chance to lower the target's Attack by 1 stage.",
        "basePower": 50,
        "type": "Water",
        "accuracy": 100,
        "pp": 20,
        "priority": 0,
        "category": "Special"
    },
    "hyperdrill": {
        "num": 813,
        "flags": {
            "mirror": 1,
            "contact": 1
        },
        "name": "Hyper Drill",
        "shortDesc": "Bypasses protection without breaking it.",
        "desc": "Bypasses protection without breaking it.",
        "basePower": 100,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "twinbeam": {
        "num": 814,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Twin Beam",
        "shortDesc": "Hits 2 times in one turn.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
        "basePower": 40,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "ragefist": {
        "num": 815,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Rage Fist",
        "shortDesc": "+50 power for each time user was hit. Max 6 hits.",
        "desc": "Power is equal to 50+(X*50), where X is the total number of times the user has been hit by a damaging attack during the battle, even if the user did not lose HP from the attack. X cannot be greater than 6 and does not reset upon switching out or fainting. Each hit of a multi-hit attack is counted, but confusion damage is not counted.",
        "basePower": 50,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "armorcannon": {
        "num": 816,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Armor Cannon",
        "shortDesc": "Lowers the user's Defense and Sp. Def by 1.",
        "desc": "Lowers the user's Defense and Special Defense by 1 stage.",
        "basePower": 120,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "bitterblade": {
        "num": 817,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Bitter Blade",
        "shortDesc": "User recovers 50% of the damage dealt.",
        "desc": "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        "basePower": 90,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "doubleshock": {
        "num": 818,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Double Shock",
        "shortDesc": "User's Electric type: typeless; must be Electric.",
        "desc": "Fails unless the user is an Electric type. If this move is successful and the user is not Terastallized, the user's Electric type becomes typeless as long as it remains active.",
        "basePower": 120,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "gigatonhammer": {
        "num": 819,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "cantusetwice": 1
        },
        "name": "Gigaton Hammer",
        "shortDesc": "Cannot be selected the turn after it's used.",
        "desc": "Cannot be selected the turn after it's used.",
        "basePower": 160,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "comeuppance": {
        "num": 820,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Comeuppance",
        "shortDesc": "If hit by an attack, returns 1.5x damage.",
        "desc": "Deals damage to the last opposing Pokemon to hit the user with a physical or special attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from that attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical or special attack this turn.",
        "basePower": 1,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "aquacutter": {
        "num": 821,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "slicing": 1
        },
        "name": "Aqua Cutter",
        "shortDesc": "High critical hit ratio.",
        "desc": "Has a higher chance for a critical hit.",
        "basePower": 70,
        "type": "Water",
        "accuracy": 100,
        "critRatio": 2,
        "pp": 20,
        "priority": 0,
        "category": "Physical"
    },
    "blazingtorque": {
        "num": 822,
        "flags": {
            "protect": 1
        },
        "name": "Blazing Torque",
        "shortDesc": "30% chance to burn the target.",
        "desc": "Has a 30% chance to burn the target.",
        "basePower": 80,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "wickedtorque": {
        "num": 823,
        "flags": {
            "protect": 1
        },
        "name": "Wicked Torque",
        "shortDesc": "10% chance to cause the target to fall asleep.",
        "desc": "Has a 10% chance to cause the target to fall asleep.",
        "basePower": 80,
        "type": "Dark",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "noxioustorque": {
        "num": 824,
        "flags": {
            "protect": 1
        },
        "name": "Noxious Torque",
        "shortDesc": "30% chance to poison the target.",
        "desc": "Has a 30% chance to poison the target.",
        "basePower": 100,
        "type": "Poison",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "combattorque": {
        "num": 825,
        "flags": {
            "protect": 1
        },
        "name": "Combat Torque",
        "shortDesc": "30% chance to paralyze the target.",
        "desc": "Has a 30% chance to paralyze the target.",
        "basePower": 100,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "magicaltorque": {
        "num": 826,
        "flags": {
            "protect": 1
        },
        "name": "Magical Torque",
        "shortDesc": "30% chance to confuse the target.",
        "desc": "Has a 30% chance to confuse the target.",
        "basePower": 100,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "psyblade": {
        "num": 827,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Psyblade",
        "shortDesc": "During Electric Terrain: 1.5x power.",
        "desc": "If the current terrain is Electric Terrain, this move's power is multiplied by 1.5.",
        "basePower": 80,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "hydrosteam": {
        "num": 828,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Hydro Steam",
        "shortDesc": "During Sunny Day: 1.5x damage instead of half.",
        "desc": "If the current weather is Sunny Day and the user is not holding Utility Umbrella, this move's damage is multiplied by 1.5 instead of halved for being Water type.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special"
    },
    "bloodmoon": {
        "num": 829,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "cantusetwice": 1
        },
        "name": "Blood Moon",
        "shortDesc": "Cannot be selected the turn after it's used.",
        "desc": "Cannot be selected the turn after it's used.",
        "basePower": 140,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "matchagotcha": {
        "num": 830,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "defrost": 1
        },
        "name": "Matcha Gotcha",
        "shortDesc": "20% burn. Recovers 50% dmg dealt. Thaws foe(s).",
        "desc": "Has a 20% chance to burn the target. The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. The target thaws out if it is frozen.",
        "basePower": 80,
        "type": "Grass",
        "accuracy": 90,
        "pp": 15,
        "priority": 0,
        "category": "Special"
    },
    "syrupbomb": {
        "num": 831,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Syrup Bomb",
        "shortDesc": "Target's Speed is lowered by 1 stage for 3 turns.",
        "desc": "If this move is successful, it causes the target's Speed to be lowered by 1 stage at the end of each turn for 3 turns.",
        "basePower": 60,
        "type": "Grass",
        "accuracy": 85,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "ivycudgel": {
        "num": 832,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Ivy Cudgel",
        "shortDesc": "High critical hit ratio. Type depends on user's form.",
        "desc": "Has a higher chance for a critical hit. If the user is an Ogerpon holding a mask, this move's type changes to match. Water type for Wellspring Mask, Fire type for Hearthflame Mask, and Rock type for Cornerstone Mask.",
        "basePower": 100,
        "type": "Grass",
        "accuracy": 100,
        "pp": 10,
        "critRatio": 2,
        "priority": 0,
        "category": "Physical"
    },
    "electroshot": {
        "num": 833,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Electro Shot",
        "shortDesc": "Raises Sp. Atk by 1, hits turn 2. Rain: no charge.",
        "desc": "This attack charges on the first turn and executes on the second. Raises the user's Special Attack by 1 stage on the first turn. If the user is holding a Power Herb or the weather is Primordial Sea or Rain Dance, the move completes in one turn. If the user is holding Utility Umbrella and the weather is Primordial Sea or Rain Dance, the move still requires a turn to charge.",
        "basePower": 130,
        "type": "Electric",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "terastarstorm": {
        "num": 834,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Tera Starstorm",
        "shortDesc": "Terapagos-Stellar: Stellar type, hits both foes.",
        "desc": "If the user is a Terapagos in Stellar Form, this move's type becomes Stellar and hits all opposing Pokemon.",
        "basePower": 120,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "ficklebeam": {
        "num": 835,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Fickle Beam",
        "shortDesc": "Has a 30% chance this move's power is doubled.",
        "desc": "Has a 30% chance this move's power is doubled.",
        "basePower": 80,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "burningbulwark": {
        "num": 836,
        "flags": {},
        "name": "Burning Bulwark",
        "shortDesc": "Protects from damaging attacks. Contact: burn.",
        "desc": "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user become burned. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Burning Bulwark, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Silk Trap, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Fire",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status"
    },
    "thunderclap": {
        "num": 837,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Thunderclap",
        "shortDesc": "Usually goes first. Fails if target is not attacking.",
        "desc": "Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
        "basePower": 70,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 1,
        "category": "Special"
    },
    "mightycleave": {
        "num": 838,
        "flags": {
            "mirror": 1,
            "contact": 1,
            "slicing": 1
        },
        "name": "Mighty Cleave",
        "shortDesc": "Bypasses protection without breaking it.",
        "desc": "Bypasses protection without breaking it.",
        "basePower": 95,
        "type": "Rock",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical"
    },
    "tachyoncutter": {
        "num": 839,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "slicing": 1
        },
        "name": "Tachyon Cutter",
        "shortDesc": "Hits twice. This move does not check accuracy.",
        "desc": "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit. This move does not check accuracy.",
        "basePower": 50,
        "type": "Steel",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "hardpress": {
        "num": 840,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Hard Press",
        "shortDesc": "More power the more HP the target has left.",
        "desc": "Power is equal to 100 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
        "basePower": 100,
        "type": "Steel",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "dragoncheer": {
        "num": 841,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Dragon Cheer",
        "shortDesc": "Ally: Crit ratio +1, or +2 if ally is Dragon type.",
        "desc": "Raises the target's chance for a critical hit by 1 stage, or by 2 stages if the target is Dragon type. Fails if there is no ally adjacent to the user, or if the target already has this effect or the Focus Energy effect. Baton Pass can be used to transfer this effect to an ally.",
        "basePower": 0,
        "type": "Dragon",
        "accuracy": true,
        "pp": 15,
        "priority": 0,
        "category": "Status"
    },
    "alluringvoice": {
        "num": 842,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Alluring Voice",
        "shortDesc": "100% confuse target that had a stat rise this turn.",
        "desc": "Has a 100% chance to confuse the target if it had a stat stage raised this turn.",
        "basePower": 80,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "temperflare": {
        "num": 843,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Temper Flare",
        "shortDesc": "Power doubles if the user's last move failed.",
        "desc": "Power doubles if the user's last move on the previous turn, including moves called by other moves or those used through Instruct, Magic Coat, Snatch, or the Dancer or Magic Bounce Abilities, failed to do any of its normal effects, not including damage from an unsuccessful High Jump Kick, Jump Kick, or Mind Blown, or if the user was prevented from moving by any effect other than recharging or Sky Drop. A move that was blocked by Baneful Bunker, Detect, King's Shield, Protect, Spiky Shield, Crafty Shield, Mat Block, Quick Guard, or Wide Guard will not double this move's power, nor will Bounce or Fly ending early due to the effect of Gravity, Smack Down, or Thousand Arrows.",
        "basePower": 75,
        "type": "Fire",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical"
    },
    "supercellslam": {
        "num": 844,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Supercell Slam",
        "shortDesc": "User is hurt by 50% of its max HP if it misses.",
        "desc": "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
        "basePower": 100,
        "type": "Electric",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical"
    },
    "psychicnoise": {
        "num": 845,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Psychic Noise",
        "shortDesc": "For 2 turns, the target is prevented from healing.",
        "desc": "For 2 turns, the target is prevented from restoring any HP as long as it remains active. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. If an affected Pokemon uses Baton Pass, the replacement will remain unable to restore its HP. Pain Split and the Regenerator Ability are unaffected.",
        "basePower": 75,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special"
    },
    "upperhand": {
        "num": 846,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Upper Hand",
        "shortDesc": "100% flinch. Fails unless target using priority.",
        "desc": "Has a 100% chance to make the target flinch. Fails if the target did not select a priority move for use this turn, or if the target moves before the user.",
        "basePower": 65,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 15,
        "priority": 3,
        "category": "Physical"
    },
    "malignantchain": {
        "num": 847,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Malignant Chain",
        "shortDesc": "50% chance to badly poison the target.",
        "desc": "Has a 50% chance to badly poison the target.",
        "basePower": 100,
        "type": "Poison",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special"
    },
    "breakneckblitz": {
        "num": 895,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Breakneck Blitz",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "alloutpummeling": {
        "num": 896,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "All-Out Pummeling",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Fighting",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "supersonicskystrike": {
        "num": 897,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Supersonic Skystrike",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Flying",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "aciddownpour": {
        "num": 898,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Acid Downpour",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Poison",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "tectonicrage": {
        "num": 899,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Tectonic Rage",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Ground",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "continentalcrush": {
        "num": 900,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Continental Crush",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Rock",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "savagespinout": {
        "num": 901,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Savage Spin-Out",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Bug",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "neverendingnightmare": {
        "num": 902,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Never-Ending Nightmare",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Ghost",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "corkscrewcrash": {
        "num": 903,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Corkscrew Crash",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Steel",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "infernooverdrive": {
        "num": 904,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Inferno Overdrive",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Fire",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "hydrovortex": {
        "num": 905,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Hydro Vortex",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Water",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "bloomdoom": {
        "num": 906,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Bloom Doom",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Grass",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "gigavolthavoc": {
        "num": 907,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Gigavolt Havoc",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Electric",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "shatteredpsyche": {
        "num": 908,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Shattered Psyche",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Psychic",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "subzeroslammer": {
        "num": 909,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Subzero Slammer",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Ice",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "devastatingdrake": {
        "num": 910,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Devastating Drake",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Dragon",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "blackholeeclipse": {
        "num": 911,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Black Hole Eclipse",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Dark",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "twinkletackle": {
        "num": 912,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Twinkle Tackle",
        "shortDesc": "Power is equal to the base move's Z-Power.",
        "desc": "Power is equal to the base move's Z-Power.",
        "basePower": 1,
        "type": "Fairy",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "catastropika": {
        "num": 913,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Catastropika",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 210,
        "type": "Electric",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "10000000voltthunderbolt": {
        "num": 914,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "10,000,000 Volt Thunderbolt",
        "shortDesc": "Very high critical hit ratio.",
        "desc": "Has a very high chance for a critical hit.",
        "basePower": 195,
        "type": "Electric",
        "accuracy": true,
        "critRatio": 3,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "stokedsparksurfer": {
        "num": 915,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Stoked Sparksurfer",
        "shortDesc": "100% chance to paralyze the target.",
        "desc": "Has a 100% chance to paralyze the target.",
        "basePower": 175,
        "type": "Electric",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "extremeevoboost": {
        "num": 916,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Extreme Evoboost",
        "shortDesc": "Raises user's Atk, Def, SpA, SpD, and Spe by 2.",
        "desc": "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 2 stages.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Status"
    },
    "pulverizingpancake": {
        "num": 917,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Pulverizing Pancake",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 210,
        "type": "Normal",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "genesissupernova": {
        "num": 918,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Genesis Supernova",
        "shortDesc": "Summons Psychic Terrain.",
        "desc": "If this move is successful, the terrain becomes Psychic Terrain.",
        "basePower": 185,
        "type": "Psychic",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "sinisterarrowraid": {
        "num": 919,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sinister Arrow Raid",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 180,
        "type": "Ghost",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "maliciousmoonsault": {
        "num": 920,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Malicious Moonsault",
        "shortDesc": "Damage doubles if the target used Minimize.",
        "desc": "Damage doubles and no accuracy check is done if the target has used Minimize while active.",
        "basePower": 180,
        "type": "Dark",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "oceanicoperetta": {
        "num": 921,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Oceanic Operetta",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 195,
        "type": "Water",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "splinteredstormshards": {
        "num": 922,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Splintered Stormshards",
        "shortDesc": "Ends the effects of terrain.",
        "desc": "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
        "basePower": 190,
        "type": "Rock",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "letssnuggleforever": {
        "num": 923,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Let's Snuggle Forever",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 190,
        "type": "Fairy",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "clangoroussoulblaze": {
        "num": 924,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Clangorous Soulblaze",
        "shortDesc": "Raises the user's Atk/Def/SpAtk/SpDef/Spe by 1.",
        "desc": "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
        "basePower": 185,
        "type": "Dragon",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "guardianofalola": {
        "num": 925,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Guardian of Alola",
        "shortDesc": "Does damage equal to 3/4 target's current HP.",
        "desc": "Deals damage to the target equal to 3/4 of its current HP, rounded down, but not less than 1 HP.",
        "basePower": 1,
        "type": "Fairy",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "searingsunrazesmash": {
        "num": 926,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Searing Sunraze Smash",
        "shortDesc": "Ignores the Abilities of other Pokemon.",
        "desc": "This move and its effects ignore the Abilities of other Pokemon.",
        "basePower": 200,
        "type": "Steel",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "menacingmoonrazemaelstrom": {
        "num": 927,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Menacing Moonraze Maelstrom",
        "shortDesc": "Ignores the Abilities of other Pokemon.",
        "desc": "This move and its effects ignore the Abilities of other Pokemon.",
        "basePower": 200,
        "type": "Ghost",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "lightthatburnsthesky": {
        "num": 928,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Light That Burns the Sky",
        "shortDesc": "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
        "desc": "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
        "basePower": 200,
        "type": "Psychic",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Special"
    },
    "soulstealing7starstrike": {
        "num": 929,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Soul-Stealing 7-Star Strike",
        "shortDesc": "No additional effect.",
        "desc": "No additional effect.",
        "basePower": 195,
        "type": "Ghost",
        "accuracy": true,
        "pp": 1,
        "priority": 0,
        "category": "Physical"
    },
    "maxguard": {
        "num": 930,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Guard",
        "shortDesc": "Protects user from moves & Max Moves this turn.",
        "desc": "The user is protected from nearly all attacks made by other Pokemon during this turn, including Max and G-Max Moves. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Max Guard, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
        "basePower": 0,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "_isMaxMove": true
    },
    "maxflare": {
        "num": 940,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Flare",
        "shortDesc": "Base move affects power. Starts Sunny Day.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sunny Day begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Fire",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxflutterby": {
        "num": 937,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Flutterby",
        "shortDesc": "Base move affects power. Foes: -1 Sp. Atk.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Bug",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxlightning": {
        "num": 943,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Lightning",
        "shortDesc": "Base move affects power. Starts Electric Terrain.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Electric Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Electric",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxstrike": {
        "num": 931,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Strike",
        "shortDesc": "Base move affects power. Foes: -1 Speed.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Normal",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxknuckle": {
        "num": 932,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Knuckle",
        "shortDesc": "Base move affects power. Allies: +1 Attack.",
        "desc": "Boosts the user and its allies' Attack by 1 stage. BP scales with the base move's BP. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Fighting",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxphantasm": {
        "num": 938,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Phantasm",
        "shortDesc": "Base move affects power. Foes: -1 Defense.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Ghost",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxhailstorm": {
        "num": 945,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Hailstorm",
        "shortDesc": "Base move affects power. Starts Hail.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Hail begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Ice",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxooze": {
        "num": 934,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Ooze",
        "shortDesc": "Base move affects power. Allies: +1 Sp. Atk.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Special Attack of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Poison",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxgeyser": {
        "num": 941,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Geyser",
        "shortDesc": "Base move affects power. Starts Rain Dance.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Rain Dance begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Water",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxairstream": {
        "num": 933,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Airstream",
        "shortDesc": "Base move affects power. Allies: +1 Speed.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Speed of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Flying",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxstarfall": {
        "num": 948,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Starfall",
        "shortDesc": "Base move affects power. Starts Misty Terrain.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Misty Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Fairy",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxwyrmwind": {
        "num": 946,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Wyrmwind",
        "shortDesc": "Base move affects power. Foes: -1 Attack.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Attack of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Dragon",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxmindstorm": {
        "num": 944,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Mindstorm",
        "shortDesc": "Base move affects power. Starts Psychic Terrain.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Psychic Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Psychic",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxrockfall": {
        "num": 936,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Rockfall",
        "shortDesc": "Base move affects power. Starts Sandstorm.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Sandstorm begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Rock",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxquake": {
        "num": 935,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Quake",
        "shortDesc": "Base move affects power. Allies: +1 Sp. Def.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Ground",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxdarkness": {
        "num": 947,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Darkness",
        "shortDesc": "Base move affects power. Foes: -1 Sp. Def.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Special Defense of each Pokemon on the opposing side is lowered by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 1,
        "type": "Dark",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxovergrowth": {
        "num": 942,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Overgrowth",
        "shortDesc": "Base move affects power. Starts Grassy Terrain.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the effect of Grassy Terrain begins. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 10,
        "type": "Grass",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxsteelspike": {
        "num": 939,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Steelspike",
        "shortDesc": "Base move affects power. Allies: +1 Defense.",
        "desc": "Power is equal to the base move's Max Move power. If this move is successful, the Defense of each Pokemon on the user's side is raised by 1 stage, even if they have a substitute. This effect does not happen if the user is not Dynamaxed. If this move is used as a base move, it deals damage with a power of 0.",
        "basePower": 10,
        "type": "Steel",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxvinelash": {
        "num": 864,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Vine Lash",
        "shortDesc": "Uses its vine to deal damage. Foes side take damage overtime.",
        "desc": "Uses its vine to deal damage. Foes side take damage overtime.",
        "basePower": 65,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxwildfire": {
        "num": 865,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Wildfire",
        "shortDesc": "Uses its fury to deal damage. Foes side take damage overtime.",
        "desc": "Uses its fury to deal damage. Foes side take damage overtime.",
        "basePower": 65,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxcannonade": {
        "num": 866,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Cannonade",
        "shortDesc": "Uses its cannon to deal damage Foes side take damage overtime.",
        "desc": "Uses its cannon to deal damage Foes side take damage overtime.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxbefuddle": {
        "num": 867,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Befuddle",
        "shortDesc": "Damage and apply a random status except freeze.",
        "desc": "Damage and apply a random status except freeze.",
        "basePower": 65,
        "type": "Bug",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxvoltcrash": {
        "num": 868,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Volt Crash",
        "shortDesc": "Damage with its body the .enemies, causing paralysis.",
        "desc": "Damage with its body the .enemies, causing paralysis.",
        "basePower": 65,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxgoldrush": {
        "num": 869,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Gold Rush",
        "shortDesc": "Damage with coins the .enemies, causing confusion.",
        "desc": "Damage with coins the .enemies, causing confusion.",
        "basePower": 65,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxchistrike": {
        "num": 870,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Chi Strike",
        "shortDesc": "Strike a succession of .punches, raising crit ratio.",
        "desc": "Strike a succession of .punches, raising crit ratio.",
        "basePower": 65,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxterror": {
        "num": 871,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Terror",
        "shortDesc": "Scare the target making it unable to switch.",
        "desc": "Scare the target making it unable to switch.",
        "basePower": 65,
        "type": "Ghost",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxfoamburst": {
        "num": 872,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Foam Burst",
        "shortDesc": "Create an immense foam .that slow down the enemies.",
        "desc": "Create an immense foam .that slow down the enemies.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxresonance": {
        "num": 873,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Resonance",
        "shortDesc": "Deal damage and set .aurora veil if hailing.",
        "desc": "Deal damage and set .aurora veil if hailing.",
        "basePower": 65,
        "type": "Ice",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "maxcuddle": {
        "num": 874,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Max Cuddle",
        "shortDesc": "Cuddles the enemy make .it fall in love.",
        "desc": "Cuddles the enemy make .it fall in love.",
        "basePower": 65,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxreplenish": {
        "num": 875,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Replenish",
        "shortDesc": "Deals damage and restore the berry if eaten.",
        "desc": "Deals damage and restore the berry if eaten.",
        "basePower": 65,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxmalodor": {
        "num": 876,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Malodor",
        "shortDesc": "Deals damage and poison the enemies with its smell.",
        "desc": "Deals damage and poison the enemies with its smell.",
        "basePower": 65,
        "type": "Poison",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxmeltdown": {
        "num": 877,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Meltdown",
        "shortDesc": "Deals damage and prevents the opponents to use the same move.",
        "desc": "Deals damage and prevents the opponents to use the same move.",
        "basePower": 65,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxdrumsolo": {
        "num": 878,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Drum Solo",
        "shortDesc": "Play the drum dealing damag and ignoring ability.",
        "desc": "Play the drum dealing damag and ignoring ability.",
        "basePower": 90,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "maxfireball": {
        "num": 879,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Fireball",
        "shortDesc": "A fireball that ignores the target's ability.",
        "desc": "A fireball that ignores the target's ability.",
        "basePower": 90,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxhydrosnipe": {
        "num": 880,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Hydrosnipe",
        "shortDesc": "A perfect shot that that lands critical hit.",
        "desc": "A perfect shot that that lands critical hit.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxwindrage": {
        "num": 881,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Wind Rage",
        "shortDesc": "A wind shot that deals damage and remove hazards.",
        "desc": "A wind shot that deals damage and remove hazards.",
        "basePower": 70,
        "type": "Flying",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxgravitas": {
        "num": 882,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Gravitas",
        "shortDesc": "Psychic force that deals damage and set gravity.",
        "desc": "Psychic force that deals damage and set gravity.",
        "basePower": 70,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxstonesurge": {
        "num": 883,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Stonesurge",
        "shortDesc": "Water force that deals damage and set rocks.",
        "desc": "Water force that deals damage and set rocks.",
        "basePower": 70,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxvolcalith": {
        "num": 884,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Volcalith",
        "shortDesc": "A giant boulder that deal damage and damage overtime foes.",
        "desc": "A giant boulder that deal damage and damage overtime foes.",
        "basePower": 70,
        "type": "Rock",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxtartness": {
        "num": 885,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Tartness",
        "shortDesc": "Giant apples that deal damage and lower evasiveness.",
        "desc": "Giant apples that deal damage and lower evasiveness.",
        "basePower": 70,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxsweetness": {
        "num": 886,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sweetness",
        "shortDesc": "Strong scent deal damage and cure statuses of allies.",
        "desc": "Strong scent deal damage and cure statuses of allies.",
        "basePower": 70,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxsandblast": {
        "num": 887,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sandblast",
        "shortDesc": "Strong sandstorm that deals damage and bind the foes.",
        "desc": "Strong sandstorm that deals damage and bind the foes.",
        "basePower": 70,
        "type": "Ground",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxstunshock": {
        "num": 888,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Stun Shock",
        "shortDesc": "An electric sound that damage and status the foes.",
        "desc": "An electric sound that damage and status the foes.",
        "basePower": 70,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxcentiferno": {
        "num": 889,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Centiferno",
        "shortDesc": "Strong eruption that deals damage and bind the foes.",
        "desc": "Strong eruption that deals damage and bind the foes.",
        "basePower": 70,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxsmite": {
        "num": 890,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Smite",
        "shortDesc": "Fairy star that deals damage and confuse the foes.",
        "desc": "Fairy star that deals damage and confuse the foes.",
        "basePower": 70,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gigasnooze": {
        "num": 891,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Giga Snooze",
        "shortDesc": "Snooze that deals damage and loafs the foes.",
        "desc": "Snooze that deals damage and loafs the foes.",
        "basePower": 70,
        "type": "Dark",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "maxfinale": {
        "num": 892,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Max Finale",
        "shortDesc": "A final exhibition that deal damage and heals allies.",
        "desc": "A final exhibition that deal damage and heals allies.",
        "basePower": 70,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "gmaxsteelsurge": {
        "num": 893,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Steelsurge",
        "shortDesc": "An attack that deals damage and set steel spikes.",
        "desc": "An attack that deals damage and set steel spikes.",
        "basePower": 70,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxdepletion": {
        "num": 894,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Depletion",
        "shortDesc": "An attack that deals damage and lower move's pp.",
        "desc": "An attack that deals damage and lower move's pp.",
        "basePower": 70,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxoneblow": {
        "num": 980,
        "flags": {
            "mirror": 1
        },
        "name": "G-Max One Blow",
        "shortDesc": "G-max Urshifu attack. Ignores Max Guard.",
        "desc": "G-max Urshifu attack. Ignores Max Guard.",
        "basePower": 10,
        "type": "Dark",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gmaxrapidflow": {
        "num": 981,
        "flags": {
            "mirror": 1
        },
        "name": "G-Max Rapid Flow",
        "shortDesc": "G-max Urshifu attack. Ignores Max Guard.",
        "desc": "G-max Urshifu attack. Ignores Max Guard.",
        "basePower": 10,
        "type": "Water",
        "accuracy": true,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "combopunch": {
        "num": 848,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Combo Punch",
        "shortDesc": "Hits as many times as the Pokemon's arms.",
        "desc": "Hits as many times as the Pokemon's arms.",
        "basePower": 25,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "poisondrain": {
        "num": 849,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Poison Drain",
        "shortDesc": "Recovers half the HP of the damage done. May Poison.",
        "desc": "Recovers half the HP of the damage done. May Poison.",
        "basePower": 75,
        "pp": 10,
        "type": "Poison",
        "accuracy": 100,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "deterio": {
        "num": 850,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Deterio",
        "shortDesc": "Supereffective on steel type.",
        "desc": "Supereffective on steel type.",
        "basePower": 80,
        "pp": 10,
        "type": "Poison",
        "accuracy": 100,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "snowslide": {
        "num": 851,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Snow Slide",
        "shortDesc": "Large frozen boulders are hurled.May cause flinching.",
        "desc": "Large frozen boulders are hurled.May cause flinching.",
        "basePower": 75,
        "type": "Ice",
        "accuracy": 95,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "poisondrill": {
        "num": 852,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Poison Drill",
        "shortDesc": "Charge the enemy with its drill. May toxic.",
        "desc": "Charge the enemy with its drill. May toxic.",
        "basePower": 95,
        "type": "Poison",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "tectonicpower": {
        "num": 853,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Tectonic Power",
        "shortDesc": "Makes the ground shake with power. May lower Sp. Def.",
        "desc": "Makes the ground shake with power. May lower Sp. Def.",
        "basePower": 95,
        "type": "Ground",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "royalguard": {
        "num": 854,
        "flags": {},
        "name": "Royal Guard",
        "shortDesc": "Evades damage, and slightly raise Defense if struck.",
        "desc": "Evades damage, and slightly raise Defense if struck.",
        "basePower": 0,
        "type": "Fighting",
        "accuracy": true,
        "pp": 10,
        "priority": 4,
        "category": "Status",
        "contestType": "Tough"
    },
    "irongrip": {
        "num": 863,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Iron Grip",
        "shortDesc": "Traps and squeezes the foe for 4 or 5 turns.",
        "desc": "Traps and squeezes the foe for 4 or 5 turns.",
        "basePower": 50,
        "type": "Steel",
        "accuracy": 90,
        "pp": 10,
        "priority": 0,
        "category": "Physical",
        "contestType": "Tough"
    },
    "sisma": {
        "num": 857,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sisma",
        "shortDesc": "A powerful quake, but has no effect on flying foes.",
        "desc": "A powerful quake, but has no effect on flying foes.",
        "basePower": 100,
        "type": "Ground",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Tough"
    },
    "pixiedrain": {
        "num": 855,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Pixie Drain",
        "shortDesc": "An attack that steals half the damage inflicted.",
        "desc": "An attack that steals half the damage inflicted.",
        "basePower": 75,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "contestType": "Smart"
    },
    "waterfangs": {
        "num": 856,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Water Fangs",
        "shortDesc": "Lock the target with the jaw. May cause flinching.",
        "desc": "Lock the target with the jaw. May cause flinching.",
        "basePower": 75,
        "type": "Water",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "pixiefangs": {
        "num": 862,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "bite": 1
        },
        "name": "Pixie Fangs",
        "shortDesc": "Lock the target with the jaw. May cause flinching.",
        "desc": "Lock the target with the jaw. May cause flinching.",
        "basePower": 75,
        "type": "Fairy",
        "accuracy": 95,
        "pp": 15,
        "priority": 0,
        "category": "Physical",
        "contestType": "Beauty"
    },
    "hoarfrost": {
        "num": 858,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "reflectable": 1
        },
        "name": "Hoarfrost",
        "shortDesc": "Cover the enemy with cold water. Inflicts frostbite status.",
        "desc": "Cover the enemy with cold water. Inflicts frostbite status.",
        "basePower": 0,
        "type": "Ice",
        "accuracy": 85,
        "pp": 15,
        "priority": 0,
        "category": "Status",
        "contestType": "Beauty"
    },
    "purifyingwater": {
        "num": 859,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bullet": 1
        },
        "name": "Purifying Water",
        "shortDesc": "Damage on foes, but restores water Pokemon's HP.",
        "desc": "Damage on foes, but restores water Pokemon's HP.",
        "basePower": 70,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "windsomofchange": {
        "num": 860,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "bypasssub": 1
        },
        "name": "Windsom of Change",
        "shortDesc": "Clear hazard, terrain and deal damage on foes.",
        "desc": "Clear hazard, terrain and deal damage on foes.",
        "basePower": 80,
        "type": "Water",
        "accuracy": 100,
        "pp": 15,
        "priority": 0,
        "category": "Special",
        "contestType": "Cute"
    },
    "seasonpower": {
        "num": 861,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Season Power",
        "shortDesc": "Uses the power of the current season, changing the type.",
        "desc": "Uses the power of the current season, changing the type.",
        "basePower": 90,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "contestType": "Cool"
    },
    "befuddle": {
        "num": 867,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Befuddle",
        "shortDesc": "Damage and apply a random status except freeze.",
        "desc": "Damage and apply a random status except freeze.",
        "basePower": 65,
        "type": "Bug",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "cannonade": {
        "num": 866,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "pulse": 1
        },
        "name": "Cannonade",
        "shortDesc": "Uses its cannon to deal damage Foes side take damage overtime.",
        "desc": "Uses its cannon to deal damage Foes side take damage overtime.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "centiferno": {
        "num": 889,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Centiferno",
        "shortDesc": "Strong eruption that deals damage and bind the foes.",
        "desc": "Strong eruption that deals damage and bind the foes.",
        "basePower": 70,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "chistrike": {
        "num": 870,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Chi Strike",
        "shortDesc": "Strike a succession of .punches, raising crit ratio.",
        "desc": "Strike a succession of .punches, raising crit ratio.",
        "basePower": 65,
        "type": "Fighting",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "depletion": {
        "num": 894,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Depletion",
        "shortDesc": "An attack that deals damage and lower move's pp.",
        "desc": "An attack that deals damage and lower move's pp.",
        "basePower": 70,
        "type": "Dragon",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "drumsolo": {
        "num": 878,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Drum Solo",
        "shortDesc": "Play the drum dealing damag and ignoring ability.",
        "desc": "Play the drum dealing damag and ignoring ability.",
        "basePower": 90,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "foamburst": {
        "num": 872,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Foam Burst",
        "shortDesc": "Create an immense foam .that slow down the enemies.",
        "desc": "Create an immense foam .that slow down the enemies.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "goldrush": {
        "num": 869,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Gold Rush",
        "shortDesc": "Damage with coins the .enemies, causing confusion.",
        "desc": "Damage with coins the .enemies, causing confusion.",
        "basePower": 65,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "gravitas": {
        "num": 882,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Gravitas",
        "shortDesc": "Psychic force that deals damage and set gravity.",
        "desc": "Psychic force that deals damage and set gravity.",
        "basePower": 70,
        "type": "Psychic",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "hydrosnipe": {
        "num": 880,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Hydrosnipe",
        "shortDesc": "A perfect shot that that lands critical hit.",
        "desc": "A perfect shot that that lands critical hit.",
        "basePower": 65,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "malodor": {
        "num": 876,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Malodor",
        "shortDesc": "Deals damage and poison the enemies with its smell.",
        "desc": "Deals damage and poison the enemies with its smell.",
        "basePower": 65,
        "type": "Poison",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "meltdown": {
        "num": 877,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1,
            "punch": 1
        },
        "name": "Meltdown",
        "shortDesc": "Deals damage and prevents the opponents to use the same move.",
        "desc": "Deals damage and prevents the opponents to use the same move.",
        "basePower": 65,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "replenish": {
        "num": 875,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Replenish",
        "shortDesc": "Deals damage and restore the berry if eaten.",
        "desc": "Deals damage and restore the berry if eaten.",
        "basePower": 65,
        "type": "Normal",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "resonance": {
        "num": 873,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Resonance",
        "shortDesc": "Deal damage and set .aurora veil if hailing.",
        "desc": "Deal damage and set .aurora veil if hailing.",
        "basePower": 65,
        "type": "Ice",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "sandblast": {
        "num": 887,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sandblast",
        "shortDesc": "Strong sandstorm that deals damage and bind the foes.",
        "desc": "Strong sandstorm that deals damage and bind the foes.",
        "basePower": 70,
        "type": "Ground",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "smite": {
        "num": 890,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Smite",
        "shortDesc": "Fairy star that deals damage and confuse the foes.",
        "desc": "Fairy star that deals damage and confuse the foes.",
        "basePower": 70,
        "type": "Fairy",
        "accuracy": 100,
        "pp": 10,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "steelsurge": {
        "num": 893,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Steelsurge",
        "shortDesc": "An attack that deals damage and set steel spikes.",
        "desc": "An attack that deals damage and set steel spikes.",
        "basePower": 70,
        "type": "Steel",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "stonesurge": {
        "num": 883,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Stonesurge",
        "shortDesc": "Water force that deals damage and set rocks.",
        "desc": "Water force that deals damage and set rocks.",
        "basePower": 70,
        "type": "Water",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "stunshock": {
        "num": 888,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "sound": 1
        },
        "name": "Stun Shock",
        "shortDesc": "An electric sound that damage and status the foes.",
        "desc": "An electric sound that damage and status the foes.",
        "basePower": 70,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "sweetness": {
        "num": 886,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Sweetness",
        "shortDesc": "Strong scent deal damage and cure statuses of allies.",
        "desc": "Strong scent deal damage and cure statuses of allies.",
        "basePower": 70,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "tartness": {
        "num": 885,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Tartness",
        "shortDesc": "Giant apples that deal damage and lower evasiveness.",
        "desc": "Giant apples that deal damage and lower evasiveness.",
        "basePower": 70,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "vinelash": {
        "num": 864,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Vine Lash",
        "shortDesc": "Uses its vine to deal damage. Foes side take damage overtime.",
        "desc": "Uses its vine to deal damage. Foes side take damage overtime.",
        "basePower": 65,
        "type": "Grass",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "volcalith": {
        "num": 884,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Volcalith",
        "shortDesc": "A giant boulder that deal damage and damage overtime foes.",
        "desc": "A giant boulder that deal damage and damage overtime foes.",
        "basePower": 70,
        "type": "Rock",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "voltcrash": {
        "num": 868,
        "flags": {
            "protect": 1,
            "mirror": 1,
            "contact": 1
        },
        "name": "Volt Crash",
        "shortDesc": "Damage with its body the .enemies, causing paralysis.",
        "desc": "Damage with its body the .enemies, causing paralysis.",
        "basePower": 65,
        "type": "Electric",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    },
    "wildfire": {
        "num": 865,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Wildfire",
        "shortDesc": "Uses its fury to deal damage. Foes side take damage overtime.",
        "desc": "Uses its fury to deal damage. Foes side take damage overtime.",
        "basePower": 65,
        "type": "Fire",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Special",
        "_isMaxMove": true
    },
    "windrage": {
        "num": 881,
        "flags": {
            "protect": 1,
            "mirror": 1
        },
        "name": "Wind Rage",
        "shortDesc": "A wind shot that deals damage and remove hazards.",
        "desc": "A wind shot that deals damage and remove hazards.",
        "basePower": 70,
        "type": "Flying",
        "accuracy": 100,
        "pp": 5,
        "priority": 0,
        "category": "Physical",
        "_isMaxMove": true
    }
}