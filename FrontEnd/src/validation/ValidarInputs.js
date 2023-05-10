import Estado from "../services/enums/estado";
import TipoActividad from "../services/enums/tipoActividad";
/**
   * Funcion para validar un telefono.
   * @param {String} telefono: Telefono a validar.
   * @returns true si el telefono es valido.
   *        | false si el telefono es invalido.
   */
export const validarTelefono = (telefono) => {
    const regexTelefono = /^(\+506)?[24678]\d{7}$/;
    if (regexTelefono.test(telefono))
        return true;
    return false;
};
/**
 * Funcion para validar un correo electronico.
 * @param {String} correo:Correo a validar.
 * @returns true si es valido.
 *        | false si es invalido.
 */
export const validarCorreo = (correo) => {
    //Declaracion de expresion regular para validar correos validos.
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regexCorreo.test(correo))
        return true;
    return false;
};
/**
 * Funcion para validar los datos que se pueden cambiar del formulario (telefono y correo).
 * @param {String} correo: Correo a validar.
 * @param {String} telefono: Telefono a validar.
 * @returns 0 Si no hay errores.
 *        | 1 Si el telefono es invalido.
 *        | 2 Si el correo es invalido.
 */
export const validarCorreoTelefono = (correo, telefono) => {
    //Validar correo.
    if (validarCorreo(correo)) {
        //Validar telefono.
        if (validarTelefono(telefono)) {
            //Validacion exitosa.
            return 0;
        } else {
            //Telefono invalido.
            return 1;
        }
    } else {
        //Correo invalido.
        return 2;
    }
};

/*
    *Funcion para validar una contrasenna segun el formato:
    -Al menos 8 caracteres de longitud
    -Al menos una letra mayúscula
    -Al menos una letra minúscula
    -Al menos un número
    -Al menos un carácter especial (!@#$%^&*)

    Ejemplo de contrasenna valida: Contraseña1!
    
    Parametro:
        String contrasenna: Contrasenna que se desa validar.
    Retorna:
        true si la contrasena cumple con el formato.
        false si la contrasenna no cumple con el formato.
 */
export const validarContrasenna = (contrasenna) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    return regex.test(contrasenna);
}

/*
    *Funcion para validar inpus de login.
    Parametros:
        String correo: Correo que se desea validar.
        String contrasenna: Contrasenna que se desea validar.
    Retorna:
        true si el correo y contrasenna son validos segun los formatos establecidos.
        false si son invalidos.
*/
export const validarLogin = (correo, constrasenna) => {
    if (validarCorreo(correo) && validarContrasenna(constrasenna))
        return true;
    return false;
}

/**
   * Funcion para validar una variable es de tipo string.
   * @param {String} stringAValidar: string a validar
   * @returns true si es valido.
   *        | false si es invalido.
   */
const validarVacio = (stringAValidar) => {
    if (typeof stringAValidar === 'string')
        return true;
    return false;

};
/**
 * Funion para validar numero entre un rango.
 * 
 * @param {Integer} numero: numero a validar que este entre el rango.
 * @param {Integer} inicio: Rango menor a comparar.
 * @param {Integer} fin: Rango mayor a comparar.
 * @returns True si es un numero entre el rango.
 *          False si no lo es.
 */
function validarNumero(numero, inicio, fin) {
    if (!isNaN(numero) && numero >= inicio && numero <= fin)
        return true;
    return false;
}
/**
 * Funcion para valida estado.
 * @param {*} estado: estado a validar.
 * @returns True si es valido.
 *          False si es invalido.
 */
const validarEstado = (estado) => {
    const valores = Object.values(Estado);
    return valores.includes(estado);
}
/**
 * Funcion para validar la modalidad.
 * @param {String} modalidad : modaldidad a validar.
 * @returns True si es valida.
 *          False si es invalida.
 */
const validarModalidad = (modalidad) => {
    if (modalidad == 'Presencial' || modalidad == 'Virtual')
        return true;
    return false;
}
/**
 * Funcion para validar el tipo de actividad
 * @param {String} tipoActividad 
 * @returns true si es valida, false si es invalida.
 */
const validarTipoActividad = (tipoActividad) => {
    const valores = Object.values(TipoActividad);
    return valores.includes(tipoActividad)
}
/**
 * Funcion para validar fecha y hora seleccionada para que sea futura.
 * @param {Date} fechaHora 
 * @returns True si es valida
 *          false is es invalida.
 */
const validarFechaHoraSeleccionada = (fechaHora) => {
    if (fechaHora.getTime() > new Date().getTime())
        return true
    return false
}
/**
 * Funcion para validar que la fecha de publicacion sea antes o igual que la fecha de la actividad.
 * @param {Date} fechaActividad: Fecha de la actividad.
 * @param {Date} fechaPublicacion: Fecha de publicacion de actividad.
 * @returns true si esta bien
 *          false si esta mal
 */
const validarFechaPublicacion = (fechaActividad, fechaPublicacion) => {
    if (fechaPublicacion.getTime() > new Date().getTime() && fechaPublicacion <= fechaActividad.getTime())
        return true
    return false
}
/**
 * Funcion para validar enlace de reunion.
 * !TODO
 * @param {String} enlace: Url del enlace.
 * @param {String} modalidad: MOdalidad de la actividad
 * @returns true si esta bien el enlace actual
 *          
 */
const validarEnlace = (enlace, modalidad) => {//!TODO
    if (modalidad == 'Presencial')
        return true;
    return true;
}
/**
 * Funcion para validar afiche.
 * !TODO
 * @param {String} afiche : Url del afiche.
 * @returns  true si esta bien
 *           false si esta mal.
 */
const validarAfiche = (afiche) => {//!TODO
    return true;
}
/**
 * Funcion para validar responsables.
 * @param {[Json]} responsables 
 * @returns true si esta bien
 *          false si esta mal
 */
const validarResponsables = (responsables) => {
    if (responsables.length == 0)
        return false;
    return true
}
/**
 * Funcion para validar que los recordatorios enten antes de la fecha de la actividad
 * y despues de la fecha de publicacion.
 * @param {[Date]} recordatorios: fechas de recordatorio
 * @param {Date} fechaActividad : fecha de la actividad
 * @param {Date} fechaPublicacion : fecha de publicacion de la actividad
 * @returns true si estan bien
 *          false si no hay fechas o hay alguna fecha incorrecta.
 */
const validarRecordatorios = (recordatorios, fechaActividad, fechaPublicacion) => {
    if (recordatorios.length == 0)
        return false;
    recordatorios.map((recordatorio) => {
        if (recordatorio.getTime() < fechaPublicacion.getTime() && recordatorio.getTime() > fechaActividad)
            return false;
    })
    //Todas las fechas estan despues de la fecha de publicacion y antes de la actividad.
    return true;
}


/**
 * Funcion para validar los datos ingresados para crear una actividad.
 * @param {JSON} datos: Tiene la forma: {
      nombreActividad,
      descripcionIngresada,
      semanaSeleccionada,
      estadoSeleccionado,
      modalidadSeleccionada,
      tipoActividadSeleccionada,
      fechaHoraSeleccionada,
      fechaPublicacion,
      enlace,
      afiche,
      responsables,
    }
 * @returns 0: Si todo estabien
          Error 1: nombreActividad
          Error 2: descripcionIngresada
          Error 3: semanaSeleccionada
          Error 4: estadoSeleccionado
          Error 5: modalidadSeleccionada
          Error 6: tipoActividadSeleccionada
          Error 7: fechaHoraSeleccionada
          Error 8: fechaPublicacion
          Error 9: modalidadSeleccionada
          Error 10: afiche
          Error 11: responsables
          Error 12: recordatorios
 */
export const validarDatosActividad = (datos) => {
    if (!validarVacio(datos.nombreActividad))//Nombre
        return 1;
    if (!validarVacio(datos.descripcionIngresada))//Descripcion
        return 2;
    if (!validarNumero(datos.semanaSeleccionada, 1, 16))//Semana
        return 3;
    if (!validarEstado(datos.estadoSeleccionado))//Estado
        return 4;
    if (!validarModalidad(datos.modalidadSeleccionada))//Modalidad
        return 5;
    if (!validarTipoActividad(datos.tipoActividadSeleccionada))
        return 6;
    if (!validarFechaHoraSeleccionada(datos.fechaHoraSeleccionada))
        return 7;
    if (!validarFechaPublicacion(datos.fechaHoraSeleccionada, datos.fechaPublicacion))
        return 8;
    if (!validarEnlace(datos.enlace, datos.modalidadSeleccionada))
        return 9;
    if (!validarAfiche(datos.afiche))
        return 10;
    if (!validarResponsables(datos.responsables))
        return 10;
    if (!validarRecordatorios(datos.recordatorios, datos.fechaHoraSeleccionada, datos.fechaPublicacion))
        return 11;
    //No hay errores.
    return 0;
}

