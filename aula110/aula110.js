const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')
const btn_parar = document.getElementById('btn_parar')
const carro = document.getElementById('carro')

const init = function(){
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
    tamanhoTela = window.innerWidth - parseInt(carro.style.width)
}

let anima = null
let tamanhoTela = null

const mover = (dir) => {
    if(dir > 0){
        if (parseInt(carro.style.left) <= tamanhoTela){
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
        }
    } 
    else if(dir < 0){
        if (parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
        }
    }
   anima = setTimeout(mover, 20, dir)
}

btn_esquerda.addEventListener('click', (evt) => {
 clearTimeout(anima)
 mover(-1)
})

btn_direita.addEventListener('click', (evt) => {
    clearTimeout(anima)
    mover(1)
})

btn_parar.addEventListener('click', (evt) => {
    clearTimeout(anima)
})

window.addEventListener('load', init())

window.addEventListener('resize', () => {
    tamanhoTela = window.innerWidth - parseInt(carro.style.width)
})