import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router 
 .get("/autores", AutorController.listarAutor)
 .get("/autores/:id", AutorController.listaAutoresPorId)
 .post("/autores", AutorController.adicionaAutor)
 .put("/autores/:id", AutorController.atualizaAutor)
 .delete("/autores/:id", AutorController.deletaAutor)


 export default router;
 