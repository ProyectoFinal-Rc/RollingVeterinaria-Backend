import { Router } from "express";
import { loguearUsuario, checkTokenAdmin, checkTokenUser } from "../controllers/login.controllers";

const router = Router();

router.route('/').post(loguearUsuario);
router.route('/check-admin').post(checkTokenAdmin);
router.route('/check').post(checkTokenUser);


export default router