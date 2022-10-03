// Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto.

const objetoParaArray = obj => console.log(Object.entries(obj))

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de sofware"
})

objetoParaArray({
    codigo: 11111,
    preco: 12000
})