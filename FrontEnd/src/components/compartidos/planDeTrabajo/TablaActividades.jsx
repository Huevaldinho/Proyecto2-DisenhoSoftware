import React from "react";
//Componentes de tabla
import HeaderTablaActividades from "./HeaderTablaActividades";
import BodyTablaActividades from "./BodyTablaActividades";
//Contexto
import MainContext from "../../../contexts/MainControllerContext";
import { useContext } from "react";
//Datos quemados
import { planDeTrabajo as pTEjemplo } from "../../../datos";

function TablaActividades(props) {
  //Utiliza el main controller para pedir los datos a mostrar.
  const mainController = useContext(MainContext); //*Contexto para hacerle la peticion al mainController.
  let planDeTrabajo = mainController.getPlanDeTrabajo(); //*Es un json con id,nombre y actividades (dentro trae jsons)
  planDeTrabajo = pTEjemplo; //!OJO, esto se debe quitar cuando la api funcione.
  const { id, nombre, actividades } = planDeTrabajo;
  //Valida que existan actividades para mostrar.
  if (actividades.length == 0) {
    //Si no hay actividades todavia
    return (
      <div className="text-center font-bold text-4xl text-red-500">
        No hay actividades para mostrar.
      </div>
    );
  }
  /*
    Funcion para ordenar array por fecha mas proxima.
    Array: array de objetos.
    key: "fechaHora"
    El return queda en el mismo array de input en parametro, pero ordenado.
  */
  function sortByDate(array, key) {
    return array.sort((a, b) => {
      var dateA = new Date(
        a[key].split(" ")[0].split("-").reverse().join("/") +
          " " +
          a[key].split(" ")[1]
      ).getTime();
      var dateB = new Date(
        b[key].split(" ")[0].split("-").reverse().join("/") +
          " " +
          b[key].split(" ")[1]
      ).getTime();
      return dateA - dateB;
    });
  }
  //Ordena las actividades por fecha mas proxima.
  sortByDate(actividades, "fechaHora");

  //Si hay actividades para mostrar.
  return (
    <div className="flex flex-col mt-8 text-center">
      <h1 className="text-center font-light p-2 text-blue-600">
        Pulsa doble click para ver detalles de actividad
      </h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <HeaderTablaActividades />
              <BodyTablaActividades actividades={actividades} />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaActividades;
