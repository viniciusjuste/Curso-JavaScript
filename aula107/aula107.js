const btn_esquerda = document.getElementById('btn_esquerda')
const btn_direita = document.getElementById('btn_direita')
const carro = document.getElementById('carro')

const init = function(){
    carro.style.position = 'relative'
    carro.style.left = '0px'
}

btn_esquerda.addEventListener('click', (evt) => {
    let pos = parseInt(carro.style.left)
    pos -= 10
    carro.style.left = `${pos}px`
})

btn_direita.addEventListener('click', (evt) => {
    let pos = parseInt(carro.style.left)
    pos += 10
    carro.style.left = `${pos}px`
    console.log(pos)
})

window.addEventListener('load', init())