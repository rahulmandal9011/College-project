// ===============================
// LifeStream Hospital Module
// ===============================

// Wait until page is loaded
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchHospital");
    const cityFilter = document.getElementById("cityFilter");
    const bloodFilter = document.getElementById("bloodFilter");
    const searchBtn = document.getElementById("searchBtn");

    // Search Button
    searchBtn.addEventListener("click", filterHospitals);

    // Live Search
    searchInput.addEventListener("keyup", filterHospitals);

    // Dropdown Filters
    cityFilter.addEventListener("change", filterHospitals);
    bloodFilter.addEventListener("change", filterHospitals);

});


// ===============================
// Filter Hospital Cards
// ===============================

function filterHospitals() {

    const hospitalName =
        document.getElementById("searchHospital").value.toLowerCase();

    const city =
        document.getElementById("cityFilter").value.toLowerCase();

    const blood =
        document.getElementById("bloodFilter").value.toLowerCase();

    const cards =
        document.querySelectorAll(".hospital-card");

    cards.forEach(card => {

        const title =
            card.querySelector("h4").innerText.toLowerCase();

        const details =
            card.innerText.toLowerCase();

        let visible = true;

        // Hospital Name Filter
        if (
            hospitalName &&
            !title.includes(hospitalName)
        ) {
            visible = false;
        }

        // City Filter
        if (
            city &&
            !details.includes(city)
        ) {
            visible = false;
        }

        // Blood Group Filter
        if (
            blood &&
            !details.includes(blood)
        ) {
            visible = false;
        }

        card.parentElement.style.display =
            visible ? "block" : "none";

    });

}


// ===============================
// Reset Filters
// ===============================

function resetFilters() {

    document.getElementById("searchHospital").value = "";

    document.getElementById("cityFilter").selectedIndex = 0;

    document.getElementById("bloodFilter").selectedIndex = 0;

    filterHospitals();

}