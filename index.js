// packges needed
const fs = require("fs");
const inquirer = require("inquirer");
// const PORT =3007;

//area of questions for managers input

let productionTeam = []

const coreQuestion = [
    {
        type:'input',
        message: 'What is your name?',
        name:'name'
    },
    {
        type:'input',
        message: 'What is your id number?',
        name:'id'
    },
    {
        type:'input',
        message: 'What is your email?',
        name:'email'
    },
    {
        type:'list',
        message: 'What is your role?',
        name:'role',
        choices:[ "manager", "intern", "engineer"]
    }
]
const managerQuestion =[
    {
        type:'input',
        message: 'What is your office number?',
        name:'oficeNum'
    }
]

const engineerQuestion =[
    {
        type:'input',
        message: 'What school did you go to?',
        name:'school'
    }
]

const interQuestions = [
    {   type:'input',
        message: 'What is your github username',
        name:'github'}
]

function companyPrompt(){
    console.log("Please fill out teams info:");
    inquirer
        .prompt(coreQuestion).then(function(data){
            console.log(data);
            if(data.role==="manager"){
                inquirer
                    .prompt(managerQuestion).then(function(managerData){
                        console.log(managerData)
                    })
            }
            //continue conidtional statemnt for two list options
        })

};

function addAnother(){
    //this will be another inquier function for the user to add more functions
}

function createNewManager(data, managerData){
    // figure out how to create new manager object to push into prodcution team array
}


function createNewIntern(){
    
}

function createNewEngineer(){
    
}



companyPrompt();









//function to write file
// function renderPage(res, name) {
//     fs.readFile(`${_dirname}${name}.html`, (err, content) => {
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     res.end(content);
//     })
// }

// const server = http.createServer((req, res) => {
//     const path = req.url;

//     switch(path) {
//         case '/Employee':
//             renderPage(res, 'employee')
//     }
//     switch(path) {
//         case '/Inern':
//             renderPage(res, 'intern')
//     }
//     switch(path) {
//         case '/Manager':
//             renderPage(res, 'manager')
//     }

// });