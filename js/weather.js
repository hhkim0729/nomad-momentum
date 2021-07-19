const API_KEY = "2933a33ab39b3925b73acf1044b209be";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      const weather = document.querySelector("#weather");
      const temp = weather.querySelector("span:first-child");
      const city = weather.querySelector("span:last-child");
      const icon = document.createElement("img");
      icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      weather.appendChild(icon);
      temp.innerText = `${parseInt(data.main.temp)}˚`;
      city.innerText = data.name;
    })
  );
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
