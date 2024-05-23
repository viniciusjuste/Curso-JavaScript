const f_nome = document.getElementById('f_nome')
const f_celular = document.getElementById('f_celular')
const f_email = document.getElementById('f_email')
const f_dataNascimento = document.getElementById('f_dataNascimento')



const btn_gravar = document.getElementById('btn_gravar').addEventListener('click', (evt) => {

    // Assim que é o metodo POST
    const dados = {
        f_nome: f_nome.value,
        f_celular: f_celular.value,
        f_email: f_email.value,
        f_dataNascimento: f_dataNascimento.value
    }

    const cabecalho = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }
    const enpoint = 'http://127.0.0.1:1880/addcontatos'
    fetch(enpoint, cabecalho)
        .then(res => {
            if (res.status == 200) {
                console.log('OK')
               reset()
            }
            else {
                alert('Erro ao gravar contato')
            }
        })

})

const btn_cancelar = document.getElementById('btn_cancelar').addEventListener('click', (evt) => {
   reset()
})

const reset = () => {
    f_nome.value = ''
    f_celular.value = ''
    f_email.value = ''
    f_dataNascimento.value = ''
    f_nome.focus()
}