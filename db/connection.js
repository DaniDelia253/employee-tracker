const mysql = require('mysql2');
//Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '*San253*',
        database: 'company'
    },
)

module.exports = db;