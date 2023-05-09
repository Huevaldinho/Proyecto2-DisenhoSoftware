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
// Método post para agregar un profesor al sistema, recibe un body
router.post('/profesor', postProfesor);
// Método put para modificar un profesor, recibe un body
router.put('/profesor', putProfesor);
// Método delete que cambia el estado de un profesor de activo a inactivo, recibe un id como parámetro
router.delete('/profesor/:id', deleteProfesor);

export default router;