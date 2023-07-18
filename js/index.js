const apiKey = "b8617d799893b29b9cf667a92dcb611e";
const defaultValue = "----";

const searchInput = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

const temperature = document.querySelector(".temperature .value");
const city = document.querySelector(".city-name .value");
const humidity = document.querySelector(".humidity .value");
const windSpeed = document.querySelector(".wind-speed .value");

function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric&lang=vi`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            temperature.innerHTML = data.main.temp || defaultValue;
            city.innerHTML = data.name || defaultValue;
            humidity.innerHTML = data.main.humidity || defaultValue;
            let adjustedWindSpeed = Math.round(data.wind.speed * 3.6, 0);
            windSpeed.innerHTML = adjustedWindSpeed || defaultValue;
        })
        .catch((error) => {
            console.log("Đã xảy ra lỗi:", error);
        });
}

searchInput.addEventListener("change", getWeather);
searchBtn.addEventListener("click", getWeather);
