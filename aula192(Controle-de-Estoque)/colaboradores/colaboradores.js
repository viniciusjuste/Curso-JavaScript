const dadosGrid = document.getElementById('dadosGrid');
const btn_add = document.getElementById('btn_add');
const novoColaborador = document.getElementById('novoColaborador');
const btn_fechar = document.getElementById('btn_fechar');
const btn_gravarPopUp = document.getElementById('btn_gravarPopUp');
const btn_cancelarPopUp = document.getElementById('btn_cancelarPopUp');
const f_tipoColab = document.getElementById('f_tipoColab');

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
    novoColaborador.classList.remove('ocultar_popUp');
});

btn_fechar.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultar_popUp');
});

btn_cancelarPopUp.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultar_popUp');
});

btn_gravarPopUp.addEventListener('click', (evt) => {
    novoColaborador.classList.add('ocultar_popUp');
});