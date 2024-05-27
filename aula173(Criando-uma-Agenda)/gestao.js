const dados = document.getElementById('dados');

const preencherDgv = () => {

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
                    c6.setAttribute('class', 'coluna c5');
                    const img_delete = document.createElement('img')
                    img_delete.setAttribute('src', 'imagens/delete-icon.svg')
                    img_delete.setAttribute('class', 'iconeOp')

                    const img_editar = document.createElement('img')
                    img_editar.setAttribute('src', 'imagens/edit-icon.svg')
                    img_editar.setAttribute('class', 'iconeOp')
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

preencherDgv()
