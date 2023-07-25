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

        check("email")
        .notEmpty()
        .withMessage("La email es un dato obligatorio")
        .matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
        .withMessage("El email debe tener el siguiente formato: mail@dominio.com"),

        check("direccion")
        .notEmpty()
        .withMessage("La direccion es un dato obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage(
            "La direccion debe tener entre 2 y 50 caracteres como maximo"
        ),

        
]

export default validaPaciente;