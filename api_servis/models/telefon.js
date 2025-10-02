'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telefon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Brend, {foreignKey: "brend_id", as:"brend"});
      this.belongsTo(models.Memorija, {foreignKey: "memorija_id", as:"memorija"});
      this.hasMany(models.StavkaNarudzbine, {foreignKey: "telefon_id", as:"stavke"});
      this.belongsToMany(models.Boja, {foreignKey: "telefon_id", as: "boje", through: "TelefonBoja"});
    }
  }
  Telefon.init({
    naziv: DataTypes.STRING,
    opis: DataTypes.STRING,
    cena: DataTypes.INTEGER,
    kolicina: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Telefon',
  });
  return Telefon;
};