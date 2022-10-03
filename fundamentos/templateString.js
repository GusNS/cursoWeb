const nome = "Debora";
const concatenacao = "Olá " + nome + "!";
const template = `
    Olá
    ${nome}!` // template String

console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase(); // função pra "maiúscular"
console.log(`Ei... ${up("cuidado")}!`);