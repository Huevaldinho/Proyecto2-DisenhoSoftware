import React from "react";

import { useNavigate } from "react-router-dom";
import NavBarProfesores from "../../components/navbars/navBarProfesores";

function MenuProfesoresGuia() {
  const navigate = useNavigate(); //* Para redireccionar.

  //Redirecciona a infoProfes
  const handleInformacionEquipoGuia = (e) => {
    e.preventDefault();
    navigate("/infoProfesores");
  };
  //Redirecciona a planDeTrabajo
  const handlePlanDeTrabajo = (e) => {
    e.preventDefault();
    navigate("/planDeTrabajo");
  };

  //Redirecciona a informacionEstudiantesProfesores
  const handleInformacionEstudiantes = (e) => {
    e.preventDefault();
    navigate("/informacionEstudiantesProfesores");
  };
  const estiloBotones =
    "text-center p-3 m-3bg-blue-600 border-collapse shadow-xl hover:bg-green-600 bg-blue-600 rounded-3xl";
  return (
    <div className="container p-5 m-3">
      {/**
       <NavBarProfesores /> 
       */}
      <h1 className="text-center font-bold text-5xl">Menú Profesores </h1>
      <div
        id="containerBotonInformacionEquipoGuia"
        className="text-center p-2 m-2 "
      >
        <div className="p-5 m-3">
          <button
            className={estiloBotones}
            onClick={handleInformacionEquipoGuia}
          >
            Información Equipo Guía
          </button>
        </div>
        <div id="containerBotonPlanDeTrabajo" className="p-5 m-3">
          <button className={estiloBotones} onClick={handlePlanDeTrabajo}>
            Plan de Trabajo
          </button>
        </div>
        <div id="containerBotonInformacionEstudiantes" className="p-5 m-3">
          <button
            className={estiloBotones}
            onClick={handleInformacionEstudiantes}
          >
            Información Estudiantes
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuProfesoresGuia;
