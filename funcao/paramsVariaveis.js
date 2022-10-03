// Versão old-school
function soma() {
    let soma = 0
    for(i in arguments) { // pega todos os parâmetros 
        soma += arguments[i] // executa operações neles
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, 3.3, "Teste")) // Vai concatenar
console.log(soma("a", "b", "c"))