class Bola{
    constructor(arrayBolas, palco){
        this.tamanho = Math.floor(Math.random() * 15) + 10 // Define o tamanho da bolinha, vai ser um número inteiro aleatório de 15 a 24 px. O 'floor' arredonda o número.

        this.R = Math.floor(Math.random() * 255) // Define um número inteiro aleatório para sortear uma cor no 'R' do RGB. Que vai de 0 a 255.

        this.G = Math.floor(Math.random() * 255)// Define um número inteiro aleatório para sortear uma cor no 'G' do RGB. Que vai de 0 a 255.

        this.B = Math.floor(Math.random() * 255)// Define um número inteiro aleatório para sortear uma cor no 'B' do RGB. Que vai de 0 a 255.

        this.posicao_x = Math.floor(Math.random() * (larguraPalco - this.tamanho)) // Gera um número inteiro aleatório e multiplica pela largura atual da tela, menos o tamanho da bolinha que está sendo criada.Tudo isso para definir a posição de X que a bolinha vai ser criada.

        this.posicao_y = Math.floor(Math.random() * (alturaPalco - this.tamanho))// Gera um número inteiro aleatório e multiplica pela altura atual da tela, menos o tamanho da bolinha que está sendo criada.Tudo isso para definir a posição de Y que a bolinha vai ser criada.

        this.velocidade_x = Math.floor(Math.random() * 2) + 0.5

        this.velocidade_y = Math.floor(Math.random() * 2) + 0.5

        this.direcao_x = Math.floor(Math.random() * 10) > 5 ? 1 : -1

        this.direcao_y = Math.floor(Math.random() * 10) > 5 ? 1 : -1

        this.palco = palco

        this.arrayBolas = arrayBolas

        this.id = Date.now() + "_" + Math.floor(Math.random * 1000000000000000000000000) // O id vai ser o timestamp mais o número que for sorteado por random.

        this.desenhar()

        this.controle = setInterval(this.controlar, 10)

        this.eu = document.getElementById(this.id)

        num_Bolas ++

        num_objetos.innerHTML = num_Bolas
    }

    minhaPosicao = () => {
        return this.arrayBolas.indexOF(this)
    }

    remover = () => {
        clearInterval(this.controle)

        bolas = bolas.filter((b) => {
            if(b.id != this.id){
                return b
            }
        })
        this.eu.remove()
        num_Bolas --
        num_Bolas.innerHTML = num_Bolas
    }

    desenhar = () => {
        const div =document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style', `left: ${this.posicao_x}; top: ${this.posicao_y}; width: ${this.tamanho}; height: ${this.tamanho}; background-color: rgb(${this.R}, ${this.G}, ${this.B})`)
        this.palco.appendChild(div)
    }

    controlar = () => {

    }
}


const palco = document.getElementById("palco")
const num_objetos = document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")

let larguraPalco = palco.offsetWidth // Extrai a largura do elemento Palco.
let alturaPalco = palco.offsetHeight // Extrai a altura do elemento Palco.
let bolas = []
let num_Bolas = 0

window.addEventListener('resize', (evt) => {
    let larguraPalco = palco.offsetWidth
    let alturaPalco = palco.offsetHeight
})

btn_add.addEventListener('click', (evt) => {
    const quantidade = txt_qtde.value

    for(let i = 0; i < quantidade; i++){
        // codigo de criar bolinhas.
    }
})

btn_remover.addEventListener('click', (evt) => {
    bolas.map((el) => {
        // Remover as bolas.
    })
})

