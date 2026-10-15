// Navigation Toggle
const hamButton = document.querySelector('#hamButton');
const nav = document.querySelector('#navBar');

if (hamButton) {
    hamButton.addEventListener('click', () => {
        nav.classList.toggle("show");
    });
}

// Set Timestamp for Form
const timestampField = document.querySelector("#timestamp");
if (timestampField) {
    timestampField.value = new Date().toISOString();
}

// Fetch and display full menu
async function getData() {
    const container = document.querySelector("#menu");
    
    if (container) {
        try {
            const response = await fetch('data/data.json');
            const display = await response.json();
            
            container.innerHTML = "";
            
            display.forEach(item => {
                let card = document.createElement('div');
                card.className = "card";
                
                let name = document.createElement("h2");
                let description = document.createElement("p");
                let price = document.createElement("strong");
                let image = document.createElement("img");
                
                name.textContent = item.name;
                description.textContent = item.description;
                price.textContent = item.price;
                
                image.setAttribute("src", item.image);
                image.setAttribute("alt", item.description);
                image.setAttribute("loading", "lazy");
                
                card.appendChild(image);
                card.appendChild(name);
                card.appendChild(description);
                card.appendChild(price);
                
                container.appendChild(card);
            });
        } catch (error) {
            console.error("Error loading menu data:", error);
        }
    }
}

// Fetch and display featured items on home page
async function initBestSellers() {
    const track = document.querySelector("#featured");
    
    if (track) {
        try {
            const response = await fetch('data/data.json');
            const products = await response.json();
            
            const featuredItems = products.filter(product => product.featured);
            track.innerHTML = "";
            
            featuredItems.forEach(item => {
                let card = document.createElement('div');
                card.className = "card";
                card.innerHTML = `<img src="${item.image}" alt="${item.description}" loading="lazy">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <strong>${item.price}</strong>`;
                track.appendChild(card);
            });
        } catch (error) {
            console.error("Error loading featured items:", error);
        }
    }
}
async function initOrderForm() {
    const orderContainer = document.querySelector("#orderItems");
    
    // Only run if the order form exists on the current page
    if (orderContainer) {
        try {
            const response = await fetch('data/data.json');
            const products = await response.json();
            
            orderContainer.innerHTML = "";
            
            products.forEach((item, index) => {
                let orderRow = document.createElement('div');
                orderRow.className = "order-item";
                
                // Create a checkbox, label with price, and a number input for quantity
                orderRow.innerHTML = `
                    <input type="checkbox" id="item${index}" name="selectedItems" value="${item.name}">
                    <label for="item${index}"><strong>${item.name}</strong> - ${item.price}</label>
                    <input type="number" id="qty${index}" name="quantity_${item.name}" min="1" max="20" placeholder="Qty" disabled>
                `;
                
                orderContainer.appendChild(orderRow);

                // Enable the quantity input only when the checkbox is checked
                const checkbox = orderRow.querySelector(`#item${index}`);
                const qtyInput = orderRow.querySelector(`#qty${index}`);
                
                checkbox.addEventListener('change', () => {
                    qtyInput.disabled = !checkbox.checked;
                    if (checkbox.checked) qtyInput.value = 1;
                    else qtyInput.value = "";
                });
            });
        } catch (error) {
            console.error("Error loading order items:", error);
            orderContainer.innerHTML = "<p>Sorry, the menu is currently unavailable.</p>";
        }
    }
}
// Initialize
getData();
initBestSellers();
initOrderForm();