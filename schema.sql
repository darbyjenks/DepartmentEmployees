DROP DATABASE IF EXISTS departmentEmployees_db;
CREATE DATABASE departmentEmployees_db;

USE departmentEmployees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY (id),
    name VARCHAR(30) NULL
);

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY(id),
    title VARCHAR(30) NULL,
    salary DECIMAL
    department_id INT,
    FOREIGN KEY (id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY(id),
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (department)
    REFERENCES role(id)
    ON DELETE SET NULL
);
