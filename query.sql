SELECT *
FROM employee
JOIN role 
ON role.id = .employee.id;
JOIN department ON role.department = department.id;

SELECT *
FROM department
JOIN role
  ON department.id = role.department
JOIN employee
  ON employee.manager_id = role.department_id;