let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");
// let weatherImage = document.getElementById("weatherImg");

let key = "b70768d6a55ce8fb4c4f43067ad1f296";

let getWeather = () => {
  let cityValue = cityVal.value;
  if (cityValue.length == 0) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityVal.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data.weather[0]);
        if (data.weather[0].main == "Clouds") {
          document.getElementById("weatherImg").style.backgroundImage =
            'url("./images/cloudy.jpg")';
          document.getElementById("weatherImg").style.backgroundSize =
            "100% 100%";
          document.getElementById("weatherImg").style.backgroundRepeat =
            "no-repeat";
        }
        if (data.weather[0].main == "Sunny") {
          document.getElementById("weatherImg").style.backgroundImage =
            'url("./images/sunny.jpg")';
          document.getElementById("weatherImg").style.backgroundSize =
            "100% 100%";
          document.getElementById("weatherImg").style.backgroundRepeat =
            "no-repeat";
        }
        if (data.weather[0].main == "Haze") {
          document.getElementById("weatherImg").style.backgroundImage =
            'url("./images/rainy.jpg")';
          document.getElementById("weatherImg").style.backgroundSize =
            "100% 100%";
          document.getElementById("weatherImg").style.backgroundRepeat =
            "no-repeat";
        }
        if (data.weather[0].main == "Snow") {
          document.getElementById("weatherImg").style.backgroundImage =
            'url("./images/snow.jpg")';
          document.getElementById("weatherImg").style.backgroundSize =
            "100% 100%";
          document.getElementById("weatherImg").style.backgroundRepeat =
            "no-repeat";
        }
        show.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp_container">
         <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${data.main.temp_min}&#176;</h4>
         </div>
         <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${data.main.temp_max}&#176;</h4>
         </div>   
        </div>
        `;
      })
      .catch(() => {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
      });
  }
};
search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
