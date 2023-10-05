const search = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')
const cloud = document.querySelector('.cloud')
const humi = document.querySelector('.humi')
const win = document.querySelector('.win')

searchBtn.addEventListener('click', () => {
    // Get the user's input location
    const location = search.value;
    console.log(location);
    weather(location);

    search.value = ''
});


async function weather(location) {
    
    const apiKey = '67bfd21b18d8d2713138900a6dcf15ec';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`
    );
    const data = await response.json();
    let fahrenheit = (data.main.temp - 32)*5/9
    let celsius = fahrenheit.toFixed();


    city.innerHTML = data.name;
    temp.innerHTML = celsius
    cloud.innerHTML = data.clouds.all;
    humi.innerHTML = data.main.humidity;
    win.innerHTML = data.wind.speed;
}