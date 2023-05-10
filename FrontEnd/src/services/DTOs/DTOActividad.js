class DTOActividad {
    //*Atributos
    id = null;//Autogenerado por base de datos.
    semana = null;//[1-16]
    tipoActividad = null;//TipoActividad
    descripcion = "";
    responsables = [];//
    fechaHora = null;//String
    fechaHoraPublicacion = null;//String
    recordatorios = [];//Array fechas en string
    modalidad = null;//True o False
    enlace = '';
    afiche = '';
    estado = null;//Estado
    evidencias = [];

    //*Constructores
    constructor() { }
    constructor(id, semana, tipoActividad, descripcion, responsables, fechaHora, fechaHoraPublicacion, recordatorios, modalidad, enlace, afiche, estado, evidencias) {
        this.id = id;
        this.semana = semana;
        this.tipoActividad = tipoActividad;
        this.descripcion = descripcion;
        this.responsables = responsables;
        this.fechaHora = fechaHora;
        this.fechaHoraPublicacion = fechaHoraPublicacion;
        this.recordatorios = recordatorios;
        this.modalidad = modalidad;
        this.enlace = enlace;
        this.afiche = afiche;
        this.estado = estado;
        this.evidencias = evidencias
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