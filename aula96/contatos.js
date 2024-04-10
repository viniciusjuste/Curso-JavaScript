import { contatos } from "./BancoContatos.js";

let contato = {
    gettodosContatos: function(){
        return contatos
    },

    getContato: function(i_contatos){
        return contatos[i_contatos]
    },

    addContatos: function(novoContato, destinoDOM){
        contatos.push(novoContato)

        const div = document.createElement('div')
        div.setAttribute('class', 'contato')

        const p_nome = document.createElement('p')
        p_nome.innerHTML = novoContato.nome

        const p_telefone = document.createElement('p')
        p_telefone.innerHTML = novoContato.telefone

        const p_email = document.createElement('p')
        p_email.innerHTML = novoContato.email

        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)

        destinoDOM.appendChild(div)
    }
}

export default contato