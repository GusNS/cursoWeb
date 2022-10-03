// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

const notas = [3.5, 5.75, 7.8, 8.5, 9.8]

const mostrarConceitos = (arrayNotas) => {
    for(let i in arrayNotas) {
        if(arrayNotas[i] >= 0 && arrayNotas[i] < 5) {
            console.log("D")
        }
        else if(arrayNotas[i] >= 5 && arrayNotas[i] < 7) {
            console.log("C")
        }
        else if (arrayNotas[i] >= 7 && arrayNotas[i] < 9) {
            console.log("B")
        }
        else if(arrayNotas[i] >= 9 && arrayNotas[i] <= 10) {
            console.log("A")
        }
    }
}

mostrarConceitos(notas)