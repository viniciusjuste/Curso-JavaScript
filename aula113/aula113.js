const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posX = document.getElementById('posX')
const posY = document.getElementById('posY')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')

// Define uma tecla de atalho, tem que apertar 'alt' + a tecla que foi definida.
q1.accessKey = 'b'
q2.accessKey = 'n'

const infoTeclaAtalho = () =>{
    console.log('A tecla de atalho do q1 é: ' + q1.accessKey)
    console.log(`A tecla de atalho do q2 é: ${q2.accessKey}`)
}

infoTeclaAtalho()

const info = (el) => {
    let DOMRect_q = el.getBoundingClientRect()

    posX.innerHTML = `posX: ${DOMRect_q.x}`
    posY.innerHTML = `posY: ${DOMRect_q.y}`
    largura.innerHTML = `Largura: ${DOMRect_q.width}`
    altura.innerHTML = `Altura: ${DOMRect_q.height}`
}

q1.addEventListener('click', (evt) => {
    info(evt.target)
})

q2.addEventListener('click', (evt) => {
    info(evt.target) 
})

