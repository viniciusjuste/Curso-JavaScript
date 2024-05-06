import { CXmsg } from "./cxmsg.js"

const config = {
    cor: '#48f',
    tipo: 'sn',
    textos: ['SIM', 'NÂO'],
    comando_Sn: () => {
        console.log('Botão sim pressionado.')
    },
    comando_Nn: () => {
        console.log('Botão não pressionado.')
    }
}
const btn_mostrarCaixaMensagem = document.getElementById('btn_mostrarCaixaMensagem')
const btn_mostrarCaixaMensagem2 = document.getElementById('btn_mostrarCaixaMensagem2')

btn_mostrarCaixaMensagem.addEventListener('click', () => {
    config.tipo = 'sn'
    CXmsg.mostrar(config, "Canal CFB cursos", "Curso de JavaScript")
})

btn_mostrarCaixaMensagem2.addEventListener('click', () => {
    config.tipo = 'Ok'
    config.textos = ['Ok', 'Cancela']
    CXmsg.mostrar(config, 'Youtube', 'Canal com cursos de programação')
})