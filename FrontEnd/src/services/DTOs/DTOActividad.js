class DTOActividad {
    //*Atributos
    fecha = null;//Tipo Date
    descripcion = "";
    tipoActividad = null;//Tipo Enum.

    //*Constructores
    constructor() { }
    constructor(fecha, descripcion, tipoActividad) {
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.tipoActividad = tipoActividad;
    }
    //*Setters
    /**
     * Metodo para asignar la fecha a la actividad.
     * @param {Date} fecha: Fecha de la actividad.
     */
    setFecha(fecha) {
        this.fecha = fecha;
    }
    /**
     * Metodo para asignar la descripcion de una actividad.
     * @param {String} descripcion: Descripcion de la actividad.
     */
    setDescripcion(descripcion) {
        this.descripcion = descripcion;
    }
    /**
     * Metodo para asignar el tipo de actividad.
     * @param {TipoActividad (enum)} tipoActividad: Tipo de la actividad.
     */
    setTipoActividad(tipoActividad) {
        this.tipoActividad = tipoActividad;
    }
    //*Getters
    /**
     * Metodo para obtener la fecha de la actividad.
     * @returns Date fecha: Fecha de la actividad.
     */
    getFecha() {
        return this.fecha;
    }
    /**
     * Metodo para obtener la descripcion de la actividad.
     * @returns String descripcion: Descripcion de la actividad.
     */
    getDescripcion() {
        return this.descripcion;
    }
    /**
     * Metodo para obtener el tipo de la actividad.
     * @returns TipoActividad(enum): Tipo de la actividad.
     */
    getTipoActividad() {
        return this.tipoActividad;
    }
}
export default DTOActividad;