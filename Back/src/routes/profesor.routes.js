import express from "express";
var router = express.Router();

import {
    getProfesores,
    postProfesor,
    putProfesor,
    deleteProfesor
} from "../controllers/profesor.controller.js"; //importación de métodos de controller profesor


// Método get para recuperar todos los profesores y mostrarlos
router.get('/profesor', getProfesores);
// Método post para agregar un profesor al sistema
router.post('/profesor', postProfesor);
// Método put para modificar un profesor
router.put('/profesor', putProfesor);
// Método delete que cambia el estado de un profesor de activo a inactivo
router.delete('/profesor/:id', deleteProfesor);
export default router;