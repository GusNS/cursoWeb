// Crie uma função que receba dois parâmetros: base e expoente, e retorne a base elevada ao expoente

// literal e nomeada
function exponenciando1(base, expoente) {
    return Math.pow(base, expoente)
}

console.log(exponenciando1(2, 2))

// nomeada e armazenada uma variável
const exponenciando2 = function exponenciando2(base, expoente) {
    return Math.pow(base, expoente)
}

console.log(exponenciando2(3, 2))

// arrow function com return implícito com método novo
const exponenciando3 = (base, expoente) => base ** expoente

console.log(exponenciando3(4, 2))