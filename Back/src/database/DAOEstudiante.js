import mongoose from "mongoose";

const estudianteSchema = new mongoose.Schema({
    carnet: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    estado: {type: Boolean, required: true},
});

const Estudiante = mongoose.model('Estudiante',estudianteSchema,'Estudiante');

//Metodo para poder validar inicio de sesión de estudiante
export async function validarEstudiante(emailP,passwordP){
    try {
        const data = await Estudiante.findOne({ email: emailP, password: passwordP}); 
        if (data) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
};