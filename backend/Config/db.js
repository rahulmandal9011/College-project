// Import MySQL package
const mysql = require("mysql2");

// Create Database Connection
const connection = mysql.createConnection({

    host: process.env.DB_HOST,

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME

});

// Connect Database
connection.connect((err) => {

    if (err) {

        console.log("Database Connection Failed");

        console.log(err);

    } else {

        console.log("MySQL Connected Successfully");

    }

});

// Export Database Connection
module.exports = connection;