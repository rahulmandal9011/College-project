/******************************************************************************
 * File Name    : donorRoutes.js
 * Description  : Donor Routes
 ******************************************************************************/

// Import Express
const express = require("express");

// Create Router
const router = express.Router();

// Import Donor Controller
const donorController = require("../Controllers/donorController");

/**
 * GET
 * Get All Donors
 * URL : /api/donors
 */
router.get(
    "/",
    donorController.getAllDonors
);

// Export Router
module.exports = router;