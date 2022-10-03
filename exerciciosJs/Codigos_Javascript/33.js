// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

let vetorInt = [1, 2, 3, 4]
let vetorStr = ['a', 'b', 'c', 'd']
let vetorDouble = [1.5, 2.3, 3.4, 5.2]


console.log(vetorInt.concat(vetorStr).concat(vetorDouble))
console.log(vetorInt.concat(vetorStr, vetorDouble))

const vetorUni = vetorInt.concat(vetorStr, vetorDouble)
console.log(vetorUni)