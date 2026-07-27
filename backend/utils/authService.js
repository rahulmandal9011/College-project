/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Authentication Service
 * File    : authService.js
 *
 * Description:
 * Business logic for Register & Login.
 * ==========================================================
 */

const userModel = require("../models/userModel");

const {

    hashPassword,
    comparePassword

} = require("../utils/passwordUtil");

const {

    generateToken

} = require("../utils/jwtUtil");

/**
 * Register User
 */
const register = async (userData) => {

    // Check Email
    const existingUser = await userModel.findUserByEmail(userData.email);

    if (existingUser.length > 0) {

        throw new Error("Email already registered");

    }

    // Encrypt Password
    userData.password = await hashPassword(userData.password);

    // Save User
    await userModel.createUser(userData);

    return {

        success: true,
        message: "Registration Successful"

    };

};

/**
 * Login User
 */
const login = async (email, password) => {

    const user = await userModel.findUserByEmail(email);

    if (user.length === 0) {

        throw new Error("Invalid Email");

    }

    const validPassword = await comparePassword(

        password,

        user[0].password

    );

    if (!validPassword) {

        throw new Error("Invalid Password");

    }

    // Generate JWT

    const token = generateToken(user[0]);

    return {

        success: true,

        message: "Login Successful",

        token,

        user: {

            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
            role: user[0].role

        }

    };

};

module.exports = {

    register,

    login

};