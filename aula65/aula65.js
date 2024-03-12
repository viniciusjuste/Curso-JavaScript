const pessoa = {
    nome: 'Bruno',
    canal: 'CFB Cursos',
    curso: 'JavaScript',
    aula:{
        aula01: 'Introdução',
        aula02: 'Variáveis',
        aula03: 'Condicionais'
    }
}

const s_json = JSON.stringify(pessoa) // transforma objeto literal em JSON
const Pessoa_json = JSON.parse(s_json) // transforma JSON em objeto literal

console.log(pessoa)
console.log(s_json)
console.log(Pessoa_json)