// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, conforme exemplo a seguir
// Exemplo: inverter({a: 1, b: 2, c: 3}) // retornará {1: "a", 2: "b", 3: "c"}

// Nâo finalizado!!
inverter = obj => {
    let resultado = Object.entries(obj).map(([chave, valor]) => [valor, chave])
    console.log(obj)
    console.log(Object.fromEntries(resultado))
    
}

inverter({ a: 1, b: 2, c: 3 })