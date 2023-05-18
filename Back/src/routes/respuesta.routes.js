import express from "express";
var router = express.Router();

// Métogo get para obtener todas las respuestas a un comentario 
router.get('/respuesta/:idA',getComentarios)

export default router;