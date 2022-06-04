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
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/c96bebc7-3e49-459a-befb-89ad83af634a.jpg?im_w=960'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/83a88a64-810d-4dcb-8ce4-8b1bc41e5df3.jpg?im_w=720'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42742665/original/0f2e2367-cffb-4a78-bffb-440ef1d6820a.jpeg?im_w=720'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-42742665/original/54ea822a-36d9-4d05-88c2-b9f90d5b3748.jpeg?im_w=720'
      },
      {
        listingId: 7,
        url: 'https://a0.muscache.com/im/pictures/1bf34831-1477-4dda-893d-b77b5cda0342.jpg?im_w=720'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/40ad3ba5-fab2-4d36-8586-d56fe70a8b85.jpg?im_w=960'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22319039/original/ea2885d6-e04c-4169-9043-d4c7b93f1081.jpeg?im_w=720'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22319039/original/3d9bb479-04fd-41d7-a22a-11add24e41ad.jpeg?im_w=720'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22319039/original/b6b9835b-7fc5-42a4-aa87-36a839b9b008.jpeg?im_w=720'
      },
      {
        listingId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-22319039/original/ac2237f5-cdbf-4777-bc55-9ad5d3b5770c.jpeg?im_w=720'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/4bdba83e-b4cd-4ac0-9eb0-64bdad1cb260.jpg?im_w=960'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/f38c614f-1be1-40b4-bac0-33613b233486.jpg?im_w=1200'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/cb90565e-29e9-438e-8295-46291381774e.jpg?im_w=720'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/52e6c1bd-23d6-4739-8980-7496690049f9.jpg?im_w=1200'
      },
      {
        listingId: 9,
        url: 'https://a0.muscache.com/im/pictures/4a87b0a3-173f-4f83-8f93-e548041cd985.jpg?im_w=1200'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-14078693/original/c77d8ab0-68d5-4fb0-b68f-c5f13de9cdcc?im_w=1200'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-14078693/original/397f15c8-6ac3-4845-bcd0-a4cbbae900fb?im_w=720'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-14078693/original/5bf0e50d-a885-4d62-b25b-39523e5d88bb?im_w=1200'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-14078693/original/bf7f8ae4-284d-4168-b9eb-c272a10f3e5e?im_w=1200'
      },
      {
        listingId: 10,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-14078693/original/a94483c4-f4e4-4125-95a2-f13838b83740?im_w=1200'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-577893800532627464/original/c8bf03d8-04d3-4020-9304-5913e93780ee.jpeg?im_w=960'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-577893800532627464/original/81bba94f-0869-4fe5-afa0-73311052553d.jpeg?im_w=720'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-577893800532627464/original/c19d60ca-ffea-44f3-b3ee-386c2eb8ef41.jpeg?im_w=720'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-577893800532627464/original/5072d1cb-dbdf-4c42-9336-c16f807bd11f.jpeg?im_w=720'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-577893800532627464/original/11e47aed-a49b-4895-b3b7-0be6098eba4e.jpeg?im_w=720'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-577893800532627464/original/d1d5f3d4-2050-48a6-8fd7-7a5cafb5bbb4.jpeg?im_w=720'
      },
      {
        listingId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-577893800532627464/original/240c0ebd-816e-4fe2-8f21-4ed248a5619c.jpeg?im_w=1200'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/9e8d63dc-a594-4364-9be4-daf83610fd8c?im_w=1200'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/9e8d63dc-a594-4364-9be4-daf83610fd8c?im_w=1200'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/bbc08ed9-3415-4f38-ae72-1fbee28e6b8d?im_w=1200'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/52ef5dd7-a8fa-43ba-8b0d-2d66d1443891?im_w=1200'
      },
      {
        listingId: 12,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-34444025/original/56da593b-40a2-4e71-8a76-7bf23071f5a9?im_w=1200'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-24631451/original/48d11ef8-f307-4b8b-b393-6402c7abb28f?im_w=1200'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-24631451/original/f00ea16c-e6de-4176-b3b9-898c977af249?im_w=720'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/efd4c515-ee64-412b-bd50-2885998902a6.jpg?im_w=720'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/c383199c-229a-4ca4-a226-4a1355d63e77.jpg?im_w=720'
      },
      {
        listingId: 13,
        url: 'https://a0.muscache.com/im/pictures/4b8be7ef-d29a-4d9b-8d45-85c77e201ccf.jpg?im_w=1200'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-3524556/original/24e9b114-7db5-4fab-8994-bc16f263ad1d.jpeg?im_w=960'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/81723679/e5e479c0_original.jpg?im_w=720'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/44500491/e398d404_original.jpg?im_w=720'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/81723699/da972d70_original.jpg?im_w=1200'
      },
      {
        listingId: 14,
        url: 'https://a0.muscache.com/im/pictures/81723773/cef0473c_original.jpg?im_w=1200'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/02a6b6df-bb89-4721-ba7f-c703d94a99d4.jpg?im_w=960'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/802bc522-f1ee-414d-b224-d8fccf45dd87.jpg?im_w=720'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/794e91e5-32f5-4605-932f-0622d65c0cda.jpg?im_w=720'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/4e989c54-4927-497b-a25b-9dfd365a9d18.jpg?im_w=720'
      },
      {
        listingId: 15,
        url: 'https://a0.muscache.com/im/pictures/9e30417a-672e-4fd2-8510-d64a5a081bc6.jpg?im_w=720'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/41cbe912-35d8-4340-8dba-a3b551bbe94a.jpg?im_w=960'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/ee54cf8e-28fc-49f3-9351-41a300afa6b7.jpg?im_w=720'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/909a2f6c-35bb-4345-b6f4-ca6204963998.jpg?im_w=720'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/34eac851-8fc3-43a3-94a8-3297ee7cc94d.jpg?im_w=720'
      },
      {
        listingId: 16,
        url: 'https://a0.muscache.com/im/pictures/89cddd68-c028-4e63-ae4d-9a5792d056b7.jpg?im_w=720'
      },
      {
        listingId: 17,
        url: 'https://a0.muscache.com/im/pictures/a87ebdb7-d722-44c2-a632-9bca6abbebab.jpg?im_w=720'
      },
      {
        listingId: 17,
        url: 'https://a0.muscache.com/im/pictures/093be2df-d136-40da-8c0a-03e5bd771626.jpg?im_w=720'
      },
      {
        listingId: 17,
        url: 'https://a0.muscache.com/im/pictures/db35005a-2a8b-4484-9559-0aae5023d31a.jpg?im_w=1200'
      },
      {
        listingId: 17,
        url: 'https://a0.muscache.com/im/pictures/5b899ef0-1b97-4ee8-be4b-d8debe26175d.jpg?im_w=1200'
      },
      {
        listingId: 17,
        url: 'https://a0.muscache.com/im/pictures/7e9e1cde-fa6b-4b97-9e09-28a0d47b676a.jpg?im_w=1200'
      },
      {
        listingId: 18,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-12308357/original/bbc0ac2c-eb68-45db-aae9-3654d93ba46f?im_w=1200'
      },
      {
        listingId: 18,
        url: 'https://a0.muscache.com/im/pictures/7c174138-5c4c-4dfd-9697-00ff643ac290.jpg?im_w=1200'
      },
      {
        listingId: 18,
        url: 'https://a0.muscache.com/im/pictures/monet/Select-12308357/original/c5f84a53-94ff-4882-94fd-ab0b7f0e7aa1?im_w=720'
      },
      {
        listingId: 18,
        url: 'https://a0.muscache.com/im/pictures/1aea5b60-2236-43f4-b851-c302c2463c28.jpg?im_w=720'
      },
      {
        listingId: 18,
        url: 'https://a0.muscache.com/im/pictures/bed61131-6ba0-4ce3-907a-86d5f5cd9843.jpg?im_w=720'
      },
      {
        listingId: 18,
        url: 'https://a0.muscache.com/im/pictures/b45a1b84-4b30-4191-9bf7-d0f672001072.jpg?im_w=720'
      },
      {
        listingId: 19,
        url: 'https://a0.muscache.com/im/pictures/eda0a4c8-229d-454c-acf5-53c52bce41ce.jpg?im_w=960'
      },
      {
        listingId: 19,
        url: 'https://a0.muscache.com/im/pictures/b1bc7430-3533-47c2-b2bb-fcae94fdfcc4.jpg?im_w=720'
      },
      {
        listingId: 19,
        url: 'https://a0.muscache.com/im/pictures/c13ccd92-9fc7-4da9-bc0b-b01e8ece1a0c.jpg?im_w=720'
      },
      {
        listingId: 19,
        url: 'https://a0.muscache.com/im/pictures/0706e363-49ea-4cd7-abd8-d550c75b9027.jpg?im_w=720'
      },
      {
        listingId: 19,
        url: 'https://a0.muscache.com/im/pictures/7042845c-cd19-4bf0-a3b3-d78d7508335c.jpg?im_w=720'
      },
      {
        listingId: 20,
        url: 'https://a0.muscache.com/im/pictures/8d18a690-1e9b-46b3-a053-a436c43d76a1.jpg?im_w=960'
      },
      {
        listingId: 20,
        url: 'https://a0.muscache.com/im/pictures/13bfb81b-e957-4ab6-8835-76ebcb14b1a4.jpg?im_w=720'
      },
      {
        listingId: 20,
        url: 'https://a0.muscache.com/im/pictures/04d832f5-48ca-4923-a084-4f99d6bb0c93.jpg?im_w=720'
      },
      {
        listingId: 20,
        url: 'https://a0.muscache.com/im/pictures/40da2b88-8fe9-4436-b692-89877d206443.jpg?im_w=1200'
      },
      {
        listingId: 20,
        url: 'https://a0.muscache.com/im/pictures/af8b40c2-aefd-4b25-a5fe-2ec52535d435.jpg?im_w=1200'
      },
      {
        listingId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35971170/original/f818f70a-ea03-4fed-a06a-9a92e90cb2a6.jpeg?im_w=960'
      },
      {
        listingId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35971170/original/680afcb4-7aba-472e-83b9-3e5ed6c99782.jpeg?im_w=720'
      },
      {
        listingId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35971170/original/7976cc44-ac2b-4af9-8cf7-e8a10e0bcf4a.jpeg?im_w=720'
      },
      {
        listingId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35971170/original/8f669a30-726d-4fee-8ba5-511bc7c322a4.jpeg?im_w=720'
      },
      {
        listingId: 21,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35971170/original/6833ce27-50cc-4ed5-a79d-fdb01f397564.jpeg?im_w=720'
      },
      {
        listingId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47211647/original/33ef30ee-0143-4f17-9bfd-0bbcf3233daf.png?im_w=960'
      },
      {
        listingId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47211647/original/a7da153b-9cdb-426d-9874-6769dd4df5f9.png?im_w=720'
      },
      {
        listingId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47211647/original/58db64d6-379c-4895-8631-3c7c9e8e1209.png?im_w=720'
      },
      {
        listingId: 22,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-47211647/original/4a508c1a-08b4-4ef5-a9d2-7328298e3aff.png?im_w=720'
      },
      {
        listingId: 22,
        url: 'https://a0.muscache.com/im/pictures/1f210d08-693e-4944-b738-99f27b10034a.jpg?im_w=720'
      },
      {
        listingId: 23,
        url: 'https://a0.muscache.com/im/pictures/daaef3a5-75c5-4478-9dfa-b497f1b29008.jpg?im_w=960'
      },
      {
        listingId: 23,
        url: 'https://a0.muscache.com/im/pictures/ed71c056-13f9-4fda-92de-35f317771633.jpg?im_w=1200'
      },
      {
        listingId: 23,
        url: 'https://a0.muscache.com/im/pictures/1589a3db-d571-4560-8d16-0af1f6f65632.jpg?im_w=720'
      },
      {
        listingId: 23,
        url: 'https://a0.muscache.com/im/pictures/40188141-c869-4760-a802-8912174645cb.jpg?im_w=1200'
      },
      {
        listingId: 23,
        url: 'https://a0.muscache.com/im/pictures/bf378f50-b55a-4b54-be97-1fe91bb22c0c.jpg?im_w=1200'
      },
      {
        listingId: 24,
        url: 'https://a0.muscache.com/im/pictures/7811d394-1ef2-4c15-9c39-a00e284b0a63.jpg?im_w=960'
      },
      {
        listingId: 24,
        url: 'https://a0.muscache.com/im/pictures/65243a0c-8d02-4eed-8426-9aa9a100f499.jpg?im_w=720'
      },
      {
        listingId: 24,
        url: 'https://a0.muscache.com/im/pictures/dd6335a7-9d88-4339-bc48-73eac3106a88.jpg?im_w=720'
      },
      {
        listingId: 24,
        url: 'https://a0.muscache.com/im/pictures/ac85e5ab-12a0-454a-9b3e-7e566e60c8eb.jpg?im_w=720'
      },
      {
        listingId: 24,
        url: 'https://a0.muscache.com/im/pictures/5c89ed5c-69e8-4e0d-9529-cf2bd625996b.jpg?im_w=720'
      },
      {
        listingId: 25,
        url: 'https://a0.muscache.com/im/pictures/23884483/91d67209_original.jpg?im_w=960'
      },
      {
        listingId: 25,
        url: 'https://a0.muscache.com/im/pictures/11774145/eec90e1f_original.jpg?im_w=1200'
      },
      {
        listingId: 25,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-156247/original/426e23ec-dd4c-4071-8469-860fbcd48398.jpeg?im_w=720'
      },
      {
        listingId: 25,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-156247/original/078ebcbf-6260-4c80-9d9a-55f34096ac17.jpeg?im_w=1200'
      },
      {
        listingId: 25,
        url: 'https://a0.muscache.com/im/pictures/4a3d8559-9eb3-4f6e-a425-a3c58b86e665.jpg?im_w=1200'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, {});
  }
};
