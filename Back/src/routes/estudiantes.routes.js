import express from "express";
var router = express.Router();

import {
    getEstudiantes,
    putEstudiante,
    deleteEstudiante
    
} from "../controllers/estudiantes.controller.js";


// Método get para recuperar todos los estudiantes y mostrarlos
router.get('/estudiantes', getEstudiantes);
// Método get para meter estudiantes mediante un excel
router.post('/estudiantes');
//Método put para modificar un estudiante
router.put('/estudiantes', putEstudiante);
//método delete para cambiar el estado de un estudiante y ponerlo inactivo
router.delete('/estudiantes', deleteEstudiante);

export default router;