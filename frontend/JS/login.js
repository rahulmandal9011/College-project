/******************************************************************************
 * File Name    : login.js
 * Description  : Login Page JavaScript
 ******************************************************************************/

document.getElementById("loginForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    // Login data
    const loginData = {

        email: document.getElementById("email").value,

        password: document.getElementById("password").value

    };

    try {

        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(loginData)

        });

        const result = await response.json();

        alert(result.message);

        if (!result.success) {

            return;

        }

        // Save user in browser session
        sessionStorage.setItem(

            "loggedInUser",

            JSON.stringify(result.data)

        );

        // Redirect according to role
        switch (Number(result.data.role_id)) {

            case 1:
                window.location.href = "admin-dashboard.html";
                break;

            case 2:
                window.location.href = "donor-dashboard.html";
                break;

            case 3:
                window.location.href = "hospital-dashboard.html";
                break;

            case 4:
                window.location.href = "patient-dashboard.html";
                break;

            default:
                alert("Invalid Role");

        }

    }
    catch (error) {

        console.error(error);

        alert("Server Error");

    }

});