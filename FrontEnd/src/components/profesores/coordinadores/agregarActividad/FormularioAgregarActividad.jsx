import React from "react";
import { useState, useEffect } from "react"; //Para obtner en tiempo real la info ingresada

//Settear fecha yora Calendarios por defecto (toma la fecha actual)
import moment from "moment";

//Componentes del formulario
import NombreActividad from "./NombreActividad";
import SemanasAgregarActividad from "./SemanasAgregarActividad";
import EstadoActividad from "./EstadoActividadAgregarActividad";
import TipoActividadAgregarActividad from "./TipoActividadAgregarActividad";
import FechaHoraAgregarActividad from "./FechaHoraAgregarActividad";
import ModalidadAgregarActividad from "./ModalidadAgregarActividad";
import EnlaceAgregarActividad from "./EnlaceAgregarActividad";
import DescripcionAgregarActividad from "./DescripcionAgregarActividad";
import RecordatorioAgregarActividad from "./RecordatorioAgregarActividad";
import ResponsablesAgregarActividad from "./ResponsablesAgregarActividad";
import AficheAgregarActividad from "./AficheAgregarActividad";
//Validar datos
import { validarDatosActividad } from "../../../../validation/ValidarInputs";

function FormularioAgregarActividad(props) {
  //*Los permisos aun no se crean pero para agregar solo el coordinador puede hacerlo.
  //!USAR DTOACTIVIDAD para mandarle los datos al main controller.

  //Use states
  const [nombreActividad, setNombreActividad] = useState(null); //Nombre
  const [fechaHoraSeleccionada, setFechaHoraSeleccionada] = useState(moment()); //Fecha y hora de actividad
  const [fechaPublicacion, setFechaPublicacion] = useState(moment()); //Fecha y hora de publicacion
  const [descripcionIngresada, setDescripcionIngresada] = useState(null); //Descripcion
  const [semanaSeleccionada, setSemanaSeleccionada] = useState(null); //Semana
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(null); //Estado
  const [modalidadSeleccionada, setModalidadSeleccionada] = useState(null); //Modalidad
  const [tipoActividadSeleccionada, setTipoActividadSeleccionada] =
    useState(null); //Tipo actividad
  const [enlace, setEnlace] = useState(null); //Enlace
  const [afiche, setAfiche] = useState(null); //Afiche
  const [responsables, setResponsables] = useState([]); //Responsables

  //Para agregar responsables
  const agregarResponsable = (responsable) => {
    setResponsables([...responsables, responsable]);
  };
  //Para eliminar responsables
  const eliminarElemento = (elemento) => {
    const indiceAEliminar = responsables.indexOf(elemento);
    if (indiceAEliminar > -1) {
      const nuevoArray = [...responsables];
      nuevoArray.splice(indiceAEliminar, 1);
      setResponsables(nuevoArray);
    }
  };
  //Para manejar los responsables
  const handleResponsableChange = (responsableIn) => {
    if (responsables.length == 0) {
      //Si no hay responsables en el arreglo
      agregarResponsable(responsableIn);
    } else {
      //Si ya hay responsables, hay que fijarse si el responsableIn ya esta registrado
      //si esta registrado es porque se está desmarcando.
      for (let i = 0; i < responsables.length; i++) {
        if (responsables[i]._id == responsableIn._id) {
          eliminarElemento(responsableIn);
          return;
        }
      }
      agregarResponsable(responsableIn);
    }
  };
  //Para ver como se actualizan en tiempo real los responsables.
  // useEffect(() => {
  //   console.log("Responsables actualizados:", responsables);
  // }, [responsables]);

  const handleEnviar = (e) => {
    e.preventDefault();
    console.log(
      "Nombre actividad:\n",
      nombreActividad,
      "\nDescripcion:\n",
      descripcionIngresada,
      "\nSemana actividad:\n",
      semanaSeleccionada,
      "\nEstado actividad:\n",
      estadoSeleccionado,
      "\nModalidad actividad:\n",
      modalidadSeleccionada,
      "\nTipo actividad:\n",
      tipoActividadSeleccionada,
      "\nFecha y hora de la actividadd:\n",
      fechaHoraSeleccionada,
      "\nFecha y hora de publicacion:\n",
      fechaPublicacion,
      "\nEnlace:\n",
      enlace,
      "\nAfiche:\n",
      afiche,
      "\nResponsables:\n",
      responsables
    );
    let datosValidos = validarDatosActividad(null);
  };

  //*Styles
  const cssElementosForm =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <form className="pt-5 pl-5 pr-5 mt-10 ml-10 mr-10 mb-2 rounded-2xl bg-slate-800 grid grid-cols-2 gap-4">
      {/*Nombre*/}
      <NombreActividad
        cssElementosForm={cssElementosForm}
        setNombreActividad={setNombreActividad}
      />
      {/*Semana*/}
      <SemanasAgregarActividad setSemanaSeleccionada={setSemanaSeleccionada} />
      {/*Estado actividad */}
      <EstadoActividad setEstadoSeleccionado={setEstadoSeleccionado} />
      {/*Tipo actividad */}
      <TipoActividadAgregarActividad
        setTipoActividadSeleccionada={setTipoActividadSeleccionada}
      />
      {/*Fecha y hora */}
      <FechaHoraAgregarActividad
        setFechaHoraSeleccionada={setFechaHoraSeleccionada}
        fechaHoraSeleccionada={fechaHoraSeleccionada}
        texto={"Fecha y hora de la actividad:"}
      />
      {/*Fecha publicacion */}
      <FechaHoraAgregarActividad
        setFechaHoraSeleccionada={setFechaPublicacion}
        fechaHoraSeleccionada={fechaPublicacion}
        texto={" Fecha y hora de publicación:"}
      />
      {/*Modalidad */}
      <ModalidadAgregarActividad
        setModalidadSeleccionada={setModalidadSeleccionada}
      />
      {/*Enlace */}
      <EnlaceAgregarActividad
        cssElementosForm={cssElementosForm}
        setEnlace={setEnlace}
      />
      {/*Descripcion */}
      <DescripcionAgregarActividad
        cssElementosForm={cssElementosForm}
        setDescripcionIngresada={setDescripcionIngresada}
      />
      {/* Recordatorio*/}
      <RecordatorioAgregarActividad />
      {/* Responsables*/}
      <ResponsablesAgregarActividad
        cssElementosForm={cssElementosForm}
        handleResponsableChange={handleResponsableChange}
      />
      {/*Afiche FALTA GUARDAR EL AFICHE*/}
      <AficheAgregarActividad setAfiche={setAfiche} />

      {/*Boton enviar */}
      <div className="text-center bg-green-500 hover:bg-green-800 rounded-2xl p-3 m-5">
        <button
          type="submit"
          className="text-center w-full"
          onClick={handleEnviar}
        >
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormularioAgregarActividad;
