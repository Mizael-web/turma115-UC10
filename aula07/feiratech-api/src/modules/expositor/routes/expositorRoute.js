
const express = require('express');
const expositorControllerApi = require('../controllers/produtoControllerApi');
const router = express.Router();

router.post('/', expositorControllerApi.cadastrarExpositor);
router.get('/', expositorControllerApi.listarExpositores);
router.get('/:id', expositorControllerApi.listarExpositoresPorId);
router.put('/:id', expositorControllerApi.atualizarxpositoresPorId);
router.delete('/:id', expositorControllerApi.deletarExpositoresPorId);


module.exports = router;