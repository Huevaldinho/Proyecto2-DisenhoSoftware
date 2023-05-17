import { API_URL } from '../config';


//!BORRAR ESTE IMPORT DE DATOS.
import { planDeTrabajo as pTEjemplo } from "../../datos";
import { comentarios as pcomentarios } from '../../datos';
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
        try {
            //!API_URL Esta en el archivo services/config.js
            //en caso que la profe nos pida subirlo a un host solo tenemos que cambiar ahi la ip y puerto
            const response = await fetch(`${API_URL}/planTrabajo`, {
                method: 'GET'
            });
            let data = await response.json(); // Convertir datos a formato JSON
            console.log("AdminActividades consultarPlanDeTrabajo retorna :", data)
            return data;
        } catch (error) {
            console.error('Error en AdminActividades, en metodo consultarPlanDeTrabajo: ', error);
            return null;
        }
    }
    async consultarComentarios(id) {//TODO
        //Hacer peticion a la API, retornar el json.
        try {
            //!API_URL Esta en el archivo services/config.js
            //en caso que la profe nos pida subirlo a un host solo tenemos que cambiar ahi la ip y puerto
            const response = await fetch(`${API_URL}/comentario/${id}`, {
                method: 'GET'
            });
            let data = await response.json(); // Convertir datos a formato JSON
            console.log("AdminActividades consultarComentarios retorna :", data)
            return data;
        } catch (error) {
            console.error('Error en AdminActividades, en metodo consultarComentarios: ', error);
            return null;
        }
    }

}
export default AdminActividades;
