function soma(...valores){
    let tam = valores.length
    res = 0

    for(let i = 0; i < tam; i++){
        res += valores[i]
    }
    return res
}

console.log(soma(10, 10, 2, 5))