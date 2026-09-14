const navButton = document.getElementById("ham-Button");
const navBar = document.getElementById("nav-bar");
const today = document.querySelector("#currentYear");
const grid = document.querySelector("#grid");
const list = document.querySelector("#list");
 const view = document.querySelector("#company-directory");
grid.addEventListener('click', ()=>{
    view.classList.toggle('gridView');
    view.classList.remove('listView');
});

list.addEventListener('click', ()=> {
    view.classList.toggle('listView');
    view.classList.remove('gridView');
});

if (today) today.textContent = new Date().getFullYear();
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});
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

getData();

document.getElementById("lastModified").innerHTML ="Last modified:" + document.lastModified;