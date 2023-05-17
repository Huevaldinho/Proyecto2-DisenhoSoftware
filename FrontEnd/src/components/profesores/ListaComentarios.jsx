import React from "react";
import { MainControllerContext } from "../../contexts/MainControllerContext";
import { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TablaComentarios from "../../components/compartidos/comentarios/TablaComentarios";

function ListaComentarios(props) {
  const navigate = useNavigate();
  const { comentarios, consultarComentarios } = useContext(
    MainControllerContext
  );
  const { state } = useLocation();
  const actividad = state?.actividad;

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/agregarComentario", { state: { actividad: actividad } });
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

  if (comentarios.length == 0) {
    return (
      <p className="text-center font-semibold text-5xl">
        Cargando Comentarios...
      </p>
    );
  }
  return (
    <div className="container">
      <div className="text-center" id="nombrePlanConteiner">
        <h1 className="text-center font-bold text-5xl p-5">Comentarios</h1>
      </div>
      <div className="text-center" id="tablaProfesores">
        {/*Las actividades se las pasa a la tabla por props */}
        <TablaComentarios comentarios={comentarios} />
      </div>
      <div
        className="text-center rounded-md bg-green-500 p-2 m-3 h-auto w-auto hover:bg-green-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para agregar una actividad nueva*/}
        <button className="text-center w-full h-full" onClick={handleClick}>
          Agregar Comentario
        </button>
      </div>
    </div>
  );
}

export default ListaComentarios;
