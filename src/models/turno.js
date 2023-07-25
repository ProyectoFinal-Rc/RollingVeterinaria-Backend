import { Schema, model } from "mongoose";

const turnoSchema = new Schema(
	{
		detalleCita: {
			type: String,
			minLength: 2,
			maxLength: 100,
			required: true
		},
		veterinario: {
			type: String,
			min: 5,
			max: 100,
			required: true
		},
		mascota: {
			type: String,
			min: 2,
			max: 100,
			required: true
		},
		fecha: {
			type: Date,
			required: true
		},
		hora: {
			type: Date,
			required: true
		},
		formaPago: {
			type: String,
			require: true
		}
	}
)

const Turno = model('turno',turnoSchema);

export default Turno;