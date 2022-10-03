// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no array recebido como parâmetro

const filtrarNumeros = array => {
    function isNumber(value) {
        if(Number.isInteger(value)) {
            return value
        }
    }

    resultado = array.filter(isNumber)
    console.log(resultado)
}

filtrarNumeros(["Javascript", 1, 3, "Web", 20])
filtrarNumeros(["a", "c"])