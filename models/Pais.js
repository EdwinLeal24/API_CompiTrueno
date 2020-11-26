'use strict';

module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define('Pais', {
   
    nombre: DataTypes.STRING
  
  }, { tableName: 'pais', timestamps: false });
  
  return Pais;
};


