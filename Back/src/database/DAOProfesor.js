import { json } from "express";
import mongoose from "mongoose"; //importación de librerias

const profesorSchema = new mongoose.Schema({
    cedula: {type: String, required: true},
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
    equipo: {type: Boolean, required: true}
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
        return error
    }
};

//Método que retorna los datos del profesor (si lo encuentra) mediante el email
export async function validarProfesorCambiarContra(emailP, passwordP){
    try {
        const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        var data = await Profesor.findOne({ email: emailP}); 
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
        return error
    }
};

//Método para agregar un profesor
//DTOProfesor es un json
export const agregarProfesor = async (DTOProfesor) => {
    console.log("Post profesor middlewhere");
    try {
        const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const emailReg = /^[a-z0-9]+@estudiantec.cr$/
        const telefonoReg = /^(2|6|8){1}[0-9]{7}$/
        const cedulaReg = /^1{1}[0-9]{8}$/
        if (!DTOProfesor.password.match(passwordReg)) 
            return "1"; //error si la contraseña no es aceptada
        if (!DTOProfesor.email.match(emailReg)) 
            return "2"; //error si el email no es aceptado
        if (!DTOProfesor.telefono.match(telefonoReg)) 
            return "3";  //error si el telefono no es aceptado
        if (!DTOProfesor.cedula.match(cedulaReg)) 
            return "4"; //error si la cedula no es aceptada
        if (nombre == "" || apellido1 == "" || apellido2 == "") 
            return "5" //error si alguno de estos campos esta vacio
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
        return p;
      } catch (error) {
        return error;
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
        return error;
    }
};

//Método para modificar un profesor, relacionado con la ruta de put de Profesor
//DTOProfesor es un json que viene de Body
export const modificarProfesor = async (DTOProfesor) => {
    console.log("put profesor middlewhere");
    try {
        const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const emailReg = /^[a-z0-9]+@estudiantec.cr$/
        const telefonoReg = /^(2|6|8){1}[0-9]{7}$/
        const cedulaReg = /^1{1}[0-9]{8}$/
        const data = await Profesor.findOne({ email: DTOProfesor.email}); 
        if (!DTOProfesor.password.match(passwordReg)) 
            return "1"; //error si la contraseña no es aceptada
        if (!DTOProfesor.email.match(emailReg)) 
            return "2"; //error si el email no es aceptado
        if (!DTOProfesor.telefono.match(telefonoReg)) 
            return "3";  //error si el telefono no es aceptado
        if (!DTOProfesor.cedula.match(cedulaReg)) 
            return "4"; //error si la cedula no es aceptada
        if (nombre == "" || apellido1 == "" || apellido2 == "") 
            return "5" //error si alguno de estos campos esta vacio
        if (data)
            return "9" //error si ya existia un profesor registrado
        var p = await Profesor.findById(DTOProfesor.id); 
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
        return error;
    }
};

//Método encargado de hacer que un profesor este inactivo, relacionado con la ruta de delete de Profesor 
//_id es el id de mongo
export const eliminarProfesor = async (_id) => {
    console.log("delete profesor middlewhere");
    try {
        var p = await Profesor.findByIdAndUpdate(_id, {$set: {estado: false}});
        p = await Profesor.findById(_id);
        return p;
      } catch (error) {
        return error;
    }
};

//Método encargado de asignar un profesor a asistente
//_id es el id de mongo
export const asignarCoordinador = async (_id,campusP) => {
    try {
        var data = await Profesor.findOne({ campus: campusP,coordinador: true}); 
        if(data) {
            data.coordinador = false;
            data.save();
        }
        var p = await Profesor.findByIdAndUpdate(_id, {$set: {coordinador: true}});
        p = await Profesor.findById(_id);
        return p;
      } catch (error) {
        return error;
    }
};

//Metodo para hacer del Equipo Guia
export async function getEquipoGuia(){
    try {
        const data = await Profesor.find({equipo: true}); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        return error;
    }
};

//Método post para modificar los profesores y que sean parte del Equipo Guia
export const ingresarProfesoresEquipo = async (lista) => {
    try {
        for (const DTOProfesor of lista) {
            var p = await Profesor.findById(DTOProfesor._id);
            p.equipo = true;
            p.save();
        }; 
        return lista;
    } catch (error) {
        return error;
    }
};

//Método delete para eliminar a un profesor del Equipo Guía
export const eliminarProfesorEquipo = async (id) => {
    console.log("delete profesorEquipo middlewhere");
    try {
        var p = await Profesor.findByIdAndUpdate(id, {$set: {equipo: false}});
        p = await Profesor.findById(id);
        return p;
      } catch (error) {
        return error;
    }
};