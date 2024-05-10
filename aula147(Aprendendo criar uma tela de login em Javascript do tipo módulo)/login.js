class Login {
    static logado = false
    static matLogado = null
    static nomeLogado = null
    static acessoLogado = null
    static endpoint = 'https://442ca741-6778-4824-b927-bb4cf9e5d275-00-3hwznc1psu5ku.janeway.replit.dev/'
    static estiloCss = null
    static config = {
        cor: '#fff',
        img: 'imagens/logo.png'
    }

    static login(config = null) {
        if (config != null) {
            this.config = config
        }
       

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
            `.botoeslogin button { cursor: pointer; background-color: #8A2BE2; color: ${this.config.cor}; border-radius: 5px; padding: 15px; width: 120px; border: none; transition: background-color 0.3s ease; }` +
            ".botoeslogin button:hover { background-color: #6A1E9C; }"

        const styleEstilo = document.createElement('style');
        styleEstilo.innerHTML = this.estiloCss;
        styleEstilo.setAttribute('id', 'id_EstiloLogin');
        document.head.appendChild(styleEstilo);

        // Criando o elemento fundoLogin
        const fundoLogin = document.createElement('div');
        fundoLogin.setAttribute('id', 'fundoLogin');
        fundoLogin.classList.add('fundoLogin');

        // Criando o elemento baseLogin
        const baseLogin = document.createElement('div');
        baseLogin.setAttribute('id', 'baseLogin');
        baseLogin.classList.add('baseLogin');

        // Criando o elemento elementosLogin
        const elementosLogin = document.createElement('div');
        elementosLogin.setAttribute('id', 'elementosLogin');
        elementosLogin.classList.add('elementosLogin');

        // Criando os campos de login
        const campoUsername = document.createElement('div');
        campoUsername.classList.add('campoLogin');
        campoUsername.innerHTML = `
    <label>Username</label>
    <input type="text" name="f_username" id="f_username">
`;

        const campoSenha = document.createElement('div');
        campoSenha.classList.add('campoLogin');
        campoSenha.innerHTML = `
    <label>Senha</label>
    <input type="password" name="f_senha" id="f_senha">
`;

        // Criando os botões de login
        const botoesLogin = document.createElement('div');
        botoesLogin.classList.add('botoeslogin');
        botoesLogin.innerHTML = `
    <button id="btn_login">Login</button>
    <button id="btn_cancelar">Cancelar</button>
`;

        // Adicionando os campos e botões dentro do elemento elementosLogin
        elementosLogin.appendChild(campoUsername);
        elementosLogin.appendChild(campoSenha);
        elementosLogin.appendChild(botoesLogin);

        // Criando o elemento logoLogin
        const logoLogin = document.createElement('div');
        logoLogin.setAttribute('id', 'logoLogin');
        logoLogin.classList.add('logoLogin');
        logoLogin.innerHTML = `
    <img src="imagens/logo.png" alt="Logo" title="CFB cursos">
`;

        // Adicionando elementos dentro do baseLogin
        baseLogin.appendChild(elementosLogin);
        baseLogin.appendChild(logoLogin);

        // Adicionando o baseLogin dentro do fundoLogin
        fundoLogin.appendChild(baseLogin);

        // Adicionando o fundoLogin ao documento
        document.body.appendChild(fundoLogin);

        // Adicionando o evento de clique ao botão de cancelar
        document.getElementById('btn_cancelar').addEventListener('click', () => {
            Login.fechar();
        });

        document.getElementById('btn_login').addEventListener('click', () => {
           if(this.verificarLogin()){
            this.fechar()
           }
           else{

           }
        });

        // fetch(endpoint)
        //     .then(res => res.json())
        //     .then(res => {
        //         if (res) {
        //             this.logado = true
        //             this.matLogado = mat
        //             this.nome
    }

    static fechar() {
        const fundoLogin = document.getElementById('fundoLogin');
        const id_EstiloLogin = document.getElementById('id_EstiloLogin');
        fundoLogin.remove();
        id_EstiloLogin.remove();
    }

    static verificarLogin = () => {
        const mat = document.getElementById('f_username').value
        const pas = document.getElementById('f_senha').value
        if (mat == '123' && pas == '321') {
            return true
        }
        else {
            return false
        }

    }
}

export { Login };
