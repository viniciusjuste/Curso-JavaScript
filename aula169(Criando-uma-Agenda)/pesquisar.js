const f_id = document.getElementById('f_id')
const f_nome = document.getElementById('f_nome')
const f_nascimento = document.getElementById('f_nascimento')
const f_email = document.getElementById('f_email')
const f_txtPesquisa = document.querySelector('#f_txtPesquisa')

const btn_pesquisar = document.getElementById('btn_pesquisar').addEventListener('click', (evt) => {
   
    const valorPesquisa = f_txtPesquisa.value
    if (valorPesquisa == '') {
        alert('Campo de pesquisa está vazio!')
        return
    }

    const f_pesq = document.querySelector('input[name=f_pesquisar]:checked').value
    const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorPesquisa}`
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        console.log(res)
    })

   
    // Pega quem está checado
    console.log(document.querySelector('input[name=f_pesquisar]:checked').value)
})