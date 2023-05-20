//*Importa la url y puerto
import { API_URL } from '../config';

class AdminEstudiantes {
    //*Constructores
    constructor() { }
    /**
     * Metodo para obtener los estudiantes en la base de datos.
     * Utiliza la apli.
     * @returns [estudiantes] si logra hacer el request.
     *          null si no lo logra.
     */
    async verEstudiantes() {
        try {
            const response = await fetch(`${API_URL}/estudiantes`, {
                method: 'GET'
            });
            let data = await response.json(); // Convertir datos a formato JSON
            return data;
        } catch (error) {
            console.error('Error en AdminEstudiantes, en metodo getInformacionEstudiantes: ', error);
            return null;
        }
    }
    async registrarEstudiantes() {
        try {
            const response = await fetch(`${API_URL}/comentario/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "idActividad": datos.idActividad,
                    "descripcion": datos.descripcion,
                    "fecha": datos.fecha,
                    "autor": datos.autor,
                    "idRespuesta": "null"
                })
            });
            let data = await response.json(); // Convertir datos a formato JSON
            console.log("AdminActividades comentarActividad retorna :", data)
            return data;
        } catch (error) {
            console.error('Error en AdminActividades, en metodo comentarActividad: ', error);
            return null;
        }
    }

}
export default AdminEstudiantes;