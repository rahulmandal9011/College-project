/**
 * ==========================================================
 * Project : LifeStream
 * Module  : Authentication Service
 * File    : authService.js
 *
 * Description:
 * Handles business logic for user registration and login.
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

    const {
        fullName,
        email,
        mobile,
        password,
        bloodGroup,
        gender,
        dob,
        weight,
        city,
        state,
        address,
        lastDonationDate,
        available
    } = userData;

    // Required fields
    if (
        !fullName ||
        !email ||
        !mobile ||
        !password ||
        !bloodGroup ||
        !gender ||
        !dob ||
        !weight ||
        !city ||
        !state ||
        !address
    ) {
        throw new Error("All fields are required.");
    }

    // Check email
    const existingUser = await userModel.findUserByEmail(email);

    if (existingUser.length > 0) {
        throw new Error("Email already registered.");
    }

    // Encrypt Password
    const hashedPassword = await hashPassword(password);

    // Save User
    await userModel.createUser({

        fullName,
        email,
        mobile,
        password: hashedPassword,
        bloodGroup,
        gender,
        dob,
        weight,
        city,
        state,
        address,
        lastDonationDate,
        available

    });

    return {

        success: true,
        message: "Registration Successful"

    };

};

/**
 * Login User
 */
const login = async (email, password) => {

    if (!email || !password) {
        throw new Error("Email and Password are required.");
    }

    // Find user
    const users = await userModel.findUserByEmail(email);

    if (users.length === 0) {
        throw new Error("Invalid Email.");
    }

    const user = users[0];

    // Compare password
    const validPassword = await comparePassword(
        password,
        user.password
    );

    if (!validPassword) {
        throw new Error("Invalid Password.");
    }

    // Generate JWT
    const token = generateToken(user);

    return {

        success: true,

        message: "Login Successful",

        token,

        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }

    };

};

module.exports = {

    register,

    login

};