import React, { useState } from "react";
import FilaRespuesta from "./FilaRespuestas";

function BodyRespuesta({ comentarios }) {
  if (comentarios.lenght == 0)
    return <tbody className="bg-white divide-y divide-gray-200"></tbody>;
    console.log(comentarios);
  return (
    
    <tbody className="bg-white divide-y divide-gray-200">
      {comentarios.map((comentario, index) => (
        <FilaRespuesta key={index} comentario={comentario} index={index} />
      ))}
    </tbody>
  );
}

export default BodyRespuesta;