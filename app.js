// main app file - handles the weather app
import { getWeather } from './weather.js';
import { saveToHistory, loadHistory } from './history.js';

// get elements from the page
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const historyList = document.getElementById('historyList');

// load history when page loads
loadHistory(historyList);

// add click event to search button
searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
        try {
            const weather = await getWeather(city);
            displayWeather(weather);
            saveToHistory(city);
            loadHistory(historyList);
        } catch (error) {
            weatherInfo.innerHTML = '<p>Error getting weather data. Try again.</p>';
        }
    }
});

// also search when pressing enter
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// show weather info on the page
function displayWeather(weather) {
    weatherInfo.innerHTML = `
        <h2>${weather.city}</h2>
        <p>Temperature: ${weather.temp}°C</p>
        <p>Weather: ${weather.description}</p>
        <p>Humidity: ${weather.humidity}%</p>
    `;
}
