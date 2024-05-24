const f_id = document.getElementById('f_id')
const f_nome = document.getElementById('f_nome')
const f_nascimento = document.getElementById('f_nascimento')
const f_email = document.getElementById('f_email')
let f_txtPesquisa = document.querySelector('#f_txtPesquisa')

const btn_pesquisar = document.getElementById('btn_pesquisar').addEventListener('click', (evt) => {

    let valorPesquisa = f_txtPesquisa.value
    if (valorPesquisa == '') {
        alert('Campo de pesquisa está vazio!')
        return
    }

    const f_pesq = document.querySelector('input[name=f_pesquisar]:checked').value
    const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorPesquisa}`
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            if (Array.isArray(res) && res.length > 0) {
                console.log(res)
                const removeOculto = document.querySelector('.resultado')
                removeOculto.classList.remove('ocultar')

                f_idMostar.value = res[0].n_contato_contato
                f_nomeMostar.value = res[0].s_nome_contato
                f_nascimentoMostar.value = formatarData(res[0].dt_dataNascimento_contato)
                f_emailMostar.value = res[0].s_email_contato
                f_celularMostar.value = res[0].s_celular_contato
            } else {
                console.log('Dados não encontrados')
                f_idMostar.value = ''
                f_nomeMostar.value = ''
                f_nascimentoMostar.value = ''
                f_emailMostar.value = ''
                f_celularMostar.value = ''
                f_txtPesquisa.value = ''
            }
        })

    // Pega quem está checado
    // console.log(document.querySelector('input[name=f_pesquisar]:checked').value)
})

const btn_ok = document.getElementById('btn_ok').addEventListener('click', (evt) => {
    const removeOculto = document.querySelector('.resultado')
    removeOculto.classList.add('ocultar')
    f_txtPesquisa.value = ''
})

function formatarData(data) {
    if (!data) return '';
    const date = new Date(data);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses são de 0 a 11
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}


