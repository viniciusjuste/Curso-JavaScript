const p_array = document.querySelector("#array")
const btnVerificar = document.querySelector("#btnVerificar")
const resultado = document.querySelector("#resultado")

const elementos_array = [16, 12, 10, 17, 15, 13, 11, 19]
p_array.innerHTML = elementos_array

btnVerificar.addEventListener('click', (evt) => {
    const retorno = elementos_array.some((e, i) => { // o metodo some precisa que pelo menos um resultado seja equivalente ao que eu estou pesquisando
        if (e < 18){
            resultado.innerHTML = 'Array não conforme na posição ' + i
        }
        return e >= 18
    })
    if (retorno){
        resultado.innerHTML = "OK"
    }
    console.log(retorno)
})