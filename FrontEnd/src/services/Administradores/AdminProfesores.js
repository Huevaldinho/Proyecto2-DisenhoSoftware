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
    async actualizarProfesor(DTOProfesor) {//TODO
        try {
            //!HACER REQUEST A LA API
            return true;
        } catch (error) {
            console.error('Error en AdminProfesores, en metodo actualizarProfesor: ', error);
        }
    }
    /**
     * Metodo para eliminar (inactivar )a un miembro del equipo.
     * Llama a la API para inactivarlo en la base de datos.
     * @param {int} cedula 
     * @returns {JSON de profesor}
     */
    async eliminarMiembro(cedula) {
        try {
            const response = await fetch(`${API_URL}/profesor${cedula}`, {
                method: 'DELETE'
            });
            let data = await response.json(); // Convertir datos a formato JSON
            return data;
        } catch (error) {
            console.error('Error en AdminProfesores, en metodo eliminarMiembro: ', error);
        }
    }
}
export default AdminProfesores;