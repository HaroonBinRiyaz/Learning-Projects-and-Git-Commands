const apikey = "e7386e1820939b84c7303c31f075c05a";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");

const formEl = document.querySelector("form")

formEl.addEventListener("submit", function(event){
  event.preventDefault();
  const cityValue = cityInputEl.value;
  if (cityInputEl.value == ""){
    alert("Enter the name of a city")
  }
  else{
    getWeatherData(cityValue);
    cityInputEl.value = '';
  
  }
    
})

//API endpoint, query parameters, API key, additional parameters

async function getWeatherData(cityValue){
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

   if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Unauthorized: Invalid API key");
    } else if (response.status === 404) {
      throw new Error("City not found");
    } else {
      throw new Error("Network issue");
       
    }
}

    const data = await response.json();
    console.log(data);
    
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const cityName = data.name;
    // console.log(cityName)
    
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`

    ]
    
    weatherDataEl.querySelector(".icon").innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`
    weatherDataEl.querySelector(".temperature").textContent = `${temperature} °C in ${cityName} `
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details.map(detail=>`<div>${detail}</div>`).join("");

    
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").textContent = error.message;
    weatherDataEl.querySelector(".details").textContent = "";
    
  }

}