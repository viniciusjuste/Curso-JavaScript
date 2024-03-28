const url = document.getElementById('url')
const btn_url = document.getElementById('btn_url')

btn_url.addEventListener('click', (evt) => {

   // window.location.replace('https://www.google.com.br') // Deleta a URL corrente do histórico.
   // window.location.assign('https://www.google.com.br') // Não deleta a URL corrente do histórico.
   // window.location.reload() // Recarrega a página.
   // window.history.forward() // Avança para o próximo item do histórico.
   // window.history.back() // Retorna para o item anterior do histórico.
   // window.history.go(1)
   
   window.location = url.value // redireciona para a URL que for passada.
})

