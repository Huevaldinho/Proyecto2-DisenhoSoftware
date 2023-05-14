import React, { useState } from "react";
import FilaInformacionEstudiantes from "./FilaInformacionEstudiantes";

function BodyInformacionEstudiantes({ estudiantes }) {
  if (estudiantes.lenght == 0)
    return (
      <tbody className="bg-white divide-y divide-gray-200">
      </tbody>
    );
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {estudiantes.map((estudiante,index) => (
        <FilaInformacionEstudiantes key={estudiante.carnet} estudiante={estudiante} index={index} />
      ))}
    </tbody>
  );
}

export default BodyInformacionEstudiantes;