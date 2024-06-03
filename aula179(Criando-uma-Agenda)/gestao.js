const dados = document.getElementById('dados');
const removerOculto = document.querySelector('.fundopopup')
const f_id = document.getElementById('f_id')
const f_nome = document.getElementById('f_nome')
const f_celular = document.getElementById('f_celular')
const f_email = document.getElementById('f_email')
const f_dataNascimento = document.getElementById('f_dataNascimento')

const preencherDgv = () => {
    dados.innerHTML = '';
    const endpoint = `http://127.0.0.1:1880/pesquisartodoscontatos`;
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            if (Array.isArray(res) && res.length > 0) {
                res.forEach((el) => {
                    const linha = document.createElement('div');
                    linha.classList.add('linhaDados');

                    const c1 = document.createElement('div');
                    c1.setAttribute('class', 'coluna c1');
                    c1.innerHTML = el.n_contato_contato;
                    linha.appendChild(c1);

                    const c2 = document.createElement('div');
                    c2.setAttribute('class', 'coluna c2');
                    c2.innerHTML = el.s_nome_contato;
                    linha.appendChild(c2);

                    const c3 = document.createElement('div');
                    c3.setAttribute('class', 'coluna c3');
                    c3.innerHTML = el.s_celular_contato;
                    linha.appendChild(c3);

                    const c4 = document.createElement('div');
                    c4.setAttribute('class', 'coluna c4');
                    c4.innerHTML = el.s_email_contato;
                    linha.appendChild(c4);

                    const c5 = document.createElement('div');
                    c5.setAttribute('class', 'coluna c5');
                    c5.innerHTML = formatarData(el.dt_dataNascimento_contato);
                    linha.appendChild(c5);

                    const c6 = document.createElement('div');
                    c6.setAttribute('class', 'coluna c6');
                    const img_delete = document.createElement('img')
                    img_delete.setAttribute('src', 'imagens/delete-icon.svg')
                    img_delete.setAttribute('class', 'iconeOp')
                    img_delete.addEventListener('click', (evt) => {
                        const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                        removerContato(id)
                    })

                    const img_editar = document.createElement('img')
                    img_editar.setAttribute('src', 'imagens/edit-icon.svg')
                    img_editar.setAttribute('class', 'iconeOp')
                    img_editar.addEventListener('click', (evt) => {
                        removerOculto.classList.remove('ocultar')
                        const dados = [...evt.target.parentNode.parentNode.childNodes]
                        f_id.value = dados[0].innerHTML
                        f_nome.value = dados[1].innerHTML
                        f_celular.value = dados[2].innerHTML
                        f_email.value = dados[3].innerHTML
                        f_dataNascimento.value = converterParaDataInput(dados[4].innerHTML)
                    })

                    c6.appendChild(img_delete)
                    c6.appendChild(img_editar)
                    linha.appendChild(c6);

                    dados.appendChild(linha);
                });
            } else {
                console.log('Dados não encontrados');
            }
        })
        .catch(error => {
            console.error('Erro na busca:', error);
        });
};

function formatarData(data) {
    if (!data) return '';
    const date = new Date(data);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses são de 0 a 11
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

function converterParaDataInput(data) {
    const partes = data.split('/');
    const dia = partes[0];
    const mes = partes[1];
    const ano = partes[2];
    return `${ano}-${mes}-${dia}`;
}

preencherDgv();

const removerContato = (id) => {
    const endpoint = `http://127.0.0.1:1880/deletarcontatos/${id}`;
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            preencherDgv();
        });
}

const btn_cancelar = document.getElementById('btn_cancelar').addEventListener('click', (evt) => {
    removerOculto.classList.add('ocultar');
});

const btn_gravar = document.getElementById('btn_gravar').addEventListener('click', (evt) => {
    removerOculto.classList.add('ocultar');

    const dados = {
        id: f_id.value,
        nome: f_nome.value,
        celular: f_celular.value,
        email: f_email.value,
        dataNascimento: f_dataNascimento.value // A data já está no formato ISO
    }
    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const endpoint = `http://127.0.0.1:1880/atualizarcontatos`;
    fetch(endpoint, cabecalho)
        .then(res => {
            if (res.status == 200) {
                preencherDgv();
            } else {
                alert('Erro ao atualizar dados');
            }
        });
});
