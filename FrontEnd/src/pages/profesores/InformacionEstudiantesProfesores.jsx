import React from "react";
import MainContext from "../../contexts/MainControllerContext";
import { useContext } from "react";
import { planilla as pplanilla } from "../../datos";
import { useNavigate } from "react-router-dom";
import TablaInformacionEstudiantes from "../../components/compartidos/informacionEstudiantes/TablaInformacionEstudiantes";

function InformacionEstudiantes(props) {
  const navigate = useNavigate();
  const mainController = useContext(MainContext); //*Contexto para hacerle la peticion al mainController.
  let planilla = mainController.getInformacionEstudiantes( );
  planilla = pplanilla; //!OJO, esto se debe quitar cuando la api funcione.
  //TODO
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/agregarEstudiante");
  };
  const handleClickReturn = (e) => {
    e.preventDefault();
    navigate("/menuProfesores");
  };
  return (
    <div className="container">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">
          {planilla.nombre}
        </h1>
      </div>
      <div className="text-center" id="tablaActividades">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaInformacionEstudiantes />
      </div>
      <div
        className="text-center rounded-md bg-green-500 p-2 m-3 h-auto w-auto hover:bg-green-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para agregar una actividad nueva*/}
        <button className="text-center w-full h-full" onClick={handleClick}>
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
