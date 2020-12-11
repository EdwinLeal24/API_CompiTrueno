'use strict';

module.exports = (sequelize, DataTypes) => {
  const vista_anfitrion = sequelize.define('vista_anfitrion', {
   
    pais_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    foto: DataTypes.STRING,
    estrellitas: DataTypes.INTEGER,
    ciudad: DataTypes.STRING,
    descripcion: DataTypes.STRING,
  
  }, { tableName: 'vista_anfitriones', timestamps: false });

  return vista_anfitrion;
};


