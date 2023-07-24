import { validationResult } from 'express-validator';
import Usuario from '../models/usuario';
import {sign, verify} from "jsonwebtoken"
import {genSaltSync, hashSync, compare, compareSync} from "bcryptjs"
import { adminTokenStatus, userTokenStatus } from '../helpers/tokenFunctions';

// CREATE
export const loguearUsuario = async (req, res) => {
  console.log(req.body);
  try{
    const usuario = await Usuario.findOne({'email':req.body.email});
    if(usuario){      
      if(compareSync(req.body.password,usuario.password)){
        let token = sign({
          exp: Math.floor(Date.now() / 1000) + (60*60*4),//60 * 60 * 12 = 12hs
          data: {
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            tipo: usuario.tipo,
          }
        }, process.env.SECRET_KEY);
        if(token){
          res.status(200).json({mensaje:'contraseña ok', token});
        }else{
          res.status(500).json({mensaje:'error al generer token'});
        }        
      }else{
        res.status(401).json({mensaje:'contraseña incorrecta'});
      }      
      
    }else{
      console.log('no se creó');
      res.status(404).json({mensaje:'no se encontró usuario'});
    }    
  }catch(error){
    res.status(500).json({
      mensaje: 'Error al consultar datos: '+error.message,
    });
  }
};


export const checkTokenAdmin = async (req, res) => {  
  try {
    if(adminTokenStatus(req.headers['x-token'], process.env.SECRET_KEY)){
      res.status(200).json({mensaje: 'token valido'});
    }else{
      res.status(401).json({mensaje: 'token invalido / error al decodificar token'});
    }
  } catch(err) {
      res.status(500).json({mensaje:'error interno / token invalido: '+err});
  }  
}

export const checkTokenUser = async (req, res) => {  
  try {
    if(userTokenStatus(req.headers['x-token'], process.env.SECRET_KEY)){
      res.status(200).json({mensaje: 'token valido'});
    }else{
      res.status(401).json({mensaje: 'token invalido / error al decodificar token'});
    }
  } catch(err) {
      res.status(500).json({mensaje:'error interno / token invalido: '+err});
  }  
}