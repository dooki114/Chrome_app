const API_KEY = "5a83b5783f0a8e6e59e361976a10065b";
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    //get the response from api
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `${data.name} - `;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
    });
};

function onGeoError() {
    alert("Cannot find your location. No Weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //arg1: on success , arg2: on failure
