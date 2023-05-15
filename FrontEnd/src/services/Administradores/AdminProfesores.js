import { API_URL } from '../config';
import { profesores as profEjemplo } from "../../datos";
import DTOProfesor from '../DTOs/DTOProfesor';

class AdminProfesores {
    //*Constructores
    constructor() { }
    //*Metodos
    /**
     * Metodo para registrar a un profesor.
     * Utiliza la API.
     * @param {DTOProfesor} dtoProfe 
     * @returns {JSON} dtoProfe registrado
     */
    async registrarProfesor(dtoProfe) {
        try {
            const response = await fetch(`${API_URL}/profesor`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "cedula": dtoProfe.getCedula(),
                    "nombre": dtoProfe.getNombre(),
                    "nombre2": dtoProfe.getNombre2(),
                    "apellido1": dtoProfe.getApellido1(),
                    "apellido2": dtoProfe.getApellido2(),
                    "correo": dtoProfe.getCorreo(),
                    "contrasenna": dtoProfe.getContrasenna(),
                    "rol": dtoProfe.getRol(),
                    "coordinador": dtoProfe.getCoordinador(),
                    "telefono": dtoProfe.getTelefono(),
                    "campus": dtoProfe.getCampus(),
                    "equipo": dtoProfe.getEquipo(),
                    "celular": dtoProfe.getCelular(),
                    "estado": dtoProfe.getEstado()
                })
            });
            let data = await response.json(); // Convertir datos a formato JSON
            return data;
        } catch (error) {
            console.error('Error en AdminProfesores, en metodo actualizarProfesor: ', error);
        }
    }
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
     * @param {DTOProfesor} dtoProfe 
     */
    async actualizarProfesor(dtoProfe) {
        try {
            const response = await fetch(`${API_URL}/profesor`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "cedula": dtoProfe.getCedula(),
                    "nombre": dtoProfe.getNombre(),
                    "nombre2": dtoProfe.getNombre2(),
                    "apellido1": dtoProfe.getApellido1(),
                    "apellido2": dtoProfe.getApellido2(),
                    "correo": dtoProfe.getCorreo(),
                    "contrasenna": dtoProfe.getContrasenna(),
                    "rol": dtoProfe.getRol(),
                    "codigo": dtoProfe.getCodigo(),
                    "coordinador": dtoProfe.getCoordinador(),
                    "telefono": dtoProfe.getTelefono(),
                    "campus": dtoProfe.getCampus(),
                    "equipo": dtoProfe.getEquipo(),
                    "celular": dtoProfe.getCelular(),
                    "estado": dtoProfe.getEstado()
                })
            });
            let data = await response.json(); // Convertir datos a formato JSON
            return data;
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
            const response = await fetch(`${API_URL}/profesor/${cedula}`, {
                method: 'DELETE'
            });
            return await response.json()
        } catch (error) {
            console.error('Error en AdminProfesores, en metodo eliminarMiembro: ', error);
        }
    }
}
export default AdminProfesores;