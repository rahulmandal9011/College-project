/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Donor Controller
 * File    : donorController.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Handles all HTTP Requests related to Donor Module.
 * Controller receives requests, calls Service layer,
 * and sends HTTP responses.
 * ==========================================================
 */

const donorService = require("../services/donorService");

/**
 * ==========================================================
 * Create Donor
 * Method : POST
 * URL    : /api/donors
 * ==========================================================
 */
const createDonor = async (req, res) => {

    try {

        const result = await donorService.createDonor(req.body);

        return res.status(201).json(result);

    } catch (error) {

        return res.status(400).json({

            success: false,
            message: error.message

        });

    }

};

/**
 * ==========================================================
 * Get All Donors
 * Method : GET
 * URL    : /api/donors
 * ==========================================================
 */
const getAllDonors = async (req, res) => {

    try {

        const result = await donorService.getAllDonors();

        return res.status(200).json(result);

    } catch (error) {

        return res.status(500).json({

            success: false,
            message: error.message

        });

    }

};

/**
 * ==========================================================
 * Get Donor By ID
 * Method : GET
 * URL    : /api/donors/:id
 * ==========================================================
 */
const getDonorById = async (req, res) => {

    try {

        const result = await donorService.getDonorById(req.params.id);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(404).json({

            success: false,
            message: error.message

        });

    }

};

/**
 * ==========================================================
 * Update Donor
 * Method : PUT
 * URL    : /api/donors/:id
 * ==========================================================
 */
const updateDonor = async (req, res) => {

    try {

        const result = await donorService.updateDonor(

            req.params.id,

            req.body

        );

        return res.status(200).json(result);

    } catch (error) {

        return res.status(400).json({

            success: false,
            message: error.message

        });

    }

};

/**
 * ==========================================================
 * Delete Donor
 * Method : DELETE
 * URL    : /api/donors/:id
 * ==========================================================
 */
const deleteDonor = async (req, res) => {

    try {

        const result = await donorService.deleteDonor(req.params.id);

        return res.status(200).json(result);

    } catch (error) {

        return res.status(400).json({

            success: false,
            message: error.message

        });

    }

};

/**
 * ==========================================================
 * Export Controller Functions
 * ==========================================================
 */

module.exports = {

    createDonor,
    getAllDonors,
    getDonorById,
    updateDonor,
    deleteDonor

};