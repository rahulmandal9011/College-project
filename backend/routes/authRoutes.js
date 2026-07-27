/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Authentication Routes
 * File    : authRoutes.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Defines all Authentication API Endpoints.
 * ==========================================================
 */

const express = require("express");

const router = express.Router();

// Import Controller
const {

    registerUser,

    loginUser

} = require("../controllers/authController");

/**
 * ==========================================
 * Register API
 * ==========================================
 *
 * Method : POST
 * URL    : /api/auth/register
 */

router.post(

    "/register",

    registerUser

);

/**
 * ==========================================
 * Login API
 * ==========================================
 *
 * Method : POST
 * URL    : /api/auth/login
 */

router.post(

    "/login",

    loginUser

);

/**
 * ==========================================
 * Test Route
 * ==========================================
 * Used to verify route configuration.
 */

router.get("/test", (req, res) => {

    res.json({

        success: true,

        message: "Authentication Route Working Successfully"

    });

});

module.exports = router;