// Voçê está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que voçê está desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.

const despesasTotais = (produtos) => {
    console.log(produtos["preco"])
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