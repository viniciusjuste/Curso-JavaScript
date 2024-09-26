const f_user = document.getElementById('f_user');
const f_password = document.getElementById('f_password');
const btn_login = document.getElementById('btn_login');
const f_code = document.getElementById('f_code');

btn_login.addEventListener('click', () => {
    const dados = {
        usuario: f_user.value,
        senha: f_password.value
    }

    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const endpoint = `http://127.0.0.1:1880/novosdados`
    fetch(endpoint, cabecalho)
        .then(res => res.json())
        .then(res => {
            if (res.status === 200) {
                console.log('Tudo certo')
            }
        })

})

