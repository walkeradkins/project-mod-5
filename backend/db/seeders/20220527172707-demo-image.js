'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Images', [
     {
       listingId: 1,
       url: 'https://images.unsplash.com/photo-1520950237264-dfe336995c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
     },
     {
       listingId: 1,
       url: 'https://images.unsplash.com/photo-1619317570157-7970e36543e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80'
     },
     {
       listingId: 1,
       url: 'https://images.unsplash.com/photo-1621544346312-546fe424bb6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
     },
     {
       listingId: 1,
       url: 'https://images.unsplash.com/photo-1527359443443-84a48aec73d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
     },
     {
       listingId: 1,
       url: 'https://a0.muscache.com/im/pictures/9e588537-7ac2-410d-9afd-7468f4497035.jpg?im_w=960'
     },
     {
       listingId: 2,
       url: 'https://images.unsplash.com/photo-1624132821171-61fe18238c28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
     },
     {
       listingId: 2,
       url: 'https://images.unsplash.com/photo-1562123127-4313d9e4de91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
     },
     {
       listingId: 2,
       url: 'https://images.unsplash.com/photo-1514053026555-49ce8886ae41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
     },
     {
       listingId: 2,
       url: 'https://images.unsplash.com/photo-1562123127-b6f1d3983ff5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1662&q=80'
     },
     {
       listingId: 2,
       url: 'https://a0.muscache.com/im/pictures/956d4cba-6e0d-4931-a82b-68ced223cd79.jpg?im_w=960'
     },
     {
       listingId: 3,
       url: 'https://images.unsplash.com/photo-1515898913320-f38370edab7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80'
     },
     {
       listingId: 3,
       url: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170'
     },
     {
       listingId: 3,
       url: 'https://images.unsplash.com/photo-1533764523203-662e249ca4d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80'
     },
     {
       listingId: 3,
       url: 'https://images.unsplash.com/photo-1597211833712-5e41faa202ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
     },
     {
       listingId: 3,
       url: 'https://images.unsplash.com/photo-1523249322636-7defc1f0c35a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
     },
     {
       listingId: 4,
       url: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
     },
     {
       listingId: 4,
       url: 'https://images.unsplash.com/photo-1590725175785-de025cc60835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
     },
     {
       listingId: 4,
       url: 'https://images.unsplash.com/photo-1601919297600-8ffbfd160d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
     },
     {
       listingId: 4,
       url: 'https://images.unsplash.com/photo-1542425967-a2dd69fefbb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
     },
     {
       listingId: 4,
       url: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
     },
     {
       listingId: 5,
       url: 'https://images.unsplash.com/photo-1610019959724-62123f43b430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
     },
     {
       listingId: 5,
       url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
     },
     {
       listingId: 5,
       url: 'https://images.unsplash.com/photo-1588954521767-3aee2094a31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
     },
     {
       listingId: 5,
       url: 'https://images.unsplash.com/photo-1620918780639-e90f2a0f40c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
     },
     {
       listingId: 5,
       url: 'https://a0.muscache.com/im/pictures/7e8f4424-5b86-4e1f-8bea-19de93af9d64.jpg?im_w=960'
     },
     {
       listingId: 6,
       url: 'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
     },
     {
       listingId: 6,
       url: 'https://images.unsplash.com/photo-1598924957326-0446ac30341e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
     },
     {
       listingId: 6,
       url: 'https://images.unsplash.com/photo-1515889693025-236660a1c20a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
     },
     {
       listingId: 6,
       url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
     },
     {
       listingId: 6,
       url: 'https://images.unsplash.com/photo-1650429356490-f461d720fcc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
     },
     {
       listingId: 6,
       url: 'https://images.unsplash.com/photo-1597429873375-f3f688c77a07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80'
     },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};
