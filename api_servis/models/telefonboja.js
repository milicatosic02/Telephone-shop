'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TelefonBoja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TelefonBoja.init({
    polje: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TelefonBoja',
  });
  return TelefonBoja;
};