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

]

export default validarTurno;