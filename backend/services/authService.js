/******************************************************************************
 * File Name    : authService.js
 * Description  : Business Logic for Authentication
 ******************************************************************************/

// Import bcrypt for password hashing
const bcrypt = require("bcrypt");

// Import MySQL connection pool
const db = require("../Config/db");

// Import User Model
const userModel = require("../models/userModel");

/**
 * Register New User
 */
const registerUser = async (userData) => {

    // Check email already exists
    const emailExists = await userModel.findUserByEmail(userData.email);

    if (emailExists) {
        throw new Error("Email already registered.");
    }

    // Check mobile already exists
    const mobileExists = await userModel.findUserByMobile(userData.mobile);

    if (mobileExists) {
        throw new Error("Mobile number already registered.");
    }

    // Encrypt password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Replace plain password with hashed password
    userData.password_hash = hashedPassword;

    // Open database transaction
    const connection = await db.getConnection();

    try {

        // Begin transaction
        await connection.beginTransaction();

        // Insert into users table
        const userId = await userModel.createUser(connection, userData);

        // Donor Registration
        if (Number(userData.role_id) === 2) {

            await userModel.createDonorProfile(connection, userId, {

                blood_group_id: 1, // Temporary default value

                weight: userData.weight || null,

                height: userData.height || null,

                medical_conditions: userData.medical_conditions || null,

                emergency_contact_name: null,

                emergency_contact_number: null

            });

        }

        // Hospital Registration
        else if (Number(userData.role_id) === 3) {

            await userModel.createHospitalProfile(connection, userId, {

                hospital_name: userData.hospital_name,

                registration_number: userData.registration_no,

                hospital_type: "Private"

            });

        }

        // Patient Registration
        else if (Number(userData.role_id) === 4) {

            await userModel.createPatientProfile(connection, userId, {

                blood_group_id: 1, // Temporary default value

                disease: userData.disease || null,

                doctor_name: userData.doctor_name || null

            });

        }

        // Save all records
        await connection.commit();

        return {

            success: true,

            message: "Registration Successful",

            userId: userId

        };

    }
    catch (error) {

        // Undo all database changes
        await connection.rollback();

        throw error;

    }
    finally {

        // Release database connection
        connection.release();

    }

};

// Export service methods
module.exports = {

    registerUser

};