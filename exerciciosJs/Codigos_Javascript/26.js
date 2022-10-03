// Fazer um programa para encontrar todos os pares entre 1 e 100.

let i = 1, str = ""
while(i <= 100) {
    if(i % 2 == 0) {
        str += i + " "
    }
    i++
}

console.log(str)