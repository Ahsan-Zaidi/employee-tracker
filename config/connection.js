//required items
import mysql from 'mysql2'

//create connection
const connection = mysql.createConnection(
    {
    host: 'localhost',
    user: 'root',
    password: "moz12345",
    database: 'EmployeeDB'
    },
    console.log(`Successfully connected to employee Database!`)
);

//export the connection file
export default connection;