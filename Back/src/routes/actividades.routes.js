import express from "express";
var router = express.Router();

import {
    getActividades,
    postActividad,
    putActividad,
    deleteActividad
} from "../controllers/actividad.controller.js";


// Método get para recuperar todos los estudiantes y mostrarlos
router.get('/actividades', getActividades);
router.post('/actividades', postActividad);
router.put('/actividades', putActividad);
router.delete('/actividades', deleteActividad);

export default router;