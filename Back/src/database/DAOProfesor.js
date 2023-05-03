import mongoose from "mongoose";
//PRUEBA

const campusSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
});

const equipoSchema = new mongoose.Schema({
    miembros: {type: Array, required: true},
});

const profesorSchema = new mongoose.Schema({
    codigo: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    estado: {type: Boolean, required: true},
    coordinador: {type: Boolean, required: true},
    rol: {type: Boolean, required: true},
});
  
const Profesor = mongoose.model('Profesor',profesorSchema,'Profesor');

//Metodo para poder validar inicio de sesión de profesor
export async function validarProfesor(emailP,passwordP){
    try {
        const data = await Profesor.findOne({ email: emailP, password: passwordP}); 
        if (data) {
            return true
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
};

//Método para agregar un profesor
export const agregarProfesor = async (DTOProfesor) => {
    console.log("Post inicio middlewhere");
    try {
        let p = new Profesor({
            codigo: DTOProfesor.codigo,
            nombre: DTOProfesor.nombre,
            apellido1: DTOProfesor.apellido1,
            apellido2: DTOProfesor.apellido2,
            email: DTOProfesor.email,
            password: DTOProfesor.password,
        })
        p.save();
        res.status(200).json(p);
      } catch (error) {
        res.status(500).json(error);
    }
};


