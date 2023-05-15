import { API_URL } from '../config';


//!BORRAR ESTE IMPORT DE DATOS.
import { planDeTrabajo as pTEjemplo } from "../../datos";

class AdminActividades {
    //*Constructores
    constructor() { }
    //*Metodos
    async crearActividad(DTOActividad) {//TODO
        //Hacer peticion a API.
        //Tomar los datos del json y se debe instanciar una Activiadad para retornarla.        
        return await null;
    }
    async consultarPlanDeTrabajo() {//TODO
        //Hacer peticion a la API, retornar el json.
        return await pTEjemplo;
    }
}
export default AdminActividades;
