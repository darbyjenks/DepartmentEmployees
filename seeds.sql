USE departmentEmployees_db;

INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Supply Chain");
INSERT INTO department (name)
VALUES ("Accounting");
INSERT INTO department (name)
VALUES ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES ("Pricing Analyst", 80000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Picker", 40000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Acounting Manager", 110000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Risk Analyst", 90000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Data Analyst", 75000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Procurement Analyst", 55000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Content Analyst", 63000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Accounts recievable Analyst", 64000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jane', 'Doe', 2, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Kevin', 'Doe', 3, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Christine', 'Doe', 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Alyssa', 'Doe', 5, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Darby', 'Doe', 6, 5);
       