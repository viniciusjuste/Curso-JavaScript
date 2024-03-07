const caixa = document.querySelector("#caixa")

// const curso = 'JavaScript'
// const canal = 'CFB Cursos'

// const frase = `Este é o curso </br> de ${curso} </br> do canal ${canal}`

const carros = ['Golf', 'Gol', 'Hr-v', 'T-cross']
let ul = `<ul>`

carros.map((el) => {
    ul += `<li> ${el} </li>`
})

ul + `</ul>`

caixa.innerHTML = ul