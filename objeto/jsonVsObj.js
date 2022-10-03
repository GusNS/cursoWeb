// JSON é um formato de dados em texto
const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": []}'))

const array = ['{ "a": 1, "b": 2, "c": 3}']
const paraObjeto = json => JSON.parse(json)
console.log(paraObjeto(array))

const apenasC = obj => obj.c
console.log(apenasC(paraObjeto(array)))
