

const express = require('express');
const prototipoControllerApi = require('../controllers/produtoControllerApi');
const router = express.Router();

router.post('/', prototipoControllerApi.cadastrarrPrototipo);
router.get('/', prototipoControllerApi.listarPrototipo);
router.get('/:id', prototipoControllerApi.listarPrototipoPorId);
router.get('/expositores/:id/prototipos', prototipoControllerApi.listarPrototipoEpositorPorId);
router.put('/:id', prototipoControllerApi.atualizarPrototipoPorId);
router.delete('/:id', protitipoControllerApi.deleterPrototipoPorId);








module.exports = router;