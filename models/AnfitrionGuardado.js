'use strict';

const { INTEGER } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
  const AnfitrionGuardado = sequelize.define('AnfitrionGuardado', {
   
    usuario_id: DataTypes.INTEGER,
    anfitrion_id: DataTypes.INTEGER
  
  }, { tableName: 'anfitriones_guardados', timestamps: false });
  
  return AnfitrionGuardado;
};