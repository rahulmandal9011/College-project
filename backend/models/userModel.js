/******************************************************************************
 * File Name    : userModel.js
 * Description  : Database operations for User Registration
 ******************************************************************************/

// Import MySQL connection pool
const db = require("../Config/db");

/**
 * Find user by email
 */
const findUserByEmail = async (email) => {

    const sql = `
        SELECT user_id
        FROM users
        WHERE email = ?
    `;

    const [rows] = await db.execute(sql, [email]);

    return rows.length > 0 ? rows[0] : null;
};

/**
 * Find user by mobile number
 */
const findUserByMobile = async (mobile) => {

    const sql = `
        SELECT user_id
        FROM users
        WHERE mobile = ?
    `;

    const [rows] = await db.execute(sql, [mobile]);

    return rows.length > 0 ? rows[0] : null;
};

/**
 * Find user by email for login
 */
const findUserForLogin = async (email) => {

    const sql = `
        SELECT
            user_id,
            role_id,
            full_name,
            email,
            password_hash,
            is_active
        FROM users
        WHERE email = ?
    `;

    const [rows] = await db.execute(sql, [email]);

    return rows.length > 0 ? rows[0] : null;

};

/**
 * Insert user into users table
 */
const createUser = async (connection, userData) => {

    const sql = `
        INSERT INTO users
        (
            role_id,
            country_id,
            state_id,
            city_id,
            full_name,
            email,
            mobile,
            password_hash,
            gender,
            date_of_birth,
            address,
            postal_code,
            email_verified,
            mobile_verified,
            is_active
        )
        VALUES
        (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await connection.execute(sql, [

        userData.role_id,

        null,      // country_id

        null,      // state_id

        null,      // city_id

        userData.full_name,

        userData.email,

        userData.mobile,

        userData.password_hash,

        userData.gender,

        userData.date_of_birth,

        userData.address,

        userData.postal_code,

        0,

        0,

        1

    ]);

    return result.insertId;

};

/**
 * Insert donor profile
 */
const createDonorProfile = async (connection, userId, donorData) => {

    const sql = `
        INSERT INTO donor_profiles
        (
            user_id,
            blood_group_id,
            weight,
            height,
            medical_conditions,
            emergency_contact_name,
            emergency_contact_number
        )
        VALUES
        (?, ?, ?, ?, ?, ?, ?)
    `;

    await connection.execute(sql, [

        userId,

        donorData.blood_group_id,

        donorData.weight,

        donorData.height,

        donorData.medical_conditions,

        donorData.emergency_contact_name,

        donorData.emergency_contact_number

    ]);

};

/**
 * Insert hospital profile
 */
const createHospitalProfile = async (connection, userId, hospitalData) => {

    const sql = `
        INSERT INTO hospital_profiles
        (
            user_id,
            hospital_name,
            registration_number,
            hospital_type
        )
        VALUES
        (?, ?, ?, ?)
    `;

    await connection.execute(sql, [

        userId,

        hospitalData.hospital_name,

        hospitalData.registration_number,

        hospitalData.hospital_type || "Private"

    ]);

};

/**
 * Insert patient profile
 */
const createPatientProfile = async (connection, userId, patientData) => {

    const sql = `
        INSERT INTO patient_profiles
        (
            user_id,
            blood_group_id,
            disease,
            doctor_name
        )
        VALUES
        (?, ?, ?, ?)
    `;

    await connection.execute(sql, [

        userId,

        patientData.blood_group_id,

        patientData.disease,

        patientData.doctor_name

    ]);

};

// Export all database functions
module.exports = {

    findUserByEmail,

    findUserByMobile,

    findUserForLogin,

    createUser,

    createDonorProfile,

    createHospitalProfile,

    createPatientProfile

};