import { BrowserRouter, Routes, Route } from "react-router-dom";

//!Para poder declarar las rutas hay que importar el archivo al cual va a redireccionar la ruta.
//Otras pages
import NotFound from "../pages/otrasPages/NotFound";
//Auth
import Login from "../pages/auth/Login";
import CambiarContraseanna from "../pages/auth/CambiarContraseanna";
//Profesores
import InformacionEstudiante from "../pages/profesores/InformacionEstudiante";
import AgregarEstudiante from "../pages/profesores/AgregarEstudiante";
import MensajeGenerarReporte from "../pages/manejoExcel/MensajeGenerarReporte";
import MenuProfesoresGuia from "../pages/profesores/MenuProfesoresGuia";
import InformacionEstudiantesProfesores from "../pages/profesores/InformacionEstudiantesProfesores";
import CargarExcel from "../pages/manejoExcel/CargarExcel";
import InfoProfesores from "../pages/profesores/InfoProfesores";
import ModificarProfesor from "../pages/asistentes/ModificarProfesor";
//Coordinadores
import MenuAsistentes from "../pages/asistentes/MenuAsistentes";
import PlanDeTrabajo from "../pages/compartidas/PlanDeTrabajo";
import DetallesActividad from "../pages/compartidas/DetallesActividad";
import AgregarActividad from "../pages/profesores/coordinadores/AgregarActividad";
import DetalleEstudiante from "../pages/profesores/DetalleEstudiante";
import { Navigate } from "react-router-dom";
import RegistrarProfesor from "../pages/asistentes/RegistrarProfesor";
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
        <Route index element={<Navigate to="/login" />} />
        {/*Inicio routues de COMPARTIDAS */}
        <Route path="/planDeTrabajo" element={<PlanDeTrabajo />} />
        <Route path="/detallesActividad" element={<DetallesActividad />} />

        {/*Fin routues de COMPARTIDAS */}

        {/*Inicio routes de ESTUDIANTES */}
        <Route
          path="/mensajeGenerarReporte"
          element={<MensajeGenerarReporte />}
        />
        <Route
          path="/InformacionEstudiante"
          element={<InformacionEstudiante />}
        />
        <Route path="/agregarEstudiante" element={<AgregarEstudiante />} />
        <Route path="/detallesEstudiante" element={<DetalleEstudiante />} />
        {/*Fin routes de ESTUDIANTES */}
        {/*Routes Profesores Guia */}
        <Route
          path="/informacionEstudiantesProfesores"
          element={<InformacionEstudiantesProfesores />}
        />
        <Route path="/menuProfesoresGuia" element={<MenuProfesoresGuia />} />
        {/*Fin routes de ProfesoresGuia */}

        {/*Inicio routes de PROFESORES */}
        <Route path="/menuProfesores" element={<MenuProfesoresGuia />} />
        <Route path="/infoProfesores" element={<InfoProfesores />}></Route>
        <Route path="/modificarProfesor" element={<ModificarProfesor />} />
        <Route path="/registrarProfesor" element={<RegistrarProfesor />} />
        {/*Fin routes de PROFESORES */}

        {/*Inicio routes de COORDINADORES */}
        <Route path="/agregarActividad" element={<AgregarActividad />} />
        {/*Fin routes de COORDINADORES */}

        {/*Inicio routues de ASISTENTES */}
        <Route path="/menuAsistentes" element={<MenuAsistentes />} />
        {/*Fin routues de ASISTENTES */}

        {/*Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/cambiarContrasenna" element={<CambiarContraseanna />} />

        {/*Routes Excel */}
        <Route path="/cargarExcel" element={<CargarExcel />} />

        {/*Rutas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
