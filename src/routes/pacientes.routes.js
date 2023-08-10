import { Router } from "express";
import { crearPaciente, obtenerPacientes, obtenerPaciente, editarPaciente, borrarPaciente } from "../controllers/paciente.contollers";
import validacionPacientes from "../helpers/validacionPacientes";

const router = Router();

router.route('/').get(obtenerPacientes).post(validacionPacientes,crearPaciente);
router.route('/:id').get(obtenerPaciente).put(validacionPacientes,editarPaciente).delete(borrarPaciente);


export default router