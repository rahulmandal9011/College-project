const API_URL = "http://localhost:5000/api/donors";

window.onload = function () {

    console.log("Page Loaded");

    loadDonors();

};

async function loadDonors() {

    try {

        console.log("Calling API...");

        const response = await fetch(API_URL);

        console.log("Response:", response);

        const result = await response.json();

        console.log("Result:", result);

        const donorContainer = document.getElementById("donorContainer");

        console.log("Container:", donorContainer);

        donorContainer.innerHTML = "<h2>API Connected</h2>";

    }

    catch(error){

        console.log(error);

    }

}