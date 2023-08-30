async function sendImage(){
    let file = document.querySelector(".iptArquivos")
    console.log(file.files);
    const enviarProBack = new FormData();
    enviarProBack.append("imagem", file.files[0])
    console.log(...enviarProBack);

    fetch("http://localhost:3000/apiMercado/Produtos/AdicionarImagemProduto", {
        method: "POST",
        body: enviarProBack
    })
}