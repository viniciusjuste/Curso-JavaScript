const p_temperatura = document.getElementById('p_temperatura')
const p_nivel = document.getElementById('p_nivel')
const p_pressao = document.getElementById('p_pressao')
const btn_texto = document.getElementById('btn_texto')

const obterDadosAPI = () => {
    const endpoint = 'https://bc7370db-d875-4ca2-a528-208ca0b3147f-00-3b0rzochzdit0.riker.replit.dev/'

fetch(endpoint)
.then(response => response.json())
.then(dados => {
    //console.log(dados)
    p_temperatura.innerHTML = `Temperatura: ${dados.temperatura}`
    p_nivel.innerHTML = `Nível: ${dados.nivel}`
    p_pressao.innerHTML = `Pressão: ${dados.presao}`
})
}

//setInterval(obterDadosAPI, 2000)

// ----------------------- POST -----------------------

let dados = {
    nome: 'Vinícius',
    canal: 'CFB Cursos',
    curso: 'JavaScript'
}

let cabecalho = {
    method: 'POST',
    body: JSON.stringify(dados)
}

const gravarDados = () => {
    const endpoint = 'https://bc7370db-d875-4ca2-a528-208ca0b3147f-00-3b0rzochzdit0.riker.replit.dev/'
    fetch(endpoint, cabecalho)
    .then(res => res.json())
    .then(response => {
        console.log(response)
    })
}

btn_texto.addEventListener('click', (evt) => {
    gravarDados()
})
