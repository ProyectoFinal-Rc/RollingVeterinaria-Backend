import { Schema, model } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    minLength: 2,
    maxLength: 20,
    required: true,
  },
  email: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 2,
    maxLength: 200,
    required: true,
  },
  tipo: {
    type: String,
    minLength: 4,
    maxLength: 20,
    required: true,
  },
});

const Usuario =  model("usuario",usuarioSchema)
export default Usuario;