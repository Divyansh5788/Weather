const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const Temperature = document.querySelector('.Temperature');
const discription = document.querySelector('.discription');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('Wind-Speed');



async function checkweather(city)
{
    const api_key="ab88a16bf5c80cbc9146447d1cf33a79";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response =>response.json());



    if (weather_data.cod === `404`) 
    {
        console.log("error")
        return;

    }
    Temperature.innerHTML = `${Math.round(weather_data.main.temp -273.15)}°C` ;  
    discription.innerHTML =`${weather_data.weather[0].description}`
    
    humidity.innerHTML=`${weather_data.main.humidity}%`;


    wind_speed.innerHTML= `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main)
     {
        case Clouds:
            weather_img.src ="./images/cloud.png";
            break;
        case Clear:
            weather_img.src ="./images/clear.png";
            break;
        case Mist:
            weather_img.src ="./images/mist.png";
            break;
        case Rain:
            weather_img.src ="./images/rain.png";
            break;
        case Snow:
            weather_img.src ="./images/snow.png";
            break;
    }

    console.log(weather_data)
}
searchBtn.addEventListener('click',()=>{
    checkweather(inputBox.value);
})
