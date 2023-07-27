import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarTarea = [
    check("push")
      .notEmpty()
      .withMessage("El valor de activacion es obligatorio"),
    (req, res, next )=>{ resultadoValidacion(req, res, next) }
  ]

  export default validarTarea;
