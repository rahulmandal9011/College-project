// Password Show/Hide

const toggle = document.getElementById("togglePassword");
const password = document.getElementById("password");

toggle.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";
        toggle.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {

        password.type = "password";
        toggle.innerHTML = '<i class="fa-solid fa-eye"></i>';

    }

});

// Login Form Submit

document.getElementById("loginForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation

    if (email === "" || password === "") {

        alert("Please enter Email and Password");
        return;

    }

    try {

        const response = await fetch("http://localhost:5000/api/auth/login", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                email,
                password

            })

        });

        const data = await response.json();

        if (data.success) {

            // Save JWT Token

            localStorage.setItem("token", data.token);

            // Save Logged-in User

            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Login Successful");

            window.location.href = "dashboard.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.log(error);

        alert("Unable to connect to server.");

    }

});