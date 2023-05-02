import express from "express";
var router = express.Router();

import {
    getProfesoresGuia,
} from "../controllers/profesorGuia.controller.js";


// Método get para recuperar todos los estudiantes y mostrarlos
router.get('/profesorGuia', getProfesoresGuia);
//router.post('/estudiantes/:excel', getInicio);

export default router;