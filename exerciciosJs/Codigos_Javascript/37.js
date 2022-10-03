// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam como parâmetros um número n (número de termos), a1 (o primeiro termo) e r (a razão) e escreva os n termos , bem como a soma dos elementos.

const progressãoAritmetica = (n, a1, r) => {
    const termoGeral = a1 + (n - 1) * r
    const somaPA = ((a1 + termoGeral) * n) / 2

    let nTermos = `${a1} + `
    let temp = a1
    for(let i = 1; i < n; i++) {
        if(i < n - 1) {
            temp += r
            nTermos += temp + " + "
        } else {
            temp += r
            nTermos += temp + " ="
        }
    }
    
    console.log(`${nTermos} ${somaPA}`)
}

const progressãoGeometrica = (n, a1, q) => {
    const termoGeral = a1 * Math.pow(q, n - 1)
    const somaPGInfinita = a1 / (1 - q)
    const somaPGFinita = (a1 * (Math.pow(q, n) - 1)) / (q - 1)
    
    let nTermos = `${a1} + `
    let temp = a1
    for(let i = 1; i < n; i++) {
        if(i < n - 1) {
            temp *= q
            nTermos += temp + " + "
        } else {
            temp *= q
            nTermos += temp + " ="
        }
    }

    console.log(`${nTermos} ${somaPGFinita}`)
}

progressãoAritmetica(10, 1, 2)
progressãoGeometrica(6, 2, 2)