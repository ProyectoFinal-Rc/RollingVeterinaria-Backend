import { Router } from "express";
import { crearTurno, obtenerTurnos, obtenerTurno, editarTurno, borrarTurno } from "../controllers/turno.controllers";
import validacionTurnos from "../helpers/validacionTurnos";

const router = Router();

router.route('/crear').post(validacionTurnos,crearTurno);
router.route('/').get(obtenerTurnos);
router.route('/:id').get(obtenerTurno).put(validacionTurnos,editarTurno).delete(borrarTurno);


export default router