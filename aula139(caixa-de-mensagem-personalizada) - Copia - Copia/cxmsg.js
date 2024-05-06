class CXmsg {
    static cor = '#888'
    static destino = null
    static divmsg = null
    static comando_Sn = null
    static comando_Nn = null
    static tipo = null
    static textos = []

    static mostrar = (config, titulo, texto) => {
        // DIV PRINCIPAL
        this.tipo = config.tipo
        this.textos = config.textos
        this.comando_Sn = () => {config.comando_Sn()}
        this.comando_Nn = () => {config.comando_Nn()}
        this.cor = config.cor
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto
        this.divmsg = document.createElement('div')
        const estilo_divMsg =
            "display: flex;" +
            "justify-content: center;" +
            "align-items: center;" +
            "position: absolute;" +
            "top: 0px;" +
            "left: 0px;" +
            "width: 100%;" +
            "height: 100vh;" +
            "background-color: rgba(0,0,0,0.7);"
        this.divmsg.setAttribute('id', 'divmsg')
        this.divmsg.setAttribute('style', estilo_divMsg)
        this.destino.prepend(this.divmsg)

        // DIV CENTRAL
        const area_caixaMsg = document.createElement('div')
        const estilo_areaCaixaMsg =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "flex-direction: column;" +
            "width: 300px;"
        area_caixaMsg.setAttribute('id', 'area_caixaMsg')
        area_caixaMsg.setAttribute('style', estilo_areaCaixaMsg)
        this.divmsg.appendChild(area_caixaMsg)

        // TITULO
        const titulo_caixaMsg = document.createElement('div')
        const estilo_titulo =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color:" + this.cor + ';' +
            "color: #fff;" +
            "padding: 5px;" +
            "border-radius: 5px 5px 0px 0px;"
        titulo_caixaMsg.setAttribute('style', estilo_titulo)
        titulo_caixaMsg.innerHTML = this.titulo
        area_caixaMsg.appendChild(titulo_caixaMsg)

        // CORPO
        const corpo_caixaMsg = document.createElement('div')
        const estilo_corpo =
            "display: flex;" +
            "justify-content: flex-start;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #eee;" +
            "color: #000;" +
            "padding: 30px 5px;"
        corpo_caixaMsg.setAttribute('style', estilo_corpo)
        corpo_caixaMsg.innerHTML = this.texto
        area_caixaMsg.appendChild(corpo_caixaMsg)

        // RODAPÉ
        const rodape_caixaMsg = document.createElement('div')
        const estilo_rodape =
            "display: flex;" +
            "justify-content: space-around;" +
            "align-items: center;" +
            "width: 100%;" +
            "background-color: #ccc;" +
            "color: #000;" +
            "padding: 5px;" +
            "border-radius: 0px 0px 5px 5px;"
        rodape_caixaMsg.setAttribute('style', estilo_rodape)
        area_caixaMsg.appendChild(rodape_caixaMsg)

        // BOTÃO
        const estilo_btn =
            "background-color:" + this.cor + ";" +
            "color: #fff;" +
            "padding: 10px 50px;" +
            "border-radius: 5px;" +
            "cursor: pointer;" +
            "text-transform: uppercase;"
        if (this.tipo == 'Ok') {
            const btn_Ok = document.createElement('button')
            btn_Ok.setAttribute('style', estilo_btn)
            btn_Ok.innerHTML = 'OK'
            btn_Ok.addEventListener('click', (evt) => {
                this.ocultar()
            })

            rodape_caixaMsg.appendChild(btn_Ok)

        } else if (this.tipo == 'sn') {
            const btn_Sim = document.createElement('button')
            btn_Sim.setAttribute('style', estilo_btn)
            btn_Sim.innerHTML = this.textos[0]
            btn_Sim.addEventListener('click', (evt) => {
                this.comando_Sn()
                this.ocultar()
            })

            rodape_caixaMsg.appendChild(btn_Sim)

            const btn_Nao = document.createElement('button')
            btn_Nao.setAttribute('style', estilo_btn)
            btn_Nao.innerHTML = this.textos[1]
            btn_Nao.addEventListener('click', (evt) => {
                this.comando_Nn()
                this.ocultar()
            })

            rodape_caixaMsg.appendChild(btn_Nao)
        }
    }
    static ocultar = () => {
        this.divmsg.remove()
    }
}

export { CXmsg }