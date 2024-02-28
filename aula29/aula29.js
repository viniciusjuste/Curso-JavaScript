function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.aluno_anonimo = () => {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)
    }
}
 let aluno1 = new aluno("Vini", 10)

 aluno1.aluno_anonimo()
