// Load Environment Variables
require("dotenv").config();

// Import Packages
const express = require("express");
const cors = require("cors");

// Database Connection
require("./config/db");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const donorRoutes = require("./routes/donorRoutes");

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/donors", donorRoutes);

// Default Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 LifeStream Backend Running Successfully"
    });
});

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("==================================");
    console.log("🚀 LifeStream Backend Started");
    console.log(`🌐 Server : http://localhost:${PORT}`);
    console.log(`🔐 Auth API : http://localhost:${PORT}/api/auth`);
    console.log(`🩸 Donor API : http://localhost:${PORT}/api/donors`);
    console.log("==================================");
});