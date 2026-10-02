import {places} from '../data/places.js';
console.log(places);


function getPlaces(){
    const activity = document.getElementById("funPlaces").innerHTML = '';
    places.forEach(place => {
        let card = document.createElement('section');
        card.className = "layout";
        let name = document.createElement("h2");
        let location= document.createElement("address");
        let image = document.createElement("img");
        let description = document.createElement("p");

        name.innerHTML = place.name;
        location.innerHTML = place.location;
        description.innerHTML = place.description;
        image.setAttribute('src', place.image);
        image.setAttribute('alt', place.name);
        image.setAttribute('loading', "lazy");

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(location); 
        card.appendChild(description);
       

        document.getElementById("funPlaces").appendChild(card);
    });
}

getPlaces();