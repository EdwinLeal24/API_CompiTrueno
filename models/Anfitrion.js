'use strict';

module.exports = (sequelize, DataTypes) => {
  const Anfitrion = sequelize.define('Anfitrion', {
   
    descripcion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    pais_id: DataTypes.INT,
    usuario_id: DataTypes.INT
  
  }, { tableName: 'anfitrion', timestamps: false });
  
  return Anfitrion;
};


