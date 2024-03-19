const teclasNum = [...document.querySelectorAll(".num")] 
const teclasOp =  [...document.querySelectorAll(".op")]
const teclasRes = document.querySelector(".res")
const display = document.querySelector(".display")
const ton = document.getElementById("ton")
const tlimpar = document.getElementById("tlimpar")
const tresultado = document.querySelector("#tresultado")

let sinal = false
let decimal = false;

teclasNum.forEach((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false;
        decimal = false
        if (display.innerHTML === '0' && evt.target.innerHTML !== ',') {
            display.innerHTML = '';
        }

        if (evt.target.innerHTML === ',' && decimal) {
            return; // Se já houver uma vírgula, não adicione outra
        }

        if (evt.target.innerHTML === ',') {
            decimal = true;
        }

        display.innerHTML += evt.target.innerHTML;
    });
});



teclasOp.forEach((el) => {
    el.addEventListener('click', (evt) => {
        if (!sinal){
            sinal = true

            if (display.innerHTML == '0'){
                display.innerHTML = ''
            }

            if (evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            } else {
                display.innerHTML += evt.target.innerHTML
            }
        }
    })
})

tlimpar.addEventListener('click', (evt) => {
    sinal = false
    let decimal = false
    display.innerHTML = '0'
})

tresultado.addEventListener('click', (evt) => {
    decimal =  false
    sinal = false

    const res = eval(display.innerHTML)
    display.innerHTML = res
})
