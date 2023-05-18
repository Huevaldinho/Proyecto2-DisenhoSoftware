import React from "react";
import { useNavigate } from "react-router-dom";
import FormularioDetallesActividad from "../../components/compartidos/actividades/FormularioDetallesActividad";
import ListaComentarios from "../../components/profesores/ListaComentarios";
function DetallesActividad(props) {
  const navigate = useNavigate();
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
      <FormularioDetallesActividad />
      <ListaComentarios />
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
