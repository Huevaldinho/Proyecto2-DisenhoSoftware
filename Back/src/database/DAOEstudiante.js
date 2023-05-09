import mongoose from "mongoose"; //importación de librerias


//Schema del estudiante, estos son sus atributos en la base de datos
const estudianteSchema = new mongoose.Schema({
    carnet: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    estado: {type: Boolean, required: true},
    rol: {type: String, required: true},
});

//Objeto que hace de estudiante, con este se hacen todos los métodos
const Estudiante = mongoose.model('Estudiante',estudianteSchema,'Estudiante');

//Metodo para poder validar inicio de sesión de estudiante
export async function validarEstudiante(emailP,passwordP){
    try {
        const data = await Estudiante.findOne({ email: emailP, password: passwordP}); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
};

//Metodo para hacer la consulta de todos los estudiantes
export async function getEstudiantesMongo(){
    try {
        const data = await Estudiante.find({estado: true}); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
};

//Método para modificar un profesor, relacionado con la ruta de put de Profesor
//DTOProfesor es un json que viene de Body
export const modificarEstudiante = async (DTOEstudiante) => {
    console.log("delete estudiante middlewhere");
    try {
        const e = await Estudiante.findById(DTOProfesor.id); 
        e.carnet = DTOEstudiante.carnet;
        e.nombre = DTOEstudiante.nombre;
        e.apellido1 = DTOEstudiante.apellido1;
        e.apellido2 = DTOEstudiante.apellido2;
        e.email = DTOEstudiante.email;
        e.password = DTOEstudiante.password;
        e.rol =  DTOEstudiante.rol;
        e.save();
        return e;
      } catch (error) {
        res.status(500).json(error);
    }
};

//Método encargado de hacer que un estudiante este inactivo, relacionado con la ruta de delete de Estudiante 
//_id es el id de mongo
export const eliminarEstudiante = async (id) => {
    console.log("delete estudiante middlewhere");
    try {
        const e = await Estudiante.findByIdAndUpdate(id, {$set: {estado: false}});
        return e;
      } catch (error) {
        res.status(500).json(error);
    }
};