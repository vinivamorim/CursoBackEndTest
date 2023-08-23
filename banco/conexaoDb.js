const sqlite3 = require('sqlite3');

const conexaoDb = new sqlite3.Database("./banco/mercado.db", sqlite3.OPEN_READWRITE, (err) => {
    if(err) return console.log(err);
    return console.log('Conexão com o banco de dados feita com sucesso!');
})

module.exports = { conexaoDb }