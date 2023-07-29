import { Router } from "express";
import { loguearUsuario, checkTokenAdmin, checkTokenUser } from "../controllers/login.controllers";
import validarUsuario from "../helpers/validacionUsuario";

const router = Router();

router.route('/').post(loguearUsuario);
router.route('/check-admin').post(checkTokenAdmin);
router.route('/check').post(checkTokenUser);


export default router