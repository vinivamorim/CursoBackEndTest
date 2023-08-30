const router = require("express").Router();
const controller = require("../controllers/produtos/_produtosControllerIndex");


router.get("/ListarTodosProdutos", controller.listarTodosProdutos)
router.post("/AdicionarImagemProduto", controller.adicionarImagemProduto)

module.exports = router;
