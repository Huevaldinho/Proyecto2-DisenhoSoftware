import React from 'react'
import FormularioAgregarEstudiante from '../../components/profesores/FormularioAgregarEstudiante';
function AgregarEstudiante() {
  //!Los datos se deben pasar por parametro cuando se llame a este componente.
  /*
  
    {carnet,nombre,segundoNombre,apellido1,apellido2,correo,telefono,estado}
  */
    const datosEstudiante = {
        carnet: 2021035489,
        nombre: "Felipe",
        segundoNombre: "De Jesús",
        apellido1: "Obando",
        apellido2: "Arrieta",
        correo: "felipeobando@estudiantec.cr",
        telefono: "70130686",
        estado: "Activo",
      };
    
      return (
        <div className="container">
          <h1 className="p-4 m-3 text-center font-bold text-4xl items-center">
            Agregar Estudiante
          </h1>
          <FormularioAgregarEstudiante
            carnet={""}
            nombre={""}
            segundoNombre={""}
            apellido1={""}
            apellido2={""}
            correo={""}
            telefono={""}
            estado={""}
          />
        </div>
      );
}

export default AgregarEstudiante
