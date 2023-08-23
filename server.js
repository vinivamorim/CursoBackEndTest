const express = require("express");
require("dotenv").config();


const app = express();

const port = process.env.PORT;
main()

// Deixar funções app como assíncronas
async function main (){
    app.use(require("./routes/_routesIndex"));
    
    app.listen(port, () => {
        console.log(`Você está ouvindo o banco de dados na porta ${port}`);
    })
}


// O comando throw new Error serve para criar uma exceção, ou seja, se o resultado não quebra o código, é necessário tratar e dizer para o navegador que aquilo é invalido
// Se não nada acontecerá.x
