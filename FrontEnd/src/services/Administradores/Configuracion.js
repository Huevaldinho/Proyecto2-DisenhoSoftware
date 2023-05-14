//*Importa la url y puerto
import { API_URL } from '../config';
export default class Configuracion {

    //*Constructores
    constructor() {
    }
    //*Metodos
    /**
     * Metodo para iniciar sesion.
     * @param {String} correoIn 
     * @param {String} contrasennaIn 
     * @returns {JSON con forma {_id,email,password,rol,estado} si encuentra al usuario
     *           1 si no encuentra al usuario} RespuestaAPI
     */
    async iniciarSesion(correoIn, contrasennaIn) {
        try {
            //!API_URL Esta en el archivo services/config.js
            //en caso que la profe nos pida subirlo a un host solo tenemos que cambiar ahi la ip y puerto
            const response = await fetch(`${API_URL}/inicio/${correoIn}/${contrasennaIn}`, {
                method: 'POST'
            });
            let data = await response.json(); // Convertir datos a formato JSON
            console.log("Configuracion: iniciarSesion retorna:", data)
            return data;
        } catch (error) {
            console.error('Error en Configuracion, en metodo iniciarSesion: ', error);
            return null;
        }
    }
}



