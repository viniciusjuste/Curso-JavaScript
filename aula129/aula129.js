const timer = document.getElementById('timer')

// Retorna o 'timestamp'.
const tmp_inicial = Date.now()
console.log(tmp_inicial)

const contador = () => {
    const tmp_atual = Date.now()
    let contagem = tmp_atual - tmp_inicial
    let segundos = Math.floor((tmp_atual - tmp_inicial) / 1000)
    console.log(segundos)
}

setInterval(contador, 1000)

