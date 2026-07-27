/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Authentication Controller
 * File    : authController.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Handles Authentication Requests.
 * Controller only communicates between
 * Route and Service.
 * ==========================================================
 */

const authService = require("../services/authService");

/**
 * ==========================================
 * Register User Controller
 * ==========================================
 * Method : POST
 * URL    : /api/auth/register
 */

const registerUser = async (req, res) => {

    try {

        // Call Service Layer
        const result = await authService.register(req.body);

        return res.status(201).json(result);

    } catch (error) {

        return res.status(400).json({

            success: false,

            message: error.message

        });

    }

};

/**
 * ==========================================
 * Login User Controller
 * ==========================================
 * Method : POST
 * URL    : /api/auth/login
 */

const loginUser = async (req, res) => {

    try {

        const {

            email,

            password

        } = req.body;

        // Call Service Layer
        const result = await authService.login(

            email,

            password

        );

        return res.status(200).json(result);

    } catch (error) {

        return res.status(401).json({

            success: false,

            message: error.message

        });

    }

};

// Export Controller Functions
module.exports = {

    registerUser,

    loginUser

};