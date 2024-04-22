const btn_parar = document.getElementById('btn_parar')
const btn_rodar = document.getElementById('btn_rodar')
const carro = document.getElementById('carro')

const init = function(){
    carro.style = 'position: relative; left: 0px; width: 100px; height: 40px;'
    tamanhoCarro = parseInt(carro.style.width)
    tamanhoTela = window.innerWidth - tamanhoCarro
}

let anima = null
let tamanhoTela = null
let tamanhoCarro = null
let dir = 0

const mover = () => {
        if (parseInt(carro.style.left) >= tamanhoTela){
          dir = -1
        }
        else if (parseInt(carro.style.left) <= 0){
            dir = 1
        }
        carro.style.left = parseInt(carro.style.left) + (10* dir) + 'px'
        anima = setTimeout(mover, 20)
}

btn_rodar.addEventListener('click', () => {
    mover()
})

btn_parar.addEventListener('click', (evt) => {
    clearTimeout(anima)
})

window.addEventListener('load', init())

window.addEventListener('resize', () => {
    tamanhoTela = window.innerWidth - tamanhoCarro
})

window.addEventListener('keydown', (evt) => {
    if (evt.code === 'ArrowUp'){
        carro.style.width = parseInt(carro.style.width) + 10 + 'px'
        carro.style.height = parseInt(carro.style.height) + 10 + 'px'
    }
    if (evt.code === 'ArrowDown'){
        carro.style.width = parseInt(carro.style.width) - 10 + 'px'
        carro.style.height = parseInt(carro.style.height) - 10 + 'px'
    }
    tamanhoCarro = parseInt(carro.style.width)
    tamanhoTela =  window.innerWidth - tamanhoCarro
})