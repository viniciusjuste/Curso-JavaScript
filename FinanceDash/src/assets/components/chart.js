import { getStockPrice } from "../api/financeAPI.js";
import { TIME_SERIES_DAILY, TIME_SERIES_MONTHLY, TIME_SERIES_WEEKLY } from "../api/financeAPI.js";

// Função para buscar dados e renderizar gráfico
export async function fetchAndRenderChartDaily(symbol) {
    try {
        const stockData = await TIME_SERIES_DAILY(symbol);
        const timeSeries = stockData["Time Series (Daily)"];

        // Extrair dados para o gráfico
        const labels = Object.keys(timeSeries).slice(0, 30).reverse(); // Apenas os últimos 30 dias
        const closingPrices = labels.map(date => parseFloat(timeSeries[date]["4. close"])).reverse(); // Preços de fechamento

        // Configuração do gráfico
        const ctx = document.getElementById('stockChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Preço de Fechamento',
                    data: closingPrices,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    } catch (error) {
        console.error(error);
    }
}

export async function fetchAndRenderWeeklyChart(symbol, type) {
    const stockData = await TIME_SERIES_WEEKLY(symbol);
    const timeSeries = stockData["Weekly Time Series"];
    
    // Extrair dados para o gráfico
    const labels = Object.keys(timeSeries).reverse(); // Semanas
    const closingPrices = labels.map(date => parseFloat(timeSeries[date]["4. close"])).reverse(); // Preços de fechamento

    // Configuração do gráfico
    const ctx = document.getElementById('weeklyChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: 'Preço de Fechamento Semanal',
                data: closingPrices,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

export async function fetchAndRenderMonthlyChart(symbol, type) {
    try {
        const stockData = await TIME_SERIES_MONTHLY(symbol);
        const timeSeries = stockData["Monthly Time Series"];

        // Extrair dados para o gráfico
        const labels = Object.keys(timeSeries).slice(0, 12).reverse(); // Últimos 12 meses
        const closingPrices = labels.map(date => parseFloat(timeSeries[date]["4. close"])).reverse(); // Preços de fechamento

        // Configuração do gráfico
        const ctx = document.getElementById('monthlyChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: type, // Você pode usar 'line' ou 'bar', dependendo da sua preferência
            data: {
                labels: labels,
                datasets: [{
                    label: 'Preço de Fechamento Mensal',
                    data: closingPrices,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    } catch (error) {
        console.error(error);
    }
}
