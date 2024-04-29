const texto = document.querySelector('#texto');

const endpoint = 'arquivo-txt.txt'

fetch(endpoint)
.then(res => res.text())
.then(response => {
    console.log(response)
    texto.innerHTML = response
})