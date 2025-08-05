
const express = require('express');
const router = express.Router();
const LivroController =  require('../controllers/livroControllers');


router.post('/', LivroController.criar);



module.exports = router;
// router.post('/', expositorControllerApi.cadastrarExpositor);
// router.get('/', expositorControllerApi.listarExpositores);
// router.get('/:id', expositorControllerApi.listarExpositoresPorId);
// router.put('/:id', expositorControllerApi.atualizarxpositoresPorId);
// router.delete('/:id', expositorControllerApi.deletarExpositoresPorId);


module.exports = router;