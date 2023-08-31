DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY AUTO_INCREMENT (id)
);

CREATE TABLE role (
    id INT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(6,2),
    department_id INT,
    PRIMARY KEY AUTO_INCREMENT (id),
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);


CREATE TABLE employee (
        id INT NOT NULL,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        role_id INT,
        manager_id INT,
        PRIMARY KEY AUTO_INCREMENT (id),
        FOREIGN KEY (role_id)
        REFERENCES role(id)
        ON DELETE NO ACTION,
        FOREIGN KEY (manager_id)
        REFERENCES employee(id)

);

ALTER TABLE role
MODIFY COLUMN salary DECIMAL(9, 2);