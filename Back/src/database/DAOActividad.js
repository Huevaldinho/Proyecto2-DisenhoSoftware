import mongoose from "mongoose";

const comentarioSchema = new mongoose.Schema({
    descripcion: {type: String, required: true},
    fecha: {type: Date, required: true},
    autor: {type: Number, required: true},
});

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