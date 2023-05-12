import React from "react";
import { useLocation } from "react-router-dom";
import FormularioAgregarProfesor from "../../components/profesores/FormularioAgregarProfesor";
/**
 * Este componente es la pagina que se mostrara cuando se necesite
 * modificar la informacion de un estudiante.
 * Esta modificacion incluye poner en estado inactivo al estudiante,
 * es decir, tambien funciona para eliminar a un estudiante.
 *
 * @returns Pagina para modificar o eliminar a un estudiante.
 *
 */
function RegistrarProfesor(props) {
  /*
   *Quien llama a esta llamada es el menu de profesores,
   *ahi es donde se encuentra la informacion del estudiante que se desea
   *modificar.
   */
  return (
    <div className="container">
      <h1 className="p-4 m-3 text-center font-bold text-4xl">
        Registrar Profesor
      </h1>
      <FormularioAgregarProfesor />
    </div>
  );
}

export default RegistrarProfesor;