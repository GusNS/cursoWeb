// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

let vetor = [2, 63, 15, 63, 13, 10, 7, 30, 20, 9, 134]

const checaIntervalo10e20 = (vetor) => {
    let dentro = 0, fora = 0
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++
        } else {
            fora++
        }
    }
    return `Dentro: ${dentro}\nFora: ${fora}`
}

console.log(checaIntervalo10e20(vetor))