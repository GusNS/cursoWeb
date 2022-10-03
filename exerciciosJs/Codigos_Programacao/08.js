// Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a multiplicação deles. Porém, não utilize o operador de multiplicação.

const multiplicar = (num1, num2) => {
    console.log(num1 >= 0 && num2 >= 0 ? num1 * num2 : undefined)
}

multiplicar(5, 5)
multiplicar(0, 7)
multiplicar(-1, 2) 