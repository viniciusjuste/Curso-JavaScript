const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')
const btn_parar = document.getElementById('btn_parar')
const carro = document.getElementById('carro')

const init = function(){
    carro.style.position = 'relative'
    carro.style.left = '0px'
}

let anima = null

const mover = (dir) => {
   carro.style.left = parseInt(carro.style.left) + (10 * dir) + 'px'
}

btn_esquerda.addEventListener('click', (evt) => {
 clearInterval(anima)
 anima = setInterval(mover, 20, -1)
})

btn_direita.addEventListener('click', (evt) => {
    clearInterval(anima)
    anima = setInterval(mover, 20, 1)
})

btn_parar.addEventListener('click', (evt) => {
    clearInterval(anima)
})

window.addEventListener('load', init())