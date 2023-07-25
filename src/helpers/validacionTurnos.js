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
    .withMessage("Debe ingresar una categoria valida"),

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
    .withMessage("La fecha debe tener el siguiente formato AAAA/MM/DD")

]

export default validarTurno;