import express from "express";
var router = express.Router();

import {
    getEquipo,
    postEquipo,
    deleteEquipo
} from "../controllers/equipo.controller.js";

//Ruta get para mostrar todos los miembros del equipo
router.get('/equipo',getEquipo);
//Ruta post para insertar miembros del equipo
router.post('/equipo',postEquipo);
//Ruta delete para borrar miembros del equipo, recibe el id del profesor a eliminar del equipo
router.delete('/equipo/:id',deleteEquipo);

export default router;