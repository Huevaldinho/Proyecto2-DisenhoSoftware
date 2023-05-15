import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import EstadoUsuario from "../../services/enums/estadoUsuario";
import COORDINADOR from "../../services/enums/coordinador";
import { validarCorreoTelefono } from "../../validation/ValidarInputs";
import { MainControllerContext } from "../../contexts/MainControllerContext";
import DTOProfesor from "../../services/DTOs/DTOProfesor";

function FormularioModificarProfesor(props) {
  const { actualizarProfesor, eliminarMiembro } = useContext(
    MainControllerContext
  );
  const navigate = useNavigate();
  const location = useLocation();
  let profesor = location?.state.profesor;
  const [nombre1, setNombre1] = useState(profesor.nombre); //Nombre 1
  const [nombre2, setNombre2] = useState(profesor.nombre2); //Nombre 2
  const [apellido1, setApellido1] = useState(profesor.apellido1); //Apellido 1
  const [apellido2, setApellido2] = useState(profesor.apellido2); //Apellido 2
  const [correo, setCorreo] = useState(profesor.correo); //Correo
  const [telefono, setTelefono] = useState(profesor.telefono); //Telefono
  const [estado, setEstado] = useState(profesor.estado); //Estado
  const [coordinador, setCord] = useState(
    profesor.coordinador == COORDINADOR.COORDINADOR
      ? "Coordinador"
      : "No coordinador"
  ); //Coordinador
  const [celular, setCelular] = useState(profesor.celular); //Celular
  const [cedula, setCedula] = useState(profesor.cedula); //Cedula

  const redireccionar = async () => {
    if (estado == EstadoUsuario.ACTIVO) {
      const Escoordinador =
        coordinador == "Coordinador" ? "COORDINADOR" : "NOCOORDINADOR";
      let profeAct = new DTOProfesor(
        cedula,
        nombre1,
        nombre2,
        apellido1,
        apellido2,
        correo,
        profesor.contrasenna,
        profesor.rol,
        profesor.codigo,
        Escoordinador,
        telefono,
        profesor.campus,
        estado,
        profesor.equipo,
        celular,
        ""
      );
      const respuesta = await actualizarProfesor(profeAct);
      if (Object.keys(respuesta).length !== 0) {
        alert("Se ha modificado exitosamente al profesor.");
        navigate("/infoProfesores");
      } else alert("No se ha podido modificado al profesor, intente de nuevo.");
    } else {
      handleBorrar;
      alert("Se ha eliminado exitosamente al profesor.");
    }
    navigate("/infoProfesores");
  };
  /**
   * Funcion para manejar el envio del formulario.
   */
  const handleModificar = (e) => {
    e.preventDefault();
    //*Validar datos del formulario.
    switch (validarCorreoTelefono(correo, telefono)) {
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

  const handleBorrar = async (e) => {
    e.preventDefault();
    const respuesta = await eliminarMiembro(parseInt(profesor.cedula));
    if (Object.keys(respuesta).length !== 0) {
      alert("Se ha eliminado exitosamente al profesor.");
      navigate("/infoProfesores");
    } else alert("No se ha podido eliminar al profesor, intente de nuevo.");
  };

  //*Styles
  const cssElementosForm = "mb-1 w-full sm:w-min md:w-9/11 lg:w-max p-4";
  const styleInputs =
    "text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <div className=" p-3 m-4 text-center items-center">
      <div className="text-center">
        <form className="text-center pt-5 pl-5 pr-5 mt-10 ml-10 mr-10 mb-2 rounded-2xl  grid grid-rows-3 grid-flow-col gap-1 bg-slate-800">
          {/*Codigo*/}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Código
            </label>
            <input
              type="text"
              className={styleInputs}
              disabled={true}
              value={profesor.codigo}
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
              className={styleInputs}
              disabled={false}
              defaultValue={nombre1}
              onChange={(e) => {
                setNombre1(e.target.value);
              }}
            />
          </div>
          {/*Segundo nombre */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Segundo nombre
            </label>
            <input
              type="text"
              className={styleInputs}
              disabled={false}
              defaultValue={nombre2}
              onChange={(e) => {
                setNombre2(e.target.value);
              }}
            />
          </div>
          {/*Apellido 1 */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Primer apellido
            </label>
            <input
              type="text"
              className={styleInputs}
              disabled={false}
              defaultValue={apellido1}
              onChange={(e) => {
                setApellido1(e.target.value);
              }}
            />
          </div>
          {/*Apellido 2 */}
          <div className={cssElementosForm}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Segundo apellido
            </label>
            <input
              type="text"
              className={styleInputs}
              disabled={false}
              defaultValue={apellido2}
              onChange={(e) => {
                setApellido2(e.target.value);
              }}
            />
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
              className={styleInputs}
              defaultValue={correo}
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
              className={styleInputs}
              defaultValue={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
          </div>
          {/* Celular */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Celular
            </label>
            <input
              type="text"
              className={styleInputs}
              defaultValue={celular}
              onChange={(e) => {
                setCelular(e.target.value);
              }}
            />
          </div>
          {/* Cedula */}
          <div className={cssElementosForm}>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cédula
            </label>
            <input
              type="text"
              className={styleInputs}
              defaultValue={cedula}
              onChange={(e) => {
                setCedula(e.target.value);
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
              defaultValue={estado == "Activo" ? "Activo" : "Inactivo"}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <br></br>
          <div className={cssElementosForm}>
            <label
              htmlFor="coordinador"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Elija si es coordinador
            </label>
            <select
              id="cCoordinador"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setCord(e.target.value);
              }}
              defaultValue={
                coordinador == "Coordinador" ? "Coordinador" : "No coordinador"
              }
            >
              <option value="Coordinador">Coordinador</option>
              <option value="No coordinador">No coordinador</option>
            </select>
          </div>
          <div
            className="text-center rounded-md bg-red-500 p-2 m-3 h-auto w-auto hover:bg-red-800"
            id="containerBotonAgregarActividad"
          >
            {/*Boton agilizar la eliminacion de un profesor*/}
            <button
              className="text-center w-full h-full"
              onClick={handleBorrar}
            >
              Inactivar Profesor
            </button>
          </div>
        </form>
      </div>
      <div className={"text-center w-full "}>
        {/*Boton aceptar */}
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-900  font-medium rounded-lg w-auto p-4  text-center "
          onClick={handleModificar}
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}

export default FormularioModificarProfesor;
