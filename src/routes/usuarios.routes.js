import { Router } from "express";
import { crearUsuario, obtenerUsuarios, obtenerUsuario, modificarUsuario, eliminarUsuario } from "../controllers/usuarios.controllers";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();

router.route('/nuevo').post(validarUsuario,crearUsuario);
router.route('/').get(obtenerUsuarios);
router.route('/:id').get(obtenerUsuario).put(validarUsuario,modificarUsuario).delete(eliminarUsuario);


export default router