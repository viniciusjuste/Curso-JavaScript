import { Cxmsg } from '../utils/cxmsg.js'





const dadosGrid = document.getElementById('dadosGrid');
const btn_add = document.getElementById('btn_add');
const novoProduto = document.getElementById('novoProduto');
const btn_fechar = document.getElementById('btn_fechar');
const btn_fecharPopUpPesq = document.getElementById('btn_fecharPopUpPesq');
const btn_gravarPopUp = document.getElementById('btn_gravarPopUp');
const btn_cancelarPopUp = document.getElementById('btn_cancelarPopUp');
const f_tipoprod = document.getElementById('f_tipoprod');
const telefones = document.getElementById('telefones');
const f_nome = document.getElementById('f_nome');
const f_status = document.getElementById('f_status');
const img_foto = document.getElementById('img_foto');
const tituloProduto = document.getElementById('tituloProduto');
const tituloProdutoPesquisar = document.getElementById('tituloProdutoPesquisar');
const f_filtragem = document.getElementById('f_filtragem');
const pesquisa = document.getElementById('pesquisa');
const btn_pesq = document.getElementById('btn_pesq');
const f_pesqId = document.getElementById('f_pesqId');
const f_pesqNome = document.getElementById('f_pesqNome');
const f_pesq = document.getElementById('f_pesq');
const btn_pesquisar = document.getElementById('btn_pesquisar');
const btn_listarTudo = document.getElementById('btn_listarTudo');

//n = Novo Produto | e = Editar novo Produto
let modoJanela = 'n';

const servidor = sessionStorage.getItem("servidor_nodered");

f_filtragem.addEventListener('keyup', (evt) => {
    const linhas = [...document.querySelectorAll('.linhaGrid')];
    let input, texto, filtragem;
    input = evt.target;
    filtragem = input.value.toUpperCase();
    for (let i = 0; i < linhas.length; i++) {
        texto = linhas[i].children[1].innerHTML;
        if (texto.toUpperCase().indexOf(filtragem) > -1) {
            linhas[i].classList.remove('ocultarLinhaGrid');
            tituloProdutoPesquisar.innerHTML = 'Pesquisar';
        } else {
            linhas[i].classList.add('ocultarLinhaGrid');
        }
    }
});

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
            const endpoint_delTelefone = `${servidor}deletarProdutoporid/${idtel}`;
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
    const endpoint_todosProdutoes = `${servidor}todaspessoas`;
    fetch(endpoint_todosProdutoes)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dadosGrid.innerHTML = '';
            res.forEach(el => {
                criarLinha(el);
            });
        });
}

carregarTodosColabs();

const criarLinha = (el) => {
    const linhaGrid = document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const colunaLinhaGrid1 = document.createElement('div');
    colunaLinhaGrid1.setAttribute('class', 'colunaLinhaGrid c1');
    colunaLinhaGrid1.innerHTML = el.n_pessoa_pessoa;
    linhaGrid.appendChild(colunaLinhaGrid1);

    const colunaLinhaGrid2 = document.createElement('div');
    colunaLinhaGrid2.setAttribute('class', 'colunaLinhaGrid c2');
    colunaLinhaGrid2.innerHTML = el.s_nome_pessoa;
    linhaGrid.appendChild(colunaLinhaGrid2);

    const colunaLinhaGrid3 = document.createElement('div');
    colunaLinhaGrid3.setAttribute('class', 'colunaLinhaGrid c3');
    colunaLinhaGrid3.innerHTML = el.n_tipopessoa_tipopessoa;
    linhaGrid.appendChild(colunaLinhaGrid3);

    const colunaLinhaGrid4 = document.createElement('div');
    colunaLinhaGrid4.setAttribute('class', 'colunaLinhaGrid c4');
    colunaLinhaGrid4.innerHTML = el.c_status_pessoa;
    linhaGrid.appendChild(colunaLinhaGrid4);

    const colunaLinhaGrid5 = document.createElement('div');
    colunaLinhaGrid5.setAttribute('class', 'colunaLinhaGrid c5');
    linhaGrid.appendChild(colunaLinhaGrid5);

    const img_status = document.createElement('img');
    if (el.c_status_pessoa == 'A') {
        img_status.setAttribute('src', '../imagens/toggle_on.svg');
    } else {
        img_status.setAttribute('src', '../imagens/toggle_off.svg');
    }

    img_status.setAttribute('class', 'icone_op');

    // É uma forma de passar o id, por Data Set.
    img_status.setAttribute('data-idcolab', el.n_pessoa_pessoa);

    img_status.addEventListener('click', (evt) => {

        // Aqui eu obtenho o id que eu passei por Data Set.
        const idcolab = evt.target.dataset.idcolab;
        if (evt.target.getAttribute('src') == '../imagens/toggle_on.svg') {
            const endpoint_mudarStatus = `${servidor}mudarStatusProduto/${idcolab}/I`;
            fetch(endpoint_mudarStatus)
                .then(res => {
                    if (res.status == 200) {
                        evt.target.setAttribute('src', '../imagens/toggle_off.svg')
                        evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'I';
                    }
                })
        } else {
            const endpoint_mudarStatus = `${servidor}mudarStatusProduto/${idcolab}/A`;
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
        tituloProduto.innerHTML = 'Editar pessoa';
        const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
        pegarProdutoPorId(id);
    });

    colunaLinhaGrid5.appendChild(img_editar);

    const img_excluir = document.createElement('img');
    img_excluir.setAttribute('src', '../imagens/delete-icon.svg');
    img_excluir.setAttribute('class', 'icone_op');
    colunaLinhaGrid5.appendChild(img_excluir);

    dadosGrid.appendChild(linhaGrid);
}

const listaTiposProd = () => {
    const endpoint_tiposprod = `${servidor}tiposprod`;
    fetch(endpoint_tiposprod)
        .then(res => res.json())
        .then(res => {
            f_tipoprod.innerHTML = '';
            res.forEach(el => {
                const option = document.createElement('option');
                option.setAttribute('value', el.n_tipoproduto_tipoproduto );
                option.innerHTML = el.s_desc_tipoproduto;
                f_tipoprod.appendChild(option);
            });
        });
}

btn_add.addEventListener('click', (evt) => {
    modoJanela = 'n';
    tituloProduto.innerHTML = 'Novo produto';
    novoProduto.classList.remove('ocultar_popUp');
    f_codprod.value = '';
    f_descprod.value = '';
    f_qtdeprod.value = '1';
    f_tipoprod.value = '-1';
    f_fornprod.value = '';
    f_statusprod.value = 'A';
    listaTiposProd();
});

btn_fechar.addEventListener('click', (evt) => {
    novoProduto.classList.add('ocultar_popUp');
});

btn_pesq.addEventListener('click', (evt) => {
    pesquisa.classList.remove('ocultar_popUp');
    f_pesq.value = '';
    f_pesq.focus();
});

btn_fecharPopUpPesq.addEventListener('click', (evt) => {
    pesquisa.classList.add('ocultar_popUp');
});

btn_cancelarPopUp.addEventListener('click', (evt) => {
    novoProduto.classList.add('ocultar_popUp');
    window.location.reload();
});

f_pesqId.addEventListener('click', () => {
    f_pesq.value = '';
    f_pesq.focus();
});

f_pesqNome.addEventListener('click', () => {
    f_pesq.value = '';
    f_pesq.focus();
});

btn_pesquisar.addEventListener('click', () => {
    let tipo = null;
    if (f_pesqId.checked) {
        tipo = 'id';
    } else {
        tipo = 'nome';
    }
    if (f_pesq.value != '') {
        const endpointPesq = `${servidor}pesquisaColab/${tipo}/${f_pesq.value}`;
        fetch(endpointPesq)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dadosGrid.innerHTML = '';
                res.forEach(el => {
                    criarLinha(el);
                });

            })
        pesquisa.classList.add('ocultar_popUp');
    } else {
        const config = {
            titulo: 'Alerta',
            texto: 'Digite o Nome ou Id da pessoa',
            cor: '00f',
            tipo: 'sn',
            ok: () => {
                console.log('Ok clicado');
            },
            sim: () => {

            },
            nao: () => {

            }
        }
        Cxmsg.mostrar(config);
        // alert('Preencha o campo de pesquisa');
        f_pesq.focus();
    }
});

btn_listarTudo.addEventListener('click', (evt) => {
    carregarTodosColabs();
});

btn_gravarPopUp.addEventListener('click', (evt) => {
    const tels = [...document.querySelectorAll('.novoTel')];
    let numTels = [];

    tels.forEach(el => {
        numTels.push(el.innerHTML);
    });

    const dados = {
        n_pessoa_pessoa: evt.target.dataset.idcolab,
        s_nome_pessoa: f_nome.value,
        n_tipopessoa_tipopessoa: f_tipoColab.value,
        c_status_pessoa: f_status.value,
        numTelefones: numTels,
        s_foto_pessoa: img_foto.getAttribute('src')
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
        endpointNovoEditarColab = `${servidor}novoProduto`;
    } else {
        endpointNovoEditarColab = `${servidor}editarProduto`;
    }
    fetch(endpointNovoEditarColab, cabecalho)
        .then(res => {
            if (res.status == 200) {
                if (modoJanela == 'n') {
                    const config = {
                        titulo: 'Nova pessoa gravada',
                        texto: 'pessoa gravada com sucesso.',
                        cor: '00f',
                        tipo: 'ok',
                        ok: () => {
                            console.log('Ok clicado');
                        },
                        sim: () => {

                        },
                        nao: () => {

                        }
                    }
                    Cxmsg.mostrar(config);
                    carregarTodosColabs();
                    img_foto.classList.add('ocultar_popUp');
                } else {
                    const config = {
                        titulo: 'Edição bem sucedida',
                        texto: 'pessoa editada com sucesso.',
                        cor: '00f',
                        tipo: 'ok',
                        ok: () => {
                            console.log('Ok clicado');
                        },
                        sim: () => {

                        },
                        nao: () => {

                        }
                    }
                    Cxmsg.mostrar(config);
                }
            } else {
                return res.text().then(text => {
                    throw new Error(text);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao adicionar nova pessoa:', error);
            alert('Erro ao adicionar nova pessoa. Verifique o console para mais detalhes.');
        });

    //novoProduto.classList.add('ocultar_popUp');
});

const pegarProdutoPorId = (id) => {
    const endpoint_ProdutoPorId = `${servidor}dadosProdutoporid/${id}`;
    fetch(endpoint_ProdutoPorId)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            btn_gravarPopUp.setAttribute('data-idcolab', id)
            f_nome.value = res[0].s_nome_pessoa;
            f_tipoColab.value = res[0].n_tipopessoa_tipopessoa;
            f_status.value = res[0].c_status_pessoa;
            img_foto.src = res[0].s_foto_pessoa;

            novoProduto.classList.remove('ocultar_popUp');
            if (img_foto.src == '' || img_foto.src == '#') {
                img_foto.classList.add('ocultar_popUp');
            } else {
                img_foto.classList.remove('ocultar_popUp');
            }
        })

    const endpoint_TelefoneProdutoPorId = `${servidor}telefonesProdutoporid/${id}`;
    fetch(endpoint_TelefoneProdutoPorId)
        .then(res => res.json())
        .then(res => {
            telefones.innerHTML = '';
            res.forEach(el => {
                criarCaixaTelefone(el.s_numero_telefone, el.n_telefone_telefone, 'e');
            });
        })
}