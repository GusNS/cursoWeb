let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); // Negando duas vezes

console.log("os verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!" "); // String com no mínimo um espaço
console.log(!!"texto");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log("os falsos...");
console.log(!!0);
console.log(!!""); // String vazia
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log("pra finalizar...");
console.log(!!("" || null || 0 || " ")); //  || = ou


let nome = "";
console.log(nome || "Desconhecido"); // || = ou retorna o true/verdadeiro