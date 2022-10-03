// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’, ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.

const calculadora = (numb, operador, numb2) => {
    switch(operador) {
        case "+":
            return numb + numb2
        case "-":
            return numb - numb2
        case "*":
            return numb * numb2
        case "/":
            return numb / numb2
        default:
            return "Operação Inválida"
    }
}

console.log(calculadora(10, "+", 2))
console.log(calculadora(10, "-", 2))
console.log(calculadora(10, "*", 2))
console.log(calculadora(10, "/", 2))
console.log(calculadora(10, "a", 2))