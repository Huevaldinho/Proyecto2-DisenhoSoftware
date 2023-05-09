import {
    getProfesoresMongo,
    agregarProfesor,
    modificarProfesor,
    eliminarProfesor
} from "../database/DAOProfesor.js"; //Importación de DAOProfesor

//Método para obtener y mostrar todos los profesores
export const getProfesores = async (req, res) => {
    const profesores = await getProfesoresMongo();
    console.log(profesores);
    res.json(profesores);
}

//Método post para agregar un profesor, este recibe un Body con los datos que actuara como un DTOProfesor
export const postProfesor = async (req, res) => {
    const profesorNuevo = await agregarProfesor(req.body);
    console.log(profesorNuevo);
    res.json(profesorNuevo);
}

//Método post para agregar un profesor, este recibe un Body con los datos que actuara como un DTOProfesor
export const putProfesor = async (req, res) => {
    const profesorMod = await modificarProfesor(req.body);
    console.log(profesorMod);
    res.json(profesorMod);
}

//Método delete que se encarga de cambiar el estado de un profesor a inactivo
export const deleteProfesor = async (req, res) => {
    const profesorBorrado = await eliminarProfesor(req.params.id);
    console.log(profesorBorrado);
    res.json(profesorBorrado);
}