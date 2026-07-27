/**
 * ==========================================================
 * Project : LifeStream
 * Module  : JWT Utility
 * File    : jwtUtil.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Generate and Verify JWT Tokens.
 * ==========================================================
 */

const jwt = require("jsonwebtoken");

/**
 * Generate JWT Token
 */
const generateToken = (user) => {

    const payload = {

        id: user.id,
        email: user.email,
        role: user.role

    };

    return jwt.sign(

        payload,

        process.env.JWT_SECRET,

        {

            expiresIn: "2h"

        }

    );

};

/**
 * Verify JWT Token
 */
const verifyToken = (token) => {

    return jwt.verify(

        token,

        process.env.JWT_SECRET

    );

};

module.exports = {

    generateToken,
    verifyToken

};