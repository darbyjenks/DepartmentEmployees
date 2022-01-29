INSERT INTO department (name)
VALUES ("Finance"),
       ("Supply Chain"),
       ("Accounting"),
       ("Warehouse");

INSERT INTO role (title, salary, department_id)
VALUES ("Pricing Analyst", 80000, 1),
       ("Picker", 40000, 4),
       ("Acounting Manager", 110000, 3),
       ("Risk Analyst", 90000, 4),
       ("Data Analyst", 75000, 2),
       ("Procurement Analyst", 55000, 2),
       ("Content Analyst", 63000, 2);
       ("Accounts recievable Analyst", 64000, 3)

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John', 'Doe', 1, 1),
       ('Jane', 'Doe', 2, 3),
       ('Kevin', 'Doe', 3, 3),
       ('Christine', 'Doe', 4, NULL),
       ('Alyssa', 'Doe', 5, 5),
       ('Darby', 'Doe', 6, 5),
       