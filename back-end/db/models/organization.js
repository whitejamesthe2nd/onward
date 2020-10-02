'use strict';
module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Organization.associate = function(models) {
    // associations can be defined here
    Organization.hasMany(models.User,{foriegnKey:'userId'});
  };
  return Organization;
};
