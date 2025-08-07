const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/livroControllers');

router.post('/', LivroController.criar);
router.get('/', LivroController.listarTodos);
router.get('/busca', LivroController.buscarPorTitulo);
router.get('/:id', LivroController.buscarPorId);
router.put('/:id', LivroController.atualizar);
router.delete('/:id', LivroController.deletar);

module.exports = router;

