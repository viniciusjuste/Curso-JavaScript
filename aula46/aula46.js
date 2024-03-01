const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ['HTML', 'CSS', 'JavaScript', 'PHP', 'React', 'MySql', 'ReactNative']
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoverCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el) => {
        el.classList.remove("selecionado")
    })
}

criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
   
    novoElemento.addEventListener('click', (evt) => {
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
} 

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice ++
})

const CursoSelecionado = () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
   
    return cursosSelecionados[0]  
}

btnCursoSelecionado.addEventListener('click', (evt) => {
    try {
        alert("curso selecionado: " + CursoSelecionado().innerHTML)
    } catch {
        alert('Selecione um curso')
    }
})

btnRemoverCurso.addEventListener('click', (evt) => {
    const cs = CursoSelecionado()
    if (cs == undefined){
        alert('Selecione um curso para poder remover')
    }
    cs.remove()
})

btnAdicionarNovoCursoAntes.addEventListener('click', () => {
    try {
        if (nomeCurso.value == ""){
            alert("Não é possivel criar um curso vazio!")
            return
        }
        const cs = CursoSelecionado()
        const criarCurso = criarNovoCurso(nomeCurso.value)
       
        caixaCursos.insertBefore(criarCurso, cs)
        
    } catch {
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', () => {
    try {
        if (nomeCurso.value == ""){
            alert("Não é possivel criar um curso vazio!")
            return
        }
        const cs = CursoSelecionado()
        const criarCurso = criarNovoCurso(nomeCurso.value)
       
        caixaCursos.insertBefore(criarCurso, cs.nextSibling)
        
    } catch {
        alert('Selecione um curso')
    }
})