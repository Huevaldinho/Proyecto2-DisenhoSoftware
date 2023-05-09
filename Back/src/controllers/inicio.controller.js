import {
    validarProfesor,
} from "../database/DAOProfesor.js"; //Importación de DAOProfesor

import {
    validarEstudiante,
} from "../database/DAOEstudiante.js"; //Importación de DAOProfesor

//Método asociado a getInicio, este método hace que se valide cuando se inicie sesión y dice si es un profesor, asistente o estudiante
/*
Profesor / coordinador / Asistente
Estudiante
4 = No existe en el sistema
*/
export const postInicio = async (req, res) => {
    const validar = await validarProfesor(req.params.email, req.params.password) 
    console.log(validar)
    if (validar != false) {
        console.log(validar)
        res.json(validar)
    } else {
        const validar2 = await validarEstudiante(req.params.email, req.params.password) 
        if (validar2 != false) {
            console.log(validar2)
            res.json(validar2)
        }
        else {
            console.log("mal")
            res.json({})
        }
    }
}
