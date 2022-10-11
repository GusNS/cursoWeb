// Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as consoantes, ou seja, sem as vogais.

removerVogais = string => {
    let newStr = string.replace(/(a|e|i|o|u)/gi, "")
    console.log(newStr)
}

removerVogais("Cod3r")
removerVogais("Fundamentos")