// Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.

const palavra1 = "Amonr"
const palavra2 = "roman"

const checaAllCharIgual = (plv1, plv2) => {
    let check1 = 0, check2 = 0
    plv1 = plv1.toUpperCase()
    plv2 = plv2.toUpperCase()
    
    for(let i = 0; i < plv1.length; i++) {
        for(let j = 0; j < plv2.length; j++) {
            if(plv1.charAt(i) == plv2.charAt(j)) {
                check1++
                break
            }
        }
    }

    for(let i = 0; i < plv2.length; i++) {
        for(let j = 0; j < plv1.length; j++) {
            if(plv2.charAt(i) == plv1.charAt(j)) {
                check2++
                break
            }
        }
    }

    if(check1 == plv1.length && check2 == plv2.length) {
        return true
    } else {
        return false
    }
}


console.log(checaAllCharIgual(palavra1, palavra2))