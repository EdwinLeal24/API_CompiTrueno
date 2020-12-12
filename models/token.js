'use strict';

module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define('Token', {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    caducidad: {
      type: DataTypes.INTEGER,
      defaultValue: 120,
      validate: { min: 5, max: 24*60 }
    },
    
  }, { tableName: 'token', timestamps: false });
  
  return Token;
};