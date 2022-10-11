// elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um array que especifica uma quantidade de dígitos. Essa função deverá retornar somente somente aqueles números do array que têm a quantidade de dígitos indicada pelo segundo parâmetro

// Não finalizado!!
filtrarPorQuantidadeDeDigitos = (array, digitos) => {
    let resultado = []
    for(let i in array) {
        let strArray = array[i].toString()
        
        for(let j in strArray) {
            if((Number(j)) == digitos -1) {
                resultado.push(Number(strArray))
            }
            if((Number(j)) > digitos -1) {
                resultado.pop()
            }
        }
    }
    console.log(resultado)
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // falta o 1
