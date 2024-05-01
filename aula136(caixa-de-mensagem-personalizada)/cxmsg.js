class CXmsg{
    titulo = null
    texto = null
    cor = null 
    destino = null 
    divmsg = null

    constructor(config){
    this.titulo = config.titulo
    this.texto = config.texto
    this.cor = config.cor
    this.destino = document.body
    }

    mostrar = () => {
        // DIV PRINCIPAL
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
    }
    ocultar = () => {
        
    }
}