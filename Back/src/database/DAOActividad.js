import { ObjectId } from "mongodb";
import mongoose from "mongoose";

//Schema asociado a comentario, es el cual se guardara en mongo
const comentarioSchema = new mongoose.Schema({
    idActividad: {type: ObjectId, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, required: true},
    autor: {type: Number, required: true},
    respuesta: {type: Boolean, required: true},
    idRespuesta: {type: ObjectId, required: true},
});

//Schema asociado a actividad, es el cual se guardara en mongo
const actividadSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    fecha: {type: Date, required: true},
    semana: {type: Number, required: true},
    descripcion: {type: String, required: true},
    tipo: {type: String, required: true},
    responsable: {type: Number, required: true},
    fechaPublicacion: {type: Date, required: true},
    recordatorios: {type: Array, required: true},
    modalidad: {type: Boolean, required: true},
    enlace: {type: String, required: true},
    afiche: {type: String, required: true},
    estado: {type: String, required: true},
    evidencia: {type: Array, required: true},
});

//"Objeto comentario" que actuara como conexión entre mongo y el api
const Comentario = mongoose.model('Comentario',comentarioSchema,'Comentario');

//Método que retorna todos los comentarios de una actividad en especifico
export async function getComentariosActividad(idA){
    try {
        const data = await Comentario.find({idActividad: idA}); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        return error;
    }
};


//Método que agregara un comentario a mongo
export const agregarComentario = async (comentario) => {
    console.log("Post comentario middlewhere");
    try {
        if(comentario.descripcion == '')
            return "1"
        let c = new Comentario({
            idActividad: comentario.idActividad,
            descripcion: comentario.descripcion,
            fecha: comentario.fecha,
            autor: comentario.autor,
            respuesta: false,
            idRespuesta: 0
        })
        c.save();
        return c;
      } catch (error) {
        return error;
    }
};

//Método para agregar una respuesta a un comentario
export const agregarRespuesta = async (comentario) => {
    console.log("Put respuesta middlewhere");
    try {
        if(comentario.descripcion == '')
            return "1"
        let c = new Comentario({
            idActividad: comentario.idActividad,
            descripcion: comentario.descripcion,
            fecha: comentario.fecha,
            autor: comentario.autor,
            respuesta: true,
            idRespuesta: comentario.idRespuesta
        })
        c.save();
        return c;
      } catch (error) {
        return error;
    }
};
