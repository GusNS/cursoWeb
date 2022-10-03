//  Escrever um programa para exibir os números de 1 até 50 na tela.

let i = 1, str = ""
while(i <= 50) {
    if(i < 50) {
        str += i + ","
    } else {
        str += i + "."
    }
    i++
}

console.log(str)