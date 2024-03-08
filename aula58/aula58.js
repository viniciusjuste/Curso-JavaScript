class Carro{
    constructor(nome, tipo){
        this.nome = nome
       if (tipo == 1){
        this.tipo = 'Esportivo'
        this.velMax = 300
       } else if (tipo == 2){
        this.tipo = 'Utilitário'
        this.velMax = 100
       } else if (tipo == 3){
        this.tipo = 'Passeio'
        this.velMax = 160
       } else {
        this.tipo = 'Militar'
        this.velMax = 180
       }
    }
    getNome(){
        return this.nome
    }

    getTipo(){
        return this.tipo
    }

    getVelMax(){
        return this.velMax
    }

    setNome(nome){
        this.nome = nome
    }

    setTipo(tipo){
        this.tipo = tipo
    }

    setVelMax(velMax){
        this.velMax = velMax
    }

    info(){
        console.log(`Nome: ${this.getNome()}`)
        console.log(`tipo: ${this.getTipo()}`)
        console.log(`vel max: ${this.getVelMax()}`)
        console.log('--------------------------')
    }
}

let c1 = new Carro('Jetta', 1)
c1.info()