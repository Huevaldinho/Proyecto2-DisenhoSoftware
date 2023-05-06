import {
    getEstudiantesMongo,
} from "../database/DAOEstudiante.js"; //Importación de DAOEstudiante

//Método para traer todos los estudiantes de la base de datos
export const getEstudiantes = async (req, res) => {
    const estudiantes = await getEstudiantesMongo();
    console.log(estudiantes);
    res.json(estudiantes);
}