const configDataGridView = () => {
    const endpoint = 'produtos.json'
}

const datagridView = (configDataGridView) => {
    fetch(configDataGridView.endpoint)
        .then(res => res.json())
        .then(res => {
            console.log(res)
        })
}