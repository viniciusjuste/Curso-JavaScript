function* contador(){
    let i = 0
    while(true){
        yield i++
        if (i > 10)
            break  
    }
}

const itc = contador()

for (let c of itc) {
    console.log(c)
}
