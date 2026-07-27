// Import Express

const express = require("express");

const router = express.Router();

// Import Controller
const {

    loginUser

} = require("../controllers/loginController");

// =============================================
// Login API
// URL : POST /api/login
// =============================================

router.post("/login", loginUser);

// Export Router
module.exports = router;