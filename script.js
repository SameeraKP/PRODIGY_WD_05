const apiKey = '81fb7759904700f426aa601cdbd5eaaf'; // Replace with your OpenWeatherMap API key
const url = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('get-weather-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-input').value;
    fetchWeatherData(cityName);
});

async function fetchWeatherData(city) {
    const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    if (response.ok) {
        displayWeatherData(data);
    } else {
        alert('City not found. Please try again.');
    }
}

function displayWeatherData(data) {
    document.getElementById('city-name').innerText = data.name;
    document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
    document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${data.wind.speed} m/s`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.getElementById('weather-info').style.display = 'block';
}