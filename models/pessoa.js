'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pessoa extends Model {
    static associate(models) {
    }
  }
  pessoa.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    idade: DataTypes.REAL,
    altura: DataTypes.REAL
  }, {
    sequelize,
    modelName: 'pessoa',
  });
  return pessoa;
};