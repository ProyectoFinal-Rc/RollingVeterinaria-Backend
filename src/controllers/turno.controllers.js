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

export const obtenerTurnos = async (req, res) => {
	try {
		const listaTurnos = await Turno.find();
		res.status(200).json(listaTurnos)
	} catch (error) {
		console.error(error);
		res.status(404).json({
			mensaje: 'Error al buscar los tunos.'
		})
	}
}

export const borrarTurno = async (req, res) => {
	try {
		await Turno.findByIdAndRemove(req.params.id)
		req.status(200).json({
			mensaje: 'El turno fue eliminado correctamente.'
		});
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al emininar el turno.'
		})
	}
}