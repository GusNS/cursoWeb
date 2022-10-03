// Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três casos:
// Caso maçã, retorne no console: “Não vendemos esta fruta aqui”.
// Caso kiwi, retorne: “Estamos com escassez de kiwis”.
// Caso melancia, retorne: “Aqui está, são 3 reais o quilo”.
// Teste com estas três opções . Crie também um default, que retornará uma mensagem de erro no console

const checaFruta = (fruta) => {
    if(Number.isInteger(fruta) == false) {
        fruta = fruta.toUpperCase()
    }
    switch(fruta) {
        case "MAÇÃ":
            return "Não vendemos essa fruta aqui"
        case "KIWI":
            return "Estamos com escassez de kiwis"
        case "MELANCIA":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "ERRO!!"
    }
}

console.log(checaFruta("maçã"))
console.log(checaFruta("kiwi"))
console.log(checaFruta("melancia"))
console.log(checaFruta("arroz"))