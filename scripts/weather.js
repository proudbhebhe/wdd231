const temp = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75205053829418&lon=6.634337431098181&units=metric&lang=en&appid=76372a2b3151a15e77c663c7b5189618 '

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}
function displayResults(data){
    temp.innerHTML = `${data.main.temp}°C`;
    caption.innerHTML = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("SRC", iconsrc);
    icon.setAttribute("ALT", data.weather[0].description);

}

apiFetch();

