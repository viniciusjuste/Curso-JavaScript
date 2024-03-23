const mat = document.getElementById("mat")

 aleatorio = () => {
    const num = Math.random() * 100
    mat.innerHTML =  Math.pow(2, 2)
}

// setInterval(aleatorio, 3000)

aleatorio()