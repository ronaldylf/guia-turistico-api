const { Router } = require("express");
const LugarController = require('../controllers/lugarController');

const router = Router();

router.get('/lugares', LugarController.pegarLugares);
router.get('/lugares/:id', LugarController.pegaLugarPorId);
router.post('/lugares', LugarController.adicionarLugar);
router.put('/lugares/:id', LugarController.atualizaLugar);
router.delete('/lugares/:id', LugarController.excluiLugar);

module.exports = router;