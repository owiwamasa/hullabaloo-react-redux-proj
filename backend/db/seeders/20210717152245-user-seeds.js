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
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/Ron_burgundy.jpg'
      },
      {
        email: 'dave@chappelleshow.com',
        username: 'daveChappelle',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/dave-chappelle.jpg'
      },
      {
        email: 'bobbylee@tigerbelly.com',
        username: 'bobbyLee',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/bobby-lee.jpg'
      },
      {
        email: 'bill@burr.com',
        username: 'billBurr',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/bill-burr.jpg'
      },
      {
        email: 'joey@diaz.com',
        username: 'joeyDiaz',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/joey-diaz.jpg'
      },
      {
        email: 'george@lopez.com',
        username: 'georgeLopez',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/george_lopez.jpg'
      },
      {
        email: 'christina@ymh.com',
        username: 'christinaP',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/christina-p.jpg'
      },
      {
        email: 'nikki@glaser.com',
        username: 'nikkiGlaser',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/nikki-glaser.jpg'
      },
      {
        email: 'natasha@leggero.com',
        username: 'natashaLeggero',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/natasha-leggero.jpg'
      },
      {
        email: 'erik@griffin.com',
        username: 'erikGriffin',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/Erik-Griffin.jpeg'
      },
      {
        email: 'steve@steveo.com',
        username: 'steve-o',
        hashedPassword: bcrypt.hashSync('password'),
        profilePic: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/hullabaloo-profile-pics/steve-o.png'
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
