'use strict';
const { src } = require('gulp');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  search.init({
    image: DataTypes.TEXT,
    date: DataTypes.STRING,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    area: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'search',
  });
  search.associate = function(models){
  };
  return search;
};