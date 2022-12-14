// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

const cedulasCalculo = (valor) => {
    let cedulas = [100, 50, 20, 10, 5, 2, 1]

    for(let i = 0; i < cedulas.length; i++) {
        if(valor >= cedulas[i]) {
            console.log((parseInt(valor / cedulas[i])) + " nota(s) de " + cedulas[i])
            valor %= cedulas[i]
        }
    }
}

cedulasCalculo(298)