const configDataGridView = {
    endpoint: 'produtos.json',
    idDestino: 'dgv_dados'
}

const datagridView = (configDataGridView) => {
    const dgv_dados = document.getElementById(configDataGridView.idDestino)
    dgv_dados.innerHTML = ''
    fetch(configDataGridView.endpoint)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const dgv_linha = document.createElement('div')
                dgv_linha.setAttribute('class', 'dgv_linha')

                const c1 = document.createElement('div')
                c1.setAttribute('class', 'coluna c1')
                c1.innerHTML = el.id
                dgv_linha.appendChild(c1)

                const c2 = document.createElement('div')
                c2.setAttribute('class', 'coluna c2')
                c2.innerHTML = el.produto
                dgv_linha.appendChild(c2)

                const c3 = document.createElement('div')
                c3.setAttribute('class', 'coluna c3')
                c3.innerHTML = el.marca
                dgv_linha.appendChild(c3)

                const c4 = document.createElement('div')
                c4.setAttribute('class', 'coluna c4')
                c4.innerHTML = el.modelo
                dgv_linha.appendChild(c4)

                const c5 = document.createElement('div')
                c5.setAttribute('class', 'coluna c5')
                dgv_linha.appendChild(c5)
            

                const imgDelete = document.createElement('img')
                imgDelete.setAttribute('class', 'dgv_icone')
                imgDelete.setAttribute('src', 'icons/icon-delete.svg')
                c5.appendChild(imgDelete)

                const imgEdit = document.createElement('img')
                imgEdit.setAttribute('class', 'dgv_icone')
                imgEdit.setAttribute('src', 'icons/icon-edit.svg')
                c5.appendChild(imgEdit)

                const imgView = document.createElement('img')
                imgView.setAttribute('class', 'dgv_icone')
                imgView.setAttribute('src', 'icons/icon-view.svg')
                c5.appendChild(imgView)
               
                dgv_dados.appendChild(dgv_linha)
            })
            console.log(res)
        })
}

datagridView(configDataGridView)

// configurei o node red