'use strict';

module.exports = (sequelize, DataTypes) => {
  const vista_viajeros = sequelize.define('vista_viajeros', {
   
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    foto: DataTypes.STRING,
    nacimiento: DataTypes.DATE,
    estrellitas: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    fecha: DataTypes.DATE,
    presupuesto: DataTypes.INTEGER,
  
  }, { tableName: 'vista_viajeros', timestamps: false });
  
  return vista_viajeros;
};
