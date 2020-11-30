'use strict';

module.exports = (sequelize, DataTypes) => {
  const Viajeros = sequelize.define('Viajeros', {
   
    fecha: DataTypes.DATE,
    presupuesto: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    usuario_id: DataTypes.INTEGER,
    pais_id: DataTypes.INTEGER,
  
  }, { tableName: 'viajero', timestamps: false });
  
  return Viajeros;
};