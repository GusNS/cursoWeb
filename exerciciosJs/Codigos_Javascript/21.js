// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela:
// 1) crianças com menos de 10 anos pagam R$80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$50;
// 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95;
// 4) conveniados acima de 60 anos pagam R$130

const planoSaude = (idade, valor = 100) => {
    if(idade <= 10 && idade >= 0) {
        console.log(`Plano Infantil >> R$ ${valor + 80}`)
    } else if(idade > 10 && idade <= 30) {
        console.log(`Plano Adulto >> R$ ${valor + 50}`)
    } else if(idade > 30 && idade <= 60) {
        console.log(`Plano Meia Idade >> R$ ${valor + 95}`)
    } else if(idade > 60) {
        console.log(`Plano Ancião >> R$ ${valor + 130}`)
    } else {
        console.log("Idade Inválida")
    }
}

planoSaude(9)
planoSaude(25)
planoSaude(45)
planoSaude(78)
planoSaude(-1)