// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

let vetor = [123, 2352, 6345, 0, 223, 999, -123]

const checaMaiorEMenor = (vetor) => {
    let maior = -9999, menor = 9999
    
    for(let i = 0; i < vetor.length; i++) {
        if(maior < vetor[i]) {
            maior = vetor[i]
        }
        if(menor > vetor[i]) {
            menor = vetor[i]
        }
    }
    return `Maior: ${maior}\nMenor: ${menor}`
}

console.log(checaMaiorEMenor(vetor))