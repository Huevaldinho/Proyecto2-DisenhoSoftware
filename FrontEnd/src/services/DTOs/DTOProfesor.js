class DTOProfesor {
  //*Atributos
  nombre = "";
  apellido1 = "";
  apellido2 = "";
  correo = "";
  telefono = "";
  celular = "";
  foto = "";
  //*Constructores
  constructor() { }
  constructor(nombre, apellido1, apellido2, correo, telefono, celular, foto) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.correo = correo;
    this.telefono = telefono;
    this.celular = celular;
    this.foto = foto;
  }
  //*Getters
  /**
   * Metodo para obtener nombre del profesor.
   * @returns String nombre: Nombre 
   */
  getNombre() {
    return this.nombre;
  }
  /**
   * Metodo para obtener el apellido 1 del profesor.
   * @returns String apellido1: Apellido 1 del profesor.
   */
  getApellido1() {
    return this.apellido1;
  }
  /**
   * Metodo para obtener el apellido 2 del profesor.
   * @returns String apellido2: Apellido 2 del profesor.
   */
  getApellido2() {
    return this.apellido2;
  }
  /**
   * Metodo para obtener el correo del profesor.
   * @returns String correo: Correo del profesor.
   */
  getCorreo() {
    return this.correo;
  }
  /**
   * Metodo para obtener el telefono de oficiona del profesor.
   * @returns String telefono: Telefono de oficina del profesor.
   */
  getTelefono() {
    return this.telefono;
  }
  /**
   * Metodo para obtener el celular del profesor.
   * @returns String celular: Celular del profesor.
   */
  getCelular() {
    return this.celular;
  }
  /**
   * Metodo para obtener el link de la foto del profesor.
   * @returns String foto: String con el link de la foto del profesor.
   */
  getFoto() {
    return this.foto;
  }
  //*Setters
  /**
   * Metodo para asignar nombre al profesor.
   * @param {String} nombre: Nombre del profesor.
   */
  setNombre(nombre) {
    this.nombre = nombre;
  }
  /**
   * Metodo para asignar el apellido 1 del profesor.
   * @param {String} apellido1: Apellido 1 del profesor.
   */
  setApellido1(apellido1) {
    this.apellido1 = apellido1;
  }
  /**
   * Metodo para asignar el apellido 2 del profesor.
   * @param {String} apellido2: Apellido 2 del profesor.
   */
  setApellido2(apellido2) {
    this.apellido2 = apellido2;
  }
  /**
   * Metodo para asignar el correo del profesor.
   * @param {String} correo: Correo del profesor.
   */
  setCorreo(correo) {
    this.correo = correo;
  }
  /**
   * Metodo para asignar el telefono de oficina del profesor.
   * @param {String} telefono: Telefono de oficina del profesor.
   */
  setTelefono(telefono) {
    this.telefono = telefono;
  }
  /**
   * Metodo para asignar el celular del profesor.
   * @param {String} celular: Celular del profesor.
   */
  setCelular(celular) {
    this.celular = celular;
  }
  /**
   * Metodo para asignar el link  de la foto del profesor.
   * @param {String} foto: String con link de la foto del profesor.
   */
  setFoto(foto) {
    this.foto = foto;
  }
}
export default DTOProfesor;