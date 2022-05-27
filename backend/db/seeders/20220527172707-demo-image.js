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
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Images', null, {});
  }
};
