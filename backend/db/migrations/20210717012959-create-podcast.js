'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Podcasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(80)
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      imageUrl: {
        type: Sequelize.TEXT
      },
      totalFollowers: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      totalPlays: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('Podcasts');
  }
};
