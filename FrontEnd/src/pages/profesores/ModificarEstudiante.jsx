import React from "react";
import { useLocation } from "react-router-dom";

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
function ModificarEstudiante(props) {
  const location = useLocation(); //Declara un hook paar obtener los datos.
  const dtoEstudiante = location.state?.datos; //Extrae los datos del hook.
  return (
    <div className="container">
      <h1 className="p-4 m-3 text-center font-bold text-4xl">
        Modificar información de estudiante
      </h1>
      <FormularioInformacionEstudiante />
    </div>
  );
}

export default ModificarEstudiante;
