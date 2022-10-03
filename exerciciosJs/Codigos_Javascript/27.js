// Construa uma função que receba como parâmetros as alturas e as taxas de crecimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. utilize centímetros para as unidades de medida

const comparaCrescimentoAnual = (altura1, crescAno1, altura2, crescAno2) => {
    let ano = 0, str = ""
    if(altura1 < altura2) {
        str = "Criança 1 é menor e "

        if(crescAno1 > crescAno2) {
            while(altura1 <= altura2) {
                altura1 += crescAno1
                altura2 += crescAno2
                ano++
            }
            str += `ultrapassará Criança 2 em ${ano}ano(s)`
        } else {
            str += "não ultrapassará Criança 2"
        }
    }
    else if(altura2 < altura1) {
        str = "Criança 2 é menor e "

        if(crescAno2 > crescAno1) {
            while(altura2 <= altura1) {
                altura2 += crescAno2
                altura1 += crescAno1
                ano++
            }
            str += `ultrapassará Criança 1 em ${ano}ano(s)`
        } else {
            str += "não ultrapassará Criança 1"
        }
    } 
    else if(altura1 == altura2) {
        str = "As duas tem a mesma altura"

        if(crescAno1 > crescAno2) {
            str += ", mas Criança 1 ultrapassará Criança 2 em 1 ano"
        }
        else if(crescAno2 > crescAno1) {
            str += ", mas Criança 2 ultrapassará Criança 1 em 1 ano"
        } else {
            str += " e continuarão assim"
        }
    } else {
        return "ERRO"
    }
    return str
}

console.log(comparaCrescimentoAnual(100, 5, 95, 6))
