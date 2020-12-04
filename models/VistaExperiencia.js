'use strict';

module.exports = (sequelize, DataTypes) => {
  const VistaExperiencia = sequelize.define('VistaExperiencia', {
   
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    foto: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    calificacion: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    pais_id: DataTypes.INTEGER
  
  }, { tableName: 'vista_reviews', timestamps: false });
  
  return VistaExperiencia;
};