//required files/dependencies
const connection = require("./config/connection");
const cTable = require('console-table');
const inquirer = require('inquirer');

const Employee = require('./classes/js/Employee');
const Department = require('./classes/js/Department');
const Role = require('./classes/js/Role');
const { appendFile } = require("fs");
const { default: prompt } = require("inquirer/lib/ui/prompt");

//if connection is made run app
connection.connect((error) => {
    if (error) throw error;
    app();
});

function promptUser() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                "VIEW ALL EMPLOYEES",
                "VIEW ALL DEPARTMENTS",
                "VIEW ALL ROLES",
                "VIEW EMPLOYEES BY MANAGER",
                "VIEW EMPLOYEES BY DEPARTMENT",
                "ADD A DEPARTMENT",
                "ADD A ROLE",
                "ADD AN EMPLOYEE",
                "UPDATE AN EMPLOYEES ROLE",
                "UPDATE EMPLOYEE'S MANAGER",
                "DELETE DEPARTMENT",
                "DELETE ROLE",
                "DELETE AN EMPLOYEE",
                "VIEW BUDGET OF DEPARTMENT",
                "EXIT"
            ]
        }
    ).then(question => {
        if (question.choice === "VIEW ALL EMPLOYEES") {
            let emp = new Employee(1, "a", "b", 1, 2);
            emp.ViewEmployee(connection);
            promptUser();
        }
        else if (question.choice === "VIEW ALL ROLES") {
            let role = new Role(1, "a", 2, 100, 2);
            role.ViewRoles(connection);
            promptUser();
        }
        else if (question.choice === "VIEW ALL DEPARTMENTS") {
            let dept = new Department("abc");
            dept.ViewDepartment(connection);
            promptUser();
        }
        else if (question.choice === "VIEW EMPLOYEES BY MANAGER") {
            let emp = new Employee(1, "a", "b", 1, 2);
        }
    })
}