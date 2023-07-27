import { Router } from "express";
import { crearPaciente, obtenerPacientes, obtenerPaciente, editarPaciente, borrarPaciente } from "../controllers/paciente.contollers";
import validacionPacientes from "../helpers/validacionPacientes";

const router = Router();

router.route('/nuevo').post(validacionPacientes,crearPaciente);
router.route('/').get(obtenerPacientes);
router.route('/:id').get(obtenerPaciente).put(validacionPacientes,editarPaciente).delete(borrarPaciente);


export default router