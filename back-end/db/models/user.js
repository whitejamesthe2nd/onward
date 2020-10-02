'use strict';
const bcrypt = require('bcryptjs');
const { Op } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        isEmail: true,
        len: [3, 255],
      }
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      validates: {
        len: [1, 255],
      },
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY,
      validates: {
        len: [60, 60],
      },
    },
    tokenId: {
      type: DataTypes.STRING
    }
  }, {
    defaultScope:{
      attributes:{
        exclude:["hashedPassword", "email", "createdAt", "updatedAt"],
      },
    },
    scopes:{
      currentUser:{
        attributes:{
          exclude: ["hashedPassword"]
        }
      },
      loginUser:{
        attributes:{}
      },
      createdAt:{
        attributes: {
          exclude:["hashedPassword", "email", "updatedAt"],
        }
      },
      profile:{
        attributes:{
          exclude:["hashedPassword", "email", "updatedAt"],
        }
      }
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Task, {foreignKey: 'userId'});
    User.hasMany(models.Project, {foriegnKey:'userId'});
    // User.belongsTo(models.Organization, {foriegnKey: 'userId'});


  };

  User.prototype.toSafeObject = function() {
    const {
      id,
      username
    } = this
    return {id,username};
  }

  User.prototype.validatePassword = function(password){
    return bcrypt.compareSync(password,this.hashedPassword.toString());
  };

  User.getCurrentUserbyId = async function(id){
    return await User.scope("currentUser").findByPk(id);
  };

  User.login = async function ({username,password}){
    const user = await User.scope('loginUser').findOne({
      where:{
        [Op.or]: [{username}, {email:username}]
      }
    });
    if(user&&user.validatePassword(password)){
      return await User.getCurrentUserbyId(user.id);
    }
  };

  User.signup = async function({username,email,password}){
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      username, email, hashedPassword
    });
    return await User.getCurrentUserbyId(user.id);
  }

  return User;
};
