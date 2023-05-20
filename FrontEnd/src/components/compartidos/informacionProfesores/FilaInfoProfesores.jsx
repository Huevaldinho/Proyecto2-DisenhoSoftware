import React, { useContext } from "react";
//Para abrir detalles de actividad
import { useNavigate } from "react-router-dom";
import { MainControllerContext } from "../../../contexts/MainControllerContext";
function FilaInfoProfesores({ profesor, index }) {
  const { asignarAsistente } = useContext(MainControllerContext);
  const navigate = useNavigate();
  if (profesor == {}) return <tr></tr>;

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/informacionProfesor", { state: { profesor: profesor } });
  };
  const handleAsignarAsistente = async (e) => {
    e.preventDefault();
    console.log("Asistente asignado:", profesor);
    let respuesta = await asignarAsistente(profesor.codigo, profesor.campus);
    console.log("RESPUESTA OBTENIDA AL ASIGNAR ASISTENTE:", respuesta);
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
      <td className={styleRow}>{profesor.rol}</td>

      <td className={styleRow}>{profesor.campus}</td>
      <td className={styleRow}>
        {profesor.estado == "Activo" ? "Activo" : "Inactivo"}
      </td>
      <td className={styleRow}>
        {profesor.coordinador == "NOCOORDINADOR" ? "No" : "Si"}
      </td>
      {profesor.rol == "Asistente" ? (
        <td className={styleRow}>
          <button
            onClick={handleAsignarAsistente}
            className="text-center bg-green-500 hover:bg-green-800 rounded-md p-1 "
          >
            Asignar
          </button>
        </td>
      ) : (
        <></>
      )}
    </tr>
  );
}

export default FilaInfoProfesores;
