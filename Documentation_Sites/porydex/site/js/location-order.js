// site/data/location-order.js
// Location della scheda Encounters, divise per split (stessi nomi di Trainer_Docs/site/splits.txt).
// Ogni location sta nel primo split in cui ci si puo' arrivare.
window.PorydexLocationSplits = [
  {
    name: 'Aqua Grunt',
    locations: [
      'Littleroot Town',
      'Route 101',
      'Oldale Town',
      'Route 102',
      'Route 103',
      'Petalburg City',
      'Route 104',
      'Petalburg Woods'
    ]
  },
  {
    name: 'Roxanne',
    locations: [
      'Rustboro City',
      'Route 115',
      'Seaspray'
    ]
  },
  {
    name: 'GruntMulti',
    locations: [
      'Alternative Forest', // da Petalburg Woods, serve Taglio
      'Route 116',
      'Rusturf Tunnel'
    ]
  },
  {
    name: 'Brawly',
    locations: [
      'Dewford Town',
      'Route 106',
      'Route 107',
      'Dewford Meadow',
      'Dewford Manor',
      'Granite Cave',
      'Route 109',
      'Slateport City',
      'Slateport Sewer',
      'Slateport Sewers'
    ]
  },
  {
    name: 'Rival 110',
    locations: [
      'Route 110'
    ]
  },
  {
    name: 'Wattson',
    locations: [
      'Mauville City',
      'Route 117',
      'Verdanturf Town',
      'Verdanturf Prairie',
      'Route 118',
      'Dune Cave'
    ]
  },
  {
    name: 'Meteor Falls',
    locations: [
      'Route 111',
      'Route 112',
      'Fiery Path',
      'Route 113',
      'Fallarbor Town',
      'Route 114',
      'Meteor Falls'
    ]
  },
  {
    name: 'Flannery',
    locations: [
      'Mt Chimney',
      'Jagged Pass',
      'Lavaridge Town'
    ]
  },
  {
    name: 'Magma Desert',
    locations: [
      'Desert Ruins',
      'Mirage Tower' // appare solo dopo l'evento di Maxie nel deserto
    ]
  },
  {
    name: 'Norman',
    locations: [
      'Desert Underpass' // i fossili compaiono dopo il crollo della Mirage Tower
    ]
  },
  {
    name: 'Surf Routes',
    locations: [
      'Route 105',
      'Route 108',
      'New Mauville'
    ]
  },
  {
    name: 'Abandoned Ship',
    locations: [
      'Abandoned Ship'
    ]
  },
  {
    name: 'Area Zero',
    locations: [
      'Area Zero'
    ]
  },
  {
    name: 'Winona',
    locations: [
      'Route 119',
      'Fortree City',
      'Route 120',
      'Scorched Slab',
      'Route 123'
    ]
  },
  {
    // Oltre la versione attuale del gioco
    name: 'Not available yet',
    locations: [
      'Ancient Tomb',
      'Route 121',
      'Safari Zone',
      'Lilycove City',
      'Route 122',
      'Mt Pyre',
      'Route 124',
      'Magma Hideout',
      'Aqua Hideout',
      'Mossdeep City',
      'Route 126',
      'Underwater - Route',
      'Route 127',
      'Route 125',
      'Shoal Cave',
      'Seafloor Cavern',
      'Island Cave', //Temp, da vedere in base alla storia
      'Route 128',
      'Route 129',
      'Route 130',
      'Route 131',
      'Route 132',
      'Pacifidlog Town',
      'Route 133',
      'Route 134',
      'Sootopolis City',
      'Sky Pillar',
      'Ever Grande City',
      'Victory Road',
      'Cave of Origin',
      'Altering Cave',
      'Artisan Cave',
      'Terra Cave',
      'Marine Cave',
      'Southern Island',
      'Battle Frontier',
      'Birth Island',
      'Faraway Island',
      'Navel Rock'
    ]
  }
];

window.PorydexLocationOrder = window.PorydexLocationSplits.reduce(function (all, split) {
  return all.concat(split.locations);
}, []);
