import { getStockPrice } from "../api/financeAPI.js";
import { toggleTheme } from "../components/theme.js";
const companyInput = document.getElementById('companyInput');
const searchBtn = document.getElementById('searchBtn');

const stockName = document.getElementById('stock-name');
const currentPrice = document.getElementById('current-price');
const change = document.getElementById('change');
const previousClose = document.getElementById('previous-close');
const high = document.getElementById('high');
const low = document.getElementById('low');
const volume = document.getElementById('volume');
const latestDay = document.getElementById('latest-day');
const openPrice = document.getElementById('open-price');
const changePercent = document.getElementById('change-percent');
const themeImg = document.getElementById('themeImg');

window.onload = () => {
    const body = document.body;
    const themeStyle = document.getElementById('themeStyle');
    const savedTheme = localStorage.getItem('theme');
    const themeImg = document.getElementById('themeImg');

    if (savedTheme) {
        body.classList.add(savedTheme);
        themeStyle.setAttribute('href', savedTheme === 'dark-theme' ? '../css/dark-theme.css' : '../css/light-theme.css');

        // Atualiza a imagem do botão de tema
        if (savedTheme === 'dark-theme') {
            themeImg.setAttribute('src', '../img/dark_mode.svg');
            themeImg.setAttribute('alt', 'dark-theme');
        } else {
            themeImg.setAttribute('src', '../img/light_mode.svg');
            themeImg.setAttribute('alt', 'light-theme');
        }
    } else {
        body.classList.add('light-theme'); // Define o tema padrão se não houver tema salvo
        themeStyle.setAttribute('href', '../css/light-theme.css');
        themeImg.setAttribute('src', '../img/light_mode.svg'); // Define a imagem padrão
        themeImg.setAttribute('alt', 'light-theme');
    }
};

async function fetchStockData(symbol) {
    try {
        const stockData = await getStockPrice(symbol);

        console.log(stockData);

        stockName.innerHTML = `$${stockData['Global Quote']['01. symbol']}`;
        currentPrice.innerHTML = `$${stockData['Global Quote']['05. price']}`;
        change.innerHTML = `$${stockData['Global Quote']['09. change']}`;
        changePercent.innerHTML = `${stockData['Global Quote']['10. change percent']}%`;
        previousClose.innerHTML = `$${stockData['Global Quote']['08. previous close']}`;
        openPrice.innerHTML = `$${stockData['Global Quote']['02. open']}`;
        high.innerHTML = `$${stockData['Global Quote']['03. high']}`;
        low.innerHTML = `$${stockData['Global Quote']['04. low']}`;
        volume.innerHTML = stockData['Global Quote']['06. volume'];
        latestDay.innerHTML = stockData['Global Quote']['07. latest trading day'];

        return stockData;
    } catch (error) {
        console.error(error);
    }
}

searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const symbol = companyInput.value;

    if (!symbol) {
        alert('Por favor, digite o simbolo da empresa');
        return;
    }
    fetchStockData(symbol);
})

const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    toggleTheme();
})

// Global Quote
// :
// 01.symbol
// :
// "AAPL"
// 02.open
// :
// "233.6100"
// 03.high
// :
// "237.4900"
// 04.low
// :
// "232.3700"
// 05.price
// :
// "233.8500"
// 06.volume
// :
// "64751367"
// 07.latest trading day
// :
// "2024-10-15"
// 08. previous close
// :
// "231.3000"
// 09. change
// :
// "2.5500"
// 10. change percent
// :
// "1.1025%"