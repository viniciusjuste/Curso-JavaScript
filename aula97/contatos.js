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
        destinoDOM.innerHTML = ''

        contatos.forEach((c) => {
        
        const div = document.createElement('div')
        div.setAttribute('class', 'contato')

        const p_nome = document.createElement('p')
        p_nome.innerHTML = c.nome

        const p_telefone = document.createElement('p')
        p_telefone.innerHTML = c.telefone

        const p_email = document.createElement('p')
        p_email.innerHTML = c.email

        div.appendChild(p_nome)
        div.appendChild(p_telefone)
        div.appendChild(p_email)

        destinoDOM.appendChild(div)
        })
        
    }
}

export default contato