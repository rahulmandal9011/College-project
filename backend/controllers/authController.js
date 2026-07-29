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

// Export controller methods
module.exports = {

    register

};