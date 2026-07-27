// Import Express Framework
const express = require("express");

// Create Router Object
const router = express.Router();

// Import Controller

const {
    registerUser
} = require("../controllers/registerController");

// Registration API
// Method : POST
// URL : http://localhost:5000/api/register

router.post("/register", registerUser);

// Test API
// Used to check whether route is working

router.get("/test", (req, res) => {

    res.send("Register Route Working Successfully");

});

// Export Router

module.exports = router;