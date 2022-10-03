// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo’

const lerNumero1a10 = (num) => {
    switch(num) {
        case 0:
            console.log("Zero")
            break
        case 1:
            console.log("Um")
            break
        case 2:
            console.log("Dois")
            break
        case 3:
            console.log("Três")
            break
        case 4:
            console.log("Quatro")
            break
        case 5:
            console.log("Cinco")
            break
        case 6:
            console.log("Seis")
            break
        case 7:
            console.log("Sete")
            break
        case 8:
            console.log("Oito")
            break
        case 9:
            console.log("Nove")
            break
        case 10:
            console.log("Dez")
            break
        default:
            console.log("Número fora do intervalo.")
    }
}

lerNumero1a10(0)
lerNumero1a10(1)
lerNumero1a10(2)
lerNumero1a10(3)
lerNumero1a10(4)
lerNumero1a10(5)
lerNumero1a10(6)
lerNumero1a10(7)
lerNumero1a10(8)
lerNumero1a10(9)
lerNumero1a10(10)
lerNumero1a10(11)