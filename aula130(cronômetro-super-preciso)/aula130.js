const timer = document.getElementById('timer')

// Retorna o 'timestamp'.
const tmp_inicial = Date.now()
console.log(tmp_inicial)

const contador = () => {
    const tmp_atual = Date.now()
    let contagem = tmp_atual - tmp_inicial
    let segundos = Math.floor((tmp_atual - tmp_inicial) / 1000)
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

setInterval(contador, 1000)

