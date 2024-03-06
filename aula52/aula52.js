const caixa = document.querySelector("#caixa")

let cores = ["Azul", "Verde", "Vermelho",["claro", "Escuro", "Médio"]]
let cursos = ["HTML", "CSS", 'JavaScript', cores]

// cursos[0] = 2023

console.log(cursos[3][3][2])

// console.log(cursos[3][1]) // o primeiro indice é do array cursos e o segundo é do array que tá dentro dele

// cursos.push('C++') // push adiciona no fim do array

// cursos.push('Python')

// cursos.pop() // pop remove o último elemento do array

// cursos.unshift('Java') // unshift adiciona no inicio do array

// cursos.shift() // shift remove do inicio do array

cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})