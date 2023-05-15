import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router 
 .get("/livros", LivroController.listarLivros)
 .get("/livros/busca", LivroController.listaLivrosPorEditora)
 .get("/livros/:id", LivroController.listaLivrosPorId)
 .post("/livros", LivroController.adicionaLivro)
 .put("/livros/:id", LivroController.atualizaLivro)
 .delete("/livros/:id", LivroController.deletaLivro)


 export default router;
 