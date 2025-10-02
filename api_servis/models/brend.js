'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Telefon, {foreignKey: "brend_id", as: "brend"});
    }
  }
  Brend.init({
    naziv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Brend',
  });
  return Brend;
};