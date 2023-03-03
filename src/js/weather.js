const weatherThumb = document.querySelector('.weather__thumb');
const weatherTemp = document.querySelector('.weather__temp');
const weatherCond = document.querySelector('.weather__cond');
const weatherLocation = document.querySelector('.weather__location');
const weatherDate = document.querySelector('.weather__date');
const weatherIcon = document.querySelector('.weather__icon');

// Обновления элементов HTML

function updateWeatherInfo(weatherData) {
  weatherTemp.textContent = `${Math.round(weatherData.main.temp)}°C`;
  weatherCond.textContent = weatherData.weather[0].description;
  weatherLocation.textContent = weatherData.name;
  const date = new Date();
  weatherDate.innerHTML = `${date.toLocaleString('en-us', {
    weekday: 'short',
  })}<br />${date.toLocaleString('en-us', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })}`;
  const iconCode = weatherData.weather[0].icon;
  // const iconHeart = new URL(
  //   `../images/wether-icons/${iconCode}-min.png`,
  //   import.meta.url
  // );
  const iconHeart = new URL(
    `../images/wether-icons/01d-min.png`,
    import.meta.url
  );
  const iconUrl = `${iconHeart}`;
  weatherIcon.setAttribute('src', iconUrl);
}

// Получение координат пользователя
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherData);
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

// Отправка запроса на получение данных о погоде
function getWeatherData(position) {
  const apiKey = 'ac97801f712add3fe97dbc6a96855cd7';
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
      updateWeatherInfo(data);
    })
    .catch(error => console.log(error));
}

// Вызов функции для получения данных о погоде
getLocation();
