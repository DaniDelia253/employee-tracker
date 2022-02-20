const inquirer = require('inquirer')
const Department = require('./Department')
const Role = require('./Role')
const Employee = require('./Employee')
const db = require("../db/connection")



const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "options",
                message: "What would you like to do?",
                choices: [
                    "View all departments",
                    "View all roles",
                    "View all employees",
                    "Add a department",
                    "Add a role",
                    "Add an employee",
                    "Update an employee role"
                ]
            }
        ]).then(response => {
            console.log(response.options)
            switch (response.options) {
                case "View all departments":
                    new Department().viewAllDepartments();
                    delayedPrompt();
                    break;
                case "View all roles":
                    new Role().viewAllRoles();
                    delayedPrompt();
                    break;
                case "View all employees":
                    new Employee().viewAllEmployees();
                    delayedPrompt();
                    break;
                case "Add a department":
                    addADepartmentPrompt();
                    break;
                case "Add a role":
                    addARolePrompt();
                    break;
                case "Add an employee":
                    AddAnEmployeePrompt();
                    break;
                case "Update an employee role":
                    UpdateAnEmployeeRolePrompt();
                    break;
            }
        })
}

const delayedPrompt = () => {
    setTimeout(() => {
        promptUser();
    }, 500);
}

const addADepartmentPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: "What is the name of the department?"
        }
    ]).then(response => {
        new Department().addADepartment(response.departmentName)
    }).then(delayedPrompt)
}

const addARolePrompt = () => {
    const namesArr = []
    const getDepartmentNames = () => {
        db.query(`SELECT * FROM department`, (err, rows) => {
            if (err) {
                console.log(err)
            }
            const names = Object.values(JSON.parse(JSON.stringify(rows)));
            return names.forEach(item => { namesArr.push({ name: item.name, value: item.id }) })
        })
    }
    getDepartmentNames()
    return inquirer.prompt([
        {
            type: 'input',
            name: 'roleName',
            message: "What is the name of the role?"
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: "What is the salary for this role?"
        },
        {
            type: 'list',
            name: 'roleDepartment',
            message: `Which department is this role in?`,
            choices: namesArr
        }
    ]).then(response => {
        const { roleName, roleSalary, roleDepartment } = response;
        new Role().addARole(roleName, roleSalary, roleDepartment)
    }).then(delayedPrompt)
}

const AddAnEmployeePrompt = () => {
    const roleArr = []
    const getRoleNames = () => {
        db.query(`SELECT * FROM role`, (err, rows) => {
            if (err) {
                console.log(err)
            }
            const names = Object.values(JSON.parse(JSON.stringify(rows)));
            return names.forEach(item => { roleArr.push({ name: item.title, value: item.id }) })
        })
    }
    getRoleNames()


    const namesArr = []
    const getManagerNames = () => {
        db.query(`SELECT * FROM employee WHERE role_id = 1`, (err, rows) => {
            if (err) {
                console.log(err)
            }
            const names = Object.values(JSON.parse(JSON.stringify(rows)));
            return names.forEach(item => { namesArr.push({ name: item.first_name + ' ' + item.last_name, value: item.id }) })
        })
    }
    getManagerNames()
    return inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: "What is the employee's first name?"
        },
        {
            type: 'input',
            name: 'lastName',
            message: "What is the employee's last name?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: roleArr
        },
        {
            type: 'list',
            name: 'manager',
            message: `Who is this employee's manager?`,
            choices: namesArr
        }
    ]).then(response => {
        const { firstName, lastName, role, manager } = response;
        new Employee().AddAnEmployee(firstName, lastName, role, manager)
    }).then(delayedPrompt)
}

const UpdateAnEmployeeRolePrompt = () => {

    const updateArr = []
    const getUpdateName = () => {
        db.query(`SELECT * FROM employee`, (err, rows) => {
            if (err) {
                console.log(err)
            }
            const names = Object.values(JSON.parse(JSON.stringify(rows)));
            return names.forEach(item => { updateArr.push({ name: item.first_name + ' ' + item.last_name, value: item.id }) })
        })
    }
    getUpdateName()


    const roleArr = []
    const getRoleNames = () => {
        db.query(`SELECT * FROM role`, (err, rows) => {
            if (err) {
                console.log(err)
            }
            const roles = Object.values(JSON.parse(JSON.stringify(rows)));
            return roles.forEach(item => { roleArr.push({ name: item.title, value: item.id }) })
        })
    }
    getRoleNames()


    setTimeout(() => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'employeeToUpdate',
                message: "Which employee would you like to update?",
                choices: updateArr
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's new role?",
                choices: roleArr
            }
        ]).then(response => {
            const { employeeToUpdate, role } = response;
            new Employee().updateAnEmployee(employeeToUpdate, role)
        }).then(delayedPrompt)

    }, 500);
}

module.exports = promptUser