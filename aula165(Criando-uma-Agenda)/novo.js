const enpoint = 'http://127.0.0.1:1880/contatos'
fetch(enpoint)
.then(res => res.json())
.then(res => {
    console.log(res)
})