const db = require("../db/connection")
const cTable = require('console.table')

class Role {
    constructor() { }

    viewAllRoles() {
        const sql = `
            SELECT  r.id, r.title AS job_title, d.name AS department_name, r.salary
            FROM  role r 
            LEFT JOIN department d ON r.department_id = d.id;
        `;

        db.query(sql, (err, rows) => {
            if (err) {
                console.log(err)
            }
            console.log("\nRoles:")
            const table = cTable.getTable(rows)
            console.log(table)
        });
    }

    addARole(roleName, roleSalary, roleDepartment) {
        const sql = `INSERT INTO role(title, salary, department_id)
        VALUES(?,?,?)`;
        const params = [roleName, roleSalary, roleDepartment]

        db.query(sql, params, (err, rows) => {
            if (err) {
                console.log(err)
            }
            console.log(`\n${roleName} added as a role!\n`)
        });
    }


}


module.exports = Role