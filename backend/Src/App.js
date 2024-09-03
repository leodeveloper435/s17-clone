<<<<<<< HEAD
import express from "express"
import Session from "express-session"
import dotenv from "dotenv"
import morgan from "morgan";
import AuthRouter from "./Routes/Auth/Auth.routes.js"
import { __dirname } from "./Utils/RouteAbsolute.util.js"
import path from 'path'


import swaggerjsdoc from 'swagger-jsdoc'
import swaggerui from 'swagger-ui-express'


//Config to Express
const app = express()
const PORT = process.env.PORT || 3000
const swaggerSpec ={
    definition:{
       "openapi":"3.0.0",
        info:{
            title:"Sistema AgroSmart API",
            version:"1.0.0",            
        },
        servers:[
            {
                url:"https://agrosmart-e664.onrender.com/",
            }
        ]

    },
    apis: [path.resolve(__dirname, '../Routes/Auth/*.js')],
}

const swagger = swaggerjsdoc(swaggerSpec);
=======
import express from "express";
import Session from "express-session";
import dotenv from "dotenv";
import AuthRouter from "./Routes/Auth/Auth.routes.js";
import { __dirname } from "./Utils/RouteAbsolute.util.js";
import cors from "cors";
import Clima from "./Routes/Clima.routes.js";

//Config to Express
const app = express();
const PORT = process.env.PORT || 3000;
>>>>>>> fb3b3a4c550e7bd6f9b2435fc28461997893de6c

//Middlewares Global
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
<<<<<<< HEAD
dotenv.config()
app.use(morgan("dev"));
app.use('/api/doc', swaggerui.serve, swaggerui.setup(swagger));
=======
dotenv.config();

>>>>>>> fb3b3a4c550e7bd6f9b2435fc28461997893de6c
//Cookies
app.use(
  Session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 24 * 7 },
  })
);

app.use("/api/v0/auth", AuthRouter);
app.use("/api/v0/clima", Clima);

app.listen(PORT, () => {
  console.log(`Server Running On port ${PORT}`);
});
