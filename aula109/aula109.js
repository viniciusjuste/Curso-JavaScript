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
   anima = setTimeout(move, 20, dir)
}

btn_esquerda.addEventListener('click', (evt) => {
 clearTimeout(anima)
 move(-1)
})

btn_direita.addEventListener('click', (evt) => {
    clearTimeout(anima)
    move(1)
})

btn_parar.addEventListener('click', (evt) => {
    clearTimeout(anima)
})

window.addEventListener('load', init())