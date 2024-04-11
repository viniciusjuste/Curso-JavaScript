const nome = Symbol('nome')
const numero = Symbol('numero')
const corUniforme = Symbol('corUniforme')

console.log(nome.description)

const jogador = {
    nome: 'j1',
}
jogador[numero] = 10,
jogador[corUniforme] = 'amarelo'

for (const p in jogador) {
    console.log(p)
}

console.log(jogador.nome)
console.log(jogador[numero])
console.log(jogador[corUniforme])