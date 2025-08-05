const express = require('express');
const router = express.Router();
const expositorController = require('../controllers/expositorController');

router.post('/', expositorController.criar);



module.exports = router;
// router.post('/', expositorControllerApi.cadastrarExpositor);
// router.get('/', expositorControllerApi.listarExpositores);
// router.get('/:id', expositorControllerApi.listarExpositoresPorId);
// router.put('/:id', expositorControllerApi.atualizarxpositoresPorId);
// router.delete('/:id', expositorControllerApi.deletarExpositoresPorId);


module.exports = router;