const btn_add = document.querySelector('#btn_add');
const res = document.querySelector('.res');

const pessoa = {
    nome: '',
    idade: 0,

    getNome: function() {
        return this.nome;
    },

    setNome: function(nome) {
        this.nome = nome;
    },

    getIdade: function() {
        return this.idade;
    },

    setIdade: function(idade) {
        this.idade = idade;
    }
};

let pessoas = [];

const adicionaRes = () => {
    res.innerHTML = '';
    pessoas.forEach((el) => {
        const div = document.createElement('div');
        div.setAttribute('class', 'res');
        div.innerHTML = `Nome: ${el.getNome()}, Idade: ${el.getIdade()}`;
        res.appendChild(div);
    });
};

btn_add.addEventListener('click', (evt) => {
    const f_nome = document.querySelector('#f_nome');
    const f_idade = document.querySelector('#f_idade');
    const p = Object.create(pessoa); // serve para criar p baseado em pessoa
    p.setNome(f_nome.value);
    p.setIdade(f_idade.value);
    pessoas.push(p);
    f_nome.value = '';
    f_idade.value = '';
    f_nome.focus();
    adicionaRes();
});
