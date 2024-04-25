const f_texto = document.getElementById('f_texto')
const p_texto = document.getElementById('p_texto')
const btn_texto = document.getElementById('btn_texto')

btn_texto.addEventListener('click', (evt) => {

})

let num = 10
let curso = 'JavaScript'

// Quando vai usar função de 'window', não é obrigatório escrever 'window', pode já ir direto.
window.localStorage.setItem('numero', num)
localStorage.setItem('nome', 'Bruno')
localStorage.setItem('canal', 'CFB Cursos')
localStorage.setItem('curso', curso)

localStorage.clear()

// Enquanto o 'localStorage' fica salvo, o 'sessionStorage' some quando o navegador é fechado.
sessionStorage.setItem('nome', 'Bruno')
sessionStorage.setItem('canal', 'CFB Cursos')
sessionStorage.setItem('curso', curso)

alert(localStorage.length)


// alert(`Está nesta posção a chave: ${localStorage.key(2)}`)
// alert(localStorage.getItem('numero'))
// alert(localStorage.getItem('nome'))
// alert(localStorage.getItem('canal'))
// alert(localStorage.getItem('curso'))



