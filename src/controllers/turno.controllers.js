import Turno from "../models/turno";

export const crearTurno = async (req, res) => {
	try {
		const turnoNuevo = new Turno(req.body);
		await turnoNuevo.save();
		res.status(201).json({
			mensaje: 'El turno se creo con exito.'
		})
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al crear el turno.'
		})
	}
}