const div_relogio = document.getElementById("relogio")
const som_alarme = document.getElementById("som_alarme")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")


const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora<10? '0' + hora : hora

    let minutos = data.getMinutes()
    minutos = minutos<10? '0' + minutos : minutos

    let segundos = data.getSeconds()
    segundos = segundos<10? '0' + segundos : segundos
    const hora_completa = hora + ':' + minutos + ':' + segundos
    div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio,1000) // é uma função em JavaScript que executa um bloco de código repetidamente, em intervalos de tempo específicos

