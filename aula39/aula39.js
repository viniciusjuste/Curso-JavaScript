const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())

console.log(btn_c[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")
caixa1.children[1].innerHTML = "Teste"

// console.log(caixa1.children[caixa1.children.length - 1])
// console.log(caixa1.lastElementChild)
// console.log(caixa1.children)

// console.log(document.getRootNode()) // sempre que tem um 'cubo' é método
// console.log(btn_c[0].ownerDocument)