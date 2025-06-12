// Cloud Animation
document.getElementById("get-weather-btn").addEventListener("click", function () {
    const clouds = document.getElementById("clouds");
    clouds.classList.remove("hidden");

    const weatherInfo = document.getElementById("weather-info");
    weatherInfo.classList.remove("hidden");

    // Optional: Reset cloud animation
    clouds.innerHTML = `
        <div class="cloud cloud1"></div>
        <div class="cloud cloud2"></div>
        <div class="cloud cloud3"></div>
    `;
});
