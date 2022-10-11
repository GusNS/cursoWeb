


// Nâo finalizado!!
inverter = obj => {
    let resultado = Object.entries(obj).map(([chave, valor]) => [valor, chave])
    console.log(obj)
    console.log(Object.fromEntries(resultado))
    
}

inverter({ a: 1, b: 2, c: 3 })