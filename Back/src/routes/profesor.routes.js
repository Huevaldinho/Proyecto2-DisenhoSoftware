import express from "express";
var router = express.Router();

import {
    getProfesores,
    postProfesor,
    putProfesor,
    deleteProfesor
} from "../controllers/profesor.controller.js"; //importación de métodos de controller profesor


//ME FALTA PARA ASIGNAR ASISTENTE

// Método get para recuperar todos los profesores y mostrarlos
router.get('/profesor', getProfesores);
// Método post para agregar un profesor al sistema, recibe un body con los datos del profesor a cambiar
router.post('/profesor', postProfesor);
// Método put para modificar un profesor, recibe un body con los datos del profesor a cambiar
router.put('/profesor', putProfesor);
// Método delete que cambia el estado de un profesor de activo a inactivo, recibe un id que es la cédula como parametro
router.delete('/profesor/:id', deleteProfesor);

export default router;