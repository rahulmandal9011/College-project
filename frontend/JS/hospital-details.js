// ===========================================
// LifeStream - Hospital Details JavaScript
// ===========================================

document.addEventListener("DOMContentLoaded", () => {

    initializePage();

});

// ===========================================
// Initialize Page
// ===========================================

function initializePage() {

    showCurrentDate();

    setupButtons();

    animateCards();

}

// ===========================================
// Show Current Date
// ===========================================

function showCurrentDate() {

    const dateElement = document.getElementById("currentDate");

    if (!dateElement) return;

    const today = new Date();

    dateElement.innerHTML = today.toDateString();

}

// ===========================================
// Button Events
// ===========================================

function setupButtons() {

    // Request Blood Button
    const requestBtn = document.querySelector(".btn-danger");

    if (requestBtn) {

        requestBtn.addEventListener("click", function () {

            window.location.href = "create-request.html";

        });

    }

    // Call Hospital Button
    const callBtn = document.querySelector(".btn-success");

    if (callBtn) {

        callBtn.addEventListener("click", function () {

            window.location.href = "tel:+919876543210";

        });

    }

    // Direction Button
    const directionBtn = document.querySelector(".btn-primary");

    if (directionBtn) {

        directionBtn.addEventListener("click", function () {

            window.open(
                "https://maps.google.com/?q=Apollo Hospital Mumbai",
                "_blank"
            );

        });

    }

}

// ===========================================
// Card Hover Animation
// ===========================================

function animateCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-5px)";
            this.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });

}

// ===========================================
// Doctor Profile
// ===========================================

function viewDoctor(name) {

    alert("Doctor Profile\n\n" + name);

}

// ===========================================
// Share Hospital
// ===========================================

function shareHospital() {

    if (navigator.share) {

        navigator.share({

            title: "Apollo Hospital",

            text: "Check this hospital on LifeStream",

            url: window.location.href

        });

    } else {

        alert("Sharing is not supported on this browser.");

    }

}

// ===========================================
// Print Hospital Details
// ===========================================

function printHospital() {

    window.print();

}