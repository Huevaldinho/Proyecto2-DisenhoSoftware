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

  //*PROFESORES
  const consultarProfesores = async () => {
    const data = await mainController.consultarProfesores(); //Pide datos a api
    setProfesores(data); //Guarda en state de profesores
    return profesores;
  };
  /**
   * Metodo para cambiar los datos de un profesor
   * @param {DTOProfesor} DTOProfesor
   */
  const actualizarProfesor = async (DTOProfesor) => {
    //Hacer cambio y actualizar los profes
    const data = mainController.actualizarProfesor(DTOProfesor);
    console.log("Respuesta api al actualizar profesor:", data);
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
    return estudiantes;
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
    return usuario;
  };
  //*PLAN DE TRABAJO
  /**
   * Metodo para obtener plan de trabajo.
   * @returns
   */
  const consultarPlanDeTrabajo = async () => {
    let data = await mainController.consultarPlanDeTrabajo();
    setPlanDeTrabajo(data); //guarda datos de plan de trabajo
    return planDeTrabajo;
  };

  return (
    <MainControllerContext.Provider
      value={{
        usuario,
        iniciarSesion,
        estudiantes,
        verEstudiantes,
        consultarPlanDeTrabajo,
        planDeTrabajo,
        profesores,
        consultarProfesores,
        actualizarProfesor,
      }}
    >
      {children}
    </MainControllerContext.Provider>
  );
};

//MainControllerContext es el que utilizo en los componentes
//MainControllerContextProvider lo utilizo en app.
export { MainControllerContext, MainControllerContextProvider };
