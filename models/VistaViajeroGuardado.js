'use strict';

module.exports = (sequelize, DataTypes) => {
  const ViajeroGuardado = sequelize.define('VistaViajeroGuardado', {
   
    usuario_id: DataTypes.INTEGER,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: false
    },
    pais_id: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    foto: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    presupuesto: DataTypes.INTEGER,
    estrellitas: DataTypes.INTEGER
  
  }, { tableName: 'vista_viajeros_guardados', timestamps: false });
  
  return ViajeroGuardado;
};