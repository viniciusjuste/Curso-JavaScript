const objetos = document.getElementById('objetos')

const computador = {
    cpu: 'i9',
    ram: '64gb',
    hd: '2tb',
    info: function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)
    }
}
computador['monitor'] = '22pol' // Adiciona propriedade.
computador.placaVideo = 'rtx' // Adiciona propriedade.

console.log(computador.cpu) // Imprime somente a propriedade desejada.
console.log(computador['monitor']) // Imprime somente a propriedade desejada.

const computadores = [
    {
        cpu: 'i9',
        ram: '64gb',
        hd: '2tb'
    },

    {
        cpu: 'i7',
        ram: '32gb',
        hd: '2tb'
    }, 
    
    {
        cpu: 'i5',
        ram: '16gb',
        hd: '1tb'
    }
]

computadores.forEach((c) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'computador')
    div.innerHTML = c.cpu + '<br/>' + c.ram + '</br>' + c.hd
    objetos.appendChild(div)
})

// computador.info()
// objetos.innerHTML = JSON.stringify(computadores)