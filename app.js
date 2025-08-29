// main app file - handles the weather app
import { getWeather } from './weather.js';
import { saveToHistory, loadHistory, clearHistory } from './history.js';

// get elements from the page
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherInfo = document.getElementById('weatherInfo');
const historyList = document.getElementById('historyList');
const unitSelect = document.getElementById('unitSelect');
const clearHistoryBtn = document.getElementById('clearHistory');

// load history when page loads
loadHistory(historyList);

// add click event to search button
searchBtn.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (city) {
        // show loading message
        weatherInfo.innerHTML = '<p>Loading weather data...</p>';
        searchBtn.disabled = true;
        
        try {
            const weather = await getWeather(city, unitSelect.value);
            displayWeather(weather, unitSelect.value);
            saveToHistory(city);
            loadHistory(historyList);
        } catch (error) {
            weatherInfo.innerHTML = '<p style="color: red;">Error: ' + error.message + '</p>';
        } finally {
            searchBtn.disabled = false;
        }
    } else {
        weatherInfo.innerHTML = '<p style="color: orange;">Please enter a city name</p>';
    }
});

// also search when pressing enter
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// clear history button
clearHistoryBtn.addEventListener('click', () => {
    clearHistory();
    loadHistory(historyList);
});

// show weather info on the page
function displayWeather(weather, unit) {
    const tempUnit = unit === 'metric' ? '°C' : '°F';
    const speedUnit = unit === 'metric' ? 'km/h' : 'mph';
    
    weatherInfo.innerHTML = `
        <h2>${weather.city}</h2>
        <p><strong>Temperature:</strong> ${weather.temp}${tempUnit}</p>
        <p><strong>Weather:</strong> ${weather.description}</p>
        <p><strong>Humidity:</strong> ${weather.humidity}%</p>
        <p><strong>Feels like:</strong> ${weather.feelsLike}${tempUnit}</p>
        <p><strong>Wind Speed:</strong> ${weather.windSpeed} ${speedUnit}</p>
        <p><strong>Pressure:</strong> ${weather.pressure} hPa</p>
    `;
}
