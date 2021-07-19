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
        imageUrl: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_90,w_1400/fl_lossy,pg_1/bklykxhl9dqgymq0daa9/midnight-miracle',
        totalFollowers: 0,
        totalPlays: 752,
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TigerBelly",
        description: "TigerBelly is a no-holds-barred arena for half truths, social no-nos, and animal behavior-featuring comedian Bobby Lee and his best friend Khalyla. Every Thursday. TigerBelly is available on YouTube, iTunes, and most other apps where fine podcasts are found.",
        imageUrl: 'https://stitcher-classic.imgix.net/feedimagesplain600/74205.jpg?w=600&h=600',
        totalFollowers: 0,
        totalPlays: 891,
        userId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Monday Morning Podcast",
        description: "Bill Burr rants about relationship advice, sports and the Illuminati.",
        imageUrl: 'https://www.omnycontent.com/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/caa92bb1-73cc-4abc-8b6d-aca8005d0d23/1008badf-3edf-4512-afb5-ad4a014af323/image.jpg?t=1623960312&size=Large',
        totalFollowers: 0,
        totalPlays: 851,
        userId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Uncle Joey's Joint",
        description: "Uncle Joey's Joint with: Joey Coco Diaz is a twice-weekly podcast hosted by Comedian Joey Coco Diaz. Joey doesn't hold anything back and lets you know exactly what's on his mind.",
        imageUrl: 'https://assets.libsyn.com/secure/content/85591346?width=300&height=300',
        totalFollowers: 0,
        totalPlays: 860,
        userId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "OMG Hi!",
        description: "Grammy-nominated comedian, actor and TV host, George Lopez, has teamed with Bill Burr and Al Madrigal’s All Things Comedy to release his new podcast, OMG Hi! With George Lopez, available now.",
        imageUrl: 'https://allthingscomedy.com/images/_smallest/OMGhi_Cover.jpg',
        totalFollowers: 0,
        totalPlays: 858,
        userId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Your Mom's House",
        description: "Your mom's house is a hugely successful podcast hosted by married comedians Tom Segura and Christina P. Together they play and breakdown the internets wildest, jaw-dropping clips while always maintaining a juvenile sense of humor.",
        imageUrl: 'https://yt3.ggpht.com/ytc/AKedOLRD1Bv5-ltXEq3NGbmj_XRKdHnMIMnWPUoQEhuJ=s900-c-k-c0x00ffffff-no-rj',
        totalFollowers: 0,
        totalPlays: 846,
        userId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "You Up",
        description: "Take your daily hit of pod with Nikki Glaser and enjoy what she does best: oversharing about her personal life, getting and giving perspective on dating and sex, dissecting pop culture, trying to understand the news, and making fun of whatever or whoever else deserves it.",
        imageUrl: 'https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/50/a1/26/50a126c5-3a50-fd40-64ae-cf7f440f283d/mza_4913328773872308987.jpg/1200x1200bb.jpg',
        totalFollowers: 0,
        totalPlays: 713,
        userId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Endless Honeymoon",
        description: "Natasha Leggero and Moshe Kasher, married comedians, are using their hilariously hard-won wisdom on relationships and building on their hit Netflix special to help others by offering love advice to callers while simultaneously examining the ups and downs of their own relationship!",
        imageUrl: 'http://www.natashaleggero.com/wp-content/uploads/2021/06/450302.jpg',
        totalFollowers: 0,
        totalPlays: 554,
        userId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Riffin with Griffin",
        description: "Sage advice, fun guests, and interesting discussions about anything and everything. Just plain Riffin with Actor and Comedian Erik Griffin.",
        imageUrl: 'https://allthingscomedy.com/images/_larger/riffin-with-griffin.jpg',
        totalFollowers: 0,
        totalPlays: 637,
        userId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Wild Ride!",
        description: "Comedian and jackass star Steve-O has hilarious and honest conversations with celebrities in his mobile podcast studio.",
        imageUrl: 'https://i.scdn.co/image/87a569aeb928edeebe1d044cae5b5d4962505f11',
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
