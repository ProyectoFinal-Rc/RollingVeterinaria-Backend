import express from "express"
import cors from "cors"
import morgan from "morgan"
import mongoose from "mongoose"
import  path  from "path"
import 'dotenv/config'
import "./src/database/db"

//Confg de puertos
const app = express();
app.set("port",process.env.PORT || 4000);
app.listen(app.get("port"),()=>{
console.log("En el puerto"+app.get("port"))
})
//Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"/public")))
//Rutas
//http:/localhost:4000/