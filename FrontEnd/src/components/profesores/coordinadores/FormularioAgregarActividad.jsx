import React from "react";
import Select from "react-select";
import { useState } from "react";
import Estado from "../../../services/enums/estado";
import TipoActividad from "../../../services/enums/tipoActividad";
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
  const [semanaSeleccionada, setSemanaSeleccionada] = useState(null); //Para obtener la semana seleccionada.
  const [estadoSeleccionado, setEstadoSeleccionado] = useState(null); //Para obtener el estado seleccionada.
  const [modalidadSeleccionada, setModalidadSeleccionada] = useState(null); //Para obtener el estado seleccionada.
  const [tipoActividadSeleccionada, setTipoActividadSeleccionada] =
    useState(null); //Para obtener el tipo de actividad seleccionada.

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
        <input type="text" id="nombreActividad" className={cssElementosForm} />
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
          value={semanaSeleccionada}
          onChange={(semanaSeleccionada) =>
            setSemanaSeleccionada(semanaSeleccionada)
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
          value={estadoSeleccionado}
          onChange={(estadoSeleccionado) =>
            setEstadoSeleccionado(estadoSeleccionado)
          }
        ></Select>
      </div>
      {/*Descripcion */}
      <div className="text-center">
        <label htmlFor="descripcion">Descripción:</label>
        <textarea id="descripcion" required className={cssElementosForm} />
      </div>
      {/*Responsables */}
      <div className={cssElementosForm}>
        <label htmlFor="responsable">Responsable:</label>
        <input type="checkbox" id="responsable" />
      </div>
      {/*Fecha y hora */}

      <div className="text-center">Fecha hora</div>

      {/*Fecha publicacion */}
      <div className="text-center">
        <label htmlFor="fechaPublicacion">Fecha de publicación:</label>
        <input type="date" id="fechaPublicacion" className={cssElementosForm} />
      </div>
      {/* Recordatorio*/}
      <div className="text-center">
        <label htmlFor="recordatorio">Recordatorio:</label>
        <Select id="recordatorio" className="text-center" required>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </Select>
      </div>

      {/*Modalidad */}
      <div className="text-center">
        <label htmlFor="modalidad">Modalidad:</label>
        <Select
          placeholder="Seleccione la modalidad"
          id="modalidadSelect"
          className="text-center"
          required
          options={modalidades.map((modalidad, index) => ({
            key: index,
            value: modalidad,
            label: modalidad.toString(),
          }))}
          value={modalidadSeleccionada}
          onChange={(modalidadSeleccionada) =>
            setModalidadSeleccionada(modalidadSeleccionada)
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

      {/*Afiche */}
      <div className="text-center">
        <label htmlFor="afiche">Afiche:</label>
        <input type="text" id="afiche" className={cssElementosForm} required />
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
            setTipoActividadSeleccionada(tipoActividadSeleccionada)
          }
        ></Select>
      </div>

      {/*Evidencias */}
      <div className="text-center">
        <label htmlFor="evidencia">Evidencia:</label>
        <input
          type="text"
          id="evidencia"
          className={cssElementosForm}
          required
        />
      </div>
      <div className="text-center bg-green-500 hover:bg-green-800 rounded-2xl p-3 m-5">
        <button type="submit" className="text-center w-full">
          Enviar
        </button>
      </div>
    </form>
  );
}

export default FormularioAgregarActividad;
