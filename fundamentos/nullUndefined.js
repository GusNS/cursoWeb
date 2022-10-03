let valor; // não inicializada
console.log(valor);

valor = null; // ausência de valor, ñ aponta pra nenhum endereço de memória
console.log(valor);

// console.log(valor.toString()); // erro!!

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco // forma correta de retirar um valor
console.log(produto);

produto.preco = null // sem preço // zerando a ocorrência
console.log(!!produto.preco);
console.log(produto);