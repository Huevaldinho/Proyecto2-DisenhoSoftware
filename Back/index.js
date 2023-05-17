//Importaciones necesarias
import express from "express";
import morgan from "morgan";
import cors from "cors";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary'
import inicioRoutes from "./src/routes/inicio.routes.js";
import profesoresRoutes from "./src/routes/profesor.routes.js";
import estudiantesRoutes from "./src/routes/estudiantes.routes.js";
import comentarioRoutes from "./src/routes/comentarios.routes.js";
import equipoRoutes from "./src/routes/equipo.routes.js";
import actividadesRoutes from "./src/routes/actividades.routes.js"
import {systemDB}  from "./src/database/connection.js";

/*import readXlsxFile from "read-excel-file/node";
import fs from "fs";*/

const app = express();
systemDB; //conexión con base de datos

// Configurar Cloudinary
cloudinary.config({ //esto es privado
    cloud_name: 'dge4tyjn4',
    api_key: '918428231237698',
    api_secret: 'VN0HAyWjh0kvBEsKd81ZY8ekE5M'
  });
  
  // Configuración de Multer para manejar la subida de archivos
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Directorio donde se guardarán temporalmente los archivos subidos
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    }
  });
  
const upload = multer({ storage });

/*NPM NECESARIOS
npm i express -D
npm i morgan -D
npm i mongoose -D
npm i babel -D
npm i read-excel-file
npm i cors -D
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
app.use(actividadesRoutes); //rutas de relacionado a las actividades
app.use(equipoRoutes);
app.use(comentarioRoutes); //rutas relacionadas a los comentarios

/*readXlsxFile(fs.createReadStream('estudiantes.xlsx')).then((rows) => {
    console.log(rows);
})*/

const port = 3000

app.listen(port,() => {
    console.log('Server on port '+port);
});

