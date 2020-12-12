'use strict';

module.exports = (sequelize, DataTypes) => {
  const AnfitrionGuardado = sequelize.define('AnfitrionGuardado', {
   
    usuario_id: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false
    },
    pais_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    foto: DataTypes.STRING,
    estrellitas: DataTypes.INTEGER,
    ciudad: DataTypes.STRING,
    descripcion: DataTypes.STRING
  
  }, { tableName: 'vista_anfitriones_guardados', timestamps: false });
  
  return AnfitrionGuardado;
};