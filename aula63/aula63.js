const f_tipoMilitar = document.querySelector('#f_tipoMilitar')
const f_tipoNormal = document.querySelector('#f_tipoNormal')
const f_blindagem = document.querySelector('#f_blindagem')
const f_municao = document.querySelector('#f_municao')
const carros = document.querySelector('#carros')
const btn_addCarro = document.querySelector('#btn_addCarro')
const f_nome = document.querySelector('#f_nome')
const f_portas = document.querySelector('#f_portas')



f_tipoMilitar.addEventListener('click', (evt) => {
    f_nome.value = ''
    f_portas.value = 0
    f_blindagem.removeAttribute('disabled')
    f_municao.removeAttribute('disabled')
})

f_tipoNormal.addEventListener('click', (evt) => {
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute('disabled', 'disabled')
    f_municao.setAttribute('disabled', 'disabled')
})

let a_carros = []

const gerenciarCarros = () => {
    carros.innerHTML = ''
    a_carros.forEach((c) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'carro')
    div.innerHTML= `Nome: ${c.nome} <br/> Portas: ${c.portas} <br/> Blindagem: ${c.blindagem} <br/> Munição: ${c.municao}`
    carros.appendChild(div)
    });
}

btn_addCarro.addEventListener('click', (evt) => {
    if (f_tipoNormal.checked){
        const c = new carro(f_nome.value, f_portas.value)
        a_carros.push(c)
    } else {
        const c = new militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value)
        a_carros.push(c)
    }
    gerenciarCarros()
})

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