const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]
pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push("Verstappen") // adiciona elemento no final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift("Hamilton") // adiciona elemento no início do array
console.log(pilotos)

// splice pode adicionar e/ou remover itens do array

// adicionar
pilotos.splice(2, 0, "Bottas", "Massa")
console.log(pilotos)

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

// só testando
const teste = [1, 2, 3, 4, 5]
teste.splice(2, 1, 6)
console.log(teste)