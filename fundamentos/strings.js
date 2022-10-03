const escola = "Cod3r";

console.log(escola.charAt(4)); // Pegar um caracter determinado
console.log(escola.charAt(5));

console.log(escola.charCodeAt(3)); // Pegar o códido do caracter relacionado a tabela unicode
console.log(escola.indexOf("3")); // Pegar o índice de um caracter específico

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log("Escola ".concat(escola).concat("!")); // Concatenando
console.log("Escola " + escola + "!");

console.log(escola.replace(3, "e")); // Autoexplicativo, pode usar /regex/

console.log("Ana,Maria,Pedro".split(",")); // Tbm pode usar /regex/