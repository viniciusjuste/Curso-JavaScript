import { getStockPrice } from "../api/financeAPI.js";
import { toggleTheme } from "../components/theme.js";
import { TIME_SERIES_DAILY } from "../api/financeAPI.js";
import { fetchAndRenderChartDaily, fetchAndRenderMonthlyChart, fetchAndRenderWeeklyChart } from "../components/chart.js";

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
const p_current_price = document.getElementById('p_current_price');
const p_change = document.getElementById('p_change');
const p_previous_close = document.getElementById('p_previous_close');
const p_latest_day = document.getElementById('p_latest_day');
const timeRange = document.getElementById('timeRange');
const stockInfo = document.getElementById('stock-info');
const typeChart = document.getElementById('typeChart');


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
        currentPrice.innerHTML = `$${parseFloat(stockData['Global Quote']['05. price']).toFixed(2)}`;
        change.innerHTML = `$${parseFloat(stockData['Global Quote']['09. change']).toFixed(2)}`;
        changePercent.innerHTML = `${stockData['Global Quote']['10. change percent']}%`;
        previousClose.innerHTML = `$${parseFloat(stockData['Global Quote']['08. previous close']).toFixed(2)}`;
        openPrice.innerHTML = `$${parseFloat(stockData['Global Quote']['02. open']).toFixed(2)}`;
        high.innerHTML = `$${parseFloat(stockData['Global Quote']['03. high']).toFixed(2)}`;
        low.innerHTML = `$${parseFloat(stockData['Global Quote']['04. low']).toFixed(2)}`;
        volume.innerHTML = `${Number(stockData['Global Quote']['06. volume']).toLocaleString()}`;
        latestDay.innerHTML = stockData['Global Quote']['07. latest trading day'];

        return stockData;
    } catch (error) {
        console.error(error);
        alert('Erro ao buscar dados da empresa. Verifique o símbolo e tente novamente.');
    }
}

async function fetchStockDataDaily(symbol) {
    try {
        const stockData = await TIME_SERIES_DAILY(symbol);

        console.log(stockData);

        stockName.innerHTML = `$${stockData['Meta Data']['02. symbol']}`;

        // Acessa o objeto Time Series (Daily)
        const timeSeries = stockData["Time Series (Daily)"];

        // Pega a data mais recente disponível
        const latestDate = Object.keys(timeSeries)[0];

        openPrice.innerHTML = `$${parseFloat(timeSeries[latestDate]["1. open"]).toFixed(2)}`;
        high.innerHTML = `$${parseFloat(timeSeries[latestDate]["2. high"]).toFixed(2)}`;
        low.innerHTML = `$${parseFloat(timeSeries[latestDate]["3. low"]).toFixed(2)}`;
        volume.innerHTML = `${Number(timeSeries[latestDate]["5. volume"]).toLocaleString()}`;
        p_change.innerHTML = '';
        p_current_price.innerHTML = '';
        p_latest_day.innerHTML = '';
        p_previous_close.innerHTML = '';

        return stockData;
    } catch (error) {
        console.error(error);
        alert('Erro ao buscar dados da empresa. Verifique o símbolo e tente novamente.');
    }
}

searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const symbol = companyInput.value.trim().toUpperCase();
    const type = typeChart.value;

    if (!symbol) {
        alert('Por favor, digite o simbolo da empresa');
        return;
    }

    if (timeRange.value === '0d') {
        await fetchStockData(symbol);
        stockInfo.classList.remove('ocultar');
    } else if (timeRange.value === '1d') {
        await fetchStockDataDaily(symbol);
        stockInfo.classList.remove('ocultar');
    } else if (timeRange.value === '7d') {
        await fetchAndRenderWeeklyChart(symbol, type);
    } else if (timeRange.value === '30d') {
        await fetchAndRenderMonthlyChart(symbol, type);
    }
    companyInput.value = '';
})

const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    toggleTheme();
})


