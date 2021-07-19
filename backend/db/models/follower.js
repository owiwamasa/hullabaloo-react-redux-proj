'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follower = sequelize.define('Follower', {
    userId: DataTypes.INTEGER,
    podcastId: DataTypes.INTEGER
  }, {});
  Follower.associate = function (models) {
    // associations can be defined here
    Follower.belongsTo(models.User, { foreignKey: 'userId' })
    Follower.belongsTo(models.Podcast, { foreignKey: 'podcastId' })
  };
  return Follower;
};
