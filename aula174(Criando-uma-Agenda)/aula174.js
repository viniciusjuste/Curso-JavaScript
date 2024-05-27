const cabecalho = document.getElementById('cabecalho')
const menu = document.getElementById('menu')
const principal = document.getElementById('principal')
const btn_home = document.getElementById('btn_home')
const btn_novo = document.getElementById('btn_novo')
const btn_pesquisar = document.getElementById('btn_pesquisar')
const btn_gestao = document.getElementById('btn_gestao')
const btn_sobre = document.getElementById('btn_sobre')

btn_home.addEventListener('click', (evt) => {

    // Abre uma janela, tenho que passar o link da janela, e onde vou abrir, que no caso é no ifame que se chama 'if_principal'.
    // window.open('./home.html', 'if_principal')

    abrirPagina(evt.target, './home.html')
})

btn_novo.addEventListener('click', (evt) => {
    abrirPagina(evt.target, './novo.html')
})

btn_pesquisar.addEventListener('click', (evt) => {
    abrirPagina(evt.target, './pesquisar.html')
})

btn_gestao.addEventListener('click', (evt) => {
    abrirPagina(evt.target, './gestao.html')
})

btn_sobre.addEventListener('click', (evt) => {
    abrirPagina(evt.target, './sobre.html')
})

const abrirPagina = (el, url) => {
   const abas = [...document.querySelectorAll('.aba')]
   abas.forEach(e => {
    e.classList.remove('abaSelecionada')
   })
   el.classList.add('abaSelecionada')
   window.open(url, 'if_principal')
}