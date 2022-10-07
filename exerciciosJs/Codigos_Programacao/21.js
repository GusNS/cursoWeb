// Crie uma função um array de números e retorne o menor número desse array.

menorNumero = (array = []) => {
    let menor = Infinity
    for(let i in array) {
        if(menor > array[i]) {
            menor = array[i]
        }
    }
    console.log(menor)
}

menorNumero([10, 5, 35, 65])
menorNumero([5, -15, 50, 3])