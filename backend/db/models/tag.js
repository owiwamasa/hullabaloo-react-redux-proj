'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tag: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
    Tag.belongsTo(models.Episode, { foreignKey: 'tagId' })
    Tag.belongsTo(models.Podcast, { foreignKey: 'tagId' })
  };
  return Tag;
};
