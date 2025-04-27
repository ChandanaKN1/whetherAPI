const button=document.getElementById('search-button')
const cityInput=document.getElementById('city-input')

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
    const promise =await fetch(
        `http://api.weatherapi.com/v1/current.json?key=19d12c3456f74574aee111255252704&q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener('click', async (e) => {
    e.preventDefault(); // This is crucial
    const val = cityInput.value;
    if(val.trim() === '') return;
    
    const result = await getData(val);
    cityName.innerText = `${result.location.name}, ${result.location.country}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityTemp.innerText = `${result.current.temp_c}°C`;
    
    // This line ensures the input keeps its style after search
    cityInput.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
});
