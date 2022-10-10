// Crie uma funçao que receba uma string como parâmetro e conte quantas palavras tem nela

contarPalavras = string => {
    let count = 0
    let fixedString = string.trim()
    for(let i in fixedString) {
        if(fixedString[i] === " ") {
            count++
        }
    }
    console.log(count + 1)
}

contarPalavras("  Sou uma frase")
contarPalavras("Me divirto aprendendo a programar  ")