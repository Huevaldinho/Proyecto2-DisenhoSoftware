import React from "react";
import TablaActividades from "../../components/compartidos/planDeTrabajo/TablaActividades";
import { MainControllerContext } from "../../contexts/MainControllerContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Comentarios(props) {
  const navigate = useNavigate();
  const { consultarPlanDeTrabajo, planDeTrabajo } = useContext(
    MainControllerContext
  );

  const updateState = () => {
    setTimeout(() => {
      consultarPlanDeTrabajo();
    }, 1000);
  };
  useEffect(() => {
    updateState();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/agregarActividad");
  };
  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/menuProfesores");
  };
  if (Object.keys(planDeTrabajo).length === 0) {
    return (
      <p className="text-center font-semibold text-5xl">
        Cargando plan de trabajo...
      </p>
    );
  }
  return (
    <div className="container text-center">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">
          {planDeTrabajo != undefined && planDeTrabajo != {}
            ? planDeTrabajo?.nombre
            : "Nombre plan de trabajo"}
        </h1>
      </div>
      <div className="text-center" id="tablaActividades">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaActividades actividades={planDeTrabajo?.actividades} />
      </div>
      <div
        className="text-center rounded-md bg-green-500 p-2 m-3 h-auto w-auto hover:bg-green-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para agregar una actividad nueva*/}
        <button className="text-center w-full h-full" onClick={handleClick}>
          Agregar actividad
        </button>
      </div>
      <div
        className="text-center rounded-md bg-red-500 p-2 m-3 h-auto w-auto hover:bg-red-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para regresar la menu profesores*/}
        <button
          className="text-center w-full h-full"
          onClick={handleClickReturn}
        >
          Regresar al Menú de Profesores
        </button>
      </div>
    </div>
  );
}

export default Comentarios;