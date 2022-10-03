console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array("Bia", "Carlos", "Ana") // não recomendado
console.log(aprovados)

aprovados = ["Bia", "Carlos", "Ana"] // notação literal - recomendada
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = "Paulo"
aprovados.push("Abia")
console.log(aprovados.length)

aprovados[9] = "Rafael"
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // ordenou o array
console.log(aprovados) // sairá por ordem alfabética

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ["Bia", "Carlos", "Ana"]
aprovados.splice(1, 1, "Elemento1", "Elemento2") 
// serve para remover e/ou adicionar elementos
// primeiro parâmetro é o índice inicial -> 1
// segundo será quantas casas serãos deletadas após o índice inicial -> 1
// terceiro pra frente são os que serão acrescentados ao array
console.log(aprovados)