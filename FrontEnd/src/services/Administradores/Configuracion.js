export default class Configuracion {

    //*Constructores
    constructor() {
    }
    //*Metodos
    /**
     * 
     * @param {String} correoIn 
     * @param {String} contrasennaIn 
     * @returns {JSON} RespuestaAPI
     */
    async loginRequest(correoIn, contrasennaIn) {
        try {
            const response = await fetch('https://api.example.com/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    correo: correoIn,
                    contrasenna: contrasennaIn
                })
            });
            const data = await response.json();
            console.log('Respuesta api para el login:', data);
            return data;
        } catch (error) {
            console.error(error);
            return null;
        }
    }
}



