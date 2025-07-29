

const ExpositorModel = require('../models/expositorModel');

class ExpositorControler {
    static async Criar(req, res) {
        try {
            const { id,  nome, email, instituicao } = req.body;

            const findExpositor = await ExpositorModel.findOne({ where: { email } });
            if (findExpositor) {
                return res.status(400).json({ msg: 'Email já cadastrado' });
            }
            // Verifica se todos os campos foram preenchidos

            if (!nome || !email || !instituicao) {
                res.status(400).json({ msg: 'Campos obrigatorios não informados!' });
                 return
            
            // } else if (typeof id !== 'integer' || nome !== 'stringer' ||  email !== 'stringer' || instituicao !== 'stringer') {
            //     res.status(400).json({ msg: 'Dados inválidos!' });
                return
            
            // } else {
                // const expositor = await ExpositorModel.create({ id, nome, email, instituicao });
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