import { validationResult } from "express-validator";
import Usuario from "../models/usuario";
import { sign, verify } from "jsonwebtoken";
import { genSaltSync, hashSync, compare, compareSync } from "bcryptjs";
import { adminTokenStatus, userTokenStatus } from "../helpers/tokenFunctions";

export const loguearUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });
    if (usuario) {
      if (compareSync(req.body.password, usuario.password)) {
        let token = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 4,
            data: {
              nombreUsuario: usuario.nombreUsuario,
              email: usuario.email,
              tipo: usuario.tipo,
            },
          },
          process.env.SECRET_KEY
        );
        if (token) {
          res.status(200).json({ mensaje: "contraseña ok", token,usuario, error:false });
        } else {
          res.status(500).json({ mensaje: "error al generer token", error:true });
        }
      } else {
        res.status(401).json({ mensaje: "contraseña incorrecta", error:true });
      }
    } else {
      res.status(404).json({ mensaje: "no se encontró usuario", error:true });
    }
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al consultar datos: " + error.message, error:true
    });
  }
};

export const checkTokenAdmin = async (req, res) => {
  try {
    if (adminTokenStatus(req.headers["x-token"], process.env.SECRET_KEY)) {
      res.status(200).json({ mensaje: "token valido", error:false });
    } else {
      res
        .status(401)
        .json({ mensaje: "token invalido / error al decodificar token" , error:true});
    }
  } catch (err) {
    res.status(500).json({ mensaje: "error interno / token invalido: " + err , error:true});
  }
};

export const checkTokenUser = async (req, res) => {
  try {
    if (userTokenStatus(req.headers["x-token"], process.env.SECRET_KEY)) {
      res.status(200).json({ mensaje: "token valido", error:false });
    } else {
      res
        .status(401)
        .json({ mensaje: "token invalido / error al decodificar token", error:true });
    }
  } catch (err) {
    res.status(500).json({ mensaje: "error interno / token invalido: " + err ,error:true});
  }
};
