import React from "react";
//Para abrir detalles de actividad
import { useNavigate } from "react-router-dom";

function FilaComentarios({ comentario, index }) {
  const navigate = useNavigate();
  if (comentario == {}) return <tr></tr>;

  console.log("Comentario en fila comentarios:", comentario);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/listaRespuestas", { state: { comentario: comentario } });
  };
  const styleRow =
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";
  const styleFilas =
    index % 2 === 0
      ? "bg-gray-200 hover:bg-blue-300"
      : "bg-gray-100 hover:bg-blue-300";
  if (comentario.idRespuesta == null)
    return (
      <tr onDoubleClick={handleClick} className={styleFilas}>
        <td className={styleRow}>{comentario.descripcion}</td>
        <td className={styleRow}>{comentario.autor}</td>
        <td className={styleRow}>{comentario.fecha}</td>
      </tr>
    );
}

export default FilaComentarios;
