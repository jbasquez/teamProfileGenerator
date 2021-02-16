// packges needed
const fs = require("fs");
const inquirer = require("inquirer");
const PORT =3007;

//area of questions for managers input
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
//function to write file
function renderPage(res, name) {
    fs.readFile(`${_dirname}${name}.html`, (err, content) => {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end(content);
    })
}

const server = http.createServer((req, res) => {
    const path = req.url;

    switch(path) {
        case '/Employee':
            renderPage(res, 'employee')
    }
    switch(path) {
        case '/Inern':
            renderPage(res, 'intern')
    }
    switch(path) {
        case '/Manager':
            renderPage(res, 'manager')
    }

});