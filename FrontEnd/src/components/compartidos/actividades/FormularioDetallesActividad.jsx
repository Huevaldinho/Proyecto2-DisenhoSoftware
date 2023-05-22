import React, { useState } from "react";
import { useLocation } from "react-router-dom";
//Main controller

function FormularioDetallesActividad(props) {
  const { state } = useLocation();
  const [afiche, setAfiche] = useState(null); //Afiche opcional
  let actividad = state?.actividad;
  const handleFileChange = (event) => {
    setAfiche(event.target.files[0]);
  };
  const cssElementosForm = "text-center";
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
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              disabled={true}
              value={actividad.nombre}
            />
          </div>
          {/*Semana  */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Semana
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              disabled={true}
              value={actividad.semana}
            />
          </div>
          {/*Descripcion */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Descripción
            </label>
            <textarea
              value={actividad.descripcion}
              disabled={true}
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            ></textarea>
          </div>
          {/*Tipo actividad */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Tipo actividad
            </label>
            <input
              type="text"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              disabled={true}
              value={actividad.tipoActividad}
            />
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
              type="text"
              id="modalidad"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={actividad.modalidad ? "Presencial" : "Virtual"}
            />
          </div>
          {/*Estado */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Estado
            </label>
            <input
              type="text"
              id="estado"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={actividad.estado}
            />
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
              type="text"
              className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={actividad.fechaHoraPublicacion}
            />
          </div>
          {/**Responsables 
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
           * 
          */}

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
                <li key={index} className="hover:bg-slate-500">
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
