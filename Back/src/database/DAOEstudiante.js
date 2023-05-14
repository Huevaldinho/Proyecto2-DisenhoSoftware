import mongoose from "mongoose"; //importación de librerias


//Schema del estudiante, estos son sus atributos en la base de datos
const estudianteSchema = new mongoose.Schema({
    carnet: {type: Number, required: true},
    nombre: {type: String, required: true},
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: true},
    celular: {type: String, required: true},
    email: {type: String, required: true},
    campus: {type: String, required: true},
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

//Método que retorna los datos del estudiante (si lo encuentra) mediante el email
export async function validarEstudianteCambiarContra(emailP, passwordP){
    try {
        const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        var data = await Estudiante.findOne({ email: emailP}); 
        if (data) {
            if (passwordP.match(passwordReg)) {
                data.password = passwordP;
                data.save();
                return data
            }
            else return "2" //La contraseña no corresponde al formato de minimo 8 caracteres, al menos 1 letra y 1 número
        } else {
            return "1" //No se encontro al usuario en el sistema
        }
    } catch (error) {
        console.log(error)
    }
};

//Metodo para hacer la consulta de todos los estudiantes
export async function getEstudiantesMongo(){
    try {
        const data = await Estudiante.find(); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        console.log(error)
    }
};

//Método que ingresa estudiantes a la base de datos mongo, esta es una lista de Json que contiene cada uno 
//los datos de los estudiantes, devuelve esta misma lista 
export const ingresarEstudiantes = async (lista) => {
    try {
        for (const DTOEstudiante of lista) {
            let e = new Estudiante({
                carnet: DTOEstudiante.carnet,
                nombre: DTOEstudiante.nombre,
                apellido1: DTOEstudiante.apellido1,
                apellido2: DTOEstudiante.apellido2,
                email: DTOEstudiante.email,
                campus: DTOEstudiante.campus,
                password: DTOEstudiante.password,
                estado: true,
                rol: DTOEstudiante.rol
            })
            e.save();
        }; 
        return lista;
    } catch (error) {
        return error;
    }
};

//Método para modificar un profesor, relacionado con la ruta de put de Profesor
//DTOProfesor es un json que viene de Body
export const modificarEstudiante = async (DTOEstudiante) => {
    console.log("delete estudiante middlewhere");
    try {
        const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const emailReg = /^[a-z0-9]+@estudiantec.cr$/
        const data = await Estudiante.findOne({ email: DTOEstudiante.email}); 
        if (!DTOProfesor.password.match(passwordReg)) 
            return "1"; //error si la contraseña no es aceptada
        if (!DTOEstudiante.email.match(emailReg)) 
            return "2"; //error si el email no es aceptado
        if (nombre == "" || apellido1 == "" || apellido2 == "") 
            return "5" //error si alguno de estos campos esta vacio
        if (data)
            return "6" //error si ya existia un profesor registrado
        var e = await Estudiante.findById(DTOProfesor.id); 
        e.carnet = DTOEstudiante.carnet;
        e.nombre = DTOEstudiante.nombre;
        e.apellido1 = DTOEstudiante.apellido1;
        e.apellido2 = DTOEstudiante.apellido2;
        e.email = DTOEstudiante.email;
        e.campus = DTOEstudiante.campus;
        e.password = DTOEstudiante.password;
        e.rol =  DTOEstudiante.rol;
        e.save();
        return e;
      } catch (error) {
        return error;
    }
};

//Método encargado de hacer que un estudiante este inactivo, relacionado con la ruta de delete de Estudiante 
//_id es el id de mongo
export const eliminarEstudiante = async (_id) => {
    console.log("delete estudiante middlewhere");
    try {
        var e = await Estudiante.findByIdAndUpdate(_id, {$set: {estado: false}});
        e = await Estudiante.findById(_id);
        return e;
      } catch (error) {
        return error;
    }
};