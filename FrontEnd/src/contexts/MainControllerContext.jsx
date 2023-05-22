import React, { createContext, useState } from "react";
import MainController from "../services/mainController";

const MainControllerContext = createContext();

const MainControllerContextProvider = ({ children }) => {
  const mainController = new MainController();
  //Declarar state para poder mostrarlos en las tablas.
  let [estudiantes, setEstudiantes] = useState([]);
  //Declara state para el inicio de sesion
  let [usuario, setUsuario] = useState(null);
  //Plan de trabajo
  let [planDeTrabajo, setPlanDeTrabajo] = useState({});
  //Profesores
  let [profesores, setProfesores] = useState([]);
  //Comentarios
  let [comentarios, setComentarios] = useState([]);
  //Respuesta a comentario
  let [respuestas, setRespuestas] = useState([]);


  //*SUPER USUARIO
  /**
   * Metodo para asignar asistente
   * @param {String} codigo de asistente
   * @param {String} campus a asigar asistente
   */
  const asignarAsistente = async (codigo, campus) => {
    const data = await mainController.asignarAsistente(codigo, campus);
    consultarProfesores();
    return data;
  };
  //*PROFESORES
  /**
   * Metodo para registrar a un profesor.
   * @param {JSON} dtoProfe
   * @returns {JSON} profe registrado
   */
  const registrarProfesor = async (dtoProfe, foto) => {
    const data = await mainController.registrarProfesor(dtoProfe, foto);
    consultarProfesores();
    return data; //profe o error.
  };
  const consultarProfesores = async () => {
    const data = await mainController.consultarProfesores(); //Pide datos a api
    setProfesores(data); //Guarda en state de profesores
    return data;
  };
  /**
   * Metodo para cambiar los datos de un profesor
   * @param {DTOProfesor} dtoProfe
   * @param {File| null} foto del profe
   *
   */
  const actualizarProfesor = async (dtoProfe, foto) => {
    //Hacer cambio y actualizar los profes
    const data = mainController.actualizarProfesor(dtoProfe, foto);
    consultarProfesores();
    return data;
  };
  /**
   * Metodo para eliminar (inactivar )a un miembro del equipo.
   * Llama a la API para inactivarlo en la base de datos.
   * @param {int} cedula
   * @returns {JSON de profesor}
   */
  const eliminarMiembro = async (cedula) => {
    const data = await mainController.eliminarMiembro(cedula);
    consultarProfesores();
    return data;
  };
  //*ESTUDIANTES
  /**
   * Metodo para obtener los estudiantes en la base de datos.
   * Utiliza la apli.
   * @returns [estudiantes] si logra hacer el request.
   *          null si no lo logra.
   */
  const verEstudiantes = async () => {
    const data = await mainController.verEstudiantes(); //Pide datos a api
    setEstudiantes(data); //Guarda en state de estudiantes
    return data;
  };
  const registrarEstudiantes = async (dtoEstudiante) => {
    const data = await mainController.registrarEstudiantes(dtoEstudiante);
    verEstudiantes();
    return data; //estudiantes o error
  };
  //*AUTH
  /**
   * Metodo para iniciar sesion.
   * @param {String} correoIn
   * @param {String} contrasennaIn
   * @returns {Array{_id,email,password,rol,estado}} RespuestaAPI
   */
  const iniciarSesion = async (correoIn, contrasennaIn) => {
    const data = await mainController.iniciarSesion(correoIn, contrasennaIn);
    setUsuario(data); //guarda datos de usuario
    return data;
  };
  /**
   * Metodo para cambiar la contra de un correo.
   * @param {String} correoIn
   * @param {String} contrasennaIn: nueva contrasenna
   * @returns
   */
  const cambiarContrasenna = async (correoIn, contrasennaIn) => {
    const data = await mainController.cambiarContrasenna(
      correoIn,
      contrasennaIn
    );
    return data;
  };

  //*PLAN DE TRABAJO
  const crearActividad = async () => {
    let data = await mainController.crearActividad();
    return data;
  };
  /**
   * Metodo para obtener plan de trabajo.
   * @returns
   */
  const consultarPlanDeTrabajo = async () => {
    let data = await mainController.consultarPlanDeTrabajo();
    setPlanDeTrabajo(data); //guarda datos de plan de trabajo
    return data;
  };
  const consultarComentarios = async (id) => {
    let data = await mainController.consultarComentarios(id);
    setComentarios(data);
    return data;
  };
  const cambiarNombrePlanTrabajo = async (nuevoNombre) => {
    let data = await mainController.cambiarNombrePlanTrabajo(nuevoNombre);
    return data;
  };
  /**
   * POST
   * Comentario nuevo.
   * @param {JSON = "idActividad","descripcion","fecha","autor","idRespuesta"} datos
   * Retorna
   */
  const comentarActividad = async (datos) => {
    let data = await mainController.comentarActividad(datos);
    consultarComentarios(datos.idActividad);
    return data;
  };
  const consultarRespuestas = async (idComentario)=>{
    let data = await mainController.consultarRespuestas(idComentario);
    setRespuestas(data);
    return data;
  }
   /**
   * PUT
   * Respuesta a comentario
   * @param {JSON = "idActividad","descripcion","fecha","autor","idRespuesta"} datos
   * Retorna
   */
   const responderComentario = async (datos) => {
    let data = await mainController.responderComentario(datos);
    consultarComentarios(datos.idActividad);
    return data;
  };

  return (
    <MainControllerContext.Provider
      value={{
        usuario,
        iniciarSesion,
        cambiarContrasenna,
        estudiantes,
        verEstudiantes,
        consultarPlanDeTrabajo,
        planDeTrabajo,
        profesores,
        consultarProfesores,
        actualizarProfesor,
        eliminarMiembro,
        registrarProfesor,
        comentarios,
        consultarComentarios,
        cambiarNombrePlanTrabajo,
        comentarActividad,
        crearActividad,
        registrarEstudiantes,
        asignarAsistente,
        consultarRespuestas,
        respuestas,
        responderComentario
      }}
    >
      {children}
    </MainControllerContext.Provider>
  );
};

//MainControllerContext es el que utilizo en los componentes
//MainControllerContextProvider lo utilizo en app.
export { MainControllerContext, MainControllerContextProvider };
