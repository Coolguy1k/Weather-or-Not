const elements = {
    searchInput: document.getElementById("search-input"),
    searchButton: document.getElementById("search-button"),
    cityName: document.getElementById("cityname"),
    cityHistory: document.getElementById("city-history")
};

const indexs = [
    0,
    7,
    15,
    23,
    31,
    39
];
const cityDayEls = Array.from({
    length: 6
}, (_, i) => document.getElementById(`cityday${
    i === 0 ? "" : i
}`));
const tempEls = Array.from({
    length: 6
}, (_, i) => document.getElementById(`temp${
    i === 0 ? "" : i
}`));
const humidEls = Array.from({
    length: 6
}, (_, i) => document.getElementById(`humid${
    i === 0 ? "" : i
}`));
const windEls = Array.from({
    length: 6
}, (_, i) => document.getElementById(`wind${
    i === 0 ? "" : i
}`));
const weatherIconEls = Array.from({
    length: 6
}, (_, i) => document.getElementById(`weather-icon${
    i === 0 ? "" : i
}`));

const weatherDisplayEl = document.getElementById("displayweather");
const weatherIconEl = document.getElementById("weather-icon");

const apiKey = "961c97474e283a72c3bce315872b931b";
const cities = [];
const cityHistory = [];
const temps = Array(6).fill(0);
const humids = Array(6).fill(0);
const winds = Array(6).fill(0);
const dates = Array(6).fill(new Date());

async function getLocation(city) {
    try {
        const locationUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;
        const response = await fetch(locationUrl);
        const data = await response.json();
        const {lat, lon} = data[0];
        getWeather(lat, lon);
    } catch (error) {
        console.error("Error fetching location:", error);
    }
}

async function getWeather(lat, lon) {
    try {
        const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=english&appid=${apiKey}`;
        const response = await fetch(weatherUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
