'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@hullabaloo.com',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://static.wikia.nocookie.net/anchorman/images/1/10/Ron_burgundy.jpg/revision/latest?cb=20120329160125'
      },
      {
        email: 'dave@chappelleshow.com',
        username: 'daveChappelle',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://static01.nyt.com/images/2017/04/19/t-magazine/dave-chappelle-slide-Z8K3/dave-chappelle-slide-Z8K3-jumbo.jpg'
      },
      {
        email: 'bobbylee@tigerbelly.com',
        username: 'bobbyLee',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://pbs.twimg.com/profile_images/989701284327444482/SRtL5DTO_400x400.jpg'
      },
      {
        email: 'bill@burr.com',
        username: 'billBurr',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://pyxis.nymag.com/v1/imgs/5f8/875/1c556052cc8e735f3b80b1fcc0721366d6-17-bill-burr-feature.2x.h600.w512.jpg'
      },
      {
        email: 'joey@diaz.com',
        username: 'joeyDiaz',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://m.media-amazon.com/images/M/MV5BMjIyMTM3NjY0OF5BMl5BanBnXkFtZTgwNzM4MzQwMDE@._V1_.jpg'
      },
      {
        email: 'george@lopez.com',
        username: 'georgeLopez',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://www.aceshowbiz.com/images/photo/george_lopez.jpg'
      },
      {
        email: 'christina@ymh.com',
        username: 'christinaP',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://yt3.ggpht.com/ytc/AKedOLT0DT71_novOuk7UGXXq_BSXGjkG6iVzqJ7UdkOSA=s900-c-k-c0x00ffffff-no-rj'
      },
      {
        email: 'nikki@glaser.com',
        username: 'nikkiGlaser',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://images.discovery-prod.axs.com/2021/05/uploadedimage_609185cc19543.jpg'
      },
      {
        email: 'natasha@leggero.com',
        username: 'natashaLeggero',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://i.pinimg.com/236x/13/08/ee/1308eecc763108d07cef0b602ea95fad.jpg'
      },
      {
        email: 'erik@griffin.com',
        username: 'erikGriffin',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://marriedbiography.com/wp-content/uploads/2017/03/Erik-Griffin.jpeg'
      },
      {
        email: 'steve@steveo.com',
        username: 'steve-o',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://www.carolines.com/wp-content/uploads/2019/04/29_Edp-2-e1560358821718.png'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Users', {
    }, {});
  }
};
