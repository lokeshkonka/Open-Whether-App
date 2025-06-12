const API_KEY = "71aadbeadb6b707d73d182f888502dd6";
 // ENV VARIABLES
// I know api key should be hidden

document.addEventListener('DOMContentLoaded',()=>{
// Cloud Animation
// document.getElementById("get-weather-btn").addEventListener("click", function () {
//     const clouds = document.getElementById("clouds");
//     clouds.classList.remove("hidden");

//     const weatherInfo = document.getElementById("weather-info");
//     weatherInfo.classList.remove("hidden");

//     // Optional: Reset cloud animation
//     clouds.innerHTML = `
//         <div class="cloud cloud1"></div>
//         <div class="cloud cloud2"></div>
//         <div class="cloud cloud3"></div>
//     `;
// });
const cityinput = document.querySelector("#city-input");
const weatherbtn = document.getElementById("get-weather-btn")
const whetherinfo = document.getElementById("weather-info")
const errorMsg = document.querySelector("#error-message");
const cityName = document.querySelector("#city-name");
const Temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");

weatherbtn.addEventListener('click',async function(){
    const city = cityinput.value.trim()
    if(!city) return;
    //it may throw an error
    //server/DB is in another continent
    try {
        const weatherdata = await fetchwhetherdata(city)
        displaywhetherdata(weatherdata)
    } catch (error) {
        showerror()
    }
});
 async function fetchwhetherdata(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error("City Not found")
    }
    const data = response.json()
    return data
}
function displaywhetherdata(data) {
    console.log(data);
    const {name,main,weather}= data;
    cityName.textContent = name;
    whetherinfo.classList.remove("hidden");
    errorMsg.classList.add("hidden")
    Temperature.textContent = `Temperature: ${main.temp}`
    description.textContent = `Description: ${weather[0].description}`
}
function showerror() {
     whetherinfo.classList.add("hidden");  // Hide weather info
    errorMsg.classList.remove("hidden");  // Show error message
    errorMsg.textContent = "❌ Invalid city name. Please try again.";
}



})

