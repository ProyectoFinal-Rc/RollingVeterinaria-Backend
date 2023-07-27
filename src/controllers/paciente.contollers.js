import Turno from "../models/turno";

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