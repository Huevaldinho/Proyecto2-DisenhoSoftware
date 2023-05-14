import React, { createContext, useState} from "react";
import MainController from "../services/mainController";

const MainControllerContext = createContext();

const MainControllerContextProvider = ({ children }) => {
  const mainController = new MainController();
  let [estudiantes, setEstudiantes] = useState([]);

  const verEstudiantes = async () => {
    const data = await mainController.verEstudiantes(); //Pide datos a api
    setEstudiantes(data); //Guarda en ram los cambios
    return estudiantes;
  };

  return (
    <MainControllerContext.Provider value={{ estudiantes, verEstudiantes }}>
      {children}
    </MainControllerContext.Provider>
  );
};

//MainControllerContext es el que utilizo en los componentes
//MainControllerContextProvider lo utilizo en app.
export { MainControllerContext, MainControllerContextProvider };
