// Voçê está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que voçê está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const despesasTotais = (produtos) => {
    resultado = 0
    produtos.forEach(e => {
        resultado += e["preco"]
    })
    console.log(resultado)
}

despesasTotais([{
    nome: "Jornal Online",
    categoria: "Informação",
    preco: 89.99
}, {
    nome: "Cinema",
    categoria: "Entrenenimento",
    preco: 150
}])

despesasTotais([{
    nome: "Galaxy S20",
    categoria: "Eletrônicos",
    preco: 3599.99
}, {
    nome: "Macbook Pro",
    categoria: "Eletrônicos",
    preco: 30999.90
}])