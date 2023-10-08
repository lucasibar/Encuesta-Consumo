const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
  sequelize.define('Days', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    },
    number: {
      type:DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    actualDay: {
      type: DataTypes.BOOLEAN,
      default: false
    }
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
};

