// const c1 = document.querySelector("#c1")

// c1.addEventListener('click', (evt) => {
//     el = evt.target
//     el.classList.add('destaque')
//     alert('Você clicou')
// })

const curso = [...document.getElementsByClassName("curso")]

curso.map((e) => {
    e.addEventListener('click', (evt) => {
    el = evt.target
    el.classList.add('destaque')
    console.log(el.innerHTML + " foi clicado")
    })
})