/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Donor Model
 * File    : donorModel.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Handles all database operations related to the Donors table.
 * This file should only contain SQL queries.
 * ==========================================================
 */

const db = require("../config/db");

/**
 * ==========================================================
 * Create New Donor
 * ==========================================================
 */
const createDonor = (donorData) => {

    return new Promise((resolve, reject) => {

        const sql = `
            INSERT INTO donors
            (
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
            )
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(
            sql,
            [
                donorData.full_name,
                donorData.age,
                donorData.gender,
                donorData.blood_group,
                donorData.phone,
                donorData.email,
                donorData.address,
                donorData.city,
                donorData.state,
                donorData.pincode
            ],
            (err, result) => {

                if (err) {
                    return reject(err);
                }

                resolve(result);

            }
        );

    });

};

/**
 * ==========================================================
 * Get All Donors
 * ==========================================================
 */
const getAllDonors = () => {

    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM donors
            ORDER BY id DESC
        `;

        db.query(sql, (err, result) => {

            if (err) {
                return reject(err);
            }

            resolve(result);

        });

    });

};

/**
 * ==========================================================
 * Get Donor By ID
 * ==========================================================
 */
const getDonorById = (id) => {

    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM donors
            WHERE id = ?
        `;

        db.query(sql, [id], (err, result) => {

            if (err) {
                return reject(err);
            }

            resolve(result);

        });

    });

};

/**
 * ==========================================================
 * Update Donor
 * ==========================================================
 */
const updateDonor = (id, donorData) => {

    return new Promise((resolve, reject) => {

        const sql = `
            UPDATE donors
            SET
                full_name = ?,
                age = ?,
                gender = ?,
                blood_group = ?,
                phone = ?,
                email = ?,
                address = ?,
                city = ?,
                state = ?,
                pincode = ?
            WHERE id = ?
        `;

        db.query(
            sql,
            [
                donorData.full_name,
                donorData.age,
                donorData.gender,
                donorData.blood_group,
                donorData.phone,
                donorData.email,
                donorData.address,
                donorData.city,
                donorData.state,
                donorData.pincode,
                id
            ],
            (err, result) => {

                if (err) {
                    return reject(err);
                }

                resolve(result);

            }
        );

    });

};

/**
 * ==========================================================
 * Delete Donor
 * ==========================================================
 */
const deleteDonor = (id) => {

    return new Promise((resolve, reject) => {

        const sql = `
            DELETE FROM donors
            WHERE id = ?
        `;

        db.query(sql, [id], (err, result) => {

            if (err) {
                return reject(err);
            }

            resolve(result);

        });

    });

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