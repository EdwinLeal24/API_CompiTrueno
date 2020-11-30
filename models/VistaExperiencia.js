'use strict';

module.exports = (sequelize, DataTypes) => {
  const VistaExperiencia = sequelize.define('VistaExperiencia', {
   
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    foto: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE
  
  }, { tableName: 'vista_reviews', timestamps: false });
  
  return VistaExperiencia;
};