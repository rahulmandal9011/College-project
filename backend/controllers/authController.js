/******************************************************************************
 * File Name    : authController.js
 * Description  : Authentication Controller
 ******************************************************************************/

// Import response utility
const {
    successResponse,
    errorResponse
} = require("../utils/response");

// Import authentication service
const authService = require("../services/authService");

/**
 * Register New User
 */
const register = async (req, res) => {

    try {

        // Get data from frontend request
        const userData = req.body;

        // Call service layer
        const result = await authService.registerUser(userData);

        // Send success response
        return successResponse(

            res,

            result.message,

            {
                userId: result.userId
            },

            201

        );

    }
    catch (error) {

        console.error("Registration Error :", error.message);

        return errorResponse(

            res,

            error.message,

            400

        );

    }

};

/**
 * Login User
 */
const login = async (req, res) => {

    try {

        // Get login data
        const loginData = req.body;

        // Call service
        const result = await authService.loginUser(loginData);

        // Send success response
        return successResponse(

            res,

            result.message,

            result.user,

            200

        );

    }
    catch (error) {

        console.error("Login Error :", error.message);

        return errorResponse(

            res,

            error.message,

            401

        );

    }

};

// Export controller methods
module.exports = {

    register,

    login

};