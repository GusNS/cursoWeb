const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // pega as chaves de um objeto
console.log(Object.values(pessoa)) // pega os valores
console.log(Object.entries(pessoa)) // pega os registros/entradas e mostra em array

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

// versão destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: "01/01/2019"
})

pessoa.dataNascimento = "01/01/2017"
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // junta obj no obj de destino
console.log(obj)

Object.freeze(obj)
obj.c = 1234
console.log(obj)