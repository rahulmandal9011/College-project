/******************************************************************************
 * File Name    : donorModel.js
 * Description  : Database queries related to donors
 ******************************************************************************/

// Import database connection
const db = require("../config/db");

/**
 * Get all available and verified donors
 */
const getAllDonors = async () => {

    // SQL query to fetch donor details
    const query = `
        SELECT

            u.user_id,
            u.full_name,
            u.email,
            u.mobile,
            u.gender,
            u.date_of_birth,

            c.city_name,

            bg.blood_group,

            dp.availability_status,
            dp.last_donation_date,
            dp.total_donations

        FROM users u

        INNER JOIN donor_profiles dp
            ON u.user_id = dp.user_id

        INNER JOIN blood_groups bg
            ON dp.blood_group_id = bg.blood_group_id

        LEFT JOIN cities c
            ON u.city_id = c.city_id

        WHERE
            u.is_active = 1
            AND dp.is_verified = 1
            AND dp.availability_status = 'Available'

        ORDER BY u.full_name ASC
    `;

    // Execute SQL query
    const [rows] = await db.execute(query);

    // Return donor list
    return rows;

};

// Export function
module.exports = {

    getAllDonors

};