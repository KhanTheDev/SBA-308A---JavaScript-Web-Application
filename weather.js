// weather module - handles API calls to get weather data

// function to get weather from API
export async function getWeather(city) {
    try {
        // using openweathermap API (free)
        const apiKey = '1234567890abcdef'; // this is fake, need real key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Check the spelling.');
            } else if (response.status === 401) {
                throw new Error('API key is invalid. Please check the key.');
            } else {
                throw new Error('Failed to get weather data. Try again later.');
            }
        }
        
        const data = await response.json();
        
        // extract the data we need
        return {
            city: data.name,
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            humidity: data.main.humidity,
            feelsLike: Math.round(data.main.feels_like),
            windSpeed: Math.round(data.wind.speed * 3.6), // convert m/s to km/h
            pressure: data.main.pressure
        };
        
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
