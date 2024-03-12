class carro {
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.velMax = 200
        this.cor = undefined
    }

    ligar = () => {
        this.ligado = true
    }

    desligar = () => {
        this.ligado = false
    }

    setCor = function(cor){
        this.cor = cor
    }
}

class militar extends carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.cor = 'Azul'
    }

    atirar = () => {
        if (this.municao > 0){
            this.municao --
        }
    }
}

const c1 = new carro('Golf', 4)
const c2 = new militar('Anfibio', 1, 100, 100)

c1.ligar()
c1.setCor("Branco")

c2.ligar()
c2.setCor('Verde')
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Quantidade de portas: ${c1.portas}`)
console.log(`Está ligado ? ${(c1.ligado ? 'Sim' : 'Não')}`)
console.log(`Velocidade Máxima: ${c1.velMax}`)
console.log(`Cor: ${c1.cor}`)
console.log('--------------------------------------------')

console.log(`Nome: ${c2.nome}`)
console.log(`Quantidade de portas: ${c2.portas}`)
console.log(`Está ligado ? ${(c2.ligado ? 'Sim' : 'Não')}`)
console.log(`Velocidade Máxima: ${c2.velMax}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Quantidade de munição: ${c2.municao}`)
console.log('--------------------------------------------')