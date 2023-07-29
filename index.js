// Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap
const API_KEY = '41601795bd3cc1489680c4b9c127b053';
const weatherBox = document.getElementById('weatherBox');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

function getWeather() {
  const city = document.getElementById('search').value;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        showError('City not found.');
        return;
      }
      
      const { name, main, weather } = data;
      const temperature = main.temp;
      const description = weather[0].description;

      locationElement.textContent = name;
      temperatureElement.textContent = `${temperature} °C`;
      descriptionElement.textContent = description;

      weatherBox.style.display = 'block';
    })
    .catch(error => {
      showError('Something went wrong. Please try again later.');
    });
}

function showError(message) {
  alert(message);
}
