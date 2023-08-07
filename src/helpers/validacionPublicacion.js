import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check("titulo")
      .notEmpty()
      .withMessage("El titulo es obligatorio")
      .isLength({ min: 2, max: 20 })
      .withMessage("El titulo debe tener entre 2 y 20 caracteres como maximo"),
    check('contenido')
        .notEmpty()
        .withMessage('El contenido es obligatorio')
        .isLength({ min: 10, max: 550 })
        .withMessage("El contenido debe tener entre 10 y 100 caracteres como maximo"),
    check('imagen')
        .notEmpty()
        .withMessage("La imagen es obligatoria")
        .isLength({ min: 10, max: 550 })
        .withMessage("La imagen debe tener entre 8 y 20 caracteres como maximo"),
    check('tags')
        .custom((value)=>{
            if (Array.isArray(value) && value.length <= 3) {
                return true;
            }
        }),
    (req, res, next )=>{ resultadoValidacion(req, res, next) }
  ]

  export default validarTarea;
