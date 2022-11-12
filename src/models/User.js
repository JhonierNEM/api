const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    photo: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [
        "https://res.cloudinary.com/dtzesfyt1/image/upload/v1668008325/robot-image_xrpox8.png",
      ],
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    user_auth_0: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    rating: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      defaultValue: "1",
    },

    user_type: {
      type: DataTypes.ENUM("Admin", "Usuario"),
      allowNull: true,
      defaultValue: "Usuario",
    },

    id_membership: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    mobil: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },{
    timestamps:false
  })}