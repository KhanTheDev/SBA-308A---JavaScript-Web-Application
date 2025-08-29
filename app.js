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
        // show loading message
        weatherInfo.innerHTML = '<p>Loading weather data...</p>';
        searchBtn.disabled = true;
        
        try {
            const weather = await getWeather(city);
            displayWeather(weather);
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

// show weather info on the page
function displayWeather(weather) {
    weatherInfo.innerHTML = `
        <h2>${weather.city}</h2>
        <p><strong>Temperature:</strong> ${weather.temp}°C</p>
        <p><strong>Weather:</strong> ${weather.description}</p>
        <p><strong>Humidity:</strong> ${weather.humidity}%</p>
        <p><strong>Feels like:</strong> ${weather.feelsLike}°C</p>
    `;
}
