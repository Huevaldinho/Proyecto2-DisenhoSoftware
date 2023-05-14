//Importaciones necesarias
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import inicioRoutes from "./src/routes/inicio.routes.js";
import profesoresRoutes from "./src/routes/profesor.routes.js";
import estudiantesRoutes from "./src/routes/estudiantes.routes.js";
import comentarioRoutes from "./src/routes/comentarios.routes.js";
import systemDB  from "./src/database/connection.js";
/*import readXlsxFile from "read-excel-file/node";
import fs from "fs";*/

const app = express();
systemDB; //conexión con base de datos

/*NPM NECESARIOS
npm i express -D
npm i morgan -D
npm i mongoose -D
npm i babel -D
npm i read-excel-file
*/ 

//npm start para iniciar el api
//ctrl+c para terminarlo
//Datos para conectarse a mongoDB Atlas

// Conexión a MongoDB Atlas

app.use(express.json()); //para leer jsons
app.use(morgan("dev"));
app.use(cors());
app.use(inicioRoutes); //rutas de la ventana de Inicio Sesión
app.use(estudiantesRoutes); //rutas de la ventana de los estudiantes
app.use(profesoresRoutes); //rutas de la ventana de los profesores
app.use(comentarioRoutes); //rutas relacionadas a los comentarios

/*readXlsxFile(fs.createReadStream('estudiantes.xlsx')).then((rows) => {
    console.log(rows);
})*/

const port = 3000

app.listen(port,() => {
    console.log('Server on port '+port);
});

