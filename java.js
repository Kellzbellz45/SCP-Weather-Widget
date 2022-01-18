// Time and Date Feature

let now = new Date();

console.log(now.getDay);
console.log(now.getDate);
console.log(now.getMonth);
console.log(now.getFullYear);
console.log(now.getHours);
console.log(now.getMinutes);

let h4 = document.querySelector(".time");

let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();

if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Friday", "Sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];

h4.innerHTML = `${day} ${month} ${date}, ${year} at ${hours}:${minutes}`;

// Search Function and City Name selector

function signUp(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#input-city");

  let h2 = document.querySelector("h2");
  h2.innerHTML = `${searchInput.value}`;

  searchCity(searchInput.value);
}

function searchCity(city) {
  let apiKey = "819620ea8ee5ee3e0e6b92ff30d9cfb9";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", signUp);

// Weather Show Temperature

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("h1");
  temperatureElement.innerHTML = `${temperature}°`;

  let description = document.querySelector("#current-weather");
  description.innerHTML = response.data.weather[0].description;

  let humidity = document.querySelector(".humidity");
  humidity.innerHTML = `Humidity: ${response.data.main.humidity} %`;

  let wind = document.querySelector(".wind");
  wind.innerHTML = `Wind: ${response.data.wind.speed}`;
}

// Geolocation

function retreivePosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "c7deedd292dc5c0d8e006e1abcf833ef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function currentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(retreivePosition);
}

let currentLocationButton = document.querySelector(".currnetlocationButton");
currentLocationButton.addEventListener("click", currentPosition);

// Today's Tip
