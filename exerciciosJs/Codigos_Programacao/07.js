// Crie uma função que receba quatro números como parâmetros (número, mínimo, máximo, inclusivo) e retorne se o parâmetro numero (o primeiro) está entre mínimo e máximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se número é igual a mínimo ou a máximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se número igual a mínimo ou a máximo.

const estaEntre = (numb, minimo, maximo, inclusivo = false) => {
    if(inclusivo) {
        console.log(numb >= minimo && numb <= maximo)
    } else {
        console.log(numb > minimo && numb < maximo)
    }
}

estaEntre(10, 50, 100)
estaEntre(16, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)