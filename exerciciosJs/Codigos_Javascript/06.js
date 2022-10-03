// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

const jurosSimples = (capitalIni, juros, tempo) => capitalIni + (capitalIni * juros * tempo)

console.log(jurosSimples(200, 0.01, 48))


// const jurosCompostos = (capitalIni, juros, tempo) => capitalIni * Math.pow((1 + juros), tempo)
const jurosCompostos = (capitalIni, juros, tempo) => capitalIni * ((1 + juros) ** tempo)

console.log(jurosCompostos(200, 0.01, 48).toFixed(2))