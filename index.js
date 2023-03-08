const mysql = require('mysql2');
const inquirer = require("inquirer");
const table = require("console.table");

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
        message: "What would you like to do?",
        type: "list",
        choices: [
            "Add Department",
            "Add Role",
            "Add Employee",
            "View All Departments",
            "View All Employees",
            "Update Employee Role",
            "Delete Employee",
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
        if (answers.selection === "Delete Employee"){
            deleteEmployee();
        }
        if (answers.selection === "QUIT"){
            connection.end();
        };
    });
};

function addDepartment(){
    inquirer.prompt([{
        type: "input",
        name: "department",
        message: "What department would you like to add?"
    }, ]).then(function(res) {
        connection.query("INSERT INTO department (name) VALUES (?)", [res.department], function(err, data) {
            if (err) throw err;
            console.table(data);
            askQuestions();
        })
    })
};

function addRole(){
    inquirer.prompt([
    {
        message: "Enter your title:",
        type: "input",
        name: "title"
    }, {
        message: "Enter your salary:",
        type: "number",
        name: "salary"
    }, {
        message: "Enter your department ID:",
        type: "number",
        name: "department_id"
    }
    ]).then(function (res) {
        connection.query("INSERT INTO role (title, salary, department_id) values (?, ?, ?)", [res.title, res.salary, res.department_id], function (err, data) {
            console.table(data);
        })
        askQuestions();
    })
};

function addEmployee(){
    inquirer.prompt([{
        type: "input",
        name: "first_name",
        message: "What is the employees first name?"
    },
    {
        type: "input",
        name: "last_name",
        message: "What is the employees last name?"
    },
    {
        type: "number",
        name: "role_id",
        message: "What is the employees role ID"
    },
    {
        type: "number",
        name: "manager_id",
        message: "What is the employees manager's ID?"
    }
]).then(function(res) {
    connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`, [res.first_name, res.last_name, res.role_id, res.manager_id], function(err, data) {
        if (err) throw err;
        console.log(data);
        askQuestions();
    })
})
};

function viewDepartments(){
    connection.query("SELECT * FROM department", function(err, data){
        console.table(data);
        askQuestions();
    })
};

function viewEmployees(){
    connection.query("SELECT * FROM employee", function(err, data){
        console.table(data);
        askQuestions();
    })
};

function updateEmployeeRole(){
    inquirer.prompt([
        {
            message: "Which employee would you like to update?",
            type: "input",
            name: "name"
        }, {
            message: "Enter the new role ID:",
            type: "number",
            name: "role_id"
        }
    ]).then(function (res) {
        connection.query("UPDATE employee SET role_id = ? WHERE first_name = ?", [res.role_id, res.name], function (err, data) {
            console.table(data);
        })
        askQuestions();
    })

};

function deleteEmployee(){
    inquirer.prompt([
        {
            message: "Which employee would you like to delete?",
            type: "input",
            name: "employee_id"
        }
    ]).then(function (res) {
        connection.query("DELETE FROM employee WHERE id = ?", [res.employee_id], function (err, data) {
            console.table(data);
        })
        askQuestions();
    })

};