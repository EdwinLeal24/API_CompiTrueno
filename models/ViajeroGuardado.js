'use strict';

module.exports = (sequelize, DataTypes) => {
  const ViajeroGuardado = sequelize.define('ViajeroGuardado', {
   
    usuario_id: DataTypes.INTEGER,
    viajero_id: DataTypes.INTEGER
  
  }, { tableName: 'viajeros_guardados', timestamps: false });
  
  return ViajeroGuardado;
};