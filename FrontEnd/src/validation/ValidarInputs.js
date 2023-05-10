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

export const validarDatosActividad = (datos) => {
    return null;
}