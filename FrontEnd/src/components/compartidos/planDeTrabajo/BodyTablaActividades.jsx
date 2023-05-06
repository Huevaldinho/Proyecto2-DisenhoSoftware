import React, { useState } from "react";
import FilaTablaActividades from "./FilaTablaActividades";

function BodyTablaActividades({ actividades }) {
  if (actividades.lenght == 0)
    return (
      <tbody className="bg-white divide-y divide-gray-200">
      </tbody>
    );
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {actividades.map((actividad,index) => (
        <FilaTablaActividades key={actividad.id} actividad={actividad} index={index} />
      ))}
    </tbody>
  );
}

export default BodyTablaActividades;
