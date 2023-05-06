import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormularioDetallesActividad from "../../components/compartidos/actividades/FormularioDetallesActividad";
function DetallesActividad(props) {
  const navigate = useNavigate();
  //Mostrar todos los datos de la actividad
  //Los comentarios no se muestran al asistente.
  const { state } = useLocation();
  const actividad = state?.actividad;

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
      <FormularioDetallesActividad actividad={actividad} />
      {/*Boton regreso a plan de trabajo */}
      <div className="text-center">
        <button
          className="text-center bg-red-500 hover:bg-red-800  rounded-xl p-3 m-2"
          onClick={handleClick}
        >
          Regresar a Plan de Trabajo
        </button>
      </div>
    </div>
  );
}

export default DetallesActividad;
