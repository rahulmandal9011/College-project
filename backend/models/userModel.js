/**
 * ==========================================================
 * Project : LifeStream
 * Module  : User Model
 * File    : userModel.js
 * Author  : Rahul Mandal
 *
 * Description:
 * This file handles ONLY database operations related
 * to the User table.
 *
 * No Business Logic
 * No Validation
 * No JWT
 * No Password Hashing
 * ==========================================================
 */

// Import Database Connection
const db = require("../config/db");

/**
 * ==========================================
 * Find User By Email
 * ==========================================
 *
 * Purpose:
 * Check whether the email already exists.
 *
 * Used In:
 * Register API
 * Login API
 */

const findUserByEmail = (email) => {

    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM users
            WHERE email = ?
        `;

        db.query(sql, [email], (err, result) => {

            if (err) {
                return reject(err);
            }

            resolve(result);

        });

    });

};

/**
 * ==========================================
 * Create New User
 * ==========================================
 *
 * Purpose:
 * Save new user into database.
 */

const createUser = (userData) => {

    return new Promise((resolve, reject) => {

        const sql = `
            INSERT INTO users
            (name,email,password,phone,role)
            VALUES (?,?,?,?,?)
        `;

        db.query(

            sql,

            [
                userData.name,
                userData.email,
                userData.password,
                userData.phone,
                userData.role
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
 * ==========================================
 * Find User By ID
 * ==========================================
 */

const findUserById = (id) => {

    return new Promise((resolve, reject) => {

        const sql = `
            SELECT *
            FROM users
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
 * ==========================================
 * Export Functions
 * ==========================================
 */

module.exports = {

    findUserByEmail,
    createUser,
    findUserById

};