import React from "react";
import Select from "react-select";
import { useState } from "react";
import Estado from "../../../services/enums/estado";
import TipoActividad from "../../../services/enums/tipoActividad";

import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import moment from "moment";

function FormularioAgregarActividad(props) {
  //*Formulario utilizado para agregar o modificar una actividad.
  //*Los permisos aun no se crean pero para agregar solo el coordinador puede hacerlo.
  //!USAR DTOACTIVIDAD para mandarle los datos al main controller.

  const semanas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const modalidades = ["Presencial", "Virtual"];
  //Mete estados en arreglo para mostrar en combobox.
  const estadosActividad = Object.values(Estado);
  const tipoActividades = Object.values(TipoActividad);
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

  const handleEnviar = (e) => {
    e.preventDefault();
    console.log(
      "Nombre actividad:",
      nombreActividad,
      "Descripcion:",
      descripcionIngresada,
      "Semana actividad:",
      semanaSeleccionada,
      "Estado actividad:",
      estadoSeleccionado,
      "Modalidad actividad:",
      modalidadSeleccionada,
      "Tipo actividad:",
      tipoActividadSeleccionada,
      "Fecha y hora de la actividadd:",
      fechaHoraSeleccionada,
      "Fecha y hora de publicacion:",
      fechaPublicacion
    );
  };

  //*Styles
  const cssElementosForm =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <form className="pt-5 pl-5 pr-5 mt-10 ml-10 mr-10 mb-2 rounded-2xl bg-slate-800 grid grid-cols-2 gap-4">
      {/*Nombre*/}
      <div className="text-center">
        <label htmlFor="nombreActividad" className="">
          Nombre de la actividad:
        </label>
        <input
          type="text"
          id="nombreActividad"
          className={cssElementosForm}
          onChange={(e) => {
            setNombreActividad(e.target.value);
          }}
        />
      </div>
      {/*Semana*/}
      <div className="text-center">
        <label htmlFor="semanaActividad">Semana:</label>
        <Select
          placeholder="Seleccione la semana"
          id="semana"
          className="text-center"
          required
          options={semanas.map((semana, index) => ({
            key: index,
            value: semana,
            label: semana.toString(),
          }))}
          onChange={(semanaSeleccionada) =>
            setSemanaSeleccionada(semanaSeleccionada?.value)
          }
        ></Select>
      </div>
      {/*Estado actividad */}
      <div className="text-center">
        <label htmlFor="estadoActividad">Estado de actividad:</label>
        <Select
          placeholder="Seleccione estado"
          id="tipoActividad"
          className="text-center"
          required
          options={estadosActividad.map((estado, index) => ({
            key: index,
            value: estado,
            label: estado.toString(),
          }))}
          onChange={(estadoSeleccionado) =>
            setEstadoSeleccionado(estadoSeleccionado.value)
          }
        ></Select>
      </div>
      {/*Tipo actividad */}
      <div>
        <label htmlFor="tipoActividad">Tipo de actividad:</label>
        <Select
          placeholder="Seleccione el tipo de actividad"
          id="tipoActividadSelect"
          className="text-center"
          required
          options={tipoActividades.map((tipo, index) => ({
            key: index,
            value: tipo,
            label: tipo.toString(),
          }))}
          value={tipoActividadSeleccionada}
          onChange={(tipoActividadSeleccionada) =>
            setTipoActividadSeleccionada(tipoActividadSeleccionada.value)
          }
        ></Select>
      </div>

      {/*Responsables
       <div className={cssElementosForm}>
        <label htmlFor="responsable">Responsable:</label>
        <input type="checkbox" id="responsable" />
      </div>
      */}

      {/*Fecha y hora */}
      <div className="flex flex-col text-center">
        <label htmlFor="fecha-hora">Fecha y hora de la actividad:</label>
        <Datetime
          value={fechaHoraSeleccionada}
          onChange={(fechaHoraSeleccionada) => {
            setFechaHoraSeleccionada(fechaHoraSeleccionada._d);
          }}
          dateFormat="DD/MM/YYYY"
          timeFormat="HH:mm"
          className="border rounded-md  text-center"
          inputProps={{
            id: "fecha-hora",
            className: "text-center w-full h-full",
          }}
        />
      </div>

      {/*Fecha publicacion */}
      <div className="flex flex-col text-center">
        <label htmlFor="fecha-hora-publicacion">
          Fecha y hora de publicación:
        </label>
        <Datetime
          value={fechaPublicacion}
          onChange={(fechaPublicacion) => {
            setFechaPublicacion(fechaPublicacion._d);
          }}
          dateFormat="DD/MM/YYYY"
          timeFormat="HH:mm"
          className="border rounded-md text-center"
          inputProps={{
            id: "fecha-hora",
            className: "text-center w-full h-full",
          }}
        />
      </div>

      {/*Modalidad */}
      <div className="text-center">
        <label htmlFor="modalidad">Modalidad:</label>
        <Select
          id="modalidadSelect"
          className="text-center"
          required
          options={modalidades.map((modalidad, index) => ({
            key: index,
            value: modalidad,
            label: modalidad.toString(),
          }))}
          onChange={(modalidadSeleccionada) =>
            setModalidadSeleccionada(modalidadSeleccionada.value)
          }
        ></Select>
      </div>

      {/*Enlace */}
      <div className="text-center">
        <label htmlFor="enlace">Enlace:</label>
        <input
          type="text"
          id="enlace"
          className={cssElementosForm}
          disabled={modalidadSeleccionada?.value != "Virtual"}
          placeholder={
            modalidadSeleccionada?.value != "Virtual"
              ? "Las actividades presenciales no requieren enlace."
              : "Ingrese enlace."
          }
        />
      </div>
      {/*Div contenedor de Descripcion,Recordatorio y Responsables para tener el mismo tamaño que Afiche */}
      <div className="text-center">
        {/*Descripcion */}
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          id="descripcion"
          required
          className={cssElementosForm}
          onChange={(e) => {
            setDescripcionIngresada(e.target.value);
          }}
        />
        {/* Recordatorio*/}
        <div className="text-center">FALTA RECORDATORIO, METER AQUI</div>
        {/* Responsables*/}
        <div className="text-center">FALTA RESPONSABLES, METER AQUI</div>
      </div>
      {/*Afiche FALTA GUARDAR EL AFICHE*/}
      <div className="text-center">
        <h1 className="text-center pb-2">Seleccione el afiche:</h1>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>

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
