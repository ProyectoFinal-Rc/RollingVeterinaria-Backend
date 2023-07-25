import { Schema, model } from "mongoose";

const pacienteSchema = new Schema({
  nombreDuenio: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  apellidoDuenio: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    minLength: 5,
    maxLength: 256,
    required: true,
  },
  direccion: {
    type: String,
    minLength: 2,
    maxLength: 50,
    required: true,
  },
  nombreMascota: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
  raza: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  fechaNacimiento: {
    type: date,
    required: true,
  },
  peso: {
    type: number,
    minLength: 1,
    maxLength: 100,
    required: true,
  },
  plan: {
    type: String,
    minLength: 2,
    maxLength: 30,
    required: true,
  },
});

const Paciente = model("paciente", pacienteSchema);
export default Paciente;
