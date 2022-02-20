const db = require("../db/connection")
const cTable = require('console.table')

class Employee {
    constructor() { }

    viewAllEmployees() {
        const sql = `
            SELECT  e.id, e.first_name, e.last_name, r.title AS job_title, d.name AS department, r.salary, CONCAT(m.first_Name, ' ', m.last_Name) AS manager
            FROM  employee e 
            JOIN role r ON e.role_id = r.id
            JOIN department d ON r.department_id = d.id
            JOIN employee m ON (e.manager_id = m.id);
        `;

        db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.log("\nEmployees:")
            const table = cTable.getTable(rows)
            console.log(table)
        });
    }

    AddAnEmployee(firstName, lastName, role, manager) {
        const sql = `INSERT INTO employee(first_name, last_name, role_id, manager_id)
        VALUES(?,?,?,?)`;
        const params = [firstName, lastName, role, manager]

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log(err)
            }
            console.log(`\n${firstName + lastName} added as an employee!\n`)
        });
    }

    updateAnEmployee(employeeToUpdate, role) {
        const sql = `update employee
        set  role_id=?
        where id=?;`;
        const params = [role, employeeToUpdate]

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log(err)
            }
            console.log(`\nEmployee updated!\n`)
        });
    }

}


module.exports = Employee