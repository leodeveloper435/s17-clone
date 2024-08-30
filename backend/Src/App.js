import express from "express"
import Session from "express-session"
import dotenv from "dotenv"
import AuthRouter from "./Routes/Auth/Auth.routes.js"
import AuthFsRouter from "./Routes/Auth/Auth.fs.routes.js"
//Config to Express
const app = express()
const PORT = process.env.PORT || 3000

//Middlewares Global
app.use(express.json())
app.use(express.urlencoded({extended : true}))
dotenv.config()

//Cookies
app.use(Session({
    secret : process.env.SESSION_SECRET,
    resave : false,
    saveUninitialized : false,
    cookie : {maxAge : 1000 * 60 * 24 * 7}
    
}))


app.use("/api/v0",AuthRouter)
app.use("/api",AuthFsRouter)

app.listen(PORT,()=>{
    console.log(`Server Running On port ${PORT}`)
})