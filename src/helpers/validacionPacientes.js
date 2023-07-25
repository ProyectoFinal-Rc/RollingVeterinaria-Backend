import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validaPaciente = [

    check("nombreDuenio")
        .notEmpty()
        .withMessage("El nombre del dueño es un dato obligatorio")
        .isLength({ min: 2, max: 30 })
        .withMessage(
            "El nombre del dueño debe tener entre 2 y 30 caracteres como maximo"
        ),

    check("apellidoDuenio")
        .notEmpty()
        .withMessage("El apellido del dueño es un dato obligatorio")
        .isLength({ min: 2, max: 30 })
        .withMessage(
            "El apellido del dueño debe tener entre 2 y 30 caracteres como maximo"
        ),

    
]

export default validaPaciente;