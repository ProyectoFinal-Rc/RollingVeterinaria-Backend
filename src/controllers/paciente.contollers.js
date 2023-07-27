import Paciente from "../models/paciente";

export const crearPaciente = async (req, res) => {
  try {
    const PacienteNuevo = new Paciente(req.body);
    await PacienteNuevo.save();
    res.status(201).json({
      mensaje: "El Paciente se creo con exito.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el paciente.",
    });
  }
};

export const obtenerPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.status(200).json(paciente);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar el paciente.",
    });
  }
};

export const obtenerPacientes = async (req, res) => {
  try {
    const listaPacientes = await Paciente.find();
    res.status(200).json(listaPacientes);
  } catch (error) {
    console.error(error);
    res.status(404).json({
      mensaje: "Error al buscar los pacientes.",
    });
  }
};

export const editarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El paciente se modifico correctamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar editar el paciente.",
    });
  }
};

export const borrarPaciente = async (req, res) => {
  try {
    await Paciente.findByIdAndRemove(req.params.id);
    res.status(200).json({
      mensaje: "El paciente fue eliminado correctamente.",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al eliminar el paciente.",
    });
  }
};
