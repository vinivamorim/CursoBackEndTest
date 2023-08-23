const { conexaoDb } = require("../../banco/conexaoDb");

exports.listarTodasCategorias = (req, res) => {
    try {
        
        conexaoDb.all("SELECT * FROM CATEGORIAS", (err, rows) => {
            if(err) throw new Error 
            return res.status(200).send(rows);
        })
    } catch (error) {
        res.status(500).send('Erro de conexão com o banco de dados');
    }
    
    
}

