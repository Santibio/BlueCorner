const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Producto extends Model {}
Producto.init(
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
    modelName: "Producto",
    timestamps: false,
  }
);


module.exports = Producto;
