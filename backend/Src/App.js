import express from "express";
import Session from "express-session";
import dotenv from "dotenv";
import AuthRouter from "./Routes/Auth/Auth.routes.js";
import { router as campoRouter } from "../Src/Routes/Campo/Campo.routes.js";
import { __dirname } from "./Utils/RouteAbsolute.util.js";
import cors from "cors";

//Config to Express
const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares Global
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
dotenv.config();

//Cookies
app.use(
  Session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 24 * 7 },
  })
);

app.use("/api/v0", AuthRouter);
app.use("/api/v0/campo", campoRouter);

app.listen(PORT, () => {
  console.log(`Server Running On port ${PORT}`);
});
