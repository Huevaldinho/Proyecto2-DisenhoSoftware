//!Clase con los metodos para hacer peticiones a la api respecto a los profesores.

class AdminProfesores {
    //*Constructores
    constructor() { }
    //*Metodos
    async consultarProfesores() {//TODO
        //hacer peticion a api
        const response = await fetch('localhost/getProfesores');
        await console.log(response)
        //const data = await response.json();
        return null;
    }
}
export default AdminProfesores;