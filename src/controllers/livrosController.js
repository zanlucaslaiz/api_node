import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {
        try{
            const pegaTodosLivros = await livros.find()
            .populate('autor');
            res.status(200).json(pegaTodosLivros)
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao localizar livros.`})
        }
    }

    static listaLivrosPorId = async (req, res) => {
        const {id} = req.params.id
        try{
            const livroPorId = await livros.findOne(id)
            .populate('autor', 'nome');
            res.status(200).json(livroPorId)
        }catch(err){
            res.status(400).json({menssage: `${err.message} - Falha ao localizar Id do livro.`})
        }
    }

    static listaLivrosPorEditora = async (req, res) => {
        const {editora} = req.params.editora
        try{
            const livroPorEditora = await livros.findOne(editora)
            res.status(200).json(livroPorEditora)
        }catch(err){
            res.status(400).json({menssage: `${err.message} - Falha ao localizar editora do livro.`})
        }
    }

    static adicionaLivro = async (req, res) => {
        let livroAdicionado = new livros (req.body)
        try{
            await livros.create(livroAdicionado)
            res.status(200).send('Livro adicionado com sucesso.')
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao adicionar livro.`})
        }
    }

    static atualizaLivro = async (req, res) => {
        let {id} = req.params.id
        let novasInfos = req.body
        try{
            await livros.updateOne(id, novasInfos)
            const livroAtualizado = await livros.findOne(id)
            res.status(200).json(livroAtualizado)
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao atualizar livro.`})
        }
    }

    static deletaLivro = async (req, res) => {
        let {id} = req.params.id;
        try{
            await livros.deleteOne(id)
            res.status(200).send('Livro deletado com sucesso.')
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao deleitar livro.`})
        }
    }

}

export default LivroController