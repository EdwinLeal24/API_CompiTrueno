'use strict';

module.exports = (sequelize, DataTypes) => {
  const vista_anfitrion = sequelize.define('vista_anfitrion', {
   
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    foto: DataTypes.STRING,
    estrellitas: DataTypes.INTEGER,
    ciudad: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  
  }, { tableName: 'vista_anfitriones', timestamps: false });

  return vista_anfitrion;
};


