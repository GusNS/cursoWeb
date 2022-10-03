// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores

// literal e nomeada
function operacoesMtm1 (a, b) { 
    console.log(a + b, a - b, a * b, a / b)
}

// armazenada numa varável e nomeada
const operacoesMtm2 = function operacoesMtm2(a, b) {
    console.log(a + b, a - b, a * b, a / b)
}

// arrow com return implícito
const operacoesMtm3 = (a, b) => console.log(a + b, a - b, a * b, a / b)

operacoesMtm1(4, 3)
operacoesMtm2(4, 3)
operacoesMtm3(4, 3)