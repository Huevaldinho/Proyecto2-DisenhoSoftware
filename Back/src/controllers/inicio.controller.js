import {
    validarProfesor,
} from "../database/DAOProfesor.js"; //Importación de DAOProfesor


export const getInicio = async (req, res) => {
    const validar = await validarProfesor(req.params.email, req.params.password) 
    console.log(validar)
    if (validar == true) {
        console.log("bien")
        res.send("bien")
    } else {
        console.log("mal")
        res.send("mal")
    }
}
