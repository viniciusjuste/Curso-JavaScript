const btn_menu_principal = document.querySelector('#btn_menu_principal');
const menu_principal = document.querySelector('#menu_principal');
const todosMenusPrincipais = [...document.querySelectorAll('.btn_item_menu')];

btn_menu_principal.addEventListener('click', (evt) => {
    menu_principal.classList.toggle('ocultar');
});

todosMenusPrincipais.forEach(e => {
    e.addEventListener('click', (evt) => {
        menu_principal.classList.add('ocultar');
    });
});