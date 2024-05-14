const configDataGridView = {
    endpoint: 'produtos.json',
    idDestino: 'dgv_dados'
}

const datagridView = (configDataGridView) => {
    const dgv_dados = document.getElementById(configDataGridView.idDestino)
    fetch(configDataGridView.endpoint)
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                const dgv_linha = document.createElement('div')
                dgv_linha.setAttribute('class', 'dgv_linha')

                const c1 = document.createElement('div')
                c1.setAttribute('class', 'c1')
                c1.innerHTML = el.id
                dgv_linha.appendChild(c1)

                const c2 = document.createElement('div')
                c2.setAttribute('class', 'c2')
                c2.innerHTML = el.produto
                dgv_linha.appendChild(c2)

                const c3 = document.createElement('div')
                c3.setAttribute('class', 'c3')
                c3.innerHTML = el.marca
                dgv_linha.appendChild(c3)

                const c4 = document.createElement('div')
                c4.setAttribute('class', 'c4')
                c4.innerHTML = el.modelo
                dgv_linha.appendChild(c4)

                const c5 = document.createElement('div')
                c5.setAttribute('class', 'c5')
                c5.innerHTML = 'D E V'
                dgv_linha.appendChild(c5)
                dgv_dados.appendChild(dgv_linha)

            })
            console.log(res)
        })
}

datagridView(configDataGridView)

