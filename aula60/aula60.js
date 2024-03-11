const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

function Pessoa(nome, idade){
   
        this.nome = nome,
        this.idade = idade,
     
    this.getNome = function(){
        return this.nome
    },

    this.getIdade = function(){
        return this.idade
    },

    this.setNome = function(nome){
        this.nome = nome
    },

    this.setIdade = function(tipo){
        this.idade = this.idade
    },

    this.info = function(){
        console.log(`Nome: ${this.getNome()}`)
        console.log(`tipo: ${this.getIdade()}`)
        console.log('--------------------------')
    }
}
let Pessoas = []

const addPessoas = () =>{
    res.innerHTML = ''
    Pessoas.map((el) => {
        const div = document.createElement("div")
        div.setAttribute('class', 'pessoa')
        div.innerHTML = `Nome: ${el.getNome()}, idade: ${el.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click', (evt) => {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    Pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoas()
})

console.log(Pessoas)