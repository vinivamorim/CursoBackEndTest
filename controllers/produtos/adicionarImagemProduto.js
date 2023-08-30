const { conexaoDb } = require("../../banco/conexaoDb");

exports.adicionarImagemProduto = (req, res) => {
    console.log(req.files.arquivo);
    conexaoDb.run("INSERT INTO PRODUTOS(IMAGEM) VALUES (?) WHERE ID = 1", ["teste"], (err) => {
        if (err){ 
        console.log(err);    
        return res.status(500).send(err);
        }
        
        return res.status(200).send("Deu certo");        
    })
}

