// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array.

const receberPrimeiroEUltimoElemento = array => {
    console.log([array.shift(), array.pop()])
}

receberPrimeiroEUltimoElemento([7, 14, "olá"])
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])