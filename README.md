

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/robertako97/employee-db?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/robertako97/employee-db?style=flat&logo=appveyor) 

https://github.com/robertako97/employee-db
# Employee DB
### Description
This application is a local demonstration of how does SQL is useful for managing data, creating an environment with `NODE`, we can create a dynamic and intuitive project to input, remove, alter and see data.

## Table of Contents
 * [Installation](#installation) 
  * [Usage](#usage) 
 * [Contributing](#contributing) 
 * [Testing](#testing)
 

### Installation
*Steps required to install project and how to get the development environment running:*

Clone the repo, and alter next code in the index.js file to match your mysql credentials: 

```md
const db = mysql.createConnection(
{
host: 'localhost',
user: 'root',
password: '',
database: 'employee_db'
},
console.log(`Connected to the employee_db database.`)
);
```
*PLEASE MAKE SURE YOU HAVE YOUR NPMS AND MYSQL INSTALLED BEFORE RUNNING*

### Usage
*Instructions and examples for use:*

Please follow instructional video in the `Repo` to see how to use application.

### Contributing
*If you would like to contribute, you can follow these guidelines for how to do so:*

Feel free to fork and contribute new features! We will add some extra features in the next update as deletion and filtering.

### Features
We are using `Node.js` environment to interact with the DB, we used some NPMs as `MYSQL2`, `EXPRESS`, `INQUIRER` and `CLI-TABLE`. Express and mysql2 help us to create a connection with mysql in the local host and to be able to send querys to manage the data. Inquirer support user inputs and prompts in the terminal while cli-table gives us a nice display for our DB information.

### Testing
*Tests for application and how to run them:* 

N/A

This project is licensed under the Unlicense License.

[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://opensource.org/license/unlicense/)



#### Want to contact me?

GITHUB:

robertako97
 
https://api.github.com/users/robertako97

EMAIL: 

roberto.diazgmx@gmail.com

