const inquirer = require('inquirer')

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
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
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

const addADepartmentPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: "What is the name of the department?"
        }
    ]).then(response => {
        addADepartment(response.departmentName)
    })
}

const addARolePrompt = () => {
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
            type: 'input',
            name: 'roleDepartment',
            message: "What department is this role in?"
            ////figure out how to list managers!!!!!
        }
    ]).then(response => {
        const {roleName, roleSalary, roleDepartment} = response;
        addARole(roleName, roleSalary, roleDepartment)
    })
}

const AddAnEmployeePrompt = () => {
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
            type: 'input',
            name: 'role',
            message: "What is the employee's role?"
        },
        {
            type: 'input',
            name: 'manager',
            message: "Who is the employee's manager?"
            ////figure out how to list managers!!!
        }
    ]).then(response => {
        const {firstName, lastName, role, manager} = response;
        AddAnEmployee(firstName, lastName, role, manager)
    })
}

const UpdateAnEmployeeRolePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeToUpdate',
            message: "Which employee would you like to update?"
            ////figure out how to list employees!!!
        },
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
            type: 'input',
            name: 'role',
            message: "What is the employee's role?"
        },
        {
            type: 'input',
            name: 'manager',
            message: "Who is the employee's manager?"
        }
    ]).then(response => {
        const {employeeToUpdate, firstName, lastName, role, manager} = response;
        AddAnEmployee(employeeToUpdate, firstName, lastName, role, manager)
    })

}

module.exports = promptUser