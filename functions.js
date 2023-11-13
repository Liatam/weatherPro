// functions.js

const createWeatherCard = (data, cardId) => {

    const createDiv=(name, data, obj)=> {
    const element = document.createElement('div');
    element.classList.add(name);
    element.innerHTML = data;
    obj.appendChild(element);
    }

    const container = document.getElementById('weather-container');

    const card = document.createElement('div');
    card.classList.add('weather-card');
    card.id = cardId;

    createDiv('city', data.name, card);

    const iconAndTempContainer = document.createElement('div');
    iconAndTempContainer.classList.add('icon-and-temp');
    card.appendChild(iconAndTempContainer);

    createDiv('temp', `${data.main.temp}°C`, iconAndTempContainer);

    const iconElement = document.createElement('img');
    iconElement.classList.add('icon');
    iconElement.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    iconAndTempContainer.appendChild(iconElement);

    createDiv('description', data.weather[0].description, card);

    const feelsLikeAndHumidityContainer = document.createElement('div');
    feelsLikeAndHumidityContainer.classList.add('feelsLike-and-humidity-container');

    const feelsLike = document.createElement('div');
    feelsLike.classList.add('feelsLike');

    createDiv('feelsLike-title', 'מרגיש כמו', feelsLike);
    createDiv('feelsLikeData', `${data.main.feels_like}°C`, feelsLike);
    feelsLikeAndHumidityContainer.appendChild(feelsLike);

    const humidity = document.createElement('div');
    humidity.classList.add('humidity');
    createDiv('humidity-title', 'לחות', humidity);
    createDiv('humidityData', `${data.main.humidity}%`, humidity);
    feelsLikeAndHumidityContainer.appendChild(humidity);

    card.appendChild(feelsLikeAndHumidityContainer);

    container.appendChild(card);
};

export { createWeatherCard };
