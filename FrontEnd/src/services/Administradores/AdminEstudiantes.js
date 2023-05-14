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
            //!API_URL Esta en el archivo services/config.js
            //en caso que la profe nos pida subirlo a un host solo tenemos que cambiar ahi la ip y puerto
            const response = await fetch(`${API_URL}/estudiantes`, {
                method: 'GET'
            });
            let data = await response.json(); // Convertir datos a formato JSON
            console.log("AdminEstudiantes: getInformacionEstudiantes retorna:", data)
            return data;
        } catch (error) {
            console.error('Error en AdminEstudiantes, en metodo getInformacionEstudiantes: ', error);
            return null;
        }
    }

}
export default AdminEstudiantes;