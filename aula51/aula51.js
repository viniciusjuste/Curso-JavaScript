const valores = [10, 8, 9, 2, 15, 4, 7, 0]
const it_valores = valores[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())
console.log(it_valores.next())