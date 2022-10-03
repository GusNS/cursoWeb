// Só uma brincadeira de como a partir de um objeto se pode ter uma estrutura parecida com a de um array
const quaseArray = { 0: "Rafael", 1: "Ana", 2:"Bia" }
console.log(quaseArray)
Object.defineProperty(quaseArray, "toString", {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ["Rafael", "Ana", "Bia"]
console.log(quaseArray.toString(), meuArray)