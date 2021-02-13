// packges needed
const fs = require("fs");
const inquirer = require("inquirer");

const list = [
    {
        type:'input',
        message: 'What is the team manager name?',
        name:'teamManager'
    },
    {
        type: 'input',
        message: 'What is the managers id number',
        name: 'managerIdNumber'
    },
    {
        type: 'input',
        message: 'What is the team managers email address',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'What is the team managers github username?',
        name: 'managerGithub'
    },
    {
        type: 'input',
        message: 'Managers office number',
        name: 'managersNum'
    },

]