const tmp = document.getElementById('tmp')
const nvl = document.getElementById('nvl')
const pr = document.getElementById('pr')

let dados = {
    _temperatura: 0,
    _pressao: 0,
    _nivel: 0,
    set valores(val){
        this._temperatura = val.temperatura
        this._pressao = val.pressao
        this._nivel = val.nivel
        tmp.innerHTML = this._temperatura
        nvl.innerHTML = this._nivel
        pr.innerHTML = this._pressao
    },

    get valores(){
        return [this._temperatura, this._nivel, this._pressao]
    }
}

const buscarDados = () => {
    const endpoint = 'https://bc7370db-d875-4ca2-a528-208ca0b3147f-00-3b0rzochzdit0.riker.replit.dev/'

    fetch(endpoint)
        .then(response => response.json())
        .then(dadosResponse => {
            dados.valores = dadosResponse
        })

}

let intervalo = setInterval(buscarDados, 1000)
