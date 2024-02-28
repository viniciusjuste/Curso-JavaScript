// Função anônima
/*const f = function(...valores){
   res = 0
   for (v of valores) {
        res += v
   }
    return res
}

console.log(f(10, 20, 30, 40, 50))
*/

// Função anônima com construtor

const f = new Function("n1", "n2", "return n1 + n2")
console.log(f(10, 40))