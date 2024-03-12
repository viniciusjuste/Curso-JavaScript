class Carro {
    constructor(nome, portas) {
        this.nome = nome;
        this.portas = portas;
        this.ligado = false;
        this.velMax = 200;
        this.cor = undefined;
    }

    ligar() {
        this.ligado = true;
    }

    desligar() {
        this.ligado = false;
    }

    setCor(cor) {
        this.cor = cor;
    }
}

class Militar extends Carro {
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas);
        this.blindagem = blindagem;
        this.municao = municao;
        this.cor = 'Azul';
    }

    atirar() {
        if (this.municao > 0) {
            this.municao--;
        }
    }
}

const f_tipoMilitar = document.querySelector('#f_tipoMilitar');
const f_tipoNormal = document.querySelector('#f_tipoNormal');
const f_blindagem = document.querySelector('#f_blindagem');
const f_municao = document.querySelector('#f_municao');
const carros = document.querySelector('#carros');
const btn_addCarro = document.querySelector('#btn_addCarro');
const f_nome = document.querySelector('#f_nome');
const f_portas = document.querySelector('#f_portas');

let a_carros = [];

const removerCarro = (quem) => {
    a_carros = a_carros.filter((el) => {
        return el.nome != quem;
    });
};

const gerenciarCarros = () => {
    carros.innerHTML = '';
    a_carros.forEach((c) => {
        const btn = document.createElement('button');
        const div = document.createElement('div');
        div.setAttribute('class', 'carro');
        btn.addEventListener('click', (evt) => {
            const quemRemover = evt.target.parentNode.dataset.nome;
            removerCarro(quemRemover);
            gerenciarCarros();
        });
        div.setAttribute('data-nome', c.nome);
        div.innerHTML = `Nome: ${c.nome} <br/> Portas: ${c.portas} <br/> Blindagem: ${c.blindagem} <br/> Munição: ${c.municao}`;
        btn.innerHTML = 'Remover';
        carros.appendChild(div);
        div.appendChild(btn);
    });
};

btn_addCarro.addEventListener('click', (evt) => {
    if (f_tipoNormal.checked) {
        const c = new Carro(f_nome.value, f_portas.value);
        a_carros.push(c);
    } else {
        const c = new Militar(f_nome.value, f_portas.value, f_blindagem.value, f_municao.value);
        a_carros.push(c);
    }
    gerenciarCarros();
});

const c1 = new Carro('Golf', 4);
const c2 = new Militar('Anfibio', 1, 100, 100);

c1.ligar();
c1.setCor('Branco');

c2.ligar();
c2.setCor('Verde');
c2.atirar();

console.log(`Nome: ${c1.nome}`);
console.log(`Quantidade de portas: ${c1.portas}`);
console.log(`Está ligado ? ${(c1.ligado ? 'Sim' : 'Não')}`);
console.log(`Velocidade Máxima: ${c1.velMax}`);
console.log(`Cor: ${c1.cor}`);
console.log('--------------------------------------------');

console.log(`Nome: ${c2.nome}`);
console.log(`Quantidade de portas: ${c2.portas}`);
console.log(`Está ligado ? ${(c2.ligado ? 'Sim' : 'Não')}`);
console.log(`Velocidade Máxima: ${c2.velMax}`);
console.log(`Cor: ${c2.cor}`);
console.log(`Blindagem: ${c2.blindagem}`);
console.log(`Quantidade de munição: ${c2.municao}`);
console.log('--------------------------------------------');
