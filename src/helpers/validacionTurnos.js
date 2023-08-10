import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTurno = [
    check("detalleCita")
        .notEmpty()
        .withMessage("El detalle de la cita es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
            "El detalle de la cita debe tener entre 2 y 100 caracteres como maximo"
        ),

    check("veterinario")
        .notEmpty()
        .withMessage("El veterinario es obligatorio")
        .isIn(["karen diaz", "gerardo marruecos"])
        .withMessage("Debe ingresar una categoria de veterinario valido"),

    check("mascota")
        .notEmpty()
        .withMessage("El nombre de la mascota es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
            "El nombre de la mascota debe tener entre 2 y 100 caracteres como maximo"
        ),

    check("fecha")
        .notEmpty()
        .withMessage("La fecha es obligatoria"),

    check("hora")
        .notEmpty()
        .withMessage("La hora es un campo obligatorio")
        .isIn(["8:00","8:15","8:30","8:45","9:00","9:15","9:30","9:45","10:00","10:15","10:30","10:45","11:00","11:15","11:30","11:45","12:00","12:15","12:30","12:45","17:00","17:15","17:30","17:45","18:00","18:15","18:30","18:45","19:00","19:00"])
        .withMessage("Debe ingresar una hora valida"),

    check("formaPago")
        .notEmpty()
        .withMessage("La forma de pago es un campo obligatorio")
        .isIn(["efectivo", "tarjeta"])
        .withMessage("Debe ingresar una forma de pago valida"),

    (req, res, next) => { resultadoValidacion(req, res, next) }
]

export default validarTurno;