const dadosGrid = document.getElementById('dadosGrid');

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