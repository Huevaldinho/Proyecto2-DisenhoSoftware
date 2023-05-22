//Componentes de tabla
import BodyInformacionEstudiantes from "./BodyInformacionEstudiantes";
import HeaderInformacionEstudiantes from "./HeaderInformacionEstudiantes";
//Controlador
import { MainControllerContext } from "../../../contexts/MainControllerContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as XLSX from 'xlsx';
function TablaInformacionEstudiantes(props) {
  const { estudiantes, verEstudiantes } = useContext(MainControllerContext);
  // Función que actualiza el estado de estudiantes al ejecutar la funcion verEstudiantes
  //verEstudiantes lo que hace es hacer la peticion al api para cambiar el estado de estudiantes
  const updateState = () => {
    setTimeout(() => {
      verEstudiantes();
    }, 1000);
  };
  const navigate = useNavigate();
    const handleGenerateExcel = (e) => {
      e.preventDefault();
      // Datos en formato JSON
      console.log("Estudiantes en tabla estudiantes: ", estudiantes)

      const jsonData = estudiantes
      const jsonDataWithoutAge = jsonData.map(({ _id , ...rest }) => rest);
      const jsonDataFinal = jsonDataWithoutAge.map(({ __v , ...rest }) => rest);
      // Crear una hoja de cálculo nueva
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(jsonDataFinal);
  
      // Agregar la hoja de cálculo al libro
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
  
      // Guardar el archivo como Excel
      XLSX.writeFile(workbook, 'datos.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      navigate("/informacionEstudiantesProfesores");
    };
  
  // Efecto que actualiza el estado de myState después de que el componente ha sido montado
  useEffect(() => {
    updateState();
  }, []);

  if (estudiantes.length == 0) {
    //Si no hay estudiantes
    return (
      <div className="text-center font-bold text-4xl text-red-500">
        No hay Estudiantes para mostrar.
      </div>
    );
  }
  return (
    <div className="flex flex-col mt-8 text-center">
      <h1 className="text-center font-light p-2 text-blue-600">
        Pulsa doble click para ver detalles del estudiante
      </h1>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <HeaderInformacionEstudiantes />
              <BodyInformacionEstudiantes estudiantes={estudiantes} />
            </table>
          </div>
        </div>
      </div>
      <div
        className="text-center rounded-md bg-red-500 p-2 m-3 h-auto w-auto hover:bg-red-800"
        id="containerBotonAgregarActividad"
      >
        {/*Boton para regresar la menu profesores*/}
        <button
          className="text-center w-full h-full"
          onClick={handleGenerateExcel}
        >
          Generar Resporte 
        </button>
      </div>
    </div>
  );
}

export default TablaInformacionEstudiantes;
