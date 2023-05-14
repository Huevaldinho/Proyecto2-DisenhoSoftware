import React from "react";
import TablaActividades from "../../components/compartidos/planDeTrabajo/TablaActividades";
import { MainControllerContext } from "../../contexts/MainControllerContext";
import { useContext } from "react";
import { planDeTrabajo as pTEjemplo } from "../../datos";
import { useNavigate } from "react-router-dom";

function PlanDeTrabajo(props) {
  const navigate = useNavigate();
  const mainController = useContext(MainControllerContext); //*Contexto para hacerle la peticion al mainController.
  let planDeTrabajo = mainController.getPlanDeTrabajo(); //*Es un json con id,nombre y actividades (dentro trae jsons)
  planDeTrabajo = pTEjemplo; //!OJO, esto se debe quitar cuando la api funcione.
  //TODO
  //Faltan botones para crear actividad por parte del coordinador.

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/agregarActividad");
  };
  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/menuProfesores");
  };
  return (
    <div className="container text-center">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">
          {planDeTrabajo.nombre}
        </h1>
      </div>
      <div className="text-center" id="tablaActividades">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaActividades />
      </div>
      <div
        className="text-center rounded-md bg-green-500 p-2 m-3 h-auto w-auto hover:bg-green-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para agregar una actividad nueva*/}
        <button className="text-center w-full h-full" onClick={handleClick}>
          Agregar actividad
        </button>
      </div>
      <div
        className="text-center rounded-md bg-red-500 p-2 m-3 h-auto w-auto hover:bg-red-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para regresar la menu profesores*/}
        <button
          className="text-center w-full h-full"
          onClick={handleClickReturn}
        >
          Regresar al Menú de Profesores
        </button>
      </div>
    </div>
  );
}

export default PlanDeTrabajo;
