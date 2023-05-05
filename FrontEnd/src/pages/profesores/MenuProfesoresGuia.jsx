import React from "react";

import { useNavigate } from "react-router-dom";
import MainContext from "../../contexts/MainControllerContext";
import { planDeTrabajo } from "../../datos";
import { useContext } from "react";

function MenuProfesoresGuia() {
  const mainController = useContext(MainContext); //Contexto para hacerle la peticion al mainController.
  const navigate = useNavigate(); //Para redireccionar.

  const handleInformacionEquipoGuia = (e) => {
    e.preventDefault();
    console.log("Handle informacion equipo guia");
    //Pedir informacion de equipo guia a la API antes de redireccionar.
    navigate("/informacionEquipoGuia");
  };
  const handlePlanDeTrabajo = (e) => {
    //!DOING
    //Pedir plan de trabajo a la API antes de redireccionar.
    e.preventDefault();
    console.log("Handle plan de trabajo");
    //let planDeTrabajo = mainController.getPlanDeTrabajo(); //Es un json como el de abajo.
    /*
        {
            id: 1,
            nombre: "Plan de Trabajo 2023",
            actividades
        }
    */
    navigate("/planDeTrabajo", { state: planDeTrabajo }); //Utiliza uno que esta en el archivo datos.js para probar.
  };

  const handleInformacionEstudiantes = (e) => {
    //Pedir informacion de estudiantes a la API antes de redireccionar.
    e.preventDefault();
    console.log("Handle informacion estudiantes");
    navigate("/informacionEstudiantes");
  };

  const estiloBotones =
    "text-center p-3 m-3bg-blue-600 border-collapse shadow-xl hover:bg-green-600 bg-blue-600 rounded-3xl";
  return (
    <div className="container p-5 m-3">
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
