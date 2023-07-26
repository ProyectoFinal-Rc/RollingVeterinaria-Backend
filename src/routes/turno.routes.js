import { Router } from 'express';
import { crearTurno } from '../controllers/turno.controllers'

const router = Router()

router.route('/').post(crearTurno)

export default router