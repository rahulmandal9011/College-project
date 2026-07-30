/* -------------------------------------------------------------------------- */
/*                          Load Environment Variables                        */
/* -------------------------------------------------------------------------- */

// Loads variables from .env file into process.env
require("dotenv").config();

/* -------------------------------------------------------------------------- */
/*                               Import Modules                               */
/* -------------------------------------------------------------------------- */

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

/* -------------------------------------------------------------------------- */
/*                          Import Database Connection                        */
/* -------------------------------------------------------------------------- */

const db = require("./Config/db");


/* -------------------------------------------------------------------------- */
/*                               Import Routes                                */
/* -------------------------------------------------------------------------- */

const authRoutes = require("./routes/authRoutes");
// Donor Routes
const donorRoutes = require("./Routes/donorRoutes");

/* -------------------------------------------------------------------------- */
/*                         Create Express Application                         */
/* -------------------------------------------------------------------------- */

const app = express();

/* -------------------------------------------------------------------------- */
/*                              Global Middleware                             */
/* -------------------------------------------------------------------------- */

/**
 * Enable Cross-Origin Resource Sharing
 * Allows frontend to communicate with backend.
 */
app.use(cors());

/**
 * Helmet adds security-related HTTP headers.
 */
app.use(helmet());

/**
 * Morgan logs every API request in the console.
 */
app.use(morgan("dev"));

/**
 * Parse incoming JSON request body.
 */
app.use(express.json());

/**
 * Parse URL Encoded Form Data.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Parse Cookies.
 */
app.use(cookieParser());

/* -------------------------------------------------------------------------- */
/*                               Health Check API                             */
/* -------------------------------------------------------------------------- */

/**
 * GET /
 * Used to verify that the backend server is running.
 */
app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "LifeStream Backend API Running Successfully 🚀"

    });

});

/* -------------------------------------------------------------------------- */
/*                                API Routes                                  */
/* -------------------------------------------------------------------------- */

/**
 * Authentication Routes
 *
 * Base URL:
 * http://localhost:5000/api/auth
 */
app.use("/api/auth", authRoutes);

// Donor APIs
app.use("/api/donors", donorRoutes);

/* -------------------------------------------------------------------------- */
/*                              404 Error Handler                             */
/* -------------------------------------------------------------------------- */

/**
 * This middleware executes if no route matches.
 */
app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "API Route Not Found"

    });

});

/* -------------------------------------------------------------------------- */
/*                         Global Error Handling Middleware                   */
/* -------------------------------------------------------------------------- */

/**
 * Handles unexpected server errors.
 */
app.use((err, req, res, next) => {

    console.error("Server Error:", err);

    res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

});

/* -------------------------------------------------------------------------- */
/*                           Server Configuration                             */
/* -------------------------------------------------------------------------- */

// Read Port Number from .env file
const PORT = process.env.PORT || 5000;

/* -------------------------------------------------------------------------- */
/*                            Start Application                               */
/* -------------------------------------------------------------------------- */

async function startServer() {

    try {

        /**
         * Test Database Connection
         */
        const connection = await db.getConnection();

        console.log("✅ MySQL Connected Successfully");

        connection.release();

        /**
         * Start Express Server
         */
        app.listen(PORT, () => {

            console.log("======================================");

            console.log("🚀 LifeStream Backend Started");

            console.log(`🌐 Server URL : http://localhost:${PORT}`);

            console.log(`📅 Started On : ${new Date().toLocaleString()}`);

            console.log("======================================");

        });

    }

    catch (error) {

        console.error("❌ Database Connection Failed");

        console.error(error.message);

    }

}

/**
 * Start the application
 */
startServer();