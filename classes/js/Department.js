const cTable = require('console.table');

//create Department class with all functions
class Department {
    constructor(NAME)
    {
        this.NAME = NAME;
    }
    //return the name of department
    getDeptName()
    {
        return this.NAME;
    }
    //return Department
    ViewDepartment(connection)
    {
        let sqlQuery = `selest id AS ID, name as Department from department`;
        connection.query(sqlQuery, (err, res) => {
            if (err) {throw err}
            console.table(res);
        })
    }
    //Add a department to Database
    AddDepartment(connection, Name)
    {
        let sqlQuery = `INSERT INTO department (name) VALUES (?);`
        connection.query(sqlQuery, Name, (err, res) => {
            if (err) throw err;
        });
    }
    //Delete department from the database
    DeleteDepartment(connection, name)
    {
        let sqlQuery = `DELETE FROM DEPARTMENT WHERE name=?`;
        connection.query(sqlQuery, name, (err, res) => {
            if (err) throw err;
        })
    }
}
//export Department file
module.exports = Department;