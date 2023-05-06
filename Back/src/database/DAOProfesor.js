import mongoose from "mongoose"; //importación de librerias

const campusSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
});

const equipoSchema = new mongoose.Schema({
    miembros: {type: Array, required: true},
});

const profesorSchema = new mongoose.Schema({
    cedula: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: true},
    telefono: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    estado: {type: Boolean, required: true},
    coordinador: {type: Boolean, required: true},
    rol: {type: String, required: true},
});
  
const Profesor = mongoose.model('Profesor',profesorSchema,'Profesor');

//Metodo para poder validar inicio de sesión de profesor
export async function validarProfesor(emailP,passwordP){
    try {
        const data = await Profesor.findOne({ email: emailP, password: passwordP}); 
        if (data) {
            return data
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
            cedula: DTOProfesor.cedula,
            nombre: DTOProfesor.nombre,
            apellido1: DTOProfesor.apellido1,
            apellido2: DTOProfesor.apellido2,
            telefono: DTOProfesor.telefono,
            email: DTOProfesor.email,
            password: DTOProfesor.password,
            estado: DTOProfesor.estado,
            coordinador: DTOProfesor.coordinador,
            rol: DTOProfesor.rol,
        })
        p.save();
        res.status(200).json(p);
      } catch (error) {
        res.status(500).json(error);
    }
};


