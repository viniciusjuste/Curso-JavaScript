const caixa = document.querySelector("#caixa")

let musica = new Set(['musica1', 'musica boa', 'musica10'])

musica.add("musica muito legal")
musica.add('musica10')
musica.add('musica1')

musica.delete('musica1')
// musica.clear()

console.log(musica)

// set não permite entradas duplicadas

musica.forEach((el) => {
    caixa.innerHTML += el + "</br>"
})

for (const m of musica) {
    caixa.innerHTML += m + "</br>"
}