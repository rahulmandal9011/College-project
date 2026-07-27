// Database Connection
const db = require("../config/db");

// Password Encryption Package
const bcrypt = require("bcrypt");

// JWT Package
const jwt = require("jsonwebtoken");

// =============================================
// Login User
// API : POST /api/login
// =============================================

const loginUser = (req, res) => {

    // Read Email & Password from Request Body
    const { email, password } = req.body;

    // Validate Input
    if (!email || !password) {

        return res.status(400).json({

            success: false,
            message: "Email and Password are required"

        });

    }

    // SQL Query
    const sql = "SELECT * FROM users WHERE email = ?";

    db.query(sql, [email], async (err, result) => {

        // Database Error
        if (err) {

            return res.status(500).json({

                success: false,
                message: "Database Error"

            });

        }

        // Email Not Found
        if (result.length === 0) {

            return res.status(404).json({

                success: false,
                message: "User not found"

            });

        }

        // Store User Data
        const user = result[0];

        // Compare Password
        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.status(401).json({

                success: false,
                message: "Invalid Password"

            });

        }

        // Generate JWT Token
        const token = jwt.sign(

            {

                id: user.id,
                email: user.email,
                role: user.role

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "2h"

            }

        );

        // Success Response
        res.status(200).json({

            success: true,

            message: "Login Successful",

            token,

            user: {

                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role

            }

        });

    });

};

// Export Function
module.exports = {

    loginUser

};