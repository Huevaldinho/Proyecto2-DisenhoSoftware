import { ObjectId } from "mongodb";
import mongoose from "mongoose";

//Schema asociado a plan de actividades, es el cual se guardará en mongo
const planActividadSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    actividades: {type: Array, required: true}
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

//Schema asociado a comentario, es el cual se guardara en mongo
const comentarioSchema = new mongoose.Schema({
    idActividad: {type: ObjectId, required: true},
    descripcion: {type: String, required: true},
    fecha: {type: Date, required: true},
    autor: {type: Number, required: true},
    respuesta: {type: Boolean, required: true},
    idRespuesta: {type: ObjectId, required: true},
});

// Objeto
const Actividad = mongoose.model('Actividad',actividadSchema,'Comentario'); //"Objeto comentario" que actuara como conexión entre mongo y el api
const Comentario = mongoose.model('Comentario',comentarioSchema,'Comentario'); //"Objeto comentario" que actuara como conexión entre mongo y el api


export const getActividadesDB = async () => {
    console.log('OBTENER ACTIVIDAD')
    try {
        const data = await Actividad.find(); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
};

export const ingresarActividadDB = async (DTOActividad) => {
    try {
        const actividadExistente = await Actividad.findOne({ nombre: DTOActividad.nombre }); //si ya existe con ese nombre
        if (actividadExistente) return "-1"

        let nuevaActividad = new Actividad({
            nombre: DTOActividad.nombre,
            fecha: DTOActividad.fecha,
            semana: DTOActividad.semana,
            descripcion: DTOActividad.descripcion,
            tipo: DTOActividad.tipo,
            responsable: DTOActividad.responsable,
            fechaPublicacion: DTOActividad.fechaPublicacion,
            recordatorios: DTOActividad.recordatorios,
            modalidad: DTOActividad.modalidad,
            enlace: DTOActividad.enlace,
            afiche: DTOActividad.afiche,
            estado: DTOActividad.estado,
            evidencia: DTOActividad.evidencia,
        })
        nuevaActividad.save()
        return nuevaActividad
        
    } catch (error) {
        return error
    }

};

export const modificarActividadDB = async (DTOActividad) => {
    try {
        const actividadActualizada = await Actividad.findByIdAndUpdate(
            DTOActividad.id,
            {
            nombre: DTOActividad.nombre,
            fecha: DTOActividad.fecha,
            semana: DTOActividad.semana,
            descripcion: DTOActividad.descripcion,
            tipo: DTOActividad.tipo,
            responsable: DTOActividad.responsable,
            fechaPublicacion: DTOActividad.fechaPublicacion,
            recordatorios: DTOActividad.recordatorios,
            modalidad: DTOActividad.modalidad,
            enlace: DTOActividad.enlace,
            afiche: DTOActividad.afiche,
            estado: DTOActividad.estado,
            evidencia: DTOActividad.evidencia,
            },
            { new: true } // Devuelve el documento actualizado
        );
        return actividadActualizada;
        } catch (error) {
        console.error(error);
        return error;
        }
};

export const eliminarActividadDB = async (DTOActividad) => {
    try {
        const resultado = await Actividad.deleteOne({ _id: DTOActividad.id });
        if (resultado.deletedCount === 0) {
          throw new Error(`No se encontró la actividad con id ${DTOActividad.id}`);
        }
        return resultado;
      } catch (error) {
        console.error(error);
        return error;
      }
};


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

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
