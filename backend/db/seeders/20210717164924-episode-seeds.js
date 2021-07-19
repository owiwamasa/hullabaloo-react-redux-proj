'use strict';
const ep1 = require('../../mp3-files/midnight-miracle-mp3-files/ep1.mp3')
const tigerbelly = require('../../mp3-files/tigerbelly-mp3-files/tigerbelly.mp3')
const billburr = require('../../mp3-files/monday-morning-podcast-mp3-files/billburr.mp3')
const unclejoey = require('../../mp3-files/uncle-joeys-join-mp3-files/unclejoey.mp3')
const georgelopez = require('../../mp3-files/OMG-hi-mp3-files/georgelopez.mp3')
const ymh = require('../../mp3-files/ymh-mp3-files/ymh.mp3')
const youup = require('../../mp3-files/you-up-mp3-files/youup.mp3')
const honeymoon = require('../../mp3-files/endless-honeymoon-mp3-files/honeymoon.mp3')
const riffin = require('../../mp3-files/riffin-w-griffin-mp3-files/riffin.mp3')
const wildride = require('../../mp3-files/wild-ride-mp3-files/wildride.mp3')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Episodes', [
      {
        title: 'The Symphony',
        description: '“Just keep going.”—Dave Chappelle. Featuring, in order of appearance: Kevin Hart, Questlove, Mo Amer, Bill Burr, Pras, Michelle Wolf, and Jon Stewart',
        imageUrl: 'https://www.talibkweli.com/wp-content/uploads/2021/07/Screen-Shot-2021-07-06-at-2.51.28-PM.png',
        mp3: ep1,
        totalPlays: 124,
        releaseDate: new Date(2021, 7, 6),
        podcastId: 1,
        userId: 2
      },
      {
        title: "LL's Check",
        description: '“I am terrified at the moral apathy, the death of the heart, which is happening in my country.”—James Baldwin. Featuring, in order of appearance: Questlove and Radio Rahim',
        imageUrl: 'https://format-com-cld-res.cloudinary.com/image/private/s--x5LE1zih--/c_limit,g_center,h_65535,w_960/fl_keep_iptc.progressive.apng/v1/5f7521a979f98778690eb004d249f88e/Frame_14.png',
        mp3: ep1,
        totalPlays: 148,
        releaseDate: new Date(2021, 6, 22),
        podcastId: 1,
        userId: 2
      },
      {
        title: 'No Snakes',
        description: '“I wish you could know what it means to be me.” —Nina Simone. Featuring, in order of appearance: Mathieu Bitton, Radio Rahim, Mo Amer, Michael Che, Michelle Wolf, Cipha Sounds',
        imageUrl: 'https://www.orcasound.com/wp-content/uploads/2021/06/image3.jpg',
        mp3: ep1,
        totalPlays: 198,
        releaseDate: new Date(2021, 5, 25),
        podcastId: 1,
        userId: 2
      },
      {
        title: 'Sada Baby and the Legend of Goan Git',
        description: '"Imma feel betrayed if I don\'t hear from you." —Sada Baby. Featuring, in order of appearance: Sada Baby, David Banner, Michelle Wolf, Radio Rahim, Brother Ali, Donnell Rawlings, Mo Amer ',
        imageUrl: 'https://www.orcasound.com/wp-content/uploads/2021/06/image3.jpg',
        mp3: ep1,
        totalPlays: 158,
        releaseDate: new Date(2021, 5, 25),
        podcastId: 1,
        userId: 2
      },
      {
        title: 'How to Inspire',
        description: '“How do you keep a despondent person alive?”—Dave Chappelle. Hosted by: Talib Kweli, yasiin bey, and Dave Chappelle. Featuring, in order of appearance: Radio Rahim, Mo Amer, Chris Rock, Donnell Rawlings, Jarobi White, and Questlove',
        imageUrl: 'https://i.ytimg.com/vi/UiG8lmWvh7I/maxresdefault.jpg',
        mp3: ep1,
        totalPlays: 124,
        releaseDate: new Date(2021, 5, 11),
        podcastId: 1,
        userId: 2
      },
      {
        title: 'Tigerbelly 300',
        description: 'David Choe, Steven Yeun, & The Lord of the Bobby Lee Rings',
        imageUrl: 'https://i.ytimg.com/vi/hicb0ZqmzzM/mqdefault.jpg',
        mp3: tigerbelly,
        totalPlays: 201,
        releaseDate: new Date(2021, 7, 1),
        podcastId: 2,
        userId: 3
      },
      {
        title: 'Tigerbelly 291',
        description: 'George Lopez Has a Haunting',
        imageUrl: 'https://i.ytimg.com/vi/dMSEHGKDUqk/sddefault.jpg',
        mp3: tigerbelly,
        totalPlays: 189,
        releaseDate: new Date(2021, 4, 8),
        podcastId: 2,
        userId: 3
      },
      {
        title: 'Tigerbelly 289',
        description: 'Tom Segura & The Hook Up',
        imageUrl: 'https://i.ytimg.com/vi/tEdRBA588V8/maxresdefault.jpg',
        mp3: tigerbelly,
        totalPlays: 179,
        releaseDate: new Date(2021, 3, 25),
        podcastId: 2,
        userId: 3
      },
      {
        title: 'Tigerbelly 286',
        description: 'Bert Kreischer Fights 5 Gracies',
        imageUrl: 'https://i.ytimg.com/vi/qYrEgnHegd0/maxresdefault.jpg',
        mp3: tigerbelly,
        totalPlays: 158,
        releaseDate: new Date(2021, 3, 4),
        podcastId: 2,
        userId: 3
      },
      {
        title: 'Tigerbelly 267',
        description: 'Donnell Rawlings & The White Korean',
        imageUrl: 'https://i.ytimg.com/vi/dVwpAVFDZw0/maxresdefault.jpg',
        mp3: tigerbelly,
        totalPlays: 164,
        releaseDate: new Date(2020, 10, 15),
        podcastId: 2,
        userId: 3
      },
      {
        title: 'Thursday Afternoon Monday Morning Podcast 7-15-21',
        description: 'Bill rambles about binging, treasonous news outlets, and feral cats.',
        imageUrl: 'https://www.omnycontent.com/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/caa92bb1-73cc-4abc-8b6d-aca8005d0d23/1008badf-3edf-4512-afb5-ad4a014af323/image.jpg?t=1623960312&size=Large',
        mp3: billburr,
        totalPlays: 134,
        releaseDate: new Date(2021, 7, 15),
        podcastId: 3,
        userId: 4
      },
      {
        title: 'Monday Morning Podcast 7-12-21',
        description: 'Bill rambles about the Mediterranean, bears, and a dream business.',
        imageUrl: 'https://www.omnycontent.com/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/caa92bb1-73cc-4abc-8b6d-aca8005d0d23/1008badf-3edf-4512-afb5-ad4a014af323/image.jpg?t=1623960312&size=Large',
        mp3: billburr,
        totalPlays: 159,
        releaseDate: new Date(2021, 7, 12),
        podcastId: 3,
        userId: 4
      },
      {
        title: 'Monday Morning Podcast 7-5-21',
        description: "Bill rambles about Vegas, idiots who lack talent, and ‘things that needed to be said’.",
        imageUrl: 'https://www.omnycontent.com/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/caa92bb1-73cc-4abc-8b6d-aca8005d0d23/1008badf-3edf-4512-afb5-ad4a014af323/image.jpg?t=1623960312&size=Large',
        mp3: billburr,
        totalPlays: 191,
        releaseDate: new Date(2021, 7, 5),
        podcastId: 3,
        userId: 4
      },
      {
        title: 'Thursday Afternoon Monday Morning Podcast 7-1-21',
        description: 'Bill rambles about zen, the housing market, and Van Halen.',
        imageUrl: 'https://www.omnycontent.com/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/caa92bb1-73cc-4abc-8b6d-aca8005d0d23/1008badf-3edf-4512-afb5-ad4a014af323/image.jpg?t=1623960312&size=Large',
        mp3: billburr,
        totalPlays: 201,
        releaseDate: new Date(2021, 7, 1),
        podcastId: 3,
        userId: 4
      },
      {
        title: 'Monday Morning Podcast 6-28-21',
        description: 'Bill rambles about being a fatty, Formula 1, and abuse of power.',
        imageUrl: 'https://www.omnycontent.com/d/clips/885ace83-027a-47ad-ad67-aca7002f1df8/caa92bb1-73cc-4abc-8b6d-aca8005d0d23/1008badf-3edf-4512-afb5-ad4a014af323/image.jpg?t=1623960312&size=Large',
        mp3: billburr,
        totalPlays: 166,
        releaseDate: new Date(2021, 6, 28),
        podcastId: 3,
        userId: 4
      },
      {
        title: '#054 | BERT KREISCHER |',
        description: 'Welcome to Uncle Joey\'s Joint..... It\'s Wednesday, April 7th..... Today, we talked to The Machine himself, BERT KREISCHER.....',
        imageUrl: 'https://i2.wp.com/ytimg.googleusercontent.com/vi/H-q7rFlnrsA/hqdefault.jpg',
        mp3: unclejoey,
        totalPlays: 144,
        releaseDate: new Date(2021, 4, 7),
        podcastId: 4,
        userId: 5
      },
      {
        title: '#053 | EDDIE TRUNK |',
        description: 'Welcome to Uncle Joey\'s Joint..... Monday, April 5th..... Today, we talked to the Great EDDIE TRUNK.....',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSMDPtdOTJ7C2Fjz9qqNj9cL2zy0_ti_7SdA&usqp=CAU',
        mp3: unclejoey,
        totalPlays: 159,
        releaseDate: new Date(2021, 4, 5),
        podcastId: 4,
        userId: 5
      },
      {
        title: '#052 | MICHAEL RAPAPORT |',
        description: 'Welcome to Uncle Joey\'s Joint.....  Wednesday, March 31st..... Today, we talked to the our friend MICHAEL RAPAPORT.....',
        imageUrl: 'https://i2.wp.com/ytimg.googleusercontent.com/vi/CJuudb147Wg/hqdefault.jpg',
        mp3: unclejoey,
        totalPlays: 198,
        releaseDate: new Date(2021, 3, 31),
        podcastId: 4,
        userId: 5
      },
      {
        title: '#051 | BILL BURR |',
        description: 'Welcome to Uncle Joey\'s Joint..... Monday, March 29th..... Today, we talked to the Great BILL BURR.....',
        imageUrl: 'https://audalog.com/wp-content/uploads/UJJ_BillBurr-e1617015964710.jpg',
        mp3: unclejoey,
        totalPlays: 189,
        releaseDate: new Date(2021, 3, 29),
        podcastId: 4,
        userId: 5
      },
      {
        title: '#047 | THEO VON |',
        description: 'Welcome to Uncle Joey\'s Joint..... Monday, March 15th..... Today, we talk to our friend THEO VON.....',
        imageUrl: 'https://audalog.com/wp-content/uploads/ujj_47-300x169.jpg',
        mp3: unclejoey,
        totalPlays: 170,
        releaseDate: new Date(2021, 3, 15),
        podcastId: 4,
        userId: 5
      },
      {
        title: 'Ep 18 Gil Carrillo & Ben Bray Hernandez',
        description: 'George is joined by podcast favorite Gil Carrillo and stuntman/stunt coordinator/director Ben Bray Hernandez (EL CHICANO, 911 LONE STAR, QUEEN OF THE SOUTH, many more), talking everything from racist tortilla-throwing, to Ben’s surprising path to the director’s chair, to more of Gil’s patented law enforcement stories. ',
        imageUrl: 'https://i.ytimg.com/vi/Ts-iUfSnfcg/maxresdefault.jpg',
        mp3: georgelopez,
        totalPlays: 172,
        releaseDate: new Date(2021, 6, 28),
        podcastId: 5,
        userId: 6
      },
      {
        title: 'Ep 17 Gil Carrillo & Leo Gonzalez',
        description: 'George is joined by guest Leo Gonzalez, a TikTokker known for his viral impressions of George, as well as podcast favorite Gil Carrillo (Retired Detective -- now on social media! @RealGilCarrillo). They talk about love, the madness of modern social media, serial killers, and more! ',
        imageUrl: 'https://i.ytimg.com/vi/w8C723OkYRM/mqdefault.jpg',
        mp3: georgelopez,
        totalPlays: 144,
        releaseDate: new Date(2021, 6, 21),
        podcastId: 5,
        userId: 6
      },
      {
        title: 'Ep16 Andy Vargas & Luke Youngblom',
        description: 'George is joined by guests Andy Vargas (lead singer, Carlos Santana’s band), and Luke Youngblod (Head of Music, 800lb Gorilla), as they talk music and announce the formation of their brand new record label, @MalasPalabras. Follow for updates -- more to come!',
        imageUrl: 'https://i.ytimg.com/vi/3iEqbEJTfY0/maxresdefault.jpg',
        mp3: georgelopez,
        totalPlays: 155,
        releaseDate: new Date(2021, 6, 14),
        podcastId: 5,
        userId: 6
      },
      {
        title: 'Ep15 Billy Boyd & Dominic Monaghan',
        description: 'On this week\'s OMG Hi, George is joined by Dominic Monaghan and Billy Boyd, known worldwide for their star turns as "Merry" and "Pippin" in Peter Jackson\'s Lord of the Rings trilogy. Podcast producer Grant Lease also joins. Together they talk beer, the surprises of worldwide fame, comedy craft, Lord of the Rings, and Dom and Billy\'s new podcast, The Friendship Onion!',
        imageUrl: 'https://i.ytimg.com/vi/OdIpU8pbYMI/maxresdefault.jpg',
        mp3: georgelopez,
        totalPlays: 188,
        releaseDate: new Date(2021, 6, 7),
        podcastId: 5,
        userId: 6
      },
      {
        title: 'Ep14 Gil Carrillo & B Real from Cypress Hill',
        description: 'On this week\'s OMG Hi, George is joined by the iconic rapper and ganjapreneur B-Real (Cypress Hill, Dr. Greenthumb podcast), and welcomes back to the studio Retired Lieutenant Gil Carrillo, one of two leads on the case of the Night Stalker serial killer. Together they talk rap, California upbringings, the chicano lifestyle, cannabis culture, and more!',
        imageUrl: 'https://i.ytimg.com/vi/0-uZ4s_huKc/maxresdefault.jpg',
        mp3: georgelopez,
        totalPlays: 199,
        releaseDate: new Date(2021, 5, 31),
        podcastId: 5,
        userId: 6
      },
      {
        title: 'Ep.612 w/ Johnny Pemberton',
        description: 'Johnny Pemberton is an actor, comedian, and the host of the "Live to Tape" podcast. He joins Tom Segura to discuss GHB, car accidents, big fakers, Armie Hammer, Matt Lauer, and Enny\'s brown schedule. They watch some "Horrible or Hilarious" videos,  a cool guy explaining why women like older men, a guy looking for single moms to hit him up, a dude who insists he isn\'t a cuck, a cool swinger couple, and a batch of Christina\'s TikTok curations.',
        imageUrl: 'https://i.ytimg.com/vi/gB1LQBp8nLA/maxresdefault.jpg',
        mp3: ymh,
        totalPlays: 133,
        releaseDate: new Date(2021, 7, 14),
        podcastId: 6,
        userId: 7
      },
      {
        title: 'Ep.611 w/ Russell Peters',
        description: 'HIGH AND TIGHT!! Russell Peters joins Tom Segura for this week\'s YMH. They discuss boxing, hip-hop, what it\'s like hanging out with the king of Jordan, getting intimate on flights, and much more. They watch videos of a dude announcing his mayoral run on the way to jail, unintelligible drunk Southern guys, a man flipping out at a block party, Shaggy 2 Dope of Insane Clown Posse breaking his arm, a Russian back massage, and Christina P\'s TikTok curations.',
        imageUrl: 'https://i.ytimg.com/vi/EWpDnp9nyUw/maxresdefault.jpg',
        mp3: ymh,
        totalPlays: 200,
        releaseDate: new Date(2021, 7, 7),
        podcastId: 6,
        userId: 7
      },
      {
        title: 'Ep.610 w/ Ian Bagg',
        description: 'LIVE LIFE 365!! Today on Your Mom\'s House, Christina P joins the show from home because of her ankle injury. Her and Tom Segura talk about how she injured her ankle, and give an update on how recovery is going. After that, comedian Ian Bagg stops by to talk about Canadian tendencies, doing a gig after getting injured and hotel shower doors.',
        imageUrl: 'https://i.ytimg.com/vi/abjRQeYmHCo/maxresdefault.jpg',
        mp3: ymh,
        totalPlays: 177,
        releaseDate: new Date(2021, 6, 30),
        podcastId: 6,
        userId: 7
      },
      {
        title: 'Ep.609 w/ Nikki Glaser & Andrew Collin',
        description: 'Nikki Glaser and Andrew Collin are comedians and the hosts of "The Nikki Glaser Podcast." They join the Main Mommies to discuss living together, cheating in school, writing embarrassing poetry, and more! Todd and Crystal introduce them to YMH All-Stars The King, Cobra Tate, and our video message cool guys. They also get brought up to speed on G and watch CP\'s TikTok curations.',
        imageUrl: 'https://i.ytimg.com/vi/wykpq58ustM/maxresdefault.jpg',
        mp3: ymh,
        totalPlays: 154,
        releaseDate: new Date(2021, 6, 23),
        podcastId: 6,
        userId: 7
      },
      {
        title: 'Ep.607 w/ Nate Bargatze',
        description: 'Nate Bargatze is a comedian and the host of the "Nateland" podcast. He joins the Main Mommies to discuss growing up with a magician father, how he met his wife at Applebee\'s, Nashville hot chicken, and filming his Netflix special "The Greatest Average American." Tom and Tina show him videos of a Russian guy fighting a bear, a truck almost driving off a cliff, a guy falling off a roof, and this week\'s TikTok curations.',
        imageUrl: 'https://i.ytimg.com/vi/xNyZ5ulyQfg/sddefault.jpg',
        mp3: ymh,
        totalPlays: 182,
        releaseDate: new Date(2021, 6, 9),
        podcastId: 6,
        userId: 7
      },
      {
        title: 'Nikki\'s DIY “Bachelor” Spin-Off - You Up w/ Nikki Glaser',
        description: 'Nikki, Andrew Collin and Anya Marina chat about quitting coffee, infuriating first names and who they’re named after.',
        imageUrl: 'https://i.ytimg.com/vi/lW_qOMZQWlg/maxresdefault.jpg',
        mp3: youup,
        totalPlays: 159,
        releaseDate: new Date(2020, 6, 25),
        podcastId: 7,
        userId: 8
      },
      {
        title: 'Does Height Matter in a Relationship? (feat. Judah Friedlander)',
        description: 'Nikki, Judah Friedlander and Ian Fidance chat about getting your life organized, height differences in relationships and dating deal breakers.',
        imageUrl: 'https://i.ytimg.com/vi/rHxs3xoPSqo/maxresdefault.jpg',
        mp3: youup,
        totalPlays: 153,
        releaseDate: new Date(2020, 6, 9),
        podcastId: 7,
        userId: 8
      },
      {
        title: 'Would You Swipe Right on Yourself? (feat. Josh Potter)',
        description: 'Comedian Josh Potter joins Nikki and Anya Marina to chat about getting dissed by smart people, making the first move and the easiest way to tell someone you’re into them. ',
        imageUrl: 'https://i.ytimg.com/vi/ZntnZxRwNuo/maxresdefault.jpg',
        mp3: youup,
        totalPlays: 122,
        releaseDate: new Date(2020, 5, 26),
        podcastId: 7,
        userId: 8
      },
      {
        title: 'How to Combat Flight Anxiety (feat. H. Alan Scott)',
        description: 'Writer and comedian H. Alan Scott joins Nikki and Andrew Collin to chat about surviving cancer, converting to Judaism and the odds of dying in a plane crash.',
        imageUrl: 'https://i.ytimg.com/vi/8GXTp3Bwkno/maxresdefault.jpg',
        mp3: youup,
        totalPlays: 161,
        releaseDate: new Date(2020, 5, 19),
        podcastId: 7,
        userId: 8
      },
      {
        title: 'When Your Pitch Bombs with ScarJo (feat. Steven Castillo & Rosebud Baker)',
        description: 'Stand-up comic Rosebud Baker and “SNL” writer Steven Castillo join Nikki and Anya Marina to talk about pitching sketches to celebrities and swap awkward massage stories.',
        imageUrl: 'https://i.ytimg.com/vi/l6KGBiydKw8/maxresdefault.jpg',
        mp3: youup,
        totalPlays: 118,
        releaseDate: new Date(2020, 5, 12),
        podcastId: 7,
        userId: 8
      },
      {
        title: '#116--"Good Little Piggy"',
        description: 'This week Moshe and Natasha get into some feedback from last week\'s episode, give advice to a caller unsure how to handle finances while her husband stays home, and catch up with Jessica and Vanessa from the live show!',
        imageUrl: 'https://i.ytimg.com/vi/7rQu4oDoC78/maxresdefault.jpg',
        mp3: honeymoon,
        totalPlays: 110,
        releaseDate: new Date(2021, 7, 12),
        podcastId: 8,
        userId: 9
      },
      {
        title: '#113--"Chosen Family" with Michelle Buteau',
        description: 'This week Moshe and Natasha are joined by Michelle Buteau to discuss surviving vs. thriving, close friends not believing in the Covid vaccine, celebrating the little things with champagne at 4:30. They give advice to one caller with a dog walker dilemma and another whose boyfriend is about to meet her crazy family. ',
        imageUrl: 'https://i.ytimg.com/vi/qqX_Zhe46g8/maxresdefault.jpg',
        mp3: honeymoon,
        totalPlays: 108,
        releaseDate: new Date(2021, 7, 14),
        podcastId: 8,
        userId: 9
      },
      {
        title: '#112–“All One” with Raghu Markus',
        description: 'This week we\'re getting spiritual with Raghu Markus! They discuss entry-level mindfulness, Raghu\'s experience at a John Coltrane concert, and how the world is forever changed by Covid. They give advice to one caller who hasn’t told her religious friends about her recent spiritual evolution and another trying to talk to kids about death and beyond. ',
        imageUrl: 'https://i.ytimg.com/vi/CViW1fQyoKo/maxresdefault.jpg',
        mp3: honeymoon,
        totalPlays: 122,
        releaseDate: new Date(2021, 6, 7),
        podcastId: 8,
        userId: 9
      },
      {
        title: '#109--“Midday Milk”',
        description: 'This week we are hot off our live show to discuss wisdom from our listeners in the post-show zoom, the sacrifice of motherhood, and jalapeno hummus. Then Moshe and Natasha give advice to a caller contemplating having a baby with a partner whose sleep medication would prevent him from helping at night and react to a few secrets! ',
        imageUrl: 'https://i.ytimg.com/vi/miAnzjc_DMc/maxresdefault.jpg',
        mp3: honeymoon,
        totalPlays: 99,
        releaseDate: new Date(2021, 5, 17),
        podcastId: 8,
        userId: 9
      },
      {
        title: '#108--"Adult Energy"',
        description: 'This week Moshe and Natasha discuss their influencer neighbor\'s dog birthday party, then the show takes a turn for the political with a firsthand account of the current situation in Colombia. They give advice to one caller whose boyfriend and best friend don\'t get along, and react to a few secrets! ',
        imageUrl: 'https://i.ytimg.com/vi/8m-LbiivcAQ/maxresdefault.jpg',
        mp3: honeymoon,
        totalPlays: 115,
        releaseDate: new Date(2021, 5, 10),
        podcastId: 8,
        userId: 9
      },
      {
        title: 'Episode 142',
        description: 'I discuss washing yourself properly, Tic Tok thirst traps, Cheating in Warzone, Gossip Girl is Back along with a review of the new MCU movie, Black Widow. Thanks for watching and listening, please share subscribe comment and all that good stuff. ',
        imageUrl: 'https://i.ytimg.com/vi/u7H7EQUF9vs/mqdefault.jpg',
        mp3: riffin,
        totalPlays: 121,
        releaseDate: new Date(2021, 7, 12),
        podcastId: 9,
        userId: 10
      },
      {
        title: 'Episode 140 #FreeBritney & Real World Advice: Riffin With Griffin',
        description: 'This weekI talk about my parents meeting Rachel\'s parent\'s and  our car getting broken into. I give my thoughts on the Britney Spears situation along with a fan favorite segment, real world advice from a grown ass man. Thank you for watching and subscribing, sharing and commenting.',
        imageUrl: 'https://i.ytimg.com/vi/Zq7wRPkrC68/maxresdefault.jpg',
        mp3: riffin,
        totalPlays: 115,
        releaseDate: new Date(2021, 6, 28),
        podcastId: 9,
        userId: 10
      },
      {
        title: 'Episode 133 Getting Wiggy With It',
        description: 'My first episode with my new side kick, editor producer! Nate "Wiggy" Wiegman. The one man show is now a two man show, lets see if the show can grow and improve. I encourage your feed back and ideas! This episode I get into getting back to comedy in LA. Fat White Girl searches, and much more! ',
        imageUrl: 'https://img.particlenews.com/img/id/0w8oiO_0Y0UELTV00?type=thumbnail_512x288',
        mp3: riffin,
        totalPlays: 123,
        releaseDate: new Date(2021, 5, 10),
        podcastId: 9,
        userId: 10
      },
      {
        title: 'Episode 113 Culture Culture, Moving Day and More',
        description: 'I recap my move and discuss  my terrible thoughts.  I go into Elliot Page\'s announcement of being transgender. I go into Lizzo doing a juice cleanse and making all the idiots go crazy with Diet Culture talk. Most of allI I was having a great time with the live chat. If you think I should keep doing live episodes on Sundays, let me know in the comments. Thanks again for being here! ',
        imageUrl: 'https://img.particlenews.com/img/id/37vweH_0ZLXfZhq00?type=thumbnail_512x288',
        mp3: riffin,
        totalPlays: 133,
        releaseDate: new Date(2020, 12, 21),
        podcastId: 9,
        userId: 10
      },
      {
        title: 'Episode 96 Tongue Scraper, Crazy Chillis, Amazon & Advice',
        description: 'Back again with news and updates of the week and my new favorite thing, Real World Advice From a Grown Ass Man. I had an issue with a product I bought at Amazon. There was some craziness at Chillis about wearing masks, and I have a sweet little update on my relationship.',
        imageUrl: 'https://i.ytimg.com/vi/0QTe6OjzdDY/maxresdefault.jpg',
        mp3: riffin,
        totalPlays: 145,
        releaseDate: new Date(2020, 8, 18),
        podcastId: 9,
        userId: 10
      },
      {
        title: '#65 - Danny Trejo',
        description: 'Danny Trejo is the realest man in show business. This was truly an honor.',
        imageUrl: 'https://s3.amazonaws.com/assets.pippa.io/shows/5e6693e53106aacd129f04ce/1625726411561-f07d657c33987056b8f1d3de98197cb0.jpeg',
        mp3: wildride,
        totalPlays: 111,
        releaseDate: new Date(2021, 7, 15),
        podcastId: 10,
        userId: 11
      },
      {
        title: '#64 - Steve WillDoIt',
        description: 'Steve WillDoIt, of the Nelk Boys, is among our most-requested guests.',
        imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGR0bGRgYGCAfHRsaHRgdGx0fHR8dHSggGholHyAYITEhJSkrLi4uHiAzODMsNygtLisBCgoKDg0OGxAQGy0lICUtLS8tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAGAwQFBwABAgj/xABLEAABAwIEAwUFBQMHCwUBAQABAgMRAAQFEiExBkFRBxMiYXEygZGhsRRCUsHRI3LwFTVic4KS4RYXJTM0Q1NUssLxJGODorPDCP/EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAA4EQABAwIEAwYGAQIGAwAAAAABAAIRAyEEEjFBUWFxBRMiMoGRFKGxwdHwQnLxI1JiorLSFTNT/9oADAMBAAIRAxEAPwCq8M4Qv7hAcYtHnGzssIMH0PP3Utd8D4i0guLs3wlIknITA5kxsPOvRHCd+U4bh5QQEm2bB/eSgA/OanrC/UpYBOhnlQ5xMIgwkSq07B+HkNWa751CSt5ZS2SASG0nKYnaVZp65RQd2v8ACK04rltWFKFwgOJQ0ifEPCuAkdQFH96r0XbtsNt27QCUNJASOgA09/P308bCCkPwO8QhSArmEkpJHoSlB9wqB1yFMtgV5a/zeYp/yL/9yuUcAYmZ/wDQ3GhjVsj4TuPMV6cXiSwCZ2HQUvcXi05RO6QT61WcRKvIZXlbEODMQYbLjtm+hCdVKKDAHUxsPM0s1wDiagFCxuIOolBHyOtepbC8UteUmRB5VzcXqgpQnY6VeYRKrIZheTsY4YvLVIXcWzrSSYClIITPSdp8qh69R9pDneYRe5tYQkiRsQtJHvmvN/DiQbu3BAILzYIOxGcVYMiVREGFIW/A2JOJC02T5SoSD3ZEjrrrFY9wLiSBJsLn3NKP0Br1Ne3ykrUAdB+lIfyqocxQmoAYRCmSJXkW6tVtqyOIUhQ+6tJSfgda1a2y3FpQ2hS1qMJSkEqJ6ADUmvWeJJtrtHdXbCHEH8Q9nlIO6T5pM0G8L9nX8n4uh9k95arbcyKOqmlkeyTzBGaFeoPUk1wOipzS3VU8Oz3FP+Rf/uVy9wDiaRJsLj3Nk/ISa9NpxVfM/Ida7Ria+vyoO8CLunLyJd2bjSsjra21fhWkpPwImn+D8N3d0FG3tnXQnQlCCQD0J2nyr1NiTNteNlm7ZQ4g/iGoO0pO6T5gg034cwIYZai3bXmSHVqSojXKokgK6qAgTzidNgWYRKEtIMLziez/ABQCfsNxp0QT8hvSNjwXiDqc7dm+pMkT3ZAkGDvvBkeoNepEYgskCdyOnWnOJXSkKABiQfjNTOIlTIZheV18AYmnU2Nx7myfpULf4a8wQl5lxonYOIKSfcoCvXKcSV1+VZcvtuoLb7aHG1bpUkKB9x0NVnCssK8eAToKJG+AcUUARY3EHqgj5HUVamL9l7bN9Z3tiCWRdMl1nfux3qfEnnkHMHbfbazLvEVJWpIOxgDToDVlwAlUGkmF5h/zeYp/yL/9yuHuA8TQkqVY3EASfATp6DWvToxNcan6UpbYiorSCdCaoVAi7sqk+HexR24tmn3LtDJdQFhHdlRCVCUyc6dYI0jSlcb7DnmmVuM3aHlISVd2WyjMAJIBzq1jafiKufFlQtIA0yx0gTSNuuc/9Ur6VM/ihVk8OZeP6ytVlGgXoTgG6K8DtylRBZdWgnc6rUQPgpNTmD3qw82or8ObxekR089v4Ib2KvheGXrO5bdS7H7yQP8A+ZozJb7sKygaA76weitJMcwa8/2viqmGxFNzZIMW4kH7yupgw11EtI3+oSN/euLUtYURmOm2nQDQ8hT62xBRtn05vFoRt+IJPpy+NQCWlLlKZJCSuBtlSNffER686US9KZA8pTtyMD6zI28qwjFYmnDy4kOzDlpE+hM9VudQpu8AixHDqPcBOGFOFSUhxR8SQQY2Jjp9I+tTXFrxS6gBeUd35fiA35b+VRuEBRu0JJB8QKo8gT7x6damuKwCsAkjMmJAmNzWhuIe3AVKpcfM2DvHh/JWWoB8SwEDRIcIOFSySufBt75n15U24iedDy8igBm5/ujbQ+XxpTgxRLypIJykz7/j05n3VHcQKIunyDABE+mVIn+PKmmvUGBY4m+cj/krbTHxbmwPL+PykOKVLOC3+cycqYMRpKPjXn/hr/bLb+vb/wD0TXojHW13OE3qGkKcWoBKUoEkwU7AbmqWwDgvEUXVupVjchKXmySWlQAFgknTauvgnPdh2F+sXXNxIiq60XV8cT50vLWlUCAI5SBz00FNMOw8uocWq4UyECSVAFIGpObPrA05iNaV4skXCjOkDT+zE7a1ljh/f2N4wzAU6yttM6JClJUkbDQSZMAn1rk0qj3doGm4y2XWi3lK6D/Dgw4a2uo24ZfbWW3HCHEqkaSkpjcbTInT0ol4RxJSitpZkgZh1jnz21Ee+mHEmRK2k5wotpAVPPKBvrofjvW+FE5X8sycuc7aAgdAOo689TQ0qzmdo901xInTlF/b8K6gD8JmcLxwjf8AfdRTz68ygFkeI6ZfPr8PjU9Y4K27bd7JQ6cx7xJjUExI9kj1FQWIlBUVAA75jMEwSN+g9af3N9+yyK8KfwhUaGdRtOszWaj2k+i9zntc4XEWsZAEzt6cOKOvRFRrA2xP4UeX3IBzkSRrpy1OkbeXnyohxV5arBlUwo5dfcetQOC4QLlzIt0pSkSUAaqHMBU6cgdJqQGMKurEOhosxcKbS2YzJDay2ArWJ01Gw21iTtworDC1Kr3z4THpOv79kvElnfspgaEbcdOqaYW4vvm/2ilDOAQY8vL6VMcZulKm/FlGVX1TGp2+NQeGLV36RoR3idus6+o+VEHF+uQTHhUQYnUFO8a+8UmniKnwFV+YmHNjjBLPyVdVoGKpiNj9CorCbdbygjv1J0OyQdognMPXSm1+q4aIHeIWhScyHE7LHwIB/wAKkODlAu6xmAOvkdT+XX11pC4sjaWduwtYUtC1KUZ2C1rXlHkJyj92n0nk4E1HuIIJv62HPWPsgfIxYYBItb0Tzh68dQ8EuEFK9NogxIPOZ1FMsdU6Lh3KvTMIGk+wOUajnJNasXc7zKpJJcECNI5menhrriGBdmdATE9Tpy58v4msRxWI+CDnG+ePTKSmtptGI0/ibdCt2tmiFKeunEExGWIiB/RMa9KVdtra3ZXdG7fLbEKVoFbK6FEnWoZ+2UglIStaRI8KCrQnnCYmP156OsWsluYPeNNNOlamwEt5FZidNEpgT7hWvszEVqhY17ZbB8WUid9dJPzhIxbGNaXNfedNvbVSPFFyVqt3W1FIU3mEjdKoOonfaueGXitboUr/AHagfLlr0NNsa/ZoswoHMm3AKcpmQlIjyM8j05RTnhBQCnEmdEnfLtGuqdI2phdW/wDIxfLPp5P7Kxk+D2mOU+YryrWVlZXbXLVs/wD+fribi8tzs7b5vehQH/eaPriwPcp1AVB+9G40303A0j086S7N+JU4ffN3CwS3CkOBO+VQ3Hocp91WavinBSoq+33AkkwGVRqZjRG1crtPA1cTkNMgFs67yP33W3B4kUSc07aCePMcUR2mKtYfbpfuiP27yGE+KQEFXiUTA8ITmUTA2A50pcNBi4W1AA1UgnmT7O2pA/TyFU52pcYN37zSLcKFtboyt5hBUoxmXHKYSAPKdJgGOAcfWL1rbJvXnmblhOTOlsr7xI9kzlUZgCdjM0WL7NbWwooN1Gm19/f1uqpYqKxqP0dMx8o6I84cQoXAW5GVLa1T0mJB2iNdxzpTiN3M4ysjdpJnWEkmdfI6igzE+0TDmrW4Tb3Dz7zjSmkBTZSElQIzElKRAmTzNdDtFw24aYW888y4hCUqbS1mAUBBMwQpO8eR1HKkjs+r8AcPbNPOPNPDh+lH8S04jvSLRw5fn6o04TB79atNQZhMa5t5G8jX9ajseKBdOZkq3HkCISNT01jbTrrFQVp2jYZa53m7i4uFlMBst5eempSAAPU6bTtXGIca4O+4XV3twgqIVk7k+EwNDCDOw0kigPZtU4NuHkSHTYkCL8hxRsxVMYg1DMERtO3McFLW2I3FslQQlQlXilJInQDUgnyiemgp+riO4JyJV4jlCfADqqPlr0+FDLvGODqIJxB+RsQwR9G9aU/y9whC0vG6feU1JSjuIkxtORI+JApdHAY5uVrngN3yucIHAW677o34zDu8WS99hrtx35oh4obc7/USkJSMxSCCop1mDMaSZEDSmFpjK2kqSghEjXKOe+hkgb8p3FR9z2h4U+rvlXdwypaQC33ROXQdEqE+YNRtxxZgiZUbi7eMeyhGWY/eCUgnrpPOrr9mYh+IdVaQATYguB+Q9+KlLG0W0gx7SYA2/JUyUgkk6qMQkEkqJO3h1ny6US8NvIYfSw8oG7fQXC2DPdtIGk9CTHqZ6VU+JdrDbSVJw20DKiI794hbnuTqAfUqHlQ92f8AGP2XEheXRW6FhSXVzmX4h7Wp1ggadNulbcD2a3DOzuMu24AcvuVmxWMdX8IsP39hW+1bBSnSVaeKQU+Z1Hi1IPp8ak8UwdSrNDif9Y1Mwd0FWomOW+3KhNXF+DysjEHxn3hg+sf6ukrztatLb7Kzal19lK1F9SkBJU2oKGUAgSoEhWwHhAnUxmwnZlRlao6qQWuBEDXUHgOHPTZOr44ODSyZBBuBsOR9FNWl8plbK4EBWVSwZCgTqM4ERl+lFuMFH2fO0E+NWcaGCpQ1MAb9dN5qtl8TYISSL65SD93u16Dp7G3Len6ePcJDPcfbninNIV3BBToQRo2N5nbrVUOzsRTo1KRIIc08dTInQ2IN76AABXXxNCo5jwDIN7ajXjxUnZocFwxmEjOkZhz+91nn06UQ8WmHGTsYMKOw1G/WenlQS1x1hCVJV9ueVkIUE9wYJH/x6V1c9pmF3eRxx59hSMwCC1mkE7mApOoAMcvnVU+za/wT6DsuZxkQTGrTw5aQRy2QvxbHVm1IsAR9efPopSzdcQQtEJJ09iAkk6jprAMx0601uLtJUVOZpV+JRgyDGs+IEx05xNQN5xthaEkou7p4mDHd5TIEAyUDXz3plhXGI7xAtrfxqAKVOnvFIEkaiRl1E6HY1mb2RXjLVqANGwn8AJ5x7Llrb+g+l0cYO6i0Uy/dSly4cQzbsn2yXFhJWRJIABkyTA81AHOJHQbpaQCVZk6dRlB6x8uVVpdXrK71Fy5dv3F00tKgYT3YKDmCUgJ9kEbCAffUh/lCbpxx5L2dwQQ2SEhQTvOWFZYjSJ306dHE4Rr6DaNOwBm88CPmTflKzUsQ5tV1V9yRHzH4j5o6tcYuW8xRCUk6HKkgkaDUKMCABJjWlm+KLhRyhYzEhIhP3iY8x9djQNbPuNoRPebHMpIkAwnz0ABVqRunTepSx4mw23cS464+p0EK7tLYWFKEpASQISSZ0kb61jo4DEtIYKvhEWBc206AX2T3YqgQS6nfaw+cqw+Ib19rL3atchJ8I1I5+vl503wW/eeUtLxzILRMZQBrIIkb/pQo92jYddtoWu7NqvLC21MqWQZ1GYJyqT6bjeNqQa47w21S46i+NwstlKGwwtMqjTUgACd56mtncYv43vM3+HOknTLGmmqytq0e4yEeLjHPivPdZWVldVY1utgVtIrfnUUSraCduVOF2Sx8Y0Pvpql08qWRdqGx5VUIpXSbM6a+LpW2bZWbLt18qR74lWbnXabhWbN61FJSq2RqASVAf+fhTUiRtSjjsknaRH5H5V0h7YDYVESbFHSk6kHcq9Rp1Fc2dqHHW0FQQFrSkrOycygMx8hvUVFu4TGnTNi6tCnEtLUhHtLSklKf3iBA99XninZ5h1ue5Xh12pru/wDbmnFOKzRuWkEx65I8o1pp2evWaMFxAFtbrbalB8hRT3wzHKUAmW/BkEdQatAqNov4T4Xt7pnvHboMlLhSpJj2QlLmYT/7abn+0hA+9Rvw/wABWjVixdP2NzfOXPjS2ypQDTZ1TJSpMnKRudSYGxNPh2cYc3iNu24253F8ytTLa1KStp1sJWpJg7ZFbKkgiNaiiGUcL4cUyorHhAKkLEJUoWBGUKUdf2z0yeS4HhAFd4lbBp1xsKCghak5hsrKoiRqd4mj/CeD7diwxO5vEFa7dw27IlSR3yTlmARmGZSDHRJorZ7OrK0aYQ/YXV864kKddZKglqdwkJUnNGumpMTpIFRRUXWVZvFvZJdt3bjdi0p5nKlaSVoBSFFQynMoSQUq1HKK74X4Ktre1u77FW3FJt3O5FuhUErlIMqSrXVQGio0UddKiirACnNtalZgan+N6sXijh2wfwz+VMPbWwG3O7eZWsqgkgSCSTMqQd4IVyIqv7TMZAQFaTlJ39ACM0amNfhNUVYXRw85ikkeH2lT4UnzgfLentrdtN5kpSXCQIVnyDQRt56nU6UzS+tAcSpJTmTABER4gdBprp9KjgKHLOquY0U05+zZUoAArVlBSo66SoJg6pT4R7x5zFtXChsT5QdvSnN3eFwIT91tGUdN5J9f0FLNvFpWhU3MbGdN5mYOhBq1E8wzFnASo51ZU6kGITEACICRt69KKOHn0NsEFae8UkTm1yAwNDtJgc9AOckkU71hRlWdRPPSZiCYSCPiTFTOGW9o4sIQw8pRnKcyTmUBIzAkZhIBg+ewpT4RCVG47w6pP7RhK1tEDxAEjYTr68zvIihtSSNDpVl4/wB7bthCniwqJSnMCY9ErhMHQDXTnyqvcQt1IWQohROucGQoH7wPOaOm6Qqe2E0rKyspiBKN7Gt5o6VwmtpFRRaFEXD+HJcWkKRmk7a/ltUPaIzGI9/KrR7P8LSPERruDQVDATqLMzoU1Z8C2igDk3GonnSjnZvbLHSiphI2p4yOVZwSt5pt4Kv09lDGfNnMDlSWMdljZTLSteh/KrPLVJrT50Rc5A2mzgqS/wA3DyZ9ke+aGL3DlWlwkPNBaApKikmA4kK1SSNpEjTUTXoS5Tzqvu0TDu8aJA8SJUPPTUfChFUg3THYdhYS0XCfYRxzhNq4H2bu+Q2Ex9gIK2wQmITnkJ110WNecaUO8K8bWJbxJi8DrKL11TgLQCsoUSSnbQjSDEb7VV1brWuSrawnjWxuLFi0vLi7tF2vhbetyQHGxokKCQdcoTuNxIOpFD3FPFrH2y2dsQ/ltVBQW+84tTqgpJJha1BCTlGgAmTI2ABhT9u1EanXnFUSrAVgdrXHVtetNMWaVpR3inncycpLhEJ567rn3VKq45w++Qw5eXV7aPtICHE26lBt2NZGWYkzroRMSYBqrUMIHU+u1NLtnKZGxqSoRCJ+JOMlquVqsHbq3YgAJNy6VKifEolxUHU6AwPjUzwdxnbrtLnD8ULymrhfeB5JKlpX4SSZknVKSDB1mRBqtqWYG/oatUrH4p4msW8M/kzDS4tC3At510ZVK1ChAgTqlAmBASBrMit0t9dB1raWVTEGiuz4QuVNA5TChsN/rHTegc8NTGUy7RQ1u+8ER3qg10USUz0CSDJ9B8KadyoqlOXUnZQHynSiq44beaSpS0FJUkhMaAjQaDYEfOeVd8P4CtYVI5EeYEadJGnKlmq0JgouJiEIBgkxBnT9Kk7OxUo90hagT91Q0MRGh2566VZeF8Jd80JUrvSmJze2kbQSd4CRCpBIE7+FtZcJKQoJWjOlUxuJjn1QoREE+HXQ71Rq2U7ogwg1zAwE5XTlUPwtidBGgSQVieYkU74TtLbPITdur1A7pqSnTfRUDWBJmKJLV5zDnISFOsqBy5k6JIPJeqh56GNwNjUNxDxO44tQQVdSFaqA6aeE/vInQjzocxcFCzKUveNohwMsplgkkuOOOOAyBJjMhK9NkwdpnWoHHboOtBI10GpJMEbxKjA9Y9BTvDbLvEFxNwRmGQIgjeZSClQ18lCDJ0qJxNhxCVhwqlJ22idNU8vUCKNoEoHGygu6rK4zVunpS0mlmkE6Vw2N6mbCyzQasFEBK7weyMzG3lVlcHKUCrN6fx8j76H8LsI15Ty6b/wKJsHaAJiPa08tB+lZ6rpstVBkGUZsGnKVGomzuRIFTTTfM0tq2OslUPGK4dVypdIjnFIqI61ZCFqautmJmaGMfZzIIii9cBMnbzoM4k4ptG5QpzMrojWPhSnNnRPY8DVUbiTOR1xERCyPdOnyppU/xc406+XmScqwJB3BAj4GoPuq2sMtBXFqNDXEDRcpTJipMacqZNNjWakgmYOtW5UxcEzTS5OhFP0p3po6Pa86EIjoo6nlvGWD7/SmhrM1GlhWhwXgiVs94tMJJAQIEnnJ5xFWA0xlgUNcFpP2ZgH8IJ9SKNGW5jSuc85nrsUWhjAeKSxHCu/ZSI8SFAjzHT6U2cw7K2Mg1ETA/jnrRjYs+HUVxc2IOYjc/OtDqQISW1oMIOwclJyK0I1SR0O8em9Sy1KzKTA1OYeo9qD57j30jiGDqJSUzpzG4FP04QstpUkypOxNAKZGiJzmmCU1urLvAU5YCh8YMyOih+vWgjiPgxSzmbSA51ECf8as2zGZMKBBrl0RvGnOhyRBChMyFQdnhC2pQtB1MKB1B6giN9uX1IqG4kdVGUnQKISMxMJ6CdgNomrJ7S3PGlSYBJ68+U8gdtf01qfGH8x19qSTrOvPX1mtFO5lYHiLKLrKyspyUlGBrRNgzoCkhR3pXgrCgpLlwpkPBBCQhXsyRJKusD60Z3eGWzmRL1n3K1eytpXh8ugPvpL6gBhbKWGc5mZLWh2IjYfH+IqXsLbT6igS6wx5hzKhayPukKIkD0O/lT+zu3kGFPONkD7wkfMUh1wn05aYKPmRCp2A61C8RcZLgN2sKPNUnlp7vWmrBfcbdKngsZNCkBJOmx/FzqEucIeQARliEkAoKk6iZVlMSPOqZqnPDjoE0xfGLxSAFOHcyQuQRyEAaR66zTDD7y4EhLzif7Rj/EVKJwe4dUMz63D+FOiR7gISPWpDiLBfszAcOqyYISP6JPvJ0FNc4AQltY5cYxdBDLDsy6rUhRlIVtBnRWvLWhJ8Na94sSddeZPkNqtHEuFArC0MEAPIQFZufeAT9dKFMIwQvNJWhDZnQ7gpUNCD1gg0LIaEdRjqjpCDLtpITnREAwYMg+flUWVirWxjhZKLRwQnMUztsd5FVNbMFZ095p9NwMrDiqZZAShdApe3uyRB2/KlmbBI31PnSjlrJkR6GjJWVsSkHVg7UmpR1EetPhbHyFbSyAIFUEToKhHkjlSaUyYqcXbg7ipPC7cIR3YazF8L8cSU5IiOid59atzouoxmaysKyu27ZtIUTKUpED0+VKudoVs2ACCFfWoDGVssK7xwkkx4AJnQDTzoeuOI7TVC7I/2tD/hWOmLTErp1KkQJA6q28L48adjKvfkfSp6yx5KgTpIrzq3cNJWSzmaP4FdPXnVucCYS6/b97mCc3z8/lTZdKFoplt4HRFn8uIzTIGmutObXG2lmEuJnpOtUfxXfLQ6tknVKiCZ+dRNi2CoFF8Eq6E/4iqa4qntaDAC9JwDsaiMXeyjSq+wniV1hP7Rec9Unceg0okscYTdeyCCIn4c+lBUIIsjpsg3Qd2i3A7oTM6z5HlVUXpObXf9TVodqSICEzuSSPQcvOq5xWwdQEOqQpLboltR2UAeVMoCGrFifOYUZWVlZWhZ1YfZXfCLm2V99IWn1Tor5FPwNWLizzncdyjLn2zKHsgDWBtPKT1qhMKvlMOpdRuk7dQRBHvE1f3D2JIumA6khWYRPP0I5KmsldpmV08JUBZlOoULi7BS0l30P6iurZaFpSFQSBEnX0p7idwAzkUNdjI39Nahbcayms+0LSpUYMCRk0B3BPKNhG1THDCEFju1EZ0EpVOkkaT6EAa1Ct4iUmCdorSkIcVmUZTuBvrzjpVtfCuJtKKXwlsjQSdooefAxBxIT/q2VgqVtmIMgDqOv503bsUXDk6qSn8RJk9NZ0reJcPPI1t31NhRlSR18pBim6oTwKMQ3mBSoxFAFwF2jqlNKBC1EqbOwV1Eaiaj79u9agKulEqHMgn5AUhhwgyuVlW5Ov8A4io8bplMqUxfE7lxpQJabBSdgSdupP5GqzskAIEcxPxos40vylooRz8P97T4xNC7YgDyFNw4MElc/HubnAGw+qWrQNNF3s6JHkD5zSIuFaeL73x/wp8rFlKk81aIqPdeOZUKO8Hy6GuBeLB3nlrUlTLzUpRvwQ3nYdUIzNBQE9HMo/Wq+t7wKgEQaNeAnSBcweTen9s0ut5Cn4WRVHNGzVjnUmAlahGpTOXz6lVMca4fvFqhBZdTvldaAI95OtTuHXoayxv/AB86XxPiq3bEuKAPTnSKbQBcroVM2wQxZcHaBV4m3yp9lLaNZPKTt7qsbAbFLVsEpSAkJ2HKeVQwh1ttwAwrUA7+tEgWO7yg7gfSnN1JWapoBzVS8ZcNZnlLLeZDvMclRBGmo60Ir4XtEAd+i5aM7iFI9xCfrV3u2sgmCoaSB5dPOu2bS3VuAY3Ex8f0NA0OFgUTww3IlUazw2zH/p7h4HlIhM+fhiirhLD71h0hYKkxrCQOWhMmatb7CzlypAA5jl8KjLttLQj7uyTzT5elBUDhqVdMtPlEclXHaFaBYacXplVBHODH1g0H8Y27wSlSwe6LcNpHspCSNvTSTVhY1apvg61Cs6EHL17yQEbbpOvuNQPHdqmzwxth05rhw6AmSgSCY6CBHnIqU5MKPADXHiP0KpaysrK2LmLKmcA4gftF5mVaEjMk6pVHXp6ioasqiJ1VgkGQrdd4xF4hIDRR4SSZnXaPrWYZcAyD5b0HcLO/syOhI/P86m238ivOsNRlyAurTcXNDkWXjaSmehHz0pqqwPUgEHX4U1tL3MFJ5qGnSd6ksFvO9SpvmNU+hEH60kBOlN8NxgNrDYQpR0CUtoKlGTAzHYTGkmiFnELpYOTD3iBAIWoJ3203jzp7aAtJIayJcygBSkyNNRIBBInz503OOY1qlFtbuHKQCFwCZkKAK/EAOUj1FbGARMrM8vBsFrJfq0+wNoJlMqWCNJ35x0igjHrC5ZeyrDWon9nPMx005/Ciy/xPHSgqWLe2A5pAUs+SZWpM+tDNolxKip90uqykqUokmBJ+A8qp8BMoZ3XNhyQzxOrxobkEp8Sv3iIA9wmoa4T4FR/EUle3BcWpzmoz+lJtOmfyGgNOYMohc6q7O8vC21bj1PXpSwEcq2CdZEV1NMvKQSMslYda4UyDyB867BrCRGpjzqiLqw4EWSDdqUqBnQa1OcGXak3eWfC4CCPQZh8xUSEROpPrW7Z/unWXPwqk+nP5E1VQS0o6TsrgTsjjiTiBbTKSj2nOfSaZcJYGt9Xfr8aRqFK2KhyA6DmamU4Q3dpKCdQJQfn8KjRbYjhqVFoB1qT4dZAJ3GmorNSiF06hOaToie44t+zvIZfBT4fAfux+RGmlLPdoLSBMgjyoKxLitu9Yy3FsojXKtO6FDn+ooPbbQVQ66rL0iDHvow1U6pwAP7urrwztLtlDKmSsmEoAkknpFC+LXV8y+twLlR8Rb2BBH3Z5gaecUw4XxjC7V1DmRZy666kmNOe06094s46tLgpU2CFiR7PI8vj+dXCEOi9hzBT/AA7jzvESJChuJ1nzp+5xOX2SE+2D9Kr+0sVLC7uMqfZPUqnT3xPyqVwW57oLWT1+B2pNQWsjZUJAlGnBCil95xS05wkaTGpG/nA+tVH2hYgl/ELhxCytBUACTOyQDB/DIMRpEUyxbFnFurIUQDppzHPWoetFNhAusNeqH2CysrKymrOsrKyu0IJ2qKwJsFNcKvQ4UnYx9aKb+3nxDbz6+6hTCWsipPrPvo8t0d4gelZapvK6eHYQzKUywd0E68iKmA39ncS6n2Qdf3T+lD960UKnl/G9P7TECUlJ1BpRG4TJiysV0kgKGoI+dRj2IKbMQd5AiR7h19KV4RxBKkd0o7belEK7Vs7gUTc2yIPA1CCbvF3CCAFGRzn5TUS+hXcXLqhH7PKP7So/OrEv2mkp0CZoL4vvki1LciVEbeSgfyqnLSx2eAAqvTbAHKdPwnrWJwpeYHMIBp7esymRvEipbB7dLjYWTqdx6b0ZqOAkJtPs2jUqZHjnIMW9OCiXMPVBMj4np6VI4E3yUBm2qVVagCaaMIh5BiNaW6qXC63UuzqOHeHM+d/qpRYBEFPx1psrCmVnVAT5p05fCnZVvt/hWN0kOLdCujVoUqoh7QeoUFecNK/3apHRWh+O30odxi2W2E50lMH+NRpVkhU1y81mBSQCDuCJB93OnsxLhrdcbEdg0HeKmcp9x89PdBnDONLZUCJKEqE9EhWmvQHl51cFynvmcyTykfx0NBdzgbLVoUJTAdcJWADIAT4YJ5TmVlndIiIMyfZ/iKkzbOmSjSeRT91Q8jTJBMhcNkslpIMEidrcEhbWlsYS8pTSgTqNUkn8Q67fCnV9h6VZlouLRUpIAU3HzzaHXpUxxBwh385CEk85iga94Gu0f0x/RUD8jFGCYumuNN14WkcLJWmVvW8wAUoHsgHTUCNffXDHDjLJzBIM65p5dROwp5gXDLylgFKgkHWRU3xYUtIB1kaa86BzzsoGMjRB+JXgCe7GiQZjzqHS6p5QaREqMD1jmeQptdulRJNTHBdvNy2ehJ/+poTYElJnM6EH3tottZQ4kpWNwfy6jzpvlHpV7Y3gDVyhSXE/uqA1T5g1S+MYeu3eWyv2kGJ6jcEeo1p1GsKg4FZa9A0zxCZ5B1+VZXNbrRCQiNGFtpABE+Z/jSnLFihOwAn8qcnTQ7fSlA30MisRcSvVsw9NvlaE1cbAjT/xU/gdyGxlVGaoJ5RAkax86QL5cVmnX+PjUiQstdpa+QEVYvaFSSRE7xzoaNwpJ10oxwJ7vEgE6jQ02xzh8LGZA1HzoGmLFLcyRmCHbfGVoOZB+f1oit+P/DC0mfKgy/sgk+2JpjlXyNOyghKh2yPrnjVKh4QY6H0qfd4BWsJVc37DLikhXdmPCDtusTzG0SDVPrVlSoc4Ovuq9uN20LvrNDuiC2yFyY8JcWDry0nWhqNyNlaMC7vq3dtcRZxJAB0GgkR+2UVbdmzSlFKcRYWtXsgEE+4ZyaWZ4DYbVpiVuncKTIEkaayvQjajbB8Bw1t1KmFoLoJKQHsx5zpmJPOhXhvB2bnELpDyM6U5yBKhB7wD7pHImllpsIEk8TC1UsSXB7+8eGsaDenTDrmLbfPko/GeE3Gm++bW280N1tmY9RqI8xPnFDVnYLdebbbErWoADlO8zyAGtHvBLSUYhdWyCVMFKwRMiAqAT13KZ86T4PtWmWXL9aFuLaXlQE9CkAqA2KjnO/TTWgADo21n015re7EvYxzT4nDLlsASXg5QRoCCL6dNk2uuz+6glDtspQ3lxYCfWGyah2+CMXDmQ/Y+7yhXf51d2BO22Yq5+zHnT3/KgfZbpHdrzvulWf7oBUkwT19r407xnFvtLdjagqaQcqF5tJjK3m9B4iJq21KYGk+vOEurhu0DUANTKJInKIADcxNjJvIA5X1Ubc8G34ldvc2d1lEqabVlUY5JMkT+8RTzhXDhdSUeCASsuad3BhQUOSgQQR5Gp5rCrI3bSrK5Q2tsiUBSjnIOsEq1kaGJkU44ntktKXbW2j9+6FL/AKKciUE+HUJOUk+rlG5jS2SBbgbH9K5VR1apVbSFRxDhPjaWlg3JGhECRBPDVRWP4HmYWtp1h9LZSohsgqBJy7gwQUk6E8tKrnEHlMKRcIkpSDt+E/odfjR1wSjNY36VTqEgwSNDm6GfhQ/e4esZ1BOZGUF1ISooTKRPiygaQSeg+NRkFocPblJSMbR+GxD6JMwRB5loP3SrPaOMmhkxyineEcfZSVOZY9R8pNVPjth3ThKdEEyB0qOLx2/j608CbgrIapaS0hXviHaQ0UwCJ9366VWPEnEhuXJJ8I2HOhYOKPOpOxsY1Ik9Tt896pwA1VB5cIaISjDRXvogfx76l8JvSyvvEgSkGAVAaDVW+5iRHpTUt7az5DanjNlLtsnSHFKGuu6TuOfkOZAjWlSHGEUZRKsLBuM7dxta3RkyDXznYDqTQPxBfs3lx3xZA0CRJOoBJlQmCdaHcdWWlhiIyJTn6lZTJ+AIFatnIiK0UKQaJWfEVS45VL/Ymf8Aht/3RWU0+0ef0/WsrSsykSkGkihSNQZHSukrpdBB0ia5q9qIKSQtKttD0NNrqwkyNPSnLlvrIrbayPSpMKFrTYpla3DzZ0UoeYOtPVPvr++o+pP60v3oMSAawqROhIG0/l5VdzdU2nTZYu10/So57DVqEmBUZcEJ8I35/wAdalsWvA0nQyTsKGM5UZJE+ZptIE3K5faVZtM93T8x15Lbvsn0NX5xvbJdxCxbX7K0MpPLQuqB9NDVDPJ3AMyP4/8AIq6b3ifBr/uVu3TrTndoR3QZWYIJMSG1AmVESDFFiGF7IasvZWKp4bEZ6hgQRIvBItZHuFcIW1u8HG0OBYmFFUjUEHTfYnlQPg+CN3N/eJcUtKUZ1SgidHI1kGRFSuD4RhzTqXUXLpKDmAKTBjX8FSuHWdsy68+26pa3UqEFMe0rNp4Rz61lOV0CABOgIP0XSZinUe8Iqve5zQGuLSCIMxees80ztmbW3bW3apXmcGVTi/ay9BER7gOusU57xy1sCq2bSpQUrP5JCFSrcbQn47Vym10p/ZsILTrSlKT3icpI1iQQffBoKecu4WgRt/crJVexzg6p4vEC7NJkaX3sLgC1tlXSnbw2LLHcANOOyhQ9paiT4d9p8hsKkuM0OOvWarlAaUtISsDZMPKGmp5EHfnRo5hlvltk96oC2UFJEe0QQRm8Ply6mkMcat7wZH8ycqiULSNQDuDodDpPu6URokNInhGm231C6I7Xpd8yo1kCXkkA5hmkDU3kZS62ogRohrtHw9u2dtl2yAhZJEIEewpOUx113506Xe3LV+++qydf1LbeVKgEoCoBT4FTIA1Ebq60li67Kyi5uH37txtOZtBBPsnTVWgAMGJ84NB/C3a+/wDygV3zpTaLzeBKAQ1OqNQnOoDbrrMU1lEucXAxfaDt7LJW7Tp06TaBHeQ1wLjmbIc6YH8osBfXoiXsufKi8wWSptyMypMIhKiAYG55ajamtjjLZKiy7OUrQRJAO6CFpBE9R5gEUzxDjTDbSyuUYfduOXDwAR+zWgoOozBSkJAgE+e3rVO4biC2FhaD6g7KHQjpRUqLhTA3Cy9p42jiMW+pTEtMcZMDW+nC3BWfjmDG7Di8qc4lTpShSUBSvFCSRBA1A1M6czAra+w5bTmRQM8uc+kVanD9/bXSA4lIlPtNq1AV0UPvDz509xeyTcGVpzXEyClBCcu2ijIB9ndU67c6oOI2vuPuszmgxe2x+x/KrCywZYGYrynpGopY2KtyonzNErlugxvHkaQWwlPUil95JTu7ACYW1t7PUxA60eW2DBm3Dqp7xBS5KYkBJBIGbw6pzCDprUZwzh4ddCj7KdqO3W0lJHKIobzI2RENAIO6qvtX4fKXPtaBoYS6JmDslRPORAPnHWgu0f6mrtW2l1jI4JSUZFApyiAIhI3A/PbSKpXG8OVa3C2lagGUn8ST7J+HzBrXRfcsO30XPrssHjf6pX7Qeo+VZTLvh1Nbp8rNCsDg/hh29VCQIiSVHwpTyJ8zyA/Imjp3sp8JyPoKxyKIE+oJI+FL9itwgsuJAGchtXmU5YHuB+opve2N9YXbl2lBdbJXqCSMqiT441EaHXSRvXNgZQ9wJknQ6ey9o+rVGIfhqL2sygEAgHvCQCbnr7RbVQOCcDuvOusqKW1NbhQJ3OkeUc+hFT3+ahz/AIzX90/pQlxBxc47cJcEtLdhBCCoTlmZM68qtKxfX/IxXnVn7lZzSZmVazvUphrpmdzMm46I8dVxdEMIcxslrS0Nacri2TffjHAhBN72eLbfYYLrZ77vIOUwMicxn1p6rsiUd3Gf7p/Sovs8xJ17Em+8WpWQuJGZRVuwVaTt/hRdx9h184+hVr3mTu0g5V5ROZc6SNYIqmBpaXQddATwlBin1mYllB9SmPDJc5jQJzOG+lgB6IXd7KpfDSltFRbK5KTsFBJG2/iFCnE/Caba4DBSkwQVFMgKBTOnMawNPOjHh83dtiVuLsqzKGUBS83hXKBrJgZgNPKpftEwnvL6008LmVv4Oan4KHwqXyFzZBmNT0TRlGKZRxOR7HMLpDWwS0k2gaQOOhQri/Zuli3D6+68WTwQZlcaT5SfhUzb9kSkKCkOMpUNiEmRyqc7V76EsMj7yys/2RlH1PwqX4+tLhxhKbbN3gXPhXl0yq5z1imFolwuYi0n1WFuJrOpUHEsb3hfcsZAAgDbqgrHeGbmxa74vpUAoDKJ5+tJWyn7m5Qw06Gs6M0xuYKiOvI/CozGcNxBpCTdZ+7zAeJeYEwTtm3gGnOB3mW8tVjksJP7qjH0JrPAmYIFp1lbnANyDMx7nNqQ5rW5ZDQQLWMQdeKXxZy9trgWpezqXkyq/eMaSJGulP8AiGyvrFtLxuA4CvLl1iYJ1n0O1TvFGHleLWKuRH/5KLh+opbj8pesXo17l1PxGUH5LNNLID7m2lz1+6y08Sx78MMjYeBn8LbknINrXGyGU2N8bP7Yq7ypylWXWfaygaCNdPjWsTwe8atE3RusySlCsus+KI300mpzjIlnCGW9ioNIPrlzk/FPzpxxP/Mqf6pj/sqnMAnWzZ1Ot1KWIc803ZWw+sW+RvklttOZHFCWKcLvrsftLryVoLebKc0wuAR051T9vh6Dd90r2QpWnUZSRrXo/E/5jH9Q39U156sf5xV6q/6DTW+AOj/LPqluy1xTNRrbYgMs0DwxpbUKwcQ7Nkt2X2o90U5EKygKmFlMCeozCqwsLFBui0dUBSveADH5V6S4i/mQf1DH1brzzhgH29f7y/zqCW5oJ8s673VS3Ed06o1pIr5PKB4YBgxqFbWC9lyglt9txpsrQlQgGQFAGDprypbGeDb1lpSw6HUJEqCFKSsAayIg6b6GaJuJFkYKkgx+xZ/7KZ9kmIrdZdbWcwQpOXMZjMFCBPLw7eZocjc4ZeSNZKs1a5w1TFHIWtflLSxtxYajqPryQDheGLvHUtMtpSQCDB8ITO6tNImOc6elF/8AmtXl/wBpRmj2chj+9Mx7qluzzDUtP30D2XcifQKV+ifhQja4i4cYCsypNxlIn7hcyR6ZdPdQQMoc8SSdrR7LUKbu9qUcIQxtNoMlocXEiYJOnDlGhTdNjcW76bLRtalpSFiSCFkAEHmnn15aGamL/h68aeYZN0CXysA+KE5ADr6zyqe45YT9uw5caqdCSfJLiCPmpXxph2vuKT9lUlWUjvSIMHQI5ioWZQ6SbEb7fpS6NcVTQDGtaHtqE+EGHNDr3kwCLDhZb/yBvIA+1pgbe1Q/xf2fLQwq4fcbdyRpCpgqjQ+pmivspuluNPKcWpZzJgkk7pO0mq+x6/dLrqVOLUkuK8JWSNFGJBMGJq3NGUFoMmf5aQqpvqMrvbWczJTy5opjxBxFgACRMwgn/Jxv8S/lWVMyn8XzH61qj/xv8yL4zsX/AOHyb/2RVwDwpdLbD1q6EZFZcylkEnc7JPh12ow4N42eefFs+gFUGFpEapBJKhtrB2A9KAuzHj1NuMh8QIGZsHxBQ0zJmAZSCSB5a6anCOMcNbWp5q1WHTPiyIGp31znLPMgUDTkcJdBm4M3+UIsS12Ka4Nod4wtApObAy20JsRB2OhFxdD3avhTbdygoATnCVkAaFQWQY6SNPeetGth/Mh/qF/VVU5xnxkLu5SpSgPEAQDIQgahMnckmSfXbarAteMGE4d9lyOZ+6UiYTlkk6zmmNelSQ1zibAgx+80x9KpVw1GkzxvpvbngzEA/SQJ4yNlAdl8fyimPxuT6/Z6M+0Lie5tH0IZIgthRBSDqVLHP0FVvwHjTTF4XjKkoWqQmM2rWSRJAiZ+FWVccd4e54l2y1GIlTTZPpJVtvQtcAwtLoM8+CLGUHvxra7aPesykbETncd7WVd4nxG+++2677aICSAABCsw0B8zV1v2iLhVpcAA5DnH7q2yRHvyH3VUvH3EFq6lpTLfchGbMShKZzZY9k6xrv1oq4b7QGWrZpt1DpUhOWUhMEA+GJUPuxV0nsa45jYxe9yLoe08NWrUKT8PTyvGYFgiWtcCNtrGOqhe0y9z4glHJrIn3k5j/wBUe6jrtAxh21t0uMkBRXBkA6ZVHn5gVS+L4yl3EFK2KipzKdxKwoD94CdKtS44/sXAO8t3FgGQFNoMHrqrerbUHikxOnuVMVhHZcM2nT7wUpDwIImGyDPNAOM8W3V0kNuwpIUFABITJgjf0JqEtLySNYO49RR3xRxJZPWy0M23drJSQru20xCgTqkyNKqRm+HfZp0zq8X9FU61TW5g4TNtUOJeKVTDVTT7qHkZTEQYzOt1g7dN/UCWEvrtrgfdQpQ/+RCfyoa4bfF01iLSdczq1D+3OX/oFMMG4/abtW21NuFxDeXQDLoITuqYiOVDnZ/xS3areKwpaV6Q3BIUDpMkciaN1ZhI+fKRCz0ezMVTpVRlOZpaKfMB5cY959UQ9r9z/s7Q2GZRHlolP0VUtxR/Mqf6pj/sqvOP+JG7m4bWApAgISFAToFKOxPM/NNEGNcXMu4cLZKHAsIbTJCcvgyz96Y0PKgdUBLzxFlqZgaraOEptbdjwX/6ZIdf0RLiY/0IP6hv6pqhWcMcF2XoGQk/e11Rl+tXNhXHVqm2aZdZcXlQlKhlSUmB0KtR6ikcT4sw9bLiEWkLUhQSe6bEKKSAZBkQeYqPe0iQ7+MEQgw+Hr03ZKlBxAq5wQQBsBOtt1NcRD/Qg/qGPqiqDssMcTdKdIGUqVz11mKuuw47tBbtsusuKyoQkgoQUkpAEwVbSJFM8Z4qw9xhxDdrlWUkJPdNiD1kGR7qtz2kGHC7YIgqsJhq7HBlSg4xVzgggAaCTrItPRTnEw/0Kn+pZ/7Kjexy3Ulp9RGhUgA+YCif+oVuz46tPs7bDrLiwlCEqCkJKSUgCYKtRImo7He0q3ZZU3bNBkEHU5U5Z0OVCdSrbXr1qw5mcPnQabz9N0n4bGfC1cL3RAc8kuJAaBIv/tRHwBdhx6+IOhfzDzClLj6UBWtuRjCdNriD7ntfzqC4C46Sw+pQGijlyKMZ0nYg8lg/xqasr/LLDu97/wCyud9+LIiZjec/umJoTGUNeYIO/DWy1Nc9larWwzO8ZUaAC0ixAi86cehT3jtf/rMNT/70/wD3bj86iu2lUItz5PfRFCV3xom5xFt5UfsikhtOsISvNE6Aq3n15U87TuKGbtpGRK0BKXRLgAnOEgAanUwflVuqAlw4kR0sgo4GrSOHkSGNqZiCCASHW11EwivscP7B395H/Sap3tHuyh4gEgl1Z8iAdj8asDs44uYtWVBaXFZ4IKAD7IjWVDWqu7QbxLlxmTzUtUcwFKkT50dJwLmNGozJHaVB7WYqq4eFwpZTsYLdPZRX8rj/AIYrVRUVut2YrycBY5Sz3sJrVZU2HVMZpW/pH3XVvuP45U2NZWUdPQrDiv49FqsrKyrbok1fMsrKysqbqj5Qlvu1pNbrKHcqqmg6BdJp5WVlC9acF/L0+6amtuflW6ymrENPb6rhHOkj7VZWUI3Vu8jen3S6KbL3NZWUSFuq5rKysqwiKytitVlU7RMpeZdKpX/d++srKVsOq6VLzVP6Cka6a9oeorKyj2WE+cLk1grKyqPlR0v/AGFbrKysoFrX/9k=',
        mp3: wildride,
        totalPlays: 121,
        releaseDate: new Date(2021, 7, 8),
        podcastId: 10,
        userId: 11
      },
      {
        title: '#63 - Chanel West Coast',
        description: 'Chanel West Coast is known for her rap career as well as Ridiculousness and Fantasy Factory.',
        imageUrl: 'https://res.cloudinary.com/pippa/image/fetch/h_750,w_750,f_auto/https://assets.pippa.io/shows/5e6693e53106aacd129f04ce/1624608610749-c0aeb4402cedee427a8175a0989f5fda.jpeg',
        mp3: wildride,
        totalPlays: 132,
        releaseDate: new Date(2021, 7, 1),
        podcastId: 10,
        userId: 11
      },
      {
        title: '#61 - Steve-O\'s Dad',
        description: 'The relationship between Steve-O and his dad is unusual, to say the least.',
        imageUrl: 'https://res.cloudinary.com/pippa/image/fetch/h_750,w_750,f_auto/https://assets.pippa.io/shows/5e6693e53106aacd129f04ce/1623895387293-749dce9958758e7e7c37bc3eba022571.jpeg',
        mp3: wildride,
        totalPlays: 144,
        releaseDate: new Date(2021, 6, 17),
        podcastId: 10,
        userId: 11
      },
      {
        title: '#60 - T-Pain',
        description: 'T-Pain is a legendary music producer who\'s hits have topped the charts time and time again.',
        imageUrl: 'https://res.cloudinary.com/pippa/image/fetch/h_750,w_750,f_auto/https://assets.pippa.io/shows/5e6693e53106aacd129f04ce/1623303176390-f1fa26fa017fdc2b4c0e68ca7ae59515.jpeg',
        mp3: wildride,
        totalPlays: 153,
        releaseDate: new Date(2021, 6, 10),
        podcastId: 10,
        userId: 11
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Episodes', null, {});
  }
};
