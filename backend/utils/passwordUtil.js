/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Password Utility
 * File    : passwordUtil.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Utility functions for password hashing and comparison.
 *
 * These functions are reusable throughout the project.
 * ==========================================================
 */

// Import bcrypt package
const bcrypt = require("bcrypt");

/**
 * ==========================================
 * Hash Password
 * ==========================================
 *
 * Description:
 * Converts a plain password into an encrypted password.
 *
 * Example:
 * Input  : Rahul@123
 * Output : $2b$10$A8df5....
 */

const hashPassword = async (password) => {

    try {

        // Salt Rounds = 10
        const hashedPassword = await bcrypt.hash(password, 10);

        return hashedPassword;

    } catch (error) {

        throw error;

    }

};

/**
 * ==========================================
 * Compare Password
 * ==========================================
 *
 * Description:
 * Compare entered password with encrypted password.
 *
 * Returns:
 * true  -> Password matches
 * false -> Password does not match
 */

const comparePassword = async (password, hashedPassword) => {

    try {

        const isMatch = await bcrypt.compare(password, hashedPassword);

        return isMatch;

    } catch (error) {

        throw error;

    }

};

/**
 * ==========================================
 * Export Utility Functions
 * ==========================================
 */

module.exports = {

    hashPassword,
    comparePassword

};