import editoras from "../models/Editora.js";

class EditoraController {

    static listarEditora = async (req, res) => {
        try{
            const pegaTodosEditora = await editoras
        .find()
            res.status(200).json(pegaTodosEditora)
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao localizar editora.`})
        }
    }

    static listaEditorasPorId = async (req, res) => {
        const {id} = req.params.id
        try{
            const editoraPorId = await editoras.findOne(id);
            res.status(200).json(editoraPorId)
        }catch(err){
            res.status(400).json({menssage: `${err.message} - Falha ao localizar Id do editora.`})
        }
    }

    static adicionaEditora = async (req, res) => {
        let editoraAdicionado = new editoras (req.body)
        try{
            await editoras.create(editoraAdicionado)
            res.status(200).send('Editora adicionado com sucesso.')
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao adicionar editora.`})
        }
    }

    static atualizaEditora = async (req, res) => {
        let {id} = req.params.id
        let novasInfos = req.body
        try{
            await editoras.updateOne(id, novasInfos)
            const editoraAtualizado = await editoras.findOne(id)
            res.status(200).json(editoraAtualizado)
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao atualizar editora.`})
        }
    }

    static deletaEditora = async (req, res) => {
        let {id} = req.params.id;
        try{
            await editoras.deleteOne(id)
            res.status(200).send('Editora deletado com sucesso.')
        }catch(err){
            res.status(500).json({menssage: `${err.message} - Falha ao deleitar editora.`})
        }
    }

}

export default EditoraController