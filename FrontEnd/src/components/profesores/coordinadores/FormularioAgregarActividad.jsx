import React from "react";

function FormularioAgregarActividad({ actividad }) {
  //*Formulario utilizado para agregar o modificar una actividad.
  //*Los permisos aun no se crean pero para agregar solo el coordinador puede hacerlo.
  //!USAR DTOACTIVIDAD para mandarle los datos al main controller.

  //!Tomar estados de enum e iterrar.
  /*
      semana
      nombreActividad
      tipoActividad
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
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const cssElementosForm = "text-center";
  return (
    <div className=" p-3 m-4 text-center items-center">
      <div className="text-center">
        <form className="text-center pt-5 pl-5 pr-5 mt-10 ml-10 mr-10 mb-2 rounded-2xl  grid grid-rows-2 grid-flow-col gap-1 bg-slate-800">
          {/*Nombre Actividad */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Nombre actividad
            </label>

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          {/*Estado */}
          <br></br>
          <div className={cssElementosForm}>
            <label
              htmlFor="estados"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Seleccione el estado
            </label>
            <select
              id="cEstados"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
        </form>
      </div>
      <div className={"text-center w-full "}>
        {/*Boton aceptar */}
        <button
          type="submit"
          className=" text-white bg-green-500 hover:bg-green-800  font-medium rounded-lg w-auto p-4  text-center "
          onClick={handleSubmit}
        >
          Agregar actividad
        </button>
      </div>
    </div>
  );
}

export default FormularioAgregarActividad;
