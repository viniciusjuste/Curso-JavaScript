class Login {
    static logado = false
    static matLogado = null
    static nomeLogado = null
    static acessoLogado = null
    static endpoint = 'https://442ca741-6778-4824-b927-bb4cf9e5d275-00-3hwznc1psu5ku.janeway.replit.dev/'
    static estiloCss = null

    static login = (mat, pas) => {

        this.endpoint += `?matricula=${mat}&senha=${pas}`

        this.estiloCss =

            ".fundoLogin { display: flex; justify-content: center; align-items: center; width: 100%; height: 100vh; position: absolute; top: 0px; left: 0px; background-color: #1a1a2e; box-sizing: border-box; }" +
            ".baseLogin { display: flex; justify-content: center; align-items: stretch; width: 50%; box-sizing: inherit; }" +
            ".elementosLogin { display: flex; justify-content: center; align-items: flex-start; width: 50%; background-color: #291e3e; flex-direction: column; padding: 30px; border-radius: 10px 0px 0px 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); box-sizing: inherit; }" +
            ".logoLogin { display: flex; justify-content: center; align-items: center; width: 50%; background-color: #3c2c66; padding: 30px; border-radius: 0px 10px 10px 0px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); box-sizing: inherit; }" +
            ".logoLogin img { width: 70%; }" +
            ".campoLogin { display: flex; justify-content: flex-start; align-items: flex-start; flex-direction: column; box-sizing: inherit; margin-bottom: 20px; }" +
            ".campoLogin label { font-size: 16px; color: #eee; }" +
            ".campoLogin input { padding: 10px; background-color: #483D8B; border-radius: 5px; border: 1px solid #3C3066; color: #eee; }" +
            ".botoeslogin { display: flex; justify-content: space-around; align-items: center; width: 100%; box-sizing: inherit; margin-top: 20px; }" +
            ".botoeslogin button { cursor: pointer; background-color: #8A2BE2; color: #fff; border-radius: 5px; padding: 15px; width: 120px; border: none; transition: background-color 0.3s ease; }" +
            ".botoeslogin button:hover { background-color: #6A1E9C; }"

            const styleEstilo = document.createElement('style');
            styleEstilo.innerHTML = this.estiloCss; 
            styleEstilo.setAttribute('id', 'id_EstiloLogin');
            document.head.appendChild(styleEstilo);
            

        // fetch(this.endpoint)
        //     .then(res => res.json())
        //     .then(res => {
        //         if (res) {
        //             this.logado = true
        //             this.matLogado = mat
        //             this.nomeLogado = res.nome
        //             this.acessoLogado = res.acesso
        //             console.log(res)
        //         }
        //         else {
        //             console.log('Usuario não encontrado')
        //         }
        //     })
    }
}

export { Login }