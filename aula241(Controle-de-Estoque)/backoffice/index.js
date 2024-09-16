const btn_menu_principal = document.querySelector('#btn_menu_principal');
const menu_principal = document.querySelector('#menu_principal');
const todosMenusPrincipais = [...document.querySelectorAll('.btn_item_menu')];

const endpoint_config = `../config.txt`;
fetch(endpoint_config)
.then(res => res.json())
.then(res => {
    console.log(res);
    sessionStorage.setItem("servidor_nodered", res.servidor_nodered);
    sessionStorage.setItem("versao", res.versao);
})

btn_menu_principal.addEventListener('click', (evt) => {
    menu_principal.classList.toggle('ocultar');
});

todosMenusPrincipais.forEach(e => {
    e.addEventListener('click', (evt) => {
        menu_principal.classList.add('ocultar');
    });
});