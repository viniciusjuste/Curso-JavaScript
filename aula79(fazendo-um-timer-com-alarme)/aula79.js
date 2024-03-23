const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const alarme = new Audio("som-alarme.mp3");

alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener('click', (evt) => {
ts_atual = Date.now()
ts_alarme = ts_atual + (tmp_alarme.value * 1000)
alarme_ativado = true
const dt_alarme = new Date(ts_alarme)
hora_alarme.innerHTML = 'Hora do alarme:' + dt_alarme.getHours() + ':' + dt_alarme.getMinutes() + ':' + dt_alarme.getSeconds()
})

btn_parar.addEventListener('click', (evt) => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = 'Hora do alarme:'
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
    alarme.pause()
    alarme.currentTime = 0
})


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

    if (alarme_ativado && !alarme_tocando){
        if(data.getTime() >=ts_alarme){
            alarme_tocando = true
            alarme.play()
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio,1000) // é uma função em JavaScript que executa um bloco de código repetidamente, em intervalos de tempo específicos

