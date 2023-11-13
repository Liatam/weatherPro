// script.js

import { createWeatherCard } from './functions.js';

const API_KEY = '147481ea49d1a9be958dc990cbee869b';

const getWeather = async (cityName, cardId) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=he&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        createWeatherCard(weatherData, cardId);
        return weatherData;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        return null;
    }
};

// Example usage: Fetch weather data for different cities and create cards
getWeather("london", "card1");
getWeather("alaska", "card2");
getWeather("new york", "card3");
getWeather("eilat", "card4");
