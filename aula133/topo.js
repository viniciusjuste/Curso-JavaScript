const head = document.head
const body = document.body

const estilo = '<link rel="stylesheet" href="topo.css">'

head.innerHTML += estilo 

const topo = document.createElement('div')
topo.setAttribute('id', 'topo')
topo.setAttribute('class', 'topo')

// 'prepend' anexa no inicio.
body.prepend(topo)

const logo = 
"<div id='logo' class='logo'>" +
    "<img src='imagens/logo.png' title='CFBCursos'/>" +
"</div>"    

topo.innerHTML += logo

const login =
"<div id='login' class='login'>" +
    "<p id='matricula'>Matricula: <span></span></p>" +
    "<p id='nome'>Nome: <span></span></p>" +
"</div>"

topo.innerHTML += login
