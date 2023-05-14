//!Clase con los metodos para hacer peticiones a la api respecto a los estudiantes.
class AdminEstudiantes {
    //*Constructores
    constructor() { }
    async verEstudiantes() {
        try {
            const response = await fetch('http://localhost:3000/estudiantes', {
                method: 'GET'
            });
            console.log("Response:", response)
            let data = await response.json(); // Convertir datos a formato JSON
            console.log("AdminEstudiantes: getInformacionEstudiantes retorna despues de usar .json:", data)
            return data;
        } catch (error) {
            console.error('Error en AdminEstudiantes, en metodo getInformacionEstudiantes: ', error);
            return null;
        }
    }
    async modificarInformacionEstudiante() {//TODO
        return await null;
    }
}
export default AdminEstudiantes;