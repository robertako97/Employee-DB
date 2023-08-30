const fs = require('fs');
const index = require('inquirer');

async function inquirer_init() {
    const answers = await index.prompt([
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

async function init (){

    try {
        const userInput = await inquirer_init();
        console.log(userInput);
    } catch (error) {
        if (error.isTtyError) {
            console.error("Prompt couldn't be rendered in the current environment");
        } else {
            console.error('Something else went wrong', error);
        }
    }

}
init();
