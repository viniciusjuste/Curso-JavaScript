const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySql', 'ReactNative']
const novoElemento = document.createElement("div")

cursos.map((el, i) => { // o map também tem um indice
    const novoElemento = document.createElement("div")
    novoElemento.innerHTML = el
    novoElemento.setAttribute("id", "c" + i)
    novoElemento.setAttribute("class", "curso c1")
    caixa1.appendChild(novoElemento)    
})