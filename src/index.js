let date = document.querySelector("h3");
let today = new Date();
let hours = today.getHours();
let mins = today.getMinutes();
let updated = "";
if (mins < 10) {
  updated = `0${mins}`;
} else {
  updated = mins;
}
let time = `${hours}:${updated}`;
let day = today.getDay();

let daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayInFull = daysOfWeek[day];

let datetext = `${dayInFull} ${time}`;
date.innerHTML = datetext;
let display = document.querySelector("#city");
let search = document.querySelector("#search-form");
search.addEventListener("submit", check);

function check(event) {
  event.preventDefault();
  let city = document.querySelector(".form-control");
  display.innerHTML = city.value;
  //alert(city.value);

  let apiKey = "095adb74c2b19077ce4ca65f855199f0";
  let searchCity = city.value;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&appid=${apiKey}`;

  axios.get(apiURL).then(getCurrent);
}
function getCurrent(response) {
  let currentTemp = document.querySelector("#temperature");
  currentTemp.innerHTML = ` ${Math.round(response.data.main.temp)}°C`;
  let currentHumidity = document.querySelector("#humidity");
  currentHumidity.innerHTML = `${response.data.main.humidity}%`;
}
