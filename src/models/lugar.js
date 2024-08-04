'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lugar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Lugar.init({
    titulo: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    descricao: { type: DataTypes.TEXT, allowNull: false },
    cidade: { type: DataTypes.STRING(30), allowNull: false },
    url_imagem: { type: DataTypes.STRING(200) },
    url_mapa: { type: DataTypes.STRING(200) }
    },
    {
    sequelize,
    modelName: 'Lugar',
    tableName: 'tb_lugares'
    }
    );
  return Lugar;
};