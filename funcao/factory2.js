function  criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto("Hamburguer", 19.99))
console.log(criarProduto("Pizza", 29.99))