const config = {
    cor: '#48f'
}

const cxmsg = new CXmsg(config)

const btn_mostrarCaixaMensagem = document.getElementById('btn_mostrarCaixaMensagem')

btn_mostrarCaixaMensagem.addEventListener('click', () => {
    cxmsg.mostrar("Canal CFB cursos", "Curso de JavaScript")
})