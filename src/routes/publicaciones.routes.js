import { Router } from "express";
import { crearPublicacion, obtenerPublicaciones, obtenerPublicacion, modificarPublicacion, eliminarPublicacion, habilitarPublicacion } from "../controllers/publicaciones.controllers";
import validarPublicacion from "../helpers/validacionPublicacion";
import validacionPush from "../helpers/validacionPush";

const router = Router();

router.route('/').post(validarPublicacion,crearPublicacion);//validarPublicacion
router.route('/').get(obtenerPublicaciones);
router.route('/:id').get(obtenerPublicacion).put(validarPublicacion,modificarPublicacion).delete(eliminarPublicacion);
router.route('/push/:id').put(validacionPush,habilitarPublicacion);


export default router