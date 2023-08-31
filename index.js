const express = require('express');
const mysql = require('mysql2');
const fs = require('fs');
const inquirer = require('inquirer');
const Table = require('cli-table');
const PORT = process.env.PORT || 3001;
const app = express();
/* -----> Express middleware <----- */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
/* -----> Connect to DB <----- */
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);
/* -----> INIT FUNCTION <----- */
async function init() {
    try {
        const userInput = await inquirer_init();

        await selection(userInput);


    } catch (error) {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
        } else {
            console.error('Something else went wrong', error);
        }
    }
}
/* -----> INIT INQUIRER <----- */
async function inquirer_init() {
    const answers = await inquirer.prompt([
        {
            type: 'list',
            message: "What would you like to do?",
            choices: ['View All Departments',
                'Add Department',
                'View All Roles',
                'Add Role',
                'View All Employees',
                'Add Employee',
                'Update Existing Record'
            ],
            name: 'initiate'
        }
    ]);
    return answers;
}
/* ----->  USER RESPONSE INQUIRER <----- */
async function selection(userInput){
    let db_table = '';

    switch (userInput.initiate) {
        case 'Add Department':
            db_table = 'department';

            const answers = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'id_input',
                    message: "Enter department id:",
                },
                {
                    type: 'input',
                    name: 'name_input',
                    message: "Enter department name:",
                },
            ]);


            try {
                (rows) = await db.execute(`INSERT INTO ${db_table} (id, name) VALUES (?, ?)`, [answers.id_input, answers.name_input]);
                console.log(`Row inserted with ID: ${rows.insertId}`);
            } catch (error) {
                console.error(error);
            }

            init();
            break;


        case 'Add Role':
            db_table = 'role';
            db.query(`SELECT * FROM ${db_table}`, function (err, results) {
                if (err) {
                    console.error(err);
                } else {
                    // Create a new table instance
                    const table = new Table({
                        head: ['id', 'title', 'salary', 'department_id'],
                        colWidths: [10, 30, 30, 30] // Adjust column widths as needed
                    });

                    results.forEach(row => {
                        table.push([row.id, row.name]);
                    });

                    // Print the table to the console
                    console.log(table.toString());

                }

                // Close the database connection
                db.end();
            });

            break;
        case 'Add Employee':
            db_table = 'employee';
            db.query(`SELECT * FROM ${db_table}`, function (err, results) {
                if (err) {
                    console.error(err);
                } else {
                    // Create a new table instance
                    const table = new Table({
                        head: ['id', 'first_name', 'last_name', 'role_id', 'manager_id'],
                        colWidths: [10, 30, 30, 30, 30] // Adjust column widths as needed
                    });

                    results.forEach(row => {
                        table.push([row.id, row.name]);
                    });

                    // Print the table to the console
                    console.log(table.toString());
                }

               init();
            });

            break;

        case 'View All Departments':
            db_table = 'department';
            db.query(`SELECT * FROM ${db_table}`, function (err, results) {
                if (err) {
                    console.error(err);
                } else {
                    // Create a new table instance
                    const table = new Table({
                        head: ['id', 'name'],
                        colWidths: [10, 30] // Adjust column widths as needed
                    });

                    results.forEach(row => {
                        table.push([row.id, row.name]);
                    });

                    // Print the table to the console
                    console.log(table.toString());

                }

                init();

            });

            break;
        case 'View All Roles':
            db_table = 'role';
            db.query(`SELECT * FROM ${db_table}`, function (err, results) {
                if (err) {
                    console.error(err);
                } else {
                    // Create a new table instance
                    const table = new Table({
                        head: ['id', 'title', 'salary', 'department_id'],
                        colWidths: [10, 30, 30, 30] // Adjust column widths as needed
                    });

                    results.forEach(row => {
                        table.push([row.id, row.name]);
                    });

                    // Print the table to the console
                    console.log(table.toString());

                }

                init();
            });

            break;
        case 'View All Employees':
            db_table = 'employee';
            db.query(`SELECT * FROM ${db_table}`, function (err, results) {
                if (err) {
                    console.error(err);
                } else {
                    // Create a new table instance
                    const table = new Table({
                        head: ['id', 'first_name', 'last_name', 'role_id', 'manager_id'],
                        colWidths: [10, 30, 30, 30, 30] // Adjust column widths as needed
                    });

                    results.forEach(row => {
                        table.push([row.id, row.name]);
                    });

                    // Print the table to the console
                    console.log(table.toString());

                }

                init();
            });

            break;


        default:
            break;
    }



}

init();
