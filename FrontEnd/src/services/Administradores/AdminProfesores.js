import { API_URL } from '../config';
import { profesores as profEjemplo } from "../../datos";


class AdminProfesores {
    //*Constructores
    constructor() { }
    //*Metodos
    /**
     * Metodo para obtener los profesores
     * Trae los datos con la API.
     * @returns {Array JSON} 
     * Json con forma:{ "_id":,"rol": ,"estado","apellido1","apellido2","campus","cedula","coordinador",
        "equipo","nombre","telefono","celular","codigo","contrasenna","correo"}
     */
    async consultarProfesores() {
        try {
            //!API_URL Esta en el archivo services/config.js
            //en caso que la profe nos pida subirlo a un host solo tenemos que cambiar ahi la ip y puerto
            const response = await fetch(`${API_URL}/profesor`, {
                method: 'GET'
            });
            let data = await response.json(); // Convertir datos a formato JSON
            return data;
        } catch (error) {
            console.error('Error en AdminProfesores, en metodo consultarProfesores: ', error);
            return null;
        }
    }
    /**
     * Metodo para cambiar los datos de un profesor.
     * Hace peticion a la API.
     * @param {DTOProfesor} DTOProfesor 
     */
    async actualizarProfesor(DTOProfesor) {
        try {
            //!HACER REQUEST A LA API
            return true;
        } catch (error) {
            console.error('Error en AdminProfesores, en metodo actualizarProfesor: ', error);
        }
    }
}
export default AdminProfesores;