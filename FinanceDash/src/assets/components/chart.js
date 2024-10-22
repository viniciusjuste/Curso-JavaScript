import { TIME_SERIES_DAILY, TIME_SERIES_MONTHLY, TIME_SERIES_WEEKLY } from "../api/financeAPI.js";

// Função para buscar dados e renderizar gráfico diário
export async function fetchAndRenderChartDaily(symbol) {
    try {
        const stockData = await TIME_SERIES_DAILY(symbol);
        const timeSeries = stockData["Time Series (Daily)"];

        if (!timeSeries) {
            console.error("Dados de séries temporais diárias não encontrados.");
            return;
        }

        // Extrair dados para o gráfico
        const labels = Object.keys(timeSeries).slice(0, 30).reverse(); // Apenas os últimos 30 dias
        const closingPrices = labels.map(date => parseFloat(timeSeries[date]["4. close"])).reverse(); // Preços de fechamento

        // Verificar se o canvas existe
        const ctx = document.getElementById('stockChart');
        if (!ctx) {
            console.error("Elemento com ID 'stockChart' não encontrado.");
            return;
        }

        const chartContext = ctx.getContext('2d');

        // Destruir gráfico anterior se ele já existir
        if (window.myDailyChart) {
            window.myDailyChart.destroy();
        }

        // Configuração do gráfico
        window.myDailyChart = new Chart(chartContext, {
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
        console.error("Erro ao renderizar o gráfico diário:", error);
    }
}

// Função para buscar dados e renderizar gráfico semanal
export async function fetchAndRenderWeeklyChart(symbol, type) {
    try {
        const stockData = await TIME_SERIES_WEEKLY(symbol);
        const timeSeries = stockData["Weekly Time Series"];

        if (!timeSeries) {
            console.error("Dados de séries temporais semanais não encontrados.");
            return;
        }

        // Extrair dados para o gráfico
        const labels = Object.keys(timeSeries).reverse(); // Semanas
        const closingPrices = labels.map(date => parseFloat(timeSeries[date]["4. close"])).reverse(); // Preços de fechamento

        // Verificar se o canvas existe
        const ctx = document.getElementById('weeklyChart');
        if (!ctx) {
            console.error("Elemento com ID 'weeklyChart' não encontrado.");
            return;
        }

        const chartContext = ctx.getContext('2d');

        // Destruir gráfico anterior se ele já existir
        if (window.myWeeklyChart) {
            window.myWeeklyChart.destroy();
        }

        // Configuração do gráfico
        window.myWeeklyChart = new Chart(chartContext, {
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
    } catch (error) {
        console.error("Erro ao renderizar o gráfico semanal:", error);
    }
}

// Função para buscar dados e renderizar gráfico mensal
export async function fetchAndRenderMonthlyChart(symbol, type) {
    try {
        const stockData = await TIME_SERIES_MONTHLY(symbol);
        const timeSeries = stockData["Monthly Time Series"];

        if (!timeSeries) {
            console.error("Dados de séries temporais mensais não encontrados.");
            return;
        }

        // Extrair dados para o gráfico
        const labels = Object.keys(timeSeries).slice(0, 12).reverse(); // Últimos 12 meses
        const closingPrices = labels.map(date => parseFloat(timeSeries[date]["4. close"])).reverse(); // Preços de fechamento

        // Verificar se o canvas existe
        const ctx = document.getElementById('monthlyChart');
        if (!ctx) {
            console.error("Elemento com ID 'monthlyChart' não encontrado.");
            return;
        }

        const chartContext = ctx.getContext('2d');

        // Destruir gráfico anterior se ele já existir
        if (window.myMonthlyChart) {
            window.myMonthlyChart.destroy();
        }

        // Configuração do gráfico
        window.myMonthlyChart = new Chart(chartContext, {
            type: type,
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
        console.error("Erro ao renderizar o gráfico mensal:", error);
    }
}
