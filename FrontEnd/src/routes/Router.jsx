import { BrowserRouter, Routes, Route } from "react-router-dom";

//!Para poder declarar las rutas hay que importar el archivo al cual va a redireccionar la ruta.
//Otras pages
import NotFound from "../pages/otrasPages/NotFound";
//Auth
import Login from "../pages/auth/Login";
import CambiarContraseanna from "../pages/auth/CambiarContraseanna";
//Profesores
import ModificarEstudiante from "../pages/profesores/ModificarEstudiante";
//Coordinadores
import MenuProfesoresGuia from "../pages/profesores/MenuProfesoresGuia";
import MenuAsistentes from "../pages/asistentes/MenuAsistentes";
import PlanDeTrabajo from "../pages/compartidas/PlanDeTrabajo";
import DetallesActividad from "../pages/compartidas/DetallesActividad";
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
        {/*Inicio routues de COMPARTIDAS */}
        <Route path="/planDeTrabajo" element={<PlanDeTrabajo />} />
        <Route path="/detallesActividad" element={<DetallesActividad />} />

        {/*Fin routues de COMPARTIDAS */}

        {/*Inicio routes de ESTUDIANTES */}
        <Route path="/modificarEstudiante" element={<ModificarEstudiante />} />
        {/*Fin routes de ESTUDIANTES */}

        {/*Inicio routes de PROFESORES */}
        <Route path="/menuProfesores" element={<MenuProfesoresGuia />}></Route>
        {/*Fin routes de PROFESORES */}

        {/*Inicio routues de ASISTENTES */}
        <Route path="/menuAsistentes" element={<MenuAsistentes />}></Route>
        {/*Fin routues de ASISTENTES */}

        {/*Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/cambiarContrasenna" element={<CambiarContraseanna />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
