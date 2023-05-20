import React from "react";
import { MainControllerContext } from "../../contexts/MainControllerContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TablaRespuestas from "../../components/compartidos/respuestas/TablaRespuestas";
function ListaRespuestas({ actividad }) {
  const navigate = useNavigate();
  const { comentarios, consultarComentarios } = useContext(
    MainControllerContext
  );

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/agregarRespuesta");
  };

  const updateState = () => {
    setTimeout(() => {
      consultarComentarios(actividad._id);
    }, 1000);
  };

  // Efecto que actualiza el estado de myState después de que el componente ha sido montado
  useEffect(() => {
    updateState();
  }, []);

  console.log("Actividad en ListaRespuestas:", actividad);

  if (comentarios.length == 0) {
    return (
      <p className="text-center font-semibold text-5xl">
        Cargando Comentarios...
      </p>
    );
  }
  return (
    <div className="container m-auto">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">Comentarios</h1>
      </div>
      <div className="text-center" id="tablaProfesores">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaRespuestas comentarios={comentarios} />
      </div>
      <div
        className="text-center rounded-md bg-green-500 p-2 m-3 h-auto w-auto hover:bg-green-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para agregar una actividad nueva*/}
        <button className="text-center w-full h-full" onClick={handleClick}>
          Agregar Respuesta
        </button>
      </div>
    </div>
  );
}

export default ListaRespuestas;
