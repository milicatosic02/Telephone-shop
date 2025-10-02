'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Boja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Telefon, {foreignKey: "boja_id", as: "telefoni", through:"TelefonBoja"})
    }
  }
  Boja.init({
    ime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Boja',
  });
  return Boja;
};