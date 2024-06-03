const f_id = document.getElementById('f_id');
const f_nome = document.getElementById('f_nome');
const f_nascimento = document.getElementById('f_nascimento');
const f_email = document.getElementById('f_email');
const f_celular = document.getElementById('f_celular');
let f_txtPesquisa = document.querySelector('#f_txtPesquisa');
const dados = document.getElementById('dados');

const btn_pesquisar = document.getElementById('btn_pesquisar').addEventListener('click', (evt) => {
    let valorPesquisa = f_txtPesquisa.value;
    if (valorPesquisa === '') {
        alert('Campo de pesquisa está vazio!');
        return;
    }

    const f_pesq = document.querySelector('input[name=f_pesquisar]:checked').value;
    const endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${f_pesq}/${valorPesquisa}`;
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            limparDados(); // Limpar dados antes de adicionar novos

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

                    dados.appendChild(linha);

                    const mostarDgv = document.querySelector('.dgv')
                    mostarDgv.classList.remove('ocultar')
                });
            } else {
                console.log('Dados não encontrados');
            }
        })
        .catch(error => {
            console.error('Erro na busca:', error);
        });
});

function formatarData(data) {
    if (!data) return '';
    const date = new Date(data);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses são de 0 a 11
    const day = String(date.getDate()).padStart(2, '0');
    return `${day}/${month}/${year}`;
}

const limparDados = () => {
    f_txtPesquisa.value = '';
    dados.innerHTML = ''; // Limpa as linhas de dados existentes
};
