// Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
// obs: considere que o ano tem 365 dias. Desconsidere anos bissextos e dias decorridos desde o último aniversário.

const AnosParaDias = idade => {
    idade *= 365
    console.log(idade)
}

AnosParaDias(70)