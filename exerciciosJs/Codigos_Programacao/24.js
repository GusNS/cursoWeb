// Desenvolva uma função que recebe um caractere e uma string como parâmtros e retorne a quantidade de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de minúsculas.

contarCaractere = (caracter, string) => {
    let count = 0
    for(let i in string) {
        if(string[i] === caracter) {
            count++
        }
    }
    console.log(count)
}

contarCaractere("r", "A sorte favorece os audazes")
contarCaractere("c", "Conhece-te a ti mesmo")