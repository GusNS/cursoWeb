// mecânica para como tratar erros

function tratarErroELancar(erro) {
    // throw new Error("...") // lançando o erro
    // throw 10
    // throw true
    // throw "mensagem"
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch(e) { // executa se der erro
        tratarErroELancar(e)
    } finally { // executa dando erro ou ñ
        console.log("final")
    }
}

const obj = { nome: "Roberto" };
imprimirNomeGritado(obj);