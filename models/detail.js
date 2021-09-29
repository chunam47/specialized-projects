'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  detail.init({
    title: DataTypes.TEXT,
    address: DataTypes.STRING,
    location: DataTypes.STRING,
    price: DataTypes.STRING,
    area: DataTypes.STRING,
    images: DataTypes.TEXT,
    desc: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detail',
  });
  detail.associate = function(models){
  };
  return detail;
};