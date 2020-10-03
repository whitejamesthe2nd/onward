'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    name: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    // Project.belongsTo(models.User,{foreignKey:'userId'});
    Project.hasMany(models.Task, {foreignKey:'projectId'});
  };
  return Project;
};
