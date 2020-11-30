'use strict';

module.exports = (sequelize, DataTypes) => {
  const Experiencia = sequelize.define('Experiencia', {
   
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    usuario_id: DataTypes.INTEGER,
    pais_id: DataTypes.INTEGER
  
  }, { tableName: 'experiencia', timestamps: false });
  
  return Experiencia;
};