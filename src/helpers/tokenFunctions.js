import { verify } from "jsonwebtoken";
export function userTokenStatus(token, llave){
    try {
        const decoded = verify(token, llave);
        if(decoded){
          if(decoded.data.tipo == 'comun'){
            return true;
          }else{
            return false;
          }
        }
    } catch(err) {
          return false;
    }
}

export function adminTokenStatus(token, llave){
  try {
      const decoded = verify(token, llave);
      if(decoded){
        if(decoded.data.tipo == 'admin'){
          return true;
        }else{
          return false;
        }        
      }
  } catch(err) {
        return false;
  }
}

export function administrativeTokenStatus(token, llave){
  try {
      const decoded = verify(token, llave);
      if(decoded){
        if(decoded.data.tipo == 'administrativo'){
          return true;
        }else{
          return false;
        }        
      }
  } catch(err) {
        return false;
  }
}