const buttons = document.querySelectorAll(".open");
const modal = document.querySelector("#info-modal");
const modalMessage = document.querySelector("#modal-message");
const closeModal = document.getElementById("close-modal");

const membership = [
    {
        name: "Non-Profit Membership",
        description: "A membership option designed for organizations and individuals serving their communities without a profit-driven focus.",
        benefits: [
            "Access to member resources",
            "Community networking opportunities",
            "Member-only updates",
            "Basic support"
        ],
        cost: "$0"
    },

    {
        name: "Bronze Membership",
        description: "A simple membership plan for individuals or organizations looking for essential membership benefits.",
        benefits: [
            "Access to member resources",
            "Community networking opportunities",
            "Member-only updates",
            "Basic support",
            "Member discounts"
        ],
        cost: "$25/year"
    },

    {
        name: "Silver Membership",
        description: "A more comprehensive membership for members who want additional benefits and greater access to services.",
        benefits: [
            "All Bronze benefits",
            "Priority support",
            "Additional member discounts",
            "Exclusive events and resources",
            "Enhanced networking opportunities"
        ],
        cost: "$50/year"
    },

    {
        name: "Gold Membership",
        description: "Our most comprehensive membership option, offering the highest level of access, support, and exclusive benefits.",
        benefits: [
            "All Silver benefits",
            "Premium support",
            "Highest member discounts",
            "VIP access to selected events",
            "Exclusive resources",
            "Priority networking opportunities"
        ],
        cost: "$100/year"
    }
];

const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalBenefits = document.querySelector("#modal-benefits");
const modalCost = document.querySelector("#modal-cost");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const membershipIndex = button.dataset.membership;

        const selectedMembership = membership[membershipIndex];

        // Name
        modalTitle.textContent = selectedMembership.name;

        // Description
        modalDescription.textContent = selectedMembership.description;

        // Cost
        modalCost.textContent = selectedMembership.cost;

        // Clear previous benefits
        modalBenefits.innerHTML = "";

        // Add benefits
        selectedMembership.benefits.forEach(function(benefit) {

            const li = document.createElement("li");

            li.textContent = benefit;

            modalBenefits.appendChild(li);

        });

        // Open modal
        modal.showModal();
    });

});

closeModal.addEventListener("click", function() {

    modal.close();

});

modal.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.close();

    }

});