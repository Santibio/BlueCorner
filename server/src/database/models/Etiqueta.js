const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Etiqueta extends Model {}
Etiqueta.init(
  {
    id: {
      type: DataTypes.BIGINT(11),
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Etiqueta",
    timestamps: false,
  }
);

module.exports = Etiqueta;
