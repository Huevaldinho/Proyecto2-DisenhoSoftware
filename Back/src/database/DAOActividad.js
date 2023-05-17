import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import {
    getProfesoresActividad
} from "../database/DAOProfesor.js"; //Importación de DAOProfesor
//Schema asociado a plan de actividades, es el cual se guardará en mongo
const planSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    actividades: { type: Array, required: true }
});

//Schema asociado a actividad, es el cual se guardara en mongo
const actividadSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    fecha: {type: String, required: true},
    semana: {type: Number, required: true},
    descripcion: {type: String, required: true},
    tipo: {type: String, required: true},
    responsable: {type: Array, required: true},
    fechaPublicacion: {type: String, required: true},
    recordatorios: {type: Array, required: true},
    modalidad: {type: Boolean, required: true},
    enlace: {type: String, required: true},
    afiche: {type: String, required: true},
    estado: {type: String, required: true},
    evidencia: {type: Array, required: true},
});

//Schema asociado a comentario, es el cual se guardara en mongo
const comentarioSchema = new mongoose.Schema({
    idActividad: { type: ObjectId, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: String, required: true },
    autor: { type: String, required: true },
    idRespuesta: { type: ObjectId },
});

// Objeto
const Plan = mongoose.model('Plan', planSchema, 'Plan'); //"Objeto plan" que actuara como conexión entre mongo y el api
const Actividad = mongoose.model('Actividad', actividadSchema, 'Actividad'); //"Objeto Actividad" que actuara como conexión entre mongo y el api
const Comentario = mongoose.model('Comentario', comentarioSchema, 'Comentario'); //"Objeto comentario" que actuara como conexión entre mongo y el api

async function guardarEnplanDB(nombreActividad) {
    try {
        const plan = await Plan.findOne() //devuelve el primer plan que encuentre (el único)
        const actividad = await Actividad.findOne({ nombre: nombreActividad }) //tengo la actividad

        plan.actividades.push(actividad._id) //agrega el id de la actividad al plan de trabajo
        await plan.save();

    } catch (error) {
        return error
    }
}

export const getPlanDB = async () => {
    try {
        const plan = await Plan.findOne()
        const idsActividades = plan.actividades;
        const actividades = await Actividad.find({ _id: { $in: idsActividades } });
        plan.actividades = actividades;
        if (plan) return plan
        return false
    } catch (error) {
        return error
    }
}

export const modificarPlanDB = async (nuevoPlan) => {
    try {
        var plan = await Plan.findOne() //encuentra el unico plan
        plan.nombre = nuevoPlan.nombre
        plan.save()
        return plan
    } catch (error) {
        return error
    }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
export const getActividadesDB = async () => {
    try {
        const plan = await Plan.findOne() //devuelve el primer plan que encuentre (el único)
        const idsActividades = plan.actividades
        
        const actividades = await Actividad.find({ _id: { $in: idsActividades } });
        for(let i in actividades) {
            var actividad = actividades[i];
            const idResponsables = actividad.responsable;
            const responsables = await getProfesoresActividad(idResponsables);
            actividad.responsable = responsables;
        }
        if (actividades) return actividades;
        return false

    } catch (error) {
        return error
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

        const actividad = await Actividad.findOne({ nombre: nuevaActividad.nombre }) //lo guardo para enviarlo con su id
        guardarEnplanDB(actividad.nombre) //envía a guardar el id de la nueva actividad en el array de plan

        return actividad

    } catch (error) {
        return error
    }
};

export const modificarActividadDB = async (DTOActividad) => {
    console.log(DTOActividad)
    try {
        const actividadExistente = await Actividad.findById(DTOActividad._id);
        if (!actividadExistente) {
            throw new Error(`No se encontró la actividad con id ${DTOActividad._id}`);
        }

        Object.assign(actividadExistente, DTOActividad);
        const actividadActualizada = await actividadExistente.save();

        return actividadActualizada;
    } catch (error) {
        console.error(error);
        return error;
    }
};

export const eliminarActividadDB = async (DTOActividad) => {
    try {
        const actividadEliminada = DTOActividad

        const plan = await Plan.findOne() //devuelve el primer plan que encuentre (el único)
        plan.actividades.pull(DTOActividad._id)
        await plan.save()

        return actividadEliminada
    } catch (error) {
        console.error(error);
        return error;
    }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

//Método que retorna todos los comentarios de una actividad en especifico
export async function getComentariosActividad(idA) {
    try {
        const data = await Comentario.find({ idActividad: idA });
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
        if (comentario.descripcion == '')
            return "1"
        let c = new Comentario({
            idActividad: comentario.idActividad,
            descripcion: comentario.descripcion,
            fecha: comentario.fecha,
            autor: comentario.autor,
            idRespuesta: null
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
        if (comentario.descripcion == '')
            return "1"
        let c = new Comentario({
            idActividad: comentario.idActividad,
            descripcion: comentario.descripcion,
            fecha: comentario.fecha,
            autor: comentario.autor,
            idRespuesta: comentario.idRespuesta
        })
        c.save();
        return c;
    } catch (error) {
        return error;
    }
};

//Método que retorna todos los comentarios de una actividad en especifico
export async function getRespuestas(idA){
    try {
        const data = await Comentario.find({idRespuesta: idA}); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        return error;
    }
};

