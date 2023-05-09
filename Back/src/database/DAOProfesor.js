import mongoose from "mongoose"; //importación de librerias

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
    campus: {type: String, required: true},
    password: {type: String, required: true},
    estado: {type: Boolean, required: true},
    coordinador: {type: Boolean, required: true},
    rol: {type: String, required: true},
});
  
const Profesor = mongoose.model('Profesor',profesorSchema,'Profesor');
const Equipo = mongoose.model('Equipo',equipoSchema,'Equipo');

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
//DTOProfesor es un json
export const agregarProfesor = async (DTOProfesor) => {
    console.log("Post profesor middlewhere");
    try {
        let p = new Profesor({
            cedula: DTOProfesor.cedula,
            nombre: DTOProfesor.nombre,
            apellido1: DTOProfesor.apellido1,
            apellido2: DTOProfesor.apellido2,
            telefono: DTOProfesor.telefono,
            email: DTOProfesor.email,
            campus: DTOProfesor.campus,
            password: DTOProfesor.password,
            estado: true,
            coordinador: DTOProfesor.coordinador,
            rol: DTOProfesor.rol,
        })
        p.save();
        res.status(200).json(p);
      } catch (error) {
        res.status(500).json(error);
    }
};


//Metodo para hacer la consulta de todos los estudiantes
export async function getProfesoresMongo(){
    try {
        const data = await Profesor.find({}); 
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
export const modificarProfesor = async (DTOProfesor) => {
    console.log("delete profesor middlewhere");
    try {
        const p = await Profesor.findById(DTOProfesor.id); 
        p.cedula = DTOProfesor.cedula;
        p.nombre = DTOProfesor.nombre;
        p.apellido1 = DTOProfesor.apellido1;
        p.apellido2 = DTOProfesor.apellido2;
        p.telefono = DTOProfesor.telefono;
        p.email = DTOProfesor.email;
        p.campus = DTOProfesor.campus;
        p.password = DTOProfesor.password;
        p.coordinador = DTOProfesor.coordinador;
        p.rol =  DTOProfesor.rol;
        p.save();
        return p;
      } catch (error) {
        res.status(500).json(error);
    }
};

//Método encargado de hacer que un profesor este inactivo, relacionado con la ruta de delete de Profesor 
//_id es el id de mongo
export const eliminarProfesor = async (_id) => {
    console.log("delete profesor middlewhere");
    try {
        const p = await Profesor.findByIdAndUpdate(_id, {$set: {estado: false}});
        return p;
      } catch (error) {
        res.status(500).json(error);
    }
};