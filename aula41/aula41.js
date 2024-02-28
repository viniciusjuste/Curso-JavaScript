const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySql', 'ReactNative']

cursos.map((el, i) => { // o map também tem um indice
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = el
    novoElemento.setAttribute("id", "c" + i)
    novoElemento.setAttribute("class", "curso c1")
    caixa1.appendChild(novoElemento)

    btn_lixeira = document.createElement("img")
    btn_lixeira.setAttribute("src", "../imagens/icons8-lixeira-64.png")
    btn_lixeira.setAttribute("class", "btn_lixeira")
    novoElemento.appendChild(btn_lixeira)
    
    btn_lixeira.addEventListener('click', (evt) => {
        caixa1.removeChild(evt.target.parentNode)
    })    
})