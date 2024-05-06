import { CXmsg } from "./cxmsg.js"

const config = {
    cor: '#48f'
}

CXmsg.config(config)

const btn_mostrarCaixaMensagem = document.getElementById('btn_mostrarCaixaMensagem')

btn_mostrarCaixaMensagem.addEventListener('click', () => {
    CXmsg.mostrar("Canal CFB cursos", "Curso de JavaScript")
})