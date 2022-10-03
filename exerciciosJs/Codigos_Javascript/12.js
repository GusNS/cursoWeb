// Faça um algoritmo que calcule o fatorial de um número.

const fatorando = (numb) => {
    if(numb == 0) {
        return 1
    } else {
        for(let i = numb - 1; i >= 1; i--) {
            numb *= i
        }
        return numb
    }
}

console.log(fatorando(10))

const fatorando2 = (numb) => {
    if(numb == 0) {
        return 1
    } else {
        return numb * fatorando2(numb - 1)
    }
}

console.log(fatorando2(10))