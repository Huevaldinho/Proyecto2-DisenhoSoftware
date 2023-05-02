import express from "express";
var router = express.Router();

import {
    getEstudiantes,
} from "../controllers/estudiantes.controller.js";


// Método get para recuperar todos los estudiantes y mostrarlos
router.get('/estudiantes', getEstudiantes);
//router.post('/estudiantes/:excel', getInicio);

export default router;