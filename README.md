# employee-tracker

<h1 align="center">Employee Tracker Using MySQL, Inquirer, Console.Table and Node.js 👋</h1>
  
<p align="center">
    <img src="https://img.shields.io/github/repo-size/jpd61/employee-tracker" />
    <img src="https://img.shields.io/github/languages/top/jpd61/employee-tracker"  />
    <img src="https://img.shields.io/github/issues/jpd61/employee-tracker" />
    <img src="https://img.shields.io/github/last-commit/jpd61/employee-tracker" >
    <a href="https://github.com/jpd61"><img src="https://img.shields.io/github/followers/jpd61?style=social" target="_blank" /></a>
    <a href="https://twitter.com/jpdewoody">
        <img alt="Twitter: jpdewoody" src="https://img.shields.io/twitter/follow/jpdewoody.svg?style=social" target="_blank" />
    </a>
</p>
  
<p align="center">
    <img src="https://img.shields.io/badge/Javascript-yellow" />
    <img src="https://img.shields.io/badge/jQuery-blue"  />
    <img src="https://img.shields.io/badge/-node.js-green" />
    <img src="https://img.shields.io/badge/-inquirer-red" >
    <img src="https://img.shields.io/badge/-screencastify-lightgrey" />
    <img src="https://img.shields.io/badge/-json-orange" />
    <img src="https://img.shields.io/badge/mySQL-blue"  />
    <img src="https://img.shields.io/badge/inquirer-green" />
</p>

<h4>Designed and coded by <a href="https://github.com/Ahsan-Zaidi">Ahsan Zaidi</a></h4>

## Description

🔍 A node.js application that uses user input from inquirer to populate an employee tracker database displaying members of a company.

* [GitHub Repository](https://github.com/Ahsan-Zaidi/employee-tracker)

* [Employee Tracker](./assets/images/Screenshot.jpg)
  
💻 Below is the gif showing the functionality of the application:
  
![Employee Tracker](./assets/demo/Demos.gif)
  
## User Requirements
  
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business

## Project Requirements
   
GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database

  
## Table of Contents
- [Description](#description)
- [User Requirements](#user-requirements)
- [Project Requirements](#project-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
💾   
  
`npm init`
  
`npm install inquirer`

`npm install mysql2`

`npm install console-table`
  
## Usage
💻   
  
Run the following command at the root of your project and answer the prompted questions:
  
`node server.js`

## Testing
✏️

No testing is currently set up

## License

  ✋ This project is licensed under MIT license.

## Contribution

  👪email me 

## Questions

 If you have any queries feel free to contact me at ✉️ Zaidiahsan.r@gmail.com.
 You can also reach me out through my Github profile at  👋[Ahsan-Zaidi]