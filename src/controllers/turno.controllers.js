import Turno from "../models/turno";

export const crearTurno = async (req, res) => {
	try {
		const turnoNuevo = new Turno(req.body);
		await turnoNuevo.save();
		res.status(201).json({
			mensaje: 'El turno se creo con exito.'
		})
	} catch (error) {
		res.status(404).json({
			mensaje: 'Error al crear el turno: '+error.message
		})
	}
}

export const obtenerTurno = async (req, res) => {
	try {
		const turno = await Turno.findById(req.params.id);
		if(turno){
			res.status(200).json(turno);
		}else{
			res.status(404).json({mensaje:"No se econtró coincidencia"});
		}
		
	} catch (error) {
		res.status(500).json({
			mensaje: 'Error al buscar el turno: '+error.message
		})
	}
}

export const obtenerTurnos = async (req, res) => {
	try {
		const listaTurnos = await Turno.find();
		if(listaTurnos){
			res.status(200).json(listaTurnos)
		}else{
			res.status(404).json({mensaje: "no se encontraron coincidencias"})
		}
		
	} catch (error) {
		res.status(500).json({
			mensaje: 'Error al buscar los tunos: '+error.message
		})
	}
}

export const editarTurno = async (req, res) => {
	try {
		let resp = await Turno.findByIdAndUpdate(req.params.id, req.body);
		if(resp){
			res.status(200).json({mensaje: 'El turno se modifico correctamente.'})
		}else{
			res.status(404).json({mensaje: 'No se encontró turno'})
		}
		
	} catch (error) {
		res.status(500).json({
			mensaje: 'Error al intentar editar el turno: '+error.message
		})
	}
}

export const borrarTurno = async (req, res) => {
	try {
		let resp = await Turno.findByIdAndRemove(req.params.id)
		if(resp){
			res.status(200).json({mensaje: 'El turno fue eliminado correctamente.'});
		}else{
			res.status(404).json({mensaje: 'No se encontró turno.'});
		}
		
	} catch (error) {
		res.status(404).json({
			mensaje: 'Error al emininar el turno: '+error.message
		})
	}
}