// Crie uma função que receberá dois valores: o dividendo e o divisor. A função deverá retornar o resultado e o resto da divisão destes valores

// literal e nomeada
function divisaoEResto1(dividendo, divisor) {
    return `${dividendo / divisor} ${dividendo % divisor}`
}

console.log(divisaoEResto1(10, 5))

// nomedada e armazenada numa variável
const divisaoEResto2 = function divisaoEResto2(dividendo, divisor) {
    return `${dividendo / divisor} ${dividendo % divisor}`
}

console.log(divisaoEResto2(10, 3))

//arrow com return implícito
const divisaoEResto3 = (dividendo, divisor) => `${dividendo / divisor} ${dividendo % divisor}`

console.log(divisaoEResto3(10, 4))