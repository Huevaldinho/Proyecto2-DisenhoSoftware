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

  //*PLAN DE TRABAJO
  /**
   * Metodo para crear una nueva actividad.
   * @param {DTOActividad} dtoActividad: Datos de la actividad.
   * @returns {Actividad} actividad: Actividad creada.
   */
  async crearActividad(dtoActividad) {
    return await this.adminActividades.crearActividad(dtoActividad);
  }
  /**
     * Metodo para obtener los comentarios
     * Trae los datos con la API.
     * @returns {Array JSON} 
     * 
     */
  async consultarComentarios(id) {
    return await this.adminActividades.consultarComentarios(id);
  }

  /**
   * Metodo para obtener el plan de trabajo.
   * @returns {JSON} plan de trabajo
   */
  async consultarPlanDeTrabajo() {
    return await this.adminActividades.consultarPlanDeTrabajo();
  }
  /**
   * Metodo para cambiar el nomrbe del plan de trabajo.
   * @param {String} nuevoNombre 
   * @returns {_id,nombre,Array[id actividades],__v}
   */
  async cambiarNombrePlanTrabajo(nuevoNombre) {
    return await this.adminActividades.cambiarNombrePlanTrabajo(nuevoNombre);
  }
  /**
    * POST
    * Comentario nuevo.
    * @param {JSON = "idActividad","descripcion","fecha","autor","idRespuesta"} datos 
    * Retorna 
    */
  async comentarActividad(datos) {
    return await this.adminActividades.comentarActividad(datos);
  }

  //*AUTH

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
   * Metodo para cambiar la contrasenna.
   * @param {String} correo 
   * @param {String} contrasenna 
   * @returns 
   */
  async cambiarContrasenna(correo, contrasenna) {
    return await this.configuracion.cambiarContrasenna(correo, contrasenna);
  }

  //*PROFESORES
  /**
   * Metodo para registrar un profesor.
   * @param {DTOProfesor} dtoProfe 
   * @returns {JSON} dtoProfe registrado
   */
  async registrarProfesor(dtoProfe) {
    return this.adminProfesores.registrarProfesor(dtoProfe);
  }
  /**
       * Metodo para obtener los profesores
       * Trae los datos con la API.
       * @returns {Array JSON} 
       * Json con forma:{ "_id":,"rol": ,"estado","apellido1","apellido2","campus","cedula","coordinador",
          "equipo","nombre","telefono","celular","codigo","contrasenna","correo"}
       */
  async consultarProfesores() {
    return await this.adminProfesores.consultarProfesores();
  }
  /**
   * Metodo para cambiar los datos de un profesor.
   * @param {DTOProfesor} dtoProfe 
   * @returns 
   */
  async actualizarProfesor(dtoProfe) {
    return await this.adminProfesores.actualizarProfesor(dtoProfe);
  }
  /**
     * Metodo para eliminar (inactivar )a un miembro del equipo.
     * Llama a la API para inactivarlo en la base de datos.
     * @param {int} cedula 
     * @returns {JSON de profesor}
  */
  async eliminarMiembro(cedula) {
    return await this.adminProfesores.eliminarMiembro(cedula);
  }

  //*ESTUDIANTES
  async verEstudiantes() {
    return await this.adminEstudiantes.verEstudiantes();
  }
  async registrarEstudiantes() {
    return await this.adminEstudiantes.registrarEstudiantes();
  }
  async modificarInformacionEstudiante() {
    return await this.adminEstudiantes.modificarInformacionEstudiante();
  }
}

export default MainController;