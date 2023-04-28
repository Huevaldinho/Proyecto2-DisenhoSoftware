import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [segundoNombre, setSegundoNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [carnet, setCarnet] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a una API, guardarlos en una base de datos, etc.
    console.log({
      nombre,
      segundoNombre,
      apellido1,
      apellido2,
      carnet,
      telefono,
      correo,
      estado,
    });
  };

  return (
    <div className="text-center align-middle bg-red-950 p-5 m-5">
      <form className="rounded p-3 m-3 text-center" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          className=""
          onChange={(e) => setNombre(e.target.value)}
        />
        <br />
        <label htmlFor="segundo-nombre">Segundo Nombre:</label>
        <input
          type="text"
          id="segundo-nombre"
          value={segundoNombre}
          onChange={(e) => setSegundoNombre(e.target.value)}
        />
        <br />
        <label htmlFor="apellido1">Apellido 1:</label>
        <input
          type="text"
          id="apellido1"
          value={apellido1}
          onChange={(e) => setApellido1(e.target.value)}
        />
        <br />
        <label htmlFor="apellido2">Apellido 2:</label>
        <input
          type="text"
          id="apellido2"
          value={apellido2}
          onChange={(e) => setApellido2(e.target.value)}
        />
        <br />
        <label htmlFor="carnet">Carnet:</label>
        <input
          type="text"
          id="carnet"
          value={carnet}
          onChange={(e) => setCarnet(e.target.value)}
        />
        <br />
        <label htmlFor="telefono">Teléfono:</label>
        <input
          type="text"
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <br />
        <label htmlFor="correo">Correo:</label>
        <input
          type="email"
          id="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <br />
        <label htmlFor="estado">Estado:</label>
        <select
          id="estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="">Seleccione un estado</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </select>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
