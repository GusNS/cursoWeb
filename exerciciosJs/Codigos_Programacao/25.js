// A fim de criar um mecanismo de busca para a sua aplicação, você precisa iniciar criando uma função para identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.

buscarPalavrasSemelhantes = (string, array) => {
    let resultado = []
    for(let i in array) {
        if(array[i].includes(string) == true) {
            resultado.push(array[i])
        }
    }
    console.log(resultado)
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])