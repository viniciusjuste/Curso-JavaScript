const timer = document.getElementById('timer')
const btn_iniciar = document.getElementById('btn_iniciar')
const btn_parar = document.getElementById('btn_parar')
const btn_zerar = document.getElementById('btn_zerar')
const btn_parcial = document.getElementById('btn_parcial')
const parciaisRegistradas = document.getElementById('parciaisRegistradas')

// Retorna o 'timestamp'.
let tmp_inicial = null
console.log(tmp_inicial)

let intervalo = null

const contador = () => {
    const tmp_atual = Date.now()
    let contagem = tmp_atual - tmp_inicial
    let segundos = Math.floor(contagem / 1000)
    timer.innerHTML = converter(segundos)
}

const converter = (seg) => {
    const hora = Math.floor(seg / 3600)
    const resto = seg % 3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const formatacao = (hora < 10 ? '0'+hora : hora) +':'+(minuto < 10 ? '0'+minuto : minuto)+':'+(segundo < 10 ? '0'+segundo : segundo)
    return formatacao
}

btn_iniciar.addEventListener('click', (evt) => {
    tmp_inicial = Date.now()
    intervalo = setInterval(contador, 1000)
})

btn_parar.addEventListener('click', (evt) => {
     clearInterval(intervalo)
})

btn_zerar.addEventListener('click', (evt) => {
    tmp_inicial = Date.now()
    timer.innerHTML = '00:00:00'
    clearInterval(intervalo)
    parciaisRegistradas.innerHTML = ''
})

btn_parcial.addEventListener('click', (evt) => {
    let parcial = timer.innerHTML
    parciaisRegistradas.innerHTML += parcial + '</br>'
})