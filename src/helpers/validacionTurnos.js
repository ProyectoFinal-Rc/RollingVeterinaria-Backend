import { check } from "express-validator";

const validarTurno = [
    check(detalleCita)
        .notEmpty()
        .withMessage("El detalle de la cita es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
            "El detalle de la cita debe tener entre 2 y 100 caracteres como maximo"
        ),

    check(veterinario)
    .notEmpty()
    .withMessage("El veterinario es obligatorio")
    .isIn(["karen diaz", "gerardo marruecos"])
    .withMessage("Debe ingresar una categoria de veterinario valido"),

    check(mascota)
    .notEmpty()
        .withMessage("El nombre de la mascota es obligatorio")
        .isLength({ min: 2, max: 100 })
        .withMessage(
            "El nombre de la mascota debe tener entre 2 y 100 caracteres como maximo"
        ),

    check(fecha)
    .notEmpty()
    .withMessage("La fecha es obligatoria")
    .matches(/^(?:\d{4})\/(?:0[1-9]|1[0-2])\/(?:0[1-9]|[1-2][0-9]|3[0-1])$/)
    .withMessage("La fecha debe tener el siguiente formato AAAA/MM/DD"),

    check(hora)
    .notEmpty()
    .withMessage("La hora es un campo obligatorio")
    .isIn(["8:00", "9:00", "10:00", "11:00", "12:00", "17:00", "18:00", "19:00"])
    .withMessage("Debe ingresar una hora valida"),

    check(formaPago)
    .notEmpty()
    .withMessage("La forma de pago es un campo obligatorio")
    .isIn(["efectivo", "tarjeta"])
    .withMessage("Debe ingresar una forma de pago valida"),
]

export default validarTurno;