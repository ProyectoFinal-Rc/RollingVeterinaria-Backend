import express from "express"
import cors from "cors"
import morgan from "morgan"
import mongoose from "mongoose"
import  path  from "path"
import loginRouter from './src/routes/login.routes'
import usuariosRouter from './src/routes/usuarios.routes'
import publicacionRouter from './src/routes/publicaciones.routes'
import turnosRouter from "./src/routes/turnos.routes"
import pacientesRouter from "./src/routes/pacientes.routes"

import 'dotenv/config'
import "./src/database/dbConnection"


const app = express();
app.set("port",process.env.PORT || 4000);
app.listen(app.get("port"),()=>{
console.log("En el puerto"+app.get("port"))
})

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"/public")))

app.use('/api/auth', loginRouter)
app.use('/api/usuario', usuariosRouter)
app.use('/api/publicacion', publicacionRouter)
app.use("/api/turnos",turnosRouter)
app.use("/api/pacientes",pacientesRouter)
