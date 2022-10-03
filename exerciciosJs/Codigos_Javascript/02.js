// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:

// Equilátero: Os três lados são iguais.
// Isósceles: Dois lados iguais.
// Escaleno: Todos os lados são diferentes.

// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

// função literal e nomeada
function triânguloTipo1 (a, b, c) {
    if(a == b && a == c) {
        return "Equilátero"
    } 
    else if((a == b || a == c || b == c) && (a != b || a != c || b != c)) {
        return "Isósceles"
    } else {
        return "Escaleno" // (a != b && a != c && b != c)
    }
}

console.log(triânguloTipo1(2, 2, 2))

// nomedada e armazenada numa variável
const triânguloTipo2 = function triânguloTipo2(a, b, c) {
    if(a == b && a == c) {
        return "Equilátero"
    } 
    else if((a == b || a == c || b == c) && (a != b || a != c || b != c)) {
        return "Isósceles"
    } else {
        return "Escaleno" // (a != b && a != c && b != c)
    }
}

console.log(triânguloTipo2(2, 1, 2))

// arrow function
const triânguloTipo3 = (a, b, c) => {
    if(a == b && a == c) {
        return "Equilátero"
    } 
    else if((a == b || a == c || b == c) && (a != b || a != c || b != c)) {
        return "Isósceles"
    } else {
        return "Escaleno" // (a != b && a != c && b != c)
    }
}

console.log(triânguloTipo3(2, 1, 3))