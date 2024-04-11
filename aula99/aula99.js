class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new Jogador('Neymar'), new Jogador('Messi'), new Jogador('Cristiano ronaldo'), new Jogador('Haaland'), new Jogador('Neymar'), new Jogador('Toni Kroos')]

let simbolo1 = jogadores[0].id

let simbolos =[]

let s_jogadores = jogadores.filter((j) => {
    return j.nome == 'Neymar'
})

simbolos = s_jogadores.map((el) => {
    return el.id
})

console.log(s_jogadores)
console.log(simbolos)
console.log(jogadores)


/* // Esta é uma forma de remover um elemento de um array.
 jogadores = jogadores.filter((j) => {
     return j.id != simbolo1
 })
 */

