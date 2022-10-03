// Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, de acordo com a tabela abaixo:
// |Plano|Aumento|
// |  A  |  10%  |
// |  B  |  15%  |
// |  C  |  20%  |
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

const planoSalario = (salario, plano) => {
    if(Number.isInteger(plano) == false) {
        plano = plano.toUpperCase()
    }
    
    switch(plano) {
        case "A":
            return `Salário: ${salario} >> ${salario + (salario * 0.10)}`
        case "B":
            return `Salário: ${salario} >> ${salario + (salario * 0.15)}`
        case "C":
            return `Salário: ${salario} >> ${salario + (salario * 0.20)}`
        default:
            return "Plano Inválido"
    }
}

console.log(planoSalario(1000, "a"))
console.log(planoSalario(1000, "B"))
console.log(planoSalario(1000, "C"))
console.log(planoSalario(1000, "d"))