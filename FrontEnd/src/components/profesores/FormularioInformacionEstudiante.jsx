import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
//import PropTypes from "prop-types";
//import DTOEstudiante from "../../services/DTOs/DTOEstudiante";
import EstadoUsuario from "../../services/enums/estadoUsuario";
import { validarCorreoTelefono } from "../../validation/ValidarInputs";

  /**
   * Funcion para validar un telefono.
   * @param {String} telefono: Telefono a validar.
   * @returns true si el telefono es valido.
   *        | false si el telefono es invalido.
   */
  const validarTelefono = (telefono) => {
    const regexTelefono = /^(\+506)?[24678]\d{7}$/;
    if (regexTelefono.test(telefono)) {
      console.log("Telefono valido");
      return true;
    }
    console.log("Telefono invalido.");
    return false;
  };
  /**
   * Funcion para validar un correo electronico.
   * @param {String} correo:Correo a validar.
   * @returns true si es valido.
   *        | false si es invalido.
   */
  const validarCorreo = (correo) => {
    //Declaracion de expresion regular para validar correos validos.
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexCorreo.test(correo)) {
      console.log("Correo valido.");
      return true;
    }
    console.log("Correo invalido.");
    return false;
  };

    
  /**
   * Funcion para validar los datos que se pueden cambiar del formulario (telefono y correo).
   * @param {String} correo: Correo a validar.
   * @param {String} telefono: Telefono a validar.
   * @returns 0 Si no hay errores.
   *        | 1 Si el telefono es invalido.
   *        | 2 Si el correo es invalido.
   */
  const validarDatosFormulario = (correo, telefono) => {
    //Validar correo.
    if (validarCorreo(correo)) {
      //Validar telefono.
      if (validarTelefono(telefono)) {
        //Validacion exitosa.
        return 0;
      } else {
        //Telefono invalido.
        return 1;
      }
function FormularioInformacionEstudiante(props) {
  const navigate = useNavigate();
  const [estadoState, setEstado] = useState(dtoEstudiante.getEstado());
  const [correoEstado, setCorreo] = useState(dtoEstudiante.getCorreo());
  const [telefonoEstado, setTelefono] = useState(dtoEstudiante.getTelefono());

  redireccionar = () => {
    //*Distinguir si es modificacion o si es eliminacion
    if (estadoState == EstadoUsuario.ACTIVO) {
      console.log("Se ha modificado exitosamente la información");
      //*LLamar al controlador para hacer el cambio, utilizar DTOEstudiante.

      alert("Se ha modificado exitosamente la información del estudiante.");
    } else {
      console.log("Se ha eliminado al estudiante");
      //*LLamar al controlador para hacer el cambio, utilizar DTOEstudiante.
      alert("Se ha eliminado exitosamente al estudiante.");
    }
    navigate("/informacionEstudiantes");
  };
  /**
   * Funcion para manejar el envio del formulario.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(estadoState, correoEstado, telefonoEstado);
    //*Validar datos del formulario.
    switch (validarCorreoTelefono(correoEstado, telefonoEstado)) {
      case 0: {
        //*Validacion exitosa.
        redireccionar();
        break;
      }
      case 1: {
        //Telefono invalido.
        alert("Telefono invalido, ingrese otro.");
        break;
      }
      case 2: {
        //Correo invalido.
        alert("Correo invalido, ingrese otro.");
        break;
      }
      
    }
  };
  //*Styles
  const cssElementosForm = "mb-1 w-full sm:w-min md:w-9/11 lg:w-max p-4";
  return (
    <div className=" p-3 m-4 text-center items-center">
      <div className="text-center">
        <form className="text-center pt-5 pl-5 pr-5 mt-10 ml-10 mr-10 mb-2 rounded-2xl  grid grid-rows-2 grid-flow-col gap-1 bg-slate-800">
          {/*Carnet*/}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Carnet
            </label>

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={dtoEstudiante.getCarnet()}
              disabled={true}
            />
            <p className="font-thin text-red-700">No modificable</p>
          </div>
          {/*Primer nombre */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Primer nombre
            </label>

            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={dtoEstudiante.getNombre()}
              disabled={true}
            />
            <p className="font-thin text-red-700">No modificable</p>
          </div>
          {/*Segundo nombre */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Segundo nombre
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={dtoEstudiante.getNombre2()}
              disabled={true}
            />
            <p className="font-thin text-red-700">No modificable</p>
          </div>
          {/*Apellido 1 */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Primer apellido
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={dtoEstudiante.getApellido1()}
              disabled={true}
            />
            <p className="font-thin text-red-700">No modificable</p>
          </div>
          {/*Apellido 2 */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Segundo apellido
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={dtoEstudiante.getApellido2()}
              disabled={true}
            />
            <p className="font-thin text-red-700">No modificable</p>
          </div>
          {/*Correo */}
          <div className={"mb-6 w-auto  "}>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={correoEstado}
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
            />
          </div>
          {/* Telefono */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telefono
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              defaultValue={dtoEstudiante.getCelular()}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
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
              onChange={(e) => {
                setEstado(e.target.value);
              }}
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
          className=" text-white bg-blue-700 hover:bg-blue-900  font-medium rounded-lg w-auto p-4  text-center "
          onClick={handleSubmit}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
/* 
FormularioInformacionEstudiante.propTypes = {
  dtoEstudiante: PropTypes.instanceOf(DTOEstudiante),
};
*/
export default FormularioInformacionEstudiante;
