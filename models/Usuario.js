'use strict';

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
   
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    correo: DataTypes.STRING,
    contrasenya: DataTypes.STRING,
    foto: DataTypes.STRING,
  
  }, { tableName: 'usuario', timestamps: false });
  
  return Usuario;
};


