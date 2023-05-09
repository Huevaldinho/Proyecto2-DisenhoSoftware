import {
    getEstudiantesMongo,
    eliminarEstudiante
} from "../database/DAOEstudiante.js"; //Importación de DAOEstudiante

//Método para traer todos los estudiantes de la base de datos, relaacionado al metodo get de la ruta de estudiantes
export const getEstudiantes = async (req, res) => {
    const estudiantes = await getEstudiantesMongo();
    console.log(estudiantes);
    res.json(estudiantes);
}


//Método post para agregar un profesor, este recibe un Body con los datos que actuara como un DTOProfesor
export const putEstudiante = async (req, res) => {
    const profesorMod = await modificarProfesor(req.body);
    console.log(profesorMod);
    res.json(profesorMod);
}


//Método delete que se encarga de cambiar el estado de un estudiante a inactivo
export const deleteEstudiante = async (req, res) => {
    const estudianteBorrado = await eliminarEstudiante(req.params.id);
    console.log(estudianteBorrado);
    res.json(estudianteBorrado);
}