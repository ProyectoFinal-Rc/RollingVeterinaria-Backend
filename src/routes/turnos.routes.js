import { Router } from "express";
import { crearTurno, obtenerTurnos, obtenerTurno, editarTurno, borrarTurno } from "../controllers/turno.controllers";
import validacionTurnos from "../helpers/validacionTurnos";

const router = Router();

router.route('/').get(obtenerTurnos).post(validacionTurnos,crearTurno);
router.route('/:id').get(obtenerTurno).put(validacionTurnos,editarTurno).delete(borrarTurno);


export default router