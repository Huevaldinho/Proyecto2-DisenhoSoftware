import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { MainControllerContext } from "../../../contexts/MainControllerContext";
import Estado from "../../../services/enums/estado";
import TipoActividad from "../../../services/enums/tipoActividad";

function FormularioDetallesActividad(props) {
  const { setUsuario, usuario } = useContext(MainControllerContext);
  const { state } = useLocation();
  const semanas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const estadosActividad = Object.values(Estado);
  const tipoActividades = Object.values(TipoActividad);

  const cssElementosForm = "text-center";

  let actividad = state?.actividad;

  const [nombre, setNombre] = useState(actividad.nombre); //Nombre
  const [semana, setSemana] = useState(actividad.semana); //Semana
  const [descripcion, setDescripcion] = useState(actividad.descripcion); //Descripcion
  const [tipoActividad, setTipoActividad] = useState(actividad.tipoActividad); //Tipo actividad
  const [modalidad, setModalidad] = useState(actividad.modalidad); //Modalidad
  const [estado, setEstado] = useState(actividad.estado); //Estado
  const [fecheHora, setFechaHora] = useState(actividad.fechaHora); //Fecha hora actividad
  const [fecheHoraPublicacion, setFechaHoraPublicacion] = useState(
    actividad.fechaHoraPublicacion
  ); //Fecha hora publicacion
  const [recordatorios, setRecordatorios] = useState(actividad.recordatorios); //Recordatorios
  const [responsables, setResponsables] = useState(actividad.responsables); //Responsables

  const [afiche, setAfiche] = useState(actividad.afiche); //Afiche opcional

  const handleFileChange = (event) => {
    setAfiche(event.target.files[0]);
  };

  let storedUser = usuario;
  const updateState = () => {
    setTimeout(() => {
      storedUser = JSON.parse(localStorage.getItem("usuario"));
      try {
        JSON.parse(storedUser);
      } catch (error) {
        setUsuario(storedUser);
      }
    }, 1000);
  };

  useEffect(() => {
    updateState();
  }, []);

  if (storedUser == null) return <p>Cargando</p>;

  const puedeModificar = !(
    usuario.rol === "Profesor" && usuario.coordinador === "COORDINADOR"
  );

  console.log("Actividad seleccionada:", actividad);
  return (
    <div className=" p-3 m-auto text-center items-center">
      <div className="text-center">
        <form className="text-center p-5 m-2 rounded-2xl  grid grid-rows-4 grid-flow-col gap-4 bg-slate-800">
          {/*Nombre actividad */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre actividad
            </label>
            <input
              disabled={puedeModificar}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              defaultValue={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
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
              isDisabled={puedeModificar}
              options={semanas.map((semana, index) => ({
                key: index,
                value: semana,
                label: semana.toString(),
              }))}
              value={{ value: parseInt(semana), label: parseInt(semana) }}
              onChange={(semanaSeleccionada) =>
                setSemana(semanaSeleccionada?.value)
              }
            ></Select>
          </div>

          {/*Descripcion */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Descripción
            </label>
            <textarea
              disabled={puedeModificar}
              value={actividad.descripcion}
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          {/*Tipo actividad */}
          <div>
            <label htmlFor="tipoActividad">Tipo de actividad:</label>
            <Select
              placeholder="Seleccione el tipo de actividad"
              id="tipoActividadSelect"
              className="text-center"
              isDisabled={puedeModificar}
              value={{ value: tipoActividad, label: tipoActividad }}
              onChange={(tipoActividad) =>
                setTipoActividad(tipoActividad?.value)
              }
              options={tipoActividades.map((tipo, index) => ({
                key: index,
                value: tipo,
                label: tipo.toString(),
              }))}
            ></Select>
          </div>
          {/*Modalidad */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Modalidad
            </label>
            <input
              disabled={puedeModificar}
              type="text"
              id="modalidad"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={actividad.modalidad ? "Presencial" : "Virtual"}
            />
          </div>
          {/*Estado */}
          <div className="text-center">
            <label htmlFor="estadoActividad">Estado de actividad:</label>
            <Select
              placeholder="Seleccione el estado"
              id="tipoActividad"
              className="text-center"
              required
              isDisabled={puedeModificar}
              value={{ value: estado, label: estado }}
              options={estadosActividad.map((estado, index) => ({
                key: index,
                value: estado,
                label: estado.toString(),
              }))}
              onChange={(estadoSeleccionado) =>
                setEstado(estadoSeleccionado.value)
              }
            ></Select>
          </div>
          {/*Fecha hora actividad */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fecha y hora
            </label>
            <input
              disabled={puedeModificar}
              type="text"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={actividad.fechaHora}
            />
          </div>
          <br></br>
          {/*Fecha de publicacion */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Fecha y hora de publicación
            </label>
            <input
              disabled={puedeModificar}
              type="text"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={actividad.fechaHoraPublicacion}
            />
          </div>
          {/**Responsables */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Responsable(s)
            </label>
            <ul>
              {actividad.responsables.map((persona) => (
                <li key={persona.codigo}>
                  {"* "} {persona.nombre} {persona.apellido1}
                </li>
              ))}
            </ul>
          </div>

          {/**Recordatorios */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Recordatorios
            </label>
            <ul className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {actividad.recordatorios.map((recordatorio, index) => (
                <li
                  disabled={puedeModificar}
                  key={index}
                  className="hover:bg-slate-500"
                >
                  {" "}
                  {"* "}
                  {recordatorio}
                </li>
              ))}
            </ul>
          </div>
          {/**Evidencias*/}
          {/**Afiche */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Afiche
            </label>
            {actividad.afiche === "" ? (
              <div
                className={
                  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                }
              >
                <input
                  disabled={puedeModificar}
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  required={false}
                />
              </div>
            ) : (
              <>
                <img src={actividad.afiche} alt="Imagen" />
                <div className={cssElementosForm}>
                  <label htmlFor="file">Cambiar afiche:</label>
                  <input
                    disabled={puedeModificar}
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    required={false}
                  />
                </div>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioDetallesActividad;
