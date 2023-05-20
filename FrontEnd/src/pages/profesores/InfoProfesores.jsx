import React from "react";
import { MainControllerContext } from "../../contexts/MainControllerContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TablaProfesores from "../../components/compartidos/informacionProfesores/TablaProfesores";

function informacionProfesores(props) {
  const navigate = useNavigate();
  const { profesores, consultarProfesores } = useContext(MainControllerContext);

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/registrarProfesor");
  };
  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/menuProfesores");
  };

  const updateState = () => {
    setTimeout(() => {
      consultarProfesores();
    }, 1000);
  };

  // Efecto que actualiza el estado de myState después de que el componente ha sido montado
  useEffect(() => {
    updateState();
  }, []);

  if (profesores.length == 0) {
    return (
      <p className="text-center font-semibold text-5xl m-auto">
        Cargando profesores...
      </p>
    );
  }

  return (
    <div className="container m-auto ">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">Profesores</h1>
      </div>
      <div className="text-center" id="tablaProfesores">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaProfesores profesores={profesores} />
      </div>
      <div
        className="text-center rounded-md bg-green-500 p-2 m-3 h-auto w-auto hover:bg-green-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para agregar una actividad nueva*/}
        <button className="text-center w-full h-full" onClick={handleClick}>
          Agregar Profesor
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

export default informacionProfesores;
