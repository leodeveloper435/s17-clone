import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize(process.env.DB_URI, {
  dialect: "postgres", 
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false,
    },
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa.");
  })
  .catch((err) => {
    console.error("No se pudo conectar a la base de datos:");
  });

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas correctamente.");
  })
  .catch((error) => {
    console.error("Error al sincronizar la base de datos:", error);
  });
