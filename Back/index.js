//Importaciones necesarias
import express from "express";
import morgan from "morgan";
import inicioRoutes from "./src/routes/inicio.routes.js";
import estudiantesRoutes from "./src/routes/estudiantes.routes.js";
import systemDB  from "./src/database/connection.js";
const app = express();
systemDB; //conexión con base de datos

/*NPM NECESARIOS
npm i express -D
npm i morgan -D
npm i mongoose -D
npm i babel -D
*/ 

//npm start para iniciar el api
//ctrl+c para terminarlo
//Datos para conectarse a mongoDB Atlas

// Conexión a MongoDB Atlas

app.use(express.json()); //para leer jsons
app.use(morgan("dev"));
app.use(inicioRoutes); //rutas de la ventana de Inicio Sesión
app.use(estudiantesRoutes); //rutas de la ventana de los estudiantes, como poder mostrarlos

const port = 3000

app.listen(port,() => {
    console.log('Server on port '+port);
});

