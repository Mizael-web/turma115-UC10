

const ExpositorModel = require('../models/expositorModel');

class ExpositorControlerApi {
    static async CadastrarExpositor(req, res) {
        try {
            const { id,  nome, email, instituicao } = req.body;
            if (!id || !nome || !email || !instituicao) {
                res.status(400).json({ msg: 'Todos os campos devem ser preenchidos!' });
                 return
            
            } else if (typeof id !== 'integer' || nome !== 'stringer' ||  email !== 'stringer' || instituicao !== 'stringer') {
                res.status(400).json({ msg: 'Dados inválidos!' });
                return
            
            } else {
                const expositor = await ExpositorModel.create({ id, nome, email, instituicao });
                res.status(201).json({ msg: 'Expositor cadastrado com sucesso!', expositor });
            }
        } catch (error) {
            res.status(500).json({ msg: 'Erro interno', error: error.message });
        }

    }
    static async listarExpositores(req, res){
        try {
            const expositores = await ExpositorModel.findAll();
            res.status(200).json(expositores);
        } catch (error) {
            res.status(500).json({ msg: 'Erro interno', error: error.message });

        }
    }

}

module.exports = ExpositorControlerApi;