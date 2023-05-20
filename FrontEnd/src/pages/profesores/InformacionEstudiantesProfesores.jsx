import React from "react";
import { useNavigate } from "react-router-dom";
import TablaInformacionEstudiantes from "../../components/compartidos/informacionEstudiantes/TablaInformacionEstudiantes";

function InformacionEstudiantes(props) {
  const navigate = useNavigate();

  const handleAgregarEstudiante = (e) => {
    e.preventDefault();
    navigate("/agregarEstudiante");
  };
  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/menuProfesores");
  };
  return (
    <div className="container m-auto">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">Estudiantes</h1>
      </div>
      <div className="text-center m-auto" id="tablaActividades">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaInformacionEstudiantes />
      </div>
      <div
        className="text-center rounded-md bg-green-500 p-2 m-3 h-auto w-auto hover:bg-green-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para agregar una actividad nueva*/}
        <button
          className="text-center w-full h-full"
          onClick={handleAgregarEstudiante}
        >
          Agregar Estudiante
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

export default InformacionEstudiantes;
