// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na quantidade especificada no parâmetro.

const simboloMais = repeat => {
    str = ""
    for(let i = 0; i < repeat; i++) {
        str += "+"
    }
    console.log(str)
}

simboloMais(2)
simboloMais(4)