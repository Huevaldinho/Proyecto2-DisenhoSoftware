import React from "react";
//Para abrir detalles de actividad
import { useNavigate } from "react-router-dom";

function FilaRespuesta({ comentario, index }) {
  if (comentario == {}) return <tr></tr>;
  const styleRow =
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";
  const styleFilas =
    index % 2 === 0
      ? "bg-gray-200 hover:bg-blue-300"
      : "bg-gray-100 hover:bg-blue-300";
      if (comentario.idRespuesta != null)
  return (
    <tr className={styleFilas}>
      <td className={styleRow}>{comentario.descripcion}</td>
      <td className={styleRow}>
        {comentario.autor}
      </td>
      <td className={styleRow}>{comentario.fecha}</td>
    </tr>
  );
}

export default FilaRespuesta;