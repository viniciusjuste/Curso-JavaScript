const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for('Bruno')
const s4 = Symbol.for('vinicius')

console.log(Symbol.keyFor(s3))
console.log(Symbol.keyFor(s4))