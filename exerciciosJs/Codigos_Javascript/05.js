// Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

const teste = 0.1 + 0.2
console.log(teste)

// literal nomeada
function arrumaNumero1 (numb) {
    return `R$${String(numb.toFixed(2)).replace(".", ",")}`
}

console.log(arrumaNumero1(teste))

// armazenada numa variável
const arrumaNumero2 = function (numb) {
    return `R$${String(numb.toFixed(2)).replace(".", ",")}`
}

console.log(arrumaNumero2(teste))

// arrow function com return implícito
const arrumaNumero3 = (numb) => `R$${String(numb.toFixed(2)).replace(".", ",")}`

console.log(arrumaNumero3(teste))

// Ver sé é int ou string
console.log(Number.isInteger(arrumaNumero1(teste))) // é String
console.log(Number.isInteger(arrumaNumero2(teste))) // é String
console.log(Number.isInteger(arrumaNumero3(teste))) // é String