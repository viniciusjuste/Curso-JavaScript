const idades = [15, 21, 30, 17, 18, 44, 12, 40]

const filtrosMaior18 = (valor) => {
    if (valor >= 18)
        return valor
}

const maior = idades.filter(filtrosMaior18)
//const maior = idades.filter(valor, indice, array)

const menor = idades.filter((valor) => {
    if (valor < 18)
        return valor
})


console.log(idades)
console.log(maior)
console.log(menor)