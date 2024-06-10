const endpoint_todosColaboradores = `http://127.0.0.1:1880/todosusuarios`;
fetch(endpoint_todosColaboradores)
    .then(res => res.json())
    .then(res => {
        console.log(res);
    });