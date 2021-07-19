'use strict';
module.exports = (sequelize, DataTypes) => {
  const Podcast = sequelize.define('Podcast', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    totalFollowers: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    totalPlays: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Podcast.associate = function (models) {
    // associations can be defined here
    Podcast.hasMany(models.Episode, { foreignKey: 'episodeId' })
    Podcast.belongsTo(models.User, { foreignKey: 'userId' })
    Podcast.hasMany(models.Tag, { foreignKey: 'tagId' })
    Podcast.hasMany(models.Follower, { foreignKey: 'podcastId' })
  };
  return Podcast;
};
