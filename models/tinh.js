'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tinh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tinh.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tinh',
  });
  Tinh.associate = function(models){
    Tinh.hasMany(models.Huyen, {foreignKey: 'tinh_id'});
  };
  return Tinh;
};