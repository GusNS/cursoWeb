const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Borracha", "preco": 7.50 }' 
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = objeto => objeto.preco
const paraReais = preco => `R$ ${parseFloat(preco).toFixed(2).replace(".", ",")}`

const resultado = carrinho.map(paraObjeto).map(apenasPreco).map(paraReais)
console.log(resultado)