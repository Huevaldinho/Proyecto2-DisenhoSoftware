import { BrowserRouter, Routes, Route } from "react-router-dom";

//!Para poder declarar las rutas hay que importar el archivo al cual va a redireccionar la ruta.

import NotFound from "../pages/otrasPages/NotFound";
import PaginaPrincipal from "../pages/PaginaPrincipal";
//Auth
import Login from "../pages/auth/Login";
import CambiarContraseanna from "../pages/auth/CambiarContraseanna";
import ModificarEstudiante from "../pages/profesores/ModificarEstudiante";

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
        <Route path="/modificarEstudiante" element={<ModificarEstudiante />} />
        {/*Fin routes de ESTUDIANTES */}

        {/*Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/cambiarContrasenna" element={<CambiarContraseanna />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
