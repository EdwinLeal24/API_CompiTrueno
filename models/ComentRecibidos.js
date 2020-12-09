'use strict';

module.exports = (sequelize, DataTypes) => {

    const ComentRecibidos = sequelize.define('ComentRecibidos', {

        nombre: DataTypes.STRING,
        nacimiento: DataTypes.DATE,
        foto: DataTypes.STRING,
        texto: DataTypes.STRING,
        estrellitas: DataTypes.INTEGER,
        receptor_id: DataTypes.INTEGER
        
    }, { tableName: 'vista_coment_reci', timestamps: false });

    return ComentRecibidos;
};