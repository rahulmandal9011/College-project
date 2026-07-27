/**
 * ==========================================================
 * Project : LifeStream
 * File    : server.js
 * Author  : Rahul Mandal
 *
 * Description:
 * Entry point of the LifeStream Backend Application.
 * Responsible for:
 * 1. Loading environment variables
 * 2. Connecting to MySQL Database
 * 3. Configuring Middlewares
 * 4. Registering API Routes
 * 5. Starting Express Server
 * ==========================================================
 */

// ==========================================================
// Import Required Packages
// ==========================================================

// Express Framework
const express = require("express");

// Enable Cross-Origin Resource Sharing
const cors = require("cors");

// Load Environment Variables
require("dotenv").config();

// ==========================================================
// Create Express Application
// ==========================================================

const app = express();

// ==========================================================
// Database Connection
// ==========================================================

// Importing this file automatically establishes
// the MySQL database connection.
require("./config/db");

// ==========================================================
// Import API Routes
// ==========================================================

// Authentication Routes
const authRoutes = require("./routes/authRoutes");

// ==========================================================
// Global Middlewares
// ==========================================================

// Enable CORS
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Parse URL Encoded Form Data
app.use(express.urlencoded({ extended: true }));

// ==========================================================
// Register API Routes
// ==========================================================

// Base URL
// http://localhost:5000/api/auth
app.use("/api/auth", authRoutes);

// ==========================================================
// Health Check API
// ==========================================================

// Used to verify server is running
app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "🚀 LifeStream Backend Running Successfully"

    });

});

// ==========================================================
// 404 Route Handler
// ==========================================================

// If no route matches
app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "API Route Not Found"

    });

});

// ==========================================================
// Start Server
// ==========================================================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log("===============================================");
    console.log("🚀 LifeStream Backend Started Successfully");
    console.log("===============================================");
    console.log(`🌐 Server URL : http://localhost:${PORT}`);
    console.log(`📡 API Base   : http://localhost:${PORT}/api`);
    console.log(`🔐 Auth API   : http://localhost:${PORT}/api/auth`);
    console.log("===============================================");

});