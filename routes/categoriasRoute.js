const router = require("express").Router();
const controller = require("../controllers/categorias/_categoriasControllerIndex");


router.get("/ListarTodasCategorias", controller.listarTodasCategorias)

module.exports = router;
