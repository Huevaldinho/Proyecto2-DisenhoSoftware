import express from "express";
var router = express.Router();

import {
    postInicio,
} from "../controllers/inicio.controller";


/*router.get('/inicio/', (req,res) => { //Aqui se mostraria la ventana de iniciar sesión
    console.log('Iniciar Sesión middlewhere');
    res.send("iniciar sesion")
});*/

// Método post para recuperar el email y contraseña del cliente y poder validarlos para iniciar sesión
router.post('/inicio/:email/:password', postInicio);

export default router;