'use strict';

module.exports = (sequelize, DataTypes) => {
  const Anfitrion = sequelize.define('Anfitrion', {
   
    descripcion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    pais_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER
  
  }, { tableName: 'anfitrion', timestamps: false });
  
  return Anfitrion;
};


