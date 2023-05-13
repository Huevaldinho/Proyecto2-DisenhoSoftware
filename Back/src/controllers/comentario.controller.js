import {
    getComentariosActividad,
    agregarComentario,
    agregarRespuesta
} from "../database/DAOActividad.js"; //Importación de DAOActividad

//Método para obtener y mostrar todos los comentarios de una actividad en especifico
export const getComentarios = async (req, res) => {
    const profesores = await getComentariosActividad(req.params.idA);
    console.log(profesores);
    res.json(profesores);
}

//Método post para agregar un comentario
export const postComentario = async (req, res) => {
    const comentarioNuevo = await agregarComentario(req.body);
    if (comentarioNuevo == '1') //Si es 1 es por que el comentario estaba vacio
        res.send(comentarioNuevo)
    else{
        console.log(comentarioNuevo);
        res.json(comentarioNuevo);
    }
}

//Método para agregar una respuesta a un comentario
export const putComentario = async (req, res) => {
    const comentarioNuevo = await agregarRespuesta(req.body);
    if (comentarioNuevo == '1') //Si es 1 es por que el comentario estaba vacio
        res.send(comentarioNuevo)
    else{
        console.log(comentarioNuevo);
        res.json(comentarioNuevo);
    }
}