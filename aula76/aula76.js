const numero = document.getElementById("numero")
const btn_promessa =document.getElementById("btn_promessa")

btn_promessa.addEventListener('click', (evt) => {
    numero.innerHTML = 'Processando...'
    promessa()
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("ok")
        numero.classList.add("erro")
    })
})

const promessa = () => {
    let promise = new Promise((resolve, reject) => {
        let resultado = true
        let tempo = 3000
        setTimeout(() => {
           if (resultado){
            resolve("Deu tudo certo!")
           } else {
            reject("Deu tudo errado!")
           }
        }, tempo)
    
    })
    return promise
}

numero.innerHTML = "Esperando"