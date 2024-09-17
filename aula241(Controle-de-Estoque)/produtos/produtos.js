import { Cxmsg } from '../utils/cxmsg.js'

const dadosGrid = document.getElementById('dadosGrid');
const btn_add = document.getElementById('btn_add');
const novoProduto = document.getElementById('novoProduto');
const btn_fechar = document.getElementById('btn_fechar');
const btn_fecharPopUpPesq = document.getElementById('btn_fecharPopUpPesq');
const btn_gravarPopUp = document.getElementById('btn_gravarPopUp');
const btn_cancelarPopUp = document.getElementById('btn_cancelarPopUp');
const f_tipoprod = document.getElementById('f_tipoprod');
const f_fornprod = document.getElementById('f_fornprod');
const f_descprod = document.getElementById('f_descprod');
const f_codprod = document.getElementById('f_codprod');
const tituloProduto = document.getElementById('tituloProduto');
const f_statusprod = document.getElementById('f_statusprod');
const f_qtdeprod = document.getElementById('f_qtdeprod');
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

const listaTiposProd = () => {
    const endpoint_tiposprod = `${servidor}tiposprod`;
    fetch(endpoint_tiposprod)
        .then(res => res.json())
        .then(res => {
            f_tipoprod.innerHTML = '';
            res.forEach(el => {
                const option = document.createElement('option');
                option.setAttribute('value', el.n_tipoproduto_tipoproduto);
                option.innerHTML = el.s_desc_tipoproduto;
                f_tipoprod.appendChild(option);
            });
        });
}

const listaFornProd = () => {
    const endpoint_tiposprod = `${servidor}fornprod`;
    fetch(endpoint_tiposprod)
        .then(res => res.json())
        .then(res => {
            f_fornprod.innerHTML = '';
            res.forEach(el => {
                const option = document.createElement('option');
                option.setAttribute('value', el.n_fornecedor_fornecedor);
                option.innerHTML = el.s_desc_fornecedor;
                f_fornprod.appendChild(option);
            });
        });
}

listaTiposProd();
listaFornProd();


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

const carregarTodosProds = () => {
    const endpoint_todosProdutoes = `${servidor}todosprodutos`;
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

carregarTodosProds();

const criarLinha = (el) => {
    const linhaGrid = document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const colunaLinhaGrid1 = document.createElement('div');
    colunaLinhaGrid1.setAttribute('class', 'colunaLinhaGrid c1');
    colunaLinhaGrid1.innerHTML = el.n_cod_produto;
    linhaGrid.appendChild(colunaLinhaGrid1);

    const colunaLinhaGrid2 = document.createElement('div');
    colunaLinhaGrid2.setAttribute('class', 'colunaLinhaGrid c2');
    colunaLinhaGrid2.innerHTML = el.s_desc_produto;
    linhaGrid.appendChild(colunaLinhaGrid2);

    const colunaLinhaGrid3 = document.createElement('div');
    colunaLinhaGrid3.setAttribute('class', 'colunaLinhaGrid c3');
    colunaLinhaGrid3.innerHTML = el.n_qtde_produto;
    linhaGrid.appendChild(colunaLinhaGrid3);

    const colunaLinhaGrid4 = document.createElement('div');
    colunaLinhaGrid4.setAttribute('class', 'colunaLinhaGrid c4');
    colunaLinhaGrid4.innerHTML = el.c_status_produto;
    linhaGrid.appendChild(colunaLinhaGrid4);

    const colunaLinhaGrid5 = document.createElement('div');
    colunaLinhaGrid5.setAttribute('class', 'colunaLinhaGrid c5');
    linhaGrid.appendChild(colunaLinhaGrid5);

    const img_status = document.createElement('img');
    if (el.c_status_produto == 'A') {
        img_status.setAttribute('src', '../imagens/toggle_on.svg');
    } else {
        img_status.setAttribute('src', '../imagens/toggle_off.svg');
    }

    img_status.setAttribute('class', 'icone_op');

    // É uma forma de passar o id, por Data Set.
    img_status.setAttribute('data-id', `${el.n_cod_produto}`);

    img_status.addEventListener('click', (evt) => {

        // Aqui eu obtenho o id que eu passei por Data Set.
        const id = evt.target.dataset.id;
        if (evt.target.getAttribute('src') == '../imagens/toggle_on.svg') {
            const endpoint_mudarStatus = `${servidor}mudarStatusProduto/${id}/I`;
            fetch(endpoint_mudarStatus)
                .then(res => {
                    if (res.status == 200) {
                        evt.target.setAttribute('src', '../imagens/toggle_off.svg')
                        evt.target.parentNode.parentNode.childNodes[3].innerHTML = 'I';
                    }
                })
        } else {
            const endpoint_mudarStatus = `${servidor}mudarStatusProduto/${id}/A`;
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
        tituloProduto.innerHTML = 'Editar produto';
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
    carregarTodosProds();
});

btn_gravarPopUp.addEventListener('click', (evt) => {
    const dados = {
        n_cod_produto: f_codprod.value,
        n_tipoproduto_tipoproduto: f_tipoprod.value,
        s_desc_produto: f_descprod.value,
        n_fornecedor_fornecedor: f_fornprod.value,
        n_qtde_produto: f_qtdeprod.value,
        c_status_produto: f_statusprod.value
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
        endpointNovoEditarColab = `${servidor}novoprod`;
    } else {
        endpointNovoEditarColab = `${servidor}editarprod`;
    }
    fetch(endpointNovoEditarColab, cabecalho)
        .then(res => {
            if (res.status == 200) {
                if (modoJanela == 'n') {
                    const config = {
                        titulo: 'Novo produto adicionado com sucesso',
                        texto: 'Novo produto gravado.',
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
                    carregarTodosProds();
                } else {
                    const config = {
                        titulo: 'Edição bem sucedida',
                        texto: 'produto editado com sucesso.',
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
                    carregarTodosProds();
                }
            } else {
                return res.text().then(text => {
                    throw new Error(text);
                });
            }
        })
        .catch(error => {
            console.error('Erro ao adicionar novo produto:', error);
            alert('Erro ao adicionar novo produto. Verifique o console para mais detalhes.');
        });

    //novoProduto.classList.add('ocultar_popUp');
});

const pegarProdutoPorId = (id) => {
    const endpoint_ProdutoPorId = `${servidor}dadosProdutoporid/${id}`;
    fetch(endpoint_ProdutoPorId)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            btn_gravarPopUp.setAttribute('data-idcolab', id);
            f_codprod.value = res[0].n_cod_produto;
            f_descprod.value = res[0].s_desc_produto;
            f_qtdeprod.value = res[0].n_qtde_produto;
            f_fornprod.value = res[0].n_fornecedor_fornecedor;
            f_statusprod.value = res[0].c_status_produto;

            novoProduto.classList.remove('ocultar_popUp');
        })
}