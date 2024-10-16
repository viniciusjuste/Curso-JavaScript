const API_KEY = 'AX5PYG1VGJIJ8KO5';
const BASE_URL = 'https://www.alphavantage.co/query';

export async function getStockPrice(symbol) {
    try {
        const url = `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}