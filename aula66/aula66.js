class Npc {
    static alerta = false
    constructor(energia){
        this.energia = energia
        this.alerta = false
    }

    info = () =>{
        console.log(`Energia : ${this.energia}`)
        console.log(`Alerta : ${(Npc.alerta ? 'sim' : 'Não')}`)
        console.log('--------------------------')
    }

    static alertar = () => {
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()