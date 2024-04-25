const endpoint = 'https://bc7370db-d875-4ca2-a528-208ca0b3147f-00-3b0rzochzdit0.riker.replit.dev/'

fetch(endpoint)
.then(response => response.json())
.then(dados => {
    console.log(dados)
})

