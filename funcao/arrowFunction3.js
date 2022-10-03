let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)

const obj = {}
comparaComThis = comparaComThis.bind(obj) // this vai apontar pra obj e não mais para o escopo global

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // this não apontará para o global

comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj) // não vai mudar o this

comparaComThisArrow(obj) // falso
comparaComThisArrow(module.exports)
comparaComThisArrow(this)