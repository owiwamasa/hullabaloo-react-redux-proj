'use strict';
module.exports = (sequelize, DataTypes) => {
  const Episode = sequelize.define('Episode', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    mp3: DataTypes.STRING,
    totalPlays: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    releaseDate: DataTypes.DATEONLY,
    podcastId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Episode.associate = function (models) {
    // associations can be defined here
    Episode.hasMany(models.Comment, { foreignKey: 'episodeId' })
    Episode.belongsTo(models.Podcast, { foreignKey: 'podcastId' })
    Episode.hasMany(models.Tag, { foreignKey: 'tagId' })
    Episode.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Episode;
};
