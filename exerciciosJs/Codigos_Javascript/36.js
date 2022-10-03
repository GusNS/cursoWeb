// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

const vetor = [2, 3, 4, 5, 6, 7, 8]
const vetor2 = [2, 3, 4, 5, 6, 7, 8]

const multiplicaElementos = (array, multiplicador) => {
    for(let i = 0; i < array.length; i++) {
        array[i] *= multiplicador
    }
    return array
}

const multElementMaiorQue5 = (array, multiplicador) => {
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 5) {
            array[i] *= multiplicador
        }
    }
    return array
}

console.log(multiplicaElementos(vetor, 2))
console.log(multElementMaiorQue5(vetor2, 2))