// Desenvolva uma função que receba como parãmetro um número de 1 a 10. Internamente, na função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado

funcaoDaSorte = a => {
    let rand
    let x = Math.ceil(Math.random(rand)*10)
    if(x === a) {
        console.log(`Parabéns! O número sorteado foi o ${x}`)
    } else {
        console.log(`Que pena! O número sorteado foi o ${x}`)
    }
}

funcaoDaSorte(10)
funcaoDaSorte(5)
funcaoDaSorte(5)