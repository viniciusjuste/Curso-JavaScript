const olhos = [...document.getElementsByClassName("olhos")]

let pos_x = 0
let pos_y = 0

window.addEventListener('mousemove', (evt) => { // pega a movimentação do mouse em eixo X e Y
    pos_x = evt.clientX
    pos_y = evt.clientY

    const rotacao = Math.atan2(pos_y, pos_x) * 180/Math.PI // Transforma Radiano em Graus

    olhos.forEach((o) => {
        o.style.transform = "rotate(" + rotacao + "deg)"
    })
})

