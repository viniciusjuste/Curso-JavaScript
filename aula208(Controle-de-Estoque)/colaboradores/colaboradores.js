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

const servidor = sessionStorage.getItem("servidor_nodered");

const criarCaixaTelefone = (numeroTelefone, idTelefone, tipo) => {
    const tel = document.createElement('div');
    tel.setAttribute('class', 'tel');
    tel.setAttribute('data-id', idTelefone);  // Adiciona o atributo data-id com o id do telefone
    const num_tel = document.createElement('div');
    if (tipo == 'n') {
        num_tel.setAttribute('class', 'num_tel novoTel');
    } else {
        num_tel.setAttribute('class', 'num_tel editarTel');
    }
    num_tel.innerHTML = numeroTelefone;
    tel.appendChild(num_tel);

    const delTel = document.createElement('div');
    delTel.setAttribute('class', 'delTel');
    tel.appendChild(delTel);

    const img = document.createElement('img');
    img.setAttribute('src', '../imagens/delete-icon.svg');
    delTel.appendChild(img);

    img.addEventListener('click', (evt) => {
        const idtel = tel.getAttribute('data-id');  // Obtém o id do telefone do atributo data-id
        console.log('ID do telefone:', idtel);

        if (idtel != '-1') {
            const endpoint_delTelefone = `${servidor}deletarcolaboradorporid/${idtel}`;
            fetch(endpoint_delTelefone)
                .then(res => {
                    if (res.status === 200) {
                        tel.remove();  // Remove a div pai do ícone de exclusão
                    } else {
                        throw new Error('Erro ao deletar telefone');
                    }
                })
                .catch(error => {
                    console.error('Erro ao deletar telefone:', error);
                    alert('Erro ao deletar telefone. Verifique o console para mais detalhes.');
                });
        }
    });

    // Certifique-se de que o elemento 'telefones' existe no DOM
    const telefones = document.getElementById('telefones');
    if (telefones) {
        telefones.appendChild(tel);
    } else {
        console.error("Elemento 'telefones' não encontrado no DOM.");
    }
};

const carregarTodosColabs = () => {
    const endpoint_todosColaboradores = `${servidor}todosusuarios`;
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

                const img_status = document.createElement('img');
                if (el.c_status_usuario == 'A') {
                    img_status.setAttribute('src', '../imagens/toggle_on.svg');
                } else {
                    img_status.setAttribute('src', '../imagens/toggle_off.svg');
                }

                img_status.setAttribute('class', 'icone_op');

                // É uma forma de passar o id, por Data Set.
                img_status.setAttribute('data-idcolab', el.n_usuario_usuario);

                img_status.addEventListener('click', (evt) => {

                    // Aqui eu obtenho o id que eu passei por Data Set.
                    const idcolab = evt.target.dataset.idcolab;
                    if (evt.target.getAttribute('src') == '../imagens/toggle_on.svg') {
                        const endpoint_mudarStatus = `${servidor}mudarStatusColaborador/${idcolab}/I`;
                        fetch(endpoint_mudarStatus)
                            .then(res => {
                                if (res.status == 200) {
                                    evt.target.setAttribute('src', '../imagens/toggle_off.svg')
                                    evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'I';
                                }
                            })
                    } else {
                        const endpoint_mudarStatus = `${servidor}mudarStatusColaborador/${idcolab}/A`;
                        fetch(endpoint_mudarStatus)
                            .then(res => {
                                if (res.status == 200) {
                                    evt.target.setAttribute('src', '../imagens/toggle_on.svg')
                                    evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'A';
                                }
                            })
                    }
                });

                colunaLinhaGrid5.appendChild(img_status);

                const img_editar = document.createElement('img');
                img_editar.setAttribute('src', '../imagens/edit-icon.svg');
                img_editar.setAttribute('class', 'icone_op');
                img_editar.addEventListener('click', (evt) => {
                    modoJanela = 'e';
                    tituloColaborador.innerHTML = 'Editar colaborador';
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
}

carregarTodosColabs();

const endpoint_tiposColaboradores = `${servidor}tiposcolaboradores`;
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
    f_nome.value = '';
    f_tipoColab.value = '';
    f_status.value = '';
    f_foto.value = '';
    img_foto.setAttribute('src', '#');
    telefones.innerHTML = '';
});

btn_fechar.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultar_popUp');
});

btn_cancelarPopUp.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultar_popUp');
    window.location.reload();
});

btn_gravarPopUp.addEventListener('click', (evt) => {
    const tels = [...document.querySelectorAll('.novoTel')];
    let numTels = [];

    tels.forEach(el => {
        numTels.push(el.innerHTML);
    });


    const dados = {
        n_usuario_usuario: evt.target.dataset.idcolab,
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
    let endpointNovoEditarColab = null;

    if (modoJanela == 'n') {
        endpointNovoEditarColab = `${servidor}novocolaborador`;
    } else {
        endpointNovoEditarColab = `${servidor}editarcolaborador`;
    }
    fetch(endpointNovoEditarColab, cabecalho)
        .then(res => {
            if (res.status == 200) {
                if (modoJanela == 'n') {
                    alert('Novo colaborador adicionado com sucesso');
                    f_nome.value = '';
                    f_tipoColab.value = '';
                    f_status.value = '';
                    f_foto.value = '';
                    img_foto.setAttribute('src', '#');
                    telefones.innerHTML = '';
                    carregarTodosColabs();
                } else {
                    alert('Colaborador editado com sucesso');
                }
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
            criarCaixaTelefone(evt.target.value, '-1', 'n');
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
    const endpoint_colaboradorPorId = `${servidor}dadoscolaboradorporid/${id}`;
    fetch(endpoint_colaboradorPorId)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            btn_gravarPopUp.setAttribute('data-idcolab', id)
            f_nome.value = res[0].s_nome_usuario;
            f_tipoColab.value = res[0].n_tipousuario_tipousuario;
            f_status.value = res[0].c_status_usuario;
            img_foto.src = res[0].s_foto_usuario;

            novoColaborador.classList.remove('ocultar_popUp');
        })

    const endpoint_TelefoneColaboradorPorId = `${servidor}telefonescolaboradorporid/${id}`;
    fetch(endpoint_TelefoneColaboradorPorId)
        .then(res => res.json())
        .then(res => {
            telefones.innerHTML = '';
            res.forEach(el => {
                criarCaixaTelefone(el.s_numero_telefone, el.n_telefone_telefone, 'e');
            });
        })
}