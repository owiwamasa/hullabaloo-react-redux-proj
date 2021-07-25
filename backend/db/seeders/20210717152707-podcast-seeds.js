'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Podcasts', [
      {
        name: "Midnight Miracle",
        description: "The Midnight Miracle is a podcast like you've never heard before. The show invites you into the minds of cultural icons Talib Kweli, yasiin bey, and Dave Chappelle. Listen in as notable friends stop by, share old stories, and make new memories.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/midnight-miracle.png',
        totalFollowers: 0,
        totalPlays: 752,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TigerBelly",
        description: "TigerBelly is a no-holds-barred arena for half truths, social no-nos, and animal behavior-featuring comedian Bobby Lee and his best friend Khalyla. Every Thursday. TigerBelly is available on YouTube, iTunes, and most other apps where fine podcasts are found.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/tigerbelly.jpg',
        totalFollowers: 0,
        totalPlays: 891,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Monday Morning Podcast",
        description: "Bill Burr rants about relationship advice, sports and the Illuminati.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/monday-morning.jpg',
        totalFollowers: 0,
        totalPlays: 851,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uncle Joey's Joint",
        description: "Uncle Joey's Joint with: Joey Coco Diaz is a twice-weekly podcast hosted by Comedian Joey Coco Diaz. Joey doesn't hold anything back and lets you know exactly what's on his mind.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/uncle-joey.jpg',
        totalFollowers: 0,
        totalPlays: 860,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "OMG Hi!",
        description: "Grammy-nominated comedian, actor and TV host, George Lopez, has teamed with Bill Burr and Al Madrigal’s All Things Comedy to release his new podcast, OMG Hi! With George Lopez, available now.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/OMGhi_Cover.jpg',
        totalFollowers: 0,
        totalPlays: 858,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Your Mom's House",
        description: "Your mom's house is a hugely successful podcast hosted by married comedians Tom Segura and Christina P. Together they play and breakdown the internets wildest, jaw-dropping clips while always maintaining a juvenile sense of humor.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/ymh.jpg',
        totalFollowers: 0,
        totalPlays: 846,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "You Up",
        description: "Take your daily hit of pod with Nikki Glaser and enjoy what she does best: oversharing about her personal life, getting and giving perspective on dating and sex, dissecting pop culture, trying to understand the news, and making fun of whatever or whoever else deserves it.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/you-up.jpg',
        totalFollowers: 0,
        totalPlays: 713,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Endless Honeymoon",
        description: "Natasha Leggero and Moshe Kasher, married comedians, are using their hilariously hard-won wisdom on relationships and building on their hit Netflix special to help others by offering love advice to callers while simultaneously examining the ups and downs of their own relationship!",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/endless-honeymoon.jpg',
        totalFollowers: 0,
        totalPlays: 554,
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Riffin with Griffin",
        description: "Sage advice, fun guests, and interesting discussions about anything and everything. Just plain Riffin with Actor and Comedian Erik Griffin.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/riffin-with-griffin.jpg',
        totalFollowers: 0,
        totalPlays: 637,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Wild Ride!",
        description: "Comedian and jackass star Steve-O has hilarious and honest conversations with celebrities in his mobile podcast studio.",
        imageUrl: 'https://hullabaloo-mp3s.s3.us-east-2.amazonaws.com/podcast-images/wildride.jpeg',
        totalFollowers: 0,
        totalPlays: 661,
        userId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Podcasts', null, {});
  }
};
