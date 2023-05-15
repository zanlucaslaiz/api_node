import autores from "../models/Autor.js";

class AutorController {

    static listarAutor = async (req, res) => {
        try{
            const pegaTodosAutor = await autores.find()
            res.status(200).json(pegaTodosAutor)
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao localizar autor.`})
        }
    }

    static listaAutoresPorId = async (req, res) => {
        const {id} = req.params.id
        try{
            const autorPorId = await autores.findOne(id);
            res.status(200).json(autorPorId)
        }catch(err){
            res.status(400).json({menssage: `${err.message} - Falha ao localizar Id do autor.`})
        }
    }

    static adicionaAutor = async (req, res) => {
        let autorAdicionado = new autores (req.body)
        try{
            await autores.create(autorAdicionado)
            res.status(200).send('Autor adicionado com sucesso.')
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao adicionar autor.`})
        }
    }

    static atualizaAutor = async (req, res) => {
        let {id} = req.params.id
        let novasInfos = req.body
        try{
            await autores.updateOne(id, novasInfos)
            const autorAtualizado = await autores.findOne(id)
            res.status(200).json(autorAtualizado)
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao atualizar autor.`})
        }
    }

    static deletaAutor = async (req, res) => {
        let {id} = req.params.id;
        try{
            await autores.deleteOne(id)
            res.status(200).send('Autor deletado com sucesso.')
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao deleitar autor.`})
        }
    }

}

export default AutorController