import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormularioActividad from "../../components/compartidos/actividades/FormularioActividad";
function DetallesActividad(props) {
  const navigate = useNavigate();
  //Mostrar todos los datos de la actividad
  //Los comentarios deben mostrarse si no es la asistente.
  const { state } = useLocation(); // Acceder al objeto 'state'
  const info = state?.actividad;
  console.log(info);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/planDeTrabajo");
  };

  return (
    <div className="text-center">
      {/*Texto */}
      <div>
        <h1 className="text-center font-semi p-3 m-3 text-5xl">
          Detalles de actividad
        </h1>
      </div>
      <FormularioActividad />
      {/*Boton regreso a plan de trabajo */}
      <div className="text-center">
        <button
          className="text-center bg-blue-500 hover:bg-green-500  rounded-xl p-3 m-2"
          onClick={handleClick}
        >
          Regresar a Plan de Trabajo
        </button>
      </div>
    </div>
  );
}

export default DetallesActividad;
