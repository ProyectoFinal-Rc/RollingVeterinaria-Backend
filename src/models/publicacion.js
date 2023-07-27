import { Schema, model } from 'mongoose';

/* 
    "titulo":
    "contenido":
    "url":
    "imagen":
    "fecha":
    "notificado":
    "tags":
    "estado":
*/

const publicacionSchema = new Schema({
    titulo:{
        type: String,
        minLength:2,
        maxLength:20,
        required:true
    },
    contenido:{
        type: String,
        minLength:10,
        maxLength:550,
        required:true,
    },
    url:{
        type: String,
        minLength:10,
        maxLength:550,
    },
    imagen:{
        type: String,
        minLength:10,
        maxLength:550,
        required:false,
    },
    push_date:{
        type: Date,
        required:false
    },
    tags: [{ 
        type: String,
        validate: {
          validator: function(v,x,z) {
              return !(this.tags.length > 3);  
          }, 
          message: props => `${props.value} exceeds maximum array size (10)!`
        },
        required: true
    }],
    /*tags:{
        type: String,
        minLength:4,
        maxLength:20,
        required:true
    },*/
    push:{
        type: Boolean,
        required:false,
        default: false
    }
}, { timestamps: true });

const Publicacion = model('publicacion',publicacionSchema);
export default Publicacion;