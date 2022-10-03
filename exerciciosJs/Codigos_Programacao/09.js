// Escreva uma função uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.

const repetir = (param, repeat) => {
    resultado = []
    for(let i = 0; i < repeat; i++) {
        resultado.push(param)
    }
    console.log(resultado)
}

repetir("código", 2)
repetir(7, 3)