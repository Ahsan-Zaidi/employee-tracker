//required items
import connection from '../../config/connection.js';

//create Employee class with all of its functions
class Employee {
    constructor(id, fn, ln, rid, mid)
    {
        this.id = id;
        this.fn = fn;
        this.ln = ln;
        this.rid = rid;
        this.mid = mid;
    }
    //return the Id of an employee
    getId()
    {
        return this.id
    }
    //get first name of employee
    getFirstName()
    {
        return this.fn;
    }
    //return last name of employee
    getLastName()
    {
        return this.ln;
    }
    //return the employees role id
    getRid()
    {
        return this.rid;
    }
    //return manager id of employee
    getMgrId()
    {
        return this.mid;
    }
    //returns all the employees information in one query
    ViewEmployee(connection)
    {
        let sqlQuery = `Select e.id AS ID,CONCAT(e.first_name,' ', e.last_name) AS NAME, 
        CONCAT(m.first_name,' ',m.last_name) AS MANAGER,
        r.title AS TITLE, r.salary AS SALARY, d.name AS DEPARTMENT
        from employee e LEFT JOIN employee m ON  m.id=e.manager_id
        inner JOIN role r inner JOIN Department d ON r.id=e.role_id AND d.id=r.department_id ORDER BY E.ID ASC`;
        connection.query(sqlQuery, (err, res) => {
            if (err) {throw err}
            console.table(res);
        })
    }
    //view the employee by thier manager
    ViewEmployeeByMgr(connection)
    {
        let sqlQuery = `Select e.id AS ID,CONCAT(e.first_name,' ', e.last_name) AS EmployeeNAME, 
        CONCAT(m.first_name,' ',m.last_name) AS MANAGER
        from employee e LEFT JOIN employee m ON m.id=e.manager_id
        ORDER BY e.ID ASC`;
        connection.query(sqlQuery, (err, res) => {
            if (err) {throw err}
            console.table(res);
        })
    }
    //pulls the employee by the manager assigned
    ViewEmployeeByDpt(connection)
    {
        let sqlQuery = `Select e.id AS ID,CONCAT(e.first_name,' ', e.last_name) AS NAME, 
        d.name AS DEPARTMENT from employee e LEFT JOIN role r ON r.id=e.role_id LEFT JOIN department d ON d.id=r.department_id ORDER BY e.ID ASC`;
        connection.query(sqlQuery, (err, res) => {
            if (err) {throw err}
            console.table(res);
        })
    }
    //Add an Employee to the database
    addEmployee(connection, fn, ln, rID, mgrID)
    {
        let emp = [];
        emp.push(fn);
        emp.push(ln);
        emp.push(rID);
        emp.push(mgrID);
        console.log(emp)
        let sqlQuery = `INSERT INTO Employee(first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`;
        connection.query(sqlQuery, emp, (err, res) => {
            if (err) throw err;
        });
    }
    //Delete employee from the database
    DeleteEmp(connection, employeeID) {
        connection.query(`DELETE FROM employee WHERE id = ${employeeID}`, (err, res) => {
            console.log("Employee Deleted Sucessfully");
        });
    }
    //update an Employees manager
    updateMgr(connection, newMgr, empID)
    {
        console.log("empID"+empID)
        connection.query(`UPDATE employee SET manager_id = ${newMgr} WHERE id= "${empID}"`, (err, res) => {
            if (err) throw err;
        })
    }
}

//export Employee file
export default Employee;