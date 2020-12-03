'use strict';

module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('Login', {
   
    correo: DataTypes.STRING,
    contrasenya: DataTypes.STRING,
  
  }, { tableName: 'usuario', timestamps: false });
  
  return Login;
};


