import { json } from "express";
import mongoose from "mongoose"; //importación de librerias

const profesorSchema = new mongoose.Schema({
    codigo: {type: String, required: true},
    cedula: {type: String, required: true},
    nombre: {type: String, required: true},
    nombre2: {type: String, required: true},
    apellido1: {type: String, required: true},
    apellido2: {type: String, required: true},
    telefono: {type: String, required: true},
    celular: {type: String, required: true},
    correo: {type: String, required: true},
    campus: {type: String, required: true},
    contrasenna: {type: String, required: true},
    estado: {type: String, required: true},
    coordinador: {type: String, required: true},
    rol: {type: String, required: true},
    equipo: {type: String, required: true}
});
  
const Profesor = mongoose.model('Profesor',profesorSchema,'Profesor');

//Metodo para poder validar inicio de sesión de profesor
export async function validarProfesor(correoP,contrasennaP){
    try {
        const data = await Profesor.findOne({ correo: correoP, contrasenna: contrasennaP}); 
        if (data) {
            return data
        } else {
            return false
        }
    } catch (error) {
        return error
    }
};

//Método que retorna los datos del profesor (si lo encuentra) mediante el correo
export async function validarProfesorCambiarContra(correoP, contrasennaP){
    try {
        const contrasennaReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        var data = await Profesor.findOne({ correo: correoP}); 
        if (data) {
            if (contrasennaP.match(contrasennaReg)) {
                data.contrasenna = contrasennaP;
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
        const contrasennaReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const correoReg = /^[a-z0-9]+@estudiantec.cr$/
        const telefonoReg = /^(2|6|8){1}[0-9]{7}$/
        const cedulaReg = /^1{1}[0-9]{8}$/
        const data = await Profesor.findOne({ correo: DTOProfesor.correo}); 
        if (!DTOProfesor.contrasenna.match(contrasennaReg)) 
            return "1"; //error si la contraseña no es aceptada
        if (!DTOProfesor.correo.match(correoReg)) 
            return "2"; //error si el correo no es aceptado
        if (!DTOProfesor.telefono.match(telefonoReg)) 
            return "3";  //error si el telefono no es aceptado
        if (!DTOProfesor.cedula.match(cedulaReg)) 
            return "4"; //error si la cedula no es aceptada
        if (DTOProfesor.nombre == "" || DTOProfesor.apellido1 == "" || DTOProfesor.apellido2 == "")
            return "5" //error si alguno de estos campos esta vacio
        if (data)
            return "6" //error si ya existia un profesor registrado
        let p = new Profesor({
            codigo: DTOProfesor.codigo,
            cedula: DTOProfesor.cedula,
            nombre: DTOProfesor.nombre,
            apellido1: DTOProfesor.apellido1,
            apellido2: DTOProfesor.apellido2,
            telefono: DTOProfesor.telefono,
            celular: DTOProfesor.celular,
            correo: DTOProfesor.correo,
            campus: DTOProfesor.campus,
            contrasenna: DTOProfesor.contrasenna,
            estado: "Activo",
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
        const data = await Profesor.find({ $or: [{rol:"Profesor"}, {rol:"Asistente"}]}); 
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
        /*const contrasennaReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        const correoReg = /^[a-z0-9]+@estudiantec.cr$/
        const telefonoReg = /^(2|6|8){1}[0-9]{7}$/
        const cedulaReg = /^1{1}[0-9]{8}$/
        //const data = await Profesor.findOne({ correo: DTOProfesor.correo}); 
        if (!DTOProfesor.contrasenna.match(contrasennaReg)) 
            return "1"; //error si la contraseña no es aceptada
        if (!DTOProfesor.correo.match(correoReg)) 
            return "2"; //error si el correo no es aceptado
        if (!DTOProfesor.telefono.match(telefonoReg)) 
            return "3";  //error si el telefono no es aceptado
        if (!DTOProfesor.cedula.match(cedulaReg)) 
            return "4"; //error si la cedula no es aceptada
        if (DTOProfesor.nombre == "" || DTOProfesor.apellido1 == "" || DTOProfesor.apellido2 == "") 
            return "5" //error si alguno de estos campos esta vacio
        if (data)
            return "6" //error si ya existia un profesor registrado*/
            
        var p = await Profesor.findOne({cedula: DTOProfesor.cedula}); 
        p.codigo = DTOProfesor.codigo;
        p.cedula = DTOProfesor.cedula;
        p.nombre = DTOProfesor.nombre;
        p.nombre2 = DTOProfesor.nombre2;
        p.apellido1 = DTOProfesor.apellido1;
        p.apellido2 = DTOProfesor.apellido2;
        p.telefono = DTOProfesor.telefono;
        p.correo = DTOProfesor.correo;
        p.celular = DTOProfesor.celular;
        p.campus = DTOProfesor.campus;
        p.contrasenna = DTOProfesor.contrasenna;
        p.coordinador = DTOProfesor.coordinador;
        p.estado = DTOProfesor.estado;
        p.rol =  DTOProfesor.rol;
        p.equipo = DTOProfesor.equipo
        p.save();
        return p;
      } catch (error) {
        return error;
    }
};

//Método encargado de hacer que un profesor este inactivo, relacionado con la ruta de delete de Profesor 
//_id es la cedula del profesor
export const eliminarProfesor = async (_id) => {
    console.log("delete profesor middlewhere");
    try {
        var p = await Profesor.findOne({cedula: _id});
        p.estado = "Inactivo";
        p.save();
        return p;
      } catch (error) {
        return error;
    }
};

//Método encargado de asignar un profesor a asistente
//_id es el cedula del profesor
export const asignarCoordinador = async (_id,campusP) => {
    try {
        var data = await Profesor.findOne({ campus: campusP,coordinador: "COORDINADOR"}); 
        if(data) {
            data.coordinador = "NOCOORDINADOR";
            data.save();
        }
        var p = await Profesor.findOne({cedula: _id});
        p.coordinador = "COORDINADOR";
        p.save();
        return p;
      } catch (error) {
        return error;
    }
};

//Metodo para hacer del Equipo Guia
export async function getEquipoGuia(){
    try {
        const data = await Profesor.find({equipo: "Equipo"}); 
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
            var p = await Profesor.findOne({cedula: DTOProfesor.cedula});
            p.equipo = "Equipo";
            p.save();
        }; 
        return lista;
    } catch (error) {
        return error;
    }
};

//Método delete para eliminar a un profesor del Equipo Guía
export const eliminarProfesorEquipo = async (_id) => {
    console.log("delete profesorEquipo middlewhere");
    try {
        var p = await Profesor.findOne({cedula: _id});
        p.estado = "NOEquipo";
        p.save();
        return p;
      } catch (error) {
        return error;
    }
};