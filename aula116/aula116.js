const long = document.getElementById('long')
const lati = document.getElementById('lati')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao, ErroLocalizacao)
} 
else {
    console.log('Geolocalização não suportada')
}

function mostrarLocalizacao(pos){
   long.innerHTML = `Longitude: ${pos.coords.longitude}`
   lati.innerHTML = `Latitude: ${pos.coords.latitude}`
}

function ErroLocalizacao(){
    console.log('Erro ao obter a localização')
}
