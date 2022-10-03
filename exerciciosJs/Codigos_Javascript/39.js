// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.

vetor1 = [1, 2, 3, 4, 5]
vetor2 = [6, 7, 8, 9, 10]

const trocaPrimeiroElemento = (array1, array2) => [array1[0], array2[0]] = [array2[0], array1[0]]

console.log(vetor1[0])
console.log(vetor2[0])

console.log(trocaPrimeiroElemento(vetor1, vetor2))

console.log(vetor1[0])
console.log(vetor2[0])