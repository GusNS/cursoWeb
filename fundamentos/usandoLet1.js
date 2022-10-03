let numero = 1;
{
    let numero = 2;  // visível somente dentro do bloco
    console.log("dentro =", numero);
}
console.log("fora =", numero);