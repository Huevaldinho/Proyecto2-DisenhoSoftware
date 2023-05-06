import React from "react";
import Select from "react-select";
import { useState } from "react";
import Estado from "../../../services/enums/estado";
function FormularioAgregarActividad({ actividad }) {
  //*Formulario utilizado para agregar o modificar una actividad.
  //*Los permisos aun no se crean pero para agregar solo el coordinador puede hacerlo.
  //!USAR DTOACTIVIDAD para mandarle los datos al main controller.

  //!Tomar estados de enum e iterrar.
  /*
      *Semana
      *nombreActividad
      *tipoActividad
      descripcion
      responsable (lista profes o profe)
      fechaHora
      fechaPublicacion
      recordatorio (lista fechas con hora)
      modalidad
      enlace (en caso de que sea virtual)
      afiche (foto)
      estado
      evidencia
  */
  const semanas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [semanaSeleccionada, setSemanaSeleccionada] = useState(null); //Para obtener la semana seleccionada.
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(null); //Para obtener la semana seleccionada.

  const estadosActividad = Object.values(Estado);

  //*Styles
  const cssElementosForm = "text-center";
  const cssComboboxs =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <form className="grid grid-cols-2 gap-4">
      <div className={cssElementosForm}>
        <label htmlFor="nombreActividad">Nombre de la actividad:</label>
        <input type="text" id="nombreActividad" className="w-full" />
      </div>
      <div className={cssElementosForm}>
        <label htmlFor="tipoActividad">Tipo de actividad:</label>
        <select id="tipoActividad" className="w-full">
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
      </div>

      <div className={cssElementosForm}>
        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" className="w-full" />
      </div>

      <div className={cssElementosForm}>
        <label htmlFor="responsable">Responsable:</label>
        <input type="checkbox" id="responsable" />
      </div>

      <label htmlFor="fechaHora">Fecha y hora:</label>
      <input type="datetime-local" id="fechaHora" className="w-full" />

      <label htmlFor="fechaPublicacion">Fecha de publicación:</label>
      <input type="date" id="fechaPublicacion" className="w-full" />

      <label htmlFor="recordatorio">Recordatorio:</label>
      <select id="recordatorio" className="w-full">
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>

      <label htmlFor="modalidad">Modalidad:</label>
      <select id="modalidad" className="w-full">
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>

      <label htmlFor="enlace">Enlace:</label>
      <input type="text" id="enlace" className="w-full" />

      <label htmlFor="afiche">Afiche:</label>
      <input type="text" id="afiche" className="w-full" />

      <label htmlFor="estado">Estado:</label>
      <select id="estado" className="w-full">
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>

      <label htmlFor="evidencia">Evidencia:</label>
      <input type="text" id="evidencia" className="w-full" />

      <button type="submit" className="col-span-2">
        Enviar
      </button>
    </form>
  );
}

export default FormularioAgregarActividad;
