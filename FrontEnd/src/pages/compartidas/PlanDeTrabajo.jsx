import React from "react";
import TablaActividades from "../../components/compartidos/planDeTrabajo/TablaActividades";
import MainContext from "../../contexts/MainControllerContext";
import { useContext } from "react";
import { planDeTrabajo as pTEjemplo } from "../../datos";

function PlanDeTrabajo(props) {
  const mainController = useContext(MainContext); //*Contexto para hacerle la peticion al mainController.
  let planDeTrabajo = mainController.getPlanDeTrabajo(); //*Es un json con id,nombre y actividades (dentro trae jsons)
  planDeTrabajo = pTEjemplo; //!OJO, esto se debe quitar cuando la api funcione.
  //TODO
  //Faltan botones para crear actividad por parte del coordinador.
  return (
    <div className="container">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">
          {planDeTrabajo.nombre}
        </h1>
      </div>
      <div className="text-center" id="tablaActividades">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaActividades />
      </div>
    </div>
  );
}

export default PlanDeTrabajo;
