import React from "react";
//Componentes de tabla

//Contexto
import { MainControllerContext } from "../../../contexts/MainControllerContext";
import { useContext } from "react";
//Datos quemados
import { profPlanilla as profEjemplo } from "../../../datos";
import HeaderInfoProfesores from "./HeaderInfoProfesores";
import BodyInfoProfesores from "./BodyInfoProfesores";

function TablaProfesores(props) {
  //Utiliza el main controller para pedir los datos a mostrar.
  //const mainController = useContext(MainControllerContext); //*Contexto para hacerle la peticion al mainController.
  //let profesores = mainController.getProfesores(); //*Es un json con id,nombre y actividades (dentro trae jsons)
  //profesores = profEjemplo; //!OJO, esto se debe quitar cuando la api funcione.
  const { id, nombre, profesores } = profEjemplo;
  //Valida que existan actividades para mostrar.
  if (profesores.length == 0) {
    //Si no hay actividades todavia
    return (
      <div className="text-center font-bold text-4xl text-red-500">
        No hay profesores para mostrar.
      </div>
    );
  }
  return (
    <div className="flex flex-col mt-8 text-center">
      <h1 className="text-center font-light p-2 text-blue-600">
        Pulsa doble click para ver detalles del profesor
      </h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <HeaderInfoProfesores />
              <BodyInfoProfesores profesores={profesores} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaProfesores;