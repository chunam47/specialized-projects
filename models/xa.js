'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Xa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Xa.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Xa',
  });
  Xa.associate = function(models){
    Xa.belongsTo(models.Huyen, {foreignKey: 'huyen_id'});
  };
  return Xa;
};