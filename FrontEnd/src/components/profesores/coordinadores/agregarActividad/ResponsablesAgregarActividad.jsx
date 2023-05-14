import React from "react";
//Main controller
import { useContext } from "react";
import {MainControllerContext} from "../../../../contexts/MainControllerContext";
//Datos quemados de prueba
import { profesores as profes } from "../../../../datos";

function ResponsablesAgregarActividad({
  handleResponsableChange,
  cssElementosForm,
}) {
  //*DOING
  const mainController = useContext(MainControllerContext);
  //Pedir profesores a la api.
  let profesores = mainController.consultarProfesores();
  profesores = profes; //!QUITAR CUANDO API FUNCIONE

  if (profesores.length == 0) {
    return (
      <div className="text-center">
        <h1 className="text-center  font-semibold  ">Responsable (s):</h1>
        <text className="text-red-500">No hay profesores registrados.</text>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center">Responsable (s):</h1>
      {profesores.map((responsable, index) => (
        <div key={index} className={cssElementosForm}>
          <input
            type="checkbox"
            id={`responsable-${index}`}
            name={`responsable-${index}`}
            checked={responsable.seleccionado}
            onChange={(e) => handleResponsableChange(responsable)}
            className="w-fit p-2 m-2"
          />

          <label htmlFor={`responsable-${index}`} className="text-center w-fit">
            {"  " +
              responsable.nombre +
              " " +
              responsable.apellido1 +
              " " +
              responsable.apellido2}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ResponsablesAgregarActividad;
