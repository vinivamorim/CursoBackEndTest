const router = require("express").Router();
const defaultRouter = "/apiMercado/";

router.use(defaultRouter + "Categorias", require("./categoriasRoute"));
router.use(defaultRouter + "Produtos", require("./produtosRoute"));


router.use("/", (req, res) =>{
    console.log(req.url, req.method, req.ip, req.body);
    res.sendStatus(404)
})

// Temos que colocar o router.use / para passar uma mensagem de errado caso nenhuma das rotas sejam atendidas. É importante ressaltar que as rotas são lidas por linguagem de
// máquina, logo, se a routa router.use("/") for colocada no começo do código, sempre dará erro ao inicializar a página, pois este é o caminho default da aplicação
module.exports = router;