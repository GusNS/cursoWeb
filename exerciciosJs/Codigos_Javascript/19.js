// O cardápio de uma lanchonete é o seguinte:
// |Código|Descrição do Produto|  Preço |
// | 100  |   Cachorro Quente  |R$ 3,00 |
// | 200  | Hambúrguer Simples |R$ 4,00 |
// | 300  |    Cheeseburguer   |R$ 5,50 |
// | 400  |        Bauru       |R$ 7,50 |
// | 500  |    Refrigerante    |R$ 3,50 |
// | 600  |        Suco        |R$ 2,80 |
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

const pedido = (cod, qntd) => {
    switch(cod) {
        case 100:
            return `[${cod}] - ${qntd}x Cachorro Quente - R$ ${qntd * 3.0}`
        case 200:
            return `[${cod}] - ${qntd}x Hambúrguer Simples - R$ ${qntd * 4.0}`
        case 300:
            return `[${cod}] - ${qntd}x Cheeseburguer - R$ ${qntd * 5.50}`
        case 400:
            return `[${cod}] - ${qntd}x Bauru - R$ ${qntd * 7.50}`
        case 500:
            return `[${cod}] - ${qntd}x Refrigerante - R$ ${qntd * 3.50}`
        case 600:
            return `[${cod}] - ${qntd}x Suco - R$ ${qntd * 2.80}`
        default:
            return "Código de Produto Inválido"
    }
}

console.log(pedido(100, 2))
console.log(pedido(200, 2))
console.log(pedido(300, 2))
console.log(pedido(400, 2))
console.log(pedido(500, 2))
console.log(pedido(600, 2))
console.log(pedido(700, 2))