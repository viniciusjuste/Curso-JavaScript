const soma = (...valores) => {
    const somar = val => {
        let res = 0
        for (const v of val) {
            res += v
        }
        return res
    }
    return somar(valores)
}

console.log(soma(10,20))