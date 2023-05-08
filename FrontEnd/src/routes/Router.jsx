import { BrowserRouter, Routes, Route } from "react-router-dom";

//!Para poder declarar las rutas hay que importar el archivo al cual va a redireccionar la ruta.

import NotFound from "../pages/otrasPages/NotFound";
import PaginaPrincipal from "../pages/PaginaPrincipal";
import Login from "../pages/auth/Login";
import ModificarEstudiante from "../pages/profesores/ModificarEstudiante";
import AgregarEstudiante from "../pages/profesores/AgregarEstudiante";
import MensajeGenerarReporte from "../pages/manejoExcel/MensajeGenerarReporte";
import MenuProfesoresGuia from "../pages/profesores/MenuProfesoresGuia";
import InformacionEstudiantesProfesores from "../pages/profesores/InformacionEstudiantesProfesores"
import CargarExcel from "../pages/manejoExcel/CargarExcel"
function Router() {
  //*El router funciona para redireccionar a los clientes a las paginas correspondientes.
  return (
    /*
     ! Plantilla para declarar una ruta:
     
      *  <Route path="/URL" element={<NOMBRE DEL COMPONENTE />}>
      *  El URL es la ruta asociada al componente que se desea mostrar.
     */
    <BrowserRouter>
      <Routes>
        {/*  Declarar rutas y subrutas en esta parte del codigo.*/}
        <Route path="/paginaPrincipal" element={<PaginaPrincipal />} />

        {/*Inicio routes de ESTUDIANTES */}
        <Route path="/mensajeGenerarReporte" element={<MensajeGenerarReporte />} />
        <Route path="/modificarEstudiante" element={<ModificarEstudiante />} />
        <Route path="/agregarEstudiante" element={<AgregarEstudiante />} />
        {/*Fin routes de ESTUDIANTES */}
        {/*Routes Profesores Guia */}
        <Route path="/informacionEstudiantesProfesores" element={<InformacionEstudiantesProfesores />} />
        <Route path="/menuProfesoresGuia" element={<MenuProfesoresGuia />} />
        {/*Fin routes de ProfesoresGuia */}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        {/*Routes Excel */}
        <Route path="/cargarExcel" element={<CargarExcel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
