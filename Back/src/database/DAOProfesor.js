import mongoose from "mongoose";
//PRUEBA

const profesorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
});
  
const Profesor = mongoose.model('Profesor',profesorSchema,'Profesor');

//Metodo para poder validar inicio de sesión
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
            name: "Prueba",
            email: DTOProfesor.email,
            password: DTOProfesor.password,
        })
        p.save();
        res.status(200).json(p);
      } catch (error) {
        res.status(500).json(error);
    }
};


