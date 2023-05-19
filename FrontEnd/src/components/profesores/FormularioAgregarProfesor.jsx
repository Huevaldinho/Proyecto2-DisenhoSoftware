import { useState } from "react";

const FormularioAgregarProfesor = (props) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [file, setFile] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Crear el objeto JSON
    const data = {
      nombre: "Prueba datos quemados",
      nombre2: "Prueba datis hqe am",
      cedula: "901291102",
      apellido1: "ape1",
      apellido2: "tasd",
      correo: "Corrase@estudiantec.cr",
      contrasenna: "12345678",
      rol: "Profesor",
      coordinador: "NOCOORDINADOR",
      telefono: "25232777",
      campus: "Centro Académico de Limón",
      equipo: "Equipo",
      celular: "71120623",
    };

    // Crear una instancia de FormData para enviar el archivo
    const formData = new FormData();
    formData.append("image", file);

    // Agregar los campos de datos al FormData
    for (let key in data) {
      formData.append(key, data[key]);
    }
    console.log(formData)

    try {
      // Enviar la petición al servidor utilizando fetch
      const response = await fetch("http://localhost:3000/profesor", {
        method: "POST",
        body: formData,
      });

      //POST /profesor 500 2.034 ms - 1517
      //MulterError: Unexpected field
      if (response.ok) {
        // Reiniciar el formulario
        setName("");
        setLastName("");
        setFile(null);

        // Mostrar un mensaje de éxito o redirigir a otra página
        alert("La petición se ha enviado correctamente.");
      } else {
        throw new Error("Hubo un error al enviar la petición.");
      }
    } catch (error) {
      // Manejar el error de la petición, por ejemplo, mostrar un mensaje de error al usuario
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="file">Archivo:</label>
        <input type="file" id="file" onChange={handleFileChange} required />
      </div>
      <button className="bg-red-500" type="submit">Enviar</button>
    </form>
  );
};

export default FormularioAgregarProfesor;