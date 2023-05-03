import React from "react";

import FormularioInformacionEstudiante from "../../components/profesores/FormularioInformacionEstudiante";

/**
 * Este componente es la pagina que se mostrara cuando se necesite
 * modificar la informacion de un estudiante.
 * Esta modificacion incluye poner en estado inactivo al estudiante,
 * es decir, tambien funciona para eliminar a un estudiante.
 *
 * @returns Pagina para modificar o eliminar a un estudiante.
 *
 */
function ModificarEstudiante() {
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
    <div className="container items-center">
      <h1 className="p-4 m-3 text-center font-bold text-4xl">
        Modificar información de estudiante
      </h1>
      <FormularioInformacionEstudiante
        carnet={datosEstudiante.carnet}
        nombre={datosEstudiante.nombre}
        segundoNombre={datosEstudiante.segundoNombre}
        apellido1={datosEstudiante.apellido1}
        apellido2={datosEstudiante.apellido2}
        correo={datosEstudiante.correo}
        telefono={datosEstudiante.telefono}
        estado={datosEstudiante.estado}
      />
    </div>
  );
}

export default ModificarEstudiante;
