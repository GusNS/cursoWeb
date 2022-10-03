// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array

const somarNumeros = array => {
    resultado = array.reduce((acc, e) => acc + e)
    console.log(resultado)
}

somarNumeros([10, 10, 10])
somarNumeros([15, 15, 15, 15])