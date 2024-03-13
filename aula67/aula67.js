const nave = function (energia){
    this.energia = energia
    this.disparos = 100
}

const n1 = new nave(100)

nave.prototype.vidas = 3

nave.prototype.disparar = function(){ // o prototype serve para criar propriedade ou função na classe depois dela já criada, consigo criar por aqui
    if (this.disparos > 0){
        this.disparos --
    } else {
        console.log('Você está sem munição')
    } 
}

 n1.disparar() 
 n1.disparar()
 n1.disparar()
 n1.disparar()
 n1.disparar()

console.log(nave)
console.log(n1.vidas)
console.log(n1.disparos)