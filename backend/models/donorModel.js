const db = require("../Config/db");


const Donor = {


    createProfile: (data, callback) => {


        const query = `

INSERT INTO donor_profiles
(
user_id,
blood_group_id,
weight,
last_donation_date,
availability_status
)

VALUES(?,?,?,?,?)

`;



        db.query(

            query,

            [
                data.user_id,
                data.blood_group_id,
                data.weight,
                data.last_donation_date,
                data.availability_status
            ],

            callback

        );


    }


};


module.exports = Donor;