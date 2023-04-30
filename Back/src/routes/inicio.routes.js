import express from "express";
var router = express.Router();

import {
    getInicio,
} from "../controllers/inicio.controller.js";


// Método get para recuperar el email y contraseña del cliente y poder validarlos para iniciar sesión
router.get('/inicio/:email/:password', getInicio);

export default router;