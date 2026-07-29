const db = require("../config/database");


/*
====================================================
 Get All Donors

 Purpose:
 Fetch available and verified donors

 Tables Used:
 users
 donor_profiles
 blood_groups

 Flow:
 users.user_id
        |
 donor_profiles.user_id

 donor_profiles.blood_group_id
        |
 blood_groups.blood_group_id

====================================================
*/


exports.getAllDonors = async () => {

    const query = `

        SELECT

            u.user_id,
            u.full_name,
            u.gender,
            u.city_id,
            u.profile_photo,

            d.donor_id,
            d.availability_status,
            d.last_donation_date,
            d.total_donations,

            b.blood_group


        FROM users u


        INNER JOIN donor_profiles d
        ON u.user_id = d.user_id


        INNER JOIN blood_groups b
        ON d.blood_group_id = b.blood_group_id


        WHERE 
            d.is_verified = 1
            AND d.availability_status = 'Available'


        ORDER BY 
            u.created_at DESC;

    `;


    const [rows] = await db.execute(query);


    return rows;

};