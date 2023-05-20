import { API_URL } from '../config';

class AdminActividades {
    //*Constructores
    constructor() { }
    //*Metodos
    async crearActividad(dtoActividad) {//TODO Falta probarlo.
        try {
            // Crear un objeto FormData para almacenar el archivo
            let formData = new FormData();
            formData.append('file', dtoActividad.afiche);
            // Agregar el objeto JSON al FormData
            formData.append('json', JSON.stringify({
                "nombre": dtoActividad.nombre,
                "descripcion": dtoActividad.descripcion,
                "enlace": dtoActividad.enlace,
                "estado": dtoActividad.estado,
                "evidencias": dtoActividad.evidencias,
                "fechaHora": dtoActividad.fechaHora,
                "fechaHoraPublicacion": dtoActividad.fechaHoraPublicacion,
                "id": dtoActividad.id,
                "modalidad": dtoActividad.modalidad,
                "recordatorios": dtoActividad.recordatorios,
                "responsables": dtoActividad.responsables,
                "semana": dtoActividad.semana,
                "tipoActividad": dtoActividad.tipoActividad
            }));
            const response = await fetch(`${API_URL}/actividades`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                console.log('AdminActividades, en metodo crearActividad:', data);
                return data;
            } else {
                throw new Error('AdminActividades, en metodo crearActividad:');
            }
        } catch (error) {
            console.log('Error en AdminActividades, en metodo crearActividad:', error);
        }
    }
    async consultarPlanDeTrabajo() {//TODO
        try {
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
    async consultarComentarios(id) {
        try {
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
    /**
   * Metodo para cambiar el nomrbe del plan de trabajo.
   * @param {String} nuevoNombre 
   * @returns {_id,nombre,Array[id actividades],__v}
   */
    async cambiarNombrePlanTrabajo(nuevoNombre) {
        try {
            const response = await fetch(`${API_URL}/planTrabajo/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "nombre": nuevoNombre
                })
            });
            let data = await response.json(); // Convertir datos a formato JSON
            console.log("AdminActividades cambiarNombrePlanTrabajo retorna :", data)
            return data;
        } catch (error) {
            console.error('Error en AdminActividades, en metodo cambiarNombrePlanTrabajo: ', error);
            return null;
        }
    }
    /**
     * POST
     * Comentario nuevo.
     * @param {JSON = "idActividad","descripcion","fecha","autor","idRespuesta"} datos 
     * Retorna 
     */
    async comentarActividad(datos) {
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
export default AdminActividades;
