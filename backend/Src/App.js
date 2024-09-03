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

//Middlewares Global
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(express.static(__dirname + "/public"));
dotenv.config()
app.use(morgan("dev"));
app.use('/api/doc', swaggerui.serve, swaggerui.setup(swagger));
//Cookies
app.use(Session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false,
    cookie : {maxAge : 1000 * 60 * 24 * 7}
    
}))


app.use("/api/v0",AuthRouter)


app.listen(PORT,()=>{
    console.log(`Server Running On port ${PORT}`)
})