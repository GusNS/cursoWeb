// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se anos bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é múltiplo de 4. Não pode ser múltiplo de 100, exceto se for também múltiplo 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano retorna se ele é bissexto ou não.

const checarAnoBissexto = ano => {
    (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0 ? console.log(true) : console.log(false)
}

checarAnoBissexto(2020)
checarAnoBissexto(2100)