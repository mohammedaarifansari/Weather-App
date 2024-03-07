const input = document.querySelector(".input");
const btn = document.querySelector("button");
const img = document.querySelector(".image");
const paraupper = document.querySelector(".paraupper");
const parasesion = document.querySelector(".parasesion");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const not_found = document.querySelector('.location-not-found');
const botoom_box = document.querySelector('.botoom_box');


async function checkweather(city){
  const api_key = "986008d7b772527b7c317569a6081a9e";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then(response => response.json());


  if(weather_data.cod === '404'){
    not_found.style.display = "flex";
    botoom_box.style.display = "none";
    return;
  }
  
  not_found.style.display = "none";
  botoom_box.style.display = "flex";
  paraupper.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  parasesion.innerHTML = `${weather_data.weather[0].description}`;
  para1.innerHTML = `${weather_data.main.humidity}%`;
  para2.innerHTML = `${weather_data.wind.speed}Km/H`;


  switch(weather_data.weather[0].main){
    case 'Clouds':
      img.src = "image/Cloud.png";
      break;
    case 'Clear':
      img.src = "image/Clear.png";
      break;
    case 'Rain':
      img.src = "image/Rain.png";
      break;
    case 'Mist':
      img.src = "image/Mist.png";
      break;
    case 'Snow':
      img.src = "image/Snow.png";
      break;
    case 'Smoke':
      img.src = "image/Smoke.png";
      break;
  };
};

 
btn.addEventListener('click',()=>{
  checkweather(input.value);
});