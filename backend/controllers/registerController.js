// Import database connection
const db = require("../config/db");

// Import bcrypt to encrypt passwords
const bcrypt = require("bcrypt");

// ================================
// Register New User
// API : POST /api/register
// ================================

const registerUser = async (req, res) => {

    try {

        // Read data from request body
        const {
            name,
            email,
            password,
            phone,
            role
        } = req.body;

        // Check mandatory fields
        if (!name || !email || !password || !phone || !role) {

            return res.status(400).json({

                success: false,
                message: "Please fill all fields"

            });

        }

        // Check whether email already exists
        const checkEmailQuery =
            "SELECT * FROM users WHERE email = ?";

        db.query(checkEmailQuery, [email], async (err, result) => {

            if (err) {

                return res.status(500).json({

                    success: false,
                    message: "Database Error"

                });

            }

            // Email already exists
            if (result.length > 0) {

                return res.status(409).json({

                    success: false,
                    message: "Email already registered"

                });

            }

            // Encrypt password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Insert Query
            const insertQuery = `

            INSERT INTO users
            (name,email,password,phone,role)
            VALUES(?,?,?,?,?)

            `;

            db.query(

                insertQuery,

                [
                    name,
                    email,
                    hashedPassword,
                    phone,
                    role
                ],

                (err, result) => {

                    if (err) {

                        return res.status(500).json({

                            success: false,
                            message: "Registration Failed"

                        });

                    }

                    return res.status(201).json({

                        success: true,
                        message: "Registration Successful"

                    });

                }

            );

        });

    }

    catch (error) {

        console.log(error);

        return res.status(500).json({

            success: false,
            message: "Server Error"

        });

    }

};

// Export Function
module.exports = {

    registerUser

};