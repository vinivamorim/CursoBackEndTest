const { conexaoDb } = require("../../banco/conexaoDb");

exports.listarTodosProdutos = (req, res) => {
    try {
        
        conexaoDb.all("SELECT * FROM PRODUTOS", (err, rows) => {
            if(err) throw new Error 
            return res.status(200).send(rows);
        })
    } catch (error) {
        res.status(500).send('Erro de conexão com o banco de dados');
    }
    
    
}

