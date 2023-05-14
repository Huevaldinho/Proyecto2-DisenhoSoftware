import React from "react";
//Para abrir detalles de actividad
import { useNavigate } from "react-router-dom";

function FilaInfoProfesores({ profesor, index }) {
  const navigate = useNavigate();
  if (profesor == {}) return <tr></tr>;

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/modificarProfesor", { state: { profesor: profesor } });
  };
  const styleRow =
    "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900";
  const styleFilas =
    index % 2 === 0
      ? "bg-gray-200 hover:bg-blue-300"
      : "bg-gray-100 hover:bg-blue-300";
  return (
    <tr onDoubleClick={handleClick} className={styleFilas}>
      <td className={styleRow}>{profesor.codigo}</td>
      <td className={styleRow}>
        {profesor.nombre} {profesor.nombre2} {profesor.apellido1}{" "}
        {profesor.apellido2}
      </td>
      <td className={styleRow}>{profesor.campus}</td>
      <td className={styleRow}>{profesor.estado ? "Activido" : "Inactivo"}</td>
      <td className={styleRow}>{profesor.coordinador ? "Si" : "No"}</td>
    </tr>
  );
}

export default FilaInfoProfesores;
