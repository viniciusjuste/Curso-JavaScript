const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "Javascript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 100)
console.log(mapa)

mapa.delete(1)

let pes = 10
let res = ""
if (mapa.has(pes)){
    res = caixa.innerHTML = "A chave existe na coleção com o valor " + mapa.get(pes)
} else {
    res = caixa.innerHTML = "A chave não existe na coleção"
}
res += "</br> o tamanho da coleção é " + mapa.size

caixa.innerHTML = 

mapa.forEach((el) => {
    console.log(el)
})
