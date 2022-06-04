'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Listings', [
    {
      userId: 1,
      address: '1000 Main St.',
      city: 'Austin',
      state: 'Texas',
      country: 'USA',
      name: 'Garden Villa',
      price: 550,
      cleaningFee: 50,
      serviceFee: 100
    },
    {
      userId: 2,
      address: '123 Mariposa Dr.',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'Mexico',
      name: 'Rooftop apartment with pool!',
      price: 120,
      cleaningFee: 45,
      serviceFee: 150
    },
    {
      userId: 3,
      address: '345 Algarita',
      city: 'Los Angeles',
      state: 'California',
      country: 'USA',
      name: 'Desert Hideout ',
      price: 95,
      cleaningFee: 35,
      serviceFee: 95
    },
    {
      userId: 3,
      address: '66 Mountain rd.',
      city: 'Bend',
      state: 'Oregon',
      country: 'USA',
      name: 'Welcome to my mountain retreat!',
      price: 250,
      cleaningFee: 55,
      serviceFee: 80
    },
    {
      userId: 3,
      address: '12 Paso tr.',
      city: 'Canggu',
      state: 'Bali',
      country: 'Indonesia',
      name: 'Jungle home surrounded by nature!',
      price: 55,
      cleaningFee: 20,
      serviceFee: 25
    },
    {
      userId: 4,
      address: '99 Wind Way',
      city: 'North Shore',
      state: 'Hawaii',
      country: 'USA',
      name: 'Steps from the beach! Wonderful natural light',
      price: 120,
      cleaningFee: 200,
      serviceFee: 25
    },
    {
      userId: 4,
      address: 'Carrer Ane, 452, Bajo 1º',
      city: 'San Jose del Cabo',
      state: 'Baja California Sur',
      country: 'Mexico',
      name: 'Magazine Cover Boho Modern Villa @ Costa Azul Surf',
      price: 995,
      cleaningFee: 250,
      serviceFee: 700
    },
    {
      userId: 4,
      address: '1362 Skyla Points Suite 336',
      city: 'Volcano',
      state: 'Hawaii',
      country: 'USA',
      name: 'Kūono at Volcano',
      price: 450,
      cleaningFee: 90,
      serviceFee: 330
    },
    {
      userId: 7,
      address: '77539 Marcel Cliff',
      city: 'Yucca',
      state: 'California',
      country: 'United States of America',
      name: 'Minimalist Modern Cabin - Amazing Views',
      price: 225,
      cleaningFee: 85,
      serviceFee: 170
    },
    {
      userId: 6,
      address: 'Contrada Pagano 048',
      city: 'Saint-Victor-la-Coste',
      state: 'Provence ',
      country: 'France',
      name: 'Stone Cottage in the Grounds of a 16th-Century Castle',
      price: 215,
      cleaningFee: 150,
      serviceFee: 20
    },
    {
      userId: 2,
      address: '863 Roos Harbor',
      city: 'Cape Town',
      state: 'Western Cape',
      country: 'South Africa',
      name: 'Beau Manor',
      price: 9400,
      cleaningFee: 100,
      serviceFee: 125
    },
    {
      userId: 3,
      address: 'Narainsingel 30-10',
      city: 'Rælingen',
      state: 'Akershus',
      country: 'Norway',
      name: 'The WonderINN Mirrored Glass Cabin',
      price: 433,
      cleaningFee: 27,
      serviceFee: 309
    },
    {
      userId: 4,
      address: '1506 Burgundy',
      city: 'New Orleans',
      state: 'Louisiana',
      country: 'USA',
      name: 'Elegant Flat in Historic Lower Garden District',
      price: 375,
      cleaningFee: 80,
      serviceFee: 225
    },
    {
      userId: 4,
      address: 'Rúa Aguado, 3, 4º F',
      city: 'El Port de la Selva',
      state: 'Catalonia',
      country: 'Spain',
      name: 'Sunflower House',
      price: 510,
      cleaningFee: 86,
      serviceFee: 375
    },
    {
      userId: 1,
      address: '211 Gaylord Drive',
      city: 'Cortez',
      state: 'Colorado',
      country: 'USA',
      name: 'Private Sage Canyon Cliff House near Mesa Verde.',
      price: 328,
      cleaningFee: 78,
      serviceFee: 242
    },
    {
      userId: 1,
      address: 'Rue Ceapa, 09, 68º E',
      city: 'Noizay',
      state: 'Centre-Val de Loire',
      country: 'France',
      name: 'Charming troglodyte house in the Loire Valley',
      price: 120,
      cleaningFee: 200,
      serviceFee: 25
    },
    {
      userId: 4,
      address: '102 South Congress',
      city: 'Austin',
      state: 'Texas',
      country: 'United States of America',
      name: 'Beautiful Modern Home On SoCo w Full Office/3rdBR',
      price: 303,
      cleaningFee: 99,
      serviceFee: 313
    },
    {
      userId: 4,
      address: '6033 Poquito St',
      city: 'Austin',
      state: 'Texas',
      country: 'USA',
      name: 'Enjoy the Heated Pool at a Beautifully Designed Getaway',
      price: 204,
      cleaningFee: 50,
      serviceFee: 150
    },
    {
      userId: 1,
      address: 'Av. Jacobo Caballero # 59 Piso 1',
      city: 'Todos Santos',
      state: 'Baja California Sur',
      country: 'Mexico',
      name: 'Casa Buena Vista. Ocean view villa with own pool',
      price: 100,
      cleaningFee: 200,
      serviceFee: 25
    },
    {
      userId: 5,
      address: 'Jr. Mariangel Alcaraz # 97492',
      city: 'San Marcos La Laguna',
      state: 'Solola',
      country: 'Guatemala',
      name: 'Lakeview Lodge',
      price: 75,
      cleaningFee: 25,
      serviceFee: 25
    },
    {
      userId: 5,
      address: 'Av. Eduardo Rodrígez # 62',
      city: 'Bocas',
      state: 'Toro Province',
      country: 'Panama',
      name: 'Rustic cottage-Ocean views/walk to surfing/Jungle',
      price: 150,
      cleaningFee: 25,
      serviceFee: 25
    },
    {
      userId: 7,
      address: 'No. 2, Jalan 8/56',
      city: 'Singapore',
      state: 'Singapore',
      country: 'Singapore',
      name: 'T Luxury Home @ Orchard Road, 2 BR, Quiet, Terrace',
      price: 290,
      cleaningFee: 100,
      serviceFee: 25
    },
    {
      userId: 4,
      address: '25445 Heaney River',
      city: 'Newport Beach',
      state: 'California',
      country: 'USA',
      name: 'Olive Beach Bungalow',
      price: 550,
      cleaningFee: 100,
      serviceFee: 25
    },
    {
      userId: 4,
      address: 'Travessera Biel, 96, 20º 3º',
      city: 'Braga',
      state: 'Pedrinhas',
      country: 'Portugal',
      name: 'Beach House - Amazing front water spot',
      price: 120,
      cleaningFee: 25,
      serviceFee: 25
    },
    {
      userId: 1,
      address: 'Av. Manuel Sierra # 3',
      city: 'Governador Celso Ramos',
      state: 'Governador Celso Ramos',
      country: 'Brazil',
      name: 'Exceptional property private beach - rare',
      price: 89,
      cleaningFee: 30,
      serviceFee: 20
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Listings', null, {});
  }
};
