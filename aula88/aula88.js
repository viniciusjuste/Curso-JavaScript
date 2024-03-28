const btn_alert  = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click', (evt) => {
    alert("Olá, como você está ?")
})

btn_confirm.addEventListener('click', (evt) => {
   const retorno = confirm('Você está aprendendo muito ?')

   if (retorno){
    console.log('Botão OK pressionado')
   } else {
    console.log('Botão Cancelar pressionado')
   }
})

btn_prompt.addEventListener('click', (evt) => {
    const nome = prompt('digite seu nome') // Consigo interceptar o que foi digitado.
    if (nome == null){
        console.log('Botão Cancelar pressionado')
    } else{
        console.log('Nome: ' + nome)
    }
    
})