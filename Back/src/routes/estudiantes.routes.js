import express from "express";
var router = express.Router();

import {
    getEstudiantes,
    postEstudiantes,
    putEstudiante,
    deleteEstudiante
    
} from "../controllers/estudiantes.controller.js";


// Método get para recuperar todos los estudiantes y mostrarlos
router.get('/estudiantes', getEstudiantes);
// Método get para meter estudiantes mediante un excel, recibe un body con los datos de los estudiantes
router.post('/estudiantes',postEstudiantes);
//Método put para modificar un estudiante, recibe un body
router.put('/estudiantes', putEstudiante);
//método delete para cambiar el estado de un estudiante y ponerlo inactivo, recibe un id como parametro
router.delete('/estudiantes/:id', deleteEstudiante);

export default router;