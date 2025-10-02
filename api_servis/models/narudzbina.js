'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Narudzbina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Narudzbina.init({
    vreme_narucivanja: DataTypes.DATE,
    zakazano_vreme: DataTypes.DATE,
    status: DataTypes.STRING,
    adresa: DataTypes.STRING,
    broj_telefona: DataTypes.STRING,
    ime_prezime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Narudzbina',
  });
  return Narudzbina;
};