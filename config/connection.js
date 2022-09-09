//required items
const mysql = require('mysql2');
require('dotenv').config();

//create connection
const connection = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: "moz12345",
    database: 'employee_db'
    },
    console.log(`Successfully connected to employee Database!`)
);

//export the connection file
module.exports = connection;