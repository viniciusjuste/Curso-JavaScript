const configDataGridView = {
    endpoint: 'http://127.0.0.1:1880/produtos',
    idDestino: 'dgv_dados'
}

const datagridView = (configDataGridView) => {
    const dgv_dados = document.getElementById(configDataGridView.idDestino)
    dgv_dados.innerHTML = ''
    fetch(configDataGridView.endpoint)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            res.forEach(el => {
                const dgv_linha = document.createElement('div')
                dgv_linha.setAttribute('class', 'dgv_linha')

                const c1 = document.createElement('div')
                c1.setAttribute('class', 'coluna c1')
                c1.innerHTML = el.n_id_produto
                dgv_linha.appendChild(c1)

                const c2 = document.createElement('div')
                c2.setAttribute('class', 'coluna c2')
                c2.innerHTML = el.s_nome_produto
                dgv_linha.appendChild(c2)

                const c3 = document.createElement('div')
                c3.setAttribute('class', 'coluna c3')
                c3.innerHTML = el.s_marca_produto
                dgv_linha.appendChild(c3)

                const c4 = document.createElement('div')
                c4.setAttribute('class', 'coluna c4')
                c4.innerHTML = el.s_modelo_produto
                dgv_linha.appendChild(c4)

                const c5 = document.createElement('div')
                c5.setAttribute('class', 'coluna c5')
                dgv_linha.appendChild(c5)


                const imgDelete = document.createElement('img')
                imgDelete.setAttribute('class', 'dgv_icone')
                imgDelete.setAttribute('src', 'icons/icon-delete.svg')

                // Excluir um produto quando eu clicar no icone
                imgDelete.addEventListener('click', (evt) => {
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                    const linha = evt.target.parentNode.parentNode
                    const endpoint = `http://127.0.0.1:1880/removeproduto/${id}`
                    fetch(endpoint)
                        .then(res => {
                            if (res.status == 200) {
                                linha.remove()
                            }
                        })
                    console.log(evt.target.parentNode.parentNode.firstChild.innerHTML)
                })
                c5.appendChild(imgDelete)

                const imgEdit = document.createElement('img')
                imgEdit.setAttribute('class', 'dgv_icone')
                imgEdit.setAttribute('src', 'icons/icon-edit.svg')
                c5.appendChild(imgEdit)

                const imgView = document.createElement('img')
                imgView.setAttribute('class', 'dgv_icone')
                imgView.setAttribute('src', 'icons/icon-view.svg')

                // Vizualizar um produto quando eu clicar no icone
                imgView.addEventListener('click', (evt) => {
                    const janelaView = document.querySelector('.janelaView').classList.remove('ocultar')
                    const id = evt.target.parentNode.parentNode.firstChild.innerHTML
                    const endpoint = `http://127.0.0.1:1880/produtos/${id}`
                    fetch(endpoint)
                        .then(res => res.json())
                        .then(res => {
                            console.log(res)
                            document.getElementById('f_id').value = res[0].n_id_produto
                            document.getElementById('f_produto').value = res[0].s_nome_produto
                            document.getElementById('f_marca').value = res[0].s_marca_produto
                            document.getElementById('f_modelo').value = res[0].s_modelo_produto
                        })
                })
                c5.appendChild(imgView)

                dgv_dados.appendChild(dgv_linha)
            })
            console.log(res)
        })
}

datagridView(configDataGridView)

document.getElementById('btn_ok').addEventListener('click', (evt) => {
    document.querySelector('.janelaView').classList.add('ocultar')
})