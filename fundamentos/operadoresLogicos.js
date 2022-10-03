function compras(trab1, trab2) {
    const comprarSovete = trab1 || trab2; // or/Ou
    const comprarTv50 = trab1 && trab2;  // and/E
    // const comprarTv32 = !!(trab1 ^ trab2); //bitwise xor/Ou Exclusivo
    const comprarTv32 = trab1 != trab2; // xor
    const manterSaudavel = !comprarSovete; // Operador unário

    return { comprarSovete, comprarTv50, comprarTv32, manterSaudavel }; // criando objeto de forma reduzida
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));