/******************************************************************************
 * File Name    : register.js
 * Description  : Registration Page JavaScript
 ******************************************************************************/

// Display role-specific fields
document.getElementById("role").addEventListener("change", function () {

    const roleId = this.value;
    const dynamicFields = document.getElementById("dynamicFields");

    dynamicFields.innerHTML = "";

    // Donor Fields
    if (roleId == "2") {

        dynamicFields.innerHTML = `

        <div class="row">

            <div class="col-md-6 mb-3">
                <label>Weight (KG)</label>
                <input type="number" class="form-control" id="weight">
            </div>

            <div class="col-md-6 mb-3">
                <label>Height (CM)</label>
                <input type="number" class="form-control" id="height">
            </div>

            <div class="col-md-12 mb-3">
                <label>Medical Conditions</label>
                <textarea class="form-control" id="medical_conditions"></textarea>
            </div>

        </div>
        `;
    }

    // Hospital Fields
    else if (roleId == "3") {

        dynamicFields.innerHTML = `

        <div class="row">

            <div class="col-md-6 mb-3">
                <label>Hospital Name</label>
                <input type="text" class="form-control" id="hospital_name">
            </div>

            <div class="col-md-6 mb-3">
                <label>Registration Number</label>
                <input type="text" class="form-control" id="registration_number">
            </div>

        </div>
        `;
    }

    // Patient Fields
    else if (roleId == "4") {

        dynamicFields.innerHTML = `

        <div class="row">

            <div class="col-md-6 mb-3">
                <label>Disease</label>
                <input type="text" class="form-control" id="disease">
            </div>

            <div class="col-md-6 mb-3">
                <label>Doctor Name</label>
                <input type="text" class="form-control" id="doctor_name">
            </div>

        </div>
        `;
    }

});

// Submit Registration Form
document.getElementById("registerForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    // Validate password
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Password and Confirm Password do not match.");

        return;
    }

    // Create request object
    const userData = {

        role_id: document.getElementById("role").value,

        full_name: document.getElementById("full_name").value,

        email: document.getElementById("email").value,

        mobile: document.getElementById("mobile").value,

        password: password,

        gender: document.getElementById("gender").value,

        date_of_birth: document.getElementById("dob").value,

        address: document.getElementById("address").value,

        postal_code: document.getElementById("postal_code").value,

        weight: document.getElementById("weight")?.value,

        height: document.getElementById("height")?.value,

        medical_conditions: document.getElementById("medical_conditions")?.value,

        hospital_name: document.getElementById("hospital_name")?.value,

        registration_no: document.getElementById("registration_number")?.value,

        disease: document.getElementById("disease")?.value,

        doctor_name: document.getElementById("doctor_name")?.value

    };

    try {

        const response = await fetch("http://localhost:5000/api/auth/register", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(userData)

        });

        const result = await response.json();

        alert(result.message);

        if (result.success) {

            document.getElementById("registerForm").reset();

            document.getElementById("dynamicFields").innerHTML = "";

            window.location.href = "login.html";

        }

    }
    catch (error) {

        console.error(error);

        alert("Server Error");

    }

});