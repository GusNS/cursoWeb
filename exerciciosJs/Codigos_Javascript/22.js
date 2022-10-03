// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

const anuidade = (mes, valor, juros = 0.05) => {
    if(mes == 1) {
        console.log(`A pagar: R$ ${valor} - ${mes}/202X`)
    } else if(mes > 1 && mes <= 12) {
        console.log(`A pagar: R$ ${(valor * Math.pow((1 + juros), mes)).toFixed(2)} - ${mes}/202X`)
    } else {
        console.log("Mês Inválido")
    }
}

anuidade(1, 1200)
anuidade(4, 100)
anuidade(12, 1200)
anuidade(13, 1200)