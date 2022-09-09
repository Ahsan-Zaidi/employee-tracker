//required items
const cTable = require('console.table');

//creating Role class with all related functions
class Role {
    constructor(id, title, salary, did)
    {
        this.id = id;
        this.title = title;
        this.salary = salary;
        this.did = did;
    }
    //get Id
    getID()
    {
        return this.id;
    }
    //get the title
    getTitle()
    {
        return this.title;
    }
    //get the salary of role
    getSalary()
    {
        return this.salary;
    }
    //get the department id
    getDid()
    {
        return this.did;
    }
    //view all roles
    ViewRoles(connection)
    {
        let sqlQuery = `Select r.id AS ID, 
        r.title AS TITLE, r.salary AS SALARY, d.name AS DEPARTMENT
        from Role r LEFT JOIN Department d ON  r.department_id=d.id ORDER BY r.ID ASC`;
        connection.query(sqlQuery, (err, res) => {
            if (err) {throw err}
            console.table(res);
        })
    }
    //add a role to the database
    addRole(connection, title, salary, dept)
    {
        let role = [];
        role.push(title);
        role.push(salary);
        role.push(dept);
        let sqlQuery = `INSERT INTO role(title,salary,department_id) VALUES (?,?,?)`;
        connection.query(sqlQuery, role, (err, res) => {
            if (err) throw err;
        });
    }
    //update a role in the database
    updateRole(connection, newID, oldRole)
    {
        connection.query(
            `UPDATE employee SET role_id = ${newID} WHERE id = ${oldRole}`, (err, res) => {
              if (err) throw err;
            }
          )
    }
}

//export the Role file
module.exports = Role;