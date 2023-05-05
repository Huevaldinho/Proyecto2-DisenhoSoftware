export async function loginRequest(correoIn, contrasennaIn) {
    try {
        const response = await fetch('https://api.example.com/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: correoIn,
                correo: contrasennaIn
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
