const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const btn2 = document.querySelector("#btn_copiar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((e) => {
    e.addEventListener('click', (evt) => {
        const el = evt.target
        el.classList.toggle("selecionado")
    })
})

btn.addEventListener('click', () => {
   const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
   const cursoNaoSelecionado = [...document.querySelectorAll(".curso:not(.selecionado")]
   cursosSelecionados.map((el) => {
    caixa2.appendChild(el)
   })
   cursoNaoSelecionado.map((e) => {
    caixa1.appendChild(e)
})
})


