class Login {
    static logado = false
    static matLogado = null
    static nomeLogado = null
    static acessoLogado = null
    static endpoint = 'https://442ca741-6778-4824-b927-bb4cf9e5d275-00-3hwznc1psu5ku.janeway.replit.dev/'

    static login = (mat, pas) => {
        this.endpoint += `?matricula=${mat}&senha=${pas}`
        fetch(this.endpoint)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    this.logado = true
                    this.matLogado = mat
                    this.nomeLogado = res.nome
                    this.acessoLogado = res.acesso
                    console.log(res)
                }
                else {
                    console.log('Usuario não encontrado')
                }
            })
    }
}

export { Login }