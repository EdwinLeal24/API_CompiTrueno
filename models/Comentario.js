'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comentario = sequelize.define('Comentario', {
   
    texto: DataTypes.STRING,
    estrellitas: DataTypes.INTEGER,
    emisor_id: DataTypes.INTEGER,
    receptor_id: DataTypes.INTEGER,
  
  }, { tableName: 'comentario', timestamps: false });
  
  return Comentario;
};