const f_id = document.getElementById('f_id')
const f_nome = document.getElementById('f_nome')
const f_nascimento = document.getElementById('f_nascimento')
const f_email = document.getElementById('f_email')
const f_txtPesquisa = document.querySelector('#f_txtPesquisa')

const btn_pesquisar = document.getElementById('btn_pesquisar').addEventListener('click', (evt) => {
    if(f_txtPesquisa.value == ''){
        alert('Campo de pesquisa está vazio!')
        return
    }
    console.log(document.getElementsByName('f_pesquisar').value)
})