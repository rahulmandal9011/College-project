/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Donor Service
 * File    : donorService.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Handles all business logic related to Donor Management.
 * ==========================================================
 */

const donorModel = require("../models/donorModel");

/**
 * ==========================================================
 * Add New Donor
 * ==========================================================
 */
const createDonor = async (donorData) => {

    const {
        full_name,
        age,
        gender,
        blood_group,
        phone,
        email,
        address,
        city,
        state,
        pincode
    } = donorData;

    // Validate Required Fields
    if (
        !full_name ||
        !age ||
        !gender ||
        !blood_group ||
        !phone
    ) {
        throw new Error("Please fill all required fields.");
    }

    // Save Donor
    const result = await donorModel.createDonor(donorData);

    return {
        success: true,
        message: "Donor added successfully.",
        donorId: result.insertId
    };

};

/**
 * ==========================================================
 * Get All Donors
 * ==========================================================
 */
const getAllDonors = async () => {

    const donors = await donorModel.getAllDonors();

    return {
        success: true,
        total: donors.length,
        data: donors
    };

};

/**
 * ==========================================================
 * Get Donor By ID
 * ==========================================================
 */
const getDonorById = async (id) => {

    const donor = await donorModel.getDonorById(id);

    if (donor.length === 0) {

        throw new Error("Donor not found.");

    }

    return {
        success: true,
        data: donor[0]
    };

};

/**
 * ==========================================================
 * Update Donor
 * ==========================================================
 */
const updateDonor = async (id, donorData) => {

    const donor = await donorModel.getDonorById(id);

    if (donor.length === 0) {

        throw new Error("Donor not found.");

    }

    await donorModel.updateDonor(id, donorData);

    return {
        success: true,
        message: "Donor updated successfully."
    };

};

/**
 * ==========================================================
 * Delete Donor
 * ==========================================================
 */
const deleteDonor = async (id) => {

    const donor = await donorModel.getDonorById(id);

    if (donor.length === 0) {

        throw new Error("Donor not found.");

    }

    await donorModel.deleteDonor(id);

    return {
        success: true,
        message: "Donor deleted successfully."
    };

};

/**
 * ==========================================================
 * Export Functions
 * ==========================================================
 */

module.exports = {

    createDonor,
    getAllDonors,
    getDonorById,
    updateDonor,
    deleteDonor

};