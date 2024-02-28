const cursosTodos = [...document.getElementsByClassName("curso")]
const c1 = [...document.getElementsByClassName("c1")]
const c2 = [...document.getElementsByClassName("c2")]

console.log(cursosTodos)
console.log(c1)
console.log(c2)

c1.map((e)=>{
    e.classList.add("destaque")
})