import { Cxmsg } from '../utils/cxmsg.js'
const dadosGrid = document.getElementById('dadosGrid');
const btn_add = document.getElementById('btn_add');
const novoFornecedor = document.getElementById('novoFornecedor');
const btn_fechar = document.getElementById('btn_fechar');
const btn_fecharPopupListaContatos = document.getElementById('btn_fecharPopupListaContatos');
const btn_fecharPopUpPesq = document.getElementById('btn_fecharPopUpPesq');
const btn_gravarPopUp = document.getElementById('btn_gravarPopUp');
const btn_cancelarPopUp = document.getElementById('btn_cancelarPopUp');
const f_tipoColab = document.getElementById('f_tipoColab');
const telefones = document.getElementById('telefones');
const f_nome = document.getElementById('f_nome');
const f_status = document.getElementById('f_status');
const f_foto = document.getElementById('f_foto');
const img_foto = document.getElementById('img_foto');
const tituloColaborador = document.getElementById('tituloColaborador');
const tituloColaboradorPesquisar = document.getElementById('tituloColaboradorPesquisar');
const f_filtragem = document.getElementById('f_filtragem');
const pesquisa = document.getElementById('pesquisa');
const btn_pesq = document.getElementById('btn_pesq');
const f_pesqId = document.getElementById('f_pesqId');
const f_pesqNome = document.getElementById('f_pesqNome');
const f_pesq = document.getElementById('f_pesq');
const btn_pesquisar = document.getElementById('btn_pesquisar');
const btn_listarTudo = document.getElementById('btn_listarTudo');
const btn_listarContatosForn = document.getElementById('btn_listarContatosForn');
const listaContatosForn = document.getElementById('listaContatosForn');
const dadosGrid_novosContatosForm = document.getElementById('dadosGrid_novosContatosForm');
const dadosGrid_ContatosFornAdd = document.getElementById('dadosGrid_ContatosFornAdd');

//n = Novo colaborador | e = Editar novo colaborador
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
            tituloColaboradorPesquisar.innerHTML = 'Pesquisar';
        } else {
            linhas[i].classList.add('ocultarLinhaGrid');
        }
    }
});

const carregarTodosFornecedores = () => {
    const endpoint = `${servidor}todosfornecedores`;
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dadosGrid.innerHTML = '';
            res.forEach(el => {
                criarLinha(el);
            });
        });
}

carregarTodosFornecedores();

const criarLinha = (el) => {
    const linhaGrid = document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const colunaLinhaGrid1 = document.createElement('div');
    colunaLinhaGrid1.setAttribute('class', 'colunaLinhaGrid c1');
    colunaLinhaGrid1.innerHTML = el.n_fornecedor_fornecedor;
    linhaGrid.appendChild(colunaLinhaGrid1);

    const colunaLinhaGrid2 = document.createElement('div');
    colunaLinhaGrid2.setAttribute('class', 'colunaLinhaGrid c2');
    colunaLinhaGrid2.innerHTML = el.s_desc_fornecedor;
    linhaGrid.appendChild(colunaLinhaGrid2);

    const colunaLinhaGrid3 = document.createElement('div');
    colunaLinhaGrid3.setAttribute('class', 'colunaLinhaGrid c3');
    colunaLinhaGrid3.innerHTML = el.c_status_fornecedor;
    linhaGrid.appendChild(colunaLinhaGrid3);

    const colunaLinhaGrid4 = document.createElement('div');
    colunaLinhaGrid4.setAttribute('class', 'colunaLinhaGrid c4');
    linhaGrid.appendChild(colunaLinhaGrid4);

    const img_status = document.createElement('img');
    if (el.c_status_fornecedor == 'A') {
        img_status.setAttribute('src', '../imagens/toggle_on.svg');
    } else {
        img_status.setAttribute('src', '../imagens/toggle_off.svg');
    }

    img_status.setAttribute('class', 'icone_op');

    // É uma forma de passar o id, por Data Set.
    img_status.setAttribute('data-idfornecedor', el.n_fornecedor_fornecedor);

    img_status.addEventListener('click', (evt) => {

        // Aqui eu obtenho o id que eu passei por Data Set.
        const idfornecedor = evt.target.dataset.idfornecedor;
        if (evt.target.getAttribute('src') == '../imagens/toggle_on.svg') {
            const endpoint_mudarStatus = `${servidor}mudarStatusFornecedor/${idfornecedor}/I`;
            fetch(endpoint_mudarStatus)
                .then(res => {
                    if (res.status == 200) {
                        evt.target.setAttribute('src', '../imagens/toggle_off.svg')
                        evt.target.parentNode.parentNode.childNodes[2].innerHTML = 'I';
                    }
                })
        } else {
            const endpoint_mudarStatus = `${servidor}mudarStatusFornecedor/${idfornecedor}/A`;
            fetch(endpoint_mudarStatus)
                .then(res => {
                    if (res.status == 200) {
                        evt.target.setAttribute('src', '../imagens/toggle_on.svg')
                        evt.target.parentNode.parentNode.childNodes[2].innerHTML = 'A';
                    }
                })
        }
    });

    colunaLinhaGrid4.appendChild(img_status);

    const img_editar = document.createElement('img');
    img_editar.setAttribute('src', '../imagens/edit-icon.svg');
    img_editar.setAttribute('class', 'icone_op');
    img_editar.addEventListener('click', (evt) => {
        modoJanela = 'e';
        tituloColaborador.innerHTML = 'Editar Fornecedor';
        const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
        pegarColaboradorPorId(id);
    });

    colunaLinhaGrid4.appendChild(img_editar);

    const img_excluir = document.createElement('img');
    img_excluir.setAttribute('src', '../imagens/delete-icon.svg');
    img_excluir.setAttribute('class', 'icone_op');
    colunaLinhaGrid4.appendChild(img_excluir);

    dadosGrid.appendChild(linhaGrid);
}

const addContForn = (id, nome) => {
    const linhaGrid = document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const colunaLinhaGrid1 = document.createElement('div');
    colunaLinhaGrid1.setAttribute('class', 'colunaLinhaGrid c1_lcf');
    colunaLinhaGrid1.innerHTML = id;
    linhaGrid.appendChild(colunaLinhaGrid1);

    const colunaLinhaGrid2 = document.createElement('div');
    colunaLinhaGrid2.setAttribute('class', 'colunaLinhaGrid c2_lcf');
    colunaLinhaGrid2.innerHTML = nome;
    linhaGrid.appendChild(colunaLinhaGrid2);

    const colunaLinhaGrid3 = document.createElement('div');
    colunaLinhaGrid3.setAttribute('class', 'colunaLinhaGrid c3_lcf');
    linhaGrid.appendChild(colunaLinhaGrid3);

    const img_removerContForn = document.createElement('img');

    img_removerContForn.setAttribute('class', 'icone_op');

    img_removerContForn.setAttribute('src', '../imagens/delete-icon.svg');

    img_removerContForn.addEventListener('click', (evt) => {
      
    });

    colunaLinhaGrid3.appendChild(img_removerContForn);

  dadosGrid_ContatosFornAdd.appendChild(linhaGrid);
}

const criarLinhaContForn = (el) => {
    const linhaGrid = document.createElement('div');
    linhaGrid.setAttribute('class', 'linhaGrid');

    const colunaLinhaGrid1 = document.createElement('div');
    colunaLinhaGrid1.setAttribute('class', 'colunaLinhaGrid c1_lcf');
    colunaLinhaGrid1.innerHTML = el.n_pessoa_pessoa;
    linhaGrid.appendChild(colunaLinhaGrid1);

    const colunaLinhaGrid2 = document.createElement('div');
    colunaLinhaGrid2.setAttribute('class', 'colunaLinhaGrid c2_lcf');
    colunaLinhaGrid2.innerHTML = el.s_nome_pessoa;
    linhaGrid.appendChild(colunaLinhaGrid2);

    const colunaLinhaGrid3 = document.createElement('div');
    colunaLinhaGrid3.setAttribute('class', 'colunaLinhaGrid c3_lcf');
    linhaGrid.appendChild(colunaLinhaGrid3);

    const img_addForn = document.createElement('img');

    img_addForn.setAttribute('class', 'icone_op');

    img_addForn.setAttribute('src', '../imagens/add_contForn.svg');

    // É uma forma de passar o id, por Data Set.
    img_addForn.setAttribute('data-idfornecedor', el.n_fornecedor_fornecedor);

    img_addForn.addEventListener('click', (evt) => {
        const linha = evt.target.parentNode.parentNode;
        console.log(linha);
        const id = linha.childNodes[0].innerHTML;
        const nome = linha.childNodes[1].innerHTML;
      addContForn(id, nome);
    });

      
    colunaLinhaGrid3.appendChild(img_addForn);

    const img_verFoneContForn = document.createElement('img');
    img_verFoneContForn.setAttribute('src', '../imagens/verTelefone.svg');
    img_verFoneContForn.setAttribute('class', 'icone_op');
    img_verFoneContForn.addEventListener('click', (evt) => {
        modoJanela = 'e';
        tituloColaborador.innerHTML = 'Editar Fornecedor';
        const id = evt.target.parentNode.parentNode.firstChild.innerHTML;
        pegarColaboradorPorId(id);
    });

    colunaLinhaGrid3.appendChild(img_verFoneContForn);

    dadosGrid_novosContatosForm.appendChild(linhaGrid);
}

btn_add.addEventListener('click', (evt) => {
    modoJanela = 'n';
    tituloColaborador.innerHTML = 'Novo Fornecedor';
    novoFornecedor.classList.remove('ocultar_popUp');
    img_foto.classList.add('ocultar_popUp');
    f_nome.value = '';
    f_status.value = '';
    f_foto.value = '';
    img_foto.setAttribute('src', '#');
});

btn_fechar.addEventListener('click', (evt) => {
    novoFornecedor.classList.add('ocultar_popUp');
});

btn_pesq.addEventListener('click', (evt) => {
    pesquisa.classList.remove('ocultar_popUp');
    f_pesq.value = '';
    f_pesq.focus();
});

btn_listarContatosForn.addEventListener('click', (evt) => {
    listaContatosForn.classList.remove('ocultar_popUp');
    novoFornecedor.classList.add('ocultar_popUp');
    const mzi = maiorZIndex() + 1;
    listaContatosForn.setAttribute('style', `z-index: ${mzi} !important`);
    dadosGrid_novosContatosForm.innerHTML = '';
    const endpoint = `${servidor}todasPessoasForn`;
    fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                criarLinhaContForn(el);
            });
        });
});

btn_fecharPopUpPesq.addEventListener('click', (evt) => {
    pesquisa.classList.add('ocultar_popUp');
});

btn_fecharPopupListaContatos.addEventListener('click', (evt) => {
    listaContatosForn.classList.add('ocultar_popUp');
});

btn_cancelarPopUp.addEventListener('click', (evt) => {
    novoFornecedor.classList.add('ocultar_popUp');
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
        const endpointPesq = `${servidor}pesquisaForn/${tipo}/${f_pesq.value}`;
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
            texto: 'Digite o Nome ou Id do colaborador',
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
    carregarTodosFornecedores();
});

btn_gravarPopUp.addEventListener('click', (evt) => {
    const dados = {
        n_fornecedor_fornecedor: evt.target.dataset.idfornecedor,
        s_desc_fornecedor: f_nome.value,
        c_status_fornecedor: f_status.value,
        s_logo_fornecedor: img_foto.getAttribute('src')
    }

    const cabecalho = {
        method: 'post',
        body: JSON.stringify(dados),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let endpoint = null;

    if (modoJanela == 'n') {
        endpoint = `${servidor}novoforn`;
    } else {
        endpoint = `${servidor}editarforn`;
    }
    fetch(endpoint, cabecalho)
        .then(res => {
            if (res.status == 200) {
                if (modoJanela == 'n') {
                    const config = {
                        titulo: 'Novo fornecedor gravado',
                        texto: 'fornecedor gravado com sucesso.',
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
                    carregarTodosFornecedores();
                    img_foto.classList.add('ocultar_popUp');
                } else {
                    const config = {
                        titulo: 'Edição bem sucedida',
                        texto: 'Fornecedor editado com sucesso.',
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
                    carregarTodosFornecedores();
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

    //novoFornecedor.classList.add('ocultar_popUp');
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
    const endpoint_colaboradorPorId = `${servidor}dadosforn/${id}`;
    fetch(endpoint_colaboradorPorId)
        .then(res => res.json())
        .then(res => {
            console.log(res);
            btn_gravarPopUp.setAttribute('data-idfornecedor', id)
            f_nome.value = res[0].s_desc_fornecedor;
            f_status.value = res[0].c_status_fornecedor;
            img_foto.src = res[0].s_logo_fornecedor;

            novoFornecedor.classList.remove('ocultar_popUp');
            if (res[0].s_logo_fornecedor == '' || img_foto.src == '#') {
                img_foto.classList.add('ocultar_popUp');
            } else {
                img_foto.classList.remove('ocultar_popUp');
            }
        })

}
