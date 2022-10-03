// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo: se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Por exemplo: se for fornecido 1, o retorno será -1. Se o parâmetro de entrada não for de nenhum dos tipos acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo...".

const isBoolean = input => typeof input === "boolean" ? true : false

const inverso = entrada => {
    if(isBoolean(entrada)) {
        console.log(!entrada)
    } else if(Number.isInteger(entrada)) {
        console.log(-entrada)
    } else {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof entrada}`)
    }
}

inverso(true)
inverso("6")
inverso(-2000)
inverso("programação")