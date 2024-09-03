import { DataTypes } from "sequelize";
import { sequelize } from "../../../Config/DB.config.js";
import User from "../Users/User.model.js"

const Campo = sequelize.define(
  "Campo",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    // coordinates: {
    //   //type: DataTypes.GEOMETRY('POINT'), hasta que se decida si usamos postgis
    //   type: DataTypes.STRING(255),
    //   allowNull: false,
    // },
    latitude: {
      type: DataTypes.DECIMAL(10, 8),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.DECIMAL(11, 8),
      allowNull: true,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    workersAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mainCrop: {
      type: DataTypes.ENUM("Soja", "Maiz", "Trigo", "Girasol", "Sorgo", "Otro"),
      allowNull: false,
    },
    weatherType: {
      type: DataTypes.ENUM(
        "Cálido y Húmedo",
        "Cálido y Seco",
        "Templado",
        "Frío y Seco",
        "Frío y Húmedo",
        "Montañoso",
        "Mediterráneo",
        "Otro"
      ),
      allowNull: false,
    },
    administration: {
      type: DataTypes.ENUM("Propietario", "Alquilado"),
      allowNull: false,
    },
    season: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "campos",
    timestamps: true,
  }
);

export default Campo;
