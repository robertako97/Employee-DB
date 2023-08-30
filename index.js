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
        console.log(userInput);

        const db_table = await THE_if_func(userInput);
        console.log(db_table);

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

            // Close the database connection
            db.end();
        });

    } catch (error) {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
        } else {
            console.error('Something else went wrong', error);
        }
    }
}
init();
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
///////
async function THE_if_func(userInput){
    let db_table ='';


    if ( userInput.initiate =='View All Departments') {
        db_table = 'department';

    }
    return db_table;

    console.log(db_table);

}
//////

