'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Episodes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(80)
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      imageUrl: {
        type: Sequelize.TEXT
      },
      mp3: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      totalPlays: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      releaseDate: {
        type: Sequelize.DATEONLY
      },
      podcastId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Podcasts' }
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: { model: 'Tags' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Episodes');
  }
};
