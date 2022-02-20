const db = require("../db/connection")
const cTable = require('console.table')

class Department {
    constructor() {}

    viewAllDepartments() {
        const sql = `SELECT * FROM department`;

        return db.query(sql, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.log("\nDepartments:")
            const table = cTable.getTable(rows)
            console.log(table)
            return rows
        });
    }

    addADepartment(name) {
        const sql = `INSERT INTO department(name)
                    VALUES(?)`;

        db.query(sql, name, (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            console.log(`\n${name} department added!\n`)
        });
    }
}



module.exports = Department
