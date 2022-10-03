// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são pares e que também tenham índices pares

const receberSomenteOsParesDeIndicesPares = array => {
    resultado = array.map(e => { if(e % 2 == 0) {return e} }).filter(e => array.indexOf(e) % 2 == 0)
    console.log(resultado)
}

receberSomenteOsParesDeIndicesPares([0, 2, 4, 6, 8])
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])