let dobro = function (a) { // função padrão
    return 2 * a
}

dobro = (a) => { // função arrow
    return 2 * a
}

dobro = a => 2 * a // função arrow com return implícito / função de única linha
console.log(dobro(Math.PI))


let ola = function() {
    return "Olá"
}

ola = () => "Olá"
ola = _ => "Olá" // possui um parâmetro
console.log(ola())