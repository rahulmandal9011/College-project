/******************************************************************************
 * File Name    : dashboard.js
 * Description  : Common Dashboard JavaScript
 ******************************************************************************/

// Get logged in user from session storage
const loggedInUser = JSON.parse(sessionStorage.getItem("loggedInUser"));

// Check user is logged in
if (!loggedInUser) {

    alert("Please login first.");

    window.location.href = "login.html";

}

// Display user information
const userName = document.getElementById("userName");

if (userName) {

    userName.innerText = loggedInUser.full_name;

}

const profileName = document.getElementById("profileName");

if (profileName) {

    profileName.innerText = loggedInUser.full_name;

}

const profileEmail = document.getElementById("profileEmail");

if (profileEmail) {

    profileEmail.innerText = loggedInUser.email;

}

// Logout Button
const logoutButton = document.getElementById("logoutBtn");

if (logoutButton) {

    logoutButton.addEventListener("click", function (event) {

        event.preventDefault();

        // Remove logged in user
        sessionStorage.removeItem("loggedInUser");

        alert("Logged out successfully.");

        window.location.href = "login.html";

    });

}