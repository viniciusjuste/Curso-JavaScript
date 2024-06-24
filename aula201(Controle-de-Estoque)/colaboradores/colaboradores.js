const dadosGrid = document.getElementById('dadosGrid');
const btn_add = document.getElementById('btn_add');
const novoColaborador = document.getElementById('novoColaborador');
const btn_fechar = document.getElementById('btn_fechar');
const btn_gravarPopUp = document.getElementById('btn_gravarPopUp');
const btn_cancelarPopUp = document.getElementById('btn_cancelarPopUp');
const f_tipoColab = document.getElementById('f_tipoColab');
const telefones = document.getElementById('telefones');
const f_telefone = document.getElementById('f_telefone');
const f_nome = document.getElementById('f_nome');
const f_status = document.getElementById('f_status');
const f_foto = document.getElementById('f_foto');
const img_foto = document.getElementById('img_foto');
const tituloColaborador = document.getElementById('tituloColaborador');

//n = Novo colaborador | e = Editar novo colaborador
let modoJanela = 'n';

const endpoint_todosColaboradores = `http://127.0.0.1:1880/todosusuarios`;
fetch(endpoint_todosColaboradores)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        dadosGrid.innerHTML = '';
        res.forEach(el => {
            const linhaGrid = document.createElement('div');
            linhaGrid.setAttribute('class', 'linhaGrid');

            const colunaLinhaGrid1 = document.createElement('div');
            colunaLinhaGrid1.setAttribute('class', 'colunaLinhaGrid c1');
            colunaLinhaGrid1.innerHTML = el.n_usuario_usuario;
            linhaGrid.appendChild(colunaLinhaGrid1);

            const colunaLinhaGrid2 = document.createElement('div');
            colunaLinhaGrid2.setAttribute('class', 'colunaLinhaGrid c2');
            colunaLinhaGrid2.innerHTML = el.s_nome_usuario;
            linhaGrid.appendChild(colunaLinhaGrid2);

            const colunaLinhaGrid3 = document.createElement('div');
            colunaLinhaGrid3.setAttribute('class', 'colunaLinhaGrid c3');
            colunaLinhaGrid3.innerHTML = el.n_tipousuario_tipousuario;
            linhaGrid.appendChild(colunaLinhaGrid3);

            const colunaLinhaGrid4 = document.createElement('div');
            colunaLinhaGrid4.setAttribute('class', 'colunaLinhaGrid c4');
            colunaLinhaGrid4.innerHTML = el.c_status_usuario;
            linhaGrid.appendChild(colunaLinhaGrid4);

            const colunaLinhaGrid5 = document.createElement('div');
            colunaLinhaGrid5.setAttribute('class', 'colunaLinhaGrid c5');
            linhaGrid.appendChild(colunaLinhaGrid5);

            // const img_status = document.createElement('img');
            // img_status.setAttribute('src', '../imagens/toggle_on.svg');
            // img_status.setAttribute('class', 'icone_op');
            // colunaLinhaGrid5.appendChild(img_status);

            const img_editar = document.createElement('img');
            img_editar.setAttribute('src', '../imagens/edit-icon.svg');
            img_editar.setAttribute('class', 'icone_op');
            img_editar.addEventListener('click', (evt) => {
                modoJanela = 'e';
                tituloColaborador.innerHTML = 'Editar colaborador';
                novoColaborador.classList.remove('ocultar_popUp');
                const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
                pegarColaboradorPorId(id);
            });

            colunaLinhaGrid5.appendChild(img_editar);

            const img_excluir = document.createElement('img');
            img_excluir.setAttribute('src', '../imagens/delete-icon.svg');
            img_excluir.setAttribute('class', 'icone_op');
            colunaLinhaGrid5.appendChild(img_excluir);

            dadosGrid.appendChild(linhaGrid);

        });
    });

const endpoint_tiposColaboradores = `http://127.0.0.1:1880/tiposcolaboradores`;
fetch(endpoint_tiposColaboradores)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        f_tipoColab.innerHTML = '';
        res.forEach(el => {
            const option = document.createElement('option');
            option.setAttribute('value', el.n_tipousuario_tipousuario);
            option.innerHTML = el.s_desc_tipousuario;
            f_tipoColab.appendChild(option);
        });
    });

btn_add.addEventListener('click', (evt) => {
    modoJanela = 'n';
    tituloColaborador.innerHTML = 'Novo colaborador';
    novoColaborador.classList.remove('ocultar_popUp');
});

btn_fechar.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultar_popUp');
});

btn_cancelarPopUp.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultar_popUp');
    window.location.reload();
});

btn_gravarPopUp.addEventListener('click', (evt) => {
    const tels = [...document.querySelectorAll('.num_tel')];
    let numTels = [];

    tels.forEach(el => {
        numTels.push(el.innerHTML);
    });


    const dados = {
        s_nome_usuario: f_nome.value,
        n_tipousuario_tipousuario: f_tipoColab.value,
        c_status_usuario: f_status.value,
        numTelefones: numTels,
        s_foto_usuario: img_foto.getAttribute('src')
    }

    const cabecalho = {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const endpoint_novoColaborador = `http://127.0.0.1:1880/novocolaborador`;

    fetch(endpoint_novoColaborador, cabecalho)
        .then(res => {
            if (res.status == 200) {
                alert('Novo colaborador adicionado com sucesso');
                f_nome.value = '';
                f_tipoColab.value = '';
                f_status.value = '';
                f_foto.value = '';
                img_foto.setAttribute('src', '#');
                telefones.innerHTML = '';
            } else {
                return res.text().then(text => {
                    throw new Error(text);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao adicionar novo colaborador:', error);
            alert('Erro ao adicionar novo colaborador. Verifique o console para mais detalhes.');
        });

    //novoColaborador.classList.add('ocultar_popUp');
});

f_telefone.addEventListener('keyup', (evt) => {
    if (evt.key == 'Enter') {
        if (evt.target.value.length >= 8) {
            const tel = document.createElement('div');
            tel.setAttribute('class', 'tel');

            const num_tel = document.createElement('div');
            num_tel.setAttribute('class', 'num_tel');
            num_tel.innerHTML = evt.target.value;
            tel.appendChild(num_tel);

            const delTel = document.createElement('div');
            delTel.setAttribute('class', 'delTel');
            tel.appendChild(delTel);

            const img = document.createElement('img');
            img.setAttribute('src', '../imagens/delete-icon.svg');
            delTel.appendChild(img);

            img.addEventListener('click', (evt) => {
                evt.target.parentNode.parentNode.remove();
            });

            telefones.appendChild(tel);

            evt.target.value = '';
        } else {
            alert('Número de telefone inválido');
        }
    }
});

const converter_imagem_b64 = (localdestino, arquivoImg) => {
    // Guarda o arquivo de imagem na variável obj
    const obj = arquivoImg;

    // Cria um novo objeto FileReader, que permite ler o conteúdo de arquivos de maneira assíncrona
    const reader = new FileReader();

    // Adiciona um evento ao leitor de arquivos. Quando o arquivo for carregado (evento 'load'), essa função será executada
    reader.addEventListener('load', (evt) => {
        // Guarda o resultado da leitura (a imagem em base64) na variável res
        const res = reader.result;

        // Define o atributo 'src' do localdestino (que geralmente é uma tag <img>) como o resultado da leitura
        localdestino.src = res;
    });

    // Se o arquivo de imagem (obj) não for nulo, lê o conteúdo do arquivo como uma URL de dados (base64)
    if (obj) {
        reader.readAsDataURL(obj);
    }
};


f_foto.addEventListener('change', (evt) => {
    converter_imagem_b64(img_foto, evt.target.files[0]);
});

const pegarColaboradorPorId = (id) => {
const endpoint_colaboradorPorId = `http://127.0.0.1:1880/dadoscolaboradorporid/${id}`;
fetch(endpoint_colaboradorPorId)
.then(res => res.json())
.then(res => {
console.log(res);
f_nome.value = res[0].s_nome_usuario;
f_tipoColab.value = res[0].n_tipousuario_tipousuario;
f_status.value = res[0].c_status_usuario;
f_telefone.value = '';
})
}