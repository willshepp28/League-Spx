'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class League extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  League.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    encrypted_password: {
      type: DataTypes.TEXT,
      allowNull: false 
    },
    website_url: DataTypes.TEXT,
    coordinates:{
      type: DataTypes.GEOMETRY("POINT", 4326),
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    total_players: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'League',
  });
  return League;
};