import Publicacion from '../models/publicacion';

// CREATE
export const crearPublicacion = async (req, res) => {
  //res.status(200).json(req.body);
  try{
    const publicacion = await Publicacion.create(req.body);
    if(publicacion){
      res.status(200).json({mensaje:'Se creo correctamente'});
    }else{
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al crear la publicacion '+error.message,
    });
  }
};

// READ
export const obtenerPublicaciones = async (req, res) => {
  try{
    const publicaciones = await Publicacion.find();
    if(publicaciones){
      res.status(200).json(publicaciones);
    }else{
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar las publicaciones '+error.message,
    });
  }
};

export const obtenerPublicacion = async (req, res) => {
  try{
    const publicacion = await Publicacion.findById(req.params.id);
    if(publicacion){
      res.status(200).json(publicacion);
    }else{
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al buscar la publicación '+error.message,
    });
  }
};

// UPDATE
export const modificarPublicacion = async (req, res) => {
  try{
    const publicacion = await Publicacion.findByIdAndUpdate(req.params.id, req.body);
    if(publicacion){
      res.status(200).json(publicacion);
    }else{
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al modificar la publicacion '+error.message,
    });
  }
};

// HABILITAR PUBLICACION - ENVIAR NOTIFICACION - MODIFICAR ESTADO
export const habilitarPublicacion = async (req, res) => {
  let d = new Date(); let n = d.toISOString();
  req.body.push_date = n;
  try{
    const publicacion = await Publicacion.findByIdAndUpdate(req.params.id, req.body);
    if(publicacion){
      res.status(200).json(publicacion);
    }else{
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al modificar la publicacion '+error.message,
    });
  }
};


// DELETE
export const eliminarPublicacion = async (req, res) => {
  try{
    //const usuario = await Publicacion.findById(req.params.id);
    const publicacion = await Publicacion.findByIdAndDelete(req.params.id);
    if(publicacion){
      res.status(200).json({mensaje:"Publicacion eliminada"});
    }else{
      res.status(404).json({mensaje:'no se encontró nada'});
    }    
  }catch(error){
    res.status(400).json({
      mensaje: 'Error al eliminar la publicacion '+error.message,
    });
  }
};
