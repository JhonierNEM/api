const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("city", {
    idCity: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },{
    timestamps:false,
  })}
