import Usuario from "../models/usuario";
import { genSaltSync, hashSync } from "bcryptjs";

// CREATE
export const crearUsuario = async (req, res) => {
  try {
    const salt = genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);
    const usuario = await Usuario.create(req.body);
    if (usuario) {
      console.log("se creó");
      res.status(200).json({ mensaje: "Se creo correctamente" });
    } else {
      console.log("no se creó");
      res.status(404).json({ mensaje: "no se encontró nada" });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al crear el usuario " + error.message,
    });
  }
};

// READ
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find().select("-password");
    if (usuarios) {
      res.status(200).json(usuarios);
    } else {
      res.status(404).json({ mensaje: "no se encontró nada" });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al buscar los usuarios " + error.message,
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id).select("-password");
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ mensaje: "no se encontró nada" });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al buscar el usuario " + error.message,
    });
  }
};

// UPDATE
export const modificarUsuario = async (req, res) => {
  try {
    const salt = genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);
    const usuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body
    ).select("-password");
    if (usuario) {
      res.status(200).json({
        mensaje:"Se modificó correctamente"
      });
    } else {
      res.status(404).json({ mensaje: "no se encontró nada" });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al modificar el usuario " + error.message,
    });
  }
};

// DELETE
export const eliminarUsuario = async (req, res) => {
  try {
    //const usuario = await Usuario.findById(req.params.id);
    const usuario = await Usuario.findByIdAndDelete(req.params.id);
    if (usuario) {
      res.status(200).json({mensaje:"Se eliminó correctamente"});
    } else {
      res.status(404).json({ mensaje: "no se encontró nada" });
    }
  } catch (error) {
    res.status(400).json({
      mensaje: "Error al eliminar la usuario " + error.message,
    });
  }
};
