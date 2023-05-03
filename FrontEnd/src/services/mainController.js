class MainController {
  //*Administradores
  adminActividades = null;
  adminEstudiantes = null;
  adminProfesores = null;
  adminArchivos = null;
  configuracion = null;
  //*Constructores
  constructor() { }
  constructor(adminActividades, adminEstudiantes, adminProfesores, adminArchivos, configuracion) {
    this.adminActividades = adminActividades;
    this.adminEstudiantes = adminEstudiantes;
    this.adminProfesores = adminProfesores;
    this.adminArchivos = adminArchivos;
    this.configuracion = configuracion;
  }
  //*Metodos
  /**
   * Metodo para crear una nueva actividad.
   * @param {DTOActividad} datos: Datos de la actividad.
   * @returns {Actividad} 
   */
  crearActividad(datos) {//TODO
    //Pasa responsabilidad a AdminActividades.
    return null;//Retorna una actividad.
  }


}
export default MainController;