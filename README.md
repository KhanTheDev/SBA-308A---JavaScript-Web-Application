# Weather App

This is a simple weather app I made for my JavaScript class. It lets you check the weather in different cities.

## What it does:
- Search for weather by city name
- Shows temperature, weather description, humidity, wind speed, and pressure
- Switch between Celsius and Fahrenheit
- Keeps track of your recent searches (up to 5)
- Click on history items to search again
- Clear search history with confirmation

## How to use:
1. Type a city name in the search box
2. Choose your preferred temperature unit (Celsius or Fahrenheit)
3. Click "Search" or press Enter
4. See the weather info appear below
5. Your searches are saved in the history section
6. Click on any city in history to search it again

## Features:
- **Search**: Enter any city name to get current weather
- **Units**: Toggle between Celsius and Fahrenheit
- **History**: Automatically saves your last 5 searches
- **Responsive**: Works on both desktop and mobile
- **Error Handling**: Shows helpful error messages

## Files:
- `index.html` - the main page with search form and display
- `styles.css` - makes it look nice and responsive
- `app.js` - main app code that handles user interactions
- `weather.js` - gets weather data from OpenWeatherMap API
- `history.js` - saves and loads search history using localStorage

## What I learned:
- How to use fetch API with async/await
- Working with JavaScript modules and imports
- Local storage for saving user data
- Event handling and DOM manipulation
- Error handling and user feedback
- Responsive design with CSS
- Working with external APIs

## Future improvements:
- Add weather icons
- Show 5-day forecast
- Add more weather details
- Save favorite cities
- Dark/light theme toggle
