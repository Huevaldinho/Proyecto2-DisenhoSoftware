import AdminActividades from "./Administradores/AdminActividades";
import AdminArchivos from "./Administradores/AdminArchivos";
import AdminProfesores from "./Administradores/AdminProfesores";
import AdminEstudiantes from "./Administradores/AdminEstudiantes";
import Configuracion from "./Administradores/Configuracion"

class MainController {
  //*Administradores
  adminActividades = null;
  adminEstudiantes = null;
  adminProfesores = null;
  adminArchivos = null;
  configuracion = null;
  //*Constructores
  constructor() {
    this.adminActividades = new AdminActividades();
    this.adminEstudiantes = new AdminEstudiantes();
    this.adminProfesores = new AdminProfesores();
    this.adminArchivos = new AdminArchivos();
    this.configuracion = new Configuracion();
  }

  //*Metodos
  /**
   * Metodo para crear una nueva actividad.
   * @param {DTOActividad} dtoActividad: Datos de la actividad.
   * @returns {Actividad} actividad: Actividad creada.
   */
  async crearActividad(dtoActividad) {
    return await this.adminActividades.crearActividad(dtoActividad);
  }
  /**
   * Metodo para iniciar sesion.
   * @param {String} correoIn 
   * @param {String} contrasennaIn 
   * @returns {JSON con forma {_id,email,password,rol,estado} si encuentra al usuario
  *           1 si no encuentra al usuario} RespuestaAPI
  */
  async iniciarSesion(correo, contrasenna) {
    return await this.configuracion.iniciarSesion(correo, contrasenna);
  }

  /**
   * Metodo para obtener el plan de trabajo.
   * @returns {JSON} plan de trabajo
   */
  async consultarPlanDeTrabajo() {
    return await this.adminActividades.consultarPlanDeTrabajo();
  }

  /**
   * Metodo para obtener informacion de los estudiantes.
   * @returns {JSON} plan de trabajo
   */
  async consultarProfesores() {
    return await this.adminProfesores.consultarProfesores();
  }

  async verEstudiantes() {
    return await this.adminEstudiantes.verEstudiantes();
  }
  async modificarInformacionEstudiante() {
    return await this.adminEstudiantes.modificarInformacionEstudiante();
  }
}

export default MainController;