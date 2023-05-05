import React from "react";
import { useLocation } from "react-router-dom";
import TablaActividades from "../../components/profesores/coordinadores/TablaActividades";

function PlanDeTrabajo(props) {
  //TODO
  const { state } = useLocation();
  const { id, nombre, actividades } = state; // Read values passed on state
  console.log(id, nombre, actividades);
  return (
    <div className="container">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">Plan de trabajo</h1>
      </div>
      <div className="text-center" id="tablaActividades">
        <TablaActividades actividades></TablaActividades>
      </div>
    </div>
  );
}

export default PlanDeTrabajo;
