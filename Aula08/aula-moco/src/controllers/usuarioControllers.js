
const usuarioModel = require('../models/usuarioModel');

class usuarioController {
    static async cadastrarUsuario(req, res) {
        try {
            const { nome, senha } = req.body;

            if (!nome || !senha) {
                return res.status(400).json({ msg: 'Todos os campos devem ser preenchidos!' });
            }

            const usuario = await usuarioModel.salvarUsuario({ nome, senha });

            return res.status(201).json({ msg: 'Usuário cadastrado com sucesso!', usuario });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Erro ao cadastrar usuário!', error: error.message });
        }
    }
    static async listarUsuarios(req, res) {
        try {
            const usuarios = await usuarioModel.listarUsuarios();
            return res.send(200).json(usuarios);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Erro ao listar usuários!', error: error.message });
        }
    }
}

module.exports = usuarioController;
