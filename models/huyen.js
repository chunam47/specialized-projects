'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Huyen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Huyen.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Huyen',
  });
  Huyen.associate = function(models){
    Huyen.belongsTo(models.Tinh, {foreignKey: 'tinh_id'});
    Huyen.hasMany(models.Xa, {foreignKey: 'huyen_id'});
  };
  return Huyen;
};