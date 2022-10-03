// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let array = [7, 5, 8, 3, 10, 9]

const calculaMediaArit = (array) => {
    let media = 0
    for(let i = 0; i < array.length; i++) {
        media += array[i]
    }
    return media / array.length
}

console.log(calculaMediaArit(array))