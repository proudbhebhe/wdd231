const navButton = document.getElementById("ham-Button");
const navBar = document.getElementById("nav-bar");
const today = document.querySelector("#currentYear");
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
const view = document.querySelector("#company-directory");
const temp = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const caption = document.querySelector("figcaption");
const open = document.querySelector(".open");
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75205053829418&lon=6.634337431098181&units=metric&lang=en&appid=76372a2b3151a15e77c663c7b5189618'



if (today) today.textContent = new Date().getFullYear();
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

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

async function getData() {
    const response = await fetch('data/members.json');
    const companies = await response.json();
    
    const container = document.querySelector("#company-directory").innerHTML= "";

    companies.forEach(company =>{
        let card = document.createElement('section');
        card.className = "business-card";
        
        let headerDiv = document.createElement('div');
        headerDiv.className = "card-header";

        let divider = document.createElement('hr');
        divider.className = "divider";

        let bodyDiv =document.createElement('div');
        bodyDiv.className = "card-body";

        let contactDiv = document.createElement('div');
        contactDiv.class = "card-contact";
        
        let name = document.createElement("h2");
        let website = document.createElement("a");
        let address = document.createElement("p");
        let image = document.createElement("img");
        let phone = document.createElement("p");
        let membership = document.createElement("p");
        let industry = document.createElement("p");

        name.textContent = company.company_name;
        address.innerHTML = company.company_addresses[0];
        website.textContent = company.company_website_url;
        phone.textContent = company.company_phone_number;
        industry.innerHTML = '<span class="label">Industry: </span>'+company.industry;
        phone.innerHTML = '<strong>Phone:</strong>'+company.company_phone_number;

        website.setAttribute("href", company.company_website_url)
        image.setAttribute("src", company.image_file_name);
        image.setAttribute("alt", company.company_name);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);      
        card.appendChild(industry);
        card.appendChild(website);

       

        
        document.querySelector("#company-directory").appendChild(card);
    });
}
async function fetchThreeDayForecast() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const data = await response.json();
    
    // 1. Filter for 12:00:00 PM readings to get 1 representative forecast per day
    // 2. Limit the array to the first 3 days using .slice(0, 3)
    const threeDayData = data.list
      .filter(item => item.dt_txt.includes('12:00:00'))
      .slice(0, 3);

    renderForecastUI(threeDayData);
  } catch (error) {
    console.error('Failed to fetch forecast:', error);
  }
}

function renderForecastUI(forecastList) {
  const container = document.getElementById('forecast-container');
  container.innerHTML = ''; // Clear container before appending

  forecastList.forEach(dayData => {
    // Format timestamp into a human-readable day string (e.g., "Tuesday, Sep 22")
    const dateObj = new Date(dayData.dt * 1000);
    const dayName = dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });

    // Extract values
    const temp = Math.round(dayData.main.temp);
    const description = dayData.weather[0].description;
    const iconCode = dayData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Construct card element with labels
    const card = document.createElement('div');
    card.className = 'weather-card';
    card.innerHTML = `
      <h3 class="day-label">${dayName}</h3>
      <img src="${iconUrl}" alt="${description}">
      <div class="temp-label">${temp}°C</div>
      <div class="condition-label">${description}</div>
    `;

    container.appendChild(card);
  });
}
async function displayCompanyInsights() {
    try {
        const response = await fetch('data/members.json');
        const allCompanies = await response.json();

        const insightCompanies = [
            allCompanies.find(company => company.membership_level === 1),
            allCompanies.find(company => company.membership_level === 2),
            allCompanies.find(company => company.membership_level === 3)
        ];

        const container = document.querySelector("#company-insight");
        container.innerHTML = "";

        insightCompanies.forEach(company => {
            if (company) {
                let card = document.createElement('section');
                let name = document.createElement("h2");
                let website = document.createElement("a");
                let image = document.createElement("img");
                let membership = document.createElement("span");
                
                name.textContent = company.company_name;
                website.textContent = company.company_website_url;
                membership.textContent = company.membership_level;

                website.setAttribute("href", company.company_website_url)
                image.setAttribute("src", company.image_file_name);
                image.setAttribute("alt", company.company_name);
                image.setAttribute("loading", "lazy");

                

                card.appendChild(name);
                card.appendChild(image);
                card.appendChild(website);
                card.appendChild(membership);


                document.querySelector("#company-insight").appendChild(card);
            }
        });

    } catch (error) {
        console.error("Error loading insight companies:", error);
    }
}



function displayResults(data){
    temp.innerHTML = `${data.main.temp}°C`;
    caption.innerHTML = data.weather[0].description;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute("SRC", iconsrc);
    icon.setAttribute("ALT", data.weather[0].description);

}

getData();
apiFetch();
fetchThreeDayForecast();
displayCompanyInsights();
if (grid){
    
grid.addEventListener('click', ()=>{
    view.classList.toggle('gridView');
    view.classList.remove('listView');
});
}
if (list){
list.addEventListener('click', ()=> {
    view.classList.toggle('listView');
    view.classList.remove('gridView');
});
}
document.getElementById("lastModified").innerHTML ="Last modified:" + document.lastModified;