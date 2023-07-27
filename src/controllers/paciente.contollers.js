import Paciente from "../models/paciente";

export const crearPaciente = async (req, res) => {
	try {
		const PacienteNuevo = new Paciente(req.body);
		await PacienteNuevo.save();
		res.status(201).json({
			mensaje: 'El Paciente se creo con exito.'
		})
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al crear el paciente.'
		})
	}
}

export const obtenerPaciente = async (req, res) => {
	try {
		const Paciente = await Paciente.findById(req.params.id);
		res.status(200).json(Paciente);
	} catch (error) {
		console.log(error);
		res.status(404).json({
			mensaje: 'Error al buscar el paciente.'
		})
	}
}

