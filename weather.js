// weather module - handles API calls to get weather data

// function to get weather from API
export async function getWeather(city) {
    try {
        // using openweathermap API (free)
        const apiKey = '1234567890abcdef'; // this is fake, need real key
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        
        const data = await response.json();
        
        // extract the data we need
        return {
            city: data.name,
            temp: Math.round(data.main.temp),
            description: data.weather[0].description,
            humidity: data.main.humidity
        };
        
    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
