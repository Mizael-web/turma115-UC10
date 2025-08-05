
const express = require('express');
const usuarioController = require('../controllers/usuarioControllers'); // veja que seu controller se chama usuarioController (singular)
const router = express.Router();

// Rota para cadastrar usuário
router.post('/', usuarioController.cadastrarUsuario);
router.get('/', usuarioController.listarUsuarios);

module.exports = router;
