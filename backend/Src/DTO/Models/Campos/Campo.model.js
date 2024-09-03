import { DataTypes } from "sequelize";
import { sequelize } from "../../Config/DB.config";

const Campo = sequelize.define("Campo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  coordinates: {
    //type: DataTypes.GEOMETRY('POINT'), hasta que se decida si usamos postgis
    type: DataTypes.STRING(255),
    allowNull: false,
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
    type: DataTypes.ENUM('Soja', 'Maiz', 'Trigo', 'Girasol', 'Sorgo', 'Otro'),
    allowNull: false,
  },
  weatherType: {
    type: DataTypes.ENUM('Cálido y Húmedo', 'Cálido y Seco', 'Templado', 'Frío y Seco', 'Frío y Húmedo', 'Montañoso', 'Mediterráneo', 'Otro'),
    allowNull: false,
  },
  administration: {
    type: DataTypes.ENUM('Propietario', 'Alquilado'),
    allowNull: false,
  },
  season: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
}, {
    tableName: 'campos',  
    timestamps: true,   
  });

export default Campo;
