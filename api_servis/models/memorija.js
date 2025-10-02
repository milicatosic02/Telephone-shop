'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Memorija extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Telefon, {foreignKey: "memorija_id", as: "memorija"});
    }
  }
  Memorija.init({
    velicina: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Memorija',
  });
  return Memorija;
};