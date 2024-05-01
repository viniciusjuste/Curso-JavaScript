const config = {
    titulo: 'Teste',
    texto: 'CFB Cursos',
    cor: '#48f'
}

const cxmsg = new CXmsg(config)

const btn_mostrarCaixaMensagem = document.getElementById('btn_mostrarCaixaMensagem')

btn_mostrarCaixaMensagem.addEventListener('click', () => {
    cxmsg.mostrar()
})