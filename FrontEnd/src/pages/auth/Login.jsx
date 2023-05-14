import React from "react";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validarLogin } from "../../validation/ValidarInputs";
import Role from "../../services/enums/role";
import { MainControllerContext } from "../../contexts/MainControllerContext";
function Login() {
  const { iniciarSesion } = useContext(MainControllerContext);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redireccionar = (respuestaAPI) => {
    //*Navegate al menu segun la respuesta de la api.
    if (respuestaAPI != 1) {
      switch (respuestaAPI.rol) {
        case Role.ASISTENTE: {
          navigate("/menuAsistentes");
          break;
        }
        case Role.PROFESOR: {
          navigate("/menuProfesores");
          break;
        }
        case Role.ESTUDIANTE: {
          navigate("/menuEstudiantes");
        }
      }
    } else {
      alert("No existe usuario con el correo y contraseña ingresados.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let respuestaAPI = 1; //Si la respuesta es 1 es porque no existe el usuario.
    if (validarLogin(email, password)) {
      //*Validar inputs.
      respuestaAPI = await iniciarSesion(email, password);
      redireccionar(respuestaAPI);
    } else {
      alert(
        "No se ha podido iniciar sesion. Correo o contraseña inválidos. Intente de nuevo."
      );
    }
  };
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto m-10 flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-slate-800 px-6 py-8 rounded-xl shadow-md text-black w-full"
          onSubmit={handleSubmit}
          method="post"
        >
          <h1 className="mb-8 text-3xl text-center text-white">
            Iniciar sesión
          </h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Contraseña"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <button
            type="submit"
            className="w-full text-center py-3 bg-blue-500
        rounded bg-green text-white hover:bg-blue-300 focus:outline-none my-1"
          >
            Ingresar
          </button>

          <div className="text-white mt-6 text-center">
            Olvidaste la contraseña?&nbsp;
            <Link
              className="underline border-b border-blue text-blue hover:text-blue-500 text-white"
              to="/cambiarContrasenna"
            >
              Cambiar contraseña
            </Link>
            .
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
