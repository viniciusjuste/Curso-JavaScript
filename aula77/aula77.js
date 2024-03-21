const data = new Date()
const relogio = document.querySelector("#relogio")
// console.log(Date.now()) // Timestamp
const dia_m = data.getDate() < 10? "0" + data.getDate() : data.getDate()
const data_r = dia_m + '/' + data.getMonth() + '/' + data.getFullYear()

console.log(data_r)