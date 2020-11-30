'use strict';

module.exports = (sequelize, DataTypes) => {
 
  const Foto = sequelize.define('Foto', {

    url: DataTypes.STRING,
    pais_id: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER

  }, { tableName: 'foto', timestamps: false});
  
  return Foto;

  
};


