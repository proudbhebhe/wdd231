const hamButton = document.querySelector('#hamButton');
const nav = document.querySelector('#navBar');

hamButton.addEventListener('click',() =>{
    nav.classList.toggle("show");
} )

async function getData() {
    const response = await fetch('data/data.json');
    const display = await response.json();

    const container = document.querySelector("#menu").innerHTML= "";

    display.forEach(item =>{
        let card = document.createElement('div');
        card.className = "card";
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let price = document.createElement("strong");
        let image = document.createElement("img");

        name.textContent = item.name;
        description.textContent = item.description;
        price.textContent = item.price;
        image.setAttribute("src", item.image,".jpg");
        image.setAttribute("alt", item.description);
        image.setAttribute("loading", "lazy");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(price);

        document.querySelector("#menu").appendChild(card);
    });
}
getData();