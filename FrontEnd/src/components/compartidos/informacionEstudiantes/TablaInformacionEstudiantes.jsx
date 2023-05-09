import React from "react";
//Componentes de tabla
import BodyInformacionEstudiantes from "./BodyInformacionEstudiantes";
import HeaderInformacionEstudiantes from "./HeaderInformacionEstudiantes";
//Contexto
import MainContext from "../../../contexts/MainControllerContext";
import { useContext } from "react";
//Datos quemados
import { planilla as pplanilla } from "../../../datos";

function TablaInformacionEstudiantes(props) {
  //Utiliza el main controller para pedir los datos a mostrar.
  //const mainController = useContext(MainContext); //*Contexto para hacerle la peticion al mainController.
  //let planilla = mainController.getInformacionEstudiantes(); //*Es un json con id,nombre y estudiantes (dentro trae jsons)
  //planilla = pplanilla; //!OJO, esto se debe quitar cuando la api funcione.
  const { id,nombre, estudiantes } = pplanilla;
  //Valida que haaya estudiantes que mostrar
  if (estudiantes.length == 0) {
    //Si no hay estudiantes 
    return (
      <div className="text-center font-bold text-4xl text-red-500">
        No hay Estudiantes para mostrar.
      </div>
    );
  }
  return (
    <div className="flex flex-col mt-8 text-center">
      <h1 className="text-center font-light p-2 text-blue-600">
        Pulsa doble click para ver detalles del estudiante
      </h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <HeaderInformacionEstudiantes />
              <BodyInformacionEstudiantes estudiantes={estudiantes} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaInformacionEstudiantes;
