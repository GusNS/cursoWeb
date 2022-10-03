// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

let array = [134, 234, -3543, 0, -545, 63, 66, -74, 87]

const checaNegativos = (array) => {
    let cont = 0
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            cont++
        }
    }
    console.log(cont)
}

checaNegativos(array)