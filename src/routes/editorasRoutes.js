import express from "express";
import EditoraController from "../controllers/editoraController.js";

const router = express.Router();

router 
 .get("/editoras", EditoraController.listarEditora)
 .get("/editoras/:id", EditoraController.listaEditorasPorId)
 .post("/editoras", EditoraController.adicionaEditora)
 .put("/editoras/:id", EditoraController.atualizaEditora)
 .delete("/editoras/:id", EditoraController.deletaEditora)


 export default router;
 