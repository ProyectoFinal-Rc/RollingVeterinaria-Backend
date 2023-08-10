import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check("nombreUsuario")
        .notEmpty()
        .withMessage("El nombre de usuario es obligatorio")
        .isLength({ min: 2, max: 20 })
        .withMessage("El nombre de usuario debe tener entre 2 y 20 caracteres como maximo"),
    check('email')
        .notEmpty()
        .withMessage('El email es un obligatorio')
        .isLength({ min: 2, max: 30 })
        .withMessage("El email debe tener entre 10 y 100 caracteres como maximo"),
    check('password')
        .notEmpty()
        .withMessage("El password es obligatorio")
        .isLength({ min: 8, max: 20 })
        .withMessage("El password debe tener entre 8 y 20 caracteres como maximo"),
    check('tipo')
        .notEmpty()
        .withMessage("El tipo es obligatorio")
        .isLength({ min: 4, max: 20 })
        .withMessage("El tipo debe tener entre 4 y 20 caracteres como maximo"),
    (req, res, next) => { resultadoValidacion(req, res, next) }
]

export default validarTarea;
