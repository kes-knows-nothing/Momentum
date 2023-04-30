const API_KEY= "f1de67c37b5af0f140a3e073596c0f4d";


function onGeoOk(position) {
  
  const lat = position.coords.latitude 
  const lon = position.coords.longitude
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  // url을 불러라
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:last-child");
      const city = document.querySelector("#weather span:first-child");
      weather.innerText = data.weather[0].main;
      city.innerText = data.name + ":";
      
    });
}

function onGeoError() {
  alert("I cannot find where you are!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)




