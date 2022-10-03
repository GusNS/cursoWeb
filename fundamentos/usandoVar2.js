var numero = 1;
{
    var numero = 2; // visível tanto dentro qnt fora do bloco
    console.log("dentro =", numero);
}
console.log("fora =", numero);