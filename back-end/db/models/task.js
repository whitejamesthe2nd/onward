'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.belongsTo(models.User,{foreignKey:'userId'});
    Task.belongsTo(models.Project,{foreignKey:'projectId'});
  };
  return Task;
};
