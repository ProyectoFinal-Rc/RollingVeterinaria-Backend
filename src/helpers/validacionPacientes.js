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

        check("nombreMascota")
        .notEmpty()
        .withMessage("El nombre de la mascota es un dato obligatorio")
        .isLength({ min: 2, max: 30 })
        .withMessage(
            "El nombre de la mascota debe tener entre 2 y 30 caracteres como maximo"
        ),

        check("especie")
        .notEmpty()
        .withMessage("La especie es un campo obligatorio")
        .isIn(["mamiferos", "aves", "reptiles", "peces"])
        .withMessage("Debe ingresar una especie valida"),

        check("raza")
        .notEmpty()
        .withMessage("La raza de la mascota es un dato obligatorio")
        .isLength({ min: 2, max: 30 })
        .withMessage(
            "La raza de la mascota debe tener entre 2 y 30 caracteres como maximo"
        ),

        check("fechaNacimiento")
        .notEmpty()
        .withMessage("La fecha de nacimiento es obligatoria")
        .matches(/^(?:\d{4})\/(?:0[1-9]|1[0-2])\/(?:0[1-9]|[1-2][0-9]|3[0-1])$/)
        .withMessage("La fecha de nacimiento debe tener el siguiente formato AAAA/MM/DD"),

        check("peso")
        .notEmpty()
        .withMessage('El peso es un dato obligatorio')
        .isNumeric()
        .withMessage('El peso debe ser un número')
        .custom(((value)=>{
          if( value >= 1 && value<=100){
            return true;
          }else{
            throw new Error('El peso debe estar entre 1 y 100')
          }
        })),

        
]

export default validaPaciente;