// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const checarParImpar = (vetor) => {
    let contP = 0, contI = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] % 2 == 0) {
            contP++
        }
        else if(vetor[i] % 2 != 0) {
            contI++
        }
    }
    return `Pares: ${contP}\nÍmpares ${contI}`
}

console.log(checarParImpar(vetor))