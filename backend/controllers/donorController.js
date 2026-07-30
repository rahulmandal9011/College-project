/******************************************************************************
 * File Name    : donorController.js
 * Description  : Donor Controller
 ******************************************************************************/

// Import response helper
const { successResponse, errorResponse } = require("../utils/response");

// Import donor model
const donorModel = require("../Models/donorModel");

/**
 * Get All Donors
 */
const getAllDonors = async (req, res) => {

    try {

        // Get donor list from database
        const donors = await donorModel.getAllDonors();

        // Return success response
        return successResponse(
            res,
            "Donors fetched successfully.",
            donors
        );

    } catch (error) {

        console.log(error);

        // Return error response
        return errorResponse(
            res,
            "Failed to fetch donors."
        );

    }

};

// Export controller functions
module.exports = {

    getAllDonors

};