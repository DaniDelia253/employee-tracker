DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS department;

CREATE TABLE department (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(40) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INTEGER NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER NOT NULL,
  manager_id INTEGER,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
);



-- all for employees
-- ******************************************
-- SELECT  e.*, r.title, d.name 
-- FROM  employee e 
-- LEFT JOIN role r ON e.role_id = r.id 
-- LEFT JOIN department d ON r.department_id = d.id;



-- //id, title, dept, slary
-- SELECT  r.id, r.title AS job_title, d.name AS department_name, r.salary
-- FROM  role r 
-- LEFT JOIN department d ON r.department_id = d.id;



-- //id, first name, last name, job title, department, slary, CONCAT(m.first_Name, '', m.last_Name) AS manager,
-- -- SELECT  e.id, e.first_name, e.last_name, r.title AS job_title, d.name AS department, r.salary, CONCAT(m.first_Name, ' ', m.last_Name) AS manager
-- SELECT  e.id, e.first_name, e.last_name, r.title AS job_title, d.name AS department, r.salary, CONCAT(m.first_Name, ' ', m.last_Name) AS manager
-- FROM  employee e 
-- JOIN role r ON e.role_id = r.id
-- JOIN department d ON r.department_id = d.id
-- JOIN employee m ON (e.manager_id = m.id);