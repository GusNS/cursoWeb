// Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

const escolaSistema = (cod, nota1, nota2, nota3) => {
    let media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / (4 + 3 + 3)

    while(cod >= 0) {
        if(media >= 5) {
            console.log(`ALUNO [${cod}] - ${nota1}|${nota2}|${nota3} - MEDIA: ${media}`)
            return "APROVADO"
        }
        else if(media < 5 && media >= 0) {
            console.log(`ALUNO [${cod}] - ${nota1}|${nota2}|${nota3} - MEDIA: ${media}`)
            return "REPROVADO"
        } else {
            return "ERRO"
        }
    }
    if(cod < 0) {
        return "Código Inválido"
    }
}

console.log(escolaSistema(100, 5, 3, 6))
console.log(escolaSistema(534, 10, 4, 7))
console.log(escolaSistema(-100, 10, 4, 7))