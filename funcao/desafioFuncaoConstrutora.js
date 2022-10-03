class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("João")
p1.falar()

// função construtora //////////////////////////////////////////////////////////
function fPessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${nome}`)
    }
}

const p2 = new fPessoa("Rafael")
p2.falar()

// arrow function //////////////////////////////////////////////////////////////
function fPessoa2(nome) { this.falar = () => console.log(`Meu nome é ${nome}`) }

const p3 = new fPessoa2("Marcos")
p3.falar()