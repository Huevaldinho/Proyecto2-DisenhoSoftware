import {
    validarProfesor,
} from "../database/DAOProfesor.js"; //Importación de DAOProfesor

import {
    validarEstudiante,
} from "../database/DAOEstudiante.js"; //Importación de DAOProfesor

//Método asociado a getInicio, este método hace que se valide cuando se inicie sesión y dice si es un profesor, asistente o estudiante
export const getInicio = async (req, res) => {
    const validar = await validarProfesor(req.params.email, req.params.password) 
    console.log(validar)
    if (validar) {
        console.log("bien profe")
        res.send(1)
    } else {
        const validar2 = await validarEstudiante(req.params.email, req.params.password) 
        if (validar2) {
            console.log("bien estudiante")
            res.send("bien estudiante")
        }
        else {
            console.log("mal")
            res.send(3)
        }
    }
}
