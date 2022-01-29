const mysql = require('mysql');
const inquirer = require("inquirer");
const table = require("console.table");
const { allowedNodeEnvironmentFlags } = require('process');
const { Resolver } = require('dns');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "departmentEmployees_db"
});

connection.connect(function (err) {
    if (err) throw err;
    askQuestions();
});

function askQuestions(){
    inquirer.prompt({
        message: "What would you like to do?"
        type: "list"
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View All Departments",
            "View All Employees",
            "Update Employee Role",
            "QUIT"
        ],
        name: "selection"
    }).then(answers => {
        if (answers.selection === "Add Department"){
            addDepartment();
        }
        if (answers.selection === "Add Role"){
            addRole();
        }
        if (answers.selection === "Add Employee"){
            addEmployee();
        }
        if (answers.selection === "View All Departments"){
            viewDepartments();
        }
        if (answers.selection === "View All Employees"){
            viewEmployees();;
        }
        if (answers.selection === "Update Employee Role"){
            updateEmployeeRole();
        }
        if (answers.selection === "QUIT"){
            connection.end();
        };
    });
};

function addDepartment(){};

function addRole(){};

function addEmployee(){};

function viewDepartments(){};

function viewEmployees(){};

function updateEmployeeRole(){};