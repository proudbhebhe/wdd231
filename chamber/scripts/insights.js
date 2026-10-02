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
displayCompanyInsights();