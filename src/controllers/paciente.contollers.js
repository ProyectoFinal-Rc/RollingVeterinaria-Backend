import Paciente from "../models/paciente";

export const crearPaciente = async (req, res) => {
  try {
    const PacienteNuevo = new Paciente(req.body);
    await PacienteNuevo.save();
    res.status(201).json({
      mensaje: "El Paciente se creo con exito.",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear el paciente: "+error.message,
    });
  }
};

export const obtenerPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findById(req.params.id);

    if(paciente){
      res.status(200).json(paciente);
		}else{
			res.status(404).json({mensaje:"No se econtró coincidencia"});
		}
    
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al buscar el paciente: "+error.message,
    });
  }
};

export const obtenerPacientes = async (req, res) => {
  try {
    const listaPacientes = await Paciente.find();
    if(listaPacientes){
      res.status(200).json(listaPacientes);
    }else{
      res.status(404).json({mensaje:"No se encontraron pacientes"});
    }
    
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al buscar los pacientes: "+error.message,
    });
  }
};

export const editarPaciente = async (req, res) => {
  try {
    let resp = await Paciente.findByIdAndUpdate(req.params.id, req.body);
    if(resp){
      res.status(200).json({mensaje: "El paciente se modifico correctamente."});
    }else{
      res.status(404).json({mensaje: "No se encontró el paciente."});
    }    
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al intentar editar el paciente: "+error.message,
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
    res.status(500).json({
      mensaje: "Error al eliminar el paciente: "+error.message,
    });
  }
};
