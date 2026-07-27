console.log("Donor Routes Loaded");
const express = require("express");
const router = express.Router();

const donorController = require("../controllers/donorController");
const { verifyToken } = require("../middleware/authMiddleware");

// Create Donor
router.post("/", verifyToken, donorController.createDonor);

// Get All Donors
router.get("/", verifyToken, donorController.getAllDonors);

// Get Donor By ID
router.get("/:id", verifyToken, donorController.getDonorById);

// Update Donor
router.put("/:id", verifyToken, donorController.updateDonor);

// Delete Donor
router.delete("/:id", verifyToken, donorController.deleteDonor);

module.exports = router;