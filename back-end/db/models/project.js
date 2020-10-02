'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    name: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
    Project.belongsTo(models.User,{foriegnKey:'userId'});
    Project.hasMany(models.Task, {foriegnKey:'taskId'});
  };
  return Project;
};
